# Section 8: The Recipe Card — Spec Writing

## Failure Example

A marketing lead builds a detailed prompt for the monthly competitive landscape brief. It's good — specific, well-structured, and produces strong output every time she runs it. She includes the right context, sets the right tone, catches the nuances. The brief comes back clean. The CMO approves it without changes for three months straight.

Then the marketing lead goes on vacation.

Her colleague picks up the task. He has the prompt — she shared it before she left. He pastes it into a new session and runs it. The output is wrong in ways that are hard to pin down. The structure is right. The format is right. The data is... mostly right. But the brief leads with a competitive move the CMO already discussed last week and dismissed as noise. It misses the pricing shift that's been the CMO's obsession for a month. It cites a source the legal team flagged two briefs ago. And the executive summary reads like an industry overview when the CMO wants a decision-support tool.

Her colleague didn't do anything wrong. He ran the exact prompt. The problem is what the prompt didn't contain. The CMO had deprioritized Acme's enterprise push in last Tuesday's leadership sync — the colleague didn't know that. Legal flagged Cirrus's analyst report two briefs ago — not in the prompt. Bolt's pricing shift was the CMO's current obsession — nowhere on the ticket. And the brief was supposed to be a one-pager for elevator reading, not a comprehensive reference — a fact that lived in the marketing lead's head, not in the words she shared.

The marketing lead knew all of this. It lived in her head, not in the prompt. Every time she ran the brief, she unconsciously loaded the right context, weighted the right priorities, and filtered through the right lens. She wasn't running a prompt. She was running a prompt *plus herself* — and the "herself" part was doing more than half the work.

Her prompt was personal. It required her presence to produce the right output. A different person, running the same words, got a different result — not because the words were wrong, but because the words were never the whole system.

That's the gap between a prompt and a spec. A prompt works when the author runs it. A spec works when anyone runs it.

The colleague's output was the 80% problem in its purest form. Not bad — structurally plausible, tonally correct, and wrong in ways that make rework harder than starting fresh. He couldn't just fix the brief. He'd have to understand everything the marketing lead understood to know *what* to fix, because the errors weren't on the surface. They were in the priorities, the context weighting, and the judgment calls baked into knowledge the prompt never captured.

## Theory

Section 7 ended with a house philosophy — the standing priorities that tell the kitchen what kind of restaurant this is. Combined with the context packet from Section 6, you now have the raw materials for the final discipline: spec writing.

But spec writing isn't just "combine everything you've built." It's the discipline of making that combination transferable — turning the system in your head into a document that works without you.

### A spec is not a long prompt

This is the most common misunderstanding, and it's worth being direct about it: a specification is not a detailed prompt. Length has nothing to do with it.

A prompt is personal. It draws on the author's presence — their knowledge of what matters this month, their sense of which sources are reliable, their feel for the CMO's current priorities. The marketing lead's prompt worked beautifully for her because she filled every gap silently, every time. She *was* part of the system.

A spec is transferable. It captures not just what to do, but the context it needs, the priorities that guide judgment calls, the constraints that prevent known failures, and the checks that verify the output. A spec survives the vacation test: someone else, running it without the author's institutional knowledge, gets a recognizable result.

The distinction isn't about detail. A prompt can be extraordinarily detailed and still fail the vacation test — because the details describe the *what* without encoding the *why*, the *what if*, and the *according to whom*. A spec captures the thinking, not just the instruction.

### The recipe card

In kitchen terms, this is the difference between a cook who watches the head chef plate a dish and tries to replicate it, versus a cook who has the recipe card.

A recipe card has everything: ingredients, quantities, technique, plating photo, allergen flags, timing notes, quality standards. A cook who has never made the dish can execute it without a phone call to the head chef. Not because the card eliminates all judgment — the cook still adjusts for the oven's hot spots and the produce that arrived today — but because the card captures enough of the system that a competent cook can succeed.

That's what a spec does for the competitive brief. It assembles the complete order, the context packet, the house philosophy, the station assignments, the plating standards, the house rules, and the tasting system into a single document. Each piece you've built in this guide is an ingredient. The recipe card is the assembled dish — the one place where everything lives together and works as a system.

### Seven components of a recipe card

You've built each of these across the guide. Here's how they assemble:

