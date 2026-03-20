# Interactive and Visual Plan

## Design Principle

Visuals and interactives are core instructional components, not decorative afterthoughts. Each interactive module exists because the concept is better learned by doing than by reading.

**Rule:** If removing an interactive module wouldn't change what the reader understands, the module isn't doing enough work. Every interactive should produce an insight the prose alone cannot.

## Instructional Design: When to Use What

| Delivery Mode | Best For | Examples in This Guide |
|---|---|---|
| **Prose** | Theory, narrative, metaphor development, failure stories | Section openers, theory blocks, key lessons |
| **Static visual** | Frameworks, comparisons, diagnostic flowcharts | Four-discipline stack diagram, Part 1 vs Part 2 comparison, diagnostic flowchart (Section 10) |
| **Interactive module** | Classification, sorting, building, constraint/priority exercises | Every section's interactive module |
| **Structured template** | Artifact building, spec components | Running example exercises, the recipe card template |
| **Callout** | Key takeaways, quick diagnostic checks | Kitchen Truth, Kitchen Inspection |

## Recurring Interactive Mechanics

The guide reuses a small set of interaction patterns instead of inventing a new interface each time. This keeps the experience coherent and reduces implementation complexity.

| Mechanic | What the Reader Does | Sections |
|---|---|---|
| **Tagger** | Identify what hidden work the human is doing | 0, 1 |
| **Classifier** | Assign a failure to the correct discipline layer | 1 |
| **Detector** | Uncover hidden omissions in a casual request | 2 |
| **Sorter** | Decide category (vague/checkable, plating/rule, etc.) | 3 |
| **Splitter** | Break a large task into stations and score the decomposition | 4 |
| **Builder** | Assemble eval criteria from component parts | 5 |
| **Packer** | Choose what belongs in context given a limited budget | 6 |
| **Ladder** | Rank competing priorities and define thresholds | 7 |
| **Stress test** | Probe a spec for missing structure | 8 |
| **Sequencer** | Answer pre-flight questions, see how they improve spec quality | 9 |
| **Assembler** | Build the full stack from a messy task | 10 |

## Interactive Module Specifications

### Section 0: The Hidden Brigade

- **Mechanic:** Tagger
- **Input:** Six-turn chat transcript (marketing task: competitive positioning summary)
- **Interaction:** After each turn, reader selects label(s) for what the human contributed
- **Labels:** Writing the ticket, Stocking the counter, Describing the finished plate, Posting the kitchen's rules, Working the stations, Catching a bad plate
- **Reveal:** Visual breakdown showing prompt = ~20% of control structure
- **Implementation:** Multi-step walkthrough with progressive reveal. Each turn shows the chat exchange, then a tagging interface. Scoreboard accumulates across turns.

### Section 1: Failure Layer Classifier

- **Mechanic:** Classifier
- **Input:** Six marketing-flavored failure scenarios
- **Interaction:** Reader assigns each to one of four disciplines
- **Reveal:** Only one was a "bad prompt" — the rest were structural failures
- **Implementation:** Card-based interface. Drag or click to assign category. Color-coded feedback on submit.

### Section 2: The Missing Ticket

- **Mechanic:** Detector
- **Input:** One casual marketing request ("Draft a blog post about our new feature launch")
- **Interaction:** Reader clicks to reveal hidden omissions one at a time (8 omissions)
- **Reveal:** Visual showing the request provided ~15% of needed information
- **Implementation:** Progressive reveal with a filling bar or pie chart. Each revealed omission adds to the percentage.

### Section 3: Standards & Rules Sorter

- **Mechanic:** Sorter
- **Input:** 10 items related to the competitive landscape brief
- **Interaction:** Reader sorts each into: Plating Standard, Must Do, Must Not Do, Prefer, Escalate
- **Reveal:** Shows how plating standards and house rules cover different failure modes
- **Implementation:** Drag-and-drop or click-to-assign into five columns. Feedback on submit with notes on ambiguous items.

### Section 4: Build the Line

- **Mechanic:** Splitter
- **Input:** Large marketing task (quarterly campaign retrospective)
- **Interaction:** Reader drags components into a sequence of stations
- **Scoring:** Clear outputs, independent checkability, explicit dependencies, appropriate granularity, defined handoffs
- **Implementation:** Drag-to-reorder with scoring rubric displayed after submission. Show one valid solution alongside the reader's.

### Section 5: Build the Tasting Station

