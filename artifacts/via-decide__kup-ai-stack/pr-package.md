Branch: simba/build-the-drift-analyzer-module-in-srcanalyticsd
Title: Build the 'Drift Analyzer' module in src/analytics/drift-engine.js. T...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Build the 'Drift Analyzer' module in src/analytics/drift-engine.js. This module must compare the ground-truth data from the digital twin against the LLM/Model predictions. [span_9](start_span)It must specifically calculate the accuracy drop for every 5°C increase between 20°C and 48°C[span_9](end_span). [span_10](start_span)[span_11](start_span)constraints: Output the results in a CSV format ready for AAAI/NeurIPS paper submission[span_10](end_span)[span_11](end_span). [span_12](start_span)[span_13](start_span)Ensure the "Context Rot" detection logic is active during these high-temperature simulations[span_12](end_span)[span_13](end_span).

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.