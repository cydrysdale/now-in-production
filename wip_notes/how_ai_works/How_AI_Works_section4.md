# Thermometers & Scales (Tools): How to Stop Guessing and Start Checking

### Hook: the chicken that was “definitely done”

You ask the model: “Is 20 minutes enough to cook chicken thighs at 400°F?”

It gives you a confident answer. It sounds like something a competent cook would say. It might even be right.

But if you’re serving 60 people—and somebody gets sick—“sounds right” isn’t a standard. You need a way to ensure the chicken is thoroughly cooked.

That’s the whole tools story:

*The chef can grill a perfect-looking steak. Only the thermometer can tell you if it’s actualy perfect.*

---

## 1) What tools are (and what they aren’t)

A tool is any system that can **touch reality** or **compute deterministically**:

* A calendar query that shows the actual date/time
* A spreadsheet total that gives the real headcount
* A database lookup that returns the record on file
* A web lookup that fetches the current policy
* A code run that checks the math
* A document search that retrieves the exact paragraph you’re summarizing

Tools are not “better prompting.” Tools are **measurement**.

Prompts tell the cook what dish to make.
Tools ensure that dish meets the needs of the customer.

---

## 2) The measurement loop: check → place on counter → plate with receipts

A lot of people do this backwards:

1. Ask the model for an answer
2. Hope it’s right
3. Trust the confidence

The reliable way flips the order:

1. **Decide what must be true** (the “must-not-guess” list)
2. **Use a tool to check it**
3. **Put the tool output on the prep counter** (paste it / attach it / quote it)
4. **Ask the model to use *only that evidence*** and to cite it

This is how you keep the cook honest without turning them into a detective who “just vibes it out.”

---

## 3) Citations and traceability: “show your work” is a feature, not a punishment

When readers hear “citations,” they often think “academic footnotes.”

Here we mean something simpler: **receipts**.

A receipt can be:

* A direct quote from the text you provided (“from the counter”)
* A line item from a tool output (“from the scale”)
* A link/source name + what it said (“from the inventory terminal”)
* An ID you can re-check later (doc title + section, email subject + date, ticket number, query name)

The point isn’t to look fancy. The point is to make every important claim answer the question:

> “Where did that come from?”

If the answer is “I’m not sure,” the claim gets stamped:

* **NEEDS TOOL CHECK** (measurable, just not measured yet), or
* **MISSING INFO** (you literally don’t have the input)

---

## 4) Running example: turning “Catering Chaos” into a measured plan

We’ll reuse the earlier scenario:

* 60 guests
* **NO PEANUTS (severe allergy)**
* 12 vegetarian
* Venue has warming trays but **no stove**
* Budget: moderate

In the “Prep Counter” chapter, the failure was forgetting. Now the failure we’re preventing is **guessing**.

### Step A: Mark what must not be guessed

For this ticket, “must not guess” includes:

* Final headcount (changes constantly)
* Allergy list (one mistake ruins the whole event)
* Venue equipment constraints (stove/no stove)
* Deadline and delivery time

### Step B: Call the instruments (examples)

* **Reservation book / calendar tool:** confirm event start time + load-in window
* **Inventory terminal / spreadsheet:** confirm RSVP count and dietary breakdown
* **Document search:** pull the venue email that states “no stove access”
* **Source check:** confirm any “rules” you plan to state publicly (building policy, vendor rules, etc.)

### Step C: Paste tool outputs onto the counter, then ask for a plated plan with receipts

Now your ticket becomes a spec the model can’t wriggle out of:

* Use only the pasted tool outputs for numbers/times
* Cite each number to its source (“RSVP sheet cell,” “calendar event line,” “venue email quote”)
* Any missing quantity/time must be labeled **MISSING INFO**
* Any unverified claim must be labeled **NEEDS TOOL CHECK**

You don’t need the cook to “be more careful.”
You need the cook to **work in a kitchen where careful is enforced by instrumentation**.

---

## Expo Check: spot the fake certainty

**Question:**
The model says: “We have 64 guests confirmed and 14 vegetarians.” You don’t remember providing those numbers. What’s the correct response?

