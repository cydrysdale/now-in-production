# Process Log — How AI Works Part 2

> A running record of decisions, observations, and workflow notes for the Part 2 guide-building process. Raw material for the future case study guide. Not a formal document — add entries as they happen.

---

## Pre-History: What Part 1 Taught (Extrapolated)

*The following is reconstructed from Part 1 artifacts rather than recorded in real time. Included here because Part 2's production choices are only legible against what Part 1 established and what it didn't.*

### The guide started with a different theme

The earliest planning document (`wip_notes/how_ai_works_part1/AI_GUIDE_PLAN.md`) describes a "Marketing Potluck Project Management" theme — coworkers coordinating a launch week, messy Slack DMs as the raw input, AI as an operations coordinator turning intake into a dataset. This is project management territory, not marketing creative. The kitchen metaphor doesn't appear in this plan.

**What shifted:** By the time section drafts were complete, the kitchen metaphor had become the structural backbone. The creative review document (`How_AI_Works_creative_review.md`) describes a full "pixel kitchen HUD" system — Ticket Cards, Prep Counter Panel, Counter Space meter, Expo Pass Checklist — as the visual language for the whole guide. The metaphor migrated from background flavor to load-bearing structure.

**Implication for Part 2:** Part 2 inherits this fully-formed metaphor system. It doesn't need to establish kitchen vocabulary from scratch — it needs to extend it from one cook to a full brigade.

### Part 1 drafting was iterative with human checkpoints at each stage

The Part 1 archive shows a clear production pattern:
1. Initial AI-generated draft using a highly structured prompt (`archive/draft_prompt.md`)
2. Editor review with specific, targeted feedback (`archive/v1_review_notes.md`)
3. Multiple revision cycles (at least six archived versions: v1–v6, plus two "How_LLMs_Work" variants)
4. Section-by-section granular drafts (section0 through section7 + bonus)
5. A dedicated creative review pass for visuals and interactives
6. A "making of" document written after the fact

The v1 review notes are detailed and critical — they don't accept the draft; they find specific conceptual imprecision ("predicts the next useful words" → "predicts the next most likely tokens") and structural issues (too many "Interactive: coming soon" callouts interrupting flow). This level of review is what moved the guide from a competent AI draft to something that reads like a published guide.

**Observation:** The draft prompt itself (`archive/draft_prompt.md`) is a well-structured spec — role, context, instructions, constraints, output format, success criteria — applied to the task of generating guide content. Part 1's production process practiced the disciplines Part 2 will teach, without naming them as such.

### The character select interactive documented the workflow publicly

The "making of" section (`making-of-this-guide-ai-workflow.md`) documents the production workflow for the character select screen: AI for requirements planning and review, human for implementation, AI for draft artwork, human for cleanup, AI for copy drafts, human for fact-checking and editing. This is the most explicit public documentation of the workflow approach. It models the general pattern: AI accelerates; humans decide what ships.

---

## Phase 1: Part 2 Conception — Theory Outline

*Date: before 2026-03-14 (exact date not recorded). Extrapolated from `how-ai-works-part2-theory-outline.md`.*

The first structural document for Part 2 was a theory outline — not a production plan, but a conceptual map. Key features:

- **13 sections** (later condensed to 11): separate sections for acceptance criteria and constraints, which were later merged into one
- **"Engineering" terminology throughout**: "context engineering," "intent engineering," "specification engineering" — the language of the Advanced Prompting source material, not the kitchen metaphor
- **Theory-first structure established early**: the outline explicitly states "theory comes first" and "every theory section gets an interactive module, followed by a practical application exercise"

**Decision logged:** The theory outline's framework is sound but its terminology is wrong for the audience. The guide needs to reach marketing professionals, not developers or AI practitioners. "Context engineering" is accurate but alienating; "mise en place" is accurate and accessible. The v2 outline would make this switch.

---

## Phase 2: Outline v2 — Metaphor Integration and Structural Decisions

*Date: before 2026-03-14 (exact date not recorded). Extrapolated from `how-ai-works-part2-outline-v2.md` structure and from decisions documented in the context packet.*

The v2 outline (`how-ai-works-part2-outline-v2.md`) represents a full rewrite of the theory outline with two major changes:

**1. Terminology switched to kitchen-friendly equivalents**
"Specification engineering" became "The Recipe Card." "Context engineering" became "Mise en Place." "Intent engineering" became "The House Philosophy." The concepts are identical; the vocabulary is audience-matched. This is itself an example of intent framing — the guide's target audience shaped what the vocabulary should optimize for.

**2. Sections condensed from 13 to 11**
Acceptance criteria (plating standards) and constraints (house rules) were merged into one section. This cleaned up a slight redundancy in the theory outline and reduced the guide's overall length without losing content.

**Decision logged:** A running example would thread through the entire guide. The competitive landscape brief was chosen because it's recurring (makes evaluation design natural), multi-step (covers all four disciplines), and specific to marketing work without being too execution-specific.

