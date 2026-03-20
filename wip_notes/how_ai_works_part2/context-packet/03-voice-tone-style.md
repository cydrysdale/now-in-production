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

### Framework continuity over framework accumulation

Each section introduces a new conceptual model (the hidden jobs, the four disciplines, the complete-order fields, etc.). The reader should experience these as nested layers of one system getting sharper, not as a series of separate lists to memorize.

**Rule:** Every section that introduces a new framework must include at least one explicit paragraph connecting it to the previous section's framework. Show how the new model relates to, refines, or builds on what the reader just learned — not just what it adds.

The reader leaving Section 2 should understand: "The complete order is the first building block that makes the disciplines from Section 1 practical, which in turn organizes the hidden work I saw in Section 0." If the sections feel like three independent lessons, the connective tissue is missing.

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

### Sentence-level craft

Structural compliance is not the same as good writing. A draft that follows every vocabulary rule and section pattern can still be flat if every sentence is built the same way and no phrase is worth remembering.

Watch for:

- Three or more consecutive sentences with the same structure (she did X, she did Y, she did Z)
- Descriptions that name the function without showing it ("she provided context" vs. "she loaded the counter with last quarter's win/loss data")
- Theory blocks where no single line would work as a pull quote
- Closers that explain the point rather than landing it

The Part 1 voice achieves clarity *through* vivid, concrete phrasing, not by stripping it away. Compare: "the pantry is empty, the house rules are missing, and nobody defined what a good plate looks like" vs. "the setup was incomplete." Both are accurate. Only one sticks.

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
- **Flat explainer:** "She provided information the AI didn't have. She defined what the finished product looks like. She set rules that prevent specific failures. She broke the work into steps." (Each sentence is accurate. The problem is the pattern: identical structure, no concrete image, no kitchen language, nothing the reader would recall. One plain sentence is fine — four in a row with the same subject-verb-abstraction cadence reads like a bullet-point summary, not a guide. When kitchen language drops out of the prose entirely and nothing replaces it, the voice flattens with it.)

## Hard Tradeoffs

When two valid values conflict during drafting, these rules resolve the call. They are not preferences — they are the tiebreakers.

**Concept clarity beats kitchen metaphor elegance.**
If the kitchen mapping doesn't clarify the concept, cut the metaphor or simplify it. Never preserve a metaphor at the cost of the reader understanding the concept. (This rule already exists in `03` — it is restated here to sit alongside the others.)

**Kitchen language that fits naturally is register, not decoration.**
The rule above prevents forced metaphor — a kitchen mapping that obscures the concept should be cut. This rule prevents the opposite error: stripping kitchen language from descriptions where it fits naturally, producing prose that's accurate but tonally dead. If the kitchen version of a phrase is as clear as the generic version, use the kitchen version. "She stocked the counter with competitive data" is not less clear than "she provided information the AI didn't have" — it's *more* clear, because it carries a visual and connects to the guide's world. Generic phrasing is a fallback for when no natural kitchen description exists, not a default.

**Running example coherence beats individual section polish.**
If a section's exercise would work better with a different task than the competitive brief, don't switch. The cumulative artifact only works if the example is consistent. Adapt the exercise to fit the brief; don't adapt the brief to fit the exercise.

**The guide's voice beats the source material's voice.**
The Advanced Prompting source is a video transcript — conversational, informal, occasionally hyperbolic. If a framing from that source feels sharper than the guide's version, adapt it; don't lift it. The guide's voice is the standard, not the source.

**Brevity of key lessons beats completeness.**
Each key lesson is one sentence. If the insight needs two sentences, it is either two insights (split it across sections) or one insight that hasn't been sharpened yet (keep working). A key lesson that requires a follow-up clause wasn't finished.

**Accessible explanation beats technical precision.**
When explaining a concept, use the simpler formulation if it is accurate enough for the audience. Marketing professionals don't need the full technical frame — they need enough precision to apply the concept correctly. Reserve technical precision for the guardrails in `08`.

**The section pattern beats variation for its own sake.**
Every section follows: failure example → theory → interactive → exercise → key lesson. Do not vary this structure because a particular section "feels" like it should open differently. Consistency is the feature. If a section genuinely can't open with a recognizable failure, that is a structural problem to escalate, not a reason to break the pattern.

---

## Adapting for Part 2

Part 2 covers more abstract concepts than Part 1 (intent framing, spec writing). The voice should stay grounded by:

- Always connecting abstract concepts to the marketing-scenario running example
- Always providing the kitchen metaphor version alongside the concept
- Always grounding theory in recognizable failures before frameworks
- Keeping the "working colleague" tone even when the material is more conceptual
