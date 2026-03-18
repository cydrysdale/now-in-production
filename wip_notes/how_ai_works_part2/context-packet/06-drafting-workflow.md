# Drafting Workflow

## Workflow Model

This guide is built in Claude Code CLI using file-based drafting with iterative revision. The workflow assumes agentic review loops, section-by-section generation, and explicit revision stages.

## Guide Structure

The guide ships as two parts:

- **Part 2A:** Sections 0–5 (The Building Blocks)
- **Part 2B:** Sections 6–10 (The Disciplines in Action)

Draft Part 2A first, through all phases. Then draft Part 2B. This keeps the running example coherent and lets Part 2A's final state inform Part 2B's opening bridge.

## Process Log

Maintain a lightweight process log at `wip_notes/how_ai_works_part2/process-log.md` during drafting. Capture decisions, what worked, what was revised, and where the context packet helped or didn't. This becomes raw material for a future case study guide.

## Drafting Phases

### Phase 1: Section-by-Section Prose Drafts

Draft one section at a time in order. For Part 2A: Sections 0–5. For Part 2B: Sections 6–10.

For each section:

1. Load core context files (`01`, `02`, `03`, `04a`) plus `08` (guardrails) and `04b` (section content specs)
2. Reference the section's entry in `04b-section-content.md` for theory, failure example, interactive spec, and exercise spec; use `04a-section-goals.md` for the key lesson and running example contribution
3. Draft the section prose: failure example → theory → bridge to interactive → bridge to exercise → key lesson
4. Write interactive module content (the scenarios, items, and reveal text) as structured data, not as implemented JS
5. Write the practical exercise with the running example application
6. Save the draft to `wip_notes/how_ai_works_part2/drafts/section-NN.md`

**Output per section:** A markdown file containing the full section prose, interactive module content specification, exercise content, and key lesson.

### Phase 2: Voice and Coherence Review

After all 11 section drafts exist:

1. Load `03-voice-tone-style.md`, `04a-section-goals.md`, and the full set of section drafts
2. Review each section for voice consistency against the style guide
3. Check that the running example advances coherently across sections (use `04a` key lessons and running example contributions as the reference)
4. Check that Kitchen Inspection sidebars are placed at natural transition points (target 2–3 total)
5. Check that metaphor usage is consistent (same kitchen terms for same concepts throughout)
6. Flag any section where the theory feels disconnected from the running example

**Output:** Revision notes per section, or direct edits to section drafts.

### Phase 3: Interactive and Visual Specification

After prose is stable:

1. Load `05-interactive-and-visual-plan.md`
2. For each interactive module, write the full content specification: all scenarios, items, labels, reveal text, and scoring logic
3. Identify which static visuals are needed and where they go
4. Write placeholder HTML markup for interactive modules (semantic structure, not yet functional)

**Output:** Interactive content specs and placeholder markup ready for JS implementation.

### Phase 4: HTML Assembly

After prose and interactive specs are stable:

1. Assemble as an HTML file following the site's guide template (one file per part)
2. Port section prose from markdown to HTML
3. Insert interactive module placeholder markup
4. Add guide-specific CSS
5. Add guide metadata (title, description, category, updated date, OG image)
6. Register in `guides/guides.json` with `status: "wip"`
7. For Part 2B: include the bridge recap paragraphs at the top of Section 6

**Output:** A working HTML page per part, with all prose, placeholder interactives, and proper theming.

### Phase 5: Interactive Implementation

After the HTML structure is stable:

1. Implement interactive modules in vanilla JS
2. Test in both light and dark themes
3. Test keyboard accessibility
4. Test graceful degradation (content readable with JS disabled)

**Output:** Fully functional interactive guide.

### Phase 6: QA and Polish

Run the full quality checklist from `07-quality-bar.md`.

## Session Management

### Starting a Drafting Session

**Before loading context — check `10-open-questions.md` first.** Scan the Mid-Project File Changes log for any updates to stable context files since your last session. If a file was changed, re-read it before relying on a cached version.

Load these files as context at the start of any drafting session:

- `01-project-brief.md` (always)
- `02-thesis-and-framework.md` (always — canonical definitions live here)
- `03-voice-tone-style.md` (always)
- `04a-section-goals.md` (always — section purposes, key lessons, running example arc)
- `08-terminology-and-guardrails.md` (always)

Add these when relevant:

- `04b-section-content.md` (when drafting a specific section — theory, failure examples, interactive and exercise specs)
- `05-interactive-and-visual-plan.md` (when drafting interactive specs in Phase 3)
- `06-drafting-workflow.md` (when planning work)
- `07-quality-bar.md` (when reviewing)
- `09-source-context.md` (when checking what to draw from or avoid)

### Within a Session

- Draft one section at a time. Do not draft multiple sections in one prompt.
- After each section draft, do a quick self-check against the section goals in `04`.
- If a section feels weak, revise it before moving to the next section.
- Save intermediate drafts to disk frequently.

