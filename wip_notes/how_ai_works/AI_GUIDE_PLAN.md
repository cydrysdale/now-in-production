# AI Guide Plan (Reference)

This file captures the agreed “Marketing Potluck” theme, narrative structure, and working outline for a future rewrite of `guides/how-llms-work.html`.

## Goal

Teach Creative teams enough about how AI works to make logical choices about:
- which AI tools to use
- how to write effective instructions that account for context windows, attention, and success/fail criteria

The tone should be neutral and non-replacement-focused. The worked example emphasizes organizing and planning (operations) rather than generating creative content.

## Repo Context (Current Structure)

- Guides live under `guides/` and use shared assets:
  - `assets/css/style.css`
  - `assets/js/core.js` (theme + TOC)
  - `assets/js/widgets.js` (optional widgets: rule cards + audit quiz)
- Homepage reads guide metadata from `<meta>` tags and lists published guides from `guides/guides.json`.

## Narrative Pattern to Copy (From the RGB→CMYK Guide)

High-level arc to mirror:
1) Hook + “why it’s trickier than it looks”
2) One worked example carried through the entire guide
3) Stepwise progression with optional “sidequests” for deeper topics
4) Interactive “bonus dungeon” elements for practice
5) Clear “tldr” callouts and a resource section at the end

## Theme Choice

Use **Marketing Potluck Project Management**:
- Coworkers instead of friends
- Intake dump comes from Slack DMs, notes, emails, ticket snippets
- Keeps the demo “neutral” by focusing on triage, structuring data, and building an action plan (no campaign copywriting).

## Guide Outline — “How AI Works (Without the Hype): Marketing Potluck Edition”

1) Cold Open: The Marketing Potluck Problem
- Convert scattered Slack DMs + notes + emails into a dataset + coverage plan + action list.
- Start with a messy intake dump and an intentionally vague prompt.

2) What an AI Actually Is (In This Story)
- Model = operations coordinator (pattern-matching) not a truth oracle.
- You = lead who sets constraints and approves decisions.
- Core idea: “predicts text from context”; it doesn’t know anything you don’t provide.

3) Tokens: The Pieces the Model Thinks In
- Why clarity + consistent labels matter.
- Show how small wording changes shift outputs.

4) Context Window: The Size of the Prep Table
- What fits vs what gets dropped.
- Strategy: schema-first → batch processing → reconciliation.

5) Attention: Where the Model “Looks”
- Placement matters: rules first, data below, the ask last.
- Exercise: bury constraints and observe failures.

6) From Vibes to Specs: Success/Fail Criteria
- Define “done” for the potluck (coverage, owners, due dates, dependencies, risks).
- Add explicit non-goals to keep it non-threatening.

7) Structured Output: Turning Intake Into a Dataset
- Output as table/JSON with:
  - Confidence
  - Assumptions
  - Needs-clarification flag

8) Planning vs Generating
- Plans are helpful scaffolds, not guarantees.
- Enforce “mark unknowns; don’t guess.”

9) Tools vs Model: The Kitchen Appliances
- Model organizes; tools execute (Sheets/Jira/Calendar).
- Teach “tool-connected app” vs “model-only” distinction.

10) Reliability: QA the Plan
- QA checks: duplicates, missing owners, impossible timelines, dependency loops, scope creep.
- Quick quiz to spot risky assumptions.

11) Limits & Failure Modes (Neutral)
- Hallucination = filling gaps.
- Ambiguity traps: “EOW”, “launch”, “final”, unclear approvals.
- Mitigations: structured inputs, acceptance checks, chunking, verification.

12) Bonus Dungeon: Marketing Potluck Triage Sandbox (Optional)
- Practice prompt refinement and constraint handling.

13) Takeaways + Templates
- Copy/paste prompt template + checklist.
- “AI organizes and proposes; humans decide and create.”

## Worked Example Input — Marketing Potluck Intake Dump (Messy on Purpose)

- Slack DM (Demand Gen → you): “We need *something* for the webinar push next week—landing page tweaks + emails? Also UTMs are a mess.”
- Slack DM (Events): “Swag order: we’re late. Who owns vendor? Need ship-to confirmed.”
- Slack thread: “Can someone update the launch checklist? It’s in the old doc… maybe Notion?”
- Email subject: “RE: legal copy approval” body: “Legal needs 48hrs. Please stop sending ‘final final’ versions.”
- Meeting notes: “CEO wants ‘more excitement’ in the announcement. Also wants metrics weekly.”
- Slack DM (Designer): “I can do the deck polish if copy is locked by Tue 3pm.”
- Slack DM (Copy): “Which audience segment is primary for this? I have 3 versions and don’t know which is right.”
- Email: “Website hero swap requested for Monday AM. Assets?” (no link)
- Slack DM (PMM): “Messaging doc exists but it’s outdated. We need a single source of truth.”
- Jira ticket pasted: “Create campaign performance dashboard” (no owner, no due date)
- Notes: “Social: 5 posts? or 3? Need approvals. Also partner tag?”
- Slack DM (Ops): “Someone please consolidate the asset folder structure; it’s chaos.”
- Email: “Budget question: do we have approval for paid spend increase?” (no amount)
- Slack DM (Analyst): “If we want weekly metrics, define KPIs + data source. GA4 vs HubSpot?”
- Slack DM (Web): “I can’t touch the landing page without final UTM plan + tracking requirements.”
- Slack DM (Manager): “Minimize risk: no new promises in copy; stay compliant.”
- Slack DM: “Who is even the DRI for launch day comms??”
- Slack: “Need a reminder plan so approvals don’t stall again.”

## Prompt Ladder (Loosest → Most Reliable)

**V0 (confusing / realistic)**
“Organize this marketing potluck and tell me what to do next.”

**V1 (role + goal)**
“You’re a project coordinator. Convert the intake dump into a normalized table and a next-steps plan.”

**V2 (non-goals + safety)**
“Do NOT generate campaign copy, headlines, or creative concepts. Only organize, identify gaps, and plan.”

**V3 (success criteria + strict output format)**
“Success = no duplicates; each item has an owner or `Unassigned`; due date or `Unknown`; dependencies; risks; and a prioritized action list.
Output exactly:
1) `Normalized intake table` (include `Confidence` + `Assumptions`)
2) `Top 10 next actions` (include owner placeholder + time estimate band)
3) `Questions to unblock` grouped by stakeholder”

**V4 (context window + unknowns policy)**
“If too long: return schema + first batch processed, then ask for the next chunk.
If ambiguous: mark `Needs clarification`; don’t guess dates/owners/links.”

