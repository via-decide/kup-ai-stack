Branch: simba/implement-the-shadow-mode-comparator-in-srcevals
Title: Implement the 'Shadow Mode Comparator' in src/eval/shadow-runner.js. ...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Shadow Mode Comparator' in src/eval/shadow-runner.js. Create a service that ingests live highway data and runs the 'Sovereign' model in the background. It must log every "Predicted Blowout" and then wait for the ground-truth outcome (or manual sensor verification) to calculate real-world precision and recall.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.