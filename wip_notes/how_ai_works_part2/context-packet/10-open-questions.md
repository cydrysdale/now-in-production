# Open Questions and Assumptions

## Resolved Decisions

### 1. Guide ships as two parts — DECIDED

The guide splits at the natural seam:

- **Part 2A: The Building Blocks (Sections 0–5)** — bridge from Part 1, the four-discipline framework, complete orders, plating standards & house rules, station assignments, the tasting system
- **Part 2B: The Disciplines in Action (Sections 6–10)** — context design, intent framing, spec writing, the pre-service meeting, synthesis

Each part is a separate HTML guide registered independently in `guides/guides.json`. The running example must work in both parts — Part 2A builds the first half of the spec, Part 2B completes it. Part 2B should open with a brief recap of 2A's framework and the running example's state.

**Implications:**
- Each part needs its own metadata (title, description, OG image)
- Interactive modules split: 6 in 2A (Sections 0–5), 5 in 2B (Sections 6–10)
- Part 2A's final exercise should produce a usable intermediate artifact (not a cliffhanger)
- Part 2B's Section 6 opener needs a short bridge that re-establishes the framework for readers arriving from 2A or starting fresh

### 2. Audience is not blank slate — CONFIRMED

The audience has used AI for work and is hitting the ceiling of chat-style prompting. They've experienced the failures the guide diagnoses. Part 2 references Part 1 as prior knowledge but does not require it.

### 3. Case study will be a separate guide — DECIDED

The case study is not embedded in Part 2A or 2B. It will be its own future guide. To support that, document the Part 2 guide-building process as it happens — decisions made, what worked, what was revised, where the packet helped or didn't. This process documentation becomes raw material for the case study guide later.

**Implication:** Add a lightweight process log during drafting. Not a formal document — just a running note file where interesting decisions and workflow observations get captured. Something like `wip_notes/how_ai_works_part2/process-log.md`.

### 4. MCP should be introduced lightly in Part 2B — DECIDED

MCP is relevant enough to modern AI workflow infrastructure that the guide should acknowledge it, but it should not become a protocol explainer. The right placement is **Section 6 (Mise en Place)**: brief mention in the main flow, optional deeper explanation in a collapsible/sidebar, then later references in Part 2B only when context infrastructure becomes operationally relevant.

**Implications:**
- Section 6 should define MCP in plain English as a standard way some AI systems connect to outside tools and data sources
- The core lesson stays tool-agnostic: context quality depends on curation, freshness, relevance, and signal-to-noise management
- Any deeper explanation should focus on reader-facing consequences, not protocol mechanics
- Later Part 2B sections may refer back to MCP as one example of workflow infrastructure, but the guide should not depend on implementation-specific knowledge

## Open Questions (Remaining)

These are deferred to later conversations.

### Interactive Design

5. **Interactive complexity vs. implementation cost?** 11 modules total (6 in 2A, 5 in 2B). Some require significant JS, others are simpler progressive reveals. **Recommendation still standing:** Prioritize the strongest for full implementation, stub the rest. Deferred to implementation phase.

6. **Should interactives persist state across parts?** The cumulative artifact could be tracked in localStorage so Part 2B picks up where 2A left off. **Recommendation still standing:** Nice to have, not necessary for first version.

### Visual Design

7. **Pixel art banners?** Each part may need its own banner image. Part 2A could show the kitchen getting organized; Part 2B could show it in full service. Deferred.

8. **OG card images?** Two needed now (one per part). Deferred to HTML assembly phase.

### Content

9. **Running example split point.** The competitive landscape brief spec builds across all 11 sections. With the split, the reader finishes Part 2A with: a complete order, plating standards, house rules, station assignments, and a mini tasting system. Part 2B adds: context packet, house philosophy, assembled recipe card, pre-service card. **The split is clean.** Part 2A produces the building blocks; Part 2B assembles them into the full spec. A readiness review confirmed this is **not a blocker for beginning Part 2B**, but the exact handoff — what Part 2A's "final state" looks like — should be defined explicitly before or during Section 6 drafting.

