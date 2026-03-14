# Start Here: Running This In Claude — Draft

> **Status: Draft exploration — not an approved process.**
> This packet is an active exploration of how AI-assisted copy workflows could work. We're refining the approach through end of March 2026. This guide shows what using the packet would look like once the workflow is finalized.

Use this guide if you are working in the Claude webapp and want to see how a campaign would run with this packet. You do not need to understand AI workflows, agents, or prompt engineering to follow along.

This is the simple version.

## File Format Rule

Use Markdown for the packet files and templates.

For final human-review copy, ask Claude to return the draft as a `.docx` file.

In practice:

- packet inputs stay in `.md`
- final review drafts for copywriters, copyeditors, and campaign managers should be returned as `.docx`

## What You Actually Use

For normal campaign work, you only need these files:

- `01-brand-rules.md`
- `02-decision-rules.md`
- `04-qa-checklists.md`
- `03-campaign-spec-template.md`
- `06-claims-ledger-template.md`
- `07-approved-examples-template.md`

Use `09-campaign-spine-builder-prompt.md` only if you want Claude to interview you and help build an early campaign messaging framework draft.

You do not need the files in `process/` or `development/` for normal campaign drafting.

If you want a simple reviewer-facing view of who owns which step, see `process/roles-and-handoffs.md`.

## Plain-English File Guide

- `01-brand-rules.md` = how the writing should sound
- `02-decision-rules.md` = how Claude should make judgment calls
- `03-campaign-spec-template.md` = the campaign brief and source of truth
- `04-qa-checklists.md` = the quality check before anything is final
- `06-claims-ledger-template.md` = what claims are allowed
- `07-approved-examples-template.md` = examples of what good looks like
- `09-campaign-spine-builder-prompt.md` = optional guided interview for building an early campaign messaging framework

## Recommended Setup In Claude

If possible, use one Claude Project per campaign.

Add these as stable project knowledge:

- `01-brand-rules.md`
- `02-decision-rules.md`
- `04-qa-checklists.md`

Then upload or add the current campaign files when you start work:

- completed `03-campaign-spec-template.md`
- completed `06-claims-ledger-template.md`
- completed `07-approved-examples-template.md`

If the campaign files are still blank, Claude can help fill them out by interviewing you.

## The Simple Workflow

### 1. Set Up The Campaign

Start with `03-campaign-spec-template.md`.

If it is incomplete, ask Claude to help fill it out before doing anything else.

If the campaign messaging framework is still fuzzy, use `09-campaign-spine-builder-prompt.md` to create an `UNAPPROVED` draft, then paste the approved version back into the spec.

### 2. Document Claims

Fill out `06-claims-ledger-template.md`.

If a claim is not in the ledger, do not use it in final copy.

### 3. Add Good Examples

Fill out `07-approved-examples-template.md`.

Use examples as pattern references, not as copy-and-paste templates.

### 4. Approve The Spine

Before asking Claude for final channel copy, make sure the campaign messaging framework in the spec is approved by the campaign manager.

### 5. Draft In Stages

Do not ask for every asset at once.

Do this in order:

1. campaign messaging framework
2. long-form core assets
3. shorter derived assets
4. QA pass

### 6. Run QA Before Final Use

Use `04-qa-checklists.md` before treating any output as final.

If the copyeditor is rewriting strategy, claims, or structure, the packet is still incomplete.

After the QA pass, ask Claude to package the human-review draft as a `.docx` file.

## Who Touches What

### Campaign Manager

- owns the campaign messaging framework
- helps complete the spec
- approves the campaign messaging framework before drafting

### Copywriter

- completes or approves messaging, claims direction, and examples
- reviews whether the drafts are strategically right

### Copyeditor

- reviews whether the drafts are clear, consistent, and publishable
- flags polished-but-wrong output

### Production

- maintains the system, workflow, and publishing process
- helps when there is confusion about files, approvals, or packet setup

## Copy-Paste Prompts For Claude

### Prompt 1: Fill Out The Campaign Spec

Use this when `03-campaign-spec-template.md` is still blank or incomplete.

```text
I’m filling out a campaign spec for this project.

Please use the attached `03-campaign-spec-template.md` as the source format.
If fields are incomplete, interview me in small groups of 2-3 questions at a time until the template is complete.
Do not draft campaign copy yet.
Do not invent claims, proof, or approvals.
Mark anything unresolved as MISSING.
When we are done, return the completed template in full.
```

### Prompt 2: Build Or Refine The Campaign Messaging Framework

Use this after the spec is mostly complete.

```text
Use the attached packet files to help me build or refine the campaign messaging framework.

Output an UNAPPROVED campaign messaging framework using this schema:
- Core positioning statement
- Market tension or workflow bottleneck
- Product-as-response statement
- Proof anchors (label each as candidate or approved)
- Required workflow tie-ins
- Optional workflow tie-ins
- Core message to preserve across channels
- Messaging angles to avoid
- Channel angle map

Also include:
- Campaign objective
- Primary audience
- Why now
- Open questions
- Risk flags

Do not write channel copy.
Do not invent claims or proof.
```

### Prompt 3: Draft Assets And Run QA

Use this only after the campaign messaging framework, claims, and examples are ready.

```text
Use the attached packet files to draft this campaign in stages.

Start with the approved campaign messaging framework and the completed spec.
Stay inside the claims ledger and approved examples.
Do not invent claims, facts, or new angles.

First, draft the long-form core assets only.
After that, wait for approval before drafting derived assets.

When drafting is complete, run the relevant checks from `04-qa-checklists.md` and give me:
- the draft output
- issues found
- issues fixed
- unresolved risks
- estimated editorial rewrite burden

After QA, return the human-review draft as a `.docx` file.
```

## If Claude Starts Going Off Track

Stop and correct the setup if any of these happen:

- it starts writing before the spec is complete
- it uses claims that are not in the claims ledger
- it introduces a new angle not in the approved campaign messaging framework
- it copies old examples too closely
- it sounds polished but strategically wrong
- it tries to do every channel at once

## When To Ask Production For Help

Ask Production if:

- you are not sure which file to update
- the source documents conflict
- approval status is unclear
- you are not sure whether something belongs in brand rules, the spec, or the claims ledger
- the process feels confusing enough that you are making guesses
