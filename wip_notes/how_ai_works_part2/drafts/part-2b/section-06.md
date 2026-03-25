# Part 2B: The Disciplines in Action

## Where We Are

Part 2A introduced a shift: the difference between chatting with AI and running a kitchen. Instead of one cook, one counter, one order ticket, you're the head chef — designing systems that hold together without you hovering at every station.

That shift rests on a framework. "Prompting" is not one skill. It's four disciplines: **prompt craft** (writing clear order tickets), **context design** (curating what's on the counter), **intent framing** (posting the house philosophy so the kitchen knows what matters), and **spec writing** (building recipe cards that survive handoffs). You've been working with the building blocks that make those disciplines practical — and for the competitive landscape brief, you've assembled a fair amount of structure already.

Here's what you've built so far:

- A **complete order** that defines the task without invisible assumptions.
- **Plating standards** that describe what a passing brief looks like — one page, comparison table, sourced data, three-sentence executive summary.
- A **four-quadrant house rules sheet** that draws the lines the kitchen can't cross: confirmed sources only, no roadmap speculation, flag major competitor moves instead of folding them into the template.
- **Station assignments** that break the work into checkable pieces with clean handoffs — data compilation, analysis, comparison, drafting — so errors get caught before they compound.
- A **tasting system** that makes quality visible over time: quality markers with thresholds, known failure modes, regression checks against a baseline, and a walk-away line for when the delegation stops being worth it.

Call this bundle your **kitchen setup** — the structural foundation that Part 2B builds on. If you're arriving fresh, you'll build these pieces as you go. If you're continuing from Part 2A, they're ready to use.

Part 2A taught you what goes into the building blocks. Part 2B teaches the higher-order disciplines that decide *how those blocks get assembled, what environment they run in, and what priorities guide the judgment calls.* We start with context design — because the best recipe card in the world can't fix a kitchen working from stale ingredients.

---

# Section 6: Mise en Place — Context Design

## Failure Example

A marketing analyst is preparing the monthly competitive landscape brief. She's thorough. She loads everything she can find into the session: the full company wiki page on competitive positioning (14 pages), last quarter's board deck (18 pages), the CMO's strategy memo from six months ago, current pricing sheets for Acme, Bolt, and Cirrus, a recent industry analyst report, the team's Slack thread debating a competitor's acquisition, raw notes from three different sales calls, and the complete win/loss spreadsheet going back two years.

Forty-five pages of material. She figures more is better — give the kitchen everything and let it sort out what matters.

The brief comes back unfocused. The executive summary mixes strategic language from the board deck with tactical details from the sales call notes. One section references a product name the company retired eight months ago — it was in the wiki page, which nobody updated after the rebrand. The competitive comparison uses pricing data from two different quarters because the pricing sheets weren't dated consistently. And the analyst report's framing — enterprise-first, infrastructure-heavy — bleeds into the brief's tone, even though leadership wants a market-level view, not a product-by-product teardown.

Every ingredient was real. Most of them were relevant in isolation. But piled together, with no curation and no freshness check, the counter was a mess — and the cook built the brief from whatever was within reach, in whatever order it found things. The brief didn't fail because the AI couldn't analyze. It failed because the analyst treated context as a volume problem instead of a design problem.

## Theory

Section 5 gave you the tasting system — the last building block, the one that makes quality visible over time. With the complete order, plating standards, house rules, station assignments, and tasting system in place, you have the structural materials for a well-run kitchen. But structure alone doesn't answer a question that's been lurking since Section 2: what goes on the counter?

The complete order names the background the task needs — "include last quarter's win/loss data and the CMO's priority memo." That's a ticket field. It points at the pantry. **Context design** is what happens when you actually stock it.

### Mise en place is curation, not accumulation

In a professional kitchen, mise en place isn't "put everything on the counter." It's the discipline of having exactly what you need — prepped, organized, and within reach — before service begins. The parsley is chopped. The stocks are reduced. The items you don't need tonight are in storage, not cluttering the station.

Context design works the same way. The analyst's 45-page dump was the equivalent of emptying the entire walk-in onto the prep counter before a dinner rush. Every ingredient technically available. Nothing organized. Nothing checked for freshness. The cook reaches for what's closest, and what's closest is a six-month-old strategy memo sitting on top of last week's pricing sheet.

