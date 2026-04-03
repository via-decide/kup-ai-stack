Branch: simba/create-the-context-refinery-agent-template-in-sr
Title: Create the 'Context-Refinery' Agent Template in src/templates/refiner...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Create the 'Context-Refinery' Agent Template in src/templates/refinery-agent.json. This agent's sole purpose is to "Pre-Process" raw JSON sensor packets. It must strip out non-essential metadata (e.g., redundant timestamps, sensor IDs) and only pass the "High-Signal" delta (pressure/temp changes) to the Vora model.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.