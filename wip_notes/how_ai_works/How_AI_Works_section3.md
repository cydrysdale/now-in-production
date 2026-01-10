Reference for continuity:   

---

## Ticket Card (for this section)

**Order (Goal)**
Explain the prep counter (context window): why models “forget,” why long chats drift, and how to keep work stable by packing the counter on purpose.

**House Rules (Constraints)**

* Context = limited counter space. Older items get pushed off.
* “Forgetting” = out of view, not erased from the universe.
* No metaphor lies: training is learned technique, not a searchable pantry.
* No phantom ingredients: don’t present guesses as facts.

**Plating (Output format)**

* Short sections with clear headers
* Each section ends with a 1-sentence **kitchen truth**
* Include: recap blocks, constraints, known-good facts, common failure mode, mini-toolbox templates, one Expo Check

**Expo Checks (QA)**

* Reader can explain “forgetting” without mysticism
* Reader can use a recap template immediately
* At least one misconception is named + corrected
* Tooling boundary is clear: “If you didn’t measure it, you don’t know it.”

---

## Prep Counter Panel (allowed inputs)

**Concepts already on the counter (introduced so far)**

* Model = line cook (generates next plausible step) 
* Ticket (prompt) vs prep counter (context) separation  
* Tokens = prep pieces/slices (not “ingredients”)  
* Hallucination = phantom ingredients 
* Expo pass = QA gate before “serve” 
* “If it’s not on the ticket, it doesn’t exist.” / “No phantom ingredients.” 

**Running example inventory (we’ll use it here)**

* “Catering Chaos” planning thread: headcount, allergies, constraints, format requirements (no cooking lesson—just specs → output → checks)

**MISSING INFO**

* None needed for this section.

---

# The Prep Counter (Context Window): Why AI “forgets,” why long chats drift, and how to pack the counter

### Hook: the disappearing allergy note

You’re mid-service. You’ve got a catering order for 60 people. Early on, the client said: **no peanuts, severe allergy**. You discuss menu ideas for a while, refine the vibe, get cute with the names.

Thirty messages later, you ask the model for a final menu + shopping list.

It confidently suggests **peanut satay**.

Did it “forget” the allergy? Or did something dumber (and more fixable) happen?

**Kitchen truth:** *If it’s not on the counter, the cook can’t use it—even if you said it earlier.*

---

## 1) What the “context window” really is

The context window is the model’s **working surface**: the ticket + the visible conversation + any pasted references the system includes for this turn.

But the counter is not infinite.

So the system does what busy kitchens do: when the counter gets crowded, **older items get pushed off** to make room for what’s newest. The cook can’t glance at what’s no longer there.

This is why long chats drift:

* Earlier constraints become “distant memories” (meaning: **out of view**)
* Newer phrasing and newer instructions dominate
* Tiny ambiguities (“that list,” “the earlier plan”) become guess-fuel

**Kitchen truth:** *A long chat doesn’t make a bigger brain—it makes a messier counter.*

---

## 2) “Forgetting” isn’t amnesia. It’s occlusion.

When people say, “AI forgot,” they usually imagine a brain that lost a memory.

What’s happening is more boring: the model is generating from **what it can currently see**. If the peanut allergy note isn’t visible in the current context, the model can’t reliably follow it.

Important nuance:

* This is not “permanent memory loss.”
* You can put the allergy back on the counter by restating it (or pasting a recap).
* The model is not secretly checking a hidden transcript off-screen (no phantom pantry).

So “forgetting” is really “**out-of-frame**.”

**Kitchen truth:** *The cook didn’t forget the rule—it just isn’t looking at it anymore.*

---

## 3) Why long chats drift (even when nobody is trying to be chaotic)

Drift usually comes from three very human habits:

**A) We stop repeating the spec.**
At the start, we’re careful: “60 people, no peanuts, vegetarian options, budget $X.” Later we say: “cool, keep going.”

**B) We reference earlier stuff vaguely.**
“Use the plan from before.” “Same constraints.” “Like we said.”
Those phrases are fine for humans with stable memory. They’re terrible for a cook who can only see what’s on the counter.

**C) We pile on new instructions without reconciling them.**
“Make it fancy.” “Actually simple.” “Also playful.” “Also formal.”
The model tries to satisfy *everything*, and when it can’t, it starts inventing a compromise.

**Kitchen truth:** *Drift is what happens when the spec becomes vibes.*

---

## 4) How to pack the counter: recap blocks, constraints, and known-good facts

Here’s the move: treat your conversation like you’re periodically re-setting your station.

You don’t need more words. You need **better compression**.

### The three piles that keep work stable

**1) Known-good facts (things you’re committing to)**
These are the “don’t argue with me” anchors: numbers, names, requirements, constraints you verified.

**2) Constraints (house rules for the output)**
Format, tone, what to include/exclude, what counts as “done,” and what must be flagged as missing.

**3) Open questions / assumptions (explicitly labeled)**
If something is unknown, don’t let it become an accidental “fact.” Label it.

A recap block does two magical (non-magical) things:

