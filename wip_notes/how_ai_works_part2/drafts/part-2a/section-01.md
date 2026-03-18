# Section 1: The Four Disciplines

## Failure Example

A content lead needs to draft a product newsletter for next week's send. She writes a careful prompt: audience (existing customers), goal (highlight recent updates), tone (friendly, concise), format (three short sections with headers), length (under 500 words). She even specifies which product line to focus on.

The output is fluent, well-structured, and professional. Three clean sections, punchy headers, right under 500 words. She almost hits send.

Then she reads it closely.

The first section highlights a feature the team deprecated two months ago. The second frames the product against a competitor the company no longer considers a rival — marketing shifted the positioning last quarter. The third includes a customer success story that legal hasn't approved for external use.

The prompt was fine. The output was wrong in three completely different ways — and none of them were about how the request was phrased.

The stale feature was a **context** problem. The AI was working from old product information because nobody loaded the current release notes.

The outdated competitive framing was an **intent** problem. The AI optimized for a competitive angle because nobody told it the positioning had shifted to a different value prop.

The unapproved case study was a **constraint** problem. The AI reached for a compelling example because nobody said which sources were cleared for external use.

Three failures, three different causes, one perfectly written prompt. If the content lead's instinct is "I need to write a better prompt," she'll never fix any of them.

## Theory

Section 0 showed you the hidden work — the five jobs the human does silently alongside the prompt. Now let's give that pattern a framework.

"Prompting" isn't one skill. Once work becomes multi-step or needs to hold together without you hovering, it splits into four distinct disciplines:

**Prompt Craft — The Order Ticket**

The skill of phrasing a single request clearly. What do you want, in what format, for what audience? This is what most people mean when they say "prompting," and it's real — a vague ticket gets generic output. But it's one discipline out of four.

**Context Design — Mise en Place**

The design of the information environment in which the task runs. What's stocked, what's fresh, what's within reach? The content lead's newsletter failed here first — stale product docs on the counter meant the cook reached for expired ingredients.

In Part 1, this was the prep counter. Part 2 upgrades the concept: mise en place isn't just what's on the counter, it's the deliberate curation of what should be there and what shouldn't.

**Intent Framing — The House Philosophy**

The encoding of priorities, tradeoffs, and judgment calls. Context tells the kitchen what ingredients are available. Intent tells it what kind of restaurant this is — what matters most when there are multiple valid choices.

The content lead's competitive framing was wrong because the AI had no house philosophy. It picked a reasonable angle. It just wasn't the right one, because nobody said "we've moved away from competitive positioning toward value-led messaging."

This is not brand voice. It is not a mission statement. It is operational judgment: when two good options exist, which one wins?

**Spec Writing — The Recipe Card**

A complete, executable description of what should be produced, how it should be judged, and how the work should be staged. A spec isn't a long prompt. It's a structured contract that integrates all the other pieces — context requirements, quality standards, constraints, task decomposition — into something that can survive without live supervision.

The content lead's prompt was well-crafted. But it was still a prompt — a single request optimized for one exchange. A recipe card would have included: which product docs to reference, which positioning framework to follow, which sources are approved, and what a passing plate looks like.

### How they stack

These aren't competing approaches. They're layers:

- A clear ticket can't fix a bare counter. The newsletter prompt was specific. The product docs were stale.
- Rich context can't fix a missing house philosophy. The AI had information. It lacked judgment about what mattered.
- A long prompt is not a recipe card. Length is not structure.

Each layer depends on the ones below it, but it isn't reducible to them. You can't write your way out of a context problem, and you can't load your way out of a missing intent.

### Where the building blocks fit

Sections 2 through 5 teach the concrete building blocks that make these disciplines practical:

| Building Block | What It Answers |
|---|---|
| The complete order (Section 2) | Is the task fully defined? |
| Plating standards & house rules (Section 3) | What does "done" look like? What's off-limits? |
| Station assignments (Section 4) | How is the work broken into checkable pieces? |
| The tasting system (Section 5) | How do you know if quality is holding? |

These blocks are the raw materials. The disciplines are what you do with them. We'll learn the blocks first, then come back to the disciplines in Part 2B — context design, intent framing, and spec writing as the higher-order skills that pull everything together.

---

## Interactive Module: Failure Layer Classifier

<!-- Interactive module content specification — structured data for implementation -->

Six marketing tasks went wrong. Each one produced output that was fluent, professional, and broken. Your job: figure out which discipline failed.

### Module Content

**Setup text:** Each card describes an AI failure from a marketing team. Assign each to the discipline that was the primary cause. Hint: only one of these is a prompting problem.

**Categories:**

| Discipline | Short Description |
|---|---|
| Prompt Craft | The request itself was vague or poorly structured |
| Context Design | The right information wasn't available |
| Intent Framing | The priorities or tradeoffs were never stated |
| Spec Writing | The task couldn't survive without live supervision |

**Scenario 1: The Ghost Feature**

> A product marketer asks AI to draft feature comparison copy for the website. The output is polished and accurate — except it highlights a feature that was sunset three months ago. The comparison table looks professional and completely undermines the sales team.

- **Correct answer:** Context Design
- **Feedback:** The AI didn't hallucinate the feature — it was in the product docs it had access to. Those docs were three months stale. The counter was stocked with expired ingredients.

