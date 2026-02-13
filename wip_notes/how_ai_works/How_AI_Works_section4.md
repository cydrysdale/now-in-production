# Expo Pass (QA): How to taste-test an answer before you serve it

### Hook: the plated answer that *looked* perfect

You ask for a final catering plan. The model gives you a beautiful menu, a clean shopping list, and a confident timeline. It reads like it’s already laminated.

Then your coworker says: “Cool. Where did it get **64 guests** from?”

Silence. No receipt. The number *sounds* plausible, which is exactly the problem.

The Expo Pass (QA) is how you stop serving “sounds right” as if it were reality.

“Expo” is short for “expeditor”: the shift lead at the pickup window who checks tickets and plates before anything leaves the kitchen.
**Kitchen truth:** *A dish that looks right can still be wrong—Expo checks before customers do.*

---

## 1) What an Expo Pass is: a quality gate, not a vibe check

Expo Pass (QA) is a short, repeatable review you run **after** the cook plates an answer and **before** you trust it.

It turns the whole guide into one loop:

1. **Write the ticket** (goal, constraints, format, checks)
2. **Pack the counter** (only the relevant facts and excerpts)
3. **Measure with tools** when reality matters (dates, counts, policies, numbers)
4. **Generate a draft** (the cook plates)
5. **Run Expo Pass** (QA gate) → either **SERVE** or **SEND BACK**

Common stamps you’ll use a lot: **SERVE**, **SEND BACK**, **NEEDS TOOL CHECK**, **MISSING INFO**.

This is the mental shift: you’re not trying to make the model “never wrong.” You’re building a kitchen where wrong answers can’t quietly slip out.
**Kitchen truth:** *The cook drafts; Expo decides what ships.*

---

## 2) The Four Checks (the standard boss pattern)

Think of these as the standard stations on your QA line. Run them in order; stop as soon as one fails.

### A) Constraint check (the ticket test)

Ask: **Did it follow every must/must-not?**

* Allergies, bans, tone, length, format, required sections
* Also check “negative constraints” (things you explicitly said *not* to do)

If a constraint is missing, you don’t “fix it in your head.” You send it back to be re-plated.
**Kitchen truth:** *If it violates the ticket, it fails—no matter how pretty it is.*

### B) Source check (the receipt test)

Ask: **For each important claim, where did it come from?**

* From the counter (quoted text you provided)?
* From a tool output (calendar/spreadsheet/doc search/web)?
* Or… from vibes?

If the answer is “I’m not sure,” the claim gets stamped **NEEDS TOOL CHECK** or **MISSING INFO**—not quietly implied.
**Kitchen truth:** *Confidence is seasoning, not evidence.*

### C) Consistency check (the self-contradiction test)

Ask: **Does it agree with itself and the counter?**

* Headcount matches across sections
* Allergies don’t reappear in a different name
* Dates/times don’t shift mid-answer
* Requirements don’t get restated differently later

Most “hallucinations” that make it to production are actually **inconsistencies** no one bothered to scan for.
**Kitchen truth:** *If the plate argues with itself, it’s not ready to serve.*

### D) Edge-case check (the “break it on purpose” test)

Ask: **What’s the weird case where this answer collapses?**
A few classics:

* The list is empty (no vegetarians; no constraints; no results)
* The constraint conflicts (“make it 3 bullets” + “include all details”)
* The input changes (headcount updates, policy changes, time zone shifts)
* Ambiguous nouns (“the venue” / “the list” / “that plan from earlier”)

Edge cases are where "plausible" becomes "quietly wrong."
**Kitchen truth:** *If you didn't test the corners, you don't know the shape.*

Pick 2–3 that matter most for your specific task and test them.

**Kitchen truth:** *Test the corners you're most worried about—not every possible edge.*

---

## 3) Power-up: “show your work” plating (claims → evidence → confidence)

If you want Expo Pass to be fast, don’t make reviewers hunt. Make the answer *carry its receipts.*

Here’s the simplest “show your work” format that scales:

**CLAIM → EVIDENCE → CONFIDENCE**

* **Claim:** the statement you might act on
* **Evidence:** a quote/tool snippet/identifier from the counter
* **Confidence:** High / Medium / Low (and why)
* If not High: stamp **NEEDS TOOL CHECK** and name the tool/source that would confirm

### Micro-template (copy/paste)

**Receipts Block (per important claim):**

* **Claim:** …
* **Evidence:** “…” (quote) / (tool output snippet)
* **Source:** doc name + section / spreadsheet cell / calendar event line
* **Confidence:** High / Medium / Low
* **If Medium/Low:** **NEEDS TOOL CHECK:** (what to run)

This doesn’t make the model magically truthful. It makes truth *auditable*—which is how real teams ship work without relying on mind-reading.
**Kitchen truth:** *If you can’t point to the receipt, it’s not a fact.*

---

## 4) When to rerun tools and cross-check sources

Tools are your measurement instruments—but measurements can be stale, incomplete, or wrong. Expo Pass includes a “re-measure?” decision.

### Rerun the tool when…

* The claim depends on **changing reality** (counts, schedules, current policy)
* The source is **old** (last week’s RSVP export, cached docs)
* The model’s confidence is anything but High
* The answer includes phrases like “typically,” “usually,” “most likely,” for something that should be a number/date/rule

### Cross-check (two sources) when…

