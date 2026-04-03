Branch: simba/implement-model-distillation-in-srcenginedistill
Title: Implement 'Model-Distillation' in src/engine/distill.py. Use the Gemi...

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement 'Model-Distillation' in src/engine/distill.py. Use the Gemini 1.5 Flash outputs as 'Soft Targets' to train a lightweight 1D-CNN Student model.

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.