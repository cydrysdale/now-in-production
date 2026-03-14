# Evaluation Process — Draft

> **Status: Draft exploration — not an approved process.**
> This evaluation approach is part of an active workflow exploration. 

## What This Is

This document describes a proposed approach for systematically evaluating whether the AI copy packet is producing good output—and how to catch it when it stops.

Evaluation is how you know the packet is working. Without it, you are relying on gut feel, which is the same problem the packet was built to solve.

## Why Evaluation Matters

AI output quality can change for reasons that have nothing to do with your team:

- A model update shifts how the AI interprets your context.
- A packet edit that improved one channel degrades another.
- A new campaign type hits a gap in your brand rules or examples.
- The AI slowly drifts toward more generic output over repeated campaigns.

If you only evaluate output when something obviously goes wrong, you miss the gradual degradation that turns useful first drafts into drafts that need heavy rewriting. Systematic evaluation catches this before it compounds.

## Three Levels of Evaluation

### Level 1: Campaign-Level QA

This happens on every campaign. It is the minimum evaluation standard.

**What:** Run the QA checklists in `04-qa-checklists.md` against every campaign before output is considered final.

**Who:** Production runs the readiness gate. Copywriter reviews strategy, proof, and workflow. Copyeditor reviews clarity, consistency, and brand fit.

**When:** Before any output leaves the team.

**How:**

1. Run the readiness gate before any draft generation.
2. After drafts are complete, run the campaign-level checklist.
3. Run the relevant channel-specific checklist for each deliverable.
4. Run the risk checklist if the campaign includes approval-sensitive claims or competitive references.
5. Score the campaign on the lightweight eval rubric (1-5 scale for strategic alignment, proof quality, workflow relevance, channel consistency, format compliance, and editorial burden).
6. Record the scores.

**What the scores mean:**

- A campaign scoring 4-5 across the board means the packet is working well for that campaign type.
- A campaign scoring 3 in any category means the spec, claims, or examples were probably incomplete for that area.
- A campaign scoring 1-2 in any category means the packet has a structural gap for that campaign type—not just a one-off miss.

### Level 2: Gold-Set Regression Testing

This happens when the packet changes, when you switch AI models, or quarterly—whichever comes first.

**What:** Maintain a small set of completed benchmark campaigns with known-good outputs. Re-run them and compare.

**Who:** Production owns the gold set. Copywriter and copyeditor validate the outputs.

**When:**

- After any change to brand rules, decision rules, or QA checklists.
- After switching AI models or updating model versions.
- Quarterly, even if nothing seems to have changed.

#### How To Build the Gold Set

Select 3-5 past campaigns that:

- Represent your most common campaign types.
- Produced output the team was satisfied with.
- Cover at least 3 different channels.
- Include at least one campaign with approval-sensitive claims.

For each benchmark campaign, save:

- The completed campaign spec.
- The completed claims ledger.
- The approved examples file.
- The final approved output for each channel.
- The QA rubric scores from the original campaign.

Store these in a dedicated folder or location that the team can access. Label each benchmark clearly with the campaign name, date, and the model version used.

#### How To Run a Regression Test

1. Load the benchmark campaign's spec, claims, and examples into a fresh AI session alongside the current version of the packet (brand rules, decision rules, QA checklists).
2. Ask the AI to produce the same deliverables as the original campaign.
3. Score the new output using the same QA rubric.
4. Compare the new scores to the original scores.
5. Have the copyeditor compare the new output to the original—note where it improved, where it degraded, and where it changed without clear improvement or degradation.

#### What To Look For

- Score drops in any category compared to the original benchmark.
- New failure modes that were not present in the original output.
- Output that is more generic, more formulaic, or less specific than the original.
- Claims or proof anchors that shifted, disappeared, or were softened.
- Channel drift—especially social diverging from email strategy.

#### What To Do With Results

- If scores improved or held steady: the packet is working. No action needed.
- If scores dropped in one category: investigate whether a packet edit caused it or whether the model changed. Fix the root cause.
- If scores dropped across the board: this is a systemic issue. Review the packet changes since the last regression test and revert or revise.
- If a model update caused degradation: test whether updating the brand rules, decision rules, or examples resolves it before switching models.

#### Regression Test Record

| Date | Trigger | Benchmark Campaign | Model | Strategic Alignment | Proof Quality | Workflow Relevance | Channel Consistency | Format Compliance | Editorial Burden | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | | | | |

### Level 3: Cross-Campaign Learning

