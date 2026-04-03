Repair mode for repository via-decide/kup-ai-stack.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement the 'Self-Healing Fleet Monitor' in src/ops/self-heal.js. Develop a service that monitors the health of all 20+ highway lanes. [span_17](start_span)If a Jetson Orin node reports a "Context Rot" or "Training-Serving Skew" anomaly, the system must automatically trigger a remote re-calibration using the digital twin's ground truth. [cite: 5, 21-22]

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