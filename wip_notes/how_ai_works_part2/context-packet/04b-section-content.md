# Section Content Specifications

> **Load this file when actively drafting or reviewing a specific section.** It contains the theory summaries, failure example openers, interactive module descriptions, and exercise specs for each section. For the orientation layer (section purposes, key lessons, running example arc), see `04a-section-goals.md`.

---

# PART 2A: THE BUILDING BLOCKS (Sections 0–5)

---

## Section 0: From One Cook to a Full Kitchen

**Theory:** Conversational prompting assumes the human is present, inspecting, correcting, and answering. Those four hidden functions (context, judgment, decomposition, quality control) must be externalized once work extends beyond tight supervision.

**Failure example opener:** Marketing manager's "draft a competitive analysis" succeeds over six chat turns — but only because the human kept intervening. Remove the human and the same prompt fails.

**Interactive module:** "The Hidden Brigade" — A simulated six-turn chat transcript. The reader tags what the human contributed at each turn (ticket writing, stocking the counter, setting plating standards, posting house rules, calling the station, catching a bad plate). Reveal: the "prompt" was ~20% of the control structure.

**Practical exercise:** Collapse a Chat Into a Brief — Reader lists human interventions from a multi-turn chat, sorts them by type, then compresses them into a single starting brief.

---

## Section 1: The Four Disciplines

**Theory:** The four disciplines (prompt craft, context design, intent framing, spec writing) and how they stack. The bridge from disciplines to building blocks.

**Failure example opener:** Content lead's well-written newsletter prompt produces fluent, well-structured output that's completely wrong — stale product feature, conflicting competitive framing, unapproved case study. The prompt was fine. The context was stale. The intent was never stated.

**Interactive module:** "Failure Layer Classifier" — Six marketing-flavored failures. Reader assigns each to the dominant discipline. Reveal: only one was a "bad prompt."

**Practical exercise:** Diagnose a Recent Failure — Reader picks a real marketing task where AI produced "technically correct but wrong" output, labels what went wrong, which discipline was missing, and what artifact would have prevented it.

---

## Section 2: The Complete Order

**Theory:** Most requests rely on invisible shared context. A complete order carries sufficient operational detail: actual outcome, relevant background, audience, constraints, output form, definition of success, and likely ambiguity points.

**Failure example opener:** Marketing coordinator asks for "Q2 campaign results summary." Gets 12 pages of comprehensive analysis. Wanted a one-page highlights email. The output was correct. The order was incomplete.

**Interactive module:** "The Missing Ticket" — Show a casual request ("Draft a blog post about our new feature launch"). Reader clicks to reveal hidden omissions (audience, goal, scope, tone, source of truth, length, quality standard, constraints). Reveal: original prompt provided ~15% of what's needed.

**Practical exercise:** Write the Complete Order — Reader rewrites the running example as a complete order with explicit fields.

---

## Section 3: Plating Standards & House Rules

**Theory:** Plating standards are observer-verifiable checks that define "done." House rules are standing constraints (Must Do / Must Not Do / Prefer / Escalate) that prevent known failure modes. You need both: a plate can meet every standard and violate a rule, or follow every rule and miss the standard.

**Failure example opener:** Well-structured competitive brief gets rejected because it speculated about a competitor's roadmap using job postings and patent filings — plausible analysis, but company policy requires confirmed public sources only.

**Interactive module:** "Standards & Rules Sorter" — 10 items related to the competitive brief. Reader sorts each into: Plating Standard, Must Do, Must Not Do, Prefer, Escalate.

**Practical exercise:** Define the Plate and Post the Rules — Three plating standards and one constraint in each quadrant for the competitive brief.

---

## Section 4: Station Assignments

**Theory:** Complex work fails when treated as one uninterrupted action. Each station should have one job, receive clear input, produce a defined output, be checkable independently, and hand off cleanly.

**Failure example opener:** Team asks AI to "research competitors, analyze positioning, and draft a leadership brief" in one pass. Research is shallow, analysis mixes up data points, brief looks polished but is built on unreliable inputs.

**Interactive module:** "Build the Line" — Reader breaks a large marketing task (quarterly campaign retrospective) into stations. Module scores the split on: clear outputs, independent checkability, explicit dependencies, appropriate granularity, defined handoffs.

**Practical exercise:** Map the Stations — Reader creates a station map for the competitive brief (station → input → output → check before handoff).

**Deep-dive sidebar (Chance/Chest card):** As AI models become more capable, the stations you design could eventually be assigned to different models — a capable one to plan the work, faster ones to execute each station. This is sometimes called a planner-worker pattern, and it's where autonomous AI workflows are heading. The station assignments you learn to design here are the same structure that pattern relies on. You don't need to think about this now, but the skill you're building transfers directly when you're ready.

---

## Section 5: The Tasting System

**Theory:** Evaluation is part of the input system, not a postscript. The tasting system introduces test cases, quality markers, known failure modes, repeatable checks, and the distinction between quality and regression. Quality asks "is this plate good?" Regression asks "is this plate as good as last month's?" For recurring tasks, regression is often the more dangerous failure — output that degrades slowly enough that nobody notices until it's too far gone.

**Failure example opener:** AI social content calendar is great for month one. By month three, posts are formulaic. Nobody notices because each week's calendar is reviewed in isolation — each plate passes the quality check, but the kitchen is regressing.

