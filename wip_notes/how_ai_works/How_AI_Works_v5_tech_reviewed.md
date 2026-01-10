# How AI Works (Without the Hype): Marketing Potluck Project Management Edition (V5)

You’re about to coordinate a launch-week-style internal **Marketing Potluck**: lots of opinions, conflicting constraints, unclear owners, and a messy intake dump scattered across Slack, email, calendars, Facilities, HR, and a sign-up doc.

This guide explains how a text AI model works by watching that chaos get turned into a **structured dataset** and a **clean action plan**—not through magic, but through **progressively better instructions** (V0 → V4).

> **TL;DR**
> Think of a text AI model as a fast helper that predicts a **probability distribution over the next token** (token by token) from what you give it, then uses a **decoding method** to select tokens one at a time until it forms a response. It doesn’t “know” your office situation. Your prompt is the difference between “help!” and “here’s the checklist, the rules, and the format.”
>
> **Nerd note:** The model outputs probabilities. The system’s decoding settings (e.g., greedy vs sampling, with knobs like temperature/top‑p) determine how the final text gets selected.

---

## Micro-Glossary: Eight Terms You’ll See a Lot

* **Model**: the text generator (the thing producing the response)
* **Prompt**: your instructions + any pasted context (like the intake dump)
* **Token**: a small piece of text (often a word part) the model predicts one at a time
* **Decoding (greedy vs sampling)**: how the system selects the next token from the model’s probabilities (deterministic vs stochastic)
* **Temperature**: a decoding knob that makes probabilities sharper or flatter (higher temperature → more diversity when sampling)
* **DRI**: directly responsible individual (single-threaded owner)
* **Normalize**: turn messy notes into consistent rows/fields without “resolving” conflicts
* **Hallucination**: confident-sounding text that isn’t supported by the provided sources

> **Nerd note:** Temperature isn’t “randomness” by itself—it reshapes token probabilities during decoding. You only get run-to-run variation when the system uses **sampling** (a stochastic decoding choice). With deterministic decoding, identical prompts typically produce identical outputs.


---

## Table of Contents

