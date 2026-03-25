# Section 2: The Complete Order

## Failure Example

A marketing coordinator needs to report on last quarter's campaigns. She types: *"Summarize Q2 campaign results."*

She gets back twelve pages. Detailed breakdowns by channel, spend analysis, audience segmentation, A/B test outcomes, attribution modeling notes. It's thorough, well-organized, and completely wrong — not because any of the analysis is bad, but because she needed a one-page highlights email for the VP of Marketing. Something her boss could skim between meetings.

Twelve pages of correct analysis. Zero pages of what was actually needed.

The AI didn't misunderstand the request. It understood exactly what was asked — "summarize Q2 campaign results" — and delivered a reasonable interpretation. The problem is that the request carried almost none of the information required to get the right output. What's the actual deliverable? Who reads it? How long should it be? What counts as a "result"? What's the decision this summary is supposed to support?

The coordinator knew all of this. She just didn't say it, because in her head, "Q2 campaign results summary" already meant "a one-page email with the top five wins, sent to my boss." That meaning was invisible — shared context that existed in her mind but never made it onto the ticket.

This isn't a prompt craft problem. The request was clear. It isn't a context problem — the AI had the campaign data. It's a *completeness* problem. The ticket told the cook what to make, but not what the plate should look like, who it was being served to, or how the table would know it was right.

## Theory

Section 1 gave you the four disciplines and showed that most failures aren't prompt problems — they're structural. But knowing *which discipline failed* isn't the same as knowing how to prevent the failure. That's where the building blocks come in.

The complete order is the first building block. It's what a task definition needs to become when the person who knows the answer isn't standing at the counter to fill in the blanks.

### What makes an order incomplete

Most requests lean on invisible shared context. The coordinator's "summarize Q2 results" depended on seven things she knew but didn't write down:

- **What the actual outcome is.** Not "a summary" — a one-page highlights email for a specific person.
- **Who it's for.** The VP of Marketing, who reads between meetings and needs to scan, not study.
- **What background matters.** Which campaigns ran, which were experimental, which the VP already knows about.
- **What form the output takes.** Email, not a report. Five highlights, not a comprehensive breakdown.
- **What success looks like.** The VP reads it in two minutes and knows the quarter's story.
- **What's off-limits.** Pipeline impact only — vanity metrics dilute the signal.
- **Where the ambiguity is.** "Results" could mean spend, reach, conversions, or brand lift. The coordinator means pipeline contribution.

When any of those stay invisible, the cook fills the gap with a reasonable guess. Reasonable guesses are how you get twelve pages of correct analysis that nobody asked for.

### Specificity is not verbosity

A complete order isn't about writing more. It's about removing the ambiguity that forces the cook to guess.

Compare:

> *"Summarize Q2 campaign results."*

> *"Write a one-page email for the VP of Marketing highlighting the top five campaign results from Q2, measured by pipeline contribution. She reads these between meetings — keep it scannable. Lead with the single biggest win."*

The second version is longer, but every additional word removes a guess. Nothing in it is decoration or padding — it's all operational detail the cook needs to plate the right dish. Cut any sentence and you reintroduce ambiguity.

A long prompt full of general guidance ("be creative," "think step by step," "use a professional tone") is not a complete order. It's a vague order with extra words. Specificity means each field answers a question the cook would otherwise have to guess at. Verbosity means adding words that don't eliminate any guesses.

### The fields of a complete order

A complete order doesn't have a rigid template — the fields shift by task. But most marketing work needs some version of these seven:

| Field | What it answers | The coordinator's gap |
|---|---|---|
| **Actual outcome** | What concrete thing does this produce? | "A summary" vs. "a one-page highlights email" |
| **Audience** | Who reads, uses, or acts on this? | The VP, reading between meetings |
| **Relevant background** | What does the cook need to know that isn't obvious from the request? | Which campaigns ran, which matter most |
| **Output form** | What does the deliverable physically look like? | Email, scannable, five sections |
| **Success definition** | How will you know this worked? | VP reads it in two minutes and gets the quarter's story |
| **Constraints** | What's off-limits or non-negotiable? | Pipeline impact only, not vanity metrics |
| **Likely ambiguity** | Where will the cook probably guess wrong? | "Results" means pipeline, not reach |

