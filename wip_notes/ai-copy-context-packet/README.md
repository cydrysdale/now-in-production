# AI Copy Context Packet — Draft Exploration

> **Status: Draft exploration — not an approved process.**
> This packet is an active exploration of how AI-assisted copy workflows could work. Nothing here has been approved as a standard or rolled out as a team process. We're refining the approach through end of March 2026 before deciding next steps.

If you are using this packet in the Claude webapp and want the simple user-facing version, start with `START-HERE.md`.

In this packet, `spine` means the campaign messaging framework: the core positioning, market tension, proof structure, workflow tie-ins, and angle controls that all channel assets would follow.

The goal of this exploration is:

- separate stable context from task-specific context
- separate style rules from decision rules
- separate specification from execution
- separate generation from quality control
- prevent one-off prompts from quietly becoming unofficial standards

## Proposed Ownership Model

This draft proposes a split ownership model:

- Campaign manager owns the campaign spine.
- Copywriter owns strategic content standards: messaging, audience framing, CTA, proof selection, examples, and what good output is trying to achieve.
- Copyeditor owns editorial quality standards: clarity, consistency, usage, brand fit, anti-patterns, and the threshold for publishable copy.
- Production owns the system: packet structure, SOPs, prompt workflow design, HITL checkpoints, versioning, QA gates, publishing, and maintenance.
- B&C or Marketing leads review anything intended to become a shared standard before rollout.

## Folder Structure

### `context-packet/`—What you would upload to AI sessions

These files are the draft context packet. They would be uploaded as attachments when starting an AI session for campaign work.

- `01-brand-rules.md`—Stable brand, tone, formatting, and channel rules.
- `02-decision-rules.md`—Intent framing: priorities, tradeoffs, escalation rules, and approval gates.
- `03-campaign-spec-template.md`—The task-specific recipe card for one campaign. Includes product details, audience, positioning, proof controls, constraints, and approval status.
- `04-qa-checklists.md`—Acceptance criteria and reusable evaluation checks.
- `06-claims-ledger-template.md`—Human-approved claims, proof sources, allowed wording, and freshness windows.
- `07-approved-examples-template.md`—Annotated gold examples by channel, including what to emulate and what not to copy.
- `09-campaign-spine-builder-prompt.md`—Guided interview prompt for helping a campaign manager create an `UNAPPROVED` campaign spine.

### `process/`—How the workflow would run

These files are draft reference documentation for humans. They describe the proposed workflow, governance, roles, and maintenance processes. Do not upload these to AI sessions.

- `operating-sop.md`—One-page workflow for running the packet from intake through QA.
- `roles-and-handoffs.md`—One-page overview of who does what and how campaigns move through the packet.
- `policy-memo.md`—Short policy version of the ownership and governance model.
- `raci.md`—RACI table for packet development, approval, rollout, and maintenance.
- `editor-feedback-log-template.md`—A place to convert repeated copyeditor rewrites into packet updates.
- `personal-context-guides.md`—Role-specific guides for building personal context documents.
- `evaluation-process.md`—Detailed evaluation process: gold-set benchmarks, regression testing, cross-campaign learning, and feedback loops.

### `development/`—Building and testing the framework

These files are only needed while the packet is being developed. They are not part of the production workflow.

- `development-checklist.md`—Asana project plan for building, reviewing, and testing the packet.
- `archive-notes.md`—Notes from the old all-in-one prompt and why it was split.

## Quick Orientation

There are two ways to read this packet:

- `START-HERE.md`—the simple draft operating guide for marketers and non-technical users working in Claude
- `README.md`—the full system overview for reviewers and anyone evaluating the proposed approach

The packet itself is maintained in Markdown. Final human-review copy should be returned as a `.docx` file.

## Organizing Your Files

The files in `context-packet/` fall into two groups:

**Stable files**—the same every campaign. Keep these together in one folder so you can upload them quickly at the start of any session:

- `01-brand-rules.md`
- `02-decision-rules.md`
- `04-qa-checklists.md`

**Campaign-specific files**—different for each campaign. Create a folder for each campaign and keep completed versions of these files there:

- `03-campaign-spec-template.md` (completed for the campaign)
- `06-claims-ledger-template.md` (completed for the campaign)
- `07-approved-examples-template.md` (completed for the campaign)

You do not need to fill out the campaign-specific files manually. Each one includes a built-in interview guide. Upload the blank template alongside your stable files, and the AI will ask you the right questions to complete it. After the interview, copy the AI's output back into the file for future sessions.

The `09-campaign-spine-builder-prompt.md` file is only needed when using the spine builder interview. Upload it at the start of a spine-building session instead of your other campaign files.

If you have built a personal context document using `personal-context-guides.md`, keep it with your stable files and upload it alongside them.

## Recommended Loading Order

For a **new campaign** where the campaign-specific files are not yet complete, upload these at the start of a setup session:

1. `01-brand-rules.md`
2. `02-decision-rules.md`
3. the blank `03-campaign-spec-template.md`

The AI will interview you to complete the spec. In the same session or a follow-up, upload the blank `06-claims-ledger-template.md` and `07-approved-examples-template.md` and the AI will interview you to complete those as well.

For **campaign work** where the campaign-specific files are already complete, upload these:

1. `01-brand-rules.md`
2. `02-decision-rules.md`
3. the current campaign's completed `03-campaign-spec-template.md`
4. the current campaign's completed `06-claims-ledger-template.md`
5. the current campaign's completed `07-approved-examples-template.md`
6. `04-qa-checklists.md`

Do not upload files from `process/` or `development/` to AI sessions.

