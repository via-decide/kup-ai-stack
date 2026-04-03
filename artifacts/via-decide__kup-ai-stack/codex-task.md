You are working in repository via-decide/kup-ai-stack on branch main.

MISSION
Build the 'Drift Analyzer' module in src/analytics/drift-engine.js. This module must compare the ground-truth data from the digital twin against the LLM/Model predictions. [span_9](start_span)It must specifically calculate the accuracy drop for every 5°C increase between 20°C and 48°C[span_9](end_span). [span_10](start_span)[span_11](start_span)constraints: Output the results in a CSV format ready for AAAI/NeurIPS paper submission[span_10](end_span)[span_11](end_span). [span_12](start_span)[span_13](start_span)Ensure the "Context Rot" detection logic is active during these high-temperature simulations[span_12](end_span)[span_13](end_span).

CONSTRAINTS
Preserve existing code; prefer additive changes.

PROCESS (MANDATORY)
1. Read README.md and AGENTS.md before editing.
2. Audit architecture before coding. Summarize current behavior.
3. Preserve unrelated working code. Prefer additive modular changes.
4. Implement the smallest safe change set for the stated goal.
5. Run validation commands and fix discovered issues.
6. Self-review for regressions, missing env wiring, and docs drift.
7. Return complete final file contents for every modified or created file.

REPO AUDIT CONTEXT
- Description: 
- Primary language: unknown
- README snippet:
# kup-ai-stack

- AGENTS snippet:
not found


SOP: PRE-MODIFICATION PROTOCOL (MANDATORY)
1. Adherence to Instructions: No deviations without explicit user approval.
2. Mandatory Clarification: Immediately ask if instructions are ambiguous or incomplete.
3. Proposal First: Always propose optimizations or fixes before implementing them.
4. Scope Discipline: Do not add unrequested features or modify unrelated code.
5. Vulnerability Check: Immediately flag and explain security risks.

OUTPUT REQUIREMENTS
- Include: implementation summary, checks run, risks, rollback notes.
- Generate branch + PR package.
- Keep prompts deterministic and preservation-first.