The last field — **likely ambiguity** — is the one people skip most often. It's also the highest-leverage one. If you can predict where the cook will guess, you can prevent the guess before it happens. Every other field describes what the task needs. This one describes where the task will silently go wrong if you stop here.

### What a complete order is not

A complete order names the background the task needs — "include last quarter's win/loss data" or "the VP already knows about the brand campaign, focus on the product launches." That's a ticket field. It tells the cook what ingredients matter for *this order*.

It does not build the full mise en place. Deciding what goes on the counter, how it's organized, what needs to be summarized versus loaded in full, what's stable reference versus task-specific material — that's context design, and it gets its own section later. A complete order points at the pantry. It doesn't stock it.

---

## Interactive Module: The Missing Ticket

<!-- Interactive module content specification — structured data for implementation -->

A casual request hides a lot of missing information. Click to reveal what's been left out.

### Module Content

**Setup text:** A marketing manager types this request into a chat:

> *"Draft a blog post about our new feature launch."*

That's the whole prompt. It's clear, grammatically correct, and missing almost everything the AI needs to get it right. Click each card to reveal a hidden gap — one for each field of a complete order.

**Visual:** A progress meter that starts near empty. Each revealed gap fills in another piece. Treat the meter as a teaching device, not a literal audit — the point is that the starting prompt covers a small fraction of what the task actually needs.

**Starting state:** The request identifies the task type (blog post) and the topic (feature launch). Everything else is a guess.

**Gap 1: Actual Outcome**
- **What's missing:** What should this blog post accomplish? Drive signups? Educate existing users? Build SEO authority? Announce to press? "A blog post" is a format, not an outcome.
- **What the AI will guess:** General announcement — a bit of everything, committing to nothing.

**Gap 2: Audience**
- **What's missing:** Who reads this? Developers evaluating the API? Marketing leaders comparing tools? Existing customers who need to know what changed?
- **What the AI will guess:** Generic "professional audience" — the blog post equivalent of a turkey wrap platter.

**Gap 3: Relevant Background**
- **What's missing:** What source material should this be based on? The product spec? The PM's launch brief? A press release draft? The feature's actual documentation?
- **What the AI will guess:** Whatever it can infer from the request, plus general knowledge. This is where hallucinated feature details come from — the cook reaches for ingredients that aren't on the counter.

**Gap 4: Output Form**
- **What's missing:** Is this a 300-word announcement or a 1,500-word deep dive? Subheadings or flowing prose? Code examples? Screenshots referenced? CTA at the end?
- **What the AI will guess:** Standard blog format — intro, three body paragraphs, conclusion. Safe and generic. The twelve-page summary problem in miniature.

**Gap 5: Success Definition**
- **What's missing:** What separates a passing draft from a good one? "I can publish this with light edits" is a different bar than "I need a rough starting point to rework."
- **What the AI will guess:** Aim for polished — because the AI often interprets quality as thoroughness, which means over-written.

**Gap 6: Constraints**
- **What's missing:** Anything the post must avoid? Competitor mentions? Pricing details? Unreleased features? Legal-sensitive claims?
- **What the AI will guess:** Nothing is off-limits. This is how you get a blog post that discusses competitor pricing your legal team hasn't approved for public mention.

**Gap 7: Likely Ambiguity**
- **What's missing:** Where will the AI probably guess wrong? "Feature launch" could mean the headline feature, the full release, or the broader product story. "Blog post" could mean promotional, educational, or technical. Nobody flagged the likely misreads.
- **What the AI will guess:** It won't guess that it's guessing. That's the problem — every ambiguity gets resolved silently, and you only discover the wrong call when you read the output.

**Reveal (after all 7 revealed):**

*Visual: The meter is full. The original request covered roughly one-seventh of the information the task needed.*

Seven fields. The original prompt covered the task type and the topic — a fraction of what the cook needs to plate the right dish. Everything else was a silent guess, and every guess is a chance for the output to be fluent, professional, and wrong.

This is why "I need to write a better prompt" often misses the point. The prompt wasn't bad. It was incomplete. A complete order isn't about better words. It's about fewer guesses.

