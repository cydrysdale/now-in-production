# Section 1: The Four Disciplines

## Failure Example

A content lead needs to draft a product newsletter for next week's send. She writes a careful prompt: audience (existing customers), goal (highlight recent updates), tone (friendly, concise), format (three short sections with headers), length (under 500 words). She even specifies which product line to focus on.

The output is fluent, well-structured, and professional. Three clean sections, punchy headers, right under 500 words. She almost hits send.

Then she reads it closely.

The first section highlights a feature the team deprecated two months ago. The second frames the product against a competitor the company no longer considers relevant — marketing shifted the positioning last quarter. The third pulls a customer success story that legal hasn't approved for external use.

The prompt was fine. The output was wrong in three completely different ways — and none of them were about how she phrased the request.

The stale feature was a **context** problem. The AI was working from old product docs because nobody loaded the current release notes. The cook reached for what was on the counter, and the counter was stocked with expired ingredients.

The outdated competitive framing was an **intent** problem. The AI picked a reasonable angle — competitive differentiation is a standard newsletter move. But marketing had shifted to value-led messaging last quarter. Nobody told the kitchen what kind of restaurant this is now. Without that standing priority, the cook optimized for what usually works.

The unapproved case study was a **spec writing** problem. The content lead knows which sources are cleared for external use. That knowledge lives in her head — it's not in the prompt, it's not written down anywhere the AI can see, and it wouldn't survive a handoff to a colleague covering her vacation. The task worked when she ran it because she caught the issue on review. But a task that depends on one person's unwritten knowledge to avoid a compliance error was never fully specified.

Three failures, three different disciplines, one well-crafted prompt. If the content lead's instinct is "I need to write a better prompt," she'll never fix any of them — because the prompt was never the problem.

## Theory

Section 0 showed you the hidden work — six jobs the human does silently alongside the prompt: stocking the counter, describing the finished plate, posting the kitchen's rules, working the stations, catching a bad plate, and making the judgment calls the kitchen can't make on its own.

Those jobs are real. But "six hidden jobs" is an observation, not a toolkit. You need a framework that tells you where to look when the plate comes back wrong.

"Prompting" isn't one skill. Once work becomes multi-step or needs to hold together without you hovering, it splits into four distinct disciplines:

**Prompt Craft — The Order Ticket**

The skill of phrasing a single request clearly. What do you want, in what format, for what audience? This is what most people mean when they say "prompting," and it's real — a vague ticket gets generic output. But it's one discipline out of four. The content lead's ticket was specific and well-structured. It still produced a broken newsletter.

**Context Design — Mise en Place**

The design of the information environment in which the task runs. Not just what's on the counter, but what *should* be there — and what shouldn't.

In Part 1, this was the prep counter: whatever you loaded into the chat. Part 2 upgrades the concept. Mise en place isn't a pile of ingredients. It's deliberate curation — choosing what's stocked, confirming it's fresh, and clearing away what doesn't belong. The content lead's counter had product docs from two months ago. The cook used them because that's what was within reach.

**Intent Framing — The House Philosophy**

The encoding of priorities, tradeoffs, and judgment calls. Context tells the kitchen what ingredients are available. Intent tells it what kind of restaurant this is — what matters most when there are multiple valid choices.

The content lead's competitive framing was wrong not because the AI lacked information, but because it lacked direction. "We've moved away from competitive positioning toward value-led messaging" is a house philosophy — a standing priority that shapes decisions even when the specific task doesn't mention it. Without it, the cook picks a reasonable approach. Reasonable isn't the same as right.

This is not brand voice. It's not a mission statement. It's operational judgment: when two good options exist, which one wins?

**Spec Writing — The Recipe Card**

A complete, executable description of what should be produced, how it should be judged, and how the work should be staged. The question isn't whether *you* can run this task successfully. It's whether the task can survive time, handoffs, and missing supervision.

The content lead's newsletter prompt worked for her — she caught the unapproved case study because she knows which sources are cleared. But that knowledge was personal. It wasn't in the task. A colleague covering her vacation would have sent the newsletter with the unapproved story in it, and neither the prompt nor the AI would have prevented it.

A recipe card isn't a longer ticket. It's a different kind of document — one that integrates context requirements, quality checks, standing constraints, and task structure into something a different cook can execute on a different night and still send out a clean plate.

### How they connect to the hidden work

Section 0's six kitchen jobs map onto this framework:

| Hidden job from Section 0 | Primary discipline |
|---|---|
| Writing the ticket | Prompt Craft |
| Stocking the counter | Context Design |
| Describing the finished plate | Spec Writing |
| Posting the kitchen's rules | Spec Writing |
| Working the stations | Spec Writing |
| Catching a bad plate | Spec Writing |
| Making the judgment calls | Intent Framing |

Notice the imbalance. Four of six hidden jobs land in spec writing. That's the point — most of the invisible work is specification work. You might spend five minutes writing the ticket and thirty minutes building everything around it. The ticket is real, but it's the smallest piece.

### How they stack

These aren't competing approaches. They're layers:

