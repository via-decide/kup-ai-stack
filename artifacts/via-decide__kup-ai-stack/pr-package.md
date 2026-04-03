Branch: simba/implement-the-sovereign-circuit-breaker-in-srcop
Title: Implement the 'Sovereign Circuit Breaker' in src/ops/circuit-breaker....

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Sovereign Circuit Breaker' in src/ops/circuit-breaker.js. Create a state-machine with three states: [CLOSED (Normal)], [OPEN (Local-Only)], and [HALF-OPEN (Test-Cloud)].

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.