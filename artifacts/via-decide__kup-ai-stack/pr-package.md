Branch: simba/implement-the-cloud-agnostic-adapter-in-srcopsmu
Title: Implement the 'Cloud-Agnostic-Adapter' in src/ops/multi-cloud.js. Abs...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Cloud-Agnostic-Adapter' in src/ops/multi-cloud.js. Abstract the LLM calls into a single SovereignRequest() function.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.