**Decision logged (from context packet `10`):** The guide splits into Part 2A (The Building Blocks, Sections 0–5) and Part 2B (The Disciplines in Action, Sections 6–10). The seam was identified as natural: the building blocks are concrete and teachable first; the higher disciplines use those blocks.

---

## Phase 3: Source Material Gathering

*Date: before 2026-03-14. Extrapolated from file contents and commit history.*

Two reference materials were assembled alongside the outline:

- **`Advanced Prompting.md`**: A transcript from a video covering the four-discipline framework from a practitioner's perspective. Useful for examples (Klarna, Shopify/Lütke) and framing but inappropriate to use directly — too conversational, too date-stamped, too model-specific.
- **`Prompt Kit.md`**: A practical artifact turning the framework into working templates. Useful for the pre-service meeting section (Section 9) specifically — the "Prompt 0" concept and the seven pre-delegation questions.

**Decision logged:** These are reference materials, not source materials. The guide should adapt ideas from them, not reproduce them. The context packet (`09-source-context.md`) documents this hierarchy explicitly: outline v2 is authoritative; this packet governs voice and workflow; the reference materials are to mine, not to cite.

---

## Phase 4: Context Packet Creation

*Date: 2026-03-14. Committed in a single batch as part of "Preparation for follow up AI guides."*

The full context packet (files `01` through `10` plus `README.md`) was created and committed alongside the STATUS.md and source materials. Notable things about how the packet was built:

**What it did well from the start:**
- Clear project brief with observable done criteria (`01`)
- Canonical framework definitions with kitchen vocabulary table (`02`)
- Voice rules extracted from published guides, not invented (`03`)
- Detailed section-by-section content plan with interactive module specs (`04`)
- Phased drafting workflow with explicit session management (`06`)
- Multi-level quality checklist with a scoring rubric (`07`)
- Hallucination risk identification with "flag for manual review" guidance (`08`)
- Source-of-truth hierarchy for resolving source conflicts (`09`)
- Decision log with DECIDED/OPEN/DEFERRED tracking (`10`)
- A README that separated files into load tiers (always/when relevant/reference) — the packet practiced the context design principles the guide teaches

**What was missing at creation:**
- No Escalate quadrant in the house rules — the constraint architecture in `08` had Must Do and Must Not Do but no explicit "stop and flag" triggers
- Canonical definitions lived in two files (`02` and `08`), creating a dual source-of-truth risk
- `04` mixed orientation content (section purposes, key lessons) with content-building specs (theory, failure examples, interactive descriptions) — both appropriate for different sessions but always loaded together
- No mechanism for indicating when stable context files become stale mid-project
- No explicit priority ladder — only one tiebreaker stated ("if kitchen analogy needs more explanation than the concept, cut it")

---

## Phase 5: Pre-Drafting Review — Context Packet vs. Advanced Prompting Principles

*Date: 2026-03-15. This session.*

Before drafting began, the context packet was reviewed against the principles in the Advanced Prompting document — a meta-check: does the production packet practice what the guide preaches?

**Finding:** The packet was strongly aligned overall. The five gaps above were identified and resolved before any section drafting began.

**Why this matters for the case study:** This is the pre-service meeting in practice. The review happened before the kitchen opened. Resolving the escalation gap, the definition ownership gap, the granularity gap, the freshness gap, and the missing priority ladder — all of these before a single section draft — is the exact behavior the guide's Section 9 is designed to teach. The case study has a concrete example of the principle applied to its own production.

**Changes made:**
- `08`: Added an Escalation Rules section with five specific stop-and-flag triggers
- `08`: Replaced full definition tables with usage guardrails + cross-reference to `02`
- `04`: Split into `04a-section-goals.md` (always load) and `04b-section-content.md` (load when drafting)
- `README.md` and `06`: Updated to reflect the split and add the check-`10`-first protocol
- `10`: Added a Mid-Project File Changes log section (the freshness mechanism)
- `03`: Added a Hard Tradeoffs section with six explicit priority decisions

**Observation that stood out:** The missing Escalate quadrant is ironic. The guide teaches in Section 3 that constraint architecture needs all four quadrants — Must / Must Not / Prefer / Escalate — and that the Escalate quadrant is what prevents known-but-underspecified failure modes. The production packet for this guide was missing exactly that quadrant. This will make a strong self-illustrating moment in the case study.

**Observation on the packet's self-awareness:** The README's load-tier structure (Core / Drafting Support / Reference) is itself an example of context design — curation rather than accumulation. This was present from the start and worked well. The gap wasn't in the design philosophy; it was in the execution of specific components.

---

## Phase 6: First Drafting Session — Sections 0–2

*Date: 2026-03-17.*

### What happened

Sections 0, 1, and 2 were drafted in sequence in a single session, following the context packet's Phase 1 workflow (one section at a time, self-check after each). All core context files were loaded at the start of the session (`01`, `02`, `03`, `04a`, `04b`, `05`, `06`, `08`).

### Structural decision: catering opener for Section 0

The original context packet spec called for a marketing failure example (competitive analysis chat) as the Section 0 opener. During drafting, the human flagged that competitive analysis is too niche — not all marketing professionals do it, and the opener should be universally accessible.

