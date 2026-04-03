Branch: simba/implement-the-data-quality-auditor-in-srcquality
Title: Implement the 'Data Quality Auditor' in src/quality/six-dimensions.js...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Data Quality Auditor' in src/quality/six-dimensions.js. Create a validation gate that scores every vehicle passage on: 1) Accuracy, 2) Completeness, 3) Consistency, 4) Timeliness, 5) Validity, and 6) Uniqueness.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.