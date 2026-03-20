# Section 0: From One Cook to a Full Kitchen

## Failure Example

You're ordering catering for a client lunch. Twelve people, next Tuesday. You email the restaurant: *"Lunch for 12, client meeting."*

Turkey wraps and cookies come back. Fine for a team huddle — wrong for a partnership renewal with C-suite guests. So you reply with the real context: senior executives, elevated tone. New menu, but three guests are gluten-free. Another reply. Better, but the courses aren't timed to the meeting flow. Another. A hazelnut crust — tree nut allergy. Another. And you need printed menu cards, not a planning list. Six emails. The restaurant did good work every time. The problem was never their skill. It was that your first message carried almost none of what they needed.

Now watch the same pattern in a different kitchen.

A marketing manager opens a chat: *"Draft a competitive positioning summary for our three main competitors."* The response is generic — broad strokes, no real competitive intelligence. She adds data from last quarter's win/loss report. Better, but it's three pages and leadership wants a one-pager. She specifies the format. The AI speculates about a competitor's roadmap; she flags the company policy against unconfirmed sources. She breaks the task into pieces so she can check each one. She catches factual errors in the competitor data.

Six turns later, the summary is solid. But just like the catering order, the AI didn't fail. The human filled the gaps turn by turn.

If the only way a task works is with you steering every turn, you haven't delegated the work. You've spread the effort across six messages.

## Theory

This is the shift Part 2 is about.

In Part 1, you learned to write better order tickets — clearer prompts that get more predictable results. That skill still matters. But the catering order and the marketing chat reveal the same thing: a clear initial request isn't enough when the real work is everything the human adds along the way.

Look at what the marketing manager actually contributed across those six turns:

**She provided information the AI didn't have.** Win/loss data, a competitor's hiring move the CMO mentioned, current market signals. Without this, the AI is working from whatever it can infer on its own — which isn't much.

**She defined what the finished product looks like.** One page, comparison table, executive summary at the top. Without this, the AI delivered a reasonable three-page analysis that nobody wanted.

**She set rules that prevent specific failures.** No speculation, confirmed public sources only. Without these, the AI filled gaps with plausible reasoning. Plausible is not the same as permitted.

**She broke the work into steps she could check.** Data table first, then the summary. Each piece verified before the next one started.

**She caught errors the AI couldn't catch on its own.** Outdated competitor data that looked right but wasn't. The output was polished. The facts were wrong.

Five types of hidden work — and all five happened outside the prompt. But there's a sixth that's easy to miss because it doesn't look like a separate step:

**She made judgment calls about what mattered.** Choosing an elevated format for C-suite guests instead of a casual summary. Deciding that unconfirmed sources cross a line, even when the analysis would have been richer with them. Prioritizing a tight one-pager over comprehensive coverage. These are tradeoff decisions — choosing between valid options based on what the situation actually needs. They shaped everything else in the chat, but they were never stated as instructions. They lived in the human's head, surfacing only when the output forced a choice.

The initial request — "draft a competitive positioning summary" — was roughly a fifth of what the task actually needed. The rest arrived one correction at a time.

This is the problem Part 2 solves. Not by teaching you to write longer prompts — you might already be a good prompter. But by making visible the work that happens *around* the prompt, then making it systematic.

The question isn't "How do I write a better prompt?" It's "How do I set up the work so it holds together without me standing at every station?"

The cook doesn't change. The systems around them do.

---

## Interactive Module: The Hidden Brigade

<!-- Interactive module content specification — structured data for implementation -->

Now let's make this concrete. The interactive below replays a six-turn chat where a marketing manager builds a competitive positioning summary. After each exchange, tag the hidden work the human just did — not the words she typed, but the structural contribution behind them.

### Module Content

**Setup text:** You're watching a marketing manager build a competitive positioning summary. After each exchange, tag the type of work the human just did.

**Labels available at every turn:**

| Label | What it means |
|---|---|
| Writing the request | Defining the task itself |
| Providing missing information | Supplying context the AI doesn't have |
| Defining what "done" looks like | Setting observable standards for the finished product |
| Setting constraints | Stating rules that prevent specific failures |
| Breaking work into steps | Decomposing so each piece can be checked |
| Catching errors | Verifying output and correcting mistakes |

**Turn 1:**

> **Human:** "I need a competitive positioning summary for our three main competitors. Draft something for the leadership team."
>
> **AI:** *Produces a generic three-competitor overview. Broad strokes, no specific competitive intelligence, standard format.*

- **Correct tag:** Writing the request
- **Feedback:** This is the starting request. It's clear enough to get something back. But notice what it doesn't include: no competitive data, no format preference, no constraints, no definition of what "done" looks like.

**Turn 2:**

> **Human:** "You're missing context. Last quarter's win/loss report shows we're losing deals to one competitor on pricing and to another on integrations. And our CMO mentioned that a third just made a significant enterprise hiring push."
>
> **AI:** *Revises to incorporate the competitive dynamics. Output is more specific and grounded in real data.*

- **Correct tag:** Providing missing information
- **Feedback:** The AI had no access to the win/loss data or the CMO's observation. The human supplied the ingredients. Without this, the output is built on whatever the AI can infer — which for internal competitive intelligence is almost nothing.

**Turn 3:**

> **Human:** "This is too long. Leadership skims these — one page max. Give me a comparison table by key dimension with a 'so what' paragraph at the top."
>
> **AI:** *Restructures into a one-page format: brief executive summary paragraph, followed by a comparison table.*

