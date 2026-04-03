Branch: simba/implement-the-agent-switchboard-in-srcrouteragen
Title: Implement the 'Agent Switchboard' in src/router/agent-router.js. Crea...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Agent Switchboard' in src/router/agent-router.js. Create a POST /api/playground/chat endpoint that requires an agent_id parameter (e.g., 'edge-architect' or 'pipeline-enforcer'). The router must load the corresponding JSON template from the src/templates/ directory and inject it as the System Prompt for the Zayvora LLM call.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.