* Stakes are high (money, safety, policy, reputation)
* One tool result looks weird (out of range, surprising jump)
* Two parts of the counter disagree (doc says 60, sheet says 64)
* You’re about to repeat the claim downstream (slides, email, leadership update)

This is the grown-up version of “don’t hallucinate”: **measure, then verify your measurement is still valid.**
**Kitchen truth:** *If you didn’t re-check the thermometer, you don’t know the temp.*

---

## 5) Running example: Expo Pass on “Catering Chaos”

**Ticket (goal + plating):** “Final plan: menu + shopping list + timeline. Must be peanut-free. Cite headcount + dietary counts.”

**Draft comes back with:**

* “64 guests confirmed”
* “14 vegetarians”
* A menu that includes “satay sauce” (no peanut mention, but… hello, danger)
* A timeline with delivery time but no source

Now run the four tests:

### A) Constraint check

* Peanut-free? The word “satay” is a red flag. If peanuts are banned, you don’t allow ambiguous sauces without explicitly confirming ingredients.
  → **FAIL → send back** with: “List banned ingredients and explicitly confirm none appear, including sauces.”

### B) Source check

* Where did “64” and “14” come from? If there’s no RSVP sheet snippet on the counter, those are phantom ingredients.
  → Stamp: **NEEDS TOOL CHECK (RSVP export)**

### C) Consistency check

* If the menu is “for 64” but the shopping list totals “for 60,” that’s a quiet mismatch that becomes a real-world problem.
  → **FAIL → send back** with: “Recalculate quantities from the verified headcount only.”

### D) Edge-case check

* What if headcount changes tomorrow? If the plan can’t be re-generated quickly from one verified source, you’re stuck hand-editing chaos.
  → Add: “Quantities should be formula-based on headcount, and headcount must be a single sourced number.”

### Re-plate request (what you actually send)

* Paste RSVP tool output (or at least the final verified numbers) onto the counter
* Require a Receipts Block for every number
* Require a “banned ingredients confirmation” line item

Once the answer returns with receipts, Expo Pass becomes a 60-second scan instead of a detective novel.
**Kitchen truth:** *A plan without receipts is just a story with formatting.*

---

## Expo Check: catch the stealth failure

**Question:**
The answer includes three hard numbers (guest count, vegetarian count, delivery time) but provides no quotes or tool outputs. What do you do?

**Expo answer:**
Don’t “trust but verify” in your head—verify in the process. Require receipts for each number. If receipts aren’t possible from the current counter, stamp each number **NEEDS TOOL CHECK**, rerun the appropriate tool (RSVP export / calendar / venue email), paste the output onto the counter, then re-ask for the plan using only that evidence.

**Kitchen truth:** *If it’s measurable and you didn’t measure it, it’s not done.*

---

## Common failure modes (and fixes)

### 1) Checkbox cosplay (the checklist exists, but nothing is actually checked)

**Symptom:** “All constraints satisfied ✅” with no demonstration.
**Fix:** Make checks *observable*: show the constraint list and explicitly confirm each item, or fail.
**Kitchen truth:** *A check you can’t audit is a wish, not QA.*

### 2) Source laundering (“it said it earlier” becomes “it’s true now”)

**Symptom:** An unverified guess appears in Draft 1, then gets treated as a fact in Draft 2 because it’s now in the conversation.
**Fix:** Separate **Known-good facts** from **Assumptions**, and forbid promotion without a receipt.
**Kitchen truth:** *Repetition doesn’t turn guesses into facts.*

### 3) Evidence/inference mash (helpful suggestions masquerade as requirements)

**Symptom:** “No stove” (evidence) turns into “so we must do cold sandwiches” (inference) without labeling.
**Fix:** Split sections: “What we know” vs “What we recommend.”
**Kitchen truth:** *Inference can be smart—unlabeled inference becomes misinformation.*

### 4) Edge-case blindness (works for the happy path, breaks in reality)

**Symptom:** Great plan… until the headcount changes, the doc is missing, or a constraint conflicts.
**Fix:** Add one deliberate stress test: “What breaks this?” and “What would we re-check?”
**Kitchen truth:** *If it only works on perfect days, it doesn’t work.*

---

## TL;DR Panel

* Expo Pass (QA) is a **quality gate**: Ticket → Counter → Tools → Draft → **QA** → Serve.
* Run four checks: **constraints, sources, consistency, edge cases**.
* Force “show your work”: **Claim → Evidence → Confidence** (stamp unknowns).
* Rerun tools when reality changes; cross-check when stakes are high or sources disagree.
* The goal isn't "never wrong." It's "wrong can't sneak out unnoticed."

**Next up:** Single dishes are manageable. But what about a full service—multiple courses, multiple stations? Let's talk about running big jobs without chaos.

---

## Visual notes (HUD components to show in this section)

* **Hook:** A plated dish with a big stamp: “NO RECEIPT → FAIL”
* **Pipeline panel:** Ticket Card → Prep Counter → Tool icons → Plate → Expo Pass gate → “SERVE” (reuse this across the guide; highlight the QA gate here)
* **Four taste-tests:** A 4-icon checklist (ticket = constraints, receipt = sources, mirror = consistency, warning = edge cases)
* **Power-up:** “Show Your Work” overlay that pins claims to evidence snippets
* **Running example:** Before/after: “64 guests (??)” → “60 guests (RSVP export line shown)” with PASS stamp
