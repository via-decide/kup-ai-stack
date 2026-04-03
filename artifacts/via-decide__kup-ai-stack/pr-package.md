Branch: simba/create-the-pipeline-enforcer-agent-template-in-s
Title: Create 'The Pipeline Enforcer' Agent Template in src/templates/pipeli...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Create 'The Pipeline Enforcer' Agent Template in src/templates/pipeline-enforcer.json. Program the LLM to act as a Senior Data Quality Engineer managing the centralized feature store and context engine.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.