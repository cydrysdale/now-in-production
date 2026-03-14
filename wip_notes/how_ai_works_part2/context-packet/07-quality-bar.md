# Quality Bar and Checklist

## Definition of Done

The guide is done when:

- All 11 sections are drafted, reviewed, and assembled into a single HTML page
- Each section follows the pattern: failure example → theory → interactive → exercise → key lesson
- The running example (competitive landscape brief) threads coherently through every section
- The reader's cumulative artifact (the spec) is complete and usable by Section 10
- All interactive modules are specified (content and interaction) and implemented (JS)
- The guide works in both light and dark themes
- The guide is accessible (keyboard navigation, ARIA labels, skip links)
- The guide is registered in `guides/guides.json`
- The guide can stand alone while being strongest paired with Part 1

## Prose Quality Checklist

### Voice

- [ ] Reads like a knowledgeable colleague, not a textbook or marketing deck
- [ ] Uses direct address ("you") and short paragraphs
- [ ] No corporate-speak, AI hype, or motivational filler
- [ ] Humor is observational, not forced
- [ ] Contractions used naturally
- [ ] Sentence length varies — no monotonous rhythm

### Structure

- [ ] Each section opens with a recognizable failure example
- [ ] Theory is introduced before tactics in every section
- [ ] Kitchen metaphor enhances concepts without competing with them
- [ ] Key lesson for each section is one clear sentence
- [ ] Kitchen Inspection sidebars appear 2–3 times at natural transitions

### Coherence

- [ ] The four disciplines are defined consistently throughout
- [ ] Kitchen vocabulary is stable (same term for same concept, every time)
- [ ] The running example advances logically — no section skips it
- [ ] Cross-references to Part 1 are by reference, not reteaching
- [ ] No section contradicts another section's claims

### Specificity

- [ ] Marketing examples throughout — no developer-centric framing
- [ ] Abstract concepts grounded in recognizable marketing scenarios
- [ ] Failure examples feel like things the reader has experienced
- [ ] Exercises produce concrete artifacts, not vague reflections

## Interactive Module Quality Checklist

- [ ] Every section has one interactive module
- [ ] Each module produces an insight that prose alone cannot
- [ ] Interaction mechanics are reused (not a new pattern each time)
- [ ] Content degrades gracefully (readable if JS fails)
- [ ] Works in both light and dark themes
- [ ] Keyboard accessible
- [ ] Scoring/feedback is clear and immediate
- [ ] Reveal text adds value beyond "you got X right"

## Running Example Quality Checklist

- [ ] The competitive landscape brief is introduced clearly in Section 0
- [ ] Each section's exercise applies the new concept to this brief
- [ ] Components build cumulatively: Section 2's output feeds Section 3, etc.
- [ ] By Section 8, the full recipe card template is populated
- [ ] Section 10's exercise is a review, not a new build
- [ ] The finished spec would actually be usable for real work

## Instructional Design Checklist

- [ ] Theory sections are grounded in the problem they solve, not in technical pedigree
- [ ] Adjacent concepts are cleanly separated (plating standards ≠ house rules, context design ≠ spec writing)
- [ ] "Prompting" is treated as one of four disciplines, not as a synonym for all of them
- [ ] Named tools (Claude, ChatGPT, etc.) appear only in examples/sidebars, not in core theory
- [ ] The guide teaches diagnosis, not just construction (reader learns to identify *which* layer broke)

## Technical Quality Checklist

- [ ] Valid HTML, no rendering issues
- [ ] Shared CSS (`style.css`) loaded correctly
- [ ] Shared JS (`core.js`) loaded correctly
- [ ] Guide-specific CSS does not break shared styles
- [ ] Guide-specific JS does not conflict with shared JS
- [ ] Theme toggle works correctly
- [ ] TOC auto-generates from section H2s
- [ ] Metadata (title, description, category, date, OG image) is complete
- [ ] Registered in `guides/guides.json` with correct status

## Review Protocol

### Self-Review (after each section draft)

Quick check against:
- Does it follow the section pattern?
- Does the voice match `03-voice-tone-style.md`?
- Does the running example advance?
- Is the key lesson clear and distinct?

### Full Review (after all sections drafted)

Run the complete prose, interactive, running example, and instructional design checklists.

### Final Review (after HTML assembly)

Run the technical checklist plus a full read-through for flow and pacing.

## Eval Rubric (Lightweight)

Score each section 1–5 on:

| Dimension | 5 | 3 | 1 |
|---|---|---|---|
| **Voice consistency** | Sounds exactly like the published guides | Mostly right, a few off-voice moments | Reads like a different author |
| **Concept clarity** | Reader would understand without the exercise | Mostly clear, some muddled passages | Concept is lost in the explanation |
| **Running example integration** | Advances the spec naturally | Connected but feels forced | Missing or disconnected |
| **Interactive value** | Produces genuine insight | Reinforces but doesn't add | Could be skipped without loss |
| **Key lesson strength** | Memorable and precise | Correct but generic | Vague or redundant |
