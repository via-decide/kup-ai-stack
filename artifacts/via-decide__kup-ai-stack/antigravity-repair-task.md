Repair mode for repository via-decide/kup-ai-stack.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Create the 'Quality Reviewer' Agent Template in src/templates/code-reviewer.json. Configure the LLM to act as a Senior MLOps Engineer. [span_9](start_span)[span_10](start_span)It must scan every PR for "Data Pollution" (e.g., hardcoded values, lack of drift detection, or poor JSON structuring)[span_9](end_span)[span_10](end_span).

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