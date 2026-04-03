Branch: simba/update-srcmiddlewarecredit-guardjs-to-recognize-
Title: Update src/middleware/credit-guard.js to recognize a new user role: K...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Update src/middleware/credit-guard.js to recognize a new user role: KUP_FOUNDER. If a user has this role, bypass the PhonePe credit deduction logic and allow unlimited 0-token prompts.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.