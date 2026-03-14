# How AI Works Part 2: Running the Kitchen

## Working Position

This guide is the sequel to `guides/how-llms-work.html`.

Part 1 explained the machine-level foundations: prediction over tokens, context limits and drift, why prompting matters, why workflows beat one-shot prompting, and why human verification remains necessary. Its metaphor was **one cook, one counter, one order ticket**.

Part 2 assumes that foundation and moves up a level. The subject is no longer "how the model works" but "how useful AI work is structured when the task lasts longer than a single back-and-forth."

The metaphor evolves: **you're no longer ordering from one cook. You're running a fully staffed kitchen.** You're the head chef. You design the menu, write the recipes, set the house rules, and train the brigade. AI is the line—capable, fast, and reliable when the systems around it are well designed. The kitchen only falls apart when the systems do.

This is a theory-first guide with interactive reinforcement followed by practical application. It should reference part one's basics only as prior knowledge, not reteach them.

**Primary audience:** Marketing professionals who are new to AI tools and need to move beyond chat-style prompting to produce reliable, delegable work. The examples, exercises, and running task should reflect marketing work: campaign briefs, competitive analysis, content workflows, and stakeholder communication.

---

## Core Thesis

The central theoretical move in part two:

"Prompting" is not one skill. Once work becomes multi-step, long-running, or delegated, it splits into four distinct disciplines:

1. **Prompt Craft** — shaping a request clearly
2. **Context Design** — shaping the information environment
3. **Intent Framing** — shaping what the system should optimize for
4. **Spec Writing** — shaping a specification that can survive without live supervision

The guide argues that most AI failures at this level are not failures of intelligence. They are failures of structure:

- incomplete problem statements
- vague or uncheckable definitions of done
- unspoken tradeoffs
- overloaded or missing context
- missing escalation rules
- missing evaluation loops

The kitchen version: a bad plate rarely means the cook can't cook. It usually means the recipe was unclear, the pantry was wrong, the house rules didn't cover the edge case, or nobody defined what a good plate looks like.

---

## Guide Goals

By the end of part two, the reader should be able to:

- Distinguish between conversational prompting and delegated execution
- Understand and apply the four disciplines: prompt craft, context design, intent framing, and spec writing
- Identify which discipline a given failure belongs to
- Define work in a way that survives longer, more autonomous execution
- Use structured checks to reduce the "technically correct but wrong" problem
- Produce a complete, reusable specification for a real recurring marketing task

---

## Kitchen Metaphor: Part 1 vs Part 2

| Part 1 | Part 2 |
|---|---|
| One cook | A full brigade |
| An order ticket | A recipe card |
| A prep counter | Organized mise en place across the whole kitchen |
| An expo check | A tasting system with standards, checks, and feedback loops |
| You're the customer | You're the head chef |

### Kitchen Vocabulary (used throughout)

| Concept | Kitchen term | Definition |
|---|---|---|
| Prompt Craft | The order ticket | The local skill of writing a clear request for one task |
| Context Design | Mise en place | What's stocked, prepped, organized, and within reach when the work begins |
| Intent Framing | The house philosophy | Standing priorities that govern decisions when multiple valid choices exist |
| Spec Writing | The recipe card | A complete, executable document that lets the kitchen run without the head chef hovering |
| The Complete Order | A ticket with everything | A task brief that carries enough context to be executed without asking the server |
| Plating Standards | The photo on the pass | Observable checks that define what "done" looks like before the work begins |
| House Rules | Posted on the wall | Standing constraints that prevent known failure modes |
| Station Assignments | The line | Work broken into stations, each with one job and a clean handoff |
| The Tasting System | Spoons at every station | A reusable method for judging quality over time, not just checking one plate |
| The Pre-Service Meeting | The huddle before service | Clarifying your own thinking before the kitchen starts cooking |
| Kitchen Inspection | A spot check | A short diagnostic scenario between sections that trains the reader's judgment |

---

## Running Example

A single marketing task threads through every section: **"Produce a monthly competitive landscape brief for the leadership team."**

Why this task:

