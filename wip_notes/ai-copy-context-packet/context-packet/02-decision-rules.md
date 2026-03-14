# Decision Rules

## Purpose

This file encodes intent and decision logic. It should answer:

- what matters most
- how tradeoffs should be resolved
- what the model should prefer
- what the model must escalate instead of deciding on its own

Load this when the task requires judgment, not just formatting.

## Ownership Model

This packet assumes:

- Campaign manager owns the campaign spine.
- Copywriter owns strategic content quality.
- Copyeditor owns editorial quality and rewrite risk.
- Production owns packet structure, workflow, readiness gates, and maintenance.
- Leads review anything intended to become a shared standard.

## Core Intent

The goal is not to produce generic "good copy." The goal is to produce campaign assets that:

- read like informed private-markets commentary
- stay aligned across channels
- help the audience act, not merely understand
- minimize stakeholder revision by getting the strategy right before polishing the prose

The system should reduce copyeditor rescue work, not create cleaner first drafts that still require strategic rewriting.

## Priority Hierarchy

When values conflict, resolve them in this order unless the campaign spec says otherwise:

1. Accuracy and approval safety
2. Strategic alignment with the brief
3. Audience usefulness and workflow relevance
4. Clarity and scannability
5. Stylistic flair

## Prefer

- Prefer concrete proof over abstract claims.
- Prefer a clear market or workflow problem over clever framing.
- Prefer one strong positioning angle carried consistently across channels over channel-by-channel variation.
- Prefer concise paragraphs over dense explanation.
- Prefer operational outcomes over vague benefit language.
- Prefer approved naming and approved proof points over creative invention.
- Prefer current campaign materials over stylistic mimicry of old campaigns when they conflict.
- Prefer summarized high-signal context over dumping entire source documents into the prompt.

## Must Escalate

Stop and ask for clarification if any of the following occur:

- The brief does not state the primary audience, campaign objective, or CTA.
- The campaign requires a proof point that is missing, weak, or not clearly approved.
- Source documents disagree on positioning, naming, launch status, or claims.
- A message implies legal, financial, performance, or competitive claims that are not explicitly approved.
- The task asks for tone or framing that conflicts with the stable brand rules.
- The request combines too many deliverables to review safely in one pass.
- A previous campaign example conflicts with the current campaign brief.
- The copy depends on current market facts not included in the context packet.
- The claims ledger is incomplete, expired, or missing approval metadata.
- No approved examples exist for a high-stakes or unfamiliar channel.
- The copywriter and copyeditor are not aligned on the quality bar.

## Human Approval Gates

The following require human approval before the model can move to the next stage:

1. campaign spine by the campaign manager
2. editorial quality standard and failure-mode coverage by the copyeditor
3. claims ledger for any approval-sensitive wording
4. approved example set for the selected channels
5. final QA disposition on risky outputs

Production must verify that the required gates were completed.

If the packet is being positioned as a shared standard, leads must review before rollout.

AI may propose options before approval, but those options must be labeled `UNAPPROVED`.

## Tradeoff Rules

### Brevity vs Completeness

- For executive or high-skim formats, brevity wins as long as proof and core value remain intact.
- For gated assets or deeper educational content, completeness can increase if it serves the stated objective.

### Consistency vs Freshness

- Keep the campaign spine consistent across channels.
- Allow channel-level adaptation in syntax and format, not in strategic angle.

### Speed vs Quality

- If required inputs are incomplete, do not compensate with invention just to move faster.
- Ask for the missing information or mark the gap explicitly.

### Style vs Safety

- If a strong line risks overstating what the product or content proves, safety wins.

## Known Failure Modes

Watch for these recurring mistakes:

- The copy sounds polished but does not match the campaign objective.
- Social introduces a new angle that email did not establish.
- Workflow tie-ins appear generic rather than tied to the audience.
- Proof points arrive too late or not at all.
- Old examples leak retired naming or outdated positioning.
- The output feels on-brand but lacks a clear reason for the audience to care now.
- The copy is structurally correct but not useful to the actual buyer.

## Default Working Pattern

When producing a campaign, work in this order:

1. Confirm the objective, audience, proof, CTA, deliverables, and approved source documents.
2. Build or validate the claims ledger.
3. Build or validate the approved examples set.
4. Draft the campaign spine.
5. Get campaign manager approval on the spine.
6. Get copyeditor signoff that the quality bar and failure modes are adequately represented.
7. Draft core long-form assets.
8. Adapt into shorter channels.
9. Self-check against the QA checklist.

Do not jump straight to full multi-channel output if the campaign spine is still uncertain.
