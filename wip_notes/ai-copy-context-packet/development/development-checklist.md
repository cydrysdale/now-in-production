# AI Copy Packet Development Checklist — Draft Exploration

> **Status: Draft exploration — not an approved process.**
> This checklist drives an active exploration of AI-assisted copy workflows. The goal is to learn what works and surface insights that can inform future AI projects, whether or not this specific packet becomes a team standard.

This is a project management artifact for building, reviewing, and testing the AI copy context packet. Do not load this into AI generation sessions.

Transfer these tasks to Asana. Each phase should be a section. Each task should be a subtask with the named assignee.

## Team

| Name | Role | Packet Responsibility |
| --- | --- | --- |
| Chris | Production | Packet structure, SOP, workflow design, Asana form, QA gates, versioning, maintenance |
| Nat | Production | Packet structure review, workflow co-ownership, Asana form co-build |
| Lana | Project Manager | Asana form, Asana template, general oversight |
| TBD | Campaign Manager | Campaign spine model, intake question validation, spec template review |
| Marcus | Copywriter | Brand voice, messaging standards, approved examples, claims direction, proof selection |
| Rachel | Copywriter | Brand voice, messaging standards, approved examples, claims direction, proof selection |
| Daniel | Copyeditor | Editorial quality bar, anti-patterns, QA checklist review, polished-but-wrong definitions |
| Cynthia-Marie | Copyeditor | Editorial quality bar, anti-patterns, QA checklist review, polished-but-wrong definitions |
| JSam | Creative Director | Creative direction feedback, exploration review |

---

## Phase 1: Build Draft Structure and Process

Owner: Chris. Complete before assigning Phase 2.

### Packet Files

- [ ] **Chris** — Final structural review of all packet files for internal consistency (cross-references, naming, no contradictions between files)
- [ ] **Chris** — Verify that `README.md` file map, loading order, and recommended workflow are current after all recent edits
- [ ] **Chris** — Review `operating-sop.md` end to end and confirm every step references the correct file
- [ ] **Chris** — Review `policy-memo.md` and `raci.md` and confirm they match current ownership model
- [ ] **Chris** — Confirm `03-campaign-spec-template.md` fields are complete (no missing sections, no orphaned placeholders, product details and audience fields cover everything referenced in brand rules)
- [ ] **Chris** — Confirm `06-claims-ledger-template.md` fields cover the claim types referenced in decision rules and QA checklists
- [ ] **Chris** — Confirm `07-approved-examples-template.md` fields cover the annotation types referenced in brand rules (why it works, patterns to emulate, patterns to avoid)
- [ ] **Chris** — Confirm `editor-feedback-log-template.md` root-cause categories match the diagnostic list in `README.md`
- [ ] **Chris** — Review `09-campaign-spine-builder-prompt.md` against current spec template to confirm the spine output fields match
- [ ] **Chris** — Review `personal-context-guides.md` and confirm the templates are practical for each role
- [ ] **Chris** — Review `evaluation-process.md` and confirm the rubric categories match `04-qa-checklists.md`

### Asana Intake Form

- [ ] **Lana** — Build the Asana brief intake form with all required fields from the SOP intake section
- [ ] **Lana** — Add the 5 pre-thinking questions as required fields in the Asana form
- [ ] **Lana** — Add campaign manager, copywriter, copyeditor, and production owner assignment fields
- [ ] **Lana** — Add the one-off vs. reusable standard question
- [ ] **Lana** — Add a legal/compliance review flag field
- [ ] **Nat** — Review the Asana form for completeness and usability
- [ ] **Chris** — Test the Asana form with a sample submission

### File Storage and Versioning

- [ ] **Chris** — Decide on storage location for the packet files (shared drive, repo, etc.)
- [ ] **Chris** — Set up a folder structure for campaign-specific files (each campaign gets its own completed spec, claims, examples)
- [ ] **Chris** — Set up a gold-set benchmarks folder for evaluation (see `evaluation-process.md`)
- [ ] **Chris** — Define versioning approach for the packet (how changes are tracked, who publishes updates)
- [ ] **Nat** — Review storage and versioning setup

### Process Validation

