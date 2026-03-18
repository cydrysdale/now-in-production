# Section 2 Review Feedback

Primary review target: `how_ai_works_part2/drafts/part-2a/section-02.md`

## Findings

### 1. The section has a visible internal count mismatch at the exact moment it is trying to define completeness

Lines 21-28 say the coordinator's request leaned on "at least six things she knew but didn't say." The bullet list then names six items. But the field table at lines 50-58 introduces seven fields by adding **Constraints**.

That inconsistency is small, but it lands in the core explanatory move of the section. A section called "The Complete Order" needs to feel structurally tight.

Why this matters:

- The reader is being asked to trust this as a reusable framework.
- A visible count mismatch makes the model feel less finished than it is.
- It also weakens the transition from the failure example to the field table.

Recommended fix:

- Either add constraints to the earlier six-item list, or change the wording so the first list is clearly illustrative rather than comprehensive.
- My preference: make the first list and the field table match exactly.

Relevant lines: 21-28, 50-58

### 2. The field taxonomy drifts between the theory and the interactive, which weakens transfer

The theory section gives the reader a seven-field model:

- actual outcome
- audience
- relevant background
- output form
- success definition
- constraints
- likely ambiguity

But the interactive then switches to a different set of labels:

- goal
- audience
- scope
- tone and voice
- source of truth
- length and format
- quality standard
- constraints

Those sets overlap, but they are not presented as the same framework in different clothes. As written, the reader has to do that mapping alone.

Why this matters:

- This section is supposed to teach a reusable mental model.
- When the labels drift, the model starts to feel like "a bunch of good questions" instead of one coherent building block.
- The interactive should reinforce the theory language, not partially replace it.

Recommended fix:

- Keep the interactive content, but explicitly map each omission back to the core field language.
- For example:
  - Goal -> actual outcome / success definition
  - Scope + length/format -> output form
  - Source of truth -> relevant background
  - Quality standard -> success definition
- A lighter-touch option is to rename the omission cards so they mirror the field table more closely.

Relevant lines: 46-60, 82-120

### 3. The section risks absorbing too much of Section 6's territory unless the boundary is made sharper

The theory says a complete order includes "relevant background," which is right. But some of the examples and prompts edge toward full context-packet design rather than task definition. The broadest example is the exercise prompt at line 142: "What does the AI need to know about your competitive environment, your positioning, your market?"

That question can easily pull the reader into assembling a large context packet now, even though Section 6 is supposed to teach context design as its own discipline.

Why this matters:

- The guide's architecture depends on clean separation between building blocks.
- Section 2 should teach: define the task so it is solvable without live backfilling.
- Section 6 should teach: curate the information environment so the task runs well.

Recommended fix:

- Add one sentence clarifying the boundary: a complete order names the background that matters; it does not yet build the full context packet.
- Tighten the exercise wording so "relevant background" feels like "what must be named on the ticket" rather than "gather every useful document."

Relevant lines: 25-28, 54, 142

### 4. The percentage mechanic in the interactive needs clearer framing as illustrative, not factual

The progress meter starts at "roughly 15%" and fills by fixed increments to reach ~100%. As an interactive device, that works. As prose, it risks sounding more empirical than it is.

The context packet did authorize a "~15%" reveal, so this is not a brief violation. But the guardrails also explicitly warn against invented numbers becoming pseudo-facts.

Why this matters:

- The guide's tone works best when it sounds precise without sounding fake-quantified.
- Readers may remember the number more strongly than the concept if it is presented as if measured.

Recommended fix:

- Keep the meter, but make the framing more obviously schematic.
- Simple options:
  - "Visually, this request starts near empty"
  - "Treat the meter as a teaching device, not a literal audit"
  - "The prompt covers only a small fraction of what the task needs"

Relevant lines: 78-80, 124-128

## Open Questions

- Do you want the field table to be the canonical reusable template for later sections, or just one illustrative framing? Right now the section reads as if it is canonical, which is why the taxonomy drift matters.
- How much do you want Section 2 to preload for the running example before Section 6 takes over? The current draft is close to that boundary but does not state it explicitly.

## What Is Working

- The failure opener is clean and recognizable. "Twelve pages of correct analysis. Zero pages of what was actually needed." is strong and memorable.
- The section does a good job separating completeness from prompt length.
- "Likely ambiguity" is a strong addition. It feels like the highest-leverage field and gives the section a sharper insight than a generic prompt checklist.
- The practical exercise is pointed at the right artifact and advances the running example appropriately.
- The key lesson is on brief and probably the strongest line in the section.

## Suggested Revision Priority

1. Fix the six-versus-seven inconsistency in the core explanation.
2. Align the interactive omissions more explicitly with the seven-field model.
3. Clarify the boundary between "relevant background" in a complete order and the fuller context-packet work in Section 6.
4. Soften the percentage language so it reads as illustrative rather than measured.
