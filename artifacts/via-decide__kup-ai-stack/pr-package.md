Branch: simba/implement-the-self-healing-fleet-monitor-in-srco
Title: Implement the 'Self-Healing Fleet Monitor' in src/ops/self-heal.js. D...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Self-Healing Fleet Monitor' in src/ops/self-heal.js. Develop a service that monitors the health of all 20+ highway lanes. [span_17](start_span)If a Jetson Orin node reports a "Context Rot" or "Training-Serving Skew" anomaly, the system must automatically trigger a remote re-calibration using the digital twin's ground truth. [cite: 5, 21-22]

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.