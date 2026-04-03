Branch: simba/implement-the-physical-alert-bridge-in-srcalerts
Title: Implement the 'Physical Alert Bridge' in src/alerts/print-by-dd-link....

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Physical Alert Bridge' in src/alerts/print-by-dd-link.js. When Vora identifies a high-probability blowout risk (>90%), the system must automatically generate a 3D-printable "Hazard Tag" or "QR-Alert Token" manifest for the PrintByDD interface.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.