### 10. Acme, Bolt, and Cirrus are canonical competitors — DECIDED

Acme, Bolt, and Cirrus are the fictional competitive set for the running example throughout the guide. They persist across sections and parts. Competitive details introduced in Section 0's interactive (pricing pressure, integration gaps, hiring signals) are canonical and should be consistent wherever these competitors are referenced.

**Implications:**
- Ensure any future section that references competitors by name uses Acme, Bolt, and Cirrus consistently
- Competitive details should stay illustrative but internally consistent — don't contradict details established in earlier sections
- See `08-terminology-and-guardrails.md` Illustrative Framing section for guidance on vivid detail vs. invented data

## Assumptions (Updated)

| # | Assumption | Where It Affects | Status |
|---|---|---|---|
| A1 | Audience has Part 1-equivalent knowledge | All sections | **Confirmed** |
| A2 | ~~Guide ships as one page~~ Guide ships as two parts (2A + 2B) | Structure, running example, metadata | **Decided — updated** |
| A3 | Kitchen-friendly terms in prose, industry terms in sidebars | `08-terminology-and-guardrails.md` | Assumed |
| A4 | Competitive landscape brief is the running example | All exercises | Assumed |
| A5 | Interactive modules can be stubbed in first draft | `06-drafting-workflow.md` | Assumed |
| A6 | ~~No case study~~ Case study is a separate future guide; document process as we go | Process log | **Decided — updated** |
| A7 | Source materials are reference only; outline v2 is authoritative | `09-source-context.md` | Assumed |
| A8 | Same site architecture as Part 1 | HTML structure, CSS, JS | Confirmed |

## Recommendations Not Yet Confirmed

| # | Recommendation | Location | Status |
|---|---|---|---|
| R1 | Prioritize strongest interactives for full implementation | `05-interactive-and-visual-plan.md` | Deferred |
| R2 | Draft the running example cumulative artifact as a standalone reference | `04-section-structure.md` | Open |
| R3 | Create the `drafts/` directory before starting Phase 1 | `06-drafting-workflow.md` | Open |
| R4 | Create pixel-art banners (one per part) | Visual plan | Deferred |
| R5 | Consider a progress indicator for the running example artifact | `05-interactive-and-visual-plan.md` | Deferred |
| R6 | Add terminology sidebars for industry terms | `08-terminology-and-guardrails.md` | Open |
| R7 | Start a process log for case study material | This file | **New — from decision #3** |

## Mid-Project File Changes

**Purpose:** When any stable context file is updated during drafting, log the change here. This is the freshness mechanism for the packet — a drafter starting a new session should scan this section before relying on the core context files.

**Protocol:**
- When you change a stable context file (`01` through `09`), add an entry below.
- Include: date, file changed, what changed, and what it supersedes (if anything).
- Do not delete entries — let the log accumulate.

**Format:**

```
### [Date] — [Filename]
**Changed:** [What was added, updated, or removed]
**Supersedes:** [What was previously true, if relevant]
```

### 2026-03-15 — Multiple files (packet structure update)
**Changed:** `04-section-structure.md` split into `04a-section-goals.md` (orientation layer, always load) and `04b-section-content.md` (content specs, load when drafting). Original file archived as `04-section-structure.md.bak`.
**Supersedes:** Any reference to `04-section-structure.md` — use `04a` for session orientation, `04b` for active drafting.

### 2026-03-15 — `08-terminology-and-guardrails.md`
**Changed:** Replaced full definition tables for the four disciplines, building blocks, and kitchen vocabulary with usage guardrails and a cross-reference to `02`. Added Escalation Rules section.
**Supersedes:** `08` as the location for canonical term definitions — those now live exclusively in `02-thesis-and-framework.md`.

### 2026-03-15 — `03-voice-tone-style.md`
**Changed:** Added Hard Tradeoffs section with explicit priority decisions for common drafting conflicts.
**Supersedes:** Nothing — this is new content filling a gap.