* [Worked Example: The Marketing Potluck Intake Dump](#worked-example-the-marketing-potluck-intake-dump)
* [Prompt Ladder: V0 → V4](#prompt-ladder-v0--v4)
* [A Quick Demo: What Vagueness Breaks](#a-quick-demo-what-vagueness-breaks)
* [1) Cold Open: Why V0 Produces Vibes, Not a Plan](#1-cold-open-why-v0-produces-vibes-not-a-plan)
* [2) What the Model Is Doing When It Responds](#2-what-the-model-is-doing-when-it-responds)
* [3) Tokens: The “Pieces” the Model Thinks With](#3-tokens-the-pieces-the-model-thinks-with)
* [4) Attention and Weighting: Why Placement and Labels Matter](#4-attention-and-weighting-why-placement-and-labels-matter)
* [5) Context Window: The Size of the Prep Table](#5-context-window-the-size-of-the-prep-table)
* [6) From Vibes to Specs: Constraints and Non-Goals](#6-from-vibes-to-specs-constraints-and-non-goals)
* [7) Defining “Done”: Success Criteria and Output Format](#7-defining-done-success-criteria-and-output-format)
* [8) Structured Output: Turning the Dump Into a Dataset](#8-structured-output-turning-the-dump-into-a-dataset)
* [9) Planning vs Taste: Reducing Replacement Anxiety](#9-planning-vs-taste-reducing-replacement-anxiety)
* [10) Tools vs Model: The Kitchen Appliances Analogy](#10-tools-vs-model-the-kitchen-appliances-analogy)
* [11) Reliability: QA the Plan Like a Launch Checklist](#11-reliability-qa-the-plan-like-a-launch-checklist)
* [12) Limits and Failure Modes](#12-limits-and-failure-modes)
* [Bonus: Potluck Triage Sandbox](#bonus-potluck-triage-sandbox)
* [Teaching Note](#teaching-note)
* [Prompt Template](#prompt-template)
* [QA Checklist](#qa-checklist)
* [Optional Interactive Modules](#optional-interactive-modules)

---

## Worked Example: The Marketing Potluck Intake Dump

Below is the **only input** we’ll reuse throughout the guide. It’s intentionally messy and contradictory—like real work.

> **Analogy:** This is a table covered in sticky notes from ten coworkers. AI can help you **sort** the sticky notes. You still decide what’s true and what to do.

<details>
<summary><strong>Open the full intake dump (copy/paste friendly)</strong></summary>

```text
MARKETING POTLUCK INTAKE DUMP (Revised for the Guide)

Collected from: Slack, email, a shared sign-up doc, calendar invites, and Facilities/HR notes.
Status: High ambiguity, conflicting constraints, unclear owner/decision rights.

A) Slack — #marketing-general (Event kickoff + constraints)
- Tara (Sr. Marketing Manager): “Marketing potluck next Thursday. Can someone own coordination? Keep it low lift.”
- Dylan (Director of Brand): “Suggest a theme and presentation standards. I’ll advise on ‘vibe’.”
- Mina (Design): “Please avoid strong-smelling foods; we’ve had odor complaints.”
- Becky (Marketing Ops): “We must label allergens clearly. Last time was chaotic.”
- Jordan (Paid Media): “Please avoid spicy ‘mystery’ foods; label heat level.”
- Raj (SEO): “Severe nut allergy (tree nuts + peanuts). Also avoid cross-contamination.”

B) Slack DM — Tara → Coordinator/DRI (Leadership pressure + budget)
- “Leadership wants it to feel ‘special’ with no budget. Please keep it simple and avoid anything that triggers Facilities.”

C) Email — “Marketing Potluck — Quick Notes!” (Incomplete logistics + conflicting expectations)
- Date: “Next Thursday” (no actual date)
- Time: “Lunch-ish (12–2?)”
- Location: “Kitchen area / maybe Conf Room B” (Room B is already booked)
- “Be mindful of allergies.”
- “Should look nice for photos.”
- Attachment: potluck_notes_FINAL.xlsx (locked / access controlled)

D) Calendar Invite #1 (Basic event)
- Title: “Marketing Potluck”
- Time: 12:00–1:00
- Location: Kitchen
- Notes: “Bring a dish. Label allergens.”
- Invitees: Marketing + some non-Marketing groups (scope unclear)

E) Calendar Invite #2 — sent later by Dylan (Conflicts with Invite #1)
- Title: “Theme Experience” (Dylan’s version)
- Time: 11:30–2:30
- Location: Atrium (Atrium unavailable due to Finance offsite)
- Rules listed (presentation-focused): “No plastic,” “no visible appliances,” “neutral linens,” etc.
- Attachment: MOODBOARD.pdf

F) Shared “Potluck Sign-Up” doc (Messy source of truth)
Columns: Name, Dish, Allergens, Dietary notes, Serving notes, Notes
Current entries (examples):
- Steph: “Chili” (allergens unknown; crockpot mentioned)
- Raj: “TBD” (nut allergy emphasized; additional restrictions unclear)
- Eli: “Dessert (almond flour?)” (conflicts with nut-free requirement)
- Mina: “Charcuterie board” (dairy/meat; special serving/cleanup notes)
- Becky: “Plates/cups/labels” (bringing label template)
- Dylan: “Centerpiece / setup” (wants presentation control)
- “Kombucha flight” added, with multiple objections (not consensus)

G) Facilities guidance (Hard constraints)
- No open flames.
- No extension cords across walkways.
- Crockpots only if plugged directly into wall outlets and not left unattended.
- Avoid wall attachments/damage.
- Avoid glitter/decor that creates cleanup issues.
- Request: avoid strong-smelling foods (seafood noted as a common complaint).

H) HR guidance (Policy constraints)
- Participation must be voluntary; avoid “mandatory fun” framing.
- Avoid pressure on employees with dietary restrictions or other constraints.
- No alcohol at lunch.

I) Finance note (Space conflict)
- Atrium is booked all day Thursday; do not use Atrium or borrow Finance tables.

J) Leadership note (Success criteria, still vague)
- VP/Leadership: “Keep it simple, but it’s a morale moment and we may have visitors. Don’t spend money.”

K) CEO/Executive constraint (High priority requirement)
- CEO may stop by briefly.
- Needs at least one option that is gluten-free, dairy-free, and generally “safe.”
- Additional note: “Whole30-ish” (interpretation needed; don’t assume).

L) Open questions / contradictions (intentionally unresolved)
- What is the actual date (“next Thursday”)?
- What is the final time window (12–1 vs 12–2 vs 11:30–2:30)?
- What is the final location (Kitchen vs Conf Room B vs Atrium)?
- Which calendar invite is authoritative (Invite #1 vs Invite #2)?
- Is this Marketing-only or broader (“All Staff” invite sprawl)?
- Who is the DRI and who has decision rights on “theme” vs “simple”?
- How strict is “nut-free” (full potluck vs dedicated table)?
- Are crockpots allowed (Facilities says yes with constraints; Dylan says “no visible appliances”)?
- Is “no plastic” actually enforceable given “no budget” and low-lift constraints?
```

</details>

> **Common confusion**
> “If the intake dump contains all the facts, the AI will use all the facts.”
> A safer mental model: it only uses what’s **in the provided context**, and it tends to treat **instruction-like text** and **repeated constraints** as more salient than buried details.

> **Nerd note:** “Weighting” here is shorthand. In transformer models, attention is one mechanism for linking tokens, but prompt-following behavior is also shaped by training and alignment—so clear section labels and separating **rules** from **context** matter.

> **Reader checkpoint**
> **Question:** Name one place where two sources disagree.
> **Model answer:** Time (12–1 vs 12–2 vs 11:30–2:30) and location (Kitchen vs Conf Room B vs Atrium) conflict.
> **What to fix if you answered differently:** Re-scan for phrases like **“sent later,” “already booked,” “unavailable,”** and **“conflicts with”**—these are contradiction flags.

---

## Prompt Ladder: V0 → V4

The same “ask” gets upgraded from vague to precise. Each version is meant to produce **more reliable structure** and **fewer invented details**.

### V0 — Confusing but realistic

```text
Organize this marketing potluck and tell me what to do next.

[PASTE THE INTAKE DUMP]
```

**Why it’s weak:** “Organize” could mean theme ideas, menu ideas, calendar booking, or a checklist—so the model guesses.

---

### V1 — Role + concrete deliverables

```text
You are a project coordinator for an internal Marketing Potluck.

Goal: Convert the intake dump into:
1) a normalized table of requests/constraints/conflicts, and
2) a short next-steps plan.

Use only the information in the intake dump.

[PASTE THE INTAKE DUMP]
```

**Why it helps:** You gave the model a job and two outputs it can pattern-match reliably.

---

### V2 — Non-goals + “don’t make things up”

```text
You are a project coordinator for an internal Marketing Potluck.

Goal: organize the intake into a structured plan.

Non-goals:
- Do NOT propose themes, menus, or “vibe” ideas.
- Do NOT write invite copy or announcements.
- Do NOT guess missing dates, owners, or availability.

If something is unclear, mark it as unclear.

[PASTE THE INTAKE DUMP]
```

**Why it helps:** When information is missing, models tend to fill gaps. Non-goals reduce that failure mode.

---

### V3 — Define “done” + strict output format (traceability upgrade)

```text
You are a project coordinator for an internal Marketing Potluck.

Success criteria:
- Merge clear duplicates; if uncertain, keep both and note "Possible duplicate of ID X" in Risks.
- Every item has an Owner (or "Unassigned").
- Every item has a Due date/time (or "Unknown").
- Every item lists Dependencies and Risks (or "None noted").
- Every unclear item is flagged Needs_clarification = Yes.
- Every item includes Evidence pointing to one or more intake sections (A–L).

Optional reliability upgrade (recommended for safety/policy items):
- Add a Quote field (≤1 sentence) for any safety/policy constraint, copied verbatim from the intake.

Output exactly these sections:

1) Normalized intake table
Columns: ID, Category, Item, Evidence, Owner, Due, Dependencies, Risks,
Needs_clarification, Confidence (High/Med/Low), Assumptions

(+ optional Quote column for safety/policy items)

2) Top 10 next actions
Format: Priority, Action, Owner (or placeholder), ETA band (15m/1h/half-day/day+)

3) Questions to unblock
Group questions by stakeholder (Tara, Dylan, Facilities, HR, Finance, Exec/CEO).

Rules:
- Use only the intake dump.
- Do not invent.
- If contradictory, list both and mark Needs_clarification.

[PASTE THE INTAKE DUMP]
```

> **Nerd note:** The **Confidence** field is a workflow tag, not a calibrated probability. Use it to mean “how directly supported by the intake dump is this row?” If you prefer more explicit language, rename the column to **Evidence_strength**.


**What changed:** You defined acceptance criteria and forced a shape that’s easy to QA and copy into a spreadsheet.

---

### V4 — Chunking + unknowns policy (operationalized)

```text
You are a project coordinator for an internal Marketing Potluck.

Follow V3 exactly, plus:

Chunking policy:
- If the intake is too long, first output the full schema and process only sections A–F (do not summarize G–L).
- Then stop and output: "READY FOR NEXT CHUNK: G–L" (do not continue).

Unknowns policy:
- Do not guess dates, availability, links, or owners.
- When ambiguous (e.g., "next Thursday", "Whole30-ish"), set Needs_clarification = Yes,
  Confidence = Low, and state the smallest possible assumption.

[PASTE THE INTAKE DUMP]
```

**What changed:** You planned for context limits and forced unknowns to surface instead of being smoothed over.

---

## A Quick Demo: What Vagueness Breaks

Here’s the practical difference between “helpful-sounding” and “safe-to-act-on.”

### What a V0-style response often *accidentally* does (bad pattern)

```text
Plan:
- Host the event in the Atrium from 11:30–2:30.
- Ask everyone to bring a dish and avoid nuts.
- Add neutral linens for photos and enforce no plastic.
```

Why this is dangerous in *this* dump:

* Atrium is explicitly unavailable (Finance offsite).
* The time window is contested.
* “Avoid nuts” is underspecified vs severe allergy + cross-contamination risk.
* “No plastic” may conflict with “no budget” and “low lift.”

### What V3/V4 force instead (good pattern)

```text
Normalized intake rows (example):
- Category: Location (Hard Constraint)
- Item: Atrium cannot be used (Finance offsite); do not use Atrium or borrow Finance tables.
- Evidence: E, I
- Needs_clarification: No
- Confidence: High

- Category: Location (Decision)
- Item: Choose final location (Kitchen vs Conf Room B vs other approved space); Conf Room B may be booked; Kitchen is in Invite #1.
- Evidence: C, D, L
- Needs_clarification: Yes
- Confidence: Med
```

This is the core value of structure: it prevents the plan from silently “choosing a side” when the sources disagree.

---

## 1) Cold Open: Why V0 Produces Vibes, Not a Plan

**Plain-language version:** If you tell a coworker “handle the potluck,” they’ll respond with random ideas because you didn’t say what “handle” means.

**Work version:** V0 asks for *helpfulness*, not a specific deliverable. Without acceptance criteria, the output is hard to verify, and the model may:

* invent a final time/location,
* drift into theme or invite copy,
* ignore hard constraints (Facilities rules, allergy risk, HR constraints).

> **Common confusion**
> “If I’m vague, the AI will ask clarifying questions.”
> Sometimes it does—but often it guesses, because guessing also “looks helpful.”

> **Reader checkpoint**
> **Question:** In this potluck scenario, what’s the single biggest risk if the model guesses?
> **Model answer:** Safety/policy failure (e.g., allergy handling or Facilities rules) caused by invented details.
> **What to fix if you answered differently:** If you focused only on “messy planning,” zoom out: guessing doesn’t just make a plan messy—it can make it **unsafe**.

---

## 2) What the Model Is Doing When It Responds

**Plain-language version:** It’s like super-fast autocomplete that’s read a lot of writing.

**Work version:** A text model produces responses by repeatedly predicting a **probability distribution over the next token** (text piece) given what it can see in the prompt (instructions + context). A **decoding method** then selects one token at a time from that distribution until the response is complete. It can:

* summarize and reformat,
* create checklists,
* draft structured tables and questions,

> **Nerd note:** “Next-token prediction” is what the model is trained to do. The wording you see also depends on **decoding**—for example, deterministic (greedy) decoding vs stochastic (sampling) decoding.

…but it is not inherently a truth-checker or a calendar reader. It can sound confident while guessing because confidence is a writing style, not a fact.

One line that prevents a common class of workplace confusion:

> **Training gives it language patterns; tools give it new facts** (like your actual calendar or a locked spreadsheet).

If your system is not tool-connected, it can’t truly “check Conf Room B availability”—it can only repeat what you provided or guess.

### Why you may get different answers when you rerun the same prompt

Even with the same prompt, many AI systems use **stochastic decoding** (often called **sampling**) when selecting tokens. Practically, that means:

* the structure stays similar (especially with a strict output format),
* but item wording, ordering, and “what it notices first” can vary,
* and small variations can compound into different-looking plans.

Where **temperature** fits: temperature is a decoding setting that makes token probabilities sharper or flatter. When sampling is enabled, higher temperature generally increases diversity (and lowers repeatability).

**Mitigation:** use stricter output formats (V3/V4), require Evidence per row, and treat the output as a draft you QA—not a single definitive run.

> **Nerd note:** If decoding is deterministic (e.g., greedy), identical prompts typically produce identical outputs. Variation usually comes from sampling (often combined with temperature and/or top‑p).

> **Common confusion**
> “It understands like a person understands.”
> It can *sound* like it understands because it’s good at language patterns. The safer mental model is: **it predicts plausible text from context**.

> **Reader checkpoint**
> **Question:** What is the model actually “using” to create its answer?
> **Model answer:** Only the prompt text (instructions + intake dump) plus patterns learned in training—not your company’s real calendar or policies unless provided or tool-retrieved.
> **What to fix if you answered differently:** If you assumed it can “see internal tools,” separate *writing a plan* from *verifying reality*.

> **Optional (for creative teams)**
> Think of the model as a **production assistant for structure**: it can label bins, sort footage, and build a rough-cut timeline—but it doesn’t decide the story. In potluck terms: it can make the spreadsheet, but it can’t taste the chili.

---

## 3) Tokens: The “Pieces” the Model Thinks With

**Plain-language version:** It reads in small chunks, not whole paragraphs the way you do.

**Work version:** Models process text as tokens (often word pieces). Tokenization differs by model, but the practical takeaways are stable:

* consistent labels (Facilities / HR / Finance) improve reliability,
* ambiguous short phrases (“next Thursday,” “lunch-ish,” “Whole30-ish”) hide big operational uncertainty,
* repeating constraints in instruction-like form increases compliance.

> **Common confusion**
> “Tokens are words.”
> Not exactly. Tokens are often **parts of words**. The practical takeaway is simpler: **be consistent with labels and structure**, because the model is sensitive to small wording differences.

> **Reader checkpoint**
> **Question:** In the intake dump, which short phrase creates a big scheduling hole?
> **Model answer:** “Next Thursday.”
> **What to fix if you answered differently:** If you picked “Lunch-ish,” that’s also valid. The key is noticing: **short phrases can hide big ambiguity**.

Optional module: Token highlighter (see [Optional Interactive Modules](#optional-interactive-modules)).

---

## 4) Attention and Weighting: Why Placement and Labels Matter

**Plain-language version:** If the rules are buried, people miss them.

**Work version:** The model tends to follow **instruction-like text** and **repeated constraints** more reliably than buried details inside long context. Practical prompt hygiene:

* put hard constraints early (Facilities, HR, allergy risk),
* label source sections clearly,
* require traceability (Evidence column) so the output can’t drift into free association.

> **Nerd note:** “Attention” is also the name of a specific transformer computation that lets tokens reference other tokens. But “importance” in prompting is not just attention weights—it’s also shaped by training and alignment. Practically: clearly separate **rules** from **context**, label sections, and repeat critical constraints.


### Default prompt order (high-ROI placement upgrade)

1. **Rules and constraints first**
2. **Intake dump second**
3. **Output format last**

This is a simple layout change that improves compliance without changing the underlying ask.

> **Common confusion**
> “If it’s included anywhere, it will be followed.”
> Inclusion is not the same as emphasis. Models are pattern-followers; they weight what looks like “the rules.”

> **Reader checkpoint**
> **Question:** Name one “must not miss” constraint you would place near the top of the prompt.
> **Model answer:** Severe nut allergy and cross-contamination avoidance; Facilities safety rules; HR voluntary participation; no alcohol; no budget.
> **What to fix if you answered differently:** If you picked “photos should look nice,” that’s fine—but distinguish **hard constraints** (safety/policy) from **preferences** (presentation).

Optional module: Constraint placement experiment (see [Optional Interactive Modules](#optional-interactive-modules)).

---

## 5) Context Window: The Size of the Prep Table

**Plain-language version:** If you dump too much on the table, things fall off.

**Work version:** The context window is the amount of text the model can consider at once. Even within the window, very long prompts can degrade recall and precision (details get compressed or missed). V4’s chunking policy mitigates this:

* schema first,
* process intake in chunks (A–F, then G–L),
* explicitly stop before “making up the rest.”

> **Common confusion**
> “If I already pasted it earlier in the chat, it remembers.”
> Not reliably. If it’s not in the current working text, it may be effectively invisible.

> **Reader checkpoint**
> **Question:** If your intake dump is huge, what is the safest first output to request?
> **Model answer:** The schema (columns/fields) and the first processed batch, with a clear stop point (“READY FOR NEXT CHUNK…”).
> **What to fix if you answered differently:** If you said “a complete plan anyway,” add a safeguard: require **batching + a hard stop** so it doesn’t silently drop items.

> **Optional**
> **Why “schema-first” is underrated:** A schema is like setting up labeled bins before unpacking boxes. Once bins exist, you can process the dump in parts without losing consistency.

---

## 6) From Vibes to Specs: Constraints and Non-Goals

This is the V1 → V2 upgrade.

**Plain-language version:** “Don’t decorate yet—just make the checklist.”

**Work version:** Non-goals reduce two failure modes:

1. **Scope creep**: generating themes, menus, or copy you didn’t ask for.
2. **Gap-filling**: inventing missing facts (date, room, owner) to sound decisive.

In this potluck dump, missing/contradictory inputs are everywhere (date, time, location, invite authority). The safe posture is: mark unknowns, don’t guess.

> **Reader checkpoint**
> **Question:** Why is “Do NOT guess missing dates/owners” especially important here?
> **Model answer:** Because multiple sources conflict; guessing produces a plan that looks clean but is wrong—and could cause safety/policy issues.
> **What to fix if you answered differently:** If you focused only on “accuracy,” add “trust”: a clearly marked unknown is easier to resolve than a confident guess.

---

## 7) Defining “Done”: Success Criteria and Output Format

This is the V2 → V3 upgrade.

**Plain-language version:** It’s like posting the rules: “Every dish must have a label.”

**Work version:** The output format *is the acceptance test*. Requiring:

* Owner / Due / Dependencies / Risks
* Needs_clarification flags
* Evidence per row

…turns “a plan” into something you can QA like a launch checklist.

> **Common confusion**
> “More formatting makes it rigid.”
> Coordination work benefits from rigidity. The creativity lives in *decisions*, not in whether your task list has consistent columns.

> **Reader checkpoint**
> **Question:** What part of V3 makes it easier to catch missing information?
> **Model answer:** The required fields (Owner/Due/Dependencies/Risks) plus Needs_clarification.
> **What to fix if you answered differently:** If you said “the questions section,” that’s also correct—but notice why: it forces unknowns to surface.

---

## 8) Structured Output: Turning the Dump Into a Dataset

**Plain-language version:** A dataset is a neat table where every row has the same fields.

**Work version:** “Normalized” means:

* one distinct issue per row,
* duplicates merged only when clearly the same,
* conflicts explicitly marked instead of resolved.

### Example: Normalized intake table excerpt

| ID | Category         | Item                                                                                   | Evidence   | Owner      | Due     | Dependencies                       | Risks                                       | Needs_clarification | Confidence | Assumptions                    |
| -: | ---------------- | -------------------------------------------------------------------------------------- | ---------- | ---------- | ------- | ---------------------------------- | ------------------------------------------ | ------------------- | ---------- | ------------------------------ |
|  1 | Ownership        | Confirm DRI for coordination + decision rights (theme vs “simple”).                    | A, B, L    | Unassigned | Unknown | Tara + Dylan alignment             | Conflicting directions → rework             | Yes                 | High       | None                           |
|  2 | Schedule         | Resolve actual calendar date for “next Thursday” (write as a real date).               | A, C, L    | Unassigned | Unknown | Tara confirmation                  | Wrong date communicated                     | Yes                 | Med        | “Next Thursday” unspecified    |
|  3 | Schedule         | Resolve time window (12–1 vs 12–2 vs 11:30–2:30).                                      | C, D, E, L | Unassigned | Unknown | Tara + Dylan                       | People show up at wrong time                | Yes                 | High       | None                           |
|  4 | Location         | Atrium cannot be used (Finance offsite); do not use Atrium or borrow Finance tables.   | E, I       | Unassigned | Unknown | None noted                         | Space conflict; disruption                  | No                  | High       | None                           |
|  5 | Location         | Choose final location (Kitchen vs Conf Room B vs other approved space).                | C, D, L    | Unassigned | Unknown | Tara decision + Facilities         | People go to wrong room; capacity/safety issues | Yes             | Med        | None                           |
|  6 | Safety           | Severe nut allergy: define nut policy + cross-contamination handling.                  | A, F, L    | Unassigned | Unknown | Raj guidance + comms owner         | Health risk                                 | Yes                 | High       | None                           |
|  7 | Policy           | HR: participation must be voluntary; no alcohol at lunch.                              | H          | Unassigned | Unknown | Messaging owner                    | Policy violation; “mandatory fun” backlash  | No                  | High       | None                           |
|  8 | Facilities       | Facilities rules: no open flames; no cords across walkways; crockpots constraints.     | G          | Unassigned | Unknown | Facilities confirmation if needed  | Safety hazards                              | No                  | High       | None                           |
|  9 | Food constraints | Avoid strong-smelling foods (seafood flagged).                                         | A, G       | Unassigned | Unknown | Sign-up guidance                   | Odor complaints                             | No                  | Med        | “Strong-smelling” subjective    |
| 10 | Labeling         | Allergen + heat-level labeling required; label template exists.                        | A, D, F    | Becky (template) / Unassigned (enforcement) | Unknown | DRI + sign-up doc updates          | Allergy/complaints if missing               | Yes                | High       | Becky has a template            |
| 11 | Exec requirement | Ensure at least one gluten-free + dairy-free “safe” option; clarify “Whole30-ish.”     | K          | Unassigned | Unknown | Exec clarification                 | Exec dissatisfaction; dietary mismatch      | Yes                 | Med        | “Whole30-ish” undefined         |
| 12 | Source of truth  | Locked spreadsheet attachment blocks info; request access or alternate source.         | C          | Unassigned | Unknown | Access owner                       | Missing logistics                           | Yes                 | High       | File access controlled          |
| 13 | Menu conflict    | “Dessert (almond flour?)” conflicts with nut allergy constraint.                       | A, F       | Unassigned | Unknown | Nut policy decision                | Allergy risk                                | Yes                 | High       | Almond flour implies tree nut   |


> **Nerd note:** Evidence references reduce hallucinations, but models can still **mis-cite** (point to the wrong section) while sounding consistent. For high-stakes constraints, use the optional **Quote** column (verbatim) and audit a sample of rows.

> **Common confusion**
> A table isn’t automatically correct—it’s just easier to audit. The value is **traceability** and **explicit unknowns**.

> **Reader checkpoint**
> **Question:** In the table above, what does Needs_clarification = Yes prevent?
> **Model answer:** It prevents the plan from pretending uncertainty doesn’t exist. It forces follow-up before execution.
> **What to fix if you answered differently:** If you thought it’s “just a tag,” connect it to action: treat it like a **stop sign** for decisions.

### Mini end-to-end example (so it feels like a real run)

Below is a small example of what Sections 2 and 3 of the V3 output might look like—without inventing missing dates or owners.

#### 2) Top next actions (example)

| Priority | Action | Owner | ETA band |
| ---: | --- | --- | --- |
| 1 | Confirm DRI and decision rights (who decides: “simple” vs “theme experience”). | Unassigned (needs Tara + Dylan) | 1h |
| 2 | Resolve “next Thursday” into a calendar date and confirm authoritative time window. | Unassigned (needs Tara) | 1h |
| 3 | Confirm final location. Atrium is unavailable; confirm Kitchen vs alternative approved space (Conf Room B may be booked). | Unassigned (needs Tara + Facilities) | half-day |
| 4 | Define nut allergy handling (nut-free policy + cross-contamination approach) and reflect it in sign-up fields + labeling. | Unassigned (needs Raj + Becky) | half-day |
| 5 | Request access to the locked `potluck_notes_FINAL.xlsx` or ask sender to paste critical logistics into email. | Unassigned | 15m |

#### 3) Questions to unblock (example)

**Tara**
1. What is the actual calendar date for “next Thursday”?
2. Which invite should people follow (Calendar Invite #1 vs Dylan’s later invite)? Who is the DRI?
3. Is this Marketing-only or broader (given “invite sprawl”)? Who should be included/excluded?

**Dylan**
4. Are “Theme Experience” rules (no plastic / no visible appliances / linens) mandatory or optional, given “no budget” and “keep it low lift”?

**Facilities**
5. If Kitchen is the default: any capacity/outlet constraints (especially for crockpots plugged directly into wall outlets)?
6. Is “avoid strong-smelling foods” a strict ban or guidance? Any “known” prohibited items (e.g., seafood)?

**HR**
7. Any preferred language to reinforce voluntary participation (and avoid “mandatory fun” pressure)?

**Finance**
8. Confirm Atrium is unavailable all day Thursday and whether any alternative space guidance exists.

**Exec/CEO**
9. What does “Whole30-ish” mean in this context (strict requirement or preference)? Any other constraints for the “safe” option beyond gluten-free + dairy-free?

---

## 9) Planning vs Taste: Reducing Replacement Anxiety

**Plain-language version:** AI can help you make the checklist, but it can’t decide what tastes good.

**Work version:** AI is strong at operations structure:

* turning dumps into datasets,
* listing risks and dependencies,
* drafting questions and checklists.

Humans own taste and judgment:

* what “special” means with no budget,
* how strict “nut-free” must be,
* what “Whole30-ish” means in your org.

> **Common confusion**
> “If AI can create an action plan, it can manage the event.”
> An action plan is not execution. Execution requires authority, context, relationships, and verification.

> **Reader checkpoint**
> **Question:** Name one decision from the intake dump that should *not* be delegated to the AI.
> **Model answer:** Defining nut-free strictness (full potluck vs dedicated table) and interpreting “Whole30-ish.”
> **What to fix if you answered differently:** If you chose “who is the DRI,” that’s also correct—AI can propose options, but leadership assigns responsibility.

---

## 10) Tools vs Model: The Kitchen Appliances Analogy

**Plain-language version:** Writing “bake at 350°F” doesn’t turn on the oven.

**Work version:** A model-only system can draft plans. It can’t verify external facts (room bookings, invite acceptance, file access) unless it has tools connected.

If a system *is* tool-connected, require it to cite what it retrieved (source + timestamp) or explicitly mark the item unknown. Otherwise, you get “it said it checked the calendar” without verifiable evidence.

> **Common confusion**
> “It said it checked the calendar.”
> Unless you’re using a tool-connected system (and you can verify it did), assume it did **not** check anything external.

> **Reader checkpoint**
> **Question:** What’s the safest way to phrase an instruction when external verification is required?
> **Model answer:** “Do not verify; instead, list what must be verified and by whom.”
> **What to fix if you answered differently:** If you wrote “verify the room,” add a constraint: “If you cannot access the calendar, mark as Needs_clarification.”

> **Optional**
> **When tool-connected AI is worth it:** If your workflow repeatedly depends on calendars, docs, or tickets, tool access can turn “plans” into “updates.” Even then, keep the habit: require the AI to cite what it saw (source + timestamp) or mark unknown.

---

## 11) Reliability: QA the Plan Like a Launch Checklist

**Plain-language version:** You wouldn’t run the potluck without checking the basics. Don’t run an AI plan without checking the basics.

**Work version:** Treat model output like a first draft from a junior coordinator: useful, but needs QA.

### QA pass you can append to V3/V4

```text
QA pass:
- List contradictions you see.
- List missing Owners/Due dates.
- List items that risk safety/policy violations.
- List assumptions you made (keep minimal).
- If you see invented details, call them out as "Potential hallucination".
```

### What QA looks like in this potluck scenario

* Contradictions surfaced? Time/location conflicts are flagged.
* Hard constraints included? Nut allergy, Facilities rules, HR policy, no alcohol, no budget.
* Unknowns marked? “Next Thursday,” “Whole30-ish,” owner/decision rights.
* Dependencies realistic? Can’t finalize sign-up guidance without nut policy.
* Traceable evidence? Every row points to intake sections (A–L).

> **Common confusion**
> “If I ask the model to QA itself, it will catch everything.”
> Self-QA helps, but it’s still the same brain checking its own work. Use it as a *second sweep*, not a guarantee.

> **Reader checkpoint**
> **Question:** Name one conflict the plan must address explicitly (not silently “pick a side”).
> **Model answer:** “No visible appliances” vs crockpot use; or “Atrium location” vs Finance’s Atrium unavailability.
> **What to fix if you answered differently:** Re-scan for rule collisions: **presentation rules vs Facilities rules vs no-budget constraints**.

Optional module: Audit quiz (see [Optional Interactive Modules](#optional-interactive-modules)).

---

## 12) Limits and Failure Modes

Common failure modes in coordination tasks:

1. **Hallucination (gap-filling)**  
   Example: inventing the exact date for “next Thursday.”

2. **Ambiguity collapse**  
   Example: treating “Whole30-ish” as a strict, universal rule without confirmation.

3. **Instruction conflict**  
   Example: “Keep it low lift” vs Dylan’s “Theme Experience” rules.

4. **Overconfidence tone**  
   Example: decisive language even when Confidence should be Low.

**Mitigations:**

* unknowns policy (V4),
* required Confidence + Assumptions fields,
* Evidence (and optional Quote) fields for traceability,
* stakeholder-grouped unblock questions,
* QA pass before execution.

> **Common confusion**
> “If it hallucinates, it’s lying.”
> Hallucination is not a moral failure; it’s a system continuing text in a plausible way. Your job is to structure the task so “plausible” isn’t enough.

> **Reader checkpoint**
> **Question:** What single instruction best reduces hallucination in planning work?
> **Model answer:** “Do not guess; mark unknowns and ask questions.”
> **What to fix if you answered differently:** If you said “be more specific,” you’re right—but specificity should include an explicit **unknowns policy**, not just more detail.

---

## Bonus: Potluck Triage Sandbox

If you want low-stakes practice, this workflow generalizes well:

* Take a messy intake dump (Slack + email + “someone said”).
* Run V3 to normalize.
* Run a QA pass.
* Convert “Needs_clarification = Yes” rows into stakeholder questions.
* Only then finalize the plan.

This is coordination discipline: don’t let a “clean plan” hide uncertainty.

---

## Teaching Note

The mental model to keep:

**AI is a powerful pattern coordinator, not an all-seeing manager.**
It can reorganize what you give it into structure. It cannot reliably supply missing truth.

Memorable boundary:

* **Training** gives it patterns for producing text.
* **Tools** (when present) give it new facts.

---

## Prompt Template

Copy/paste and adapt this for any coordination mess (potluck, launch week, event planning, cross-team intake).

### Data hygiene (read before pasting)

In workplace contexts, the biggest adoption blocker is often: “What can I paste safely?”

As a default:

* Remove personal data (phone numbers, home addresses, personal emails) and sensitive identifiers.
* Avoid HR-sensitive details (performance, medical, leave, disciplinary topics).
* Avoid confidential deal terms, unreleased financials, or customer data unless your tool and policy explicitly allow it.
* When in doubt: summarize the sensitive part yourself, and paste the summary instead of raw content.

```text
You are a project coordinator.

Context:
- [1–3 sentences: what this project is, why it matters, what the intake represents]

Goal:
- Convert the intake into (1) a normalized table and (2) a prioritized next-steps plan.

Constraints (must follow):
- [Hard constraints: safety/policy/legal/brand requirements]
- [Operational constraints: time, budget, approvals]

Non-goals (must not do):
- Do NOT generate creative content/copy.
- Do NOT guess missing facts (dates, owners, availability, links).
- Do NOT resolve contradictions silently.

Output format (exact):
1) Normalized intake table
Columns: ID, Category, Item, Evidence, Owner (or "Unassigned"), Due (or "Unknown"),
Dependencies, Risks, Needs_clarification (Yes/No), Confidence (High/Med/Low), Assumptions

Optional reliability upgrade (recommended for safety/policy items):
- Add Quote column with ≤1 sentence copied verbatim from the intake.

2) Top next actions (max 10)
Format: Priority, Action, Owner, ETA band (15m/1h/half-day/day+)

3) Questions to unblock
Group by stakeholder/team.

Unknowns policy:
- If ambiguous, set Needs_clarification=Yes, Confidence=Low, and state the smallest assumption.

Intake dump:
[PASTE INTAKE HERE]
```

---

## QA Checklist

Use this to review any AI-generated plan before you act on it.

* **Coverage:** Includes all major source areas (Slack, email, calendar, Facilities, HR, exec notes).
* **No duplicates (responsibly):** Clear duplicates merged; unclear duplicates flagged as possible duplicates.
* **Owners present:** Every row has an owner or “Unassigned.”
* **Dates honest:** No invented dates/times/links; unknowns are “Unknown.”
* **Conflicts flagged:** Contradictions marked `Needs_clarification = Yes` and listed explicitly.
* **Hard constraints respected:** Safety/policy constraints surfaced early and reflected in next actions.
* **Evidence is concrete:** Every row points to intake sections (A–L); for safety/policy items, include an optional **Quote** field when stakes are high.
* **Confidence is treated as a tag:** Confidence (High/Med/Low) is a heuristic for evidence strength, not a probability; if a row is weakly supported, mark it Low and tighten the Evidence/Quote.
* **Assumptions minimized:** Assumptions are small, explicit, and reviewable.
* **Questions actionable:** Questions grouped by stakeholder and sendable as-is.
* **Variability handled:** If you rerun the prompt and get different outputs, compare the Evidence lists—do not “average” two conflicting drafts without reconciling sources.

---

## Optional Interactive Modules

If you turn this into a workshop or internal training page, these modules map cleanly to the learning objectives:

* Prompt Ladder Toggle (V0→V4 with side-by-side outputs)
* Token highlighter over the intake dump
* Constraint placement experiment (same content, different order)
* “Table builder” drag-and-drop normalization exercise
* Audit quiz (find the hidden constraint violations)
* Potluck triage sandbox (incremental chunking + QA loop)
