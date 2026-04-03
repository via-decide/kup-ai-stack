Branch: simba/build-the-alert-refiner-in-srcalertscontext-engi
Title: Build the 'Alert Refiner' in src/alerts/context-engine.js. Update the...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Build the 'Alert Refiner' in src/alerts/context-engine.js. Update the alert pipeline to inject high-signal metadata: include current ambient temperature, vehicle speed, and a "Confidence Interval" ($CI$) for the blowout prediction.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.