Repair mode for repository via-decide/kup-ai-stack.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Build the 'Drift Analyzer' module in src/analytics/drift-engine.js. This module must compare the ground-truth data from the digital twin against the LLM/Model predictions. [span_9](start_span)It must specifically calculate the accuracy drop for every 5°C increase between 20°C and 48°C[span_9](end_span). [span_10](start_span)[span_11](start_span)constraints: Output the results in a CSV format ready for AAAI/NeurIPS paper submission[span_10](end_span)[span_11](end_span). [span_12](start_span)[span_13](start_span)Ensure the "Context Rot" detection logic is active during these high-temperature simulations[span_12](end_span)[span_13](end_span).

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