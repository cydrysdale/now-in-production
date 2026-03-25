# Section Goals and Running Example

> **Load this file every drafting session.** It is the orientation layer: what each section achieves, what the running example produces, and how they connect. For section-building details (theory summaries, failure example content, interactive module descriptions, exercise specs), see `04b-section-content.md`.

---

## Running Example

A single marketing task threads through every section: **"Produce a monthly competitive landscape brief for the leadership team."**

Why this task:

- It's real. Marketing teams actually do this.
- It's recurring, which makes evaluation design natural.
- It's multi-step: research, synthesis, judgment calls, formatting for executives.
- It involves all four disciplines.
- It has clear failure modes at every layer.

Each section's practical application exercise applies the new concept to this task. By the end, the reader has assembled a complete, reusable specification — not eight disconnected exercises.

**Webapp chat note:** Many readers will only have access to a webapp chat interface (Claude, ChatGPT, etc.). When discussing practical application, include a brief note on how to apply the concept in a standard chat-based session. The systems and specs taught here are tool-agnostic — a reader using a chat window should still be able to use them.

## Recurring Element: Kitchen Inspection

Between major sections, short "Kitchen Inspection" sidebars present a 2–3 sentence scenario and ask the reader to spot what's missing. These are static (no interactive component), quick to read, and train the diagnostic reflex.

**Format:**

> **Kitchen inspection:** [Scenario describing a plausible failure.] Was this a [concept A] problem or a [concept B] problem?
> *Answer: [Concept]. [One sentence why.]*

Place these at natural transition points. Target 2–3 across the full guide.

---

## Section Goals at a Glance

| Section | Purpose | Key Lesson | Running Example Contribution |
|---|---|---|---|
| **0: From One Cook to a Full Kitchen** | Bridge from Part 1. Establish the shift from supervised chat to delegated work. | If the task only works when you babysit it, you don't yet have a delegable structure. | Reader identifies what the competitive brief would need beyond a single prompt. |
| **1: The Four Disciplines** | Introduce the main framework. | Diagnosis gets sharper when "prompting" is broken into disciplines. | Reader identifies which discipline is most likely to break first for the competitive brief. |
| **2: The Complete Order** | First building block — defining a task so it's solvable without live backfilling. | Specificity is not verbosity. It is the removal of critical ambiguity. | Reader rewrites the competitive brief as a complete order with explicit fields. |
| **3: Plating Standards & House Rules** | Merge acceptance criteria and constraints into one section. | The quality bar must be visible before the work begins, not only after disappointment. | Reader defines three plating standards and one constraint in each quadrant for the competitive brief. |
| **4: Station Assignments** | Explain decomposition — why bigger tasks must be broken into verifiable pieces with explicit handoffs. | A clean handoff is part of the spec, not an implementation detail. | Reader creates a station map for the competitive brief (station → input → output → check before handoff). |
| **5: The Tasting System** | Move beyond "does this look okay?" to systematic, repeatable quality judgment. | Evaluation makes quality legible. Without it, you can't tell the difference between "this is good" and "I've gotten used to this level of output." | Reader drafts a mini tasting system for the competitive brief. |
| **6: Mise en Place — Context Design** | Return to the first higher discipline, now equipped with building blocks. Introduce context infrastructure lightly, including MCP as one way modern AI systems connect to outside sources and tools. | The best-stocked kitchen isn't the one with the most ingredients — it's the one where every ingredient is fresh, relevant, and within reach. | Reader builds a context packet organized by type. |
| **7: The House Philosophy — Intent Framing** | Explain encoding of priorities and tradeoffs for delegated work. | If priorities are only obvious in hindsight, they were never encoded. | Reader writes a house philosophy with top priority, second priority, default optimization, and non-delegable decisions. |
| **8: The Recipe Card — Spec Writing** | Present spec writing as the integrating discipline that pulls everything together. | Spec writing is the discipline of making thinking executable. | Reader assembles the full recipe card for the competitive brief. |
| **9: The Pre-Service Meeting** | The twist — the most important step happens before any of the building blocks. | The two minutes you spend thinking before you type are the highest-leverage minutes in the entire workflow. | Reader creates a reusable pre-service card for the competitive brief. |
| **10: Running the Kitchen — Synthesis** | Unify all concepts. The reader finishes with a complete framework and a complete spec. | Reliability comes from layered structure, not from finding the perfect wording. | Reader reviews and finalizes the complete spec built across the guide. |

---

## Section Handoffs

Each section must plant specific concepts for the next section and leave specific territory alone. This prevents gaps (Section 1 introduces intent framing cold because Section 0 dropped the judgment thread) and boundary violations (Section 2 absorbs Section 6's context-design territory).

| Section | Must Plant for Next Section | Must Leave Alone |
|---|---|---|
| **0** | The concept that hidden work includes *judgment and tradeoff decisions* — not just context, format, and checking. Section 1 needs the reader primed for intent framing. Describe the hidden jobs using kitchen-flavored language — the reader should leave hearing kitchen vocabulary, even though the formal terms haven't been introduced yet. | Do not name the four disciplines or the building blocks formally. Describe the hidden jobs; don't categorize them. |
| **1** | Clear, distinct definitions for all four disciplines — especially spec writing, which is hardest to distinguish. The reader should leave knowing spec writing is about *transferability and handoff survival*, not just detail. | Do not introduce building-block terms (plating standards, house rules) as formal categories. Use discipline-level language throughout. |
| **2** | The distinction between *naming context on the ticket* (what the task needs) and *curating the full information environment* (Section 6's territory). One sentence is enough: "A complete order names the background that matters; it does not yet build the full context packet." | Do not absorb Section 6's context-design work. "Relevant background" is a ticket field, not an invitation to assemble all materials. |
| **3** | The difference between *observable checks* (plating standards) and *standing constraints* (house rules). Both are needed; they cover different failure modes. | Do not absorb Section 7's intent-framing territory. House rules are constraints, not priorities. |
| **4** | The idea that *each station needs a checkpoint before handoff* — this feeds directly into the tasting system. | Do not introduce evaluation criteria. Stations have checkpoints; Section 5 turns those into a system. |
| **5** | The distinction between *quality* (is this plate good?) and *regression* (is this plate as good as last month's?). This distinction carries into Part 2B. | Do not introduce context curation, intent encoding, or spec assembly. Part 2A ends here; those are Part 2B concepts. |
| **6** | The idea that context design includes both *what belongs in the packet* and *how modern systems reach outside the chat for fresh materials*. A brief introduction to MCP belongs here as infrastructure context, not as protocol deep-dive. | Do not let MCP or tool-connection mechanics take over the section. The core lesson is still curation, freshness, relevance, and signal-to-noise management. |

---

## Cumulative Artifacts Produced by the Reader

By the end, the reader has built:

| Section | Artifact |
|---|---|
| 2 | One complete order |
| 3 | Three plating standards + four-quadrant house rules |
| 4 | One station assignment map |
| 5 | One mini tasting system |
| 6 | One context packet organized by type |
| 7 | One house philosophy with priority hierarchy |
| 8 | One assembled recipe card (full spec) |
| 9 | One pre-service card |
| 10 | Final review of the complete spec |
