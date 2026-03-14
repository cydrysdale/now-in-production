# Pixel Kitchen Metaphor Guide Sheet

**Use this as your internal “rewrite spec” for the LLM prompting guide.** It keeps the kitchen/restaurant theme consistent, technically accurate, and visually compatible with pixel‑game graphics—without ever needing to say “this is a video game.”

---

## 1) Core creative premise

You’re running a busy kitchen during service.

* The **model** is a fast line cook that can produce plausible dishes quickly.
* The **prompt** is the **ticket** (plus station notes): it defines what to make, how to present it, and what constraints apply.
* The **context** is what’s **on the prep counter right now** (mise en place + any reference text you’ve pasted + verified tool outputs). It’s the *only* stuff the cook can reliably work from in the moment.
* **Tools** are the *real* verification systems (thermometer, scale, inventory terminal, calendar system, etc.).

The tone is “competent expo/shift lead”: practical, calm, a little wry, and always oriented toward repeatable outcomes.

---

## 2) Canonical mapping (technical → metaphor)

This is the mapping to use consistently throughout the guide.

### A) The three “stores of knowledge” (prevents common confusion)

| Technical concept                          | Metaphor label                            | How to talk about it                              |
| ------------------------------------------ | ----------------------------------------- | ------------------------------------------------- |
| Training corpus (what it learned)          | **Culinary school / years of experience** | “The cook learned patterns over time.”            |
| Model weights/params (compressed learning) | **Technique / muscle memory**             | “Skill, not a searchable stockroom.”              |
| Runtime context (prompt + tool outputs)    | **Prep counter (mise en place)**          | “What’s on the counter is what the cook can use.” |

**Rule:** Do *not* imply the model can “go fetch” items from training. Training is *skill*, not *inventory you can browse*.

### B) Prompting and generation

| Technical concept         | Metaphor label                                      | Use cases in text                                                  |
| ------------------------- | --------------------------------------------------- | ------------------------------------------------------------------ |
| Prompt                    | **Ticket**                                          | “Write a better ticket.”                                           |
| Instructions              | **House rules + recipe requirements on the ticket** | “Must be gluten‑free; plate in three bullets; include a QA check.” |
| Context                   | **Prep counter contents**                           | “Ingredients, notes, references placed in view.”                   |
| Context window            | **Counter space / screen space**                    | “Too much clutter → details fall off the counter.”                 |
| Tokens                    | **Chops / slices / prep pieces**                    | “The cook plates one small piece at a time.”                       |
| Autoregressive generation | **Cooking step‑by‑step**                            | “Read ticket → add a step → re-check → repeat.”                    |
| Attention                 | **Glances between ticket + bins**                   | “Messy layout = missed constraints.”                               |

**Rule:** Tokens are not “ingredients.” Tokens are the *cut pieces* (low-level units), not the semantic ingredients.

### C) Output variation and decoding

| Technical concept    | Metaphor label         | How to explain                                      |
| -------------------- | ---------------------- | --------------------------------------------------- |
| Decoding             | **Chef style setting** | “How the system chooses the next move.”             |
| Greedy/deterministic | **Standard recipe**    | “Most consistent plating.”                          |
| Sampling             | **Chef’s special**     | “More variation; still must respect pantry/ticket.” |
| Temperature/top‑p    | **Improv meter**       | “Higher → more variation *when sampling is used*.”  |

**Rule:** Always attach the nuance: variation generally comes from **sampling**, not “temperature alone.”

### D) Truth and verification

| Technical concept               | Metaphor label                                                  | How to talk about it                                  |
| ------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------- |
| Tools (calendar, DB, web, etc.) | **Thermometer / scale / inventory terminal / reservation book** | “If you didn’t measure it, you don’t know it.”        |
| Hallucination                   | **Phantom ingredients / imaginary orders**                      | “It plated basil that isn’t on the counter.”          |
| QA / validation                 | **Expo pass**                                                   | “Before it leaves the window, we check spec + facts.” |

---

## 3) The two separations (keep these as recurring “mini-lessons”)

### A) Model vs tools

* **Line cook (model):** can produce a plausible dish fast.
* **Instruments (tools):** verify reality.

**Canonical line (repeatable microcopy):**

> “The cook can narrate a steak. Only the thermometer can tell you it’s actually done.”

### B) Instructions vs context

* **Instructions (ticket):** what to do + format + constraints + checks.
* **Context (prep counter):** what evidence/inputs you’re allowed to use.

**Canonical line:**

> “A recipe isn’t ingredients. Ingredients aren’t a recipe.”

---

## 4) Visual system (pixel‑game UI components)

Design your graphics like a consistent HUD. Reuse these components across chapters.

### A) Ticket Card (Prompt UI)

A rectangular card with sections:

* **Order (Goal)**
* **House Rules (Constraints)**
* **Plating (Output format)**
* **Expo Checks (QA checklist)**

Optional stamp overlays:

* **MISSING INFO**
* **OUT OF STOCK**
* **NEEDS TOOL CHECK**

### B) Prep Counter Panel (Context UI)

A grid/inventory box showing:

* “Items on counter” (facts, notes, pasted text)
* Quantity bars (optional)
* “Counter space” meter (context window)

