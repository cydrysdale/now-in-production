# Roles And Handoffs — Draft

> **Status: Draft exploration — not an approved process.**
> This describes how a campaign would move through the packet if this workflow is adopted. We're refining through end of March 2026.

In this document, `spine` means the campaign messaging framework.

## The Flow

1. Intake
   The **campaign manager** submits the request and answers the pre-thinking questions. **Production** confirms owners and sets up the campaign working files.

2. Spec Setup
   The **campaign manager** and **copywriter** complete `03-campaign-spec-template.md`. **Copyeditor** adds known quality risks and polished-but-wrong concerns where needed.

3. Spine Draft
   The **campaign manager** drafts or refines an `UNAPPROVED` spine, optionally using `09-campaign-spine-builder-prompt.md`. The approved version is pasted back into the spec.

4. Claims And Examples
   The **copywriter** completes `06-claims-ledger-template.md` and `07-approved-examples-template.md`. **Copyeditor** reviews qualifiers, anti-patterns, and editorial cautions.

5. Human Approval
   The **campaign manager** approves the spine. The **copyeditor** confirms the editorial quality bar and failure-mode coverage. **Production** confirms the packet is complete enough to run.

6. Readiness Gate
   **Production** runs the readiness gate in `04-qa-checklists.md`. If required information or approvals are missing, the campaign does not move into drafting.

7. Core Drafting
   **Claude** drafts the long-form core assets first. The **copywriter** reviews strategy, proof, and usefulness. The **copyeditor** reviews clarity, consistency, and publishability.

8. Derived Drafting
   After long-form approval, **Claude** adapts the approved direction into shorter channels. No new claim or new strategic angle should appear here.

9. QA
   The team runs the relevant checks in `04-qa-checklists.md`. **Production** verifies completion. **Copywriter** checks strategic fit. **Copyeditor** checks editorial burden and channel fit.

10. Release And Learning
   Final human-review copy is packaged as a `.docx` file for copywriter, copyeditor, and campaign manager review. Repeated rewrite patterns go into `editor-feedback-log-template.md`. **Production** updates the packet when issues recur. Campaign scores feed the evaluation process.

## Role Summary

### Campaign Manager

- owns campaign direction and the spine
- answers the intake questions
- approves the spine before drafting
- resolves strategic conflicts

### Copywriter

- owns messaging strategy for the campaign
- completes or approves claims direction and approved examples
- reviews drafts for strategic alignment, proof, and audience usefulness

### Copyeditor

- owns editorial quality and rewrite-risk judgment
- reviews failure modes, anti-patterns, qualifiers, and editorial cautions
- reviews drafts for clarity, consistency, brand fit, and publishability
- logs repeated rewrite patterns

### Production

- owns workflow setup, packet structure, and process discipline
- confirms the right files and approvals are in place
- runs readiness and QA gates
- ensures final human-review copy is returned in `.docx` format
- maintains versioning, publishing, and packet updates

### Leads

- review only when the packet or workflow is being adopted as a shared standard

## Who Owns Each Step

| Step | Primary Owner | Key Support |
| --- | --- | --- |
| Intake | Campaign manager | Production |
| Spec setup | Campaign manager + Copywriter | Copyeditor |
| Spine draft | Campaign manager | Copywriter |
| Claims ledger | Copywriter | Copyeditor |
| Approved examples | Copywriter | Copyeditor |
| Readiness gate | Production | Copywriter + Copyeditor |
| Core drafting review | Copywriter + Copyeditor | Production |
| Derived drafting review | Copywriter + Copyeditor | Production |
| Final QA | Production | Copywriter + Copyeditor |
| Packet improvement after campaign | Production | Copyeditor + Copywriter |

## Stop Conditions

Stop and fix the packet before drafting if any of these are true:

- the audience is unclear
- the objective is unclear
- the CTA is unclear
- the spine is not approved
- the claims ledger is incomplete
- approved examples are missing for key channels
- source documents conflict
- time-sensitive facts may be stale

## The Core Rule

If the copyeditor is rewriting strategy, claims, or structure, the packet was not complete enough when drafting started.
