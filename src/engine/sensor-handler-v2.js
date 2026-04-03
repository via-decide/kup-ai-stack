'use strict';
/**
 * SOVEREIGN SENSOR HANDLER v2 — KUP Week 3 Scenario 2
 * Thermal-Aware Kalman Filter + Gay-Lussac Thresholds + Hysteresis
 *
 * CompactPayload: 68 bytes fixed — 90% token savings vs legacy JSON blob
 * Latency target: <10ms per packet
 * Accuracy target: >92% at 48°C ambient (321.15 K)
 */

// ─── PHYSICAL CONSTANTS ────────────────────────────────────────────────────
const P_REF_PSI    = 30.0;       // Baseline pressure at T_REF
const T_REF_K      = 293.15;     // 20°C in Kelvin
const T_KUTCH_K    = 321.15;     // 48°C Kutch ambient ceiling

// ─── KALMAN FILTER PARAMS ──────────────────────────────────────────────────
// Tuned for 48°C sensor drift profile (MEMS piezo-resistive, 0.05 PSI/°C)
const Q = 0.20;    // Process noise covariance — tuned for fast recovery after
                   // anomaly→healthy state transitions at 48°C (Kutch profile)
const R = 0.50;    // Measurement noise covariance (sensor ADC noise)

// ─── HYSTERESIS CONFIG (3-step) ────────────────────────────────────────────
// Prevents alert chattering: alert fires only after ALERT_RISE consecutive
// anomaly readings, clears only after ALERT_FALL consecutive normal readings.
const ALERT_RISE   = 3;   // consecutive anomaly readings → ALERT ON
const ALERT_FALL   = 3;   // consecutive normal readings  → ALERT CLEAR

// ─── COMPACT PAYLOAD SCHEMA (68 bytes) ─────────────────────────────────────
// Offset  Size  Field
//   0      8    vid        (BigUInt64LE — vehicle ID)
//   8      4    p_est      (Float32LE  — Kalman-estimated pressure, PSI)
//  12      4    p_thresh   (Float32LE  — Gay-Lussac dynamic threshold, PSI)
//  16      4    drift      (Float32LE  — raw - estimated, signed)
//  20      4    temp_k     (Float32LE  — sensor temperature in Kelvin)
//  24      1    alert      (UInt8      — 0=OK 1=ALERT 2=RECOVERING)
//  25      1    hyst_ctr   (UInt8      — hysteresis counter, debug)
//  26      2    seq        (UInt16LE   — rolling packet sequence)
//  28     40    reserved   (zeros — padding to 68 bytes for fixed framing)
// Total: 68 bytes
const PAYLOAD_BYTES = 68;

// ─── PER-VEHICLE STATE STORE ───────────────────────────────────────────────
// Map<vid_string, { x_hat, P_cov, alert_state, rise_count, fall_count, seq }>
const vehicleState = new Map();

function getState(vid) {
  if (!vehicleState.has(vid)) {
    vehicleState.set(vid, {
      x_hat:       P_REF_PSI,  // prior state estimate
      P_cov:       1.0,        // prior error covariance
      alert_state: 0,          // 0=OK, 1=ALERT, 2=RECOVERING
      rise_count:  0,
      fall_count:  0,
      seq:         0,
    });
  }
  return vehicleState.get(vid);
}

// ─── GAY-LUSSAC DYNAMIC THRESHOLD ─────────────────────────────────────────
// P_threshold(T) = P_ref × (T_actual_K / T_ref_K)
// At 48°C (321.15 K): threshold = 30.0 × (321.15 / 293.15) ≈ 32.87 PSI
function gayLussacThreshold(temp_k) {
  return P_REF_PSI * (temp_k / T_REF_K);
}

// ─── 1D KALMAN FILTER (full P propagation, not fixed-gain) ────────────────
// Predict: x_hat_k|k-1 = x_hat_k-1,  P_k|k-1 = P_k-1 + Q
// Update:  K_k = P_k|k-1 / (P_k|k-1 + R)
//          x_hat_k = x_hat_k|k-1 + K_k * (z_k - x_hat_k|k-1)
//          P_k     = (1 - K_k) * P_k|k-1
function kalmanUpdate(state, z_measurement) {
  // Predict
  const P_pred = state.P_cov + Q;
  // Update
  const K = P_pred / (P_pred + R);
  state.x_hat = state.x_hat + K * (z_measurement - state.x_hat);
  state.P_cov = (1 - K) * P_pred;
  return state.x_hat;
}

