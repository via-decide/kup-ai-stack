Branch: simba/build-the-collapse-injector-in-srcenginescenario
Title: Build the 'Collapse Injector' in src/engine/scenario-two-logic.js. [s...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Build the 'Collapse Injector' in src/engine/scenario-two-logic.js. [span_7](start_span)This script must deliberately inject "Production Noise" (packet loss, sensor vibration, and 48°C heat) into the data stream, specifically designed to drop model accuracy below the 80% threshold[span_7](end_span). [span_8](start_span)constraints: When active, the 'Scenario Simulator' agent must trigger an alert to the founders stating: "SCENARIO 2 DETECTED: MODEL COLLAPSE IMMINENT. IMPLEMENT DRIFT MITIGATION"[span_8](end_span).

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.