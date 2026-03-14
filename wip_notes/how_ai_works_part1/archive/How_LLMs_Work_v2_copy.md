# How LLMs Work (Without the Hype) — V2 Copy (Section-by-Section)

Source: `guides/how-llms-work-v2.html`  
Purpose: editable copy only (no HTML/layout), to iterate section-by-section.

---

## 1) Introduction: How LLMs Generate Text (and Why Prompts Matter)

An LLM is like a very fast autocomplete: it writes a response **one small chunk at a time**. Each time it adds a chunk, it looks at the text so far and guesses what chunk should come next.

**Make it sharper**  
Under the hood, the model scores many possible “next chunks,” then the system *chooses* one and repeats. That choosing step is why the same prompt can feel stable (repeatable) or varied (different phrasing) depending on settings.

**Why prompts matter**  
The model’s default job is to produce a *coherent continuation*. If your prompt is vague, “coherent” often means it picks one interpretation of messy info and keeps going. If your prompt is a spec (rules + format + checks), “coherent” means it produces something you can audit.

**TL;DR**  
The model predicts “what text should come next,” chunk‑by‑chunk. Your prompt supplies **instructions** (what to do) and **context** (what to use). Better specs don’t make the model “smarter”—they make the output easier to verify.

Nerd note: the model outputs probabilities; decoding settings (e.g., greedy vs sampling with knobs like temperature/top‑p) determine which chunks get selected.

**Two separations that prevent workplace confusion**
- **Model vs tools**: drafting a plan vs verifying reality
- **Instructions vs context**: what to do vs what to use

**Running example**  
We’ll use one messy “Marketing Potluck” intake dump to practice extraction, normalization, and QA—without teaching potluck logistics.

**Reader checkpoint**  
If someone says “the model knows our calendar,” what’s the safer correction?  
Model answer: It only knows what’s in the prompt/context unless it’s connected to a verified tool.

*Visual aid (placeholder): score next chunks → choose one → append → repeat.*

### Sidequest (optional): Micro‑Glossary

- **Model**: the text generator producing output
- **Prompt**: your instructions + any pasted context
- **Token / chunk**: a small piece of text the model predicts
- **Context window**: how much text it can consider at once
- **Attention**: a linking mechanism that connects parts of the input during generation
- **Decoding**: how the system chooses the next chunk from many candidates
- **Temperature / top‑p**: settings that affect how strict vs varied “choosing” is (when sampling is used)
- **Hallucination**: confident-sounding text not supported by the provided sources

Important nuance: “temperature” alone isn’t “randomness.” You typically get run‑to‑run variation when the system uses *sampling*.

---

## 2) Running Example Dataset: A Messy Intake Dump

This intake dump is the only “data” we reuse throughout the guide. It’s intentionally contradictory—like real workplace intake.

**Plain-language**  
Imagine ten coworkers left sticky notes on a table. The model can help sort the sticky notes into bins. It cannot magically know which sticky note is “the real plan.”

**Make it sharper**  
Our job is *not* to resolve the potluck. Our job is to turn this messy text into:  
(1) a normalized list of constraints/conflicts/requests, and (2) the questions/actions needed to unblock a real human decision.

**Why this happens**  
Contradictory input is normal in workplace text. The model is biased toward producing one coherent story unless you require an output format that can hold uncertainty (like “Needs clarification”).

**What to notice before you read the dump**
- **Contradictions**: time, location, and “which invite is authoritative”
- **Hard constraints**: Facilities rules, HR policy, nut allergy
- **Missing decision rights**: who decides “simple vs vibe”
- **Loaded words**: “next Thursday,” “lunch‑ish,” “Whole30‑ish,” “special,” “low lift”

### Sidequest (optional): Two useful terms

- **DRI** = single-threaded owner (one person accountable).
- **Normalize** = turn messy notes into consistent rows without silently resolving conflicts.

Tip: use the Inventory / TOC to jump between sections.

**Interactive (present): Highlight ambiguity hotspots** (e.g., “next Thursday”, “lunch‑ish”, “Whole30‑ish”)

**Interactive (planned): Highlight hard constraints** (Facilities / HR / allergy)  
Coming soon: a second highlight mode so readers learn to separate “must” constraints from “nice-to-have” preferences.

### Intake dump (copy/paste friendly)

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

