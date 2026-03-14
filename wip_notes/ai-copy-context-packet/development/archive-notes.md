# Archive Notes

This file records what changed from `AI prompt info for copy.docx`.

Do not load this into active generation sessions.

## Why The Old Document Was Split

The old document combined several different layers in one place:

- archived prompts
- stable style rules
- campaign-specific instructions
- source references
- multiple campaign variants
- output requirements

That made it hard for the model to tell:

- what was current
- what was archival
- what was stable policy
- what was specific to one campaign

## Problems The Split Solves

### Context Design Problem

The old file mixed current instructions with archive material and repeated context blocks. The new packet separates stable context from task-specific context.

### Specification Problem

The old file gave rich tone and format guidance, but the task definition and campaign inputs were often underspecified. The new packet adds a pre-service intake, explicit context packet, acceptance criteria, and definition of done.

### Intent Problem

The old file had many rules, but fewer explicit tradeoff and escalation instructions. The new packet adds a separate decision-rules file.

### Decomposition Problem

The old file often asked for a full multi-channel campaign in one pass. The new packet defines staged execution:

1. build the campaign spine
2. draft core long-form assets
3. adapt into derived assets
4. run QA

### Evaluation Problem

The old file relied heavily on subjective standards such as `feels right` or `requires minimal edits`. The new packet adds reusable QA checklists and a lightweight eval rubric.

## What To Preserve From The Old Document

The old file still contains useful source material:

- audience definition
- voice direction
- naming discipline
- workflow tie-ins
- proof-anchor thinking
- channel formatting guidance

Those elements were preserved and normalized into the new markdown files.
