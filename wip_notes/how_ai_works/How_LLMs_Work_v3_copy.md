## 1) Mise en Place: How LLMs Generate Text (and Why Prompts Matter)

Think of an LLM as a line cook that can work at absurd speed. It doesn’t “serve the whole plate” in one go—it plates **one small prep piece at a time** (a token/chunk). After each piece, it glances back at what’s already on the plate and asks: *“Given everything so far, what’s the most likely next piece?”* Then it adds that piece…and repeats.

In kitchen terms: generation is a tight loop of **read the ticket → add one step → re-check → keep going**.

### What’s really happening under the hood

Behind the scenes, the model scores lots of possible “next prep pieces.” Then the system **chooses** one and moves on. That choosing step—your **chef style setting (decoding)**—is why the exact same ticket (prompt) can produce responses that feel either:

* **Standard recipe**: stable and repeatable (nearly the same wording each run), or
* **Chef’s special**: varied and creative (same idea, different phrasing)

Those differences aren’t magic. They’re usually the result of decoding choices—especially whether you’re in a more deterministic “standard recipe” mode or a sampling-based “chef’s special” mode.

### Why prompts matter more than people expect

The model’s default job is simple: produce a **coherent continuation** of what you’ve put in front of it.

In this theme, your prompt is the **ticket**—and a ticket can be either sloppy or crisp:

* If your ticket is **vague**, “coherent” often means the cook picks one interpretation of messy notes and confidently cooks it. That’s how you get **phantom ingredients**: details that sound plausible but were never actually on the prep counter.
* If your ticket is a **spec** (house rules + plating format + expo checks), “coherent” shifts toward: *“Follow the ticket, use only what’s on the prep counter, and plate something we can review before it leaves the window.”*

Prompts don’t make the cook “more talented.” They make the work **more auditable**—and that’s what you want during a real rush.

### TL;DR

The model predicts “what comes next,” **one prep piece at a time**. Your ticket (prompt) supplies two things:

* **Instructions (house rules on the ticket):** what to do, in what format, with what checks
* **Context (what’s on the prep counter):** what the cook is allowed to use as ingredients/evidence right now

Better specs don’t increase intelligence—they increase **verifiability**.

*Nerd note (optional):* the model assigns probabilities to many candidate next pieces. **Decoding** is how the system picks one—ranging from “standard recipe” (more deterministic) to “chef’s special” (sampling). Settings like **temperature/top‑p** are basically an **improv meter** when sampling is used: higher typically allows more variation in which piece gets chosen.

### Two separations that prevent workplace confusion

These two distinctions save teams a lot of pain:

* **Model vs tools:** the cook can draft a dish; only instruments can verify reality.
  *The cook can narrate a steak. Only the thermometer can tell you it’s actually done.*
* **Instructions vs context:** the ticket is what you want done; the prep counter is what you’re allowed to use.
  *A recipe isn’t ingredients. Ingredients aren’t a recipe.*

### Running example

Throughout this guide, we’ll use one messy intake dump—think of it as a chaotic stack of catering tickets (our “Marketing Potluck” scenario)—to practice extraction, normalization, and QA. The point is the workflow, not potluck logistics.

### Expo check

If someone says, “the chef knows our order,” what’s the safer correction?

**Model answer:** The chef only knows what’s on the ticket/prep counter unless it’s connected to a verified tool (like a reservation system or ordering tool) that can actually check the schedule.

*Visual aid (placeholder): score next prep pieces → choose one → plate → repeat.*

---

### Sidequest (optional): Micro‑Glossary

* **Model (line cook):** the text generator producing output
* **Prompt (ticket):** your instructions plus any pasted context
* **Token / chunk (prep piece):** a small unit of text the model predicts next
* **Context window (counter space):** how much text it can consider at once
* **Attention (glances):** how it links relevant parts of the ticket/counter while generating
* **Decoding (chef style setting):** how the system chooses the next piece from many candidates
* **Temperature / top‑p (improv meter):** settings that influence how strict vs varied the choosing is **when sampling is used**
* **Hallucination (phantom ingredients):** confident-sounding details not supported by what’s on the prep counter (provided sources)

Important nuance: “temperature” by itself isn’t “randomness.” You typically get run‑to‑run variation when the system is actually using **sampling** (chef’s special mode).