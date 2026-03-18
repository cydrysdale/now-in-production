# Terminology and Guardrails

## Terms to Use Precisely

These terms have specific meanings in this guide. Use them consistently and do not interchange them.

**Canonical definitions live in `02-thesis-and-framework.md`** — the four disciplines, the building blocks, and the full kitchen vocabulary table. If a definition here and a definition in `02` ever conflict, `02` is authoritative. Update both files if a definition changes.

The guardrail below is what this file owns: how to use the terms correctly, and what to avoid confusing them with.

### The Four Disciplines — Usage Guardrails

| Term | Do Not Confuse With |
|---|---|
| **Prompt craft** | "Prompting" (which is the umbrella term for all four) |
| **Context design** | Just "loading files" or "giving it more info" |
| **Intent framing** | Brand voice, mission statements, or tone guidance |
| **Spec writing** | "A long prompt" or "detailed instructions" |

### The Building Blocks — Usage Guardrails

| Term | Do Not Confuse With |
|---|---|
| **Plating standards** | House rules — plating standards define done; house rules prevent failure modes |
| **House rules** | Plating standards — these are standing constraints, not quality checks |
| **Station assignments** | A simple task list — stations have explicit inputs, outputs, and handoffs |
| **Tasting system** | A one-time review — it is a reusable evaluation method, not a final check |

### Key Concepts

| Term | Meaning |
|---|---|
| **The 80% problem** | Output that is almost right but not quite — fluent, plausible, and structurally wrong in ways that make the rework harder than starting from scratch. This is the core failure mode the guide exists to solve. It is almost always a structural problem (missing acceptance criteria, absent constraints, vague intent), not a prompting problem. |
| **Quality vs. regression** | Two distinct evaluation questions. **Quality:** "Is this output good?" — assessed against plating standards and house rules for a single instance. **Regression:** "Is this output as good as last month's?" — assessed by comparing current output to a known baseline over time. Quality checks catch bad plates. Regression checks catch a kitchen that's slowly getting worse. The tasting system must address both. |

### Kitchen Vocabulary — Consistency Rules

Use these kitchen terms consistently as metaphor anchors:

| Kitchen Term | Maps To | Do Not Use Interchangeably With |
|---|---|---|
| Order ticket | Prompt | Recipe card |
| Mise en place | Context | The prep counter (Part 1 term — simpler level) |
| House philosophy | Intent framing | House rules (different concept) |
| Recipe card | Specification | Order ticket (different level) |
| The line | Station assignments / decomposition | — |
| The pass | Where output is checked before serving | — |
| 86'd | Removed, no longer available | — |
| The brigade | The team (human + AI working together) | — |

## Terms to Avoid

| Avoid | Why | Use Instead |
|---|---|---|
| "AI hallucination" as main framing | Part 1 covered this; Part 2 should frame failures as structural, not model-level | "The output was wrong because [structural reason]" |
| "Prompt engineering" | Too narrow; this guide's thesis is that prompting is one of four disciplines | "Prompt craft" (for the specific skill) or "the four disciplines" (for the full framework) |
| "Best practices" | Vague and corporate | Name the specific practice |
| "Leverage" | Corporate-speak | "Use" |
| "Unlock" / "Empower" / "Transform" | AI hype language | State the concrete outcome |
| "Game-changer" / "Revolutionary" | Hype | Don't make this claim at all |
| "In today's rapidly evolving landscape" | Filler | Cut entirely |
| "Agentic" (in reader-facing prose) | Too technical for the audience | "Delegated" or "longer-running" or "less supervised" |

## Claims to Be Careful With

### Safe Claims (supported by the guide's framework)

- Most AI failures at the delegated-work level are structural, not intelligence failures
- The human quietly provides context, judgment, decomposition, and quality control in conversational prompting
- Specification quality reflects thinking quality
- Better AI use is often better task design
- These skills transfer to human collaboration (a good spec works for AI or a human)

### Claims That Need Grounding (don't state without connecting to the running example)

- "Prompting is only 20% of the control structure" — Use the interactive module reveal to support this, not as a standalone statistic
- "A spec is not a long prompt" — Must explain why, not just assert it
- "Intent framing is not brand voice" — Must provide the counter-example

### Claims to Avoid

- Do not claim these four disciplines are the only framework or the definitive taxonomy
- Do not claim AI is unsuitable for any specific task category
- Do not claim that good specifications eliminate the need for human review
- Do not make specific claims about model capabilities (context window sizes, benchmarks, model comparisons)
- Do not claim that the kitchen metaphor maps perfectly to every situation — it's a teaching tool, not a theory
- Do not speculate about future AI capabilities or timelines

