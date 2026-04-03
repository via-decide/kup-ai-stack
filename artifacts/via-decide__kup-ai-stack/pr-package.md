Branch: simba/create-the-quality-reviewer-agent-template-in-sr
Title: Create the 'Quality Reviewer' Agent Template in src/templates/code-re...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Create the 'Quality Reviewer' Agent Template in src/templates/code-reviewer.json. Configure the LLM to act as a Senior MLOps Engineer. [span_9](start_span)[span_10](start_span)It must scan every PR for "Data Pollution" (e.g., hardcoded values, lack of drift detection, or poor JSON structuring)[span_9](end_span)[span_10](end_span).

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.