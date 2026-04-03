Branch: simba/implement-the-vora-protocol-tuner-in-srctraining
Title: Implement the 'Vora Protocol Tuner' in src/training/vora-finetune.py....

## Summary
- Repo orchestration task for via-decide/kup-ai-stack
- Goal: Implement the 'Vora Protocol Tuner' in src/training/vora-finetune.py. Create a pipeline to fine-tune the local Vora model on the 'Scenario 2' failure datasets. [span_4](start_span)It must prioritize high-accuracy interpretation of structured JSON sensor payloads over conversational prose[span_4](end_span). [span_5](start_span)constraints: The model must achieve >90% accuracy in identifying sensor drift specifically between 20°C and 48°C[span_5](end_span). [span_6](start_span)Use the Sovereign theme to log "VORA RE-PROTOCOLING: DATA-CENTRIC WEIGHTS APPLIED"[span_6](end_span).

## Testing Checklist
- [ ] Run unit/integration tests
- [ ] Validate command flow
- [ ] Validate generated artifact files

## Risks
- Prompt quality depends on repository metadata completeness.
- GitHub API limits/token scope can block deep inspection.

## Rollback
- Revert branch and remove generated artifact files if workflow output is invalid.