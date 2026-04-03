Branch: simba/develop-the-alert-escalation-service-in-srcalert
Title: Develop the 'Alert Escalation' service in src/alerts/escalation-logic...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Develop the 'Alert Escalation' service in src/alerts/escalation-logic.js. [span_21](start_span)When the TPM model detects a 40% under-inflation blowout risk[span_21](end_span), the system must generate a structured context-engineered alert and send it to the 'Sprint Master' Telegram bot for human verification.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.