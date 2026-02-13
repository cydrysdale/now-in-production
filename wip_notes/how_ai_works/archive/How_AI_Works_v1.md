# How AI Works (Without the Hype): Marketing Potluck Project Management Edition

You’re about to coordinate a “launch-week” style internal **Marketing Potluck**: lots of opinions, conflicting constraints, unclear owners, and a messy intake dump scattered across Slack, email, calendars, Facilities, HR, and a sign-up doc.

This guide explains how AI works by watching that chaos turn into a **structured dataset** and a **clean action plan**—not through magic, but through **progressively better instructions** (V0 → V4).

> **TL;DR**
> Think of an AI model as a fast helper that **predicts the next useful words** based on the text you give it. It doesn’t “know” your office situation. Your prompt is the difference between “help!” and “here’s the checklist, the rules, and the format.”

---

## Table of contents

* [Worked Example: The Marketing Potluck Intake Dump](#worked-example-the-marketing-potluck-intake-dump)
* [Prompt Ladder: V0 → V4](#prompt-ladder-v0--v4)
* [1) Cold Open: Why V0 Produces Vibes, Not a Plan](#1-cold-open-why-v0-produces-vibes-not-a-plan)
* [2) What the Model Is Doing When It Responds](#2-what-the-model-is-doing-when-it-responds)
* [3) Tokens: The “Pieces” the Model Thinks With](#3-tokens-the-pieces-the-model-thinks-with)
* [4) Attention: Why Placement and Labels Matter](#4-attention-why-placement-and-labels-matter)
* [5) Context Window: The Size of the Prep Table](#5-context-window-the-size-of-the-prep-table)
* [6) From Vibes to Specs: Constraints and Non-Goals](#6-from-vibes-to-specs-constraints-and-non-goals)
* [7) Defining “Done”: Success Criteria and Output Format](#7-defining-done-success-criteria-and-output-format)
* [8) Structured Output: Turning the Dump Into a Dataset](#8-structured-output-turning-the-dump-into-a-dataset)
* [9) Planning vs Taste: Reducing Replacement Anxiety](#9-planning-vs-taste-reducing-replacement-anxiety)
* [10) Tools vs Model: The Kitchen Appliances Analogy](#10-tools-vs-model-the-kitchen-appliances-analogy)
* [11) Reliability: QA the Plan Like a Launch Checklist](#11-reliability-qa-the-plan-like-a-launch-checklist)
* [12) Limits and Failure Modes (Neutral, Practical)](#12-limits-and-failure-modes-neutral-practical)
* [Bonus Dungeon: Potluck Triage Sandbox](#bonus-dungeon-potluck-triage-sandbox)
* [Teaching Note](#teaching-note)
* [Prompt Template](#prompt-template)
* [QA Checklist](#qa-checklist)

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
- Is this Marketing-only or broader (“All Staff” invite sprawl)?
- Who is the DRI and who has decision rights on “theme” vs “simple”?
- How strict is “nut-free” (full potluck vs dedicated table)?
- Are crockpots allowed (Facilities says yes with constraints; Dylan says “no visible appliances”)?
```

</details>

> **Common confusion**
> “If the intake dump contains all the facts, the AI will use all the facts.”
> It only uses what it can *hold* and what it *notices*. That’s why prompt structure matters.

> **Reader checkpoint**
> **Question:** In this dump, name one place where two sources disagree.
> **Model answer:** Time (12–1 vs 12–2 vs 11:30–2:30) and location (Kitchen vs Conf Room B vs Atrium) conflict.
> **What to fix if you answered differently:** If you didn’t spot a conflict, re-scan for “sent later,” “already booked,” and “unavailable”—those are classic contradiction signals.

---

## Prompt Ladder: V0 → V4

The same “ask” gets upgraded from vague to precise. Each version is meant to produce **more reliable structure** and **fewer invented details**.

### V0 — Confusing but realistic

```text
Organize this marketing potluck and tell me what to do next.

[PASTE THE INTAKE DUMP]
```

**What changed?** Nothing. That’s the point.
**Why it’s weak:** “Organize” could mean theme ideas, menu ideas, calendar booking, or a checklist—so the model guesses.

---

### V1 — Role + goal

```text
You are a project coordinator for an internal Marketing Potluck.

Goal: Convert the intake dump into:
1) a normalized table of requests/constraints/conflicts, and
2) a short next-steps plan.

Use only the information in the intake dump.

[PASTE THE INTAKE DUMP]
```

**What changed:** You gave the model a **job title** and **two concrete deliverables**.
**Why it helps:** Models respond better when they can imitate a familiar pattern (coordinator → table + plan).

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

**What changed:** You added **boundaries**.
**Why it helps:** When information is missing, the model tends to “fill in.” Boundaries reduce that.

---

### V3 — Define “done” + strict output format

```text
You are a project coordinator for an internal Marketing Potluck.

Success criteria:
- No duplicate items.
- Every item has an Owner (or "Unassigned").
- Every item has a Due date/time (or "Unknown").
- Every item lists Dependencies and Risks (or "None noted").
- Every unclear item is flagged Needs_clarification = Yes.

Output exactly these sections:

1) Normalized intake table
Columns: ID, Category, Item, Source, Owner, Due, Dependencies, Risks, Needs_clarification, Confidence (High/Med/Low), Assumptions

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

**What changed:** You defined **what “good” looks like** and **the exact shape of the output**.
**Why it helps:** The model can now “hit a target,” not just “be helpful.”

---

### V4 — Context window + batching + unknowns policy

```text
You are a project coordinator for an internal Marketing Potluck.

Follow V3 exactly, plus:

Context handling:
- If the intake is too long, first return the schema + the first batch processed.
- Then stop and output: "READY FOR NEXT CHUNK" (do not continue).

Unknowns policy:
- Do not guess dates, availability, links, or owners.
- When ambiguous (e.g., "next Thursday", "Whole30-ish"), set Needs_clarification = Yes, Confidence = Low, and state the smallest possible assumption.

[PASTE THE INTAKE DUMP]
```

**What changed:** You planned for the model’s **limited working space** and forced it to **surface unknowns** instead of hiding them.

> **Interactive (coming soon)**
> **Prompt Ladder Toggle:** A widget that lets readers switch V0→V4 and preview how outputs become more structured.
> **What you should notice:** As you add constraints + format, the output shifts from “general advice” to “actionable coordination artifacts.”

---

## 1) Cold Open: Why V0 Produces Vibes, Not a Plan

**Explain it like you’re 12:**
If you tell a coworker, “Handle the potluck,” they’ll probably reply with random helpful-sounding ideas. Not because they’re bad—because you didn’t tell them what “handle” means.

AI behaves similarly: V0 is basically you yelling, “Make it happen!” at a pile of sticky notes.

> **TL;DR**
> V0 fails because it asks for *helpfulness*, not *a specific deliverable*.

**Make it sharper (for work):**
V0 invites the model to choose *its own definition* of “organize.” In the potluck dump, that can accidentally drift into:

* inventing a final time/location,
* inventing a theme,
* writing invite copy,
* or ignoring hard constraints like **nut allergy** and **Facilities rules**.

In project terms: V0 has **no acceptance criteria**, so you get an output that’s hard to verify.

> **Common confusion**
> “If I’m vague, the AI will ask clarifying questions.”
> Sometimes it does—but often it guesses, because guessing also “looks helpful.”

> **Reader checkpoint**
> **Question:** What’s the single biggest risk if the model guesses in this potluck scenario?
> **Model answer:** Safety/compliance risks—e.g., mishandling nut allergy or Facilities constraints.
> **What to fix if you answered differently:** If you focused only on “messy planning,” zoom out: unclear prompts increase the chance of missing *hard constraints*, not just making an ugly plan.

---

## 2) What the Model Is Doing When It Responds

**Explain it like you’re 12:**
Imagine a super-fast autocomplete that has read a huge amount of writing. It doesn’t “know” your office. It looks at what you wrote and tries to continue with words that fit.

So if you paste a messy potluck dump, it tries to produce the kind of response that usually comes after that—like a plan, a table, or advice—depending on your prompt.

**Make it sharper (for work):**
A modern AI text model is best understood as a system that **predicts the next chunk of text** based on the text it can see right now. That means:

* It’s great at **summarizing, organizing, reformatting, and drafting structure**.
* It is not inherently a **truth checker** or a **calendar reader**.
* It can sound confident even when it’s guessing, because confidence is a writing style—not a fact.

In our potluck story, the model is like a coordinator who can:

* turn the dump into a clean list of conflicts,
* propose a checklist,
* draft questions for Facilities/HR,
  but cannot truly know whether Conf Room B is booked unless that fact is provided (or a connected tool checks it).

> **Common confusion**
> “It understands like a person understands.”
> It can *sound* like it understands because it’s good at language patterns. But the safest mental model is: **it predicts plausible text from context**.

> **Reader checkpoint**
> **Question:** What is the model actually “using” to create its answer?
> **Model answer:** Only the text you gave it (the prompt + the intake dump) and patterns learned from training—not your company’s real calendar or policies unless provided.
> **What to fix if you answered differently:** If you thought it “knows your tools,” separate *writing a plan* from *executing the plan*.

> **Sidequest (optional)**
> **A helpful reframe for creative professionals:**
> Think of AI like a **production assistant for structure**: it can label bins, sort footage, and build a rough cut timeline—but it doesn’t decide the story’s meaning. In potluck terms: it can make the spreadsheet, but it can’t taste the chili.

---

## 3) Tokens: The “Pieces” the Model Thinks With

**Explain it like you’re 12:**
The model doesn’t read whole paragraphs the way you do. It reads in small pieces—like word chunks. If your notes are messy, those pieces don’t clearly “snap together,” so the model may connect the wrong things.

**Make it sharper (for work):**
Those chunks are often called **tokens** (think: *word pieces*). Why you should care:

* The model counts and processes your prompt in tokens.
* Clear labels (“Facilities guidance,” “HR guidance”) help it keep related pieces together.
* Ambiguous phrases like “next Thursday” are tiny token chunks with big real-world meaning—and the model cannot infer the right date unless you specify it.

**Potluck example:**
“Next Thursday” is a classic trap: it’s short, but it’s not a usable schedule input unless you add a date.

> **Common confusion**
> “Tokens are words.”
> Not exactly. Tokens are often **parts of words**. The practical takeaway is simpler: **be consistent with labels and structure**, because the model is sensitive to small wording differences.

> **Reader checkpoint**
> **Question:** In the intake dump, which short phrase creates a big scheduling hole?
> **Model answer:** “Next Thursday.”
> **What to fix if you answered differently:** If you picked “Lunch-ish,” that’s also valid. The key is noticing: **short phrases can hide big ambiguity**.

> **Interactive (coming soon)**
> **Token Highlighter:** Hover over the intake dump and see it break into “word chunks.”
> **What you should notice:** Ambiguous chunks (“Whole30-ish”, “Lunch-ish”, “next Thursday”) look small but drive most of the plan’s uncertainty.

---

## 4) Attention: Why Placement and Labels Matter

**Explain it like you’re 12:**
If you hand someone a messy pile of notes, they’ll pay most attention to what’s on top and what’s repeated. AI is similar: where you put rules and what you repeat affects what it focuses on.

**Make it sharper (for work):**
Models don’t treat every line equally. A practical rule: **important constraints should be early, explicit, and repeated in the output format**.

**Potluck example:**
If the nut allergy and Facilities constraints appear late or only once, you increase the chance they get ignored in the “next steps.”

**A placement upgrade you can make without changing V0→V4:**

* Put **rules first**
* Then the **intake dump**
* Then the **output format**

> **Common confusion**
> “If it’s included anywhere, it will be followed.”
> Inclusion is not the same as emphasis. Models are pattern-followers; they weight what looks like “the rules.”

> **Reader checkpoint**
> **Question:** Name one “must not miss” constraint you would place near the top of the prompt.
> **Model answer:** Severe nut allergy / avoid cross-contamination; Facilities: no open flames; HR: voluntary participation; no budget.
> **What to fix if you answered differently:** If you picked something like “photos should look nice,” that’s fine—but distinguish **hard constraints** (safety/policy) from **preferences** (presentation).

> **Interactive (coming soon)**
> **Constraint Placement Experiment:** Two prompts with identical content but different order.
> **What you should notice:** When constraints are buried, the model’s plan becomes more “generic” and more likely to miss safety/policy items.

---

## 5) Context Window: The Size of the Prep Table

**Explain it like you’re 12:**
Picture a prep table in the kitchen. You can only fit so many ingredients on it at once. If you dump too much on the table, things fall off—and you forget they were there.

AI has a “prep table” too. It can only work with a limited amount of text at one time.

**Make it sharper (for work):**
That “prep table” is the model’s **context window**: the text it can consider at once (your instructions + the intake). If the dump is large:

* the model may miss or compress details,
* it may “smooth over” contradictions,
* or it may prioritize earlier parts.

That’s why V4 includes a batching rule: **schema first, then process in chunks**.

> **Common confusion**
> “If I already pasted it earlier in the chat, it remembers.”
> Not reliably. If it’s not in the current working text, it may be effectively invisible.

> **Reader checkpoint**
> **Question:** If your intake dump is huge, what is the safest first output to request?
> **Model answer:** The schema (columns/fields) and the first processed batch, with a clear stop point.
> **What to fix if you answered differently:** If you said “a complete plan anyway,” add a safeguard: require **batching + ‘READY FOR NEXT CHUNK’** so it doesn’t silently drop items.

> **Sidequest (optional)**
> **Why “schema-first” is underrated:**
> A schema is like setting up labeled bins before unpacking boxes. Once bins exist, you can process the dump in parts without losing consistency.

---

## 6) From Vibes to Specs: Constraints and Non-Goals

This is where we move from V1 to **V2**.

### V2 prompt (again, as the “upgrade point”)

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

**Explain it like you’re 12:**
When you tell someone “help,” they might start doing extra stuff you didn’t ask for. Non-goals are like saying: “Don’t decorate the room yet—just make the checklist.”

**Make it sharper (for work):**
Non-goals reduce two common failure modes:

1. **Scope creep:** The model starts generating things you didn’t request (theme ideas, copy).
2. **Gap-filling:** The model invents missing details (a date, a room, a decision maker).

In the potluck dump, there are many missing/uncertain items:

* “Next Thursday” (no date)
* Room B “already booked” (but no link/time range)
* Atrium unavailable (Finance offsite)
  The model cannot resolve these without guessing—so we explicitly ban guessing.

> **Common confusion**
> “Non-goals are negative; they make the model less helpful.”
> In real coordination work, being “helpful” without boundaries creates rework. Non-goals make the output **safe to act on**.

> **Reader checkpoint**
> **Question:** Why is “Do NOT guess missing dates/owners” especially important here?
> **Model answer:** Because multiple sources conflict; guessing produces a plan that looks clean but is wrong—and could cause safety/policy issues.
> **What to fix if you answered differently:** If you focused only on “accuracy,” add “trust”: a clearly marked unknown is easier to resolve than a confident guess.

---

## 7) Defining “Done”: Success Criteria and Output Format

This is where we move from V2 to **V3**.

### V3 prompt (the reliability jump)

```text
You are a project coordinator for an internal Marketing Potluck.

Success criteria:
- No duplicate items.
- Every item has an Owner (or "Unassigned").
- Every item has a Due date/time (or "Unknown").
- Every item lists Dependencies and Risks (or "None noted").
- Every unclear item is flagged Needs_clarification = Yes.

Output exactly these sections:

1) Normalized intake table
Columns: ID, Category, Item, Source, Owner, Due, Dependencies, Risks, Needs_clarification, Confidence (High/Med/Low), Assumptions

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

**Explain it like you’re 12:**
Success criteria are like the potluck rules on a sign: “Every dish must have an ingredient label.” Without the sign, people guess, and you get chaos.

**Make it sharper (for work):**
V3 adds two powerful things:

1. **Acceptance checks (“done means…”)**
   These are the same as launch-week requirements: every task needs an owner, due date, and risks.

2. **A strict output shape**
   You’re not asking for “a plan.” You’re asking for:

* a normalized table (your dataset),
* the top actions (your action list),
* the questions (your unblockers).

This makes it easier to:

* scan,
* QA,
* paste into a doc/spreadsheet,
* and compare results across runs.

> **Common confusion**
> “More formatting makes it rigid.”
> Coordination work benefits from rigidity. The creativity lives in *decisions*, not in whether your task list has consistent columns.

> **Reader checkpoint**
> **Question:** What part of V3 makes it easier to catch missing information?
> **Model answer:** The required fields (Owner/Due/Dependencies/Risks) plus Needs_clarification.
> **What to fix if you answered differently:** If you said “the questions section,” that’s also correct—but notice why: it forces unknowns to surface.

---

## 8) Structured Output: Turning the Dump Into a Dataset

**Explain it like you’re 12:**
A dataset is just a neat table. Instead of sticky notes everywhere, you put each note into a row with the same columns.

**Make it sharper (for work):**
“Normalized” here means: one row per distinct issue/request/constraint, with duplicates merged and conflicts flagged.

Below is an example of what “Normalized intake table” could look like for the potluck dump. Notice:

* Conflicts aren’t “resolved”—they’re **marked**.
* Missing owners/dates are **left unknown** instead of invented.
* Hard constraints are explicit.

### Example: Normalized intake table (excerpt)

| ID | Category         | Item                                                                                          | Source        | Owner                                       | Due     | Dependencies                      | Risks                                | Needs_clarification | Confidence | Assumptions                                     |
| -: | ---------------- | --------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------- | ------- | --------------------------------- | ------------------------------------ | ------------------- | ---------- | ----------------------------------------------- |
|  1 | Ownership        | Confirm DRI for potluck coordination and decision rights (theme vs “simple”)                  | A, L          | Unassigned                                  | Unknown | Tara + Dylan alignment            | Conflicting directions → rework      | Yes                 | High       | None                                            |
|  2 | Schedule         | Resolve actual date for “next Thursday” (write as calendar date)                              | A, C, L       | Unassigned                                  | Unknown | Tara confirmation                 | Wrong date communicated              | Yes                 | Med        | “Next Thursday” unspecified                     |
|  3 | Schedule         | Resolve time window (12–1 vs 12–2 vs 11:30–2:30)                                              | C, D, E, L    | Unassigned                                  | Unknown | Tara + Dylan                      | People show up at wrong time         | Yes                 | High       | None                                            |
|  4 | Location         | Confirm final location (Kitchen vs Conf Room B vs Atrium)                                     | C, D, E, I, L | Unassigned                                  | Unknown | Finance + Facilities constraints  | Space unavailable; Facilities issues | Yes                 | High       | Intake states Room B booked; Atrium unavailable |
|  5 | Safety           | Severe nut allergy: establish nut-free policy + cross-contamination handling                  | A, F, L       | Unassigned                                  | Unknown | Raj guidance + Facilities         | Health risk                          | Yes                 | High       | None                                            |
|  6 | Policy           | HR: keep participation voluntary; avoid pressure                                              | H             | Unassigned                                  | Unknown | Messaging owner                   | “Mandatory fun” backlash             | No                  | High       | None                                            |
|  7 | Facilities       | Facilities rules: no open flames; no cords across walkways; crockpots constraints             | G             | Unassigned                                  | Unknown | Facilities confirmation if needed | Safety hazards                       | No                  | High       | None                                            |
|  8 | Food constraints | Avoid strong-smelling foods (seafood flagged)                                                 | A, G          | Unassigned                                  | Unknown | Sign-up guidance                  | Odor complaints                      | No                  | Med        | “Strong-smelling” subjective                    |
|  9 | Labeling         | Allergen labeling required; heat level labeled; label template exists                         | A, D, F       | Becky (template) / Unassigned (enforcement) | Unknown | Sign-up doc updates               | Allergy/complaints if missing        | Yes                 | High       | Becky brings label template                     |
| 10 | Exec requirement | Ensure at least one gluten-free + dairy-free “safe” option; interpret “Whole30-ish” carefully | K             | Unassigned                                  | Unknown | Exec clarification                | Exec dissatisfaction; dietary risk   | Yes                 | Med        | “Whole30-ish” not defined                       |
| 11 | Source of truth  | Locked attachment potluck_notes_FINAL.xlsx blocks info                                        | C             | Unassigned                                  | Unknown | Access request                    | Missing logistics                    | Yes                 | High       | File access controlled                          |
| 12 | Menu conflict    | “Dessert (almond flour?)” conflicts with nut-free need                                        | F             | Unassigned                                  | Unknown | Nut policy definition             | Allergy risk                         | Yes                 | High       | Almond flour implies tree nut                   |

> **Common confusion**
> “If the output is a table, it must be correct.”
> A table is a *container*, not a guarantee. It makes mistakes easier to see—and easier to fix.

> **Reader checkpoint**
> **Question:** In the table above, what does “Needs_clarification = Yes” prevent?
> **Model answer:** It prevents the plan from pretending uncertainty doesn’t exist. It forces a follow-up before execution.
> **What to fix if you answered differently:** If you thought it’s “just a tag,” connect it to action: it’s a **stop sign** for decisions.

> **Interactive (coming soon)**
> **Table Builder:** Drag “intake lines” into categories (Schedule, Location, Safety, Policy, etc.) and watch a normalized table populate.
> **What you should notice:** The hardest part is not typing—it’s deciding what counts as a distinct item vs a duplicate.

---

## 9) Planning vs Taste: Reducing Replacement Anxiety

**Explain it like you’re 12:**
AI can help you make a checklist, but it can’t decide what food tastes good or what your team will enjoy. That part is still people.

**Make it sharper (for work):**
In creative organizations, the fear is often: “If AI can write, does it replace me?”
This potluck workflow shows a healthier boundary:

* AI is strong at **operations structure**: organizing inputs, listing risks, drafting questions, formatting tables.
* Humans own **taste and judgment**: what “special” means with no budget, how strict “Whole30-ish” should be, how to handle office dynamics.

In other words: AI can be your **process assistant**, not your creative replacement.

> **Common confusion**
> “If AI can create an action plan, it can manage the event.”
> An action plan is not execution. Execution requires authority, context, relationships, and verification.

> **Reader checkpoint**
> **Question:** Name one decision from the intake dump that should *not* be delegated to the AI.
> **Model answer:** Defining nut-free strictness (full potluck vs dedicated table) and interpreting “Whole30-ish.”
> **What to fix if you answered differently:** If you chose “who is the DRI,” that’s also correct—AI can propose, but leadership assigns.

---

## 10) Tools vs Model: The Kitchen Appliances Analogy

**Explain it like you’re 12:**
The model is like someone who can write a recipe. A tool is like the oven. Writing “Bake at 350°F” doesn’t actually heat the oven.

**Make it sharper (for work):**
A model-only AI can:

* draft the plan,
* format a table,
* list questions.

But it cannot truly:

* check whether Conf Room B is booked,
* see who accepted the calendar invite,
* open the locked spreadsheet attachment,
  unless your AI product is connected to those tools.

So, when a model says “Room B is booked,” it’s only repeating what you gave it—or guessing.

> **Common confusion**
> “It said it checked the calendar.”
> Unless you’re using a tool-connected system (and you can verify it did), assume it did **not** check anything external.

> **Reader checkpoint**
> **Question:** What’s the safest way to phrase an instruction when external verification is required?
> **Model answer:** “Do not verify; instead, list what must be verified and by whom.”
> **What to fix if you answered differently:** If you wrote “verify the room,” add the constraint: “If you cannot access the calendar, mark as Needs_clarification.”

> **Sidequest (optional)**
> **When tool-connected AI is worth it:**
> If your workflow repeatedly depends on calendars, docs, or tickets, tool access can turn “plans” into “updates.” Even then, keep the habit: require the AI to cite what it saw (source + timestamp) or mark unknown.

---

## 11) Reliability: QA the Plan Like a Launch Checklist

**Explain it like you’re 12:**
Before the potluck starts, you double-check: “Do we have plates? Is anything dangerous? Are the rules clear?” AI plans need the same double-check.

**Make it sharper (for work):**
Treat the model output like a first draft from a junior coordinator: useful, but needs QA.

Here are QA checks that map directly to the intake dump:

* **Contradictions surfaced?** Time/location conflicts flagged.
* **Hard constraints included?** Nut allergy, Facilities rules, HR policy, no budget, no alcohol.
* **Unknowns marked?** “Next Thursday,” “Whole30-ish,” owner/decision rights.
* **No invented details?** No made-up room availability, no assumed date.
* **Dependencies realistic?** E.g., can’t finalize sign-up guidance without nut policy.
* **No duplicate items?** “Allergen labeling” from multiple sources merged.

### A QA prompt add-on you can append to V3/V4

```text
QA pass:
- List any contradictions you see.
- List any missing Owners/Due dates.
- List any items that risk safety/policy violations.
- List any assumptions you made (keep them minimal).
- If you see any invented details, call them out as "Potential hallucination".
```

> **Common confusion**
> “If I ask the model to QA itself, it will catch everything.”
> Self-QA helps, but it’s still the same brain checking its own work. Use it as a *second sweep*, not a guarantee.

> **Reader checkpoint**
> **Question:** What is one “impossible” combination in the dump that the plan must address explicitly?
> **Model answer:** “No visible appliances” (presentation rule) conflicts with crockpot use (common potluck item) while Facilities allows crockpots with constraints.
> **What to fix if you answered differently:** If you chose “Atrium unavailable,” that’s a good catch too. The key is: **flag conflicts; don’t silently pick a side**.

> **Interactive (coming soon)**
> **Audit Quiz:** You’re shown a sample plan with 6 hidden issues. Click the ones that violate the intake constraints.
> **What you should notice:** The most dangerous errors are subtle (missing allergy handling, assuming a room is free).

---

## 12) Limits and Failure Modes (Neutral, Practical)

**Explain it like you’re 12:**
AI tries to be helpful. When it doesn’t know something, it may guess a “reasonable-sounding” answer. That’s not evil—it’s what it’s built to do: keep the text going.

**Make it sharper (for work):**
Common failure modes in coordination tasks:

1. **Hallucination (gap-filling)**
   Example: inventing the exact date for “next Thursday” or deciding the location.

2. **Ambiguity collapse**
   Example: “Whole30-ish” gets treated as a strict diet without confirmation.

3. **Instruction conflict**
   Example: “Keep it low lift” vs “Theme Experience” rules. The model may pick one unless forced to list both.

4. **Overconfidence tone**
   Example: confident language even when Confidence should be low.

**Mitigations (still potluck-themed):**

* Add an unknowns policy (V4).
* Require Confidence and Assumptions columns.
* Force questions grouped by stakeholder.
* Separate hard constraints (Facilities/HR/safety) from preferences (presentation).

> **Common confusion**
> “If it hallucinates, it’s lying.”
> It’s not deciding to deceive. It’s continuing text in a plausible way. Your job is to structure the task so “plausible” isn’t enough.

> **Reader checkpoint**
> **Question:** What single instruction best reduces hallucination in planning work?
> **Model answer:** “Do not guess; mark unknowns and ask questions.”
> **What to fix if you answered differently:** If you said “be more specific,” you’re right—but specificity should include a *policy for unknowns*, not just more detail.

---

## Bonus Dungeon: Potluck Triage Sandbox

> **Sidequest (optional)**
> This is for readers who want practice without stakes.

> **Interactive (coming soon)**
> **Sandbox: From Dump to Plan**
>
> * Step 1: You see the intake dump and V0 prompt.
> * Step 2: You upgrade it to V1, V2, V3, V4 via toggles (Role, Non-goals, Output format, Unknowns policy).
> * Step 3: The sandbox shows how the output changes.
>   **What you should notice:**
> * Adding output format improves usefulness faster than adding more “please.”
> * “Do not guess” prevents confident nonsense.
> * Putting constraints first improves compliance with safety/policy items.

---

## Teaching Note

The core mental model to keep:

**AI is a powerful “pattern coordinator,” not an all-seeing manager.**
It can reorganize what you give it into a clean plan. It cannot reliably supply missing truth.

**Memorable analogy:**
**The model is the coworker who can instantly sort sticky notes into labeled bins—but it can’t leave the room to check the calendar.**

> **TL;DR**
> Your prompt is not a wish—it’s a spec.
> If you want reliable output, you must define: context, constraints, format, and checks.

### A short checklist for writing effective instructions

1. **Role:** Who is the model pretending to be? (Coordinator, QA auditor, note-taker)
2. **Goal:** What is the deliverable? (Table + action list + unblock questions)
3. **Constraints:** What must be followed? (Facilities, HR, allergies, budget)
4. **Non-goals:** What should it *not* do? (No themes, no copy, no guessing)
5. **Output format:** What exact sections/columns should appear?
6. **Unknowns policy:** What happens when data is missing or contradictory?
7. **Acceptance checks:** How will you verify it’s usable? (No duplicates, owners present, risks listed)

---

## Prompt Template

Copy/paste and adapt this for any coordination mess (potluck, launch week, event planning, cross-team intake).

```text
You are a project coordinator.

Context:
- [1–3 sentences: what this project is, why it matters, what the intake represents]

Goal:
- Convert the intake into (1) a normalized table and (2) a prioritized next-steps plan.

Constraints (must follow):
- [Hard constraints: safety/policy/legal/brand requirements]
- [Operational constraints: time, budget, tools, approvals]

Non-goals (must not do):
- Do NOT generate creative content/copy.
- Do NOT guess missing facts (dates, owners, availability, links).
- Do NOT resolve contradictions silently.

Output format (exact):
1) Normalized intake table
Columns: ID, Category, Item, Source, Owner (or "Unassigned"), Due (or "Unknown"),
Dependencies, Risks, Needs_clarification (Yes/No), Confidence (High/Med/Low), Assumptions

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

* **Coverage:** Did it include every major source area (Slack, email, calendar, Facilities, HR, exec notes)?
* **No duplicates:** Are repeated issues merged into one row with multiple sources?
* **Owners present:** Every row has an owner or “Unassigned.”
* **Dates honest:** No invented dates/times/links. Unknowns are labeled “Unknown.”
* **Conflicts flagged:** Any contradiction is marked Needs_clarification and listed explicitly.
* **Hard constraints respected:** Safety/policy constraints are surfaced early and reflected in next actions.
* **Assumptions minimized:** Assumptions are small, explicit, and reviewable.
* **Questions actionable:** Questions are grouped by stakeholder and can be sent as-is.

---

### Reference files used for this guide

* AI Guide Plan (outline + prompt ladder reference): 
* Marketing Potluck Intake Dump (worked example input): 