**Common confusion**  
“If the intake contains all the facts, the model will use all the facts.”  
Safer mental model: it only uses what’s in the provided context, and it tends to follow what looks like “instructions” more reliably than what looks like “random notes.”

**Reader checkpoint**  
Name one hard constraint and one preference.  
Model answer: Hard = no open flames / nut allergy / voluntary participation. Preference = looks nice for photos / “vibe” standards.

---

## 3) Prompting: Turning Vague Intent into a Spec (V0 → V4)

**Plain-language**  
If you tell a coworker “handle the potluck,” they’ll guess what you mean. The model does the same. The ladder below upgrades your request from “helpful vibes” to “auditable output.”

**Make it sharper**  
Each version narrows what “a good answer” can be: role → deliverables → boundaries → schema/evidence → chunking/unknowns policy.

### V0

**Prompt (V0)**
```text
Organize this marketing potluck and tell me what to do next.

[PASTE THE INTAKE DUMP]
```

**Why it’s weak**  
“Organize” could mean: pick a location, resolve conflicts, write invites, invent owners, propose food rules—so the model guesses what kind of “help” you want.

**Typical failure (example excerpt)**
```text
Plan:
- Host the event in the Atrium from 11:30–2:30.
- Enforce “no plastic” for photos.
- Ask everyone to avoid nuts.
```

**Why this happens**  
A “clean plan” looks like a complete answer. Unless you require a place to store uncertainty, the model often picks one interpretation and continues.

### V1

**Prompt (V1)**
```text
You are a project coordinator.

Goal: Convert the intake dump into:
1) a normalized table of requests/constraints/conflicts, and
2) a short next-steps plan.

Use only the information in the intake dump.

[PASTE THE INTAKE DUMP]
```

**Output excerpt (what “better” looks like)**
```text
Normalized intake (excerpt):
- Schedule: “next Thursday” has no date (sources: A, C) → unclear
- Location conflict: Kitchen vs Conf Room B vs Atrium (sources: C, D, E, I) → unclear
- Hard constraints: Facilities rules + HR rules + nut allergy (sources: G, H, A) → must-follow

Next steps (excerpt):
1) Confirm DRI + decision rights (theme vs simple)
2) Confirm date + time window
3) Confirm location that is actually available
```

**Why it improves**  
You gave the model a job and two deliverables. That nudges it toward “work artifacts” (lists/tables) instead of “advice.”

**Common confusion**  
V1 can still sound confident while making silent choices. It’s better structure—but not yet a tight acceptance test.

### V2

**Prompt (V2)**
```text
You are a project coordinator.

Goal: organize the intake into a structured plan.

Non-goals:
- Do NOT propose themes, menus, or “vibe” ideas.
- Do NOT write invite copy or announcements.
- Do NOT guess missing dates, owners, or availability.

If something is unclear, mark it as unclear.

[PASTE THE INTAKE DUMP]
```

**Output excerpt (what “safer” looks like)**
```text
Unclear items (flagged):
- Actual date for “next Thursday” → needs clarification
- Time window (12–1 vs 12–2 vs 11:30–2:30) → needs clarification
- Location (Kitchen vs Conf Room B vs Atrium) → needs clarification

Boundaries respected:
- No theme proposals
- No invite copy
- No invented owners/dates
```

**Why it improves**  
Non-goals block the model’s most tempting “helpful patterns” (writing copy, inventing decisions). You’re teaching it what not to do.

### V3

**Prompt (V3)**
```text
You are a project coordinator.

Success criteria:
- Merge clear duplicates; if uncertain, keep both and note "Possible duplicate of ID X" in Risks.
- Every item has an Owner (or "Unassigned").
- Every item has a Due date/time (or "Unknown").
- Every item lists Dependencies and Risks (or "None noted").
- Every unclear item is flagged Needs_clarification = Yes.
- Every item includes Evidence pointing to one or more intake sections (A–L).

Optional reliability upgrade (recommended for safety/policy items):
- Add a Quote field (≤1 sentence) copied verbatim for safety/policy constraints.

Output exactly:
1) Normalized intake table (columns: ID, Category, Item, Evidence, Owner, Due, Dependencies, Risks, Needs_clarification, Confidence, Assumptions)
2) Top 10 next actions (Priority, Action, Owner, ETA band)
3) Questions to unblock (grouped by stakeholder)

Rules:
- Use only the intake dump.
- Do not invent.
- If contradictory, list both and mark Needs_clarification.

[PASTE THE INTAKE DUMP]
```

