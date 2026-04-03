Branch: simba/build-the-sanjiwani-failover-in-srcmiddlewarellm
Title: Build the 'Sanjiwani Failover' in src/middleware/llm-fallback.js. Mon...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Build the 'Sanjiwani Failover' in src/middleware/llm-fallback.js. Monitor the health of the local Ollama/Vora instance on port 11434. If latency exceeds 10 seconds or the service crashes, automatically route all founder prompts to the Claude/Codex cloud API.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.