| Component | What it provides | Where you built it |
|---|---|---|
| **Overview** (the complete order) | What the task produces, for whom, in what form, and what success looks like | Section 2 |
| **Context packet** | What materials the kitchen needs — curated, sorted by type, checked for freshness | Section 6 |
| **House philosophy** | The standing priorities that guide judgment when multiple valid approaches compete | Section 7 |
| **Station assignments** | How the work breaks into checkable stages with clean handoffs | Section 4 |
| **Plating standards** | Observable checks that define what done looks like | Section 3 |
| **House rules** | Standing constraints — Must Do, Must Not, Prefer, Escalate | Section 3 |
| **Tasting system** | Quality markers, thresholds, regression checks, known failure modes, walk-away line | Section 5 |

Notice the order. The recipe card leads with what the task is and what materials it needs, then establishes what matters, then describes how the work flows, and finally defines how the output gets checked. It follows the logic of the work, not the order the guide taught it.

### Spec quality reflects thinking quality

Here's the uncomfortable truth about spec writing: a bad spec is almost never a writing problem. It's a thinking problem.

If the context packet is vague, it's because nobody decided which materials actually matter for this task. If the house philosophy is generic, it's because nobody resolved the real tradeoffs. If the station assignments are a task list instead of a station map, it's because nobody thought about where errors compound.

A spec doesn't hide unclear thinking — it exposes it. Every gap in the spec is a gap in the design. Every ambiguous line is an ambiguity that would have been resolved by the author's presence, silently, and will now be resolved by a coin flip.

That's why the marketing lead's prompt worked for her. Her thinking was excellent — she just never wrote it down. The spec is the written version of the thinking.

### The vacation test

The simplest diagnostic for a spec: **could someone else execute this and get a recognizable result?**

Not a perfect result. Not the same result you'd produce. A recognizable one — close enough that the differences are in execution, not in intent. If a colleague running your spec produces a brief that leads with the wrong competitive move, optimizes for the wrong priority, or cites a source your team doesn't trust — that's a spec failure, not a colleague failure. The thinking wasn't captured.

The marketing lead's prompt fails the vacation test. Her spec — if she builds one — should pass it.

---

## Interactive Module: Stress Test the Recipe

<!-- Interactive module content specification — structured data for implementation -->

A draft spec that looks thorough — but how well does it actually hold up? Probe it with failure questions to find the gaps.

### Module Content

**Setup text:** Below is a draft spec for the competitive landscape brief. It covers the basics: what the brief should contain, who it's for, and some formatting requirements. It looks reasonable. Your job: stress test it. Ask the questions that reveal what's missing. Eight probe questions are available — each one targets a different way specs fail in practice. See how many gaps you can find.

**Draft spec (displayed to the reader):**

> **Competitive Landscape Brief — Monthly Spec**
>
> **Task:** Produce a monthly competitive landscape brief covering Acme, Bolt, and Cirrus for the leadership team.
>
> **Format:** One-page comparison table with executive summary. All claims sourced.
>
> **Data sources:** Competitor websites, press releases, industry reports, internal win/loss data.
>
> **Deliverable:** PDF, distributed the first Monday of each month.
>
> **Quality check:** Review for accuracy before distribution.

**Mechanic:** Stress test — progressive reveal. Eight probe questions are available. The reader clicks each one to reveal the gap it exposes. A counter tracks how many gaps the reader finds. After all probes are revealed, a revised spec is shown with the patches applied.

**Probe 1: "What is the output, exactly?"**

- **Gap revealed:** "A monthly competitive landscape brief" is a category, not a deliverable. Is this a decision-support one-pager the CMO skims in the elevator? A comprehensive reference document for the strategy team? A forward-looking analysis or a backward-looking summary? The spec says "comparison table with executive summary" — but the purpose of the brief determines whether the comparison is by market position, pricing, product capability, or all three. Without a defined purpose, the cook picks whichever frame seems most thorough.
- **Patch:** *"A one-page decision-support brief the CMO reads before leadership meetings. Purpose: surface the three to five most significant competitive moves this month and their implications for our positioning. Not a comprehensive reference document."*

**Probe 2: "Who is the audience, and what do they do with this?"**

- **Gap revealed:** "The leadership team" is six people with six different needs. The CMO skims on her phone. The VP of Sales wants competitive talking points. The CTO cares about product capability gaps. The spec doesn't say which reader's needs take priority when space is tight — so the cook tries to serve everyone and serves no one well.
- **Patch:** *"Primary reader: CMO. She reads on her phone before meetings. The brief must be scannable in under two minutes. Secondary readers: VP Sales (competitive positioning), VP Product (capability gaps). When space forces a tradeoff, optimize for the CMO's use case."*

**Probe 3: "How is success measured?"**

