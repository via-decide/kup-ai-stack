Branch: simba/build-the-chaos-monkey-stress-tester-in-srcsecur
Title: Build the 'Chaos-Monkey' stress-tester in src/security/adversarial-in...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Build the 'Chaos-Monkey' stress-tester in src/security/adversarial-inject.js. Simulate a 'Man-in-the-Middle' attack injecting false 60 PSI readings into the NH-41 stream.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.