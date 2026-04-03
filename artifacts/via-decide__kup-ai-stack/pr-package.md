Branch: simba/implement-the-hysteresis-state-machine-in-srceng
Title: Implement the 'Hysteresis State-Machine' in src/engine/alert-logic.js...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Hysteresis State-Machine' in src/engine/alert-logic.js. Create a buffer that requires 3 consecutive 'CRITICAL' readings from the Kalman Filter before firing a global alert.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.