**Output excerpt (Evidence forces honesty)**
```text
Table row (excerpt):
ID: 2
Category: Location
Item: Atrium cannot be used (Finance offsite).
Evidence: I (and conflicts with Invite #2: E)
Needs_clarification: No
Confidence: High

Table row (excerpt):
ID: 4
Category: Schedule
Item: Time window conflicts (12–1 vs 12–2 vs 11:30–2:30).
Evidence: C, D, E
Needs_clarification: Yes
Confidence: High
```

**Why this is the big upgrade**  
**Why this happens:** A schema narrows what the model can output. Evidence/needs-clarification fields create a “slot” for uncertainty and force traceability instead of smooth guessing.  
**Common confusion:** Evidence doesn’t guarantee correctness. It guarantees you can audit where the claim came from.

### V4

**Prompt (V4)**
```text
You are a project coordinator.

Follow V3 exactly, plus:

Chunking policy:
- If the intake is too long, first output the full schema and process only sections A–F.
- Then stop and output: "READY FOR NEXT CHUNK: G–L".

Unknowns policy:
- Do not guess dates, availability, links, or owners.
- When ambiguous (e.g., "next Thursday", "Whole30-ish"), set Needs_clarification = Yes,
  Confidence = Low, and state the smallest possible assumption.

[PASTE THE INTAKE DUMP]
```

**Output excerpt (safe stopping point)**
```text
Schema:
ID | Category | Item | Evidence | Owner | Due | Dependencies | Risks | Needs_clarification | Confidence | Assumptions

Processed sections: A–F
READY FOR NEXT CHUNK: G–L
```

**Why this happens**  
The model can only consider so much text at once. Chunking prevents silent dropping and forces a visible “handoff” between batches.

**Reader checkpoint**  
Which ladder step is the first time you can realistically QA the output like a spreadsheet?  
Model answer: V3, because the schema + Evidence + needs-clarification fields become an acceptance test.

**Interactive (coming soon)**  
Add a “Show output excerpts” toggle that expands/collapses the excerpts above. The teaching moment is seeing the same input become more auditable as constraints and format tighten.

---

## 4) Failure Pattern: Ambiguity Collapse

**Plain-language**  
When the notes disagree, a vague request often produces one clean-sounding answer. Clean is comforting. Clean is not the same as correct.

**Make it sharper**  
This failure shows up when your prompt doesn’t define how to handle contradictions. The model “chooses a story” because that’s what finished writing usually looks like.

**Why this happens**  
The model is optimized to produce coherent continuations. Without an explicit slot for uncertainty (like “Needs clarification”), it tends to collapse multiple options into one narrative.

**Example 1: Location**
```text
Bad: “We’ll do the Atrium 11:30–2:30.”
```
Ignores the Finance note that Atrium is unavailable.

```text
Good: “Atrium is unavailable (Finance). Location is contested. Mark Needs_clarification and ask stakeholders.”
```
Looks messier. Is safer to act on.

**Example 2: Time window**
```text
Bad: “Lunch is 12–2.”
```
Collapses 12–1 vs 12–2 vs 11:30–2:30 into one guess.

```text
Good: “Time conflicts across sources. Needs_clarification=Yes; list options and ask Tara/Dylan to confirm.”
```
You can’t schedule people on a guess.

**Reader checkpoint**  
When the input contains contradictions, should the safe output get cleaner or messier?  
Model answer: Messier (more explicit), because it must preserve uncertainty until a human resolves it.

---

## 5) Tokens & Decoding: How Text Actually Gets Generated

**Plain-language**  
The model doesn’t write a whole answer in one gulp. It writes tiny pieces in sequence—like placing one tile at a time to make a mosaic.

**Make it sharper**  
Those tiny pieces are often called **tokens** (think “text chunks”). For each next chunk, the model produces a ranked set of candidates. **Decoding** is the choosing rule the system uses to pick which chunk gets appended next.

**Why this happens**  
Because the system chooses chunk-by-chunk, small changes in your wording and formatting can steer the continuation. If your prompt looks like a table schema, the continuation often looks like rows. If your prompt looks like “give advice,” the continuation often looks like confident advice.

