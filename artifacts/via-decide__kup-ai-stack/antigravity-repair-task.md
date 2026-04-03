Repair mode for repository via-decide/kup-ai-stack.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Implement the 'Vora Protocol Tuner' in src/training/vora-finetune.py. Create a pipeline to fine-tune the local Vora model on the 'Scenario 2' failure datasets. [span_4](start_span)It must prioritize high-accuracy interpretation of structured JSON sensor payloads over conversational prose[span_4](end_span). [span_5](start_span)constraints: The model must achieve >90% accuracy in identifying sensor drift specifically between 20°C and 48°C[span_5](end_span). [span_6](start_span)Use the Sovereign theme to log "VORA RE-PROTOCOLING: DATA-CENTRIC WEIGHTS APPLIED"[span_6](end_span).

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