- [ ] **Chris** — Test the full packet loading order in a real AI session (load brand rules, decision rules, a sample spec, sample claims, sample examples, QA checklists) and confirm the AI responds coherently
- [ ] **Chris** — Test the campaign spine builder prompt (`09`) in a real AI session and confirm the output format matches what the spec template expects
- [ ] **Chris** — Write a short walkthrough guide for the team explaining what the packet is, why it exists, and how the workflow runs (plain language, no jargon)
- [ ] **Chris** — Prepare a 1-page role-specific summary for each role: what they own, what they need to do, and which files they interact with

### Milestone: Structure complete. Ready for Phase 2 handoffs.

---

## Phase 2: Content Development

Starts after Phase 1 is complete. Tasks are grouped by person. Some tasks can run in parallel across roles.

### Assigned Campaign Manager (Campaign Manager)

- [ ] **Assigned Campaign Manager** — Read `README.md` and the role-specific summary Chris prepared
- [ ] **Assigned Campaign Manager** — Read `03-campaign-spec-template.md` and flag anything that does not match how she thinks about campaigns (missing fields, confusing language, unnecessary fields)
- [ ] **Assigned Campaign Manager** — Review the 5 Asana pre-thinking questions and confirm they capture the right strategic inputs, or suggest changes
- [ ] **Assigned Campaign Manager** — Test the campaign spine builder prompt (`09`) with a real or recent campaign and report whether the output is useful
- [ ] **Assigned Campaign Manager** — Review the campaign spine section of the spec template and confirm the fields capture how she approves positioning
- [ ] **Assigned Campaign Manager** — Identify 1-2 recent campaigns that could serve as gold-set benchmarks (campaigns she was satisfied with)
- [ ] **Assigned Campaign Manager** — Build her personal context document using `personal-context-guides.md`

### Marcus (Copywriter)

- [ ] **Marcus** — Read `README.md` and the role-specific summary Chris prepared
- [ ] **Marcus** — Read `01-brand-rules.md` and flag anything that is missing, outdated, or incomplete (voice, tone, proof rules, channel specs)
- [ ] **Marcus** — Read `02-decision-rules.md` and flag any tradeoff or preference rule that does not match how copy decisions are actually made
- [ ] **Marcus** — Review `03-campaign-spec-template.md` and confirm the messaging and proof sections capture what a copywriter needs
- [ ] **Marcus** — Create 2-3 approved examples for the most common channels using `07-approved-examples-template.md` (include why-it-works annotations and patterns-to-avoid annotations)
- [ ] **Marcus** — Create 1 sample claims ledger entry for a real or recent campaign using `06-claims-ledger-template.md`
- [ ] **Marcus** — Review the QA checklists in `04-qa-checklists.md` and flag any strategic check that is missing
- [ ] **Marcus** — Build his personal context document using `personal-context-guides.md`

### Rachel (Copywriter)

- [ ] **Rachel** — Read `README.md` and the role-specific summary Chris prepared
- [ ] **Rachel** — Read `01-brand-rules.md` and flag anything that is missing, outdated, or incomplete (voice, tone, proof rules, channel specs)
- [ ] **Rachel** — Read `02-decision-rules.md` and flag any tradeoff or preference rule that does not match how copy decisions are actually made
- [ ] **Rachel** — Review `03-campaign-spec-template.md` and confirm the messaging and proof sections capture what a copywriter needs
- [ ] **Rachel** — Create 2-3 approved examples for channels not covered by Marcus using `07-approved-examples-template.md` (include annotations)
- [ ] **Rachel** — Create 1 sample claims ledger entry for a different campaign type using `06-claims-ledger-template.md`
- [ ] **Rachel** — Review the QA checklists in `04-qa-checklists.md` and flag any strategic check that is missing
- [ ] **Rachel** — Build her personal context document using `personal-context-guides.md`

### Daniel (Copyeditor)

- [ ] **Daniel** — Read `README.md` and the role-specific summary Chris prepared
- [ ] **Daniel** — Read `01-brand-rules.md` and review the editorial sections: style mechanics, formatting rules, tone controls, and anti-patterns. Flag anything missing or wrong.
- [ ] **Daniel** — Read `02-decision-rules.md` and review the known failure modes section. Add any editorial failure modes that are missing.
- [ ] **Daniel** — Review `04-qa-checklists.md` in detail. Flag any editorial check that is missing. Pay special attention to the channel-specific checklists and the risk checklist.
- [ ] **Daniel** — Write 3-5 specific "polished but wrong" examples for the brand rules or decision rules — real patterns where AI output looks clean but is editorially off
- [ ] **Daniel** — Review `editor-feedback-log-template.md` and confirm the root-cause categories cover the issues he typically fixes
- [ ] **Daniel** — Build his personal context document using `personal-context-guides.md`

