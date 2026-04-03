Repair mode for repository via-decide/kup-ai-stack.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Scaffold the 'Edge-as-a-Service' (EaaS) API in src/saas/edge-platform-api.js. Create a multi-tenant architecture that allows external customers to upload their own sensor models for quantization and edge deployment via the Jetson Optimizer.

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