Do not generate final copy until the campaign spec, claims ledger, and approved examples are complete enough to pass the readiness gate in `04-qa-checklists.md`.

## Session Management

Each campaign runs through multiple stages (source prep, spine, core assets, derived assets, QA). These stages often involve different people or require offline approvals between them.

**Default: one conversation per stage.** Start a new conversation when you move to a new stage or when a different person takes over. Upload the same stable files plus the campaign-specific files at the start of each conversation.

**Carry forward approved outputs.** When one stage produces approved output that the next stage needs (e.g., the approved spine), paste or add it to the campaign spec before starting the next conversation. The campaign spec should always reflect the current approved state of the campaign.

**When to use a single conversation:** If one person is running multiple stages back-to-back without needing offline approvals between them, it is fine to continue in the same conversation. The model maintains full context within a conversation.

**When to start a new conversation:**

- A different person is running the next stage.
- An approval happened offline and you need the model to work from the approved version.
- The conversation is getting long and the model's responses are becoming less focused.
- You are switching from the spine builder prompt to the standard campaign workflow.

## Proposed Workflow

1. Submit the request through the Asana brief intake form. The campaign manager answers the pre-thinking questions as part of the intake. Assign a campaign manager, copywriter, copyeditor, and Production owner.
2. Transfer the Asana intake answers into `03-campaign-spec-template.md` and complete the remaining fields.
3. If helpful, use `09-campaign-spine-builder-prompt.md` to help the campaign manager create an `UNAPPROVED` spine draft and paste it into the Campaign Spine section of the spec.
4. Build the campaign-specific claims ledger from `06-claims-ledger-template.md`.
5. Build the approved examples file from `07-approved-examples-template.md`.
6. Ask the model to draft or refine the campaign spine using this normalized schema:
   - core positioning statement
   - market tension or workflow bottleneck
   - product-as-response statement
   - proof anchors
   - required workflow tie-ins
   - optional workflow tie-ins
   - core message to preserve across channels
   - messaging angles to avoid
   - channel angle map
7. Get campaign manager approval on the spine and copyeditor signoff on the editorial quality bar and failure-mode coverage.
8. Run the readiness gate in `04-qa-checklists.md`.
9. Generate channel assets in stages, not all at once.
10. Run the final outputs against `04-qa-checklists.md`.
11. Log repeated copyeditor fixes in `editor-feedback-log-template.md` and update the packet if the same issue appears twice.
12. If the packet is meant to become a shared standard, obtain lead review before rollout.
13. Score the campaign on the lightweight eval rubric in `04-qa-checklists.md`.
14. Run gold-set regression tests and cross-campaign reviews on the cadence described in `evaluation-process.md`.

## What AI Can Do Before Inputs Are Complete

AI can help while human-owned information is still being gathered, but it should stay in analysis mode rather than final generation mode.

Safe AI tasks before the packet is complete:

- summarize long briefs, decks, call notes, and Slack threads into candidate inputs for the spec
- extract candidate proof points, product names, workflow tie-ins, and unresolved questions from source materials
- cluster prior copyeditor feedback into recurring failure modes
- draft candidate campaign spine options clearly labeled `UNAPPROVED`
- identify missing fields, conflicting sources, stale facts, or likely claim risks
- build comparison tables of past campaigns and approved examples

Tasks that should wait for human approval:

- final campaign spine
- final claims wording
- any output that could be reviewed as near-final copy
- any asset that relies on current market facts or approval-sensitive claims

## Why This Approach

AI can only work with what you give it. If you give it incomplete strategy, missing proof, vague objectives, or no quality standards, it will fill the gaps with confident-sounding guesses—output that looks polished but is strategically wrong. The packet exists to prevent that by making sure everything the AI needs is explicit, approved, and organized before it starts writing.

The packet is built on six principles:

- **Complete problem statements.** Every campaign should give the AI a self-contained picture of the task: what the campaign is, who it is for, why now, what proof exists, and what done looks like. If information is missing, the AI should flag the gap instead of guessing.
- **Acceptance criteria.** Every campaign should define what "done" looks like in terms that someone outside the project could verify. If you cannot describe what good output looks like before the AI starts, the AI cannot know when to stop.
- **Constraint architecture.** Every campaign should state what the AI must do, must not do, should prefer when multiple valid approaches exist, and should escalate rather than decide on its own. These constraints prevent the most common failure mode: output that technically satisfies the request but misses what you actually needed.
- **Staged execution.** Large campaigns should be broken into stages that can be reviewed independently—build the spine first, then core assets, then derived assets, then QA. Do not ask the AI to produce everything at once.
- **Evaluation.** Every campaign should be scored on a consistent rubric so you can track whether the packet is improving output quality over time—not just hope that it is.
- **Specification over improvisation.** The campaign spec, claims ledger, approved examples, and decision rules together form a specification that the AI executes against. The specification is the product. The prompt is just the trigger.

If a campaign fails, diagnose the gap before expanding the prompt:

- missing strategy or task definition → `03-campaign-spec-template.md`
- missing or risky claims → `06-claims-ledger-template.md`
- weak example set or empty mimicry → `07-approved-examples-template.md`
- wrong tradeoff or escalation logic → `02-decision-rules.md`
- missing editorial standard or style drift → `01-brand-rules.md`
- incomplete channel spec → `01-brand-rules.md` or the custom-channel section in `03-campaign-spec-template.md`
- weak QA or inconsistent output quality → `04-qa-checklists.md` and `evaluation-process.md`
- repeated copyeditor rewrite → `editor-feedback-log-template.md`