**Model answer:**
Treat the numbers as unverified until you can point to a receipt. Ask: “Cite the source for each count (tool output or quoted text). If you can’t, label them NEEDS TOOL CHECK.” Then run the actual tool (spreadsheet/RSVP export) and paste the result onto the counter.

**Kitchen truth:** *Confidence is not evidence.*

---

## Common failure modes (and how to fix them)

### 1) Tool theater (citations that aren’t real)

This looks like: “According to multiple sources…” with no sources. Or worse: made-up links, made-up quotes, made-up authors.

**Fix:** require *specific* receipts: quote, doc name + section, or tool output snippet. If it can’t produce those, it must label **NEEDS TOOL CHECK**.

### 2) Tool output not on the counter (the cook can’t use it)

You checked the calendar… in your head. Or in another tab. Or yesterday. Then you ask the model to “use the schedule.”

It can’t. Not reliably.

**Fix:** paste the relevant tool output (or summarize it explicitly as a Known-good fact) into the request.

### 3) Mixing evidence with inference (the stealth slip)

A model reads: “No stove.”
Then it adds: “So we’ll do cold sandwiches,” as if that was stated.

That’s not necessarily wrong—but it’s a different category: **inference**.

**Fix:** force a split:

* “What the tools/text explicitly say” vs “What we’re choosing based on that.”

### 4) Single-instrument overtrust (one thermometer, no calibration)

Tools can be wrong: stale spreadsheets, out-of-date docs, incorrect records.

**Fix:** for high-stakes facts, cross-check (two sources) or add a quick sanity check (“Does this total match last week’s range?”).

---

# Mini-toolbox: copy/paste templates

### A) “Must-Not-Guess” Block (mark what requires measurement)

**MUST-NOT-GUESS (requires tool check or provided source):**

* Headcount: **NEEDS TOOL CHECK** (source: RSVP sheet)
* Allergy list: **NEEDS TOOL CHECK** (source: intake form export)
* Venue constraints: **NEEDS TOOL CHECK** (source: venue email / contract)
* Event time window: **NEEDS TOOL CHECK** (source: calendar event)

---

### B) Receipt Format (force traceability)

**RECEIPTS (for every important claim):**

* **Claim:** …
  **Evidence:** (quote/tool output) …
  **Source:** …
  **Confidence:** High / Medium / Low
  **If Low:** **NEEDS TOOL CHECK** (what tool would confirm?)

---

### C) Tool-to-Counter Script (how to “bring in reality” cleanly)

**TOOL PULL → COUNTER PASTE:**

1. Tool used: …
2. Output snippet pasted below (verbatim):

   * …
3. Model task: “Summarize using only the pasted snippet. Cite each claim to a line/field above. Unknowns → MISSING INFO.”

---

### D) Expo Pass: Tools Edition (fast QA before you trust it)

**EXPO PASS (TOOLS):**

* [ ] Every number/date/time has a receipt (quote or tool output)
* [ ] Evidence vs inference is clearly separated
* [ ] Unknowns are labeled **MISSING INFO**
* [ ] Unverified-but-checkable items are labeled **NEEDS TOOL CHECK**
* [ ] No invented sources, links, or quotes
* [ ] Final output matches the requested format exactly

---

## TL;DR Panel

* Models are great at **plausible**. Tools are how you get **true**.
* The reliable workflow is: **measure → paste onto counter → summarize with receipts**.
* “Citations” here means: *Where did that claim come from?*
* If you can’t cite it, stamp it **NEEDS TOOL CHECK** or **MISSING INFO**.
* Avoid tool theater, missing tool outputs, and evidence/inference mashups.

---

## Visual notes (HUD components to show in this section)

* **Hook:** Thermometer overlay reading “???” while the cook confidently plates chicken
* **Tools intro:** Tool belt / instrument icons (thermometer, scale, reservation book, inventory terminal)
* **Measurement loop:** “Tool Output” card drops onto Prep Counter Panel like a loot pickup
* **Traceability:** Receipts panel that pins claims to source snippets with little connector lines
* **Expo Check:** Expo Pass Checklist stamped “NO RECEIPT → FAIL” then “RECEIPTS ATTACHED → PASS”
