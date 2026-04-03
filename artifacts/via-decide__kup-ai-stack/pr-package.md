Branch: simba/implement-data-sharder-in-srcdatasharding-engine
Title: Implement 'Data Sharder' in src/data/sharding-engine.js. Automaticall...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement 'Data Sharder' in src/data/sharding-engine.js. Automatically split the 100K passage stream into 1,000-vehicle Parquet shards.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.