The discipline is not "more ingredients make a better dish." It's knowing what tonight's menu requires, confirming every item is fresh, and keeping the counter clear of everything else.

### Four kinds of context material

Not all context is the same, and treating it as one undifferentiated pile is how you get the analyst's problem. Context materials sort into four types, and each type has different rules for how it gets handled:

| Type | What it is | Kitchen equivalent |
|---|---|---|
| **Stable context** | Information that stays true across runs — company positioning, team structure, recurring format requirements, approved source lists | The dry goods and house staples that are always in the pantry |
| **Task-specific context** | Information that changes with each run — this month's competitive moves, current pricing data, recent win/loss highlights | The fresh produce sourced for tonight's service |
| **Source-of-truth materials** | Documents the output must defer to, not reinterpret — the approved competitor list, legal's sourcing policy, the public messaging framework | The reference cards pinned above the station — when the plate and the card disagree, the card wins |
| **Summarize-don't-paste items** | Materials that are relevant but too large to load in full — the two-year win/loss spreadsheet, the 18-page board deck | A whole tuna versus the portioned cuts you actually need for tonight's plates |

Stable context and source-of-truth materials tend to be persistent — set them up once, review periodically. Task-specific context is temporary by nature — it gets assembled fresh each run. Summarize-don't-paste items are usually one-time prep: extract what matters, leave the rest in storage.

The analyst's 45 pages included all four types, but she treated them identically. The six-month-old strategy memo was stale task-specific context loaded as if it were current. The full two-year spreadsheet was a summarize-don't-paste item loaded in its entirety. The board deck was background material that overwhelmed the task-specific signal. The failure wasn't in what she included. It was in how she included it — no sorting, no freshness check, no curation.

### Signal, noise, and the shelf-space problem

A model's working context is finite. In kitchen terms, the counter has edges. Load it past capacity and the cook starts ignoring what's at the bottom of the pile, or worse, blending signals from incompatible sources — the board deck's strategic framing mixed with the sales call's tactical details.

This means context design involves a tradeoff that "more is better" ignores: every item on the counter takes up space that something else could use. The industry analyst report was informative. It also consumed space that could have held this month's actual competitive data. The report's enterprise framing then leaked into the brief's tone, because it was the most prominent voice on the counter.

The curation question isn't "is this relevant?" It's "is this *more relevant* than whatever it's displacing?"

### Freshness and staleness

Context has an expiration date. The analyst's wiki page referenced a retired product name because nobody had updated the page in eight months. The pricing data mixed quarters because the sheets weren't consistently dated. These aren't exotic failures. They're what happens when materials get loaded without a freshness check.

For the competitive brief, freshness rules are straightforward:

- **Competitive data** must be from the current quarter or flagged as historical
- **Pricing sheets** must carry a date, and the most recent version wins
- **Internal positioning docs** must reflect the current messaging framework — if they reference a retired product line, they're stale
- **Win/loss data** defaults to the most recent quarter unless the complete order specifies a different window

Freshness is not the same as recency. A six-month-old strategy document might be perfectly valid — if the strategy hasn't changed. But it needs a check, not an assumption. The rule: if a document's accuracy depends on nothing having changed since it was written, verify that nothing has.

### Persistent guidance vs. temporary materials

One more distinction that prevents the pile-everything-on-the-counter mistake: some context belongs in a persistent reference that carries across runs, and some is assembled fresh each time.

**Persistent guidance** includes the things the kitchen needs every service: the brief's format requirements, the approved source list, the house rules, the competitive framework (which dimensions to assess, which competitors to track). Set these up once, review them periodically, and don't rebuild them from scratch each month. In context-type terms, your stable context and source-of-truth materials usually live here.

**Temporary materials** are specific to this run: this month's competitive moves, the latest pricing data, any flagged events since the last brief. These get sourced, checked, and organized fresh each time. Last month's temporary materials are not this month's context — they're last month's context, and loading them creates exactly the staleness problem the analyst hit. Task-specific context is temporary by definition, and summarize-don't-paste items produce temporary extracts even when the source document is permanent.

