Branch: simba/build-the-sovereign-firewall-in-srcsecuritywarde
Title: Build the 'Sovereign Firewall' in src/security/warden.sh. Implement a...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Build the 'Sovereign Firewall' in src/security/warden.sh. Implement a rate-limiting rule that drops any IP making >100 requests per minute unless they carry a 'Founder-Key.'

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.