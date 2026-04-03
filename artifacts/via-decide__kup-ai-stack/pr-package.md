Branch: simba/implement-a-github-actions-workflow-in-githubwor
Title: Implement a GitHub Actions workflow in .github/workflows/sovereign-ga...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement a GitHub Actions workflow in .github/workflows/sovereign-gate.yml. This workflow must run every time a founder submits a PR. It should: 1) Run a linter to check for 'Context Rot' patterns, 2) Verify that new code doesn't increase inference latency by >5%, and 3) Ensure all new environment variables are documented.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.