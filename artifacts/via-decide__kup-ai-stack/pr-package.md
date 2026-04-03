Branch: simba/implement-the-m4-resource-warden-in-srcopsload-b
Title: Implement the 'M4 Resource Warden' in src/ops/load-balancer.js. Creat...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'M4 Resource Warden' in src/ops/load-balancer.js. Create a queue system that limits concurrent LLM inference calls to 8 (the number of performance cores). Founders 9-30 should be placed in a "Sovereign Waiting Room" with a 2-second buffer.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.