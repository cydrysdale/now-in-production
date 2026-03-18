# Section 2: The Complete Order

## Failure Example

A marketing coordinator needs to report on last quarter's campaigns. She types: *"Summarize Q2 campaign results."*

She gets back twelve pages. Detailed breakdowns by channel, spend analysis, audience segmentation, A/B test outcomes, attribution modeling notes. It's thorough, well-organized, and completely wrong — not because any of the analysis is bad, but because she needed a one-page highlights email for the VP of Marketing. Something her boss could read between meetings.

Twelve pages of correct analysis. Zero pages of what was actually needed.

The AI didn't misunderstand the request. It understood exactly what was asked — "summarize Q2 campaign results" — and delivered a reasonable interpretation. The problem is that the request was carrying almost none of the information required to get the right output. What's the actual deliverable? Who reads it? How long should it be? What counts as a "result"? What's the decision this summary is supposed to support?

The coordinator knew all of this. She just didn't say it, because in her head, "Q2 campaign results summary" already meant "a one-page email with the top five wins, sent to my boss." That meaning was invisible — shared context that existed in her mind but never made it onto the ticket.

## Theory

In Part 1, you learned to write clearer order tickets — specifying audience, format, constraints. That works when you're sitting at the counter, because you can course-correct in real time. The cook plates something wrong, you say so, they adjust.

A **complete order** is what the ticket needs to become when you're not at the counter. It's a request that carries enough operational detail to be executed without the person who wrote it being in the room to backfill. Not a longer prompt — a more self-contained one.

Most requests rely on invisible shared context. The coordinator's "summarize Q2 results" leaned on at least six things she knew but didn't say:

- **What the actual outcome is.** Not "a summary" — a one-page highlights email.
- **Who it's for.** The VP of Marketing, reading between meetings.
- **What background matters.** Which campaigns ran, which were experimental, which the VP already knows about.
- **What form the output takes.** Email, not a report. Five highlights, not a comprehensive breakdown.
- **What success looks like.** The VP reads it in two minutes and knows the quarter's story.
- **Where the ambiguity is.** "Results" could mean spend, reach, conversions, or brand lift — the coordinator means pipeline impact.

When any of those stay invisible, the cook fills the gap with a reasonable guess. Reasonable guesses are how you get twelve pages of correct analysis that nobody asked for.

### Specificity is not verbosity

A complete order isn't about writing more. It's about removing the ambiguity that forces the cook to guess.

Compare:

> *"Summarize Q2 campaign results."*

> *"Write a one-page email for the VP of Marketing highlighting the top five campaign results from Q2, measured by pipeline contribution. She reads these between meetings — keep it scannable. Lead with the single biggest win."*

The second version is longer, but every additional word removes a guess. There's nothing in it that's decoration or padding — it's all operational detail the cook needs. Cut any sentence and you reintroduce ambiguity.

A long prompt full of general guidance ("be creative," "think step by step," "use a professional tone") is not a complete order. It's a vague order with extra words. A complete order is one where every field answers a question the cook would otherwise have to guess at.

### The fields of a complete order

A complete order doesn't have a rigid template — the fields vary by task. But most marketing tasks need some version of these:

| Field | What it answers | The coordinator's gap |
|---|---|---|
| **Actual outcome** | What concrete thing does this produce? | "A summary" vs. "a one-page highlights email" |
| **Audience** | Who reads, uses, or acts on this? | The VP, between meetings |
| **Relevant background** | What does the cook need to know that isn't obvious? | Which campaigns ran, which matter most |
| **Output form** | What does the deliverable physically look like? | Email, scannable, five sections |
| **Success definition** | How will you know this worked? | VP reads it in two minutes and gets the quarter's story |
| **Constraints** | What's off-limits or non-negotiable? | Pipeline impact only, not vanity metrics |
| **Likely ambiguity** | Where will the cook probably guess wrong? | "Results" means pipeline, not reach |

The last field — likely ambiguity — is the one people skip most often. It's also the highest-leverage one. If you can predict where the cook will guess, you can prevent the guess before it happens.

---

## Interactive Module: The Missing Ticket

<!-- Interactive module content specification — structured data for implementation -->

A casual request hides a lot of missing information. Click to reveal what's missing.

### Module Content

**Setup text:** A marketing manager types this request into a chat:

> *"Draft a blog post about our new feature launch."*

That's the whole prompt. It's clear, grammatically correct, and missing almost everything the AI needs to get it right. Click each card below to reveal a hidden omission.

**Visual:** A progress bar or filling meter that starts near empty. Each revealed omission adds to the percentage of "information needed."

**Starting state:** The request provides roughly 15% of what's needed — it identifies the task type (blog post) and the topic (feature launch). Everything else is a guess.

**Omission 1: Goal**
- **What's missing:** What is this blog post supposed to accomplish? Drive signups? Educate existing users? Build SEO authority? Announce to press?
- **What the AI will guess:** General announcement tone — a bit of everything, committing to nothing.
- **Meter increment:** +10%