The solution was a catering order scenario: emailing a restaurant a vague lunch order, then correcting it across six emails. This was stronger for three reasons:

1. It's literally a kitchen scenario — the metaphor and the lesson are the same thing
2. Everyone has dealt with catering or food orders regardless of marketing specialty
3. The back-and-forth email chain mirrors the back-and-forth AI chat perfectly

The competitive analysis chat was compressed to one paragraph as the bridge to the AI version, with the full six-turn marketing scenario living only in the interactive module.

**Case study relevance:** This is a real-time example of the guide's own Section 7 concept — intent framing. The context packet's spec optimized for conceptual accuracy (the competitive analysis chat is the correct failure example for the running example). The human optimized for audience accessibility (not everyone does competitive analysis). The human's priority — audience fit over structural elegance — was the right call. The context packet didn't have a way to encode "the opener must be universally accessible" because that's an intent decision, not a content spec.

### What the context packet caught

- Section pattern (failure → theory → interactive → exercise → key lesson) was followed correctly in all three sections
- Kitchen metaphor was used structurally throughout
- Running example advanced coherently
- Voice matched the published guides

### What the context packet missed

Three review passes (section-level feedback, then a cross-section editorial review) identified issues the context packet's rules did not prevent:

**1. Vocabulary layering — disciplines and building blocks got mixed.**
Section 0 introduced building-block terms (plating standards, house rules) formally before those concepts had a home section. Section 1's opener labeled a failure as a "constraint" problem — building-block vocabulary — when it should have stayed at the discipline level. The context packet defined both vocabulary systems but never said which terms belong to which section.

**2. Internal consistency — counts, labels, and field names drifted within sections.**
Section 2's prose said "at least six things," then listed six items, then introduced a seven-field table. The same section's interactive used eight omission labels with different names than the seven theory fields. The reader had to reconcile the systems alone.

**3. Section boundaries — concepts bled across sections.**
Section 0 dropped the judgment/intent thread, leaving Section 1 to introduce intent framing cold. Section 2's "relevant background" field risked absorbing Section 6's context-design territory. The context packet had section goals but no guidance on what each section should set up for the next one and what it should leave alone.

**4. Illustrative vs. canonical framing was ambiguous.**
Section 0's interactive introduced specific fictional competitor details (company names, connector counts, pricing changes) without clarifying whether those persisted across the guide. The percentage mechanic in Section 2 could read as empirical rather than schematic.

**5. Framework accumulation without cross-mapping.**
The editorial review identified the deepest issue: across three sections, the reader absorbs three different frameworks (five hidden jobs, four disciplines, seven complete-order fields) without enough explicit connection between them. Each section was individually clear. The cumulative experience felt like learning separate lists rather than one system getting sharper.

**6. Key lessons drifted toward adjacent sections.**
Section 1's key lesson used building-block vocabulary and pointed toward Sections 2–4 rather than capturing Section 1's own claim about diagnosis.

### How the context packet was updated

Six changes were made to five context packet files in response to the review findings:

| File | Addition |
|---|---|
| `06` | Vocabulary Layering rules (which terms belong to which section) |
| `06` | Internal Consistency Self-Check (counts, labels, key lessons) |
| `06` | Cross-framework bridge check |
| `04a` | Section Handoffs table (what to plant, what to leave alone) |
| `05` | Vocabulary Alignment Rule for interactive labels |
| `08` | Illustrative Framing guidance (numbers, fictional details, canon vs. disposable) |
| `03` | Framework continuity teaching principle |
| `10` | Open question: are Acme/Bolt/Cirrus canonical? |

### The test

The human will regenerate Sections 0–2 in the next session using the updated context packet, without referencing the original drafts. The test: does the updated packet prevent the issues the reviews caught, or do some issues require editorial judgment that rules can't encode?

The honest pre-test assessment is that the updated rules will catch the mechanical issues (wrong vocabulary level, mismatched counts, label drift, boundary violations) but may not fully prevent the editorial issues (framework accumulation feel, pacing of the Section 0 pivot, making spec writing feel as distinct as the other three disciplines). Those require writing quality during execution, not just rule compliance.

**Case study relevance:** This is the tasting system in action — specifically the quality vs. regression distinction from Section 5. The reviews were quality checks (is this draft good?). The context packet updates are regression prevention (will the next draft have the same problems?). The test will measure whether the packet updates actually prevent regression or just document what went wrong.

---

## Open Threads for Future Entries

*Add entries as they arise during drafting:*

- **Regeneration test results:** Did the updated packet prevent the review issues? Which ones persisted? What does that say about the limits of context packet design vs. editorial judgment?
- Which interactive modules got full implementation vs. stubbed in first pass?
- What did the running example reveal about the guide's structure as it accumulated across sections?
- Where did the packet help? Where did it fall short?
- What did the kitchen metaphor do well? Where did it create friction?
- What did the quality rubric actually catch in review?
- What would have been different without the pre-service review session?