- It's real. Marketing teams actually do this.
- It's recurring, which makes evaluation design natural.
- It's multi-step: research, synthesis, judgment calls, formatting for an executive audience.
- It involves all four disciplines: prompt craft (each step's request), context design (assembling sources and data), intent framing (what leadership cares about vs. exhaustive coverage), and spec writing (documenting the process so it runs reliably month after month).
- It has clear failure modes at every layer: stale data, wrong tradeoff (too detailed for execs), no definition of done, no way to detect quality drift over time.

Each section applies its concept to this task. By the end, the reader has built a complete, reusable specification for real work they actually do—not eight disconnected exercises.

---

## Recurring Sidebar: Kitchen Inspection

Between major sections, short "Kitchen Inspection" blocks present a 2–3 sentence scenario and ask the reader to spot what's missing. These are static (no interactive component needed), quick to read, and train the diagnostic reflex that the guide is building toward.

**Format:**

> **Kitchen inspection:** [Short scenario describing a plausible failure.] Was this a [concept A] problem or a [concept B] problem?
> *Answer: [Concept]. [One sentence explaining why.]*

**Example:**

> **Kitchen inspection:** A line cook follows the recipe perfectly but plates on a cold dish. The food arrives lukewarm. Was this a recipe problem or a house rules problem?
> *Answer: House rules. "Always plate on warm dishes" was never posted.*

**Marketing example:**

> **Kitchen inspection:** AI produces a polished competitive brief, but it compares your product against a company that was acquired six months ago. Was this a prompt craft problem or a context design problem?
> *Answer: Context design. The competitive landscape data loaded into the context was stale.*

These should appear 2–3 times across the guide, placed at natural transition points between sections.

---

## Structural Principles

- **Basics are assumed.** Refer back to part one instead of reteaching tokens, context windows, hallucinations, and iterative prompting.
- **Theory comes first.** Each major section introduces a conceptual model before any templates or tactics.
- **Every theory section gets an interactive module.**
- **Every interactive module is followed by a practical application exercise.**
- **The practical layer should feel like "how to use the theory,"** not "copy this magic prompt."
- **Marketing-first examples.** The main theory avoids named tools and model versions, but examples, exercises, and the running task use marketing scenarios throughout.
- **Kitchen Inspection sidebars** appear at natural transition points to train diagnostic thinking.
- **The running example advances every section.** Each section's exercise applies the new concept to the competitive landscape brief, building a cumulative artifact.
- **Failure examples open each section.** A short, recognizable failure that looks like a prompting problem but is actually a structural problem at the section's layer.

---

## Recommended Interactive System

To keep the guide coherent, the interactive pieces repeat a small set of mechanics instead of inventing a new interface each time.

Recurring mechanics:

- **Tagger:** identify what hidden work the human is doing (Sections 0, 1)
- **Classifier:** assign a failure to the correct discipline layer (Section 1)
- **Detector:** uncover hidden omissions in a casual request (Section 2)
- **Sorter:** decide whether a criterion is vague, partially checkable, or verifiable (Section 3)
- **Mapper:** connect failure modes to constraint quadrants (Section 3)
- **Splitter:** break a large task into stations and score the decomposition (Section 4)
- **Builder:** assemble eval criteria from component parts (Section 5)
- **Packer:** choose what belongs in context given a limited budget (Section 6)
- **Ladder:** rank competing priorities and define thresholds (Section 7)
- **Stress test:** probe a spec for missing structure (Section 8)
- **Sequencer:** answer pre-flight questions and see how they improve spec quality (Section 9)
- **Assembler:** build the full stack from a messy task (Section 10)

---

## High-Level Arc

| Section | Title | Core concept | Kitchen anchor |
|---|---|---|---|
| 0 | From One Cook to a Full Kitchen | The limits of chat-style prompting; the shift from supervised to delegated work | Upgrading from a food truck to a restaurant |
| 1 | The Four Disciplines | The framework: prompt craft, context design, intent framing, spec writing | Head chef's four responsibilities |
| 2 | The Complete Order | Self-contained problem statements | A ticket that doesn't need the server to come back |
| 3 | Plating Standards & House Rules | Acceptance criteria + constraints (merged) | The photo on the pass + rules posted on the wall |
| 4 | Station Assignments | Decomposition and handoffs | Running the line |
| 5 | The Tasting System | Evaluation design | Quality checks that scale beyond one plate |
| 6 | Mise en Place | Context design as environment curation | Stocking the kitchen with the right ingredients |
| 7 | The House Philosophy | Intent framing as encoded judgment | What the kitchen optimizes for when choices exist |
| 8 | The Recipe Card | Spec writing as the integrating discipline | A document that lets the kitchen run without the head chef hovering |
| 9 | The Pre-Service Meeting | Pre-AI clarification and thinking before prompting | The huddle before service starts |
| 10 | Running the Kitchen | Synthesis and the full framework | The complete system working together |

---

## Section 0: From One Cook to a Full Kitchen

### Purpose

Bridge from part one. Establish the conceptual shift without repeating part one's content. Merge the old "bridge" and "ceiling of conversational prompting" sections into a single opening that sets up the rest of the guide.

### Metaphor Introduction

Part one taught you how to order from one cook: write a clear ticket, manage the prep counter, check the plate before it leaves. That works when you're standing at the window watching every dish come out.

But what happens when the kitchen gets busy? When you're running multiple orders, delegating to cooks you can't supervise in real time, and expecting consistent quality across a full service? The order ticket isn't enough anymore. You need recipes, house rules, station assignments, and a tasting system. You need to run a kitchen.

### Theory To Introduce

Conversational prompting assumes:

- the human is present for every exchange
- the human can inspect output in real time
- the human can correct drift as it happens
- the human can answer clarifying questions on demand

That means the human is quietly providing four hidden functions:

- missing context (supplying information the AI didn't have)
- judgment about tradeoffs (deciding what matters more)
- decomposition into next steps (choosing what to do next)
- quality control (catching errors before they compound)

Conversational prompting didn't eliminate those functions. It just let the human perform them live. The work succeeded not because the prompt was good enough, but because the human was standing at the pass catching every problem.

**The conceptual shift:**

- Part one: how to get a better response from one cook
- Part two: how to design work that holds together across a full service without constant rescue

Once work extends beyond a tightly supervised exchange—longer tasks, recurring workflows, multi-step projects, delegated execution—those hidden functions must be externalized into artifacts. The judgment you used to provide in the moment now has to be encoded before the work begins.

### Failure Example (opens the section)

> A marketing manager asks AI to "draft a competitive analysis." Over six chat turns, they correct the scope ("just the three main competitors, not the whole market"), redirect the format ("bullets, not paragraphs"), supply missing context ("here's last quarter's data"), and override a bad judgment call ("don't speculate about their pricing strategy—use only public information"). The final output is good. The manager concludes: "Great prompt."
>
> But the prompt wasn't great. The manager's live interventions were great. Remove the human from the loop and the same prompt produces something unusable.

### Interactive Module

`Interactive: The Hidden Brigade`

Show a simulated six-turn chat transcript where a marketing task (drafting a competitive positioning summary) succeeds. The transcript should feel realistic—the kind of conversation the reader has had.

After each turn, the reader tags what the human actually contributed from a set of labels:

- **Ticket writing** (phrasing the request)
- **Stocking the counter** (supplying missing context)
- **Setting plating standards** (defining what done looks like)
- **Posting house rules** (adding constraints or corrections)
- **Calling the station** (deciding what happens next)
- **Catching a bad plate** (escalation or quality control)

The reveal: a visual breakdown showing that "the prompt" accounted for roughly 20% of the actual control structure. The other 80% was the human doing hidden work that would need to be externalized for the task to survive without babysitting.

### Practical Application

`Exercise: Collapse a Chat Into a Brief (Running Example)`

Using the running example: the reader imagines (or recalls) a multi-turn chat where they asked AI to help with competitive research. They list the human interventions that made it work, then sort those interventions into:

- Context supplied midstream
- Intent supplied midstream
- Constraints supplied midstream
- Acceptance checks supplied midstream

Then they attempt to compress all of that into a single starting brief. The goal is not to sound smarter. The goal is to make fewer critical assumptions remain unstated.

**Key lesson:** If the task only works when you babysit it, you don't yet have a delegable structure. You have a conversation that happened to go well.

---

> **Kitchen inspection:** Your team's social media manager asks AI to "write this week's LinkedIn posts." After three rounds of revision, the posts are on-brand and on-schedule. Next week, a different team member tries the same prompt and gets something completely off-tone. Was this a prompt craft problem or something else?
> *Answer: The first manager was silently supplying intent (brand voice, audience expectations, what "on-brand" means) and constraints (topic boundaries, compliance rules) through their revisions. None of that was in the prompt. The second team member got the raw prompt without the hidden control structure.*

---

## Section 1: The Four Disciplines

### Purpose

Introduce the main framework that organizes the rest of the guide. This is the reader's conceptual map—every subsequent section hangs from it.

### Metaphor

Running a kitchen requires four different kinds of work, and they're not the same skill:

1. **Writing clear tickets** — so the cook knows what to make right now
2. **Stocking the kitchen** — so the right ingredients are prepped and within reach
3. **Setting the house philosophy** — so the cook makes good decisions when the ticket doesn't cover every possibility
4. **Writing complete recipes** — so the kitchen runs a full service without the head chef standing over every station

These correspond to four disciplines that are hiding under the umbrella of "prompting":

### The Four Disciplines

#### 1. Prompt Craft (The Order Ticket)

The local skill of phrasing a task clearly in a specific interaction.

- **Main concern:** How the request is expressed
- **Failure mode:** Vague, underspecified, or poorly structured asks
- **Kitchen:** A ticket that says "make something with chicken" vs. "pan-seared chicken thigh, crispy skin, lemon-herb butter, asparagus, plate on warm dish"
- **Marketing:** "Write me an email about the product launch" vs. "Write a 200-word announcement email to existing customers. Tone: excited but professional. Include: launch date, three key features, early-access CTA. Exclude: pricing (not finalized)."

#### 2. Context Design (Mise en Place)

The design of the information environment in which the task runs.

- **Main concern:** What information is available, relevant, and visible at the right time
- **Failure mode:** Missing, noisy, stale, or poorly curated context
- **Kitchen:** The cook reaches for shallots and finds an empty bin. Or worse: the bin is full of shallots from two weeks ago.
- **Marketing:** AI drafts a competitive brief using last year's market data because the current data was never loaded. Or: you paste in 40 pages of brand guidelines when the task only needed the voice and tone section.

#### 3. Intent Framing (The House Philosophy)

The encoding of goals, values, tradeoffs, and decision boundaries.

- **Main concern:** What the system should optimize for when multiple valid choices exist
- **Failure mode:** Work that is efficient but misaligned with what actually matters
- **Kitchen:** "We're farm-to-table. Fresh over fancy. If we're out of something, 86 it—never substitute silently." Without this, the cook makes reasonable choices that don't match what the restaurant is for.
- **Marketing:** "This quarter, awareness over conversion. When tone conflicts with speed, tone wins. If copy touches legal territory, flag it—don't guess." Without this, AI produces technically correct work that optimizes for the wrong thing.

#### 4. Spec Writing (The Recipe Card)

The writing of a complete, executable description of what should be produced, how it should be judged, and how the work should be staged.

- **Main concern:** Whether the task can survive across time and handoffs without live supervision
- **Failure mode:** Work that begins plausibly but collapses under ambiguity, drift, or scope confusion
- **Kitchen:** A full recipe card: ingredients, quantities, technique, plating photo, allergen flags, timing notes, and quality standards. Handed to any competent cook and executable without a phone call to the head chef.
- **Marketing:** A complete campaign brief: objectives, audience, channels, messaging framework, acceptance criteria, constraints, staged deliverables, and evaluation metrics. Handed off and executable.

### How They Stack

These are not competing approaches. They are layers that build on each other:

- A strong ticket cannot fix a missing house philosophy.
- Rich mise en place cannot fix a vague definition of done.
- A recipe card is not just a longer ticket. It is a more explicit contract.
- Higher layers depend on lower layers but are not reducible to them.

### Bridge to Primitives

The four disciplines are **how you think about the work**. But each discipline is built from concrete skills—**the building blocks** you'll learn in the next five sections:

| Building block | Primary discipline it serves | What it answers |
|---|---|---|
| The Complete Order (Section 2) | Prompt Craft + Spec Writing | Is the task fully defined? |
| Plating Standards (Section 3) | Spec Writing | What does "done" look like? |
| House Rules (Section 3) | Intent Framing + Spec Writing | What must/must not happen? |
| Station Assignments (Section 4) | Spec Writing | How is the work broken into verifiable pieces? |
| The Tasting System (Section 5) | All four | How do you know if quality is holding over time? |

Sections 2–5 teach the building blocks. Sections 6–8 return to the disciplines with those blocks as tools. Section 9 introduces the step that comes before all of it.

### Failure Example (opens the section)

> A content lead gives AI a well-written prompt to produce a quarterly newsletter draft. The prompt is clear, the format is specified, and the tone is described. The result is fluent, well-structured—and completely wrong. It highlights a product feature that was deprioritized last month, uses competitive framing that conflicts with the CEO's new positioning, and cites a case study that hasn't been approved for external use.
>
> The prompt was fine. The context was stale. The intent was never stated. The task needed more than craft—it needed design.

### Interactive Module

`Interactive: Failure Layer Classifier`

Give the reader a set of six marketing-flavored failures and ask them to assign each to the dominant discipline:

1. "The email draft was well-written but twice the requested length" → **Prompt Craft** (constraint wasn't stated)
2. "The competitive analysis compared us against a company that was acquired last quarter" → **Context Design** (stale data)
3. "The blog post was thorough but too technical for the target audience" → **Intent Framing** (optimized for depth over accessibility)
4. "The campaign brief covered channels but not success metrics or timeline" → **Spec Writing** (incomplete specification)
5. "The social copy used a tagline we retired in Q3" → **Context Design** (outdated brand materials)
6. "The landing page copy was compelling but made performance claims that aren't cleared by legal" → **Intent Framing** (no escalation boundary for compliance-sensitive content)

The reveal should show that only one of these six was a "bad prompt." The others were structural failures at higher layers.

### Practical Application

`Exercise: Diagnose a Recent Failure (Running Example)`

The reader picks a real marketing task where AI produced something that was "technically correct but wrong." They label:

- What went wrong
- Which discipline was actually missing
- What artifact would have prevented it

Then they note how this failure would have affected the competitive landscape brief (running example). Which layer is most likely to break first for that task?

**Key lesson:** Diagnosis gets sharper when "prompting" is broken into disciplines. Most failures that feel like "AI is bad at this" are actually "I didn't give the kitchen what it needed."

---

## Section 2: The Complete Order

### Purpose

Introduce the first building block: defining a task so it is solvable without live backfilling. This is the bridge from part one's "write a better prompt" to part two's "write a brief that stands on its own."

### Metaphor

In a busy restaurant, the server takes the order and the cook never sees the customer. If the ticket says "the chicken thing" and the server is gone, the cook has to guess. Was it the pan-seared thigh or the grilled breast? With the lemon sauce or the herb butter? The ticket needs to carry enough information to survive without a follow-up question.

A complete order is not the longest possible order. It is the order with enough operational detail that the cook can execute it correctly without running back to ask the server.

### Theory To Introduce

Most requests rely on invisible shared context. Humans tolerate this because other humans can infer a lot. AI systems also infer—but their inference is pattern completion, not grounded understanding. That makes unstated assumptions dangerous: the AI will fill gaps with whatever pattern seems most likely, and it won't flag that it's guessing.

A complete order is not maximal detail. It is **sufficient operational detail**:

- **The actual outcome**, not just the activity ("a 2-page brief that identifies three competitive threats and recommends one response," not "do some competitive research")
- **The relevant background** ("we're repositioning against Company X after their Q2 product launch")
- **The audience** ("the CMO and VP of Product—both want actionable recommendations, not market surveys")
- **The constraints** ("use only public sources; don't speculate on competitor pricing")
- **The output form** ("executive summary up top, supporting evidence below, bullet format throughout")
- **The definition of success** ("the CMO should be able to present this in a leadership meeting without modification")
- **The likely ambiguity points** ("if unclear whether a competitor move is confirmed or rumored, flag it explicitly")

Main distinction:

- **Conversational request:** Depends on the receiver to fill in gaps
- **Complete order:** Carries enough context to be executed without follow-up

### Failure Example (opens the section)

> A marketing coordinator asks AI to "put together a summary of our Q2 campaign results." AI produces a comprehensive statistical overview covering every channel, every metric, and every campaign—12 pages of analysis. The coordinator wanted a one-page highlights email for the sales team. The output was correct. The order was incomplete.

### Interactive Module

`Interactive: The Missing Ticket`

Show a casual marketing request: "Draft a blog post about our new feature launch."

The reader clicks to reveal hidden omissions, one at a time:

- **Audience:** Who reads this blog? Technical users? Prospects? Existing customers?
- **Goal:** Awareness? SEO? Lead generation? Thought leadership?
- **Scope:** Just this feature, or how it fits into the product?
- **Tone:** Corporate? Conversational? Playful?
- **Source of truth:** Feature specs? Product marketing brief? Press release?
- **Length:** 300 words? 1,500 words?
- **Quality standard:** First draft for internal review? Publication-ready?
- **Constraints:** Any claims that need legal review? Competitive comparisons to avoid?

The module ends with a visual showing: of the information needed to produce the right blog post, the original prompt provided roughly 15%. The rest was left for the AI to guess.

### Practical Application

`Exercise: Write the Complete Order (Running Example)`

The reader takes the running example—"produce a monthly competitive landscape brief for the leadership team"—and rewrites it as a complete order with explicit fields:

- Outcome
- Background
- Audience
- Constraints
- Output form
- Success definition
- Known ambiguity points

**Key lesson:** Specificity is not verbosity. It is the removal of critical ambiguity. A complete order can be shorter than a vague one if every word is doing structural work.

---

## Section 3: Plating Standards & House Rules

### Purpose

Merge two closely related building blocks that jointly answer: "What does done look like, and what must never happen along the way?" Combining them sharpens the distinction—plating standards define the target; house rules prevent the failures.

### Metaphor

Every professional kitchen has two kinds of quality control:

**The photo on the pass (plating standards):** A reference photo showing exactly what the finished dish should look like. Medium-rare means 130 degrees internal. Sauce on the right. Garnish at 2 o'clock. No fingerprints on the rim. Any cook can compare their plate against the photo and know whether it meets the bar—without asking the head chef.

**Rules posted on the wall (house rules):** Standing constraints that prevent known failure modes. "Always plate on warm dishes." "Never serve raw shellfish to a flagged allergy table." "If the protein is overcooked, refire—don't send it." These exist not because every cook would make these mistakes, but because the kitchen has seen them before and decided they must never happen again.

Plating standards say: "This is what good looks like."
House rules say: "These are the ways it must never go wrong."

### Theory To Introduce

#### Plating Standards (Acceptance Criteria)

If "done" is vague, the system will choose its own stopping condition. That produces a common middle state:

- Polished enough to look plausible
- Incomplete in ways that matter
- Expensive to repair because the missing expectations were never encoded

Plating standards are **observer-verifiable checks**. They should let a third party determine whether the output meets the bar without asking the original requester what they meant.

Key distinctions:

- Vague quality language ("make it strong") vs. observable criteria ("include three risks with supporting evidence and a recommended response for each")
- Subjective preference ("make it sound good") vs. functional requirement ("match the voice and tone section of the brand guide")
- Output existence ("write a summary") vs. output adequacy ("the summary should be presentable in a leadership meeting without modification")

#### House Rules (Constraints)

A task can be well-described and still go wrong when multiple valid paths exist. House rules make decision boundaries explicit:

- **Must Do:** Non-negotiable requirements ("include a methodology note explaining data sources")
- **Must Not Do:** Hard boundaries ("never speculate on competitor pricing or unannounced features")
- **Prefer:** Soft guidance for when choices exist ("prefer public earnings data over analyst estimates")
- **Escalate:** Triggers for stopping autonomous work ("if the analysis involves legal/compliance claims, flag for review before including")

House rules frame constraints as **controlled freedom**:

- Too few rules and the kitchen improvises into the wrong space
- Too many rules and the kitchen becomes brittle, slow, or unable to handle the unexpected
- The goal is failure-mode prevention, not micromanagement

#### How They Work Together

Plating standards define the destination. House rules guard the path. A plate can meet every plating standard and still violate a house rule (looks perfect but used an ingredient the customer is allergic to). And a plate can follow every house rule but miss the plating standard (safe but ugly). You need both.

### Failure Example (opens the section)

> AI produces a competitive brief that's well-structured, clearly written, and covers all three competitors. The marketing director rejects it. Why? The brief speculated about a competitor's upcoming product roadmap based on job postings and patent filings. The analysis was plausible—even insightful—but the company policy is: no public-facing competitive claims without confirmed public sources. The plating standards were met. The house rules were violated.

### Interactive Module

`Interactive: Standards & Rules Sorter`

Present a mixed list of 10 items related to the competitive landscape brief. The reader sorts each into one of five categories:

- **Plating standard** (observable check for the finished output)
- **Must Do** (non-negotiable requirement)
- **Must Not Do** (hard boundary)
- **Prefer** (soft guidance)
- **Escalate** (stop and flag)

Example items:

1. "Brief should be 2 pages or fewer" → **Plating standard**
2. "Include source links for every competitive claim" → **Must Do**
3. "Don't reference internal-only competitive intelligence" → **Must Not Do**
4. "Prefer recent data (last 6 months) over older sources" → **Prefer**
5. "If analysis suggests a competitor is in financial trouble, flag for legal review" → **Escalate**
6. "Executive summary in the first paragraph" → **Plating standard**
7. "Use only publicly available information" → **Must Not Do** (restated as a boundary)
8. "Prefer bullet format over prose for data points" → **Prefer**
9. "Include a 'confidence level' note for any unconfirmed claims" → **Must Do**
10. "Brief should be actionable—at least one recommendation per competitor" → **Plating standard**

The reveal shows how plating standards and house rules cover different failure modes. Items that feel ambiguous between categories should be discussed—that ambiguity is where real-world failures live.

### Practical Application

`Exercise: Define the Plate and Post the Rules (Running Example)`

For the competitive landscape brief, the reader writes:

**Three plating standards** (observer-verifiable checks):
- e.g., "Includes an executive summary that a non-expert could read in 60 seconds"
- e.g., "Every competitive claim links to a public source"
- e.g., "Contains at least one actionable recommendation per competitor"

**One constraint in each quadrant:**
- Must Do: ___
- Must Not Do: ___
- Prefer: ___
- Escalate: ___

**Key lesson:** The quality bar must be visible before the work begins, not only after disappointment. And the rules that prevent the worst failures are separate from the standards that define the best outcomes.

---

> **Kitchen inspection:** A junior marketer uses AI to write a product comparison page. The content is accurate, well-formatted, and matches the brand voice. But it positions a competitor's product as "unreliable" based on a single Glassdoor review. Was this a plating standards problem or a house rules problem?
> *Answer: House rules. "Don't make competitive claims without verified public sources" and "escalate anything that could be seen as disparagement" were never posted. The plate looked great—but it should never have left the kitchen.*

---

## Section 4: Station Assignments

### Purpose

Explain why bigger tasks must be broken into verifiable pieces with explicit handoffs between them.

### Metaphor

Part one introduced the kitchen line—a sequence of specialized stations. Part two takes this further: the issue isn't just "use multiple prompts." It's **designing work so each station has a clear input, output, and verification rule.**

In a real kitchen, prep doesn't hand raw, uncut vegetables to the sauté station. Prep delivers prepped ingredients in labeled containers—washed, cut, measured. Sauté doesn't have to guess what they're getting or check whether prep did their job. The handoff is clean.

The same principle applies to AI work. Each station should:

- Have one job
- Receive clear input from the previous station
- Produce a defined output
- Be checkable independently
- Hand off cleanly to the next station

### Theory To Introduce

Complex work fails when treated as one uninterrupted action. The theory of station assignments:

- Large tasks hide multiple subproblems with different context needs
- Errors compound when early steps aren't checked
- Handoffs require explicit boundaries—not just "and then do the next part"
- Each station needs enough context for its job but not so much that it's overwhelmed

Important concepts:

- **Task granularity:** How small should each station be? Small enough to check, large enough to be meaningful.
- **Independent verification:** Can you evaluate this station's output without seeing what comes next?
- **Staged outputs:** Each station produces a defined artifact, not just "progress."
- **Checkpoint design:** What gets checked at each handoff? By whom?

This section should connect to part one's workflow logic but at a higher level. The point is no longer "use multiple prompts." The point is "design work so the line runs smoothly."

### Failure Example (opens the section)

> A marketing team asks AI to "research competitors, analyze their positioning, and draft a leadership brief." In one pass. The research is shallow because the model was already thinking about the brief format. The analysis mixes up two competitors' data points. The brief is well-structured but built on unreliable inputs. If the task had been three stations—research, analysis, brief—each with a check, the errors would have been caught at station one instead of baked into the final plate.

### Interactive Module

`Interactive: Build the Line`

Present a large marketing task: "Create a quarterly campaign retrospective presentation for the executive team."

The reader breaks it into stations by dragging components into a sequence. The module scores the split based on:

- Whether each station has a clear, defined output
- Whether each station can be checked independently
- Whether dependencies between stations are explicit
- Whether any station is still too vague or too large
- Whether the handoff between stations specifies what gets passed forward

Example station structure (one valid solution):

1. **Data pull** → Output: raw performance data by channel and campaign
2. **Analysis** → Output: key findings with supporting data, organized by theme
3. **Narrative draft** → Output: slide-ready narrative with executive framing
4. **Visual formatting** → Output: formatted presentation with charts and callouts
5. **QA pass** → Output: final reviewed deck ready for delivery

The module should show that different valid decompositions exist, but all good ones share: clear outputs, independent checkability, and explicit handoffs.

### Practical Application

`Exercise: Map the Stations (Running Example)`

For the competitive landscape brief, the reader writes a station map:

| Station | Input | Output | Check before handoff |
|---|---|---|---|
| 1. _____ | _____ | _____ | _____ |
| 2. _____ | _____ | _____ | _____ |
| 3. _____ | _____ | _____ | _____ |
| 4. _____ | _____ | _____ | _____ |

Example completed map:

| Station | Input | Output | Check before handoff |
|---|---|---|---|
| Research | Competitor list + source constraints | Raw findings with source links | Are all competitors covered? Are sources public and current? |
| Analysis | Raw findings | Themed competitive insights with evidence | Do insights match the raw data? Any unsupported claims? |
| Draft | Insights + format requirements | Executive-ready brief | Meets plating standards? Follows house rules? |
| Review | Draft brief | Approved final brief | Would the CMO present this without changes? |

**Key lesson:** A clean handoff is part of the spec, not an implementation detail. If you can't describe what one station passes to the next, the line isn't designed—it's improvised.

---

## Section 5: The Tasting System

### Purpose

Move beyond "does this look okay?" to systematic, repeatable quality judgment. This is especially important for recurring marketing tasks where quality drift happens gradually.

### Metaphor

A good kitchen doesn't rely on the expo tasting one dish and declaring the whole service successful. It has a **tasting system**: spoons at every station, standardized plating photos, daily quality checks, and a feedback loop that catches drift before customers do.

The difference between tasting one plate and having a tasting system is the difference between checking one AI output and knowing whether your AI workflow is actually performing well over time.

### Theory To Introduce

Without a tasting system, improvement is anecdotal. "Last month's brief felt better" isn't a quality signal—it's a vibe.

The tasting system introduces:

- **Test cases:** Known inputs with expected outputs (or expected qualities)
- **Quality markers:** What specifically makes a good output good?
- **Known failure modes:** What has gone wrong before? What should you watch for?
- **Repeatable checks:** A short checklist that any team member can run
- **Regression awareness:** Is the quality holding month over month, or is it drifting?

Key distinctions:

- **Output evaluation** is about one result ("Is this brief good?")
- **The tasting system** is about building a reusable method for judging many results over time ("Are our briefs consistently good? Are they getting better or worse? Do we know why?")

This section should argue that evaluation is part of the input system, not a postscript. If you cannot state how good work will be recognized, you have not fully specified the task.

### Failure Example (opens the section)

> A marketing team uses AI to produce a weekly social content calendar. The first month is great—creative, on-brand, well-structured. By month three, the posts have become formulaic: same structures, same CTAs, same tone. Nobody notices because there's no system for noticing. Each week's calendar is reviewed in isolation and approved because it meets the minimum bar. The drift is only visible when someone compares January to March side by side.

### Interactive Module

`Interactive: Build the Tasting Station`

The reader is shown the running example (monthly competitive brief) and asked to build a simple tasting system by choosing:

- **What to test:** Which aspects of the brief matter most? (accuracy, actionability, freshness of data, executive readability, source quality)
- **What counts as success:** For each aspect, what's the minimum bar?
- **What failure modes to watch for:** What has gone wrong (or could go wrong) with this brief?
- **What would make this no longer worth delegating:** At what point does the human need to take over or restructure the workflow?

The module should reveal that a tasting system with even 3–5 checks dramatically improves quality awareness.

### Practical Application

`Exercise: Draft a Mini Tasting System (Running Example)`

For the competitive landscape brief, the reader creates:

- **Three quality markers** with pass/acceptable/fail thresholds
- **Two known failure modes** to watch for each month
- **One regression check** (compare this month to last month on a specific dimension)

Example:

| Quality marker | Pass | Acceptable | Fail |
|---|---|---|---|
| Data freshness | All sources < 30 days old | Most sources < 60 days | Any source > 90 days |
| Actionability | Every competitor has a recommendation | Most competitors have recommendations | No recommendations or generic advice |
| Source quality | All claims cite public sources | Most claims cited | Unsourced competitive claims present |

**Key lesson:** Evaluation makes quality legible. Without it, you can't tell the difference between "this is good" and "I've gotten used to this level of output."

---

> **Kitchen inspection:** A content team's AI-generated blog posts pass every review for six months. Then a new CMO arrives and says the content "doesn't feel like us anymore." The team looks back and realizes the tone shifted gradually from conversational to corporate over dozens of posts. Was this a house rules failure or a tasting system failure?
> *Answer: Tasting system. The house rules may have existed (brand voice guide), but there was no recurring check comparing output tone against the standard. Drift happened within acceptable individual posts—but accumulated into a visible shift over time.*

---

## Section 6: Mise en Place — Context Design

### Purpose

Treat context as a designed environment rather than a pile of information. This section returns to the first of the three higher disciplines, now equipped with the building blocks from Sections 2–5.

### Metaphor

In part one, the prep counter was about capacity—it's finite, things fall off. Part two is about **curation**: it's not just how much fits on the counter, it's whether the right ingredients are there, whether they're fresh, and whether the cook can find what they need without sorting through a pile of irrelevant stuff.

Mise en place at scale is the difference between a home cook who opens the fridge and hopes they have what they need, and a professional kitchen where every station is stocked with exactly the right ingredients for tonight's service—prepped, labeled, and within arm's reach.

### Theory To Introduce

Part one established that context is limited and drift-prone. Part two extends that into a stronger claim:

**The challenge is not supplying more information. It is supplying the right information in the right structure at the right moment.**

Context design theory:

- **Relevance over exhaustiveness:** The complete brand guidelines are 80 pages. The task needs 2 pages. Loading all 80 is not helpful—it's noise.
- **Signal-to-noise management:** Every irrelevant document on the counter competes for attention with the relevant ones.
- **Stable context vs. task-specific context:** Some information applies to every task (brand voice, compliance rules). Some applies only to this task (this quarter's campaign data). Mixing them carelessly leads to stale stable context or missing task-specific context.
- **Freshness and staleness:** Context that was accurate last month may be wrong today. Competitive landscape data ages fast. Product specs change. Pricing shifts.
- **Persistent guidance vs. temporary materials:** Style guides and house rules should persist across tasks. Raw research data should be fresh per task.
- **Retrieval burden:** If the cook has to dig through a disorganized pantry to find one ingredient, the dish slows down and mistakes increase.

**The key idea:** Environment quality shapes reasoning quality. An overloaded context can be as harmful as a missing one. A kitchen with every ingredient ever purchased piled on the counter is not a well-stocked kitchen—it's a mess.

### Failure Example (opens the section)

> A marketing analyst loads a 45-page competitive intelligence report, the full brand guidelines, three previous competitive briefs, last quarter's financial results, and the company's 5-year strategic plan into a single AI session to produce this month's competitive landscape brief. The output is unfocused: it mixes strategic planning language with competitive analysis, references obsolete product names from an old brief, and buries the actual competitive insights under corporate positioning language. The context was abundant. The context design was absent.

### Interactive Module

`Interactive: Stock the Kitchen`

The reader is given a limited context budget (visualized as shelf space in a kitchen pantry) and a set of possible materials for the competitive landscape brief:

- Current competitor press releases (last 30 days)
- Full brand guidelines (80 pages)
- Brand voice & tone section only (3 pages)
- Previous month's competitive brief
- Company's annual strategic plan
- Last quarter's campaign performance data
- Industry analyst report from 8 months ago
- Product comparison matrix (current)
- Slack thread where the CMO mentioned competitive priorities
- Template for the brief format

The reader selects what to load. Some items are large, some are small (reflected in shelf space). The reveal shows:

- What was essential (current competitor data, product comparison, previous brief for format consistency, voice & tone excerpt)
- What was noise (full brand guidelines, strategic plan, old analyst report)
- What should have been summarized before loading (Slack thread → extracted as a bullet: "CMO wants focus on Company X's enterprise push")
- What was missing that should have been there (any competitive claims from the previous month that need updating or retracting)

### Practical Application

`Exercise: Build a Context Packet (Running Example)`

The reader creates a minimal context packet for the competitive landscape brief, organized into:

| Context type | What to include | Why |
|---|---|---|
| **Stable context** (reused monthly) | Brand voice excerpt, brief template, house rules, plating standards | Consistency across months |
| **Task-specific context** (fresh each month) | Current competitor data, recent product changes, this month's strategic priorities | Freshness and relevance |
| **Source-of-truth materials** | Product comparison matrix, approved competitive messaging | Accuracy and compliance |
| **Summarize, don't paste** | CMO's verbal priorities → bullets; previous brief → key findings only | Signal-to-noise management |

**Key lesson:** Context design is curation, not accumulation. The best-stocked kitchen isn't the one with the most ingredients—it's the one where every ingredient is fresh, relevant, and within reach.

---

## Section 7: The House Philosophy — Intent Framing

### Purpose

Explain how to encode what should be optimized for when the task involves tradeoffs. This is the second higher discipline, now equipped with the building blocks.

### Metaphor

Every restaurant has a philosophy—even if it's never written down. "We're farm-to-table." "We're fast-casual." "We prioritize ingredient quality over presentation." "We'd rather 86 a dish than substitute an inferior ingredient."

These aren't marketing slogans. They're **operational decision rules**. When a cook faces a choice that the recipe doesn't explicitly cover—use the last of the good tomatoes on this dish or save them for the next order?—the house philosophy tells them what matters more.

Without a house philosophy, every cook makes their own judgment call. Some of those calls will be great. Others will contradict each other. And the customer experience becomes inconsistent—not because any individual cook is bad, but because nobody decided what the kitchen is optimizing for.

### Theory To Introduce

Context tells a system what is available. Intent tells it what matters.

When tasks involve judgment, there are usually competing goods:

- Speed vs. depth
- Consistency vs. freshness
- Completeness vs. brevity
- Caution vs. initiative
- Brand voice vs. SEO optimization
- Nuanced accuracy vs. executive readability

Humans operate with unstated priority hierarchies. That works tolerably in a conversation because the human can correct misalignment in real time. It works poorly in delegated AI work because the hierarchy only becomes visible when something important is sacrificed.

**Intent framing makes these priorities explicit:**

- What the system is optimizing for
- What tradeoff wins when values collide
- What decisions are autonomous (the cook decides)
- What decisions require escalation (the cook asks the head chef)

**Critical distinction:** Intent framing is not brand tone or mission language. "We are a customer-centric organization committed to excellence" is not an intent frame. "When depth conflicts with deadline, ship the shorter version with a note about what was cut" is an intent frame. The difference is operational specificity.

### Failure Example (opens the section)

> AI produces a competitive landscape brief that is comprehensive, detailed, and 8 pages long. Every data point is sourced. Every competitor is covered in depth. It's excellent analysis. The CMO glances at it, says "I needed a one-pager I could scan before the board meeting," and the brief goes unused. The work optimized for depth. The stakeholder needed brevity. The intent was never framed.

### Interactive Module

`Interactive: The Priority Ladder`

Present pairs of values in tension for the competitive landscape brief. The reader must choose:

1. **Comprehensive vs. scannable** — The CMO wants both. Which wins?
2. **Nuanced accuracy vs. clear narrative** — A competitor's situation is complicated. Do you present the complexity or simplify for readability?
3. **Timely delivery vs. complete data** — It's the 28th and two competitor data points aren't available yet. Do you ship with gaps or delay?
4. **Conservative claims vs. bold analysis** — You see a strong pattern in competitor behavior. Do you call it out as a trend or just present the data?
5. **Consistent format vs. this month's unique story** — Something big happened in the market. Do you stick to the standard template or restructure to highlight it?

For each pair, the reader chooses which wins and writes a one-sentence decision rule. The module then shows how five explicit priority decisions would change the output compared to leaving them unstated.

### Practical Application

`Exercise: Write the House Philosophy (Running Example)`

For the competitive landscape brief, the reader defines:

- **Top priority:** What matters most? (e.g., "Executive readability—the CMO should absorb the key points in under 2 minutes")
- **Second priority:** What matters next? (e.g., "Accuracy—every claim must be sourced and current")
- **Default optimization:** When not otherwise specified, what does the kitchen optimize for? (e.g., "Brevity and actionability over exhaustiveness")
- **Non-delegable decisions:** What should always be escalated? (e.g., "Any claim about a competitor's financial health or legal situation")

**Key lesson:** If priorities are only obvious in hindsight, they were never encoded. A house philosophy doesn't make the cook less creative—it makes the kitchen more consistent.

---

## Section 8: The Recipe Card — Spec Writing

### Purpose

Present spec writing as the integrating discipline—the one that pulls together everything from the previous sections into a single, executable artifact.

### Metaphor

A recipe card is not just a list of ingredients or a set of instructions. It's a **complete contract** between the head chef and the line cook. It includes:

- What the dish is and who it's for
- Ingredients and quantities (context)
- Technique and sequence (station assignments)
- A plating photo (plating standards)
- Allergen flags and substitution rules (house rules)
- The house philosophy applied to this specific dish ("if the tomatoes aren't ripe, pull the dish from the menu—don't substitute canned")
- Quality checks ("taste the sauce before plating—adjust acid if needed")

A recipe card exists because the head chef can't stand at every station during service. It encodes their judgment, standards, and decisions into a document that the kitchen can execute reliably.

### Theory To Introduce

A spec is not merely a long prompt. It is a structured contract that integrates:

- The complete order (Section 2)
- Plating standards and house rules (Section 3)
- Station assignments (Section 4)
- The tasting system (Section 5)
- Context requirements (Section 6)
- The house philosophy applied to this task (Section 7)

**The theory claim:** As work becomes longer and less supervised, the spec becomes the real prompt. The individual prompts at each station are just execution details.

Spec writing exists because complex, recurring, or delegated work cannot rely on shared context, vibes, or live clarification. It requires a document that:

- **Survives time** — someone can execute it next month without re-asking what was meant
- **Survives handoffs** — a different team member can run it without the original author
- **Survives ambiguity** — edge cases are anticipated, not discovered in production
- **Remains checkable** — anyone can verify whether the output meets the spec

**Spec quality reflects thinking quality.** A weak spec usually means the human hasn't fully clarified the work for themselves. The spec doesn't just instruct the AI—it forces the human to finish thinking.

### Failure Example (opens the section)

> A marketing lead writes a detailed prompt for the monthly competitive brief: role, audience, format, tone, constraints. It works well—when they run it. When they go on vacation and a colleague runs the same prompt, the output is wrong. The colleague didn't know to load last month's brief for continuity. Didn't know the CMO's verbal priority about Company X. Didn't know which competitive claims need legal review. The prompt was a personal tool. It was never a spec.

### Interactive Module

`Interactive: Stress Test the Recipe`

Show a draft spec for the competitive landscape brief. It looks thorough—has sections for objective, audience, format, sources. The reader probes it with failure questions:

- What is the output, exactly? (Is "brief" defined anywhere?)
- Who is the audience? (Is there a distinction between primary and secondary readers?)
- How is success measured? (Are plating standards included or assumed?)
- What should never happen? (Are house rules embedded or missing?)
- What gets escalated? (Are there compliance triggers?)
- What happens if the data for one competitor isn't available? (Is there a fallback plan?)
- What context is assumed but not provided? (Does the spec reference documents without including or linking them?)
- Can someone other than the author execute this? (The handoff test)

Each question the reader asks reveals a gap in the spec. The module tracks how many gaps are found and ends with a revised spec showing the patches.

### Practical Application

`Exercise: Write the Recipe Card (Running Example)`

The reader assembles a complete spec for the competitive landscape brief using everything built in previous sections:

```
RECIPE CARD: Monthly Competitive Landscape Brief

1. OVERVIEW
   - What: [one-sentence description of the deliverable]
   - Who: [audience and their needs]
   - When: [delivery cadence and deadline]
   - Why: [what decision this brief supports]

2. CONTEXT PACKET
   - Stable context: [what to load every month]
   - Task-specific context: [what to refresh each month]
   - Source of truth: [authoritative references]

3. HOUSE PHILOSOPHY (for this task)
   - Top priority: [what matters most]
   - Default optimization: [when in doubt, optimize for ___]
   - Non-delegable decisions: [always escalate these]

4. STATION ASSIGNMENTS
   - Station 1: [input → output → check]
   - Station 2: [input → output → check]
   - Station 3: [input → output → check]
   - Station 4: [input → output → check]

5. PLATING STANDARDS
   - [ ] Check 1
   - [ ] Check 2
   - [ ] Check 3

6. HOUSE RULES
   - Must Do: ___
   - Must Not Do: ___
   - Prefer: ___
   - Escalate: ___

7. TASTING SYSTEM
   - Quality markers: [what to measure]
   - Failure modes: [what to watch for]
   - Regression check: [compare to last month on ___]
```

**Key lesson:** Spec writing is the discipline of making thinking executable. A recipe card doesn't make the cook more talented—it makes the kitchen more reliable. And the process of writing it often reveals that the head chef hadn't finished thinking through the dish.

### Note on Spec Revision

Specs themselves need iteration. The first version will have gaps that only surface during execution. A brief treatment here:

- The first run of a new spec is a test, not a production run
- After the first run, review which interventions you still had to make manually
- Each manual intervention reveals a gap in the spec
- Revise the spec before the second run
- A spec is a living document, not a one-time artifact

This reinforces the guide's core lesson: the work is never "write the perfect spec once." It's "write a spec, test it, learn where it breaks, and improve it."

---

## Section 9: The Pre-Service Meeting

### Purpose

Introduce the step that comes before everything else: thinking before prompting. This is the guide's twist—after nine sections of building up specification tools, the reader learns that the most important step happens before any of them.

### Metaphor

Before every dinner service, the head chef gathers the brigade for a pre-service meeting. Not to recite the menu—they already know it. But to clarify what's different tonight:

- "Table 12 is a VIP—the CEO of our biggest supplier. Every plate perfect."
- "We're 86'd on halibut. Push the salmon special instead."
- "The new dessert is running for the first time. I want to taste every one before it goes out."

The pre-service meeting isn't about the recipes (those are already written). It's about the judgment that sits above the recipes. What's the story tonight? What's different? What needs extra attention?

### Theory To Introduce

One major failure mode occurs before the AI ever sees the task: **the human has not yet clarified what they actually want.**

AI fluency can hide this. You type a half-formed thought, and the model returns a polished, confident response. That polished response can feel like it answered your question—but what actually happened is that the model adopted a framing for your vague request, and now you're evaluating *their* interpretation instead of finishing *your* thinking.

This is **framing contamination**: the fluency of the AI's first response shapes how the human thinks about the problem from that point forward. The model's confident framing replaces the human's unfinished reasoning.

The theory is not "use pen and paper because analog is magical." The theory is:

- **Externalizing thought before interaction reduces framing contamination.** Writing down what you want—even rough bullets—forces you to commit to a direction before a fluent system offers you one.
- **Pre-AI clarification improves delegation quality.** Every minute spent defining the task before opening the chat saves multiple rounds of course correction inside it.
- **The quality of the first artifact often depends on whether the user defined the problem before receiving fluent suggestions.** If the first draft is already shaped by the model's framing, every revision is adjustment rather than direction.

### Failure Example (opens the section)

> A marketing manager needs to prepare talking points for a board meeting about competitive positioning. Instead of thinking through what the board needs to hear, they open Claude and type: "Help me prepare for the board meeting about our competitive position." Claude produces a structured, professional set of talking points organized by competitor. The manager thinks "this is pretty good" and starts editing. Three revisions later, they present to the board and get pushback: "This is a competitor-by-competitor breakdown. We needed to hear about our strategic response—what are we doing about it?" The AI's framing (competitor-by-competitor analysis) overrode what the board actually needed (strategic response plan). The manager never clarified their own thinking first.

### Interactive Module

`Interactive: Before You Open the Chat`

The reader answers a short sequence of pre-flight questions for a task they're about to delegate:

1. **What outcome do you actually want?** (Not "what should I ask AI to do" but "what does the finished thing look like?")
2. **What would count as wrong, even if it looks polished?** (This surfaces unstated constraints and intent)
3. **What do you know that an outsider wouldn't know?** (This surfaces context that needs to be made explicit)
4. **What is the hard part of this task?** (This surfaces where the AI is most likely to fail and where human judgment is most needed)

The module then shows how those four answers map to the spec components:

- Answer 1 → Complete order + plating standards
- Answer 2 → House rules + intent framing
- Answer 3 → Context packet
- Answer 4 → Station assignments + escalation rules

The visual should make clear: four questions, answered in two minutes before opening the chat, would have prevented the failures described throughout the guide.

### Practical Application

`Exercise: The Pre-Service Card (Running Example)`

The reader fills out a reusable pre-service card for the competitive landscape brief:

```
PRE-SERVICE CARD

Task: Monthly Competitive Landscape Brief

Before I open the chat:

1. What does the finished plate look like?
   ___

2. What would be wrong even if it looks polished?
   ___

3. What do I know that the AI doesn't?
   ___

4. What's the hard part this month?
   ___

What's different this month vs. last month:
   ___
```

The last question is specific to recurring tasks—it's the equivalent of the head chef saying "here's what's new tonight." It catches the elements that a static spec wouldn't cover.

**Key lesson:** Better delegation begins before prompting begins. The two minutes you spend thinking before you type are the highest-leverage minutes in the entire workflow.

---

## Section 10: Running the Kitchen — Synthesis

### Purpose

Unify all concepts into one mental model. The reader should leave with a single framework they can apply to any marketing task, and a complete specification for their running example.

### Metaphor

You've now seen every part of a professional kitchen:

- How to write a clear ticket (prompt craft)
- How to stock the kitchen (context design)
- How to set the house philosophy (intent framing)
- How to write a complete recipe (spec writing)
- The building blocks: complete orders, plating standards, house rules, station assignments, and the tasting system
- The pre-service meeting that makes all of it sharper

This section is the first full service: every station running, every system active, the whole kitchen working together.

### Theory To Reinforce

The progression across the guide resolves into a single framework:

- **Prompt craft** shapes the local request (the ticket for this dish, right now)
- **Context design** shapes the information environment (what the kitchen has to work with)
- **Intent framing** shapes the value hierarchy (what the kitchen optimizes for)
- **Spec writing** shapes the executable contract (the recipe that makes it all repeatable)
- **The tasting system** closes the loop (how the kitchen knows if quality is holding)
- **The pre-service meeting** sharpens everything (the thinking that happens before cooking begins)

These are not "advanced prompting tricks." They are disciplines of delegated work. They apply whether you're working with AI, freelancers, agencies, or new team members. The skill isn't AI-specific—it's the skill of structuring work clearly enough that it can be executed without you standing over every step.

**Final synthesis claims:**

- Better AI use is often better task design
- Better task design is often better communication
- Better communication requires making explicit what humans usually leave implicit
- The real skill shift is from asking for output to designing work that holds together without rescue
- A spec that works for AI will also work for a human collaborator—and vice versa

### Interactive Module

`Interactive: Full Service`

The reader is given a new, messy marketing task (not the running example—something fresh to test transfer): "The VP of Sales wants a 'battlecard' for the sales team to use against our top competitor. He mentioned it in a meeting yesterday and wants it by Friday."

The reader assembles the full stack in order:

1. Pre-service questions (what do I need to clarify before starting?)
2. Complete order (what is actually being asked for?)
3. Context packet (what information does this task need?)
4. House philosophy (what should this optimize for?)
5. Plating standards (what does "done" look like?)
6. House rules (what must/must not happen?)
7. Station assignments (how does the work break into steps?)
8. Tasting system (how will I know if this is good—and if the next one is still good?)

The module ends with a visual showing how each layer prevents a different class of failure:

| Layer | Prevents |
|---|---|
| Pre-service meeting | Framing contamination, underthought requests |
| Complete order | Vague or incomplete tasks |
| Context packet | Stale, missing, or noisy information |
| House philosophy | Misaligned optimization |
| Plating standards | "Done" that doesn't meet the bar |
| House rules | Known failure modes |
| Station assignments | Compounding errors, unchecked handoffs |
| Tasting system | Quality drift over time |

### Practical Application

`Exercise: The Complete Recipe Card (Running Example)`

The reader reviews and finalizes the full spec they've been building throughout the guide. All the pieces from previous exercises come together into one document. This is the capstone: a real, usable specification for a real, recurring marketing task.

The reader should be able to hand this spec to a colleague, a new team member, or a different AI tool—and the work should produce consistent, checkable results without the original author standing over it.

### Optional Enhancement: Diagnostic Flowchart

If scope allows, include a static diagnostic flowchart as a reusable reference:

```
Something went wrong. Where?
  |
  ├─ Was the task clearly defined? → No → Section 2 (Complete Order)
  ├─ Was "done" defined before starting? → No → Section 3 (Plating Standards)
  ├─ Were known failure modes prevented? → No → Section 3 (House Rules)
  ├─ Was the work broken into checkable steps? → No → Section 4 (Station Assignments)
  ├─ Is quality holding over time? → No → Section 5 (Tasting System)
  ├─ Was the right information available? → No → Section 6 (Context Design)
  ├─ Did it optimize for the right thing? → No → Section 7 (Intent Framing)
  ├─ Could someone else run this? → No → Section 8 (Spec Writing)
  └─ Did you clarify your own thinking first? → No → Section 9 (Pre-Service Meeting)
```

**Key lesson:** Reliability comes from layered structure, not from finding the perfect wording. A well-run kitchen doesn't depend on one brilliant cook—it depends on systems that make good plates the default.

---

## Recommended Artifacts Produced By The Reader

By the end of the guide, the reader has built one complete specification for the competitive landscape brief, assembled from:

- One complete order (Section 2)
- Three plating standards and a four-quadrant house rules sheet (Section 3)
- One station assignment map (Section 4)
- One mini tasting system with quality markers and regression checks (Section 5)
- One context packet organized by type (Section 6)
- One house philosophy with priority hierarchy (Section 7)
- One assembled recipe card integrating all components (Section 8)
- One pre-service card (Section 9)

This gives the guide a "learn, test, apply" rhythm where each exercise advances the same artifact, and the final section is a review of a complete, reusable deliverable—not a new exercise.

---

## Potential Split Point

If the guide needs to split into two parts:

**Part 2A: The Building Blocks (Sections 0–5)**
- Bridge from part one
- The four disciplines (framework)
- The complete order
- Plating standards & house rules
- Station assignments
- The tasting system

**Part 2B: The Disciplines in Action (Sections 6–10)**
- Context design
- Intent framing
- Spec writing
- The pre-service meeting
- Synthesis

The seam is natural: Part 2A teaches the concrete skills. Part 2B teaches the higher-order disciplines that use those skills. Each part could stand alone, though they're strongest together.

---

## Writing Constraints

- Use theory language precisely but accessibly—define each concept by the problem it solves, not by its technical pedigree
- Marketing-first examples throughout; avoid software engineering or developer-centric framing
- Kitchen metaphor should enhance, not replace, the concept. If a metaphor requires more explanation than the concept itself, cut it.
- Separate adjacent concepts cleanly—the reader should never confuse plating standards with house rules, or context design with spec writing
- Avoid collapsing everything into "better prompting"—the guide's thesis is that prompting is one of four disciplines, not a synonym for all of them
- Avoid tactical sprawl until the practical application block of each section
- Named tools (Claude, ChatGPT, etc.) may appear in examples and sidebars but not in the core theory

---

## Short Version

If reduced to a one-sentence summary:

Part two is a guide to running the AI kitchen: how to move beyond chat-style prompting to design work that holds together across full service—with clear orders, plating standards, house rules, station assignments, a tasting system, and a house philosophy that keeps every plate consistent.