**Omission 2: Audience**
- **What's missing:** Who reads this? Developers evaluating the API? Marketing leaders comparing tools? Existing customers who need to know what changed?
- **What the AI will guess:** Generic "professional audience" — the blog post equivalent of a turkey wrap platter.
- **Meter increment:** +10%

**Omission 3: Scope**
- **What's missing:** Is this a 300-word announcement or a 1,500-word deep dive? Does it cover just the headline feature or the full release?
- **What the AI will guess:** Medium-length, covers everything at surface level. The twelve-page summary problem in miniature.
- **Meter increment:** +10%

**Omission 4: Tone and voice**
- **What's missing:** Excited and promotional? Technical and understated? Conversational? Does the company have a style guide?
- **What the AI will guess:** Generically upbeat. "We're excited to announce..." opening.
- **Meter increment:** +10%

**Omission 5: Source of truth**
- **What's missing:** What information should this be based on? The product spec? The PM's launch brief? A press release draft? The feature's actual documentation?
- **What the AI will guess:** Whatever it can infer from the request, plus general knowledge. This is where hallucinated feature details come from.
- **Meter increment:** +15%

**Omission 6: Length and format**
- **What's missing:** Word count target? Subheadings? Bullet lists? Code examples? Screenshots referenced? CTA at the end?
- **What the AI will guess:** Standard blog format — intro, three body paragraphs, conclusion. Safe and generic.
- **Meter increment:** +10%

**Omission 7: Quality standard**
- **What's missing:** What separates a passing draft from a good one? "I can publish this with light edits" is a different bar than "I need a rough starting point."
- **What the AI will guess:** Aim for polished. Which often means over-written — because the AI interprets quality as thoroughness.
- **Meter increment:** +10%

**Omission 8: Constraints**
- **What's missing:** Anything the post must avoid? Competitor mentions? Pricing details? Unreleased features? Legal-sensitive claims?
- **What the AI will guess:** Nothing is off-limits. This is how you get a blog post that mentions competitor pricing your legal team hasn't approved for public discussion.
- **Meter increment:** +10%

**Reveal (after all 8 revealed):**

*Visual: The meter is now at ~100%. The original request filled about 15%.*

Eight fields. The original prompt covered one and a half of them (task type and topic). Everything else was a guess — and every guess is a chance for the output to be fluent, professional, and wrong.

This is why "I need to write a better prompt" often misses the point. The prompt wasn't bad. It was incomplete. A complete order isn't about better words. It's about fewer guesses.

---

## Practical Exercise: Write the Complete Order

Take the running example — "Produce a monthly competitive landscape brief for the leadership team" — and rewrite it as a complete order.

Fill in each field:

| Field | Your answer |
|---|---|
| **Actual outcome** | *What concrete deliverable does this produce? (Not "a brief" — what exactly?)* |
| **Audience** | *Who reads this? What do they do with it?* |
| **Relevant background** | *What does the AI need to know about your competitive environment, your positioning, your market?* |
| **Output form** | *What does this physically look like? Length, format, sections?* |
| **Success definition** | *How will you know this month's brief is good?* |
| **Constraints** | *What's off-limits? What sources are approved? What claims require verification?* |
| **Likely ambiguity** | *Where will the AI probably guess wrong if you don't specify?* |

Don't try to make it perfect — we'll add plating standards, house rules, and station assignments in the next three sections. The goal right now is to move from a one-line request to a self-contained order that a different person on your team could hand to AI and get a recognizable result.

If the "likely ambiguity" field is hard to fill in, that's normal. It requires predicting where the cook will guess, which means thinking about the gap between what you know and what you've written down. That gap is exactly what this section is about.

> **Webapp chat note:** Try this right now. Take your one-line version of the brief request and paste it into a chat. Look at what comes back. Then paste your complete order and compare the two results. The difference isn't about prompt tricks — it's about how much of the invisible structure you made visible.

---

## Key Lesson

> **Kitchen truth:** Specificity is not verbosity. It is the removal of critical ambiguity.

---

<!-- Section 2 self-check:
- [x] Failure example opens with a recognizable scenario (Q2 summary → 12 pages) ✓
- [x] Theory distinguishes complete order from "longer prompt" ✓
- [x] Seven fields defined with concrete examples ✓
- [x] "Likely ambiguity" highlighted as highest-leverage field ✓
- [x] Kitchen metaphor structural (cook guessing, ticket carrying info) ✓
- [x] Interactive module: progressive reveal of 8 omissions in a casual request ✓
- [x] Practical exercise: rewrite running example as a complete order ✓
- [x] Key lesson is one sentence ✓
- [x] Running example contribution: Reader has a complete order for the competitive brief ✓
- [x] Builds on Section 0-1 without repeating them ✓
- [x] "Specificity is not verbosity" distinction made explicitly ✓
-->