- A clear ticket can't fix a bare counter. The newsletter prompt was specific. The product docs were stale.
- Rich context can't fix a missing house philosophy. The AI had information. It lacked direction about what mattered this quarter.
- A long prompt is not a recipe card. Length is not structure. A recipe card carries what a different person would need to run the same task and get the same result.

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
- **Feedback:** The prompt worked for her because she loaded the right context, made the right judgment calls, and knew what to check. None of that was in the prompt itself. A recipe card would have included which materials to load, which themes are current, what a passing calendar looks like, and what to escalate. The prompt was personal knowledge dressed up as a task. It was never a spec.

**Scenario 6: The Executive Summary That Wasn't**

> A product marketer asks AI to draft a one-page sales enablement brief — bullet-led, for non-technical sales reps to review before customer calls. The request specifies the audience, the format, and the use case. The output is accurate and well-organized. It's also a three-page technical deep dive: architecture diagrams, integration specs, deployment notes. Everything a rep *could* learn, nothing they'd actually use in a two-minute hallway prep.

- **Correct answer:** Intent Framing
- **Feedback:** The prompt was specific — audience, format, use case were all stated. The AI had good context — the technical docs were current. But "sales enablement" to the AI meant "everything that helps a salesperson." To the product marketer, it meant "the three points a rep makes in a quick conversation." The house philosophy — optimize for scannability and field use over technical completeness — was never stated. The kitchen had the right ingredients and a clear ticket. It was missing the standing priority that tells the cook *what matters most* when good options compete.

**Reveal (after all six assigned):**

*Visual: Tally showing how many fell into each discipline.*

One prompt problem. Two context failures. Two intent failures. One spec failure. And the five structural failures were the ones that looked polished enough to almost ship — the 80% problem. The output was close, professional, and wrong in ways that only someone who knew the context, the intent, or the full spec would catch.

That's why diagnosis matters. "The AI got it wrong" isn't actionable. "The counter was stale" is. "The house philosophy was never posted" is. "The task was personal knowledge, not a transferable spec" is. The fix gets clearer the moment you stop treating every failure as a prompt problem.

---

## Practical Exercise: Diagnose a Recent Failure

Think about the competitive landscape brief. If you handed that task to AI with nothing but the request — "Produce a monthly competitive landscape brief for the leadership team" — where would it break first?

**Step 1:** For each discipline, write one likely failure:

| Discipline | What would probably go wrong? |
|---|---|
| Prompt Craft | *Example: The request doesn't specify format, length, or audience — the "ambitious intern" problem* |
| Context Design | *Example: AI doesn't have this quarter's win/loss data or recent competitive moves — the counter is bare* |
| Intent Framing | *Example: AI produces a comprehensive analysis when leadership wants a scannable one-pager — nobody posted which priority wins* |
| Spec Writing | *Example: You produce a good brief, but nobody else on the team can replicate your process — the task lives in your head* |

**Step 2:** Which discipline would break first? Which would produce the most damaging failure?

For most recurring marketing tasks, the answer isn't prompt craft. It's usually context (the counter was bare) or intent (the house philosophy was never posted). That pattern is worth noticing — it shapes where you invest your effort.

> **Webapp chat note:** Next time an AI output comes back wrong, resist the urge to rewrite the prompt. Instead, ask: Was the right information on the counter? Were the priorities posted? Could someone else run this task and get the same result? The answer tells you which discipline needs work — and it's rarely the ticket.

---

## Key Lesson

> **Kitchen truth:** The fix gets clearer when you stop calling every failure a prompt problem.

---

<!-- Section 1 v2 self-check:
- [x] Failure example opens with a well-crafted prompt that produces wrong output
- [x] Three failures mapped to three different disciplines (context, intent, spec writing) — no building-block terms used as categories
- [x] Third failure recast as spec writing (handoff/transferability) instead of "constraint"
- [x] Theory introduces all four disciplines with kitchen mappings
- [x] Spec writing distinguished by handoff/transferability: "The question isn't whether you can run this task. It's whether the task can survive time, handoffs, and missing supervision."
- [x] Cross-framework bridge: explicit mapping table from Section 0's six hidden jobs to the four disciplines
- [x] Disciplines shown as layers, not alternatives
- [x] Building blocks table bridges to Sections 2-5
- [x] Interactive module: six scenarios, only one is prompt craft
- [x] Scenario 6 strengthened: prompt already specifies audience/format/use case, ruling out prompt craft as dominant cause
- [x] Practical exercise applies to the running example
- [x] Key lesson captures Section 1's actual claim (diagnosis) — not building-block preview
- [x] Key lesson matches 04a direction: "Diagnosis gets sharper when 'prompting' is broken into disciplines"
- [x] Running example contribution: Reader identifies which discipline would break first
- [x] No developer-centric framing — all examples are marketing
- [x] "Prompt engineering" avoided — uses "prompt craft" throughout
- [x] Sentence structure varies — no monotonous patterns
- [x] Kitchen language used naturally throughout (counter, plate, house philosophy, recipe card, the cook, the kitchen)
- [x] No formal building-block terms used as category labels before their sections
- [x] Pull-quote-worthy lines: "Reasonable isn't the same as right," "Length is not structure," "The fix gets clearer when you stop calling every failure a prompt problem"
- [x] Framework continuity: explicit paragraph connecting Section 0's observation to Section 1's framework ("Those jobs are real. But 'six hidden jobs' is an observation, not a toolkit.")
- [x] Section 1 handoff planted: spec writing clearly about transferability/handoff survival, not just detail
-->