The distinction matters because it reduces the assembly cost of each run. If the persistent guidance is already in place, each month's context work is a focused task: source the fresh materials, check them, organize them, done. Without the distinction, every run starts from zero — and starting from zero is how forty-five unvetted pages end up on the counter.

<details class="chest">
<summary>What about tools that connect AI to outside data?</summary>

Some AI systems can reach outside the chat session to pull in data from other tools, documents, or databases in real time. You might hear this called **MCP** (Model Context Protocol) — it's a standard way for an AI system to connect to outside sources and tools, the way a USB port is a standard way to connect a device to a computer. Instead of you copying and pasting a pricing sheet into the chat, the system could pull the latest version directly from wherever your team stores it.

This changes the logistics of stocking the counter. Fresh data is easier to reach. Documents can be pulled at the moment they're needed rather than loaded upfront. The kitchen's supply chain gets more direct.

What it doesn't change is the need for curation. A system that can pull from twelve different sources in real time has the same shelf-space problem as the analyst with 45 pages — except now the materials arrive automatically, which can make the noise problem *worse* if nobody's decided what belongs on the counter and what doesn't. Connected tools make it easier to get fresh ingredients into the kitchen. They don't tell the cook which ingredients belong in tonight's dish.

The context design work you're learning in this section — deciding what types of material belong, checking freshness, managing signal-to-noise, separating persistent guidance from temporary materials — applies whether you're pasting documents into a chat window or working with a system that pulls data automatically. The infrastructure changes. The curation doesn't.

</details>

---

## Interactive Module: Stock the Kitchen

<!-- Interactive module content specification — structured data for implementation -->

You're prepping for this month's competitive landscape brief. The counter has limited space — you can't load everything. Choose what goes on the counter and what stays in storage.

### Module Content

**Setup text:** Below are twelve items you could include when preparing the monthly competitive landscape brief. Your context budget is limited — think of it as shelf space. You can fit roughly eight items. Choose carefully: what belongs on the counter, and what should stay in the pantry?

**Visual:** A shelf/counter metaphor with a budget bar. Each item has a size (small, medium, or large). The budget bar shows remaining space. Items are dragged or clicked to add to the counter.

**Available items:**

| # | Item | Size | Context type | Note |
|---|---|---|---|---|
| 1 | This month's competitive moves — Acme launched an enterprise tier, Bolt dropped per-seat pricing, Cirrus acquired a data provider | Medium | Task-specific | Fresh, core material |
| 2 | Full company wiki on competitive positioning (14 pages, last updated 8 months ago) | Large | Stable (stale) | Needs summarizing or updating before loading |
| 3 | The approved competitor list: Acme, Bolt, Cirrus, plus criteria for what counts as a "main competitor" | Small | Source of truth | Small, stable reference |
| 4 | Board deck from last quarter (18 pages of strategy, financials, and market overview) | Large | Summarize-don't-paste | Relevant material buried in irrelevant volume |
| 5 | Last quarter's win/loss summary: 3 key themes, extracted from the full spreadsheet | Small | Task-specific | Already summarized — right form |
| 6 | The brief's format template: one-page comparison table, three-sentence executive summary, sourced claims | Small | Stable | Persistent guidance — load every month |
| 7 | CMO's strategy memo from six months ago | Medium | Stable (freshness unknown) | Check if strategy has changed before loading |
| 8 | Current pricing sheets for all three competitors (dated this quarter) | Medium | Task-specific | Fresh, dated — core material |
| 9 | The house rules sheet: confirmed sources only, no roadmap speculation, escalate major moves | Small | Source of truth | Persistent guidance — load every run |
| 10 | Full win/loss spreadsheet going back two years (raw data, 200+ rows) | Large | Summarize-don't-paste | Item 5 is the right form for this material |
| 11 | Three excerpts from recent sales calls mentioning competitor objections | Medium | Task-specific | Supplementary — include if space allows |
| 12 | Industry analyst report on the enterprise software market (12 pages, broad scope) | Large | Summarize-don't-paste | Broad scope risks pulling the brief off course |

**Scoring and feedback (after submission):**

The module reveals each item's verdict:

