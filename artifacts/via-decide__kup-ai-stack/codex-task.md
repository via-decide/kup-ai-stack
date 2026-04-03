You are working in repository via-decide/kup-ai-stack on branch main.

MISSION
Build the 'Chaos-Monkey' stress-tester in src/security/adversarial-inject.js. Simulate a 'Man-in-the-Middle' attack injecting false 60 PSI readings into the NH-41 stream.

CONSTRAINTS
- The system must flag these as 'NON-PHYSICAL_DRIFT' because $dP/dt$ exceeds the laws of thermodynamics. - Log "ATTACK NEUTRALIZED: [REASON]" in the Sovereign theme. - Ensure the 'Governor-Agent' alerts all 30 nodes of the signature.

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