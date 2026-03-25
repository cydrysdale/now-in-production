# Section 4: Station Assignments

## Failure Example

A marketing team needs a quarterly campaign retrospective for the VP. They hand the task to AI in one shot: *"Research our Q3 campaigns, analyze what worked and what didn't, compare performance to Q2, and draft a leadership-ready retrospective."*

The output looks impressive at first glance. Polished prose, clear headers, a professional summary at the top. Then someone checks the data.

The research is thin — it cites campaign names and general channel performance but misses the actual KPIs the team tracks. The analysis mixes up data from two campaigns that ran simultaneously, attributing one campaign's email performance to another's paid strategy. The Q2 comparison uses different metrics than Q3, making the trend lines meaningless. And the leadership summary presents all of this with the same confident tone, because the polished draft was built on top of every upstream error without a checkpoint in between.

The brief looks like a finished plate. It's actually a stack of unchecked guesses with a garnish on top.

This is what happens when complex work runs as one unbroken action. No pause for the cook to check. No checkpoint where bad data gets caught before the analysis builds on it. The errors compound invisibly, and by the time the output looks finished, the mistakes are load-bearing.

## Theory

Section 3 gave you plating standards and house rules — a way to define "done" and draw the lines the kitchen can't cross. But those checks happen at the pass, after the plate is assembled. For tasks with more than one step, that's too late.

The competitive retrospective failed not because the final product was poorly formatted — it wasn't — but because each stage of the work depended on the previous stage, and no one checked along the way. Thin research fed into confused analysis, which fed into a misleading comparison, which fed into a confident summary. The final plate inherited every upstream error.

**Station assignments** break complex work into discrete steps — each with one job, a clear input, a defined output, and a checkpoint before the handoff. The kitchen metaphor is literal here: a restaurant line has stations. The grill station doesn't assemble the salad. The pastry station doesn't plate the entrée. Each station does one thing, hands off a defined product, and the next station can verify what it received before building on it.

### What makes a good station

Five properties distinguish a well-designed station from a step on a to-do list:

**One job.** The station does exactly one thing. "Research competitors and analyze their positioning" is two jobs crammed into one slot. "Compile competitor data from approved sources" is one station.

**Clear input.** The station knows what it's receiving. The analysis station expects a verified data table, not raw notes. If the input isn't defined, the station starts by guessing what it's working with.

**Defined output.** The station produces a specific, named deliverable — not "some analysis" but "a comparison table with one row per competitor, scored on five dimensions." A defined output means the next station can verify what it received.

**Independently checkable.** You can look at this station's output in isolation and say whether it's right, without needing to see the finished product. Can you check the data table without reading the summary? If yes, it's independently checkable. If you can only judge it after the whole brief is assembled, the station boundary is in the wrong place.

**Clean handoff.** The output of one station becomes the explicit input of the next. No implicit dependencies. No assumptions about what the previous station "probably" included. The handoff is a seam where you can inspect, catch errors, and decide whether to proceed.

### The retrospective, restaged

The one-shot retrospective — "research, analyze, compare, draft" — was four stations compressed into one action. Restaged as a line:

| Station | Input | Output | Check before handoff |
|---|---|---|---|
| **1. Compile campaign data** | Campaign list + KPI definitions | Data table: one row per campaign, columns for each KPI | Are all campaigns present? Are the right KPIs populated? Any gaps? |
| **2. Analyze performance** | Verified data table | Performance summary: what worked, what didn't, why (with data references) | Does every claim trace to a data point in the table? Any claims without evidence? |
| **3. Compare to Q2** | Q3 performance summary + Q2 baseline | Trend analysis: same metrics, same format, quarter-over-quarter | Are the metrics consistent across quarters? Any apples-to-oranges comparisons? |
| **4. Draft the retrospective** | Verified trend analysis | Leadership-ready retrospective: executive summary, key findings, recommendations | Does the summary match the analysis? Any claims that aren't supported upstream? |