// ─── 3-STEP HYSTERESIS STATE MACHINE ──────────────────────────────────────
// Returns: 0 = OK, 1 = ALERT, 2 = RECOVERING
function hysteresisUpdate(state, is_anomaly_now) {
  if (state.alert_state === 0) {
    // Waiting for ALERT_RISE consecutive anomalies
    if (is_anomaly_now) {
      state.rise_count++;
      state.fall_count = 0;
      if (state.rise_count >= ALERT_RISE) {
        state.alert_state = 1;
        state.rise_count  = 0;
      }
    } else {
      state.rise_count = 0;
    }
  } else if (state.alert_state === 1) {
    // Active alert — waiting for ALERT_FALL consecutive normal readings
    if (!is_anomaly_now) {
      state.fall_count++;
      state.rise_count = 0;
      if (state.fall_count >= ALERT_FALL) {
        state.alert_state = 2; // RECOVERING
        state.fall_count  = 0;
      }
    } else {
      state.fall_count = 0;
    }
  } else {
    // RECOVERING — one more normal reading clears to OK
    state.alert_state = is_anomaly_now ? 1 : 0;
    state.fall_count  = 0;
    state.rise_count  = 0;
  }
  return state.alert_state;
}

// ─── COMPACT PAYLOAD ENCODER (68 bytes) ────────────────────────────────────
function encodePayload(vid_num, p_est, p_thresh, drift, temp_k, alert, hyst_ctr, seq) {
  const buf = Buffer.alloc(PAYLOAD_BYTES, 0);
  // vid as BigUInt64 — clamp to safe integer range for JS
  buf.writeBigUInt64LE(BigInt(vid_num) & 0xFFFFFFFFFFFFFFFFn, 0);
  buf.writeFloatLE(p_est,    8);
  buf.writeFloatLE(p_thresh, 12);
  buf.writeFloatLE(drift,    16);
  buf.writeFloatLE(temp_k,   20);
  buf.writeUInt8(alert,      24);
  buf.writeUInt8(hyst_ctr,   25);
  buf.writeUInt16LE(seq & 0xFFFF, 26);
  // bytes 28–67 remain zero (reserved)
  return buf;
}

// ─── MAIN PACKET PROCESSOR ─────────────────────────────────────────────────
/**
 * processPacket(packet) → Buffer(68) | null
 *
 * packet: { p: number, t: number, vid: number|string }
 *   p   — raw pressure reading (PSI)
 *   t   — sensor temperature (°C)
 *   vid — vehicle/sensor ID (integer)
 *
 * Returns 68-byte CompactPayload Buffer when alert_state !== 0 (anomaly or
 * recovering), or null for healthy/OK packets (zero-token heartbeat).
 */
function processPacket(packet) {
  const { p, t, vid } = packet;
  const temp_k   = t + 273.15;
  const vid_key  = String(vid);

  const state    = getState(vid_key);
  state.seq      = (state.seq + 1) & 0xFFFF;

  // 1. Kalman estimate
  const p_est    = kalmanUpdate(state, p);

  // 2. Gay-Lussac dynamic pressure threshold
  const p_thresh = gayLussacThreshold(temp_k);

  // 3. Instantaneous anomaly flag
  const is_anomaly = p_est < p_thresh;

  // 4. Hysteresis decision
  const alert    = hysteresisUpdate(state, is_anomaly);
  const drift    = p - p_est;
  const hyst_ctr = alert === 0 ? state.rise_count
                 : alert === 1 ? state.fall_count
                 : 0;

  // 5. Zero-token return for healthy packets
  if (alert === 0) return null;

  // 6. Encode 68-byte CompactPayload
  return encodePayload(
    Number(vid), p_est, p_thresh, drift, temp_k, alert, hyst_ctr, state.seq
  );
}

// ─── BATCH PROCESSOR (pipeline interface) ──────────────────────────────────
/**
 * processBatch(packets[]) → { payloads: Buffer[], ok_count, alert_count, recover_count }
 */
function processBatch(packets) {
  let ok_count = 0, alert_count = 0, recover_count = 0;
  const payloads = [];

  for (const pkt of packets) {
    const result = processPacket(pkt);
    if (result === null) {
      ok_count++;
    } else {
      const alert_state = result.readUInt8(24);
      if (alert_state === 1) alert_count++;
      else recover_count++;
      payloads.push(result);
    }
  }

  return { payloads, ok_count, alert_count, recover_count };
}

// ─── EXPORTS ───────────────────────────────────────────────────────────────
module.exports = {
  processPacket,
  processBatch,
  gayLussacThreshold,
  kalmanUpdate,
  PAYLOAD_BYTES,
  T_KUTCH_K,
  T_REF_K,
  P_REF_PSI,
};