| # | Verdict | Explanation |
|---|---|---|
| 1 | **Essential** | This month's fresh competitive data is the core ingredient. Without it, the brief rehashes old news. |
| 2 | **Should have been summarized** | 14 pages of wiki is too much, and it's 8 months stale. Extract the 2-3 positioning points that are still current, or update the wiki first. Loading it raw puts stale material next to fresh data — exactly how the retired product name got into the analyst's brief. |
| 3 | **Essential** | The approved competitor list is a source of truth. It's small, stable, and prevents the brief from drifting to cover the wrong companies. |
| 4 | **Noise in this form** | The board deck contains some relevant strategic context, but 18 pages of mixed content overwhelms the signal. If you need the strategic framing, extract the one relevant slide. Don't load the full deck. |
| 5 | **Essential** | Summarized win/loss data is the right move — the three key themes give the cook what matters without the 200-row spreadsheet. This is summarize-don't-paste done right. |
| 6 | **Essential** | Persistent guidance. The format template should be on the counter every month — it prevents the cook from guessing at structure. |
| 7 | **Check freshness first** | Six months is long enough for strategy to shift. If the priorities in this memo are still current, it's useful stable context. If the CMO has changed direction since, it's actively misleading. Don't load without verifying. |
| 8 | **Essential** | Current, dated pricing data is core task-specific context. The key word is "dated this quarter" — pricing sheets without dates are a staleness trap. |
| 9 | **Essential** | Persistent guidance. The house rules belong on the counter every run. They prevent the failures the plating standards can't catch. |
| 10 | **Should have been summarized** | Two years of raw data is a summarize-don't-paste item. Item 5 (the three-theme summary) is the right form for this material. Loading the full spreadsheet wastes shelf space and buries the signal in noise. |
| 11 | **Useful — include if space allows** | Sales call excerpts add ground-level color that data tables miss. They're task-specific and fresh. But they're supplementary — if shelf space is tight, the core competitive data and pricing come first. |
| 12 | **Noise in this form** | Tangentially relevant, but the broad scope and enterprise-heavy framing risks pulling the brief off course. The analyst report is the dominant voice — 12 pages of industry framing will color the entire output. If one specific finding matters, extract it. Don't load the full report. |

**Reveal summary:**

*Visual: The counter with items color-coded — green (essential), yellow (useful/conditional), orange (needs work before loading), red (noise or wrong form).*