---

## Practical Exercise: Write the Complete Order

Take the running example — "Produce a monthly competitive landscape brief for the leadership team" — and rewrite it as a complete order.

Fill in each field:

| Field | Your answer |
|---|---|
| **Actual outcome** | *What concrete deliverable does this produce? (Not "a brief" — what exactly?)* |
| **Audience** | *Who reads this? What do they do with it? How much time do they spend on it?* |
| **Relevant background** | *What does the AI need to know about your competitive landscape that isn't public knowledge? Name the specific materials — don't assemble them yet.* |
| **Output form** | *What does this physically look like? Length, format, sections?* |
| **Success definition** | *How will you know this month's brief is good enough to send?* |
| **Constraints** | *What's off-limits? What sources are approved? What claims need verification?* |
| **Likely ambiguity** | *Where will the AI probably guess wrong if you don't specify?* |

Don't try to make it perfect — we'll add plating standards, house rules, and station assignments in the next three sections. The goal right now is to move from a one-line request to a self-contained order that a different person on your team could hand to AI and get a recognizable result.

Notice what the "relevant background" field asks you to do: *name* the materials the task needs, not *assemble* them. "Include last quarter's win/loss data and the CMO's priority memo" is a complete-order field. *Organizing* those materials — deciding what to summarize, what to load in full, what to leave out — is context design, and that comes later in Section 6. A complete order points at the pantry. It doesn't stock it.

If the "likely ambiguity" field is hard to fill in, that's normal. It requires you to think about the gap between what you know and what you've written down — to predict where the cook will guess because you left a choice unmarked. That gap is the difference between an order that works when you run it and one that works when anyone runs it.

> **Webapp chat note:** Try this right now. Take your one-line version of the brief request and paste it into a chat. Look at what comes back. Then paste your complete order and compare. The difference isn't about prompt tricks — it's about how much of the invisible structure you made visible.

---

## Key Lesson

> **Kitchen truth:** Specificity is not verbosity. It is the removal of critical ambiguity.

---

<!-- Section 2 v2 self-check:
- [x] Failure example opens with a recognizable scenario (Q2 summary → 12 pages)
- [x] Opener connects failure to the discipline framework: "This isn't a prompt craft problem... It's a completeness problem"
- [x] Cross-framework bridge: explicit paragraph connecting Section 1's disciplines to Section 2's building block ("knowing which discipline failed isn't the same as knowing how to prevent the failure")
- [x] Seven fields defined consistently — prose list and field table both use seven items with matching names
- [x] "Likely ambiguity" highlighted as highest-leverage field with expanded explanation
- [x] Interactive module uses 7 gaps matching the 7 theory fields (not 8 with different labels)
- [x] Interactive labels use the same field names as the theory table
- [x] Interactive meter framed as illustrative ("treat the meter as a teaching device"), percentages use "roughly" / "a fraction"
- [x] Section 6 boundary explicitly stated: "A complete order points at the pantry. It doesn't stock it" — appears in both theory and exercise
- [x] Kitchen metaphor structural: cook guessing, ticket carrying info, plate, counter, pantry
- [x] "Specificity is not verbosity" distinction made with clear definition: "Specificity means each field answers a question the cook would otherwise have to guess at. Verbosity means adding words that don't eliminate any guesses."
- [x] Practical exercise: rewrite running example as a complete order with all seven fields
- [x] Exercise clarifies "relevant background" = name the materials, don't assemble them
- [x] Key lesson is one sentence, matches 04a
- [x] Running example contribution: Reader has a complete order for the competitive brief
- [x] No developer-centric framing — all examples are marketing
- [x] Sentence structure varies — no monotonous patterns
- [x] Pull-quote-worthy lines: "Twelve pages of correct analysis. Zero pages of what was actually needed," "A complete order points at the pantry. It doesn't stock it," "Reasonable guesses are how you get twelve pages of correct analysis that nobody asked for"
- [x] No formal building-block terms from later sections used as category labels
- [x] Framework continuity: the reader sees the complete order as the first concrete building block that operationalizes the disciplines from Section 1
-->