* It puts the important items back on the counter **right now**
* It makes the model’s job more like following a spec, and less like improvising a novel

**Kitchen truth:** *A recap block is how you keep yesterday’s decisions on today’s counter.*

---

## 5) Running example: fixing the peanut satay incident

Let’s rewrite the moment that failed.

### The drift version (what most people do)

> “Great—now finalize the menu and shopping list.”

That ticket assumes the allergy note is still visible and still salient. In a long thread, it might not be.

### The packed-counter version (what works)

You paste a recap block first:

**RECENTER BLOCK (paste at the top of the request):**

* **Known-good facts:** 60 guests; **NO PEANUTS (severe allergy)**; 12 vegetarian; venue has warming trays but **no stove**; budget moderate.
* **Goal:** final menu + shopping list.
* **Plating:** menu in 3 sections (mains/sides/dessert) + shopping list grouped by aisle.
* **Expo checks:** confirm no peanuts; flag any missing quantities as **MISSING INFO**.

Now the cook can’t “accidentally” invent peanut satay without visibly violating the counter.

**Kitchen truth:** *When the counter is packed correctly, “forgetting” becomes rare and obvious.*

---

## Expo Check: spot the hidden failure

**Question:**
A coworker says: “Just keep going from earlier—same constraints.” Why is that risky, and what’s the safer replacement?

**Model answer:**
It’s risky because “earlier constraints” might not be on the prep counter anymore, so the model may guess or drift. Safer: paste a recap block with known-good facts + constraints + the required output format, and label unknowns as MISSING INFO.

**Kitchen truth:** *If it’s not restated, it’s not reliably enforced.*

---

## Common failure modes (and how they map to the kitchen)

### 1) Counter overflow → phantom ingredients

When the counter is overloaded, the model fills gaps with plausible-sounding glue. That’s hallucination: not evil, not mystical—just unchecked improvisation.

**Fix:** shrink and sharpen the counter: recap, remove noise, paste only the relevant excerpts.

**Kitchen truth:** *Overflow makes the cook improvise; improv without labels becomes “facts.”*

### 2) Constraint burial (important rules get visually lost)

If constraints are buried in paragraphs, they get missed—like an allergy note written on the back of a napkin under a cutting board.

**Fix:** isolate constraints in their own block, near the top.

**Kitchen truth:** *A rule you can’t see is a rule you won’t follow.*

### 3) Unmarked assumptions become “truth by repetition”

The model guesses once, then later treats its own earlier guess as a fact because it’s now part of the visible text.

**Fix:** require an Assumptions block and keep it separate from Known-good facts.

**Kitchen truth:** *If you didn’t measure it, you don’t know it—and if you didn’t label it, you’ll believe it.*

---

# Mini-toolbox: copy/paste templates

### A) Recap Block (the “Recenter”)

**RECENTER BLOCK**

* **Known-good facts:**

  * …
  * …
* **Goal:** …
* **Constraints (house rules):**

  * Must / must not …
  * Use only provided info; unknowns → **MISSING INFO**
* **Plating (format):** …
* **Expo checks:**

  * Constraint check: …
  * Consistency check: …

### B) Assumptions Block (quarantine your guesses)

**ASSUMPTIONS (label these, don’t hide them):**

* Assumption 1: … (reason: …)
* Assumption 2: … (risk if wrong: …)
* What would verify: **NEEDS TOOL CHECK** / “ask the user” / “paste the source”

### C) Known-Good Facts Block (the “no arguing” list)

**KNOWN-GOOD FACTS (confirmed):**

* …
* …
  *(If a fact came from a guess, it does not belong here.)*

### D) Expo Pass Checklist (fast QA before you trust it)

**EXPO PASS (QA):**

* [ ] Uses only items from the counter (no new “facts”)
* [ ] All constraints satisfied (allergies, bans, style rules)
* [ ] Output matches plating format exactly
* [ ] Unknowns labeled **MISSING INFO**
* [ ] Assumptions listed separately
* [ ] Anything reality-based marked **NEEDS TOOL CHECK** (don’t pretend)

**Kitchen truth:** *Expo catches mistakes before customers do.*

---

## TL;DR Panel

* The context window is **finite counter space**; older items get pushed off.
* “Forgetting” usually means **out of view**, not erased.
* Long chats drift when the spec becomes vibes and constraints aren’t restated.
* Use recap blocks: **Known-good facts + constraints + plating + expo checks**.
* Overflow leads to hallucination: **no phantom ingredients**.

---

## Visual notes (HUD components to show in this section)

* **Hook:** Prep Counter Panel with a “NO PEANUTS” card sliding off the left as new notes pile on
* **Context window explanation:** Counter Space Meter dropping into the red
* **Packing the counter:** Ticket Card + Recap Block overlay (like a “Power-Up: Recenter”)
* **Expo Check:** Expo Pass Checklist stamped “FAIL: peanut satay” then “PASS” after recap
* **Mini-toolbox:** Templates displayed as collectible “item cards” (Recenter / Assumptions / Expo Pass)