### C) Back Room Pantry Panel (Training UI — locked)

Show it as a greyed-out area with a lock icon:

* Label: **“Back Room (Learned Technique)”**
* Tooltip: “Not directly searchable during service.”

### D) Chef Style Slider (Decoding UI)

A single slider:

* Left: **Standard Recipe (consistent)**
* Right: **Chef’s Special (varied)**
  Add a small toggle label: “Sampling ON/OFF”

### E) Expo Pass Checklist (QA UI)

A checklist overlay:

* “Uses only counter items”
* “All constraints satisfied”
* “Format matches plating spec”
* “Tool-verified items cited (if any)”
* “Unknowns called out”

---

## 5) Voice, tone, and recurring phrasing

### Tone rules

* Be direct, practical, and slightly conversational.
* Use short “kitchen truth” one-liners to land key concepts.
* Avoid roleplay fluff; the metaphor is scaffolding, not the point.

### Approved recurring phrases

Use these repeatedly; repetition is a feature.

* “What’s on the counter is what we can cook with.”
* “If it’s not on the ticket, it doesn’t exist.”
* “If you didn’t measure it, you don’t know it.”
* “Expo catches mistakes before customers do.”
* “No phantom ingredients.”

### Avoid

* Overly cutesy dialogue, heavy “NPC” voice, or long in-world scenes.
* Any phrasing that suggests the model can “look up” its training data like a database.

---

## 6) Section naming conventions (rename your guide headers)

Use kitchen terms as headers, with the technical term optionally as a subtitle once per section.

Examples:

* **Mise en Place: How the Kitchen Generates Output**
  *(LLMs generate text step-by-step)*
* **Ticket Writing: Why Prompts Control the Dish**
  *(Prompts as specs)*
* **Prep Counter vs Ticket**
  *(Context vs instructions)*
* **Chef Style Settings**
  *(Decoding, sampling, temperature/top‑p)*
* **Expo Pass**
  *(QA + auditability)*
* **Thermometers and Scales**
  *(Tools and verification)*

**Rule:** At first mention in a section, write both terms once:
“Ticket (prompt)”, “prep counter (context)”, “expo pass (QA)”.
After that, use the metaphor term unless precision requires the technical one.

---

## 7) Running example re-skin (replace “Marketing potluck” cleanly)

Keep the learning goals identical (extraction → normalization → QA), but rename the scenario to match the theme.

### Recommended framing

**“Catering Chaos: Turning a Ticket Pile into a Prep Plan”**

**Mapping:**

* Messy intake dump → **pile of half-legible tickets + notes**
* Extraction → **parse orders + constraints into structured fields**
* Normalization → **standardize item names + diet tags**
* QA → **allergen flags + missing fields + conflicts**
* Output → **prep list + station assignments + service plan**

**Rule:** Keep it generic enough that you’re not teaching cooking logistics; you’re teaching “spec → structured output → checks.”

---

## 8) Rewrite rules (hard constraints)

Use these as literal instructions when rewriting each section.

1. **Always keep the technical truth.** The metaphor must never change the underlying explanation.
2. **Every concept must map consistently.** Don’t swap “pantry” to mean different things in different chapters.
3. **Do not make training data a browsable pantry.** Training = learned technique, not retrievable facts.
4. **Context = what’s visible on the counter.** If it isn’t on the counter (prompt/tool output), the cook shouldn’t claim it.
5. **Tokens = cuts/slices, not ingredients.** If you need “ingredients,” use “facts/inputs/items on the counter.”
6. **Tools are explicit verification.** Calendar checks, DB queries, web lookups = thermometers/scales/inventory terminal.
7. **Include an “Expo Check” beat per major chapter.** One short checkpoint question + model answer.

---

## 9) Micro-templates you can copy/paste while rewriting

### A) Chapter intro template

> “In this section, we’ll treat the model like a line cook: fast, consistent at patterns, and always cooking one small step at a time. Your ticket (prompt) and what’s on the prep counter (context) determine what can be plated—and what can’t.”

### B) “Why prompts matter” template

> “A vague ticket still gets cooked—but the cook will make reasonable assumptions and keep moving. A good ticket is a spec: rules, format, and an expo check so the result is reviewable.”

### C) Reader checkpoint template

**Expo Check:** If someone says “the cook knows what’s in the fridge,” what’s the safer correction?
**Answer:** “Only what’s on the prep counter (provided context) or verified with a tool.”

### D) Nerd note template

> “Back-of-house note: the cook is choosing the next small step from many candidates. Settings determine whether we follow the standard recipe closely or allow more ‘chef’s special’ variation.”

---

## 10) Quick QA checklist for your rewrite

Before finalizing any rewritten section, verify:

* [ ] The metaphor mapping is consistent (ticket/context/tools).
* [ ] You didn’t imply the model can retrieve from training like a database.
* [ ] Any “facts” are clearly from the prep counter (context) or tool-verified.
* [ ] “Variation” is correctly tied to sampling/decoding, not vague randomness.
* [ ] There is at least one expo/QA beat that teaches auditability.
* [ ] The writing is friendlier, but still crisp and instructional.