### Vocabulary Layering

The guide introduces two vocabulary systems at different levels: the **four disciplines** (Section 1) and the **building blocks** (Sections 2–5). These overlap but are not interchangeable. During drafting, follow these rules:

- **Before Section 1 introduces the disciplines:** Use descriptive language for hidden work ("the human provided context," "the human defined what done looks like"). Do not use the formal discipline names (prompt craft, context design, intent framing, spec writing) until Section 1.
- **Before Sections 2–5 introduce the building blocks:** Do not use building-block terms (complete order, plating standards, house rules, station assignments, tasting system) as formal categories in earlier sections. Section 0 can describe these functions — it should not name them as the framework.
- **When bridging between levels:** If a section references a concept from a different level (e.g., Section 1 mentions constraints, which are a building block from Section 3), add a short bridge sentence placing it in the current section's vocabulary. Do not assume the reader will map between levels on their own.
- **The interactive module for any section must use the same vocabulary level as that section's theory.** If the interactive needs finer granularity, explicitly bridge between the interactive's labels and the theory's terms.

### Internal Consistency Self-Check

After drafting each section, verify:

- **Count alignment:** If the prose says "six things" or "four disciplines," the subsequent list, table, or interactive must use the same count. If a summary and a detailed breakdown have different granularity, state this explicitly.
- **Label alignment:** Field names, category labels, and term definitions must match across the prose, the summary table, and the interactive content within the same section. Do not introduce synonyms or alternate labels without bridging them.
- **Key lesson alignment:** The key lesson must reflect the current section's claim as stated in `04a-section-goals.md`. If the drafted key lesson points toward a different section's territory, it has drifted — revise it to capture this section's core insight, not an adjacent one.
- **Cross-framework bridge:** If this section introduces a new model (a set of fields, categories, or concepts), verify that the draft includes at least one explicit paragraph connecting it to the previous section's model. The reader should feel continuity — one system getting sharper — not accumulation of separate lists. See the "Framework continuity" teaching principle in `03`.

### Between Sessions

- Each session should start by reading the most recent drafts to re-establish continuity.
- If prose has been revised since the last session, re-read the relevant sections before continuing.

## Revision Passes

### Pass 1: Structural Review

After all sections are drafted, check:

- Does each section follow the pattern: failure example → theory → interactive → exercise → key lesson?
- Does the running example advance coherently?
- Are the Kitchen Inspection sidebars well-placed?
- Is the four-discipline framework consistently referenced?

### Pass 2: Voice Review

Check each section against `03-voice-tone-style.md`:

- Does it sound like the published guides?
- Is the tone conversational and direct?
- Are there any corporate-speak or AI hype phrases?
- Are sentences varied in length?
- Are paragraphs short enough?

### Pass 3: Technical Accuracy Review

Check claims and concepts against `08-terminology-and-guardrails.md`:

- Are the four disciplines described consistently?
- Are metaphor mappings stable?
- Are any claims made that can't be supported?
- Are any terms used loosely that should be precise?

### Pass 4: Instructional Design Review

Check the learning experience:

- Does each interactive module produce an insight the prose alone cannot?
- Does each exercise apply the concept to the running example?
- Is the cumulative artifact (the spec) building logically?
- Are the key lessons distinct and memorable?

### Pass 5: Completeness Check

Before HTML assembly:

- All 11 sections drafted
- All interactive module content specified
- All Kitchen Inspection sidebars written
- Running example components complete
- Key lessons written for all sections

## File Organization

```
wip_notes/how_ai_works_part2/
├── context-packet/          ← This packet
│   ├── README.md
│   ├── 01-project-brief.md
│   ├── 02-thesis-and-framework.md
│   ├── 03-voice-tone-style.md
│   ├── 04a-section-goals.md      ← Always load (orientation layer)
│   ├── 04b-section-content.md    ← Load when drafting sections
│   ├── 05-interactive-and-visual-plan.md
│   ├── 06-drafting-workflow.md
│   ├── 07-quality-bar.md
│   ├── 08-terminology-and-guardrails.md
│   ├── 09-source-context.md
│   └── 10-open-questions.md
├── drafts/                  ← Section drafts (created during Phase 1)
│   ├── part-2a/
│   │   ├── section-00.md
│   │   ├── section-01.md
│   │   ├── ...
│   │   └── section-05.md
│   └── part-2b/
│       ├── section-06-bridge.md
│       ├── section-06.md
│       ├── ...
│       └── section-10.md
├── process-log.md                       ← Process notes for future case study
├── how-ai-works-part2-outline-v2.md     ← Source outline
├── how-ai-works-part2-theory-outline.md ← Earlier theory outline
├── Advanced Prompting.md                ← Reference material
└── Prompt Kit.md                        ← Reference material
```

**RECOMMENDATION:** Create the `drafts/part-2a/` and `drafts/part-2b/` directories before starting Phase 1. Each section gets its own file. The bridge for Part 2B gets its own file (`section-06-bridge.md`).