## Illustrative Framing

Examples, failure scenarios, and interactive content often require specific details (company names, numbers, competitive facts) to feel concrete. These details must be clearly framed as teaching devices, not factual claims.

### Numbers and Percentages

When the draft uses a number to make a conceptual point (e.g., "the prompt was ~20% of the control structure"), frame it as approximate and schematic — not measured. Prefer language like "roughly," "about," or "think of this as" over precise-sounding fractions. In interactive progress meters or visual devices, frame the mechanic as illustrative: "Treat the meter as a teaching device, not a literal audit."

### Fictional Details in Examples

Failure scenarios and interactive content may introduce fictional companies, products, or competitive facts to make the scenario concrete. These details should be:

- **Clearly disposable** unless explicitly marked as canonical for the running example
- **Free of faux-specific numbers** (avoid "47 connectors" or "launched four new integrations" unless the detail serves a purpose beyond color)
- **Consistent within a section** but not assumed to carry across sections unless documented

If fictional details are intended to persist as part of the running example (e.g., named competitors that recur throughout Part 2A), document that decision in `10-open-questions.md` and treat them as canonical. If not, keep them generic enough that they don't accidentally become canon.

## Hallucination-Prone Areas

These are areas where AI drafting is most likely to produce confident-but-wrong content. Flag for manual review:

### Specific Statistics or Numbers

If the draft includes any specific statistic (percentage, count, dollar amount), it must come from the source materials or be clearly framed as illustrative. Do not invent statistics.

### Claims About How AI Models Work

Part 1 covered the technical foundations. Part 2 should reference those, not restate or extend them. Any claim about model internals (attention, token prediction, context windows) should match Part 1's treatment or be marked for review.

### Marketing Industry Claims

The guide uses marketing examples. Any claim about how marketing teams work ("most marketing teams do X") should be framed as illustrative, not empirical. Use "a marketing team" not "marketing teams typically."

### Tool-Specific Claims

The guide avoids naming specific tools in core theory. If a tool is referenced in a sidebar or example, do not make claims about its specific capabilities that could become outdated.

### Attribution

The "Advanced Prompting" and "Prompt Kit" source materials include ideas from specific people (Toby Lütke / Shopify, Harrison Chase / LangChain). The guide should not attribute these ideas unless the attribution is accurate and adds value. When in doubt, present the idea on its own merits.

**RECOMMENDATION:** Run a hallucination check after each section draft. Specifically: flag any sentence that makes a factual claim not present in the source materials or the guide's own framework.

## Escalation Rules

These are decisions the drafter should **not** make autonomously. Stop, flag the issue in `10-open-questions.md`, and continue with other sections rather than resolving it without review.

### Escalate when the kitchen metaphor can't carry the concept cleanly

If mapping a concept to its kitchen equivalent requires more explanation than the concept itself, do not force the mapping. Flag it. The rule in `03` is "cut it" — but if the concept still needs a metaphor to land, that is a structural question, not a drafting call.

### Escalate when the running example doesn't fit a section without inventing context

The competitive landscape brief should thread through every section without requiring new background detail that hasn't been established. If a section's exercise or interactive only works by adding invented context about the brief, flag it. Do not invent new facts about the running task.

### Escalate when two source files conflict structurally

Terminology conflicts are resolved by the source-of-truth hierarchy in `09`. But if the outline v2 and this packet disagree on a section's purpose, sequence, or key lesson — not just vocabulary — that is not a drafter's call. Flag it and note which files conflict and on what point.

### Escalate when a section's key lesson duplicates another section's

Each key lesson should be distinct and not restatable as a variant of another section's lesson. If drafting produces a key lesson that overlaps substantially with an existing one, flag it rather than choosing arbitrarily which section "owns" the insight.

### Escalate when a claim requires verification the drafter cannot perform

Any sentence that makes a factual claim not present in the source materials — a statistic, a company example, a claim about how marketing teams work — should be flagged rather than silently softened or invented. See the Hallucination-Prone Areas section for specific categories.

---

## Writing Constraints

- Use theory language precisely but accessibly — define each concept by the problem it solves
- Marketing-first examples throughout; avoid software engineering or developer-centric framing
- Kitchen metaphor should enhance, not replace, the concept
- Separate adjacent concepts cleanly — the reader should never confuse plating standards with house rules, or context design with spec writing
- Avoid collapsing everything into "better prompting" — the guide's thesis is that prompting is one of four disciplines
- Avoid tactical sprawl until the practical application block of each section
- Named tools may appear in examples and sidebars but not in the core theory
