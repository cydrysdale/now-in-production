# Section 0: From One Cook to a Full Kitchen

## Failure Example

You're organizing a client lunch. Twelve people, next Tuesday, the conference room on the fourth floor. You email the catering company: *"I need lunch for 12 for a client meeting next Tuesday."*

The menu comes back the next morning. Turkey wraps, mixed green salad, chips, and assorted cookies. Fine for an internal team lunch. But this is a partnership renewal meeting with C-suite guests from your biggest client. You write back: *"These are senior executives — we need something more elevated. It's a partnership renewal, so the tone matters."*

New menu. Much better — grilled salmon, roasted vegetables, a charcuterie starter. But three of the guests are gluten-free, and two of the proposed dishes aren't. You reply: *"Three attendees are gluten-free. Every course needs at least one option for them."*

Updated menu arrives. Looks good, but it's a flat list of dishes. You need appetizers for the first fifteen minutes while people settle in, mains served during the presentation, and something light for the wrap-up. *"Can you break this into three courses? Appetizers first, then mains, then dessert — timed to the meeting flow."*

New version. You're scanning the dessert options and stop — the chocolate torte has a hazelnut crust. One of the guests has a severe tree nut allergy. You almost missed it. *"Replace the torte — we have a tree nut allergy at the table. Nothing with nuts in any course."*

One more revision. The menu is right, but you realize you need printed menu cards for each place setting, not just a planning list. *"Can you format this as individual menu cards with dish descriptions? These go on the table."*

Six emails later, the catering order is exactly right. You might call this a success. And it is — but think about what just happened.

The catering company did good work at every step. They responded to your requests, adapted quickly, and delivered a professional menu. The problem was never their skill. The problem was that your first email carried almost none of the information they needed to get it right the first time.

## Theory

The catering company did solid work at every step. But you sent one order and ended up doing five other jobs across six emails:

**You stocked the counter.** "C-suite guests, partnership renewal" — context the caterer couldn't have known. Without it, they're cooking for a generic meeting.

**You posted house rules.** "Gluten-free options required, no tree nuts" — constraints that prevent specific failures. Without them, someone gets a plate they can't eat.

**You called the stations.** "Three courses, timed to the meeting flow" — you decomposed the meal into stages because a flat list of dishes isn't a lunch service.

**You caught a bad plate.** The hazelnut torte. It looked right, it fit the menu, and it would have been a serious problem. You caught it because you knew something the caterer didn't.

**You set plating standards.** "Printed menu cards with descriptions" — you defined what the finished product actually looks like. Without this, you get a planning document instead of a table-ready artifact.

The original order — "lunch for 12, next Tuesday" — was maybe 20% of the information the caterer needed. The other 80% arrived piecemeal, one correction at a time.

Now here's the thing: **this is exactly what happens with AI.**

A marketing manager opens a chat and types: "Draft a competitive positioning summary for our three main competitors." The response comes back generic. She adds competitive data from last quarter's win/loss report. Better — but three pages long, and leadership wants a one-pager. She specifies the format. The AI speculates about a competitor's roadmap; she flags the company policy against using unconfirmed sources. She breaks the task into pieces so she can check each one. She catches factual errors in the data table.

Six turns later, the summary is solid. But just like the catering order, the AI didn't fail. The setup was thin, and the human filled the gaps turn by turn.

If the only way the task works is with you steering every turn, you haven't delegated the work. You've just spread the typing across six messages.

This is the shift Part 2 is about. In Part 1, you learned to write better order tickets — clearer prompts that get more predictable results. That skill still matters. But a clear order ticket doesn't help when the pantry is empty, the house rules are missing, and nobody defined what a good plate looks like.

The question isn't *"How do I write a better prompt?"* It's *"How do I set up the kitchen so the work holds together without me standing at every station?"*

The cook doesn't change. The systems around them do.

---

## Interactive Module: The Hidden Brigade

<!-- Interactive module content specification — structured data for implementation -->

Now let's make this concrete with a marketing task. The interactive below replays a six-turn chat where a marketing manager builds a competitive positioning summary. After each exchange, tag what the human actually contributed — not the words they typed, but the structural work they were doing.

### Module Content

**Setup text:** You're watching a marketing manager build a competitive positioning summary in a chat session. After each exchange, tag the invisible work the human just did.

**Labels available at every turn:**

| Label | Kitchen Meaning |
|---|---|
| Writing the ticket | Defining the task itself |
| Stocking the counter | Providing information the AI doesn't have |
| Setting plating standards | Defining what "done" looks like |
| Posting house rules | Stating constraints that prevent specific failures |
| Calling the station | Breaking work into smaller, checkable steps |
| Catching a bad plate | Verifying output and correcting errors |

**Turn 1:**

> **Human:** "I need a competitive positioning summary for our three main competitors — Acme, Bolt, and Cirrus. Draft something for the leadership team."
>
> **AI:** *Produces a generic three-competitor overview using publicly available information. Broad strokes, no specific competitive intelligence, standard SWOT-style format.*

- **Correct tag:** Writing the ticket
- **Feedback:** This is the order ticket — the starting request. It's clear enough to get something back. But notice what it doesn't include: no competitive data, no format preference, no constraints, no definition of done. The cook received an order. Everything else is still missing.

