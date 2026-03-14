# Voice, Tone, and Style

## Purpose

This file captures the writing voice, tone, and teaching style patterns observed in the published guides. Use it as the voice standard for drafting Part 2.

These patterns were inferred from `guides/how-llms-work.html`, `guides/who-owns-type.html`, and `guides/rgb-to-cmyk-guide.html`. They are not invented — they are extracted from how these guides actually read.

## Voice Character

The guides share a consistent voice:

- **Conversational and direct.** Reads like a knowledgeable colleague explaining something at a whiteboard, not like a textbook or a marketing deck.
- **Confident without being preachy.** States things plainly. Does not hedge excessively, but also does not oversell.
- **Informal register, precise content.** Casual sentence construction paired with technically accurate claims. The tone is approachable; the substance is rigorous.
- **First and second person.** Uses "you" freely. Occasionally uses "we" when walking through something together. Avoids the impersonal passive ("it should be noted that...").
- **Light humor, not forced.** Humor comes from observations and analogies, not from jokes or punchlines. It earns a smile, not a laugh. (Example from Part 1: "You also may have seen it confidently state that there are two Rs in strawberry.")

## Teaching Style

### Theory before tactics

Each section introduces a conceptual model before offering templates or actionable steps. The reader should understand *why* before they see *how*.

### Metaphor as structural scaffold, not decoration

The kitchen metaphor in Part 1 is not a gimmick — it's load-bearing. Each concept maps to a kitchen element, and those mappings persist throughout. The metaphor should clarify the concept, not compete with it.

**Rule:** If a kitchen analogy requires more explanation than the concept itself, cut it.

### Concrete before abstract

Guides lead with specific, recognizable examples before generalizing. The reader sees a scenario they've experienced, then gets the framework that explains it.

**Pattern from Part 1:**
1. Here's something you've probably experienced (failure or confusion)
2. Here's why it happens (the mechanism)
3. Here's how to handle it (the tool or technique)
4. Here's a way to practice (interactive or exercise)

### Failure-first openings

Each section tends to open with a failure: something that went wrong, something that looked right but wasn't, or a common mistake the reader probably recognizes. This creates a "yes, I've seen that" moment before the theory lands.

### Interactive reinforcement

Every major concept gets an interactive element. These are not quizzes — they are exercises that make the concept tactile. The reader does something (sorts, tags, builds, classifies) rather than just reading.

### Cumulative artifacts

Part 2 should have the reader build a single artifact across the guide (the competitive landscape brief spec). Each section adds a component. By the end, they have a complete, usable deliverable.

## Tone Boundaries

### Do

- Sound like someone who has done this work and is sharing what they learned
- Use contractions ("it's", "you're", "don't")
- Use short paragraphs (2–4 sentences typical)
- Use questions to drive thinking ("So what happens when the kitchen gets busy?")
- Use specific, grounded examples over abstract statements
- Use "Kitchen truth:" callouts for key takeaways (matching Part 1's established pattern)

### Do Not

- Do not use corporate-speak ("leverage", "synergize", "unlock potential")
- Do not use AI hype language ("revolutionary", "game-changing", "the future is here")
- Do not use filler phrases ("it's important to note that", "in today's world")
- Do not write in the passive voice when active voice is clearer
- Do not use emoji in running prose
- Do not use numbered lists as a default format — use them only when sequence matters
- Do not write motivational statements ("You've got this!" or "Let's dive in!")
- Do not explain the kitchen metaphor in meta terms ("We're using a kitchen metaphor because...")

## Style Mechanics

### Sentence construction

- Prefer short, declarative sentences for key claims
- Use longer sentences for explanations, but break before they become compound-complex
- Vary sentence length — monotonous rhythm reads as AI-generated

### Paragraphs

- Keep paragraphs short. 2–4 sentences is the target.
- One idea per paragraph. If a paragraph makes two points, it's two paragraphs.

### Section structure

Each section follows this pattern:

1. **Failure example** — opens the section, creates recognition
2. **Theory** — the conceptual model, grounded in the kitchen metaphor
3. **Interactive module** — exercises the concept actively
4. **Practical application** — applies the concept to the running example
5. **Key lesson** — one sentence that captures the section's core insight

### Headers

- H2 for major sections (the 11 numbered sections)
- H3 for subsections within a section
- Headers should be descriptive and specific, not clever or vague
- Use the kitchen metaphor in headers where natural ("Mise en Place: Context Design", "The Pre-Service Meeting")

### Emphasis

- Use **bold** for terms being defined or key phrases
- Use *italics* sparingly for emphasis within a sentence
- Do not bold entire sentences or paragraphs
- Code-style formatting for templates and structured artifacts

### Callout patterns (from Part 1)

- **"Kitchen truth:"** — Key takeaway callouts, styled with the `.truth` class
- **"Kitchen inspection:"** — Short diagnostic scenarios between sections (new for Part 2)
- **Chance/Chest cards** — Expandable detail blocks (the Monopoly-styled `<details>` elements)
- **Sandbox cards** — Interactive widget containers

## What "Good" Sounds Like

Here are representative passages from Part 1 that capture the target voice:

> "An LLM does not 'know' facts the way a person does. It predicts the next word based on patterns from training plus whatever is currently on the prep counter (your context)."

> "Your prompt is the order ticket, and it controls far more than most people expect. A vague ticket gets generic output. A specific ticket with goal, audience, constraints, format, and source material gives the model rails to run on."

> "Great output is rarely one lucky prompt. It is clear instructions, grounded context, and one or two disciplined revisions."

> "A hallucination is not the model 'lying.' It is usually the model completing a pattern when it lacks solid grounding."

These show: direct address, concrete metaphor, short sentences for key claims, no hedging, no hype.

## What "Wrong" Sounds Like

Avoid these patterns:

- **AI fluff:** "In today's rapidly evolving AI landscape, it's more important than ever to understand how to effectively leverage these powerful tools."
- **Over-hedging:** "It might be helpful to consider the possibility that perhaps the context could potentially be contributing to the issue."
- **Motivation speak:** "Now that you've mastered this concept, you're ready to take your AI game to the next level!"
- **Meta-commentary:** "This section will teach you about context design. Context design is important because..."
- **Generic education tone:** "Let's explore this topic together and discover what makes it so fascinating."

## Adapting for Part 2

Part 2 covers more abstract concepts than Part 1 (intent framing, spec writing). The voice should stay grounded by:

- Always connecting abstract concepts to the marketing-scenario running example
- Always providing the kitchen metaphor version alongside the concept
- Always grounding theory in recognizable failures before frameworks
- Keeping the "working colleague" tone even when the material is more conceptual