This happens monthly or quarterly. It turns individual campaign feedback into system-level intelligence.

**What:** Review editorial burden scores, editor feedback logs, and eval trends across multiple campaigns to identify patterns that individual campaign reviews miss.

**Who:** Production leads the review. Copyeditor contributes editorial pattern data. Copywriter contributes strategic pattern data.

**When:** Monthly during active campaign periods. Quarterly during slower periods.

**How:**

1. Collect the eval rubric scores from all campaigns since the last review.
2. Collect the editor feedback log entries from the same period.
3. Answer these questions:

#### Performance Trends

- Are editorial burden scores improving, stable, or declining over time?
- Which campaign types consistently score highest? Which score lowest?
- Which channels consistently need the most editorial rework?
- Is AI output quality improving as the team gets better at filling out specs, or is it flat?

#### Recurring Failure Modes

- Are the same issues appearing in the editor feedback log across multiple campaigns?
- Are any issues appearing that the current QA checklists do not catch?
- Are workflow tie-ins becoming more generic over time?
- Are proof anchors drifting later in the copy or becoming weaker?
- Is social content drifting further from email strategy over time?

#### Packet Effectiveness

- Did any recent packet updates measurably improve output quality?
- Did any recent packet updates introduce new problems?
- Are there campaign types where the packet consistently underperforms?
- Is the packet the bottleneck, or is incomplete input the bottleneck?

#### Action Items

- If the same editor feedback issue appears in three or more campaigns, it should become a packet update—a new brand rule, decision rule, QA check, or anti-pattern.
- If a campaign type consistently underperforms, build a supplemental channel spec or additional approved examples for that type.
- If editorial burden is increasing despite no packet changes, run a gold-set regression test to check for model drift.
- If input quality is the bottleneck (specs are routinely incomplete, claims ledgers are missing), address the intake process rather than the packet.

#### Cross-Campaign Review Record

| Review Date | Period Covered | Campaigns Reviewed | Avg Editorial Burden | Top Recurring Issue | Packet Update Made | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | | |

## Editor Feedback Loop

The editor feedback log (`editor-feedback-log-template.md`) is the primary input for evaluation at all three levels.

**The rule:** If the copyeditor fixes the same issue twice, it becomes a packet update—not just an in-line fix.

**How the feedback loop works:**

1. Copyeditor logs every meaningful rewrite in the editor feedback log, including what was rewritten, why, and the root cause.
2. Production reviews the log after each campaign and identifies patterns.
3. If an issue recurs, route the fix to the right file:
   - Missing strategy or task definition → update the campaign spec template or add to the Asana intake questions.
   - Wrong tradeoff or escalation rule → update the decision rules.
   - Missing editorial standard or style drift → update brand rules or add an anti-pattern.
   - Missing claim approval → update the claims ledger template or add to the readiness gate.
   - Weak example set or mimicry problem → add or replace approved examples.
   - Incomplete channel spec → update brand rules channel requirements or the custom-channel section in the campaign spec.
   - Weak QA or acceptance criteria → add a checklist item.
4. After updating the packet, run the affected gold-set benchmark to make sure the fix does not degrade other output.

## Getting Started

If you are setting up evaluation for the first time, do not try to do everything at once. Start small and build.

**This week:** Start scoring every campaign on the lightweight eval rubric in `04-qa-checklists.md`. This takes 5 minutes per campaign and is the minimum viable evaluation. Record the scores somewhere the team can access them.

**This month:** Select your first 3 gold-set benchmark campaigns from recent work the team was satisfied with. Save the complete input set and approved output for each one. You do not need to run regression tests yet—just build the benchmarks.

**Next quarter:** Run your first gold-set regression test and your first cross-campaign review using the scores and editor feedback logs you have accumulated by then.

**Ongoing:** Run gold-set regression tests when the packet changes or when you switch models. Run cross-campaign reviews monthly or quarterly depending on campaign volume.

## What Not To Do

- Do not skip evaluation because the output "looks fine." The entire point is to catch gradual drift that is invisible campaign by campaign.
- Do not build an evaluation process so complex that nobody runs it. Start with the rubric scores and the editor feedback log. Add the gold set when you have bandwidth. Add cross-campaign reviews when you have enough data.
- Do not treat evaluation scores as performance reviews for people. The scores evaluate the packet and the system, not the individuals using it.
- Do not change the packet based on a single bad campaign. Look for patterns across multiple campaigns before updating. One-off failures are usually input problems, not packet problems.
