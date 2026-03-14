# Project Brief

## What This Guide Is

"How AI Works Part 2: Running the Kitchen" is the sequel to `guides/how-llms-work.html` (Part 1). It is a long-form, interactive educational guide published as a static HTML page on the Now in Production site.

Part 1 explained machine-level foundations: prediction over tokens, context limits, why prompting matters, why workflows beat one-shot prompting, and why human verification is necessary. Its metaphor was **one cook, one counter, one order ticket**.

Part 2 assumes that foundation and moves up a level. The subject is no longer "how the model works" but "how useful AI work is structured when the task lasts longer than a single back-and-forth."

## The Shift

Part 1: You're the customer ordering from one cook.
Part 2: You're the head chef running a fully staffed kitchen.

The metaphor evolves: you design the menu, write the recipes, set the house rules, and train the brigade. AI is the line — capable, fast, and reliable when the systems around it are well designed. The kitchen only falls apart when the systems do.

## Primary Audience

Marketing professionals who are new to AI tools and need to move beyond chat-style prompting to produce reliable, delegable work.

Examples, exercises, and the running task should reflect marketing work: campaign briefs, competitive analysis, content workflows, and stakeholder communication.

**ASSUMPTION:** The audience has read Part 1 or has equivalent baseline knowledge. The guide should reference Part 1 concepts as prior knowledge, not reteach them.

## Guide Goals

By the end, the reader should be able to:

- Distinguish between conversational prompting and delegated execution
- Understand and apply the four disciplines: prompt craft, context design, intent framing, and spec writing
- Identify which discipline a given failure belongs to
- Define work in a way that survives longer, more autonomous execution
- Use structured checks to reduce the "technically correct but wrong" problem
- Produce a complete, reusable specification for a real recurring marketing task

## What Done Looks Like

Two published HTML guides:

**Part 2A: The Building Blocks** (`guides/how-ai-works-part2a.html`)
- Sections 0–5: bridge from Part 1, the four-discipline framework, complete orders, plating standards & house rules, station assignments, the tasting system
- 6 interactive modules
- Running example builds the first half of the spec (building blocks)
- Ends with a usable intermediate artifact — not a cliffhanger

**Part 2B: The Disciplines in Action** (`guides/how-ai-works-part2b.html`)
- Sections 6–10: context design, intent framing, spec writing, the pre-service meeting, synthesis
- 5 interactive modules
- Opens with a brief recap of 2A's framework and the running example's state
- Running example completes the full specification
- Ends with the diagnostic flowchart and complete recipe card

Both guides:

- Follow the same site architecture as Part 1 (shared CSS, core.js, guide metadata)
- Consistent theory → interactive → exercise structure per section
- Working interactive modules in vanilla JS
- Thread the competitive landscape brief running example
- Registered independently in `guides/guides.json`
- Can stand alone while being strongest read in sequence (Part 1 → 2A → 2B)

## What This Guide Is Not

- Not a prompt library or tip sheet
- Not a tool tutorial (no product-specific walkthroughs)
- Not a rehash of Part 1 concepts
- Not developer-centric (marketing-first throughout)

## Case Study

A separate future guide will use the Part 2 guide-building process as a case study. To support this, a lightweight process log (`wip_notes/how_ai_works_part2/process-log.md`) should capture decisions, workflow observations, and what the context packet did or didn't help with during drafting.

## Connection to Part 1

| Part 1 Concept | Part 2 Extension |
|---|---|
| The order ticket (prompt) | The recipe card (specification) |
| The prep counter (context) | Mise en place (context design as environment curation) |
| The expo check (verification) | The tasting system (evaluation design) |
| One cook, one dish | A full brigade, full service |
| You're the customer | You're the head chef |

## Deliverable Format

- Two HTML files following the site's guide template
- Shared CSS (`../assets/css/style.css`) + guide-specific CSS
- Shared JS (`../assets/js/core.js`) + guide-specific JS for interactive modules
- Registered in `guides/guides.json`
- Required metadata: title, description, category, updated date, OG image

## Project Constraints

- Static site — no build step, no server-side processing
- Interactive modules in vanilla JS (no frameworks)
- Must work in both light and dark themes
- Must be accessible (skip links, ARIA labels, keyboard navigation)
- Guide-specific CSS and JS should be additive, not override shared styles