**Potluck lens: a tiny toy example**
```text
Input snippet:
Location: Kitchen
Time: 12–1
Hard constraints: nut allergy, no open flames, voluntary participation

What tends to happen next:
- The model continues with more structured fields (Owner, Risks, Questions)
…if you asked for a table/schema.
```
You don’t need to know token math to use this. You just need the habit: “shape the output you want.”

**Common confusion**  
Tokens are not exactly words, and “temperature” is not automatically “randomness.” The practical takeaway: strict schemas reduce run‑to‑run variation because they narrow what counts as an acceptable continuation.

**Reader checkpoint**  
If you want the output to be stable and easy to QA, what do you change first: “be more detailed” or “require a schema”?  
Model answer: Require a schema (output format). Details help, but format creates a target the model can reliably hit.

### Sidequest (optional): Decoding knobs in one analogy

Imagine the model has a shortlist of “next chunk” options.
- **Greedy** choosing = always pick the top option (more repeatable)
- **Sampling** = sometimes pick a different high-quality option (more variety)
- **Temperature** = how adventurous sampling is
- **Top‑p** = only sample from the most plausible slice of options

**Interactive (placeholder): Temperature slider**  
Planned demo: the same prompt produces slightly different phrasing under sampling, but the same schema keeps the structure stable.

---

## 6) Context Window & Attention: Why Placement Matters

### Context window = the size of the prep table

**Plain-language**  
If your prep table is small and you dump too much on it, things fall off the edge. The model has a “prep table” too.

**Make it sharper**  
The **context window** is how much text the model can consider at once (instructions + intake + any earlier text still in view). If the intake is long, details may be compressed or dropped unless you chunk and reconcile.

**Why this happens**  
The model can only condition on a limited amount of text at one time. Chunking creates a safe workflow: schema first → process in batches → reconcile conflicts.

### Attention = highlighter strings (not eyeballs)

**Plain-language**  
While writing, the model draws invisible “highlighter strings” between parts of the text that seem related—so it can pull the right pieces forward for the next chunk.

**Make it sharper**  
**Attention** is a mechanism that links text to other text during generation. It is not awareness. It’s how the model decides which earlier tokens should influence the next token.

**Common confusion**  
“Attention” sounds like a human paying attention. It’s not. It’s a linking system that helps the model reuse relevant parts of the input while it continues writing.

**High-ROI prompt order**
1) Rules and hard constraints (Facilities / HR / allergy)  
2) Intake dump (sources)  
3) Output format (acceptance test)

**Reader checkpoint**  
If your intake dump is huge, what’s the safest first output to ask for?  
Model answer: the schema + the first processed chunk + a clear “READY FOR NEXT CHUNK” stop point.

**Interactive (placeholder): Constraint placement experiment**  
Planned demo: same constraints, different order. Notice which constraints “survive” into the action list when they’re buried vs emphasized.

---

## 7) Structured Output: Turning Text Into a Dataset

**Plain-language**  
A schema is a sign-up sheet with required columns. Required boxes force honesty. If you don’t know the allergen, you can’t pretend—there’s a blank cell.

**Make it sharper**  
Schemas reduce hallucination risk because they create an acceptance test: every row must name its source (Evidence), its uncertainty (Needs clarification), and its confidence. Unsupported claims become visible gaps instead of hidden guesses.

**Why this happens**  
Without a schema, the model can produce smooth prose that sounds right and keeps going. With Evidence + Needs clarification fields, it has to “point back” to the intake—so contradictions and missing facts show up as explicit rows.

**Evidence forces friction demo**
```text
Without Evidence (bad):
“We’ll do the Atrium 11:30–2:30.”
```
Sounds decisive. Hides the Finance conflict.

```text
With Evidence (good):
Location options:
- Atrium (Evidence: E) conflicts with “Atrium unavailable” (Evidence: I)
Needs_clarification: Yes
Confidence: High (conflict is explicit)
```
Less “clean.” More auditable.

**Example normalized intake table excerpt** (placeholder)