- **Gap revealed:** "Review for accuracy" is the entire quality system. There's no definition of what "accurate" means for this brief, no quality markers, no thresholds, no regression checks. After six months, how will you know if the brief is still as good as month one? The spec has no tasting system — so quality evaluation is a gut check that drifts over time.
- **Patch:** *"Quality markers: (1) Every competitor entry includes at least one insight the leadership team hasn't seen before — pass/fail. (2) All data points sourced to a dated, public reference — pass/fail. (3) Executive summary is actionable, not descriptive — the reader can do something with it. Regression check: compare against the January baseline monthly. Walk-away line: if the reviewer rewrites more than 30% two months running."*

**Probe 4: "What should never happen?"**

- **Gap revealed:** No house rules. No Must Not Do, no Escalate triggers. The spec doesn't prohibit roadmap speculation, doesn't flag when a new competitor should be added, and doesn't define what happens when a major event breaks the standard template. The analyst's roadmap-speculation brief from Section 3 could happen again because nothing in this spec prevents it.
- **Patch:** *"Must Not: speculate about competitor internal strategy or roadmaps. Must Not: cite sources the team hasn't previously verified without flagging. Escalate: if a competitor is acquired or launches a major product, flag for special handling — don't fold into the standard template. Prefer: recent quarter data over historical trends when space is limited."*

**Probe 5: "What gets escalated instead of guessed?"**

- **Gap revealed:** This is the Escalate gap again, but from a different angle. The spec has no guidance for edge cases. What if a major competitive move happens the Friday before the brief is due? What if the data contradicts the CMO's stated position? What if a competitor that isn't on the approved list makes a significant move? Without escalation rules, the cook either guesses or ignores — both dangerous for a brief the CMO relies on for decisions.
- **Patch:** *"Escalate if: a major move (acquisition, product launch, leadership change) happens within 48 hours of deadline — ship the brief on time with a preliminary flag, full analysis in a follow-up. Escalate if: data contradicts a position the CMO has stated publicly. Escalate if: a non-tracked competitor makes a move that could affect our top three."*

**Probe 6: "What if key data is missing or stale?"**

- **Gap revealed:** "Data sources: competitor websites, press releases, industry reports, internal win/loss data" is a category list, not a context packet. The spec doesn't distinguish stable context from task-specific context. It doesn't specify freshness requirements. It doesn't say what to do when this month's pricing data isn't available yet, or when the win/loss data hasn't been updated. The 45-page dump from Section 6 could happen again because the spec doesn't specify what form each source should take.
- **Patch:** *"Context packet: Stable — approved competitor list, format template, house rules. Load every run. Task-specific — this month's competitive moves (sourced, dated within the current quarter), current pricing data (dated). Source fresh each run. Source of truth — legal's sourcing policy, public messaging framework. Summarize-don't-paste — win/loss data (extract key themes, not full spreadsheet). Freshness rule: any document older than one quarter must be verified as current before loading."*

**Probe 7: "Can someone else execute this without calling you?"**

- **Gap revealed:** This is the vacation test. Reading the draft spec cold: would a colleague produce the same brief the marketing lead does? The spec has no house philosophy — no standing priorities, no default optimization, no non-delegable decisions. The colleague doesn't know that brevity beats comprehensiveness, that signal beats coverage, that the CMO cares more about what changed this month than about the overall landscape. Every priority judgment will be resolved differently by a different person.
- **Patch:** *"House philosophy — Top priority: actionable signal the CMO can use in her next conversation. Second priority: current, specific data — recent moves and sourced facts. Default optimization: brevity and scannability over depth. Non-delegable: whether to include or exclude a major competitive development that could change the company's response."*

**Probe 8: "How does the work actually flow?"**

- **Gap revealed:** No station assignments. The spec describes an output but not a process. Is data compilation separate from analysis? Does the comparison happen before or after the executive summary? Are there checkpoints where errors get caught before they compound? The retrospective from Section 4 — where thin research became confused analysis became a confident but wrong summary — could repeat because the spec has no stations.
- **Patch:** *"Station 1: Compile competitive data from approved sources. Check: all three competitors present, all data dated and sourced. Station 2: Analyze significance — what changed, why it matters, what it means for us. Check: every claim traces to data from Station 1. Station 3: Draft the brief — comparison table, executive summary, recommendations. Check: summary matches analysis, format meets plating standards. Station 4: Review against house rules and tasting system. Check: no prohibited content, quality markers met, regression check against baseline."*

### Reveal

**Before: The five-line spec**

The draft spec had five lines. It named the task, the format, the sources, the deliverable, and a quality check. It looked like a spec. It was actually a prompt with headers — personal knowledge still required at every step. The marketing lead could run it because she carried the missing sixty percent in her head. Her colleague could not.

