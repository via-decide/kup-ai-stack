Branch: simba/implement-the-federated-aggregator-in-srcenginew
Title: Implement the 'Federated-Aggregator' in src/engine/weight-sync.py. Cr...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Federated-Aggregator' in src/engine/weight-sync.py. Create a secure endpoint for founders to push their local .bin weight deltas.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.