**Interactive module:** "Build the Tasting Station" — Reader builds a mini evaluation system for the competitive brief: what to test, what counts as success, failure modes to watch, what would make the task no longer worth delegating.

**Practical exercise:** Draft a Mini Tasting System — Three quality markers with pass/acceptable/fail thresholds, two known failure modes, one regression check.

---

---

# PART 2B: THE DISCIPLINES IN ACTION (Sections 6–10)

**Bridge needed:** Section 6 opens Part 2B. It needs a short (2–3 paragraph) recap of the four-discipline framework, the building blocks from Part 2A, and the running example's current state. The reader has built: a complete order, plating standards, a four-quadrant house rules sheet, a station assignment map, and a mini tasting system. Part 2B picks up from here.

---

## Section 6: Mise en Place — Context Design

**Theory:** Context design is curation, not accumulation. Key concepts: relevance over exhaustiveness, signal-to-noise management, stable vs. task-specific context, freshness/staleness, persistent guidance vs. temporary materials. Briefly introduce MCP here as infrastructure context: a standard way some AI systems connect to outside tools and data sources. Keep the explanation reader-facing, not protocol-heavy.

**Failure example opener:** Marketing analyst loads 45 pages of mixed materials into one session. Output is unfocused, mixes strategic planning language with competitive analysis, references obsolete product names.

**Interactive module:** "Stock the Kitchen" — Limited context budget (visualized as shelf space). Reader selects from possible materials, sees what was essential, what was noise, what should have been summarized, and what was missing.

**Practical exercise:** Build a Context Packet — Organize materials into stable context, task-specific context, source-of-truth materials, and summarize-don't-paste items.

**Optional deep-dive sidebar (Chance/Chest card):** "What MCP Actually Changes" — Plain-English explanation of MCP as a standard connection layer between an AI system and outside tools or data sources. Explain why it matters without implementation detail: it can make fresh materials easier to reach, but it does not make the model wiser, remove the need for curation, or eliminate verification. Frame it as infrastructure for stocking the kitchen, not as the main lesson of the section.

---

## Section 7: The House Philosophy — Intent Framing

**Theory:** Context tells a system what is available. Intent tells it what matters. Intent framing makes priority hierarchies explicit. Critical distinction: intent framing is not brand tone or mission language — it is operational judgment.

**Failure example opener:** AI produces an 8-page comprehensive competitive brief. Excellent analysis. The CMO wanted a one-pager to scan before a board meeting. The work optimized for depth. The stakeholder needed brevity.

**Interactive module:** "The Priority Ladder" — Pairs of values in tension (comprehensive vs. scannable, nuanced vs. clear, timely vs. complete). Reader chooses which wins and writes a one-sentence decision rule for each.

**Practical exercise:** Write the House Philosophy — Top priority, second priority, default optimization, non-delegable decisions.

---

## Section 8: The Recipe Card — Spec Writing

**Theory:** A spec is not a long prompt. It is a structured contract that integrates: the complete order, plating standards, house rules, station assignments, the tasting system, context requirements, and the house philosophy. Spec quality reflects thinking quality.

**Note for Part 2B drafting:** If Section 6 introduced MCP lightly, Section 8 or Section 10 may refer back to it only as one example of workflow infrastructure. The guide should not require MCP-specific implementation knowledge to understand spec writing.

**Failure example opener:** Marketing lead's detailed prompt works well when they run it. Colleague runs the same prompt on vacation — output is wrong because the colleague didn't know to load last month's brief, the CMO's verbal priority, or which claims need legal review. The prompt was personal. It was never a spec. This is the 80% problem in its purest form: output that is almost right, structurally plausible, and wrong in ways that make rework harder than starting fresh.

**Interactive module:** "Stress Test the Recipe" — Reader probes a draft spec with failure questions: what is the output exactly, who is the audience, how is success measured, what should never happen, what gets escalated, what if data is missing, can someone else execute this?

**Practical exercise:** Write the Recipe Card — Full spec template for the competitive brief with all seven components (overview, context packet, house philosophy, station assignments, plating standards, house rules, tasting system).

---

## Section 9: The Pre-Service Meeting

**Theory:** Framing contamination — AI's fluent first response can shape how the human thinks about the problem, replacing the human's unfinished reasoning. Pre-AI clarification reduces this. The four pre-service questions map directly to spec components.

**Failure example opener:** Marketing manager types "Help me prepare for the board meeting about competitive positioning." Gets competitor-by-competitor breakdown. Board wanted strategic response plan. AI's framing overrode what was actually needed.

**Interactive module:** "Before You Open the Chat" — Four pre-flight questions. Reveal shows how each maps to spec components: outcome → complete order + plating standards, "wrong even if polished" → house rules + intent, insider knowledge → context packet, hard part → station assignments + escalation.

**Practical exercise:** The Pre-Service Card — Reusable pre-flight card for the competitive brief, including "what's different this month."

---

## Section 10: Running the Kitchen — Synthesis

**Theory:** Reinforces the full stack. Makes the claim that these are disciplines of delegated work, not AI-specific tricks.

**Failure example opener:** None — this section opens by showing the complete system working.

**Interactive module:** "Full Service" — New messy task (VP of Sales wants a battlecard by Friday). Reader assembles the full stack in order. Ends with a visual showing which layer prevents which class of failure.

**Practical exercise:** The Complete Recipe Card — Review and finalize the full spec built across the guide.

**Optional:** Diagnostic flowchart as a static, reusable reference graphic.