**After: The patched spec**

*Visual: The original five-line spec on the left. The patched spec on the right, with each probe question's patch added in a different color mapped to the component it represents (overview, context packet, house philosophy, station assignments, plating standards, house rules, tasting system). The patched spec is visibly more substantial — but the reader can see that each patch corresponds to something they already built in an earlier section.*

Eight questions. Eight gaps. Every gap maps to a component the reader has already learned to build:

| Probe | Gap | Component | Built in |
|---|---|---|---|
| What is the output, exactly? | Purpose undefined | Overview (complete order) | Section 2 |
| Who is the audience? | Reader needs unresolved | Overview (complete order) | Section 2 |
| How is success measured? | No tasting system | Tasting system | Section 5 |
| What should never happen? | No house rules | House rules | Section 3 |
| What gets escalated? | No escalation triggers | House rules (Escalate quadrant) | Section 3 |
| What if data is missing? | No context packet | Context packet | Section 6 |
| Can someone else run this? | No house philosophy | House philosophy | Section 7 |
| How does the work flow? | No station assignments | Station assignments | Section 4 |

The spec didn't need more words. It needed the thinking that the words represent. Each patch is a building block the reader already knows how to build — and the stress test showed where each one belongs.

<!-- Implementation note: The counter tracks gaps found (out of 8). The reader can probe in any order. Each probe reveals a gap and its patch simultaneously. Final view shows the complete patched spec as one assembled document, with annotations linking each section to the component and the original section where the reader built it. -->

---

## Practical Exercise: Write the Recipe Card

This is the exercise the guide has been building toward. You've built every component across Sections 2 through 7. Now you assemble them into a single recipe card — one document that captures everything the kitchen needs to produce the competitive landscape brief without the head chef hovering.

Take the artifacts you've built and pull them together. The recipe card follows the structure below. For each component, you can use what you drafted in the original section, adapt it, or rewrite it now that you see how the pieces fit together.

**Component 1: Overview** *(from your complete order — Section 2)*

Your complete order had seven fields. Two of them now live in dedicated components: "relevant background" moves to the context packet (Component 2), and "constraints" move to house rules (Component 6). The remaining five form the overview:

| Field | Your spec |
|---|---|
| **Task** | *What does this produce? Be specific — not "a competitive brief" but the deliverable, its purpose, and what it's not.* |
| **Audience** | *Primary reader and their use case. Secondary readers if space allows.* |
| **Deliverable format** | *Physical form: length, structure, distribution method, cadence.* |
| **Success definition** | *How you know this month's brief worked — before you read it and after.* |
| **Likely ambiguity** | *Where will the cook guess wrong if you don't specify?* |

**Component 2: Context Packet** *(from Section 6)*

| Type | Items | Handling |
|---|---|---|
| **Stable context** | *Items that stay true across runs* | *How often reviewed* |
| **Task-specific context** | *Items sourced fresh each run* | *Freshness requirement* |
| **Source of truth** | *Documents the output defers to* | *When to check for updates* |
| **Summarize-don't-paste** | *Large materials that need extraction* | *What to extract* |

**Component 3: House Philosophy** *(from Section 7)*

| | Your spec |
|---|---|
| **Top priority** | *The one thing the brief must always deliver* |
| **Second priority** | *What matters most after the top priority is secured* |
| **Default optimization** | *When no other signal exists, optimize for...* |
| **Non-delegable decisions** | *Judgment calls the cook should never make alone* |

**Component 4: Station Assignments** *(from Section 4)*

| Station | Input | Output | Check before handoff |
|---|---|---|---|
| **1.** | *What this station receives* | *What it produces* | *How to verify before passing on* |
| **2.** | | | |
| **3.** | | | |
| **4.** | | | |

**Component 5: Plating Standards** *(from Section 3)*

| # | Plating standard | How to check |
|---|---|---|
| 1 | *Observable property of the finished output* | *What to look for* |
| 2 | | |
| 3 | | |

**Component 6: House Rules** *(from Section 3)*

| Quadrant | Rule |
|---|---|
| **Must Do** | |
| **Must Not Do** | |
| **Prefer** | |
| **Escalate** | |

**Component 7: Tasting System** *(from Section 5)*

| Component | Your spec |
|---|---|
| **Quality marker 1** | *What to check / threshold* |
| **Quality marker 2** | *What to check / threshold* |
| **Quality marker 3** | *What to check / threshold* |
| **Known failure mode 1** | |
| **Known failure mode 2** | |
| **Regression check** | *Baseline: ___ / Dimension: ___* |
| **Walk-away line** | *This task is no longer worth delegating if...* |

