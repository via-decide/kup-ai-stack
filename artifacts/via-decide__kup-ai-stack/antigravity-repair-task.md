Repair mode for repository via-decide/kup-ai-stack.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Build the 'Collapse Injector' in src/engine/scenario-two-logic.js. [span_7](start_span)This script must deliberately inject "Production Noise" (packet loss, sensor vibration, and 48°C heat) into the data stream, specifically designed to drop model accuracy below the 80% threshold[span_7](end_span). [span_8](start_span)constraints: When active, the 'Scenario Simulator' agent must trigger an alert to the founders stating: "SCENARIO 2 DETECTED: MODEL COLLAPSE IMMINENT. IMPLEMENT DRIFT MITIGATION"[span_8](end_span).

RULES
1. Audit touched files first and identify regressions.
2. Preserve architecture and naming conventions.
3. Make minimal repairs only; do not expand scope.
4. Re-run checks and provide concise root-cause notes.
5. Return complete contents for changed files only.

SOP: REPAIR PROTOCOL (MANDATORY)
1. Strict Fix Only: Do not use repair mode to expand scope or add features.
2. Regression Check: Audit why previous attempt failed before proposing a fix.
3. Minimal Footprint: Only return contents for the actual repaired files.

REPO CONTEXT
- README snippet:
# kup-ai-stack
- AGENTS snippet:
not found
- package.json snippet:
not found