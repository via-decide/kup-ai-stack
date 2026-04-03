Branch: simba/implement-the-sovereign-feature-store-in-srcfeat
Title: Implement the 'Sovereign Feature Store' in src/features/store-manager...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Sovereign Feature Store' in src/features/store-manager.js. [span_6](start_span)Create a centralized service that extracts identical vehicle passage features (pressure, temp-drift, speed) for both training (Digital Twin) and serving (Edge Jetson).[span_6](end_span)

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.