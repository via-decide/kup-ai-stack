You are working in repository via-decide/kup-ai-stack on branch main.

MISSION
Create the 'Quality Reviewer' Agent Template in src/templates/code-reviewer.json. Configure the LLM to act as a Senior MLOps Engineer. [span_9](start_span)[span_10](start_span)It must scan every PR for "Data Pollution" (e.g., hardcoded values, lack of drift detection, or poor JSON structuring)[span_9](end_span)[span_10](end_span).

CONSTRAINTS
The agent must reject any code that treats AI as a "Chatbot" rather than "Infrastructure." [span_11](start_span)[span_12](start_span)It must demand "Context-Engineered" alerts for every model output[span_11](end_span)[span_12](end_span).

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