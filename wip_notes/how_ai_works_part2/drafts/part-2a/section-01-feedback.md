# Section 1 Review Feedback

Primary review target: `how_ai_works_part2/drafts/part-2a/section-01.md`

## Findings

### 1. The opener mixes framework levels, which muddies the taxonomy the section is supposed to clarify

The failure example is strong until line 19. The stale feature maps cleanly to **context**. The outdated competitive framing maps cleanly to **intent**. But the unapproved case study is labeled a **constraint** problem, which belongs to the building-block vocabulary of Section 3, not the four-discipline vocabulary Section 1 is introducing.

That creates an avoidable category wobble in the one section that needs the taxonomy to feel crisp. The reader is being told "prompting splits into four disciplines," then immediately shown a mixed set of disciplines plus a building-block term.

Why this matters:

- Section 1 is the framework section. It has less room than other sections for fuzzy category boundaries.
- The guide's guardrails explicitly warn against confusing adjacent concepts.
- This also weakens the handoff to Section 3, where house rules are supposed to be introduced properly.

Recommended fix:

- Recast the third failure in discipline language.
- The cleanest option is to frame it as a **spec writing** failure: the task lacked an executable rule about approved sources / what may be used externally.
- If you want to preserve the policy angle, add a short bridge sentence such as: "Later we'll turn those constraints into house rules. At the discipline level, this is part of spec writing."

Relevant lines: 15-21

### 2. Spec writing is defined well in theory, but it is under-demonstrated in the section's actual examples

The theory paragraph for spec writing is solid. The problem is that the section does not give the reader one clean, memorable failure that feels distinctively like spec writing rather than "context plus intent plus constraints."

The opener effectively demonstrates context and intent. The interactive has one spec-writing scenario ("The Vacation Test"), but that is where spec writing first becomes concrete. By then, the section has already taught the reader to think of the main failures as context, intent, and constraints.

Why this matters:

- Section 1's job is not just to name all four disciplines. It needs to make each one feel meaningfully different.
- Prompt craft, context design, and intent framing are easier to grasp from the current prose than spec writing is.
- If spec writing feels like a catch-all bucket, Section 8 will have to do extra cleanup later.

Recommended fix:

- Give spec writing one sharper sentence in the theory block that distinguishes it from the others by handoff risk: "The question is not whether you can do the task once. It's whether the task can survive time, handoffs, and missing supervision."
- Optionally revise the opener's third failure so it clearly points to transferability/handoff, not just policy.

Relevant lines: 47-51, 125-130

### 3. Scenario 6 in the interactive blurs intent framing with prompt craft / complete-order issues

Scenario 6 says the marketer asked for "a one-page sales enablement brief" and got a three-page technical document. That can plausibly be read three ways:

- the request was not specific enough about audience/use case,
- the task definition was incomplete,
- the AI lacked the right intent framing about what "sales enablement" should optimize for.

The feedback argues for intent framing, but the scenario itself does not fully rule out the other two. In a classifier exercise, that ambiguity needs to feel productive, not accidental.

Why this matters:

- The reveal line says diagnosis gets sharper. Ambiguous scenario construction undermines that promise.
- Section 1 is teaching dominant-cause classification, so each example needs one clearly strongest answer even if real life is messier.

Recommended fix:

- Strengthen the setup so prompt craft is clearly not the issue.
- For example: say the request already specified "one page, bullet-led, for non-technical sales reps before customer calls," then show that the output still optimized for technical completeness over scannability.
- Or choose a different intent-framing example built around value tradeoffs rather than audience/format ambiguity.

Relevant lines: 132-137

### 4. The key lesson currently resolves to building-block language instead of the section's actual takeaway

The official job of Section 1 is: diagnosis gets sharper when "prompting" is broken into disciplines. The current key lesson is:

> When the plate comes back wrong, check the counter, the house rules, and the recipe before you blame the ticket.

That sentence is not wrong, but it points the reader toward later building blocks rather than the framework introduced here. It also omits the house philosophy, which is the kitchen metaphor for intent framing.

Why this matters:

- Key lessons need to capture the section's actual claim, not a nearby claim.
- This one reads more like a bridge into Sections 2-4 than a capstone for Section 1.

Recommended fix:

- Make the key lesson explicitly diagnostic and discipline-level.
- Example direction: "Kitchen truth: The fix gets clearer when you stop calling every failure a prompt problem."
- If you want to preserve the kitchen inventory feel, include the house philosophy so all four disciplines are represented.

Relevant lines: 170-172

## Open Questions

- Do you want the opener to demonstrate all four disciplines at once, or is it acceptable for spec writing to land primarily through the interactive? Either can work, but the section should make that choice deliberate.
- Is Scenario 6 intended to be a deliberately debatable case for classroom discussion, or a clean classifier item with one dominant answer? The current writeup reads like the latter.

## What Is Working

- The failure example is recognizable and strong. "Fluent, polished, almost shipped" is exactly the right setup for this section.
- The theory voice is mostly on target: direct, concrete, and not over-explained.
- The context-design and intent-framing definitions are especially clear.
- The building-block table is a useful bridge into Sections 2-5.
- The running example exercise does advance the cumulative artifact by making the reader think about which layer would break first for the competitive brief.

## Suggested Revision Priority

1. Clean up the taxonomy in the opener so disciplines and building blocks do not get mixed.
2. Sharpen how spec writing is distinguished from the other three disciplines.
3. Tighten or replace Scenario 6 so the interactive feels diagnostically clean.
4. Rewrite the key lesson so it reflects the framework claim of Section 1, not the later building blocks.
