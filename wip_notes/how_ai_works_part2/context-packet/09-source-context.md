# Source Context

## Source Materials

### Primary Source: Outline v2

**File:** `wip_notes/how_ai_works_part2/how-ai-works-part2-outline-v2.md`

This is the authoritative outline. It contains:

- Working position and core thesis
- Guide goals and structural principles
- Full kitchen metaphor vocabulary
- The running example specification
- Detailed section-by-section content plans (Sections 0–10)
- Interactive module specifications for every section
- Practical exercise specifications for every section
- Writing constraints
- Potential split point analysis

**How to use:** This is the primary reference for what each section should contain. When drafting a section, consult this outline's entry for that section.

### Secondary Source: Theory Outline

**File:** `wip_notes/how_ai_works_part2/how-ai-works-part2-theory-outline.md`

This is an earlier, more abstract version of the outline. It uses different terminology ("context engineering" / "intent engineering" / "specification engineering" instead of the kitchen-friendly terms adopted in v2).

**How to use:** Reference for the theoretical underpinnings, especially when the v2 outline's kitchen-metaphor treatment needs grounding in the underlying concept. The theory outline's framework is sound; v2's presentation is preferred.

**Key difference:** The theory outline has 13 sections (0–12) with separate sections for acceptance criteria and constraints. The v2 outline merged these into 11 sections (0–10) and combined plating standards + house rules into one section. V2 is the current structure.

### Reference Material: Advanced Prompting

**File:** `wip_notes/how_ai_works_part2/Advanced Prompting.md`

A transcript from a video that covers the four-discipline framework from a different perspective. Useful for:

- Seeing how the disciplines are explained conversationally
- The "two people on a Tuesday" framing of the gap between 2025 and 2026 prompting skills
- The Shopify/Toby Lütke context engineering reference
- The Klarna intent engineering example
- The concept of primitives that build into specifications

**How to use:** Mine for framing ideas and examples, but do not adopt this source's voice (it's a conversational video transcript, not the guide's voice). Do not reproduce its specific claims about model versions, dates, or company examples without verification.

**Caution:** This source includes specific model version names (Opus 4.6, Gemini 3.1 Pro, GPT 5.3 Codex) and date-specific claims. The guide should be model-agnostic and avoid date-stamped claims.

### Reference Material: Prompt Kit

**File:** `wip_notes/how_ai_works_part2/Prompt Kit.md`

A practical prompt kit that turns the four-discipline framework into artifacts. Useful for:

- The "Human Prompt" (Prompt 0) concept — thinking before prompting
- The seven pre-delegation questions
- Framing contamination as a concept
- The idea that pen-and-paper clarity prevents AI's fluency from overriding human thinking

**How to use:** The pre-service meeting section (Section 9) draws heavily from this source. The seven questions are a richer version of the four pre-service questions in the outline. Adapt the concept; do not copy the prose.

### Published Guide: Part 1

**File:** `guides/how-llms-work.html`

The published Part 1 guide. Useful for:

- Voice and tone reference (the gold standard for how this guide should sound)
- Kitchen metaphor conventions already established
- Interactive module patterns and CSS/JS conventions
- What the audience has already learned (do not reteach)

**How to use:** Voice reference for `03-voice-tone-style.md`. Technical reference for HTML structure, CSS classes, and JS patterns. Content reference for what Part 2 can assume as prior knowledge.

## What Part 1 Already Taught (Do Not Reteach)

- How LLMs generate text (next-token prediction)
- Tokens and tokenization
- Context windows and their limits
- Attention mechanisms
- Temperature and sampling
- Hallucinations and why they happen
- Basic prompt structure (role, goal, context, constraints, format, quality bar)
- Iterative prompting (draft → critique → revise)
- The concept of staged workflows (multi-step over single-shot)
- The expo check (verification before using output)
- Tools and retrieval as extensions of LLM capability

Part 2 should reference these as established concepts. Use phrases like:

- "Part 1 covered why context is limited and drift-prone. Part 2 extends that..."
- "You already know how to write a clear order ticket from Part 1. Part 2 asks: what happens when the kitchen gets busy?"

## What Part 2 Introduces (New Concepts)

- The four-discipline framework
- The distinction between conversational prompting and delegated execution
- Self-contained problem statements as a primitive
- Observer-verifiable acceptance criteria
- Constraint architecture (Must Do / Must Not Do / Prefer / Escalate)
- Decomposition with explicit handoffs
- Evaluation design as a system, not a one-time check
- Context design as curation, not accumulation
- Intent framing as encoded judgment
- Specification as an executable contract
- Pre-AI clarification and framing contamination
- The concept that spec quality reflects thinking quality

## Source-of-Truth Hierarchy

When sources conflict:

1. **Outline v2** (authoritative for structure, content, and section goals)
2. **This context packet** (authoritative for voice, workflow, and quality standards)
3. **Theory outline** (reference for underlying concepts)
4. **Part 1 published guide** (authoritative for voice and prior knowledge)
5. **Advanced Prompting / Prompt Kit** (reference material only — ideas to adapt, not prose to adopt)

## What Not to Draw From

- Do not adopt the video transcript's conversational voice (too informal, too repetitive)
- Do not use specific model version names from the Advanced Prompting transcript
- Do not use company-specific examples from the transcript (Klarna, Shopify) as core theory examples — they can appear as sidebars if adapted carefully
- Do not reteach Part 1 concepts
- Do not use the theory outline's "engineering" terminology (context engineering, intent engineering, specification engineering) in the guide — the kitchen-friendly terms from v2 are preferred for the audience
