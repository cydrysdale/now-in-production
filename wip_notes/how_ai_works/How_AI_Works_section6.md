# Station Workflow: How to run multi-step jobs without chaos

### Hook: the “one ticket to rule them all” disaster

You paste a messy intake dump and ask for: a plan, a timeline, a shopping list, risk flags, a stakeholder email draft, and “also make it fun.”

The model obliges. It sounds confident. It’s also quietly wrong in five places—because it had to be a **project manager**, a **researcher**, a **writer**, and **QA**… all in one breath, on one crowded prep counter.

That’s not a character flaw. That’s a workflow flaw. Big jobs need stations.
**Kitchen truth:** *If you ask one cook to run the whole The next session I need you to write is Station Workflow: How to run multi-step jobs without chaos
Make this a chapter about breaking big tasks into tickets::
- “prep list → station assignments → service run”
- chunking, intermediate outputs, handoffs, and recap injection
- “don’t let the model be PM + researcher + QA in one breath” (separate phases)

After writing copy:
- Review the new copy to ensure it explains the topic thoroughly and properly simplifies complex ideas.
- Review again for concepts that should be introduced or included in this new section and revise. 

When the final copy is to Richard Feynman's standards, provide suggestions on what the next section should cover.restaurant mid-rush, you’re ordering chaos.*

---

## 1) Why big tasks explode: role-mixing creates “invisible errors”

When you combine phases, the model has to do four incompatible things at once:

* **Plan the work** (PM brain): decide what matters and in what order
* **Find/assume facts** (research brain): fill gaps, sometimes inventing glue
* **Produce the deliverable** (writer brain): make it polished and persuasive
* **Validate itself** (QA brain): catch mistakes it just made

Humans struggle with that too, which is why real kitchens don’t do it. They split labor into stations with clear inputs/outputs.

The key danger in a single mega-prompt is *category collapse*:
a guess gets phrased like a fact, then “sounds right,” then slips past you because the formatting is pretty.

So the fix isn’t “be more careful.” The fix is “stop mixing stations.”
**Kitchen truth:** *When planning, researching, drafting, and QA share one plate, mistakes hide under garnish.*

---

## 2) The Station Workflow (the core loop)

Here’s the stable pattern:

### Phase A — Prep list (what must be true + what we’re making)

You identify:

* What the deliverable is (the “served dish”)
* What constraints must never be violated
* What inputs are missing
* What facts must be measured with tools

### Phase B — Station assignments (who does what, in what order)

You create small, strict tickets for each station. Typical stations:

* **Intake / Parsing Station:** turn chaos into structured fields
* **Research / Measurement Station:** run tools, paste outputs (receipts)
* **Drafting Station:** write using only the confirmed counter
* **Expo Station (QA):** run checks, send back failures

### Phase C — Service run (execute in passes with handoffs)

Run station-by-station. After each station:

* Capture the output as an **intermediate artifact**
* Inject a **recap block** so the next station starts with a clean counter

This is how you keep the model from improvising across gaps: you make it work from **explicit handoffs**, not vibes.
**Kitchen truth:** *Big jobs don’t need a bigger prompt—they need a better line.*

---

## 3) Handoffs and recap injection: the secret to “multi-step without drift”

A handoff is not “keep going.” A handoff is a **new ticket** plus a **clean tray of inputs**.

Think of each station output as something you can literally place on the prep counter for the next station. That means:

* **Intermediate outputs must be small enough to fit**
* They must label what is *fact* vs *assumption*
* They must be formatted so the next step can’t “misread the station notes”

### The Handoff Card (use this every time)

**HANDOFF CARD**

* **What this is:** (one sentence)
* **Known-good facts (confirmed):** (bullets)
* **Assumptions (quarantined):** (bullets)
* **Open questions / MISSING INFO:** (bullets)
* **Next station goal:** (one sentence)
* **Expo checks for next station:** (checkboxes)

This does two powerful (non-magical) things:

1. It prevents counter overflow by compressing the important bits.
2. It prevents “source laundering” where earlier guesses get treated as truth later.

Recap injection is just you repeatedly saying: “Only what’s on this tray counts.”
**Kitchen truth:** *A clean handoff beats a long conversation every time.*

---

## 4) Running example: “Catering Chaos” in three passes

We’ll take the messy catering intake and run it through stations.

### Phase A — Prep list (ticket 1: make the work measurable)

**Ticket: Prep List**

* **Order:** Produce a final catering plan (menu + shopping list + timeline + risks).
* **House rules:** Peanut-free (severe allergy). Venue has warming trays, **no stove**.
* **Must-not-guess:** headcount, dietary counts, delivery window, venue constraints.
* **Plating:** Output a checklist of required inputs + which tool/source confirms each.
* **Expo checks:** Anything measurable is labeled **NEEDS TOOL CHECK** until a receipt is on the counter.

**Output (example):** a short “inputs needed” list + a tool plan.
**Kitchen truth:** *If you didn’t measure it, you don’t know it—and you shouldn’t build plans on it.*

### Phase B — Station assignments (ticket 2: split the roles)

Assign stations like this:

