Branch: simba/implement-the-s-kernel-memory-manager-in-srccore
Title: Implement the 'S-Kernel' memory manager in src/core/kernel.cpp. Creat...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'S-Kernel' memory manager in src/core/kernel.cpp. Create a pre-allocated memory pool for sensor shards to bypass the garbage collector during 10k+ RPM bursts.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.