**Turn 2:**

> **Human:** "Good start, but you're missing context. Here — last quarter's win/loss report shows we're losing deals to Bolt on pricing and to Acme on integrations. And our CMO mentioned Monday that Cirrus just hired three enterprise sales reps."
>
> **AI:** *Revises to incorporate win/loss dynamics, pricing pressure from Bolt, integration gap with Acme, and the Cirrus hiring signal. Output is more specific and grounded.*

- **Correct tag:** Stocking the counter
- **Feedback:** The AI had no access to the win/loss data or the CMO's comment. The human loaded the counter with the right ingredients. Without this, the cook is working with an empty pantry.

**Turn 3:**

> **Human:** "This is too much. The leadership team skims these — one page max. Give me a comparison table by segment with a 'so what' paragraph at the top."
>
> **AI:** *Restructures into a one-page format: brief executive summary paragraph, followed by a segment comparison table.*

- **Correct tag:** Setting plating standards
- **Feedback:** The cook made a perfectly reasonable three-page analysis. But the plate doesn't match what the customer actually needs. "One page, table format, 'so what' at the top" is a plating standard — an observable check that defines what done looks like.

**Turn 4:**

> **Human:** "Take out the speculation about Bolt's product roadmap. We only cite confirmed public information — that's company policy."
>
> **AI:** *Removes the speculative section and flags which claims are confirmed public information.*

- **Correct tag:** Posting house rules
- **Feedback:** "No speculation, public sources only" is a house rule — a standing constraint that prevents a specific class of failure. The cook fills gaps with plausible reasoning when rules aren't posted. Plausible is not the same as permitted.

**Turn 5:**

> **Human:** "Let's break this up. Give me the data table first — all three competitors across our five key dimensions. Then we'll do the executive summary as a separate step."
>
> **AI:** *Produces a focused comparison table without the summary narrative.*

- **Correct tag:** Calling the station
- **Feedback:** The human decomposed it — table first, summary second — so each piece could be checked before the next one started. That's station work: one job, one handoff, one checkpoint.

**Turn 6:**

> **Human:** "The integration count for Acme is wrong — they launched four new connectors at their conference last month. It's 47, not 31. And their enterprise tier pricing changed in January."
>
> **AI:** *Corrects the integration count and pricing data.*

- **Correct tag:** Catching a bad plate
- **Feedback:** The output looked polished. The numbers were wrong. The human caught it because she knows the competitive landscape. Without this check, incorrect data ships to the leadership team.

**Reveal (after all six turns tagged):**

*Visual: A horizontal bar or pie chart breaking down the six turns by contribution type.*

The prompt — the order ticket — was one contribution out of six. The other five were structural work the human did without naming it. When a chat session works well, it's usually because the human is running a full kitchen without realizing it.

The rest of this guide makes those invisible jobs visible, then systematic.

---

## Practical Exercise: Collapse a Chat Into a Brief

Think about the competitive landscape brief — the running example we'll build across this guide. The marketing manager's six-turn chat produced a solid result. But what if she'd sent all of that structure up front?

Try collapsing those interventions into a single starting brief.

**Step 1:** List the human interventions. What did she contribute beyond the initial request?

- Competitive intelligence (win/loss data, market signals)
- Format requirements (one page, table, executive summary)
- Policy constraints (no speculation, public sources only)
- Task decomposition (table first, summary second)
- Factual corrections (integration counts, pricing updates)

**Step 2:** Sort them by type.

| Type | Contribution |
|---|---|
| Context | Win/loss report, CMO's Cirrus comment, correct integration counts, current pricing |
| Plating standards | One page max, comparison table by segment, "so what" paragraph |
| House rules | Public sources only, no roadmap speculation |
| Station assignments | Data table → executive summary (separate steps) |

**Step 3:** Try writing a single starting message that packs in as much of this structure as you can.

You don't need a perfect spec yet — we'll build that over the next five sections. But even a rough brief that includes the context, the format, the rules, and the sequence carries far more structure than the original one-line prompt.

> **Webapp chat note:** You can do this right now in whatever chat tool you use. Pick a recent task where you went back and forth for several turns. Scroll through and list what you added at each turn. Then ask: could I have included this in my first message? That gap — between what you eventually provided and what you started with — is the space this guide teaches you to close.

---

## Key Lesson

> **Kitchen truth:** If the task only works when you babysit it, you don't have a delegable structure yet.

---

<!-- Section 0 self-check:
- [x] Failure example opens the section (catering order — universally accessible) ✓
- [x] Bridges from Part 1 (references customer-at-the-counter, order ticket, prep counter) ✓
- [x] Theory names the five hidden jobs with kitchen vocabulary ✓
- [x] Catering example bridges naturally to the AI chat version ✓
- [x] Competitive analysis chat is compressed (one paragraph) — full version lives in the interactive ✓
- [x] Interactive module content specified as structured data ✓
- [x] Practical exercise applies to the running example (competitive landscape brief) ✓
- [x] Key lesson is one sentence ✓
- [x] Running example contribution: Reader identifies what the competitive brief needs beyond a single prompt ✓
- [x] No repetition between prose and interactive — prose uses catering, interactive uses marketing chat ✓
-->