1. **Intake Station:** Extract constraints + preferences into a structured block
2. **Measurement Station:** Pull headcount/dietary counts/time window via tools; paste receipts
3. **Draft Station:** Write the plan using only the structured block + receipts
4. **Expo Station:** QA gate: constraints, sources, consistency, edge cases

Notice what’s missing: “one station does everything.” That’s the point.
**Kitchen truth:** *Don’t let the cook be PM + researcher + QA in one breath—separate stations.*

### Phase C — Service run (ticket 3+: execute with handoffs)

You run the stations in order, and after each one, you paste a **Handoff Card**.

Example handoff from Measurement → Draft:

**HANDOFF CARD (Measurement → Draft)**

* **Known-good facts:** Headcount = 60 (RSVP export line X). Vegetarians = 12 (same export). Event time = 6:00 PM (calendar event).
* **Constraints:** NO PEANUTS. No stove.
* **Open questions:** dessert preference = **MISSING INFO**.
* **Next station goal:** Draft final plan with receipts for every number/time.

Now Draft Station can’t “invent 64 guests,” because the counter has a single verified number and you told it to cite receipts.

Finally, Expo Station runs the gate and either **SERVE** or **SEND BACK**.
**Kitchen truth:** *Service run means: produce → hand off → check → only then serve.*

---

## Expo Check: spot the bad workflow

**Question:**
You’re about to paste a huge doc and ask: “Summarize it, extract action items, verify claims, and draft an email to leadership.” What’s the safer station-based rewrite?

**Model answer:**
Split it into passes:

1. **Intake Station:** “Extract a structured outline: sections, key claims, and open questions. No new facts.”
2. **Measurement/Source Station:** “For each key claim, attach a quote or tool output. Anything without a quote gets NEEDS TOOL CHECK.”
3. **Draft Station:** “Write the email using only the verified claims + quotes.”
4. **Expo Station:** “Run constraint/source/consistency/edge-case checks; flag failures.”

**Kitchen truth:** *If the work has phases, the ticket should too.*

---

## Common failure modes (and fixes)

### 1) Blender prompting (everything everywhere all at once)

**Symptom:** One giant prompt, one glossy answer, lots of hidden guesses.
**Fix:** Split into stations; require intermediate outputs and handoffs.
**Kitchen truth:** *When you blend stations, you blend truth with vibes.*

### 2) No intermediate artifacts (nothing to audit)

**Symptom:** You can’t tell where a number came from because there’s no “receipt stage.”
**Fix:** Force a Measurement Station and paste outputs onto the counter before drafting.
**Kitchen truth:** *If you can’t point to the tray it came on, it didn’t really arrive.*

### 3) Handoff rot (the next step starts from a messy counter)

**Symptom:** “Continue from above” causes drift and constraint loss.
**Fix:** Always include a Handoff Card + recap injection before the next station.
**Kitchen truth:** *A vague handoff is just drift with manners.*

### 4) Station scope creep (the Draft station starts “helpfully researching”)

**Symptom:** Drafting includes new “facts” because it “seemed reasonable.”
**Fix:** Put “no new facts” on the Draft ticket; route facts to tools/stations.
**Kitchen truth:** *No phantom ingredients: drafting is plating, not shopping.*

---

# Mini-toolbox: copy/paste station tickets

### A) Prep List Ticket (turn chaos into a plan of attack)

**TICKET — PREP LIST**

* **Order:** List deliverables + constraints + missing inputs.
* **House rules:** No new facts; label unknowns **MISSING INFO**; measurable unknowns **NEEDS TOOL CHECK**.
* **Plating:**

  1. Deliverables
  2. Constraints (must/must-not)
  3. Must-not-guess list + tool/source for each
  4. Proposed station sequence
* **Expo checks:** Every must-not-guess item is tagged.

### B) Station Ticket (generic)

**TICKET — [STATION NAME]**

* **Input (what’s on the counter):** (paste only what this station needs)
* **Order:** (one sentence)
* **House rules:** (no new facts / format / constraints)
* **Plating:** (exact output schema)
* **Expo checks:** (what must be true to pass)

### C) Handoff Card (recap injection)

**HANDOFF CARD**

* **Known-good facts (confirmed):** …
* **Assumptions (quarantined):** …
* **MISSING INFO / NEEDS TOOL CHECK:** …
* **Next station goal:** …
* **Expo checks:** …

**Kitchen truth:** *Clear station tickets turn “multi-step” into “multi-safe.”*

---

## TL;DR Panel

* Run big jobs as **prep list → station assignments → service run**.
* Don’t make the model be PM + researcher + writer + QA in one prompt.
* Use **intermediate outputs** and **Handoff Cards** to prevent drift.
* Put tools in a dedicated phase: **measure → paste → cite**.
* Expo Pass is the gate: if it fails constraints/sources/consistency/edges, send it back.

---

## Visual notes (HUD components to show in this section)

* **Hook:** Ticket Card overloaded with 12 objectives + a flashing “COUNTER OVERFLOW” meter
* **Station Workflow diagram:** 3-panel pipeline: Prep List → Station Assignments → Service Run
* **Handoff Card:** collectible “tray item” that drops onto the Prep Counter Panel
* **Service run:** step-by-step “PASS” stamps between stations
* **Expo Check:** Expo Pass Checklist overlay that blocks “SERVE” until checked