| ID | Category | Item | Evidence | Owner | Due | Needs clarification | Confidence |
|---:|---|---|---|---|---|---|---|
| 1 | Ownership | Confirm DRI + decision rights (theme vs “simple”). | A,B,L | Unassigned | Unknown | Yes | High |
| 2 | Location | Atrium cannot be used (Finance offsite). | I | Unassigned | Unknown | No | High |
| 3 | Safety | Define nut policy + cross-contamination handling. | A,F,L | Unassigned | Unknown | Yes | High |

Placeholder note: final table should match the V3/V4 schema exactly (including Dependencies/Risks/Assumptions).

**Reader checkpoint**  
What does an Evidence column give you that “a good summary” doesn’t?  
Model answer: traceability. You can audit which source supports each claim and see contradictions instead of hiding them.

### Sidequest (optional): “Normalize” without losing contradictions

Normalizing doesn’t mean “choose the truth.” It means: one row per distinct issue, with multiple sources attached. When sources disagree, you keep both options and mark Needs clarification.

---

## 8) Failure Modes & QA: How to Treat Outputs Safely

**Plain-language**  
Treat the model output like a first draft from a junior coordinator: helpful, fast, and not automatically correct.

**Make it sharper**  
A reliable workflow separates three jobs: (1) extract/normalize, (2) QA contradictions and unknowns, (3) plan next actions. This prevents “wishful coherence.”

**Why this happens**  
When you ask for “a plan” in one step, the model tends to smooth uncertainty to look complete. Multi-pass structure makes uncertainty visible before decisions get baked into the plan.

**QA pass you can append to V3/V4**
```text
QA pass:
- List contradictions you see.
- List missing Owners / Due dates.
- List items that risk safety/policy violations.
- List assumptions you made (keep minimal).
- If you see invented details, call them out as "Potential hallucination".
```
Self-QA helps, but it’s still the same brain checking its own work. Use it as a second sweep, not a guarantee.

**Red flags in coordination output**
- Any fixed date derived from “next Thursday”
- Any room chosen without Evidence
- Allergy handling summarized without specifics (policy/handling missing)
- “Final decisions” made despite explicit conflicts in the intake

**Reader checkpoint**  
What is the single highest-stakes thing to QA in this potluck scenario?  
Model answer: safety/policy constraints (nut allergy + Facilities/HR rules) and any unsupported “decisions” that override them.

---

## 9) Audit Quiz: Spot Unsupported Claims

**Plain-language**  
This is practice for a real workplace habit: don’t ask “does it sound right?” Ask “what supports it?”

**Quiz**
1) Which location is explicitly unavailable in the intake?
- A) Conf Room B
- B) The Atrium
- C) The Kitchen

2) What’s the safest way to handle “Whole30‑ish”?
- A) Treat it as strict Whole30 for everyone
- B) Ignore it—too vague
- C) Mark Needs_clarification and ask Exec/CEO for definition

3) Which instruction most reduces hallucination in coordination work?
- A) “Do not guess; mark unknowns and ask questions.”
- B) “Be creative.”
- C) “Write longer answers.”

**Why this happens**  
The model can produce confident text even when it’s unsupported, because confidence is a writing style. Auditing is how you keep the assistant from becoming the decision-maker.

**Answer rationales (for learning)**
- Q1: Atrium is explicitly unavailable (Finance note). Any plan using it is unsupported.
- Q2: “Whole30‑ish” is ambiguous; safest handling is Needs clarification + ask Exec/CEO for definition.
- Q3: “Do not guess; mark unknowns and ask questions” is the most reliable hallucination reducer in coordination work.

**Reader checkpoint**  
If a plan claims “Conf Room B is booked,” what should you look for?  
Model answer: Evidence from the intake (or a verified tool result). Otherwise it must be treated as “needs verification.”

---

## 10) Limits and Failure Modes (Mechanics, Not Morals)

**Plain-language**  
Most failures are the same failure: the model filled a gap to keep the text flowing.

**Make it sharper**  
Common failure modes in planning work:
- **Hallucination (gap-filling):** inventing the date for “next Thursday.”
- **Ambiguity collapse:** picking one time/location when sources disagree.
- **Instruction conflict:** “keep it low lift” vs “theme experience” rules.
- **Overconfident tone:** sounding decisive when confidence should be low.
- **Authority laundering:** a confident guess feels “approved” because it’s written like a final answer.

**What to do about it**
- **Force traceability**: require Evidence (and optional Quote for safety/policy).
- **Force honesty**: require Needs clarification + Unknowns policy.
- **Force review**: run a short QA pass before acting.