### 2026-03-17 — Multiple files (post-review drafting rules)

Patterns identified from Section 0–2 feedback reviews prompted additions to four context packet files:

**`06-drafting-workflow.md`:**
**Changed:** Added three new subsections to "Within a Session": Vocabulary Layering (rules for managing discipline-level vs. building-block-level terms across sections), Internal Consistency Self-Check (count/label/key-lesson alignment), and a note that interactive labels must match theory vocabulary.
**Supersedes:** Nothing — these are new drafting rules filling gaps exposed during Sections 0–2 review.

**`04a-section-goals.md`:**
**Changed:** Added a Section Handoffs table specifying what each section (0–5) must plant for the next section and what territory it must leave alone.
**Supersedes:** Nothing — the section goals existed but had no handoff guidance.

**`05-interactive-and-visual-plan.md`:**
**Changed:** Added a Vocabulary Alignment Rule section to Implementation Notes requiring interactive labels to match theory vocabulary.
**Supersedes:** Nothing — new rule.

**`08-terminology-and-guardrails.md`:**
**Changed:** Added an Illustrative Framing section (before Hallucination-Prone Areas) with guidance on numbers/percentages, fictional details in examples, and when to mark details as canonical vs. disposable.
**Supersedes:** Nothing — the hallucination-prone section covered statistics but not illustrative specificity in examples.

**`10-open-questions.md`:**
**Changed:** Added open question #9 about whether Acme/Bolt/Cirrus are canonical competitors for the running example.
**Supersedes:** Nothing — new question surfaced by Section 0 feedback.

### 2026-03-17 — `03-voice-tone-style.md` and `06-drafting-workflow.md` (cross-framework bridging)

Pattern identified from Sections 0–2 editorial review: framework accumulation without cross-mapping. Each section introduces a new model, but the drafts don't always connect it to the previous section's model explicitly. The reader experiences three separate lists rather than one system getting sharper.

**`03-voice-tone-style.md`:**
**Changed:** Added "Framework continuity over framework accumulation" as a teaching style principle. Rule: every section introducing a new framework must include at least one paragraph connecting it to the previous section's model.
**Supersedes:** Nothing — new principle.

**`06-drafting-workflow.md`:**
**Changed:** Added "Cross-framework bridge" to the Internal Consistency Self-Check.
**Supersedes:** Nothing — new self-check item.

### 2026-03-23 — `04a-section-goals.md`, `04b-section-content.md`, and `05-interactive-and-visual-plan.md`
**Changed:** Documented MCP placement and scope. Section 6 now owns the first mention: brief explanation in main prose, optional deeper collapsible/sidebar, and explicit guardrails to keep MCP framed as workflow infrastructure rather than a protocol deep-dive.
**Supersedes:** Earlier implicit assumption that MCP would either be omitted or handled ad hoc later.

### 2026-03-23 — `10-open-questions.md`
**Changed:** Updated open question #9 after a Part 2A readiness review: the Part 2A-to-2B handoff artifact remains undefined, but this is no longer treated as a blocker to beginning Section 6. It is now an explicit parallel refinement to resolve before or during Section 6 drafting.
**Supersedes:** The stronger implicit assumption that the handoff artifact had to be fully defined before Part 2B drafting could begin at all.

### 2026-03-23 — `10-open-questions.md`
**Changed:** Resolved open question #10 — Acme, Bolt, and Cirrus are canonical competitors for the running example throughout the guide. Competitive details from Section 0 interactive are canonical and must be consistent across sections.
**Supersedes:** Open status of question #10.

---

## What to Do Next (in a later conversation)

1. Voice and coherence review across all Part 2A sections (Phase 2)
2. Review the interactive module prioritization — which get full implementation first per part?
3. Define the Part 2A "final state" running example artifact
4. Begin Part 2B drafting: Section 6 (with bridge recap)