- **Correct tag:** Defining what "done" looks like
- **Feedback:** The AI produced a perfectly reasonable three-page analysis. But the finished product has to match what the audience actually needs. "One page, table, summary at top" is a standard the output can be checked against.

**Turn 4:**

> **Human:** "Take out the speculation about their product roadmap. We only use confirmed public information — company policy."
>
> **AI:** *Removes the speculative section and flags which claims are based on confirmed sources.*

- **Correct tag:** Setting constraints
- **Feedback:** "No speculation, public sources only" is a rule that prevents a specific class of failure. Without it, the AI fills gaps with plausible reasoning. Plausible is not the same as permitted.

**Turn 5:**

> **Human:** "Let's break this up. Give me the data table first — all three competitors across our key dimensions. Then we'll do the executive summary as a separate step."
>
> **AI:** *Produces a focused comparison table without the summary narrative.*

- **Correct tag:** Breaking work into steps
- **Feedback:** Table first, summary second. Each piece checked before the next one starts. That's decomposition — one job, one output, one checkpoint.

**Turn 6:**

> **Human:** "Two of these data points are wrong — the integration count is outdated and their pricing changed last quarter. Here are the correct numbers."
>
> **AI:** *Corrects the data.*

- **Correct tag:** Catching errors
- **Feedback:** The output looked polished. The facts were wrong. The human caught it because she tracks the competitive landscape. Without this check, incorrect data ships to the leadership team.

**Reveal (after all six turns tagged):**

*Visual: A bar showing the six contributions by type, with the initial request as roughly one-sixth of the total structure.*

The request — "draft a competitive positioning summary" — was one contribution out of six. The other five were structural work the human did without naming it.

And notice: several of those contributions involved *judgment*. Choosing a one-page format for an executive audience. Deciding that unconfirmed sources cross a line. Prioritizing a tight summary over comprehensive coverage. Those judgment calls shaped everything else in the chat. They're the hardest kind of hidden work to spot — and the hardest to delegate.

When a chat session works well, it's usually because the human is running a full kitchen without realizing it. The rest of this guide makes those hidden jobs visible, then systematic.

---

## Practical Exercise: Collapse a Chat Into a Brief

Think about the competitive landscape brief — the running example we'll build across this guide. The marketing manager's six-turn chat produced a solid result. But what if she'd packed all of that structure into a single starting message?

**Step 1:** List the human's contributions beyond the initial request.

- Competitive intelligence (win/loss data, market signals, competitor moves)
- Format requirements (one page, comparison table, executive summary)
- Policy constraints (no speculation, confirmed public sources only)
- Task sequence (data table first, then summary)
- Factual corrections (competitor data was outdated)
- Judgment calls (tone for audience, what counts as too speculative, brevity over thoroughness)

**Step 2:** Sort them by what they tell you about the task's needs.

| Type | What it provides |
|---|---|
| Information the task needs | Win/loss report, market signals, competitor updates |
| What "done" looks like | One page, comparison table, executive summary at top |
| Constraints | Confirmed public sources only, no roadmap speculation |
| Sequence | Data table first, summary second |
| Verification needs | Competitor data required source-of-truth checking — the human caught errors the AI couldn't |
| Judgment calls | Tone for audience, what counts as "too speculative," brevity vs. thoroughness |

Notice the last two rows. The factual corrections weren't just missing information that could have been pasted in upfront. They point to a deeper need: this task requires a way to *verify* competitive data, not just a fuller starting message. And the judgment calls aren't a type of information at all — they're decisions about what matters, and they shaped every other row in this table.

**Step 3:** Try writing a single starting message that packs in as much of this structure as you can.

You don't need a perfect spec yet — we'll build that over the next five sections. But even a rough brief that includes the information, the format, the constraints, and the sequence carries far more structure than the original one-line request.

Some of what the human contributed — especially the judgment calls and the verification needs — can't be solved just by writing a longer first message. They need something more: a way to encode priorities and a way to check the work. That's where the rest of this guide goes.

> **Webapp chat note:** You can do this right now in whatever chat tool you use. Pick a recent task where you went back and forth for several turns. Scroll through and list what you added at each turn. Then ask: could I have included this in my first message? That gap — between what you eventually provided and what you started with — is the space this guide teaches you to close.

---

## Key Lesson

> **Kitchen truth:** If the task only works when you babysit it, you don't have a delegable structure yet.

---

<!-- Section 0 v2 self-check:
- [x] Failure example opens the section (catering opener compressed to one paragraph, AI chat follows immediately)
- [x] AI failure arrives in paragraph 3, not paragraph 10
- [x] Bridges from Part 1 (references order tickets, the shift from Part 1 to Part 2)
- [x] Theory names six types of hidden work using descriptive language, not formal building-block terms
- [x] Judgment/tradeoff thread is explicit — the sixth hidden job, surfaced in theory and interactive reveal
- [x] Plants the handoff for Section 1: judgment calls are the hardest to delegate, setting up intent framing
- [x] Does NOT name the four disciplines or building blocks formally
- [x] Interactive labels match theory's descriptive vocabulary (no kitchen-term formal categories)
- [x] Interactive uses generic competitive details, no faux-specific numbers (no "47 connectors")
- [x] Practical exercise separates "known context" from "verification needs" and "judgment calls"
- [x] Exercise points forward to later sections without naming them
- [x] Key lesson is one sentence, matches 04a
- [x] Running example contribution: reader identifies what the competitive brief needs beyond a single prompt
- [x] Percentages framed as approximate ("roughly a fifth," "roughly one-sixth")
- [x] No repetition between prose and interactive — prose uses both catering and compressed marketing chat, interactive replays the marketing chat in detail
-->