Four stations, four checkpoints. The key insight isn't that there are four steps — any task list could name four steps. It's that each checkpoint catches errors *before* the next station builds on them. The thin research gets caught at station 1, not after station 4 has turned it into a polished narrative.

### When to break a task into stations

Not every task needs station assignments. A single, self-contained request — "write a subject line for this email" — is fine as one station. Station assignments earn their keep when:

- **The task has sequential dependencies.** Later steps build on earlier steps. If the earlier step is wrong, everything downstream inherits the error.
- **Different stages require different checks.** Data accuracy is checked differently than narrative quality. Combining them into one check means one type gets shortchanged.
- **The output is too complex to verify in one pass.** A polished retrospective is hard to audit holistically. A data table and a trend analysis are each straightforward to check on their own.
- **Errors compound.** The competitive retrospective is the canonical example — confident prose built on confused data. The polish makes the errors harder to find, not easier.

### Stations are not just a task list

A to-do list says *what* to do. Station assignments say *what each step produces, what the next step needs, and where to check.* The difference is the handoff. A to-do list assumes everything flows naturally from one step to the next. A station map makes the seams visible, because the seams are where errors get caught.

<details class="chest">
<summary>Where this goes next</summary>

As AI models become more capable, the stations you design could eventually be assigned to different models — a capable one to plan the work, faster ones to execute each station. This is where more autonomous AI workflows are heading: a head chef who designs the line, then assigns each station to the cook best suited for it. The station assignments you learn to design here are the same structure that approach relies on. You don't need to think about this now, but the skill you're building transfers directly when you're ready.

</details>

---

## Interactive Module: Build the Line

<!-- Interactive module content specification — structured data for implementation -->

A large marketing task needs to be broken into stations. Your job: design the line.

### Module Content

**Setup text:** Your team is launching a new product next month. The VP of Marketing wants a launch content package: a press release, a blog post, a sales one-pager, and a social media announcement sequence. All four pieces need to be consistent — same messaging, same positioning, same approved claims.

Right now this is one big task. Design the line. Break it into stations, define what each station produces, and specify the checkpoint before each handoff.

**Starting state:** The full task is presented as one block. The reader drags or assigns components into a station sequence.

**Available components:**

1. Gather approved product messaging, positioning, and claims from the PM
2. Define the core narrative: what's new, why it matters, who it's for
3. Draft the press release (formal, external-facing)
4. Draft the blog post (conversational, customer-facing)
5. Draft the sales one-pager (scannable, field-team-facing)
6. Draft the social media sequence (platform-specific, bite-sized)
7. Cross-check all four pieces for messaging consistency
8. Verify all claims against the approved messaging doc
9. Format each piece for its target channel and audience

**Scoring criteria:**

After the reader submits their station map, the module scores on five dimensions — one for each property of a good station:

| Criterion | What it checks |
|---|---|
| **One job** | Does each station do exactly one thing, or is it combining multiple jobs? |
| **Clear input** | Does each station know what it's receiving from the previous one? |
| **Defined output** | Does each station produce a specific, named deliverable? |
| **Independently checkable** | Can you verify each station's output without seeing the final package? |
| **Clean handoff** | Is there a checkpoint between each station where errors get caught? |

