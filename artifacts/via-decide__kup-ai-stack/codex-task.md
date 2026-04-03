You are working in repository via-decide/kup-ai-stack on branch main.

MISSION
Implement the 'Sovereign Feature Store' in src/features/store-manager.js. [span_6](start_span)Create a centralized service that extracts identical vehicle passage features (pressure, temp-drift, speed) for both training (Digital Twin) and serving (Edge Jetson).[span_6](end_span)

CONSTRAINTS
Use the Sovereign theme to log feature extraction latency. [span_7](start_span)[span_8](start_span)If the training/serving features deviate by >1%, trigger a 'Skew Alert' to the 'Quality Reviewer' agent.[span_7](end_span)[span_8](end_span)

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