### Cynthia-Marie (Copyeditor)

- [ ] **Cynthia-Marie** — Read `README.md` and the role-specific summary Chris prepared
- [ ] **Cynthia-Marie** — Read `01-brand-rules.md` and review the editorial sections: style mechanics, formatting rules, tone controls, and anti-patterns. Flag anything missing or wrong.
- [ ] **Cynthia-Marie** — Read `02-decision-rules.md` and review the known failure modes section. Add any editorial failure modes that are missing.
- [ ] **Cynthia-Marie** — Review `04-qa-checklists.md` in detail. Flag any editorial check that is missing. Focus on channel-specific and risk checklists.
- [ ] **Cynthia-Marie** — Write 3-5 specific "polished but wrong" examples for the brand rules or decision rules — real patterns where AI output looks clean but is editorially off
- [ ] **Cynthia-Marie** — Review the approved examples created by Marcus and Rachel. Annotate any editorial anti-patterns the examples should call out.
- [ ] **Cynthia-Marie** — Build her personal context document using `personal-context-guides.md`

### Nat (Production)

- [ ] **Nat** — Read `README.md`, `operating-sop.md`, and the role-specific summary Chris prepared
- [ ] **Nat** — Review the full SOP workflow for gaps or unclear handoffs
- [ ] **Nat** — Review `evaluation-process.md` and confirm the process is practical and the record templates are usable
- [ ] **Nat** — Review the Asana form and test a sample submission
- [ ] **Nat** — Review the file storage and versioning setup and flag any issues
- [ ] **Nat** — Build her personal context document using `personal-context-guides.md`

### Chris (Production — continued)

- [ ] **Chris** — Collect and triage all feedback from Phase 2 reviews
- [ ] **Chris** — Update brand rules based on copywriter and copyeditor feedback
- [ ] **Chris** — Update decision rules based on copywriter and copyeditor feedback
- [ ] **Chris** — Update QA checklists based on copyeditor feedback
- [ ] **Chris** — Update campaign spec template based on Lana's feedback
- [ ] **Chris** — Incorporate "polished but wrong" examples from Daniel and Cynthia-Marie into the appropriate files
- [ ] **Chris** — Incorporate approved examples from Marcus and Rachel into the packet
- [ ] **Chris** — Incorporate sample claims ledger entries from Marcus and Rachel
- [ ] **Chris** — Update the Asana form based on Lana's feedback on the pre-thinking questions
- [ ] **Chris** — Build his personal context document using `personal-context-guides.md`

### Milestone: Content development complete. All roles have contributed. Packet updated with feedback.

---

## Phase 3: Cross-Functional Review and Feedback

Starts after Phase 2 feedback is incorporated. Goal: get input from all roles on whether the approach is worth testing and what needs to change.

### Alignment Reviews

- [ ] **Marcus + Rachel** — Joint review: confirm that updated brand rules, approved examples, and claims ledger templates accurately represent copywriter standards
- [ ] **Daniel + Cynthia-Marie** — Joint review: confirm that updated QA checklists, anti-patterns, and editorial sections of brand rules accurately represent copyeditor standards
- [ ] **Assigned Campaign Manager** — Review the updated campaign spec template and confirm the spine model and intake flow work for her
- [ ] **Chris + Nat** — Joint review: confirm the draft SOP, Asana form, evaluation process, file storage, and versioning are ready to test

### CD Review

- [ ] **JSam** — Read `README.md` for full packet overview
- [ ] **JSam** — Read `policy-memo.md` and `raci.md` and give feedback on the proposed ownership model
- [ ] **JSam** — Read `01-brand-rules.md` and flag whether voice, tone, and strategic writing rules represent the brand standard
- [ ] **JSam** — Read `02-decision-rules.md` and flag whether the priority hierarchy and tradeoff rules represent B&C intent
- [ ] **JSam** — Review 2-3 approved examples and flag whether they reflect the quality bar
- [ ] **JSam** — Share any concerns or open questions about the approach
- [ ] **JSam** — Confirm the exploration is worth testing with a real campaign

### Final Packet Review

