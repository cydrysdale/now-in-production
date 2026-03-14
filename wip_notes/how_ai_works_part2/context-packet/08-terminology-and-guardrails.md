# Terminology and Guardrails

## Terms to Use Precisely

These terms have specific meanings in this guide. Use them consistently and do not interchange them.

### The Four Disciplines

| Term | Meaning | Do Not Confuse With |
|---|---|---|
| **Prompt craft** | The local skill of phrasing a task clearly in a specific interaction | "Prompting" (which is the umbrella term for all four) |
| **Context design** | The design of the information environment in which the task runs | Just "loading files" or "giving it more info" |
| **Intent framing** | Encoding goals, values, tradeoffs, and decision boundaries | Brand voice, mission statements, or tone guidance |
| **Spec writing** | Writing a complete, executable description of what to produce, how to judge it, and how to stage it | "A long prompt" or "detailed instructions" |

### The Building Blocks

| Term | Meaning |
|---|---|
| **Complete order** | A self-contained task definition with enough operational detail to execute without follow-up |
| **Plating standards** | Observer-verifiable acceptance criteria that define "done" |
| **House rules** | Standing constraints organized as Must Do / Must Not Do / Prefer / Escalate |
| **Station assignments** | Task decomposition into verifiable steps with explicit inputs, outputs, and handoffs |
| **Tasting system** | A reusable evaluation method for judging quality over time (not just checking one output) |
| **Pre-service meeting** | Pre-AI clarification — thinking before prompting |

### Key Concepts

| Term | Meaning |
|---|---|
| **The 80% problem** | Output that is almost right but not quite — fluent, plausible, and structurally wrong in ways that make the rework harder than starting from scratch. This is the core failure mode the guide exists to solve. It is almost always a structural problem (missing acceptance criteria, absent constraints, vague intent), not a prompting problem. |
| **Quality vs. regression** | Two distinct evaluation questions. **Quality:** "Is this output good?" — assessed against plating standards and house rules for a single instance. **Regression:** "Is this output as good as last month's?" — assessed by comparing current output to a known baseline over time. Quality checks catch bad plates. Regression checks catch a kitchen that's slowly getting worse. The tasting system must address both. |

### Kitchen Vocabulary

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

## Writing Constraints

- Use theory language precisely but accessibly — define each concept by the problem it solves
- Marketing-first examples throughout; avoid software engineering or developer-centric framing
- Kitchen metaphor should enhance, not replace, the concept
- Separate adjacent concepts cleanly — the reader should never confuse plating standards with house rules, or context design with spec writing
- Avoid collapsing everything into "better prompting" — the guide's thesis is that prompting is one of four disciplines
- Avoid tactical sprawl until the practical application block of each section
- Named tools may appear in examples and sidebars but not in the core theory
