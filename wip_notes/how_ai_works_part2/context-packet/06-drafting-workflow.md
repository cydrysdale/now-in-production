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

1. Load core context files (`01` through `04`) plus `08` (guardrails)
2. Reference the section's entry in `04-section-structure.md` for goals, failure example, interactive spec, exercise spec, and key lesson
3. Draft the section prose: failure example → theory → bridge to interactive → bridge to exercise → key lesson
4. Write interactive module content (the scenarios, items, and reveal text) as structured data, not as implemented JS
5. Write the practical exercise with the running example application
6. Save the draft to `wip_notes/how_ai_works_part2/drafts/section-NN.md`

**Output per section:** A markdown file containing the full section prose, interactive module content specification, exercise content, and key lesson.

### Phase 2: Voice and Coherence Review

After all 11 section drafts exist:

1. Load `03-voice-tone-style.md` and the full set of section drafts
2. Review each section for voice consistency against the style guide
3. Check that the running example advances coherently across sections
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

Load these files as context at the start of any drafting session:

- `01-project-brief.md` (always)
- `02-thesis-and-framework.md` (always)
- `03-voice-tone-style.md` (always)
- `04-section-structure.md` (always for section drafting; reference specific section for focused work)
- `08-terminology-and-guardrails.md` (always)

Add these when relevant:

- `05-interactive-and-visual-plan.md` (when drafting interactive specs)
- `06-drafting-workflow.md` (when planning work)
- `07-quality-bar.md` (when reviewing)
- `09-source-context.md` (when checking what to draw from or avoid)

### Within a Session

- Draft one section at a time. Do not draft multiple sections in one prompt.
- After each section draft, do a quick self-check against the section goals in `04`.
- If a section feels weak, revise it before moving to the next section.
- Save intermediate drafts to disk frequently.

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
│   ├── ...
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