Six essential items, one conditional, one that needs a freshness check, two that should have been summarized, and two that are noise in their current form. Notice the pattern: the essential items are either small and stable (persistent guidance, source of truth) or medium and fresh (this month's data, current pricing). The noise items are large and unfocused — they contain relevant material, but the signal is buried in volume.

The analyst loaded all twelve. Eight items would have produced a better brief — not because the other four were irrelevant, but because they were the wrong *form*. A 14-page wiki is relevant; a 2-paragraph extract from it is useful. An 18-page board deck is relevant; one strategic framing slide is useful. Context design isn't just what to include. It's what form each item should take when it reaches the counter.

---

## Practical Exercise: Build a Context Packet

Take the competitive landscape brief and organize the materials you'd need into a context packet. Sort each item by type.

**Step 1: Stable context** — what stays true across monthly runs?

| # | Stable context item |
|---|---|
| 1 | *Example: The approved competitor list (Acme, Bolt, Cirrus) and assessment dimensions* |
| 2 | *(your item)* |
| 3 | *(your item)* |

**Step 2: Task-specific context** — what changes each month?

| # | Task-specific context item | Freshness check |
|---|---|---|
| 1 | *Example: This month's competitive moves (sourced, dated)* | *Is each move confirmed and from this quarter?* |
| 2 | *(your item)* | *(your freshness check)* |
| 3 | *(your item)* | *(your freshness check)* |

**Step 3: Source-of-truth materials** — what does the brief defer to, not reinterpret?

| # | Source of truth |
|---|---|
| 1 | *Example: Legal's sourcing policy — confirmed public sources only* |
| 2 | *(your item)* |

**Step 4: Summarize-don't-paste items** — what's relevant but too large to load in full?

| # | Full material | What to extract |
|---|---|---|
| 1 | *Example: Full win/loss spreadsheet (2 years)* | *Last quarter's three key themes* |
| 2 | *(your item)* | *(what to extract)* |

**Step 5:** Look at what you've organized. Is anything missing that the complete order from Section 2 called for? Is anything here that the complete order didn't mention — something you added because you know the task needs it, even though the ticket didn't say so?

That gap — between what the ticket names and what the counter actually needs — is exactly why context design is a separate discipline from prompt craft. The complete order points at the pantry. The context packet stocks it. And the way you organize, check, and curate those materials is the difference between 45 pages of everything and a counter set for tonight's service.

Notice what this exercise does not ask you to do: it doesn't ask you to encode priorities, decide what the brief should optimize for, or resolve tradeoffs between competing goods. Those are intent framing questions, and they belong in the next section. Context design tells the kitchen what's on the counter. Intent framing tells it what kind of restaurant this is.

> **Webapp chat note:** In a chat session, you can build a lightweight context packet by organizing your materials before you paste them. Group stable items (format template, approved sources, house rules) at the top — those can stay the same each month. Put task-specific materials (this month's data, recent moves) in a separate block, clearly dated. Summarize large documents before pasting. And before you hit send, ask yourself: is everything on this counter current, and is there anything here that's going to create more noise than signal?

---

## Key Lesson

> **Kitchen truth:** The best-stocked kitchen isn't the one with the most ingredients — it's the one where every ingredient is fresh, relevant, and within reach.

---

<!-- Section 6 self-check:
- [x] Bridge recap opens Part 2B — re-establishes four disciplines, building blocks, running example state
- [x] Bridge names the "kitchen setup" as the Part 2A final-state artifact bundle
- [x] Bridge uses a bulleted list for the five building blocks — scannable, not a wall of text
- [x] Bridge works for both continuing readers and fresh arrivals
- [x] Failure example opens with recognizable scenario — 45 pages of mixed materials, unfocused output
- [x] Failure connects to context design as curation, not accumulation
- [x] Cross-framework bridge: explicit connection from Section 5's tasting system and Section 2's "points at the pantry" to Section 6's counter-stocking discipline
- [x] Four types of context material defined in a table with kitchen equivalents — varied delivery, not four identical definition paragraphs
- [x] After the table, one explicit bridging sentence maps the four types to the persistent/temporary distinction
- [x] Signal-to-noise and shelf-space tradeoff explained
- [x] Freshness/staleness covered with specific rules for the competitive brief
- [x] Persistent guidance vs. temporary materials distinction includes explicit mapping to the four context types
- [x] MCP introduced in optional collapsible — plain English, reader-facing consequences, not protocol-heavy
- [x] MCP framed as infrastructure, not the lesson — "the infrastructure changes, the curation doesn't"
- [x] MCP does NOT take over the section
- [x] Interactive module: packer mechanic with 12 items, limited budget, color-coded reveal
- [x] Interactive "Context type" column uses the four type names from theory consistently
- [x] Interactive "Note" column carries evaluative annotations separately from classification
- [x] Interactive feedback explains WHY each item is essential/noise/needs-work
- [x] Practical exercise: context packet organized by the four types
- [x] Exercise connects back to complete order from Section 2 ("is anything missing that the complete order called for?")
- [x] Exercise explicitly defers intent framing to Section 7
- [x] Key lesson is one sentence, matches 04a
- [x] Running example contribution: Reader has a context packet organized by type
- [x] No developer-centric framing — all examples are marketing
- [x] Kitchen language used naturally: mise en place, counter, walk-in, pantry, station, the cook, prep, service, shelf space, dry goods, fresh produce, whole tuna
- [x] Sentence structure varies — table breaks monotony of definition paragraphs
- [x] Pull-quote-worthy lines: "Context design is curation, not accumulation," "is this more relevant than whatever it's displacing?", "The infrastructure changes. The curation doesn't."
- [x] Curation landing uses kitchen language ("knowing what tonight's menu requires") not generic phrasing
- [x] Plants handoff for Section 7: "Context design tells the kitchen what's on the counter. Intent framing tells it what kind of restaurant this is."
- [x] Does NOT absorb Section 7's intent framing territory — exercise explicitly names this boundary
- [x] Acme, Bolt, Cirrus used consistently as canonical competitors
- [x] No faux-specific statistics — shelf-space and budget framed as conceptual, not measured
-->
