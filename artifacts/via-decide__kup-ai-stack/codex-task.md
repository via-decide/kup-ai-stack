You are working in repository via-decide/kup-ai-stack on branch main.

MISSION
Implement the 'Agent Switchboard' in src/router/agent-router.js. Create a POST /api/playground/chat endpoint that requires an agent_id parameter (e.g., 'edge-architect' or 'pipeline-enforcer'). The router must load the corresponding JSON template from the src/templates/ directory and inject it as the System Prompt for the Zayvora LLM call.

CONSTRAINTS
Use the "Sovereign" dark-mode theme for terminal logging to show which agent is being invoked. Ensure that the agent's identity is "locked" for the duration of the session to prevent context bleeding between curriculum tasks.

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