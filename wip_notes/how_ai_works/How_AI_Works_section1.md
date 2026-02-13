# Mise en Place: How LLMs Generate Text (and Why Tickets Matter)

### Hook: the confident plate that shifts

Most people meet an LLM like this:

* You ask for something simple.
* It answers confidently.
* Later you realize it invented a detail, ignored a constraint, or gave a different answer the second time.

That isn’t the model being “moody.” It’s the result of how it generates text.

Think of an LLM as a line cook who works at absurd speed. It doesn't cook the whole dish in one go. It adds **one small piece of text (a *token*—sometimes a word, sometimes part of one)** at a time. After each slice, it looks at what's visible **on the prep counter (context)** (the text so far) and the **ticket (prompt)** (your instructions), then asks:

> “Given what I can see right now, what’s the most plausible next slice?”

Then it adds that slice…and repeats.

**Kitchen truth:** The cook isn’t “thinking in paragraphs”—it’s cooking one tiny step at a time.

---

## 1) What’s really happening (minus the mysticism)

Behind the scenes, the model considers lots of possible “next slices” and scores them. Then the system **chooses one** and moves on.

That choosing step is your **chef style setting (decoding)**. It’s why the same ticket can produce output that feels like either:

* **Standard recipe:** stable and repeatable (nearly the same each run), or
* **Chef’s special:** varied and improvisational (same idea, different phrasing)

Not magic. Just different ways of picking the next slice.

**Kitchen truth:** Same ticket, different plating—because the system can choose different “next steps.”

---

## 2) Why tickets matter more than people expect

The model’s default job is simple: produce a **coherent continuation** of whatever you put in front of it.

So if your ticket is **vague**, “coherent” usually means the cook picks an interpretation and commits. That’s how you get **phantom ingredients**: details that sound plausible but were never actually provided.

If your ticket is a **spec** (house rules + plating format + an expo check (QA)), “coherent” shifts toward:

> “Follow the ticket, use only what’s on the prep counter, and plate something humans can verify.”

Tickets don’t make the cook smarter. They make the result **easier to review and harder to misinterpret**—which is what you want when it matters.

**Kitchen truth:** Better tickets don’t add talent—they add accountability.

---

## TL;DR Panel

The model predicts “what comes next,” **one slice at a time**. Your ticket (prompt) supplies two different things:

* **Instructions (on the ticket):** what to do, in what format, with what checks
* **Context (on the prep counter):** the info it’s allowed to use right now

Better specs don’t increase intelligence—they increase **verifiability**.

**Kitchen truth:** If it’s not on the ticket or the counter, it doesn’t exist.

---

## Power-up (optional): the "improv meter"

When the system varies its answers (called 'sampling'), settings like temperature and top-p control how strict or varied the choices are. If sampling is off, temperature has little effect.

---

## Two separations that prevent workplace confusion

* **Model vs tools:** the cook can draft a dish; only instruments can verify reality.
  *The chef can grill a perfect-looking steak. Only the thermometer can tell you if it's actually perfect.*

* **Instructions vs context:** the ticket is what you want done; the prep counter is what you’re allowed to use.
  *A recipe isn’t ingredients. Ingredients aren’t a recipe.*

**Kitchen truth:** If you didn’t measure it, you don’t know it.

---

## Expo Check: correct the misconception

If someone says, “the chef knows our order,” what’s the safer correction?

**Expo answer:** The chef only knows what’s on the ticket/prep counter unless it’s connected to a verified tool (like a reservation system or ordering tool) that can actually check the schedule.

*Visual aid (placeholder): score next prep pieces → choose one → plate → repeat.*

---

## Sidequest (optional): Micro‑Glossary

* **Model (line cook):** the text generator producing output
* **Ticket (prompt):** your instructions/spec for this turn (goal, constraints, format, checks)
* **Expo pass / Expo checks (QA):** the final check at the pickup window before you trust/serve an answer
* **Token (slice / prep piece):** a small unit of text the model predicts next
* **Counter space (context window):** how much text it can consider at once
* **Attention (glances):** how it links relevant parts of the ticket/counter while generating
* **Decoding (chef style setting):** how the system chooses the next piece from many candidates
* **Temperature / top-p (improv meter):** settings that control how strict or varied the model's choices are
* **Hallucination (phantom ingredients):** confident-sounding details not supported by what's on the prep counter (provided sources)

---

## Visual notes (HUD components to show in this section)

* **Ticket Card:** “Order / House Rules / Plating / Expo Checks”
* **Prep Counter Panel:** a short chat transcript + “Counter Space” meter (context window)
* **Chef Style Slider:** Standard Recipe ↔ Chef’s Special (sampling ON/OFF)
* **Generation loop:** “Score next slices → pick one → plate → repeat” (CRT-style block / typewriter reveal)
* **Tiny candidate list:** “Top 3 next slices” preview to hint that the cook is choosing from options
* **Stamp overlays:** `NO PHANTOM INGREDIENTS`, `MISSING INFO`, `NEEDS TOOL CHECK`

**Next up:** Now that you know how the cook works, let's talk about the prep counter—why long chats drift, and how to keep important constraints from falling off the edge.