**Scenario 2: The Ambitious Intern**

> A team lead asks AI to "write something about our sustainability initiatives for the blog." Gets back a 2,000-word thought leadership piece with statistics, industry comparisons, and a call to action. She wanted a 200-word team update.

- **Correct answer:** Prompt Craft
- **Feedback:** This one actually is a prompt problem. "Write something about sustainability" gave the AI no format, no length, no scope, and no audience. A clearer ticket would have fixed this.

**Scenario 3: The Wrong Race**

> An email marketer asks for a re-engagement campaign for churned subscribers. Gets a four-email sequence — well-written, good pacing, clear CTAs. But the sequence is aggressive: steep discounts, urgency language, countdown timers. The brand is premium and understated. The campaign feels like it came from a different company.

- **Correct answer:** Intent Framing
- **Feedback:** The AI optimized for the obvious goal — win subscribers back — and used the tactics most associated with re-engagement. But the brand's house philosophy is premium positioning over conversion pressure. Nobody told the kitchen what kind of restaurant this is.

**Scenario 4: The Stale Brief**

> A marketing analyst asks AI to summarize the competitive landscape for a quarterly review. The summary references a competitor that was acquired six months ago as if it's still an independent company. The analysis is structured well but the market map is wrong.

- **Correct answer:** Context Design
- **Feedback:** The AI worked from the information it had, and that information didn't include the acquisition. Missing context isn't a thinking failure — it's a stocking failure. The ingredient wasn't on the counter.

**Scenario 5: The Vacation Test**

> A marketing director builds a detailed prompt for generating monthly social content calendars. It works perfectly when she runs it. She goes on vacation. Her colleague runs the same prompt and gets noticeably worse output — wrong themes, inconsistent voice, off-strategy topics. Same prompt, different results.

- **Correct answer:** Spec Writing
- **Feedback:** The prompt worked for her because she loaded the right context, made the right judgment calls, and knew what to check. None of that was in the prompt itself. A recipe card would have included which materials to load, which themes are current, and what a passing calendar looks like. The prompt was personal knowledge. It was never a spec.

**Scenario 6: The Thorough Answer**

> A product marketer asks AI to draft a one-page sales enablement brief on a new feature. Gets back a comprehensive three-page technical document with architecture diagrams, integration specs, and deployment notes. Accurate, detailed, and completely wrong for the sales team audience.

- **Correct answer:** Intent Framing
- **Feedback:** The AI had good context — the technical docs were current and accurate. But "sales enablement" to the AI meant "everything a salesperson might need to know." To the marketer, it meant "the three things a rep says in a two-minute conversation." The house philosophy — optimize for quick consumption by non-technical sellers — was never stated.

**Reveal (after all six assigned):**

*Visual: Tally showing how many fell into each discipline.*

One prompt problem. Five structural failures. And the structural failures were the ones that looked polished enough to almost ship — the 80% problem. The output was close, professional, and wrong in ways that only someone who knew the context, the intent, or the full spec would catch.

That's why diagnosis matters. "The AI got it wrong" isn't actionable. "The context was stale" is. "The intent was never stated" is. "The task was a personal prompt, not a transferable spec" is. Sharper diagnosis leads to the right fix.

---

## Practical Exercise: Diagnose a Recent Failure

Think about the competitive landscape brief. If you handed that task to AI with nothing but the request — "Produce a monthly competitive landscape brief for the leadership team" — where would it break first?

**Step 1:** For each discipline, write one likely failure:

| Discipline | What would probably go wrong? |
|---|---|
| Prompt Craft | *Example: The request doesn't specify format, length, or audience — the "ambitious intern" problem* |
| Context Design | *Example: AI doesn't have this quarter's win/loss data or recent competitive moves* |
| Intent Framing | *Example: AI produces a comprehensive analysis when leadership wants a scannable one-pager* |
| Spec Writing | *Example: You can produce a good brief, but nobody else on the team can replicate your process* |

**Step 2:** Which discipline would break first? Which would produce the most damaging failure?

For most recurring marketing tasks, the answer isn't prompt craft. It's usually context (the information wasn't there) or intent (the priorities weren't stated). That pattern is worth noticing — it shapes where you invest your effort.

> **Webapp chat note:** Next time an AI output comes back wrong, resist the urge to rewrite the prompt. Instead, ask: Was the right information available? Were the priorities clear? Could someone else run this task and get the same result? The answer tells you which discipline needs work.

---

## Key Lesson

> **Kitchen truth:** When the plate comes back wrong, check the counter, the house rules, and the recipe before you blame the ticket.

---

<!-- Section 1 self-check:
- [x] Failure example opens with a well-crafted prompt that produces wrong output ✓
- [x] Three failures mapped to three different disciplines (context, intent, constraints) ✓
- [x] Theory introduces all four disciplines with kitchen mappings ✓
- [x] Disciplines shown as layers, not alternatives ✓
- [x] Building blocks table bridges to Sections 2-5 ✓
- [x] Interactive module: six scenarios, only one is prompt craft ✓
- [x] Practical exercise applies to the running example ✓
- [x] Key lesson is one sentence ✓
- [x] Running example contribution: Reader identifies which discipline would break first ✓
- [x] No developer-centric framing — all examples are marketing ✓
- [x] "Prompt engineering" avoided — uses "prompt craft" throughout ✓
-->