- **Mechanic:** Builder
- **Input:** The running example (monthly competitive brief)
- **Interaction:** Reader selects aspects to test, defines success bars, identifies failure modes
- **Reveal:** Shows that 3–5 checks dramatically improve quality awareness
- **Implementation:** Multi-step form builder. Each step adds a component. Final view shows the assembled evaluation system.

### Section 6: Stock the Kitchen

- **Mechanic:** Packer
- **Input:** Set of possible materials for the competitive brief (varying sizes)
- **Interaction:** Reader selects what to load within a limited context budget (visualized as shelf space)
- **Reveal:** Essential vs. noise vs. should-have-been-summarized vs. missing
- **Implementation:** Visual shelf/pantry metaphor. Items have different sizes. Budget bar shows remaining space. Color-coded feedback on submit.

### Section 7: The Priority Ladder

- **Mechanic:** Ladder
- **Input:** Five pairs of values in tension
- **Interaction:** Reader chooses which wins in each pair and writes a one-sentence decision rule
- **Reveal:** How five explicit priority decisions change output compared to leaving them unstated
- **Implementation:** Binary choice cards with text input for decision rules. Before/after comparison on submit.

### Section 8: Stress Test the Recipe

- **Mechanic:** Stress test
- **Input:** Draft spec for the competitive brief (looks thorough but has gaps)
- **Interaction:** Reader asks questions to reveal gaps (8 probe questions available)
- **Reveal:** Tracks how many gaps found. Ends with revised spec showing patches.
- **Implementation:** Progressive reveal — each question asked reveals a gap. Counter tracks discovery rate. Final view shows patched vs. original spec.

### Section 9: Before You Open the Chat

- **Mechanic:** Sequencer
- **Input:** Four pre-flight questions
- **Interaction:** Reader answers each question for a task they're about to delegate
- **Reveal:** Shows how each answer maps to a spec component
- **Implementation:** Four text input fields. Submit shows a mapping diagram: answer 1 → complete order + plating standards, answer 2 → house rules + intent, answer 3 → context packet, answer 4 → station assignments + escalation.

### Section 10: Full Service

- **Mechanic:** Assembler
- **Input:** A new, messy marketing task (VP battlecard request)
- **Interaction:** Reader assembles the full stack in order: pre-service questions, complete order, context packet, house philosophy, plating standards, house rules, station assignments, tasting system
- **Reveal:** Visual showing which layer prevents which failure class
- **Implementation:** Multi-step assembly wizard. Each step unlocks the next. Final summary shows the complete stack as a table mapping layer → failure prevented.

## Static Visual Elements

### Framework Diagrams (Needed)

- **Four-discipline stack** — Visual showing the four disciplines layered, with building blocks between
- **Part 1 vs Part 2 comparison** — Side-by-side showing the metaphor evolution
- **Building blocks → disciplines mapping** — How Sections 2–5 feed into Sections 6–8

### Diagnostic Flowchart (Section 10, Optional)

Static decision tree: "Something went wrong. Where?" with branches to each section.

### Running Example Progress Indicator

**RECOMMENDATION:** Consider a subtle visual indicator showing which components of the running example spec have been completed at each section boundary. This reinforces the cumulative artifact idea.

## Implementation Notes

- All interactive modules in vanilla JS (no frameworks)
- Must work in both light and dark themes
- Must be keyboard-accessible
- Should degrade gracefully (content is readable even if JS fails)
- Use existing CSS patterns from Part 1 where applicable (`.sandbox-card`, `.code`, `.truth`)
- Guide-specific JS in a dedicated file (`../assets/js/how-ai-works-part2.js` or similar)
- Guide-specific CSS in a `<style>` block or dedicated file

## Vocabulary Alignment Rule

Interactive module labels, categories, and field names **must align with the vocabulary used in that section's theory block.** The interactive reinforces the theory — it should not introduce a parallel vocabulary system the reader has to reconcile on their own.

- If the theory defines seven fields, the interactive must use those seven fields (not eight with different names).
- If the theory uses discipline-level language, the interactive's categories must use discipline-level language.
- If the interactive needs finer granularity than the theory (e.g., splitting one theory field into two interactive items), explicitly bridge between them: "This covers two parts of [theory field name]."
- After drafting interactive content, cross-check every label against the section's theory. Any label that doesn't match a theory term needs either a bridge or a rename.

**OPEN QUESTION:** How much interaction should be implemented in the first draft vs. stubbed with placeholder markup? The outline is detailed enough to draft prose around interactive specs. The JS implementation could be a second pass.
