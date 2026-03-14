# Thesis and Framework

## Core Thesis

"Prompting" is not one skill. Once work becomes multi-step, long-running, or delegated, it splits into four distinct disciplines:

1. **Prompt Craft** — shaping a request clearly
2. **Context Design** — shaping the information environment
3. **Intent Framing** — shaping what the system should optimize for
4. **Spec Writing** — shaping a specification that can survive without live supervision

Most AI failures at this level are not failures of intelligence. They are failures of structure:

- Incomplete problem statements
- Vague or uncheckable definitions of done
- Unspoken tradeoffs
- Overloaded or missing context
- Missing escalation rules
- Missing evaluation loops

## The Kitchen Version

A bad plate rarely means the cook can't cook. It usually means the recipe was unclear, the pantry was wrong, the house rules didn't cover the edge case, or nobody defined what a good plate looks like.

## The Four Disciplines

### 1. Prompt Craft (The Order Ticket)

The local skill of phrasing a task clearly in a specific interaction.

- **Main concern:** How the request is expressed
- **Failure mode:** Vague, underspecified, or poorly structured asks
- **Kitchen:** A ticket that says "make something with chicken" vs. one with exact preparation, sides, plating

### 2. Context Design (Mise en Place)

The design of the information environment in which the task runs.

- **Main concern:** What information is available, relevant, and visible at the right time
- **Failure mode:** Missing, noisy, stale, or poorly curated context
- **Kitchen:** The cook reaches for shallots and finds an empty bin — or worse, shallots from two weeks ago

### 3. Intent Framing (The House Philosophy)

The encoding of goals, values, tradeoffs, and decision boundaries.

- **Main concern:** What the system should optimize for when multiple valid choices exist
- **Failure mode:** Work that is efficient but misaligned with what actually matters
- **Kitchen:** "We're farm-to-table. Fresh over fancy. If we're out of something, 86 it — never substitute silently."

### 4. Spec Writing (The Recipe Card)

The writing of a complete, executable description of what should be produced, how it should be judged, and how the work should be staged.

- **Main concern:** Whether the task can survive across time and handoffs without live supervision
- **Failure mode:** Work that begins plausibly but collapses under ambiguity, drift, or scope confusion
- **Kitchen:** A full recipe card: ingredients, quantities, technique, plating photo, allergen flags, timing notes, quality standards — executable without a phone call to the head chef

## How They Stack

These are not competing approaches. They are layers:

- A strong ticket cannot fix a missing house philosophy.
- Rich mise en place cannot fix a vague definition of done.
- A recipe card is not just a longer ticket. It is a more explicit contract.
- Higher layers depend on lower layers but are not reducible to them.

## The Building Blocks (Sections 2–5)

Between the four disciplines and their application, the guide teaches five concrete building blocks:

| Building Block | Section | Primary Discipline | What It Answers |
|---|---|---|---|
| The Complete Order | 2 | Prompt Craft + Spec Writing | Is the task fully defined? |
| Plating Standards | 3 | Spec Writing | What does "done" look like? |
| House Rules | 3 | Intent Framing + Spec Writing | What must/must not happen? |
| Station Assignments | 4 | Spec Writing | How is the work broken into verifiable pieces? |
| The Tasting System | 5 | All four | How do you know if quality is holding over time? |

## Kitchen Metaphor Vocabulary

This vocabulary is used consistently throughout the guide:

| Concept | Kitchen Term | Definition |
|---|---|---|
| Prompt Craft | The order ticket | The local skill of writing a clear request for one task |
| Context Design | Mise en place | What's stocked, prepped, organized, and within reach |
| Intent Framing | The house philosophy | Standing priorities that govern decisions when multiple valid choices exist |
| Spec Writing | The recipe card | A complete, executable document that lets the kitchen run without the head chef hovering |
| Self-contained problem statement | The complete order | A ticket with enough info to execute without asking the server |
| Acceptance criteria | Plating standards | Observable checks that define "done" before the work begins |
| Constraints | House rules | Standing constraints that prevent known failure modes |
| Decomposition | Station assignments | Work broken into stations, each with one job and a clean handoff |
| Evaluation design | The tasting system | A reusable method for judging quality over time |
| Pre-AI clarification | The pre-service meeting | Clarifying your own thinking before the kitchen starts cooking |

## The Conceptual Arc

The guide moves through three phases:

**Phase 1 — The Shift (Sections 0–1):** Why chat-style prompting has a ceiling. Why "prompting" is really four disciplines. The framework.

**Phase 2 — The Building Blocks (Sections 2–5):** The concrete skills: complete orders, plating standards, house rules, station assignments, the tasting system.

**Phase 3 — The Disciplines in Action (Sections 6–10):** Context design, intent framing, and spec writing as higher-order disciplines built from the blocks. The pre-service meeting. Synthesis.

## Final Synthesis Claims

- Better AI use is often better task design
- Better task design is often better communication
- Better communication requires making explicit what humans usually leave implicit
- The real skill shift is from asking for output to designing work that holds together without rescue
- A spec that works for AI will also work for a human collaborator — and vice versa
- These are disciplines of delegated work, not "advanced prompting tricks"

## Split Structure — DECIDED

The guide ships as two parts:

- **Part 2A: The Building Blocks (Sections 0–5)** — bridge from Part 1, the four-discipline framework, complete orders, plating standards & house rules, station assignments, the tasting system
- **Part 2B: The Disciplines in Action (Sections 6–10)** — context design, intent framing, spec writing, the pre-service meeting, synthesis

The seam is natural. Part 2A teaches the concrete skills. Part 2B teaches the higher-order disciplines that use those skills. Each stands alone; they're strongest together.

**Running example handoff:** Part 2A ends with the reader having built: a complete order, plating standards, a four-quadrant house rules sheet, a station assignment map, and a mini tasting system. Part 2B opens by briefly recapping this state, then adds: a context packet, a house philosophy, the assembled recipe card, and a pre-service card.

**Part 2B's Section 6 opener** needs a short bridge paragraph that re-establishes the four-discipline framework and the running example's current state, so it works for readers arriving from 2A or starting fresh.
