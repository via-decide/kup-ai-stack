#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════════════
# KUP SOVEREIGN DEPLOY — Single-Command Hardening Script
# Phase: Week 3 Scenario 2 (Thermal Chaos)
# Usage: bash deploy.sh
# ═══════════════════════════════════════════════════════════════════════════
set -euo pipefail

RED='\033[0;31m'; YLW='\033[0;33m'; GRN='\033[0;32m'; BLU='\033[0;34m'; NC='\033[0m'
banner() { printf "\n${BLU}══  %-44s  ══${NC}\n" "$1"; }
ok()     { echo -e "${GRN}[OK]${NC} $1"; }
warn()   { echo -e "${YLW}[WARN]${NC} $1"; }
die()    { echo -e "${RED}[ABORT]${NC} $1"; exit 1; }

REPO_DIR="${KUP_STACK_DIR:-$HOME/kup-ai-stack}"
BRANCH="claude/thermal-sensor-deployment-fmKHT"

# ─── 1. LOCATE OR CLONE REPO ──────────────────────────────────────────────
banner "STEP 1 — REPO LOCATION"
if [[ -d "${REPO_DIR}/.git" ]]; then
  ok "Found existing repo at ${REPO_DIR}"
else
  warn "No repo at ${REPO_DIR} — attempting clone"
  [[ -n "${KUP_REPO_URL:-}" ]] || die "Set KUP_REPO_URL env var or run from repo root."
  git clone "${KUP_REPO_URL}" "${REPO_DIR}"
  ok "Cloned to ${REPO_DIR}"
fi
cd "${REPO_DIR}"

# ─── 2. BRANCH CHECKOUT ───────────────────────────────────────────────────
banner "STEP 2 — BRANCH CHECKOUT"
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "${CURRENT_BRANCH}" != "${BRANCH}" ]]; then
  if git show-ref --quiet "refs/heads/${BRANCH}"; then
    git checkout "${BRANCH}"
  else
    git checkout -b "${BRANCH}" "origin/${BRANCH}" 2>/dev/null || git checkout -b "${BRANCH}"
  fi
fi
ok "On branch: $(git rev-parse --abbrev-ref HEAD)"

# ─── 3. NODE CHECK ────────────────────────────────────────────────────────
banner "STEP 3 — RUNTIME CHECK"
node --version >/dev/null 2>&1 || die "Node.js not found. Install via: brew install node"
ok "Node: $(node --version)"

# ─── 4. VERIFY HANDLER EXISTS ─────────────────────────────────────────────
banner "STEP 4 — HANDLER VERIFICATION"
HANDLER="src/engine/sensor-handler-v2.js"
[[ -f "${HANDLER}" ]] || die "${HANDLER} missing — run the deploy from the repo root after pulling."

# Quick smoke test: module loads cleanly and threshold matches Gay-Lussac
node -e "
const h = require('./${HANDLER}');
const t_k = 321.15; // 48°C
const thresh = h.gayLussacThreshold(t_k);
const expected = h.P_REF_PSI * (t_k / h.T_REF_K);
if (Math.abs(thresh - expected) > 0.001) process.exit(1);
const pkt = { p: 20.0, t: 48.0, vid: 1 };
const res = h.processPacket(pkt); // may return null due to hysteresis (need 3 hits)
const res2 = h.processPacket(pkt);
const res3 = h.processPacket(pkt);
if (res3 === null) process.exit(2);
if (res3.length !== h.PAYLOAD_BYTES) process.exit(3);
console.log('[SMOKE] Handler OK — threshold=' + thresh.toFixed(4) + ' PSI, payload=' + res3.length + 'B');
"
ok "Handler smoke test passed."

# ─── 5. RUN STRESS TEST ───────────────────────────────────────────────────
banner "STEP 5 — SCENARIO 2 STRESS TEST (1,000 PACKETS @ 48°C)"
mkdir -p artifacts/scenario2
export RESULT_FILE="artifacts/scenario2/latest.json"
bash test-scenario2.sh
ok "Stress test complete. Results → ${RESULT_FILE}"

# ─── 6. DEPLOYMENT SUMMARY ────────────────────────────────────────────────
banner "DEPLOYMENT COMPLETE"
if [[ -f "${RESULT_FILE}" ]]; then
  node -e "
const r = JSON.parse(require('fs').readFileSync('${RESULT_FILE}'));
console.log('  Accuracy       :', r.accuracy_pct + '%');
console.log('  SNR            :', r.snr_db + ' dB');
console.log('  Latency P99    :', r.latency_ms.p99 + ' ms');
console.log('  Tokens saved   :', r.decision_budget.estimated_tokens_saved.toLocaleString());
console.log('  Savings        :', r.decision_budget.savings_pct + '%');
"
fi
echo ""
ok "KUP Scenario 2 hardening deployed on branch: ${BRANCH}"
