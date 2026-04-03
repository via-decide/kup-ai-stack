You are working in repository via-decide/kup-ai-stack on branch main.

MISSION
Build the 'Drift Mitigator' in src/engine/kalman-filter.js. Implement a 1D Kalman Filter to estimate the hidden state of tire pressure.

CONSTRAINTS
- Use the standard update equation: $\hat{x}_k = \hat{x}_{k-1} + K_k(z_k - \hat{x}_{k-1})$, where $K_k$ is the Kalman Gain. - The 'Edge Architect' agent must verify that the filter reduces "Scenario 2" variance by >60% without adding >10ms of latency to the Jetson Orin.

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