- [ ] **Chris** — Incorporate all Phase 3 feedback
- [ ] **Chris** — Run final structural consistency check across all files
- [ ] **Chris** — Verify the Asana form matches the final SOP
- [ ] **Chris** — Save the current version of the packet with a version number for testing
- [ ] **Nat** — Confirm the saved version matches what was reviewed

### Milestone: Packet ready to test. Team feedback incorporated. JSam has reviewed the approach.

---

## Phase 4: Pilot Test

Run one real campaign through the full packet workflow to learn what works, what breaks, and what the approach can teach us about AI-assisted copy workflows.

### Pilot Setup

- [ ] **Chris** — Select a real upcoming campaign for the pilot (ideally a common campaign type, not an edge case)
- [ ] **Assigned Campaign Manager** — Submit the pilot campaign through the Asana intake form with all pre-thinking questions answered
- [ ] **Chris** — Transfer intake answers into the campaign spec and complete remaining fields
- [ ] **Chris** — Confirm the pilot campaign has a named copywriter, copyeditor, and production owner

### Pilot Execution

- [ ] **Assigned copywriter** — Complete the claims ledger for the pilot campaign
- [ ] **Assigned copywriter** — Select or create approved examples for the pilot campaign channels
- [ ] **Chris or Nat** — Run the readiness gate
- [ ] **Chris or Nat** — Load the packet and run the spine generation
- [ ] **Assigned Campaign Manager** — Review and approve or reject the campaign spine
- [ ] **Assigned copyeditor** — Review the spine for editorial rescue risk
- [ ] **Chris or Nat** — Generate long-form core assets
- [ ] **Assigned copywriter** — Review long-form assets for strategy, proof, and workflow relevance
- [ ] **Assigned copyeditor** — Review long-form assets for clarity, consistency, and brand fit
- [ ] **Chris or Nat** — Generate derived channel assets
- [ ] **Chris or Nat** — Run the full QA checklist against all outputs
- [ ] **Assigned copyeditor** — Final editorial review

### Pilot Evaluation

- [ ] **Chris** — Score the pilot campaign on the lightweight eval rubric
- [ ] **Assigned copyeditor** — Log any rewrites in the editor feedback log with root causes
- [ ] **Chris** — Document what worked, what broke, and what was confusing about the workflow
- [ ] **Assigned Campaign Manager** — Report whether the intake and spine approval process worked for her
- [ ] **Assigned copywriter** — Report whether the spec, claims, and examples were sufficient
- [ ] **Assigned copyeditor** — Report editorial burden: was the AI output closer to publishable than typical first drafts?
- [ ] **Nat** — Report any process or tooling issues

### Pilot Retrospective

- [ ] **Chris** — Compile pilot feedback into a single retrospective document
- [ ] **Chris** — Identify packet updates needed based on pilot results
- [ ] **Chris** — Identify workflow or Asana form updates needed
- [ ] **Chris** — Update the packet based on retrospective findings
- [ ] **Chris** — Save the pilot campaign as the first gold-set benchmark (spec, claims, examples, approved output, scores)

### Milestone: Pilot complete. Packet updated. First gold-set benchmark saved. Learnings documented for future AI workflow decisions.

---

## Dependencies

- Phase 2 cannot start until Phase 1 is complete (team needs the walkthrough materials, role summaries, and stable file structure before reviewing).
- Phase 2 tasks within each role can run in parallel across roles.
- Chris's Phase 2 incorporation work depends on receiving feedback from all other Phase 2 reviewers.
- Phase 3 alignment reviews depend on Chris completing the Phase 2 incorporation.
- JSam's review depends on the Phase 3 alignment reviews being complete (so he reviews the current version, not an intermediate one).
- Phase 4 depends on JSam confirming the exploration is worth testing.
- Copywriter and copyeditor tasks in Phase 2 can run simultaneously — they do not depend on each other. Chris merges their feedback.

## Suggested Timeline

Adjust based on team availability and campaign schedule.

- Phase 1: 1-2 weeks (Chris working time)
- Phase 2: 2 weeks (parallel across roles, most tasks take 1-3 hours each)
- Phase 3: 1 week (reviews and final incorporation)
- Phase 4: 1 campaign cycle (however long the pilot campaign takes to run, plus retrospective)

Total estimated time to first pilot completion: 5-7 weeks.