### After you've assembled the card

Read the complete recipe card top to bottom. Then run the vacation test: imagine handing this document to a colleague who has never produced this brief. Could they execute it without calling you?

If the answer is yes — the brief they produce might differ from yours in the edges, but it would serve the CMO's need, use the right sources, follow the rules, and hold together across monthly runs — you have a spec. Not a prompt. Not a set of instructions. A document that captures the thinking, not just the task.

If the answer is no — if you catch yourself thinking "well, they'd need to know that the CMO really cares about..." — that's a component that isn't in the card yet. Write it down. That's the gap the vacation test exists to find.

Notice what assembling the recipe card reveals about the work you've done across this guide. The complete order (Section 2) gives the spec its spine. The plating standards and house rules (Section 3) give it quality boundaries. The station assignments (Section 4) give it a process. The tasting system (Section 5) gives it an evaluation method. The context packet (Section 6) gives it the right materials. The house philosophy (Section 7) gives it judgment. No single component is a spec. Together, they are.

> **Webapp chat note:** The recipe card works in a chat session. Paste the full card — all seven components — at the beginning of your competitive brief session. It's a lot to paste, but try it once and compare the result to what you get with your usual prompt. Most people find the first output is closer to "done" than anything they've gotten from a shorter request — not because the AI is smarter, but because the thinking is on the counter instead of in your head. For recurring tasks, save the card as a template. Update the task-specific context each month. Leave everything else standing.

The recipe card is now assembled. The spec is complete. But there's one more thing — and it's the one most people never do, even with a perfect spec in hand. The spec tells the kitchen what to cook and how to judge the result. It doesn't capture the thinking that *preceded* the spec — the questions you asked yourself before you opened the editor, before you wrote the first line of the complete order, before you knew what the task actually was. That step — the two minutes of pre-AI clarification that shapes everything downstream — is what Section 9 is about.

---

## Key Lesson

> **Kitchen truth:** Spec writing is the discipline of making thinking executable.

---

<!-- Section 8 self-check:
- [x] Failure example opens with a recognizable scenario — marketing lead's prompt works for her, fails when colleague runs it on vacation
- [x] Failure distinguishes prompt (personal, requires author's presence) from spec (transferable, survives handoffs)
- [x] The 80% problem explicitly named — structurally plausible, tonally correct, wrong in ways that make rework harder than starting fresh
- [x] Cross-framework bridge: explicit connection from Section 7's house philosophy + Section 6's context packet to spec writing as the integrating discipline
- [x] "A spec is not a long prompt" — core distinction explained clearly
- [x] The vacation test defined as the diagnostic for spec quality
- [x] Seven components of a recipe card defined in a table with "Where you built it" column
- [x] Spec quality reflects thinking quality — a bad spec is a thinking problem, not a writing problem
- [x] Interactive module: stress test mechanic with 8 probe questions
- [x] Interactive draft spec is deliberately incomplete — looks reasonable but has gaps
- [x] Each probe reveals a gap and maps to a specific component from the guide
- [x] Reveal table maps all 8 probes to components and original sections
- [x] Practical exercise: full recipe card template with all seven components
- [x] Exercise references back to specific sections where each component was built
- [x] Exercise includes the vacation test as the final check
- [x] Exercise feels like a culmination — "this is the exercise the guide has been building toward"
- [x] Plants handoff for Section 9: the thinking that preceded the spec, pre-AI clarification
- [x] Does NOT teach pre-AI clarification — only names it as what comes next
- [x] Does NOT relitigate building blocks — references them, assembles them, doesn't re-explain
- [x] Key lesson is one sentence, matches 04a
- [x] Running example contribution: Reader has a complete recipe card (full spec) for the competitive brief
- [x] No developer-centric framing — all examples are marketing
- [x] Kitchen language used naturally: recipe card, cook, kitchen, head chef, plate, counter, pantry, station, the pass, service
- [x] Sentence structure varies — no monotonous patterns
- [x] Pull-quote-worthy lines: "A prompt works when the author runs it. A spec works when anyone runs it," "A spec doesn't hide unclear thinking — it exposes it," "Spec writing is the discipline of making thinking executable"
- [x] Acme, Bolt, Cirrus used consistently as canonical competitors
- [x] No faux-specific statistics
- [x] Webapp chat note provides practical guidance for chat-session users
- [x] MCP not referenced in main content — appropriate for this section's focus on assembly
-->
