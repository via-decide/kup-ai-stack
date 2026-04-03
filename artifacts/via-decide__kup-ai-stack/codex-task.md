You are working in repository via-decide/kup-ai-stack on branch main.

MISSION
Implement the 'Cloud-Agnostic-Adapter' in src/ops/multi-cloud.js. Abstract the LLM calls into a single SovereignRequest() function.

CONSTRAINTS
- Implement 'Hot-Swapping' logic that switches providers in <50ms based on 'Cost-per-Token' and 'Latency.' - Maintain the ₹36.75 efficiency target regardless of the provider. - Log "PROVIDER_SWITCHED: [OLD_PROVIDER] -> [NEW_PROVIDER]".

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
- Primary language: Shell
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