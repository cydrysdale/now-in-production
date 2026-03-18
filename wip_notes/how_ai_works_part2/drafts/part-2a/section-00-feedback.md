# Section 0 Review Feedback

Primary review target: `how_ai_works_part2/drafts/part-2a/section-00.md`

## Findings

### 1. The opener is a valid editorial choice, but it still delays the section's core failure too long

Lines 5-19 open on the catering scenario rather than the six-turn marketing chat in the section brief. That is not inherently a mistake. In fact, the choice has two real strengths: it gives the reader a simpler, more universal setup, and it re-enters the kitchen frame immediately, which is useful after Part 1.

The problem is not that the opener is "wrong." The problem is pacing. In the current version, the universal analogy occupies the full failure-opening slot, and the actual Part 2 failure case — chat success that depended on live human intervention — does not arrive until lines 39-49. So the section bridges well, but it introduces the new problem later than it should.

Why this matters:

- Section 0 is where the competitive-brief running example is supposed to be introduced clearly.
- The current structure delays that introduction until lines 39-49, which weakens the cumulative artifact setup.
- It also makes the section feel slightly more illustrative than diagnostic; the reader recognizes the catering story, but the actual AI failure arrives after the main teaching beat has already landed.

Recommended fix:

- Keep the catering opener if you want it, but compress it and pivot to the marketing failure sooner.
- Treat the catering material as the bridge and the marketing chat as the true failure case the section is teaching.
- Reverting to the original opener is optional. The stronger revision is probably a hybrid structure, not a rollback.

Relevant lines: 5-19, 39-49

### 2. The section loses the "judgment/intent" thread, which creates a conceptual gap before Section 1

The context packet defines Section 0's hidden functions as context, judgment, decomposition, and quality control. This draft instead introduces five visible jobs: stocking the counter, posting house rules, calling the stations, catching a bad plate, and setting plating standards. That can work, but right now the relationship between the two systems is not explained.

The result is that "judgment" effectively disappears. Some of it is split across plating standards and house rules, but the draft never says that explicitly. Then Section 1 has to introduce intent framing as encoded judgment, which risks feeling like a new idea instead of a clarified version of what the reader already saw.

Why this matters:

- Section 0 should set up Section 1 cleanly.
- The reader should leave this section understanding not just that hidden work exists, but that one of the hidden jobs is tradeoff judgment.
- Right now the section is better at surfacing context, constraints, format, and checking than at surfacing priorities.

Recommended fix:

- Add one short paragraph after the five jobs that maps them back to the deeper functions:
  - context -> stocking the counter
  - judgment -> plating standards + house rules
  - decomposition -> calling the stations
  - quality control -> catching a bad plate
- If you keep "writing the ticket" in the interactive, call out that it is the visible prompt layer, not one of the hidden functions.

Relevant lines: 23-35, 63-72, 152-159

### 3. The exercise currently teaches the reader to preload post-hoc corrections instead of designing a way to verify them

Turn 6 is a quality-control moment: the human catches wrong integration and pricing data after reviewing the output. But in the exercise, those corrections get moved into the "Context" bucket as if the right lesson is "include the corrected facts up front."

That is only partly true. If the human already knows the correct values, they can provide them. But the deeper lesson is that recurring work needs a source of truth or a verification step, not just better memory from the operator. Otherwise the system still depends on a human noticing wrong numbers after the fact.

Why this matters:

- This guide is about delegated structure, not just fuller prompts.
- Treating factual corrections as ordinary context blurs the difference between "known input" and "check required before shipping."
- It weakens the handoff to later sections on station assignments and the tasting system.

Recommended fix:

- Separate "known context available at the start" from "facts the human had to correct during review."
- In Step 2, move the Acme integration count / pricing example into a "checks" or "source-of-truth requirement" note rather than plain context.
- If you want to keep it here, add one sentence clarifying that some interventions cannot simply be pasted into the brief; they indicate the need for verification design.

Relevant lines: 121-126, 146-159

### 4. The interactive adds specific running-example facts that read as invented canon rather than illustrative placeholders

The Acme/Bolt/Cirrus setup introduces specific competitive facts and numbers: pricing losses, integration gaps, three new enterprise reps, 47 vs 31 connectors, pricing changes in January. The guardrails for Part 2 explicitly warn against inventing background detail for the running example unless that detail is clearly established or clearly illustrative.

Right now these facts are vivid, which is good, but they also risk becoming accidental canon for the rest of the guide. Since no other section appears to reuse these details, the reader may treat them as one-off fiction, while the draft treats them as if they belong to the running example.

Why this matters:

- Section 0 should introduce the running example cleanly, not over-specify it with facts that the rest of the guide may not carry forward.
- The invented numbers also trigger the repo's explicit review guardrail around specific statistics and fabricated task detail.

Recommended fix:

- Either mark the interactive as fully fictional/schematic, or
- Strip the faux-specific numbers and keep the logic of each turn without inventing a mini dossier.

Relevant lines: 76-126, 140-165

## Open Questions

- Are Acme, Bolt, and Cirrus meant to persist as fictional competitors across Part 2A, or are they disposable placeholders for this one interactive? The answer should shape how much detail Section 0 is allowed to establish.

## What Is Working

- The catering example is concrete and easy to picture. It makes the "the first prompt wasn't enough" point quickly.
- Using a kitchen example first is a defensible bridge from Part 1. It gives the section immediate continuity with the guide's metaphor system.
- The key lesson is sharp and in the right voice.
- The interactive mechanic is strong. Tagging the hidden work is exactly the right exercise for this section.
- The bridge sentence at lines 47-49 lands well: the cook doesn't change; the surrounding system does.

## Suggested Revision Priority

1. Rework the opener so the delegated-work failure shows up earlier.
2. Restore the judgment/intent thread so Section 1 has a clean handoff.
3. Fix the exercise logic around factual corrections versus verification design.
4. Decide whether the interactive details are canonical or illustrative, then edit for consistency.