**Reader checkpoint**  
Which is safer: “a complete plan that guesses” or “a partial plan that flags unknowns”?  
Model answer: A partial plan that flags unknowns—it protects you from acting on confident fiction.

---

## 11) Tools vs Model: Where LLMs Stop and Systems Begin

**Plain-language**  
Writing “bake at 350°F” doesn’t turn on the oven. Writing “check the calendar” doesn’t check your calendar.

**Make it sharper**  
A model-only system can draft plans and restructure text. It cannot verify external facts (room bookings, invite acceptance, file access) unless it’s connected to tools that can actually query those systems.

**Rule of thumb**  
If the output doesn’t cite a provided source (or a verified tool result), treat it as unverified—even if it sounds confident.

*Visual aid (placeholder): model drafts vs tool-connected verification.*

**Reader checkpoint**  
In this potluck scenario, what are two things you should not let the model “decide” without verification?  
Model answer: the final location and the final time window (both conflict in the intake), plus any policy interpretations like “Whole30-ish.”

---

## 12) Wrap: Templates, Checklist, and Practice Modules

**Plain-language**  
Use the model as an assistant for structure: sorting, labeling, and drafting checklists. Keep human judgment for decisions, priorities, and taste.

Transferable loop (any coordination mess): normalize the intake → QA contradictions/unknowns → plan next actions → ask unblock questions. The potluck is just a safe dataset to practice on.

---

## 13) Bonus: Potluck Triage Sandbox (Planned)

**Interactive (placeholder)**  
Planned: a local, simulated sandbox that practices the workflow: schema → normalize → QA → questions. (No model calls required; this is about learning the structure.)

What you should notice: the safest output often looks “unfinished” because it preserves uncertainty instead of smoothing it.

---

## 14) Teaching Note

Think of an LLM like a fast coordinator who’s great at turning text into structure, but can’t verify reality unless it has tools. The key insight is: **prompts are specifications**, not wishes.

**Memorable mantra**
1) **Give it the notes.** (context)  
2) **Give it the rules.** (constraints)  
3) **Give it the form.** (output format)

**Reader checkpoint**  
What’s the safest default instruction when facts are missing?  
Model answer: “Do not guess—mark unknowns and ask questions.”

---

## 15) Prompt Template

```text
You are a project coordinator.

Context:
- [1–3 sentences: what this is and why it matters]

Goal:
- Convert the intake into (1) a normalized table and (2) a prioritized next-steps plan.

Constraints (must follow):
- [Hard constraints: safety/policy/legal requirements]
- [Operational constraints: time, budget, approvals]

Non-goals (must not do):
- Do NOT generate creative content/copy.
- Do NOT guess missing facts (dates, owners, availability, links).
- Do NOT resolve contradictions silently.

Output format (exact):
1) Normalized intake table
Columns: ID, Category, Item, Evidence, Owner (or "Unassigned"), Due (or "Unknown"),
Dependencies, Risks, Needs_clarification (Yes/No), Confidence (High/Med/Low), Assumptions

Evidence policy:
- Every row must cite one or more intake sections (A–L).
- If no evidence exists, set Confidence=Low and Needs_clarification=Yes.

Optional reliability upgrade:
- Add Quote column with ≤1 sentence copied verbatim for safety/policy items.

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

## 16) QA Checklist

- **Coverage:** includes all major sources (Slack, email, calendar, Facilities, HR, Finance, Exec).
- **Evidence present:** every major claim points back to intake sections (or tool results, if used).
- **Dates honest:** no invented dates/links; unknowns are “Unknown”.
- **Conflicts flagged:** contradictions set `Needs_clarification = Yes`.
- **Hard constraints respected:** allergy, policy, and safety are surfaced early (not buried).
- **Assumptions visible:** any assumption is stated explicitly and kept minimal.

---

## 17) Optional Interactive Modules (Planned)

- Prompt ladder (V0→V4) with output excerpts toggle
- Evidence/Quote “show your work” demo (unsupported vs supported claims)
- Constraint placement experiment (same rules, different order)
- Drag-and-drop normalization exercise (turn notes into rows)
- Audit quiz (spot hidden constraint violations)
- Potluck triage sandbox (schema → chunk → QA loop)
