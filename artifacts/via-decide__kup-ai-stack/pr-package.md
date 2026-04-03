Branch: simba/implement-the-hybrid-brain-router-in-srcopslaten
Title: Implement the 'Hybrid-Brain Router' in src/ops/latency-balancer.js. C...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Hybrid-Brain Router' in src/ops/latency-balancer.js. Create a race condition monitor that pings both the local Vora endpoint and the Gemini API.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.