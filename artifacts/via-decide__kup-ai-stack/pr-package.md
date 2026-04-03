Branch: simba/implement-the-daxini-app-packager-in-srcdistapp-
Title: Implement the 'Daxini App Packager' in src/dist/app-packager.js. Crea...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Daxini App Packager' in src/dist/app-packager.js. Create a service that bundles a founder's 'Context-Engineered' model into a standardized micro-app manifest for Daxini.Space.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.