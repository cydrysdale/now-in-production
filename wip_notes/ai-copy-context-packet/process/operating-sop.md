# AI Copy Packet Operating SOP — Draft

> **Status: Draft exploration — not an approved process.**
> This SOP is part of an active workflow exploration. It describes how a campaign would run from intake to approved draft if this approach is adopted. 

This SOP is for copy packets only.

## Goal

Produce copy that is strategically correct before it is stylistically polished.

Copyeditors should be reviewing against an explicit spec, not rewriting unclear strategy, unsupported claims, or missing structure.

## Ownership Lanes

### Campaign Manager

Owns the campaign spine.

- defines or approves the core campaign strategy
- owns the campaign spine across channels
- approves the spine before drafting begins
- resolves strategic conflicts that affect positioning, timing, or audience emphasis

### Copywriter

Owns the strategic content standard for the packet and the campaign.

- translates the approved campaign spine into channel-level messaging
- selects or approves proof points and examples
- defines what good output is trying to accomplish
- ensures drafts stay faithful to the approved spine

### Copyeditor

Owns the editorial quality standard for the packet and the campaign.

- defines editorial quality expectations, anti-patterns, and failure modes
- reviews whether outputs are clear, consistent, brand-fit, and publication-ready
- logs repeated rewrite patterns so they can become packet updates

### Production

Owns the system and governance mechanics.

- structures the packet and SOP
- manages prompt workflow design, HITL checkpoints, metadata, and versioning
- maintains readiness gates, QA gates, publishing, and archive discipline

### B&C or Marketing Leads

Own shared-standard rollout governance.

- review any packet intended to become a broader team standard
- approve rollout before the packet is presented as the default approach

## Intake

Route packet requests through the Asana brief intake form before work begins.

The Asana form should capture:

- use case
- channels and deliverables
- business goal
- target users
- whether this is a one-off workflow or a reusable standard candidate
- named campaign manager owner
- named copywriter, copyeditor, and Production owners

The form must also require the campaign manager to answer these pre-thinking questions before the request is accepted:

1. What outcome do we actually want from this campaign?
2. What would count as wrong even if the copy looks polished?
3. What do we know about this campaign that an outside writer would not know?
4. What is the hard part of this campaign?
5. What is different about this campaign from the last similar one?

These answers transfer directly into the campaign spec. They ensure the campaign manager has done the strategic thinking before AI work begins.

## Required Inputs

Do not start final copy generation until all of the following exist:

- completed campaign spec from `03-campaign-spec-template.md`
- completed claims ledger from `06-claims-ledger-template.md`
- approved examples for the selected channels from `07-approved-examples-template.md`
- clear source-of-truth ranking
- identified final approver
- named campaign manager owner
- named copywriter owner
- named copyeditor owner
- named Production owner

If any of these are missing, stay in analysis mode.

## Workflow

### Step 1: Prepare Inputs

Campaign manager:

- define or approve campaign objective, audience, CTA, deliverables, and business context
- define or approve market tension, positioning, and angles to avoid

Copywriter:

- confirm which documents are source of truth
- confirm whether legal or compliance review is required
- translate campaign strategy into messaging requirements for the packet

Copyeditor:

- identify known editorial risks and likely rewrite traps
- define what would count as polished but wrong

Production:

- confirm the packet structure and required files for the request
- confirm whether the request is a one-off or a reusable standard candidate

AI can help:

- summarize briefs, decks, notes, and Slack threads
- extract candidate proof points, workflow tie-ins, and unresolved questions
- identify missing inputs, stale facts, and conflicting source documents

Output:

- filled campaign spec
- missing-info list

### Step 2: Build Approval Infrastructure

Copywriter:

- approve claims, proof anchors, and allowed wording
- approve the example set for each channel

Copyeditor:

- add banned phrasing, required qualifiers, and editorial cautions where needed
- annotate anti-patterns and editorial cautions in the approved examples file

Production:

- ensure claims, examples, and approval metadata are captured in the right files
- confirm the packet is versioned and ready for use

AI can help:

- draft candidate claims tables from source materials
- group past examples by channel and objective
- surface likely claim-risk areas for review

Output:

- completed claims ledger
- completed approved examples file

### Step 3: Generate and Approve Campaign Spine

AI task:

- produce `UNAPPROVED` spine options with:
  - core positioning statement
  - market tension or workflow bottleneck
  - product-as-response statement
  - proof anchors
  - required workflow tie-ins
  - optional workflow tie-ins
  - core message to preserve across channels
  - messaging angles to avoid
  - channel angle map

Campaign manager:

- approve one spine
- reject any unsupported or off-strategy angle

Copywriter:

- ensure the spine is usable for channel adaptation

Copyeditor:

- flag any spine option that is directionally right but likely to create editorial rescue work

Production:

- copy the approved spine into the Campaign Spine section of `03-campaign-spec-template.md`

Rule:

- no channel copy until the spine is approved

### Step 4: Run Readiness Gate

Before any draft generation, confirm:

- audience is explicit
- objective is explicit
- CTA is explicit
- campaign spine is approved by the campaign manager
- copyeditor has approved the editorial quality bar and failure-mode coverage
- claims ledger is complete
- source-of-truth documents are ranked
- market facts are current
- approved examples exist for every selected channel

Production should verify the gate before drafting begins.

If any answer is `no`, do not generate final copy.

### Step 5: Draft Long-Form Core Assets

AI task:

- draft the required long-form assets using only approved inputs

Must stay within:

- campaign spine
- claims ledger
- approved examples
- channel rules

Copywriter review:

- check strategy, proof, and workflow relevance before line editing

Copyeditor review:

- check clarity, consistency, usage, and brand fit
- identify whether the draft is publishable with light edits or still needs structural rescue

### Step 6: Draft Derived Assets

AI task:

- adapt approved long-form assets into shorter channels

Rule:

- derived assets may adapt syntax and length
- derived assets may not invent a new angle or new claim

### Step 7: QA and Release

Run `04-qa-checklists.md` before anything is considered final.

Review for:

- strategic alignment
- claim safety
- source freshness
- channel format compliance
- editorial burden

If the copyeditor is rewriting strategy, claims, or structure, the packet is incomplete.

Production should log packet-level fixes.

For human review, final draft copy should be packaged as a `.docx` file. Keep the packet source files in Markdown.

If the packet is intended as a shared standard, leads should review before rollout.

## What AI Is Allowed To Do

Safe at any time:

- summarize inputs
- extract structured information
- identify gaps and risks
- compare drafts to examples
- label option sets as `UNAPPROVED`

Not allowed until approvals are complete:

- final campaign spine
- final claims wording
- near-final copy
- outputs that depend on current market facts without refresh checks

## Escalate Immediately If

- the audience, objective, or CTA is unclear
- source documents conflict
- a claim is missing approval metadata
- current market facts are required but stale or missing
- no approved example exists for a selected channel
- the copy sounds polished but strategically wrong

## Feedback Loop

After each campaign:

- score the campaign on the lightweight eval rubric in `04-qa-checklists.md`
- log repeated copyeditor fixes in `editor-feedback-log-template.md`
- if the same issue appears twice, update the packet

Copyeditor should record the rewrite pattern.

Production should convert repeated issues into packet updates and republish the packet if needed.

The packet improves when recurring rewrites become rules, examples, or approval metadata.

For gold-set regression testing, cross-campaign trend reviews, and the full evaluation workflow, see `evaluation-process.md`.