**One valid solution (shown alongside the reader's):**

| Station | Components | Output | Checkpoint |
|---|---|---|---|
| **1. Source and narrative** | 1, 2 | Approved messaging brief: core narrative, key claims, positioning | Does it match the PM's approved messaging? Any claims that aren't verified? |
| **2. Draft all pieces** | 3, 4, 5, 6 | Four draft pieces, each in target format | Does each piece follow the messaging brief? Any invented claims? |
| **3. Consistency check** | 7, 8 | Consistency report: flagged mismatches across pieces | Are the same claims stated the same way? Any piece contradicting another? |
| **4. Format and finalize** | 9 | Four launch-ready pieces, each formatted for its channel | Does formatting match channel requirements? Anything lost in reformatting? |

**Feedback:** There's no single correct answer — reasonable people can split this differently. The critical question is whether station 1 locks down the messaging *before* the drafting begins. If you combined "gather messaging" with "draft the press release," you'd be building on unchecked inputs — the same pattern that sank the retrospective in the failure example. Separating the source station from the drafting stations means you can verify the foundation before anyone builds on it.

---

## Practical Exercise: Map the Stations

Take the competitive landscape brief and design the line. Break the task into stations, define what each produces, and specify the checkpoint.

| Station | Input | Output | Check before handoff |
|---|---|---|---|
| **1.** | *What does this station receive?* | *What does it produce?* | *How do you verify it's right before passing it on?* |
| **2.** | | | |
| **3.** | | | |
| **4.** | | | |

Add or remove rows as needed. There's no magic number of stations — the right count depends on the task's complexity and where the errors are most likely to compound.

A few questions to pressure-test your map:

- **Can each station's output be checked without seeing the final brief?** If not, the station boundary might be in the wrong place.
- **Does each checkpoint catch the errors that would compound downstream?** The most important checkpoints are the ones that prevent bad data from becoming bad analysis.
- **Could someone else run this line and know exactly what each station should produce?** If the handoffs are implicit — "they'll know what I mean" — the map isn't finished.

Notice what the station map adds to the complete order and the plating standards: a way to catch errors *during* the work, not just at the end. The complete order defines the task. The plating standards define the finished plate. The station map tells you where to check along the way.

But what does "check" actually mean at each station? Right now, your checkpoints are questions — "is this right?" That's better than no checkpoint at all. But it's still a judgment call that depends on whoever's doing the checking. The next building block turns those ad-hoc checks into something systematic and repeatable.

> **Webapp chat note:** In a chat session, station assignments translate directly to sequential prompts. Instead of one long request, break the task into stages. Run station 1, check the output, then feed it into station 2. Each message is a station. Each response is a checkpoint. You're already doing this when you say "give me the data table first, then we'll do the summary" — station assignments just make the structure explicit and repeatable.

---

## Key Lesson

> **Kitchen truth:** A clean handoff is part of the spec, not an implementation detail.

---

<!-- Section 4 self-check:
- [x] Failure example opens with a recognizable scenario — complex task run as one pass, errors compound invisibly
- [x] Cross-framework bridge: explicit connection from Section 3 ("checks at the pass are too late") to Section 4's mid-work checkpoints
- [x] Five properties of a good station defined: one job, clear input, defined output, independently checkable, clean handoff
- [x] Theory restages the failed example as a properly designed line with four stations
- [x] "When to break a task into stations" — practical guidance on when this applies
- [x] "Stations are not just a task list" — clear distinction between to-do list and station map
- [x] Deep-dive sidebar (Chance/Chest card) for planner-worker pattern, per 04b spec
- [x] Interactive module: reader designs a line for a different marketing task (quarterly campaign retrospective)
- [x] Interactive scores on five criteria matching the theory's five station properties
- [x] Shows one valid solution alongside the reader's — no single "right answer"
- [x] Practical exercise: station map for the competitive brief (station → input → output → check)
- [x] Exercise includes pressure-test questions
- [x] Key lesson is one sentence, matches 04a
- [x] Running example contribution: Reader has a station assignment map for the competitive brief
- [x] Plants handoff for Section 5: "tasting along the way" — introduces the idea that checking at each station leads to a systematic evaluation approach
- [x] Does NOT introduce evaluation criteria or the tasting system — stations have checkpoints, Section 5 turns those into a system
- [x] No developer-centric framing — all examples are marketing
- [x] Kitchen language used naturally: station, line, plate, pass, handoff, the cook
- [x] Sentence structure varies — no monotonous patterns
- [x] Pull-quote-worthy lines: "A stack of unchecked guesses with a garnish on top," "A clean handoff is part of the spec, not an implementation detail," "A to-do list says what to do. Station assignments say what each step produces, what the next step needs, and where to check."
-->
