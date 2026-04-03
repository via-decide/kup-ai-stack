Branch: simba/build-the-heat-drift-simulator-in-srcsimheat-inj
Title: Build the 'Heat-Drift Simulator' in src/sim/heat-injector.js. Create ...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Build the 'Heat-Drift Simulator' in src/sim/heat-injector.js. Create an API that takes a baseline sensor reading and applies the "Scenario 2" drift coefficient (based on the 20°C to 48°C data-drift findings).

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.