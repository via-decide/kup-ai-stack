Branch: simba/build-the-regional-profile-manager-in-srcengineg
Title: Build the 'Regional Profile Manager' in src/engine/geo-config.js. All...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Build the 'Regional Profile Manager' in src/engine/geo-config.js. Allow the system to load different $K_{gain}$ and $P_{ref}$ constants based on the Site-ID (e.g., Kutch vs. Himachal).

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.