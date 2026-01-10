### 1) Mise en Place: How LLMs Generate Text (and Why Prompts Matter)

Most people meet an LLM like this:

* You ask for something simple.
* It answers confidently.
* Later you realize it invented a detail, ignored a constraint, or gave a different answer the second time.

That isn’t the model being “moody.” It’s the result of how it generates text.

Think of an LLM as a line cook who works at absurd speed. It doesn’t cook the whole dish in one go. It adds **one tiny slice of text at a time** (a *token*—sometimes a word, sometimes part of one). After each slice, it looks at what’s visible **on the prep counter** (the text so far) and the **ticket** (your instructions), then asks:

> “Given what I can see right now, what’s the most plausible next slice?”

Then it adds that slice…and repeats.

**Kitchen truth:** The cook isn’t “thinking in paragraphs”—it’s cooking one tiny step at a time.

---

### What’s really happening (minus the mysticism)

Behind the scenes, the model considers lots of possible “next slices” and scores them. Then the system **chooses one** and moves on.

That choosing step is your **chef style setting (decoding)**. It’s why the same ticket can produce output that feels like either:

* **Standard recipe:** stable and repeatable (nearly the same each run), or
* **Chef’s special:** varied and improvisational (same idea, different phrasing)

Not magic. Just different ways of picking the next slice.

**Kitchen truth:** Same ticket, different plating—because the system can choose different “next steps.”

---

### Why prompts matter more than people expect

The model’s default job is simple: produce a **coherent continuation** of whatever you put in front of it.

So if your ticket is **vague**, “coherent” usually means the cook picks an interpretation and commits. That’s how you get **phantom ingredients**: details that sound plausible but were never actually provided.

If your ticket is a **spec** (house rules + plating format + an expo check), “coherent” shifts toward:

> “Follow the ticket, use only what’s on the prep counter, and plate something humans can verify.”

Prompts don’t make the cook smarter. They make the result **easier to review and harder to misinterpret**—which is what you want when it matters.

**Kitchen truth:** Better tickets don’t add talent—they add accountability.

---

### TL;DR

The model predicts “what comes next,” **one slice at a time**. Your ticket (prompt) supplies two different things:

* **Instructions (on the ticket):** what to do, in what format, with what checks
* **Context (on the prep counter):** the info it’s allowed to use right now

Better specs don’t increase intelligence—they increase **verifiability**.

**Kitchen truth:** If it’s not on the ticket or the counter, it doesn’t exist.

---

### Optional nerd note: the “improv meter”

When the system is in **Chef’s special** mode (sampling), settings like **temperature/top-p** influence how adventurous the choice is. Higher usually allows more variation *when sampling is used*.

(If sampling is off, temperature doesn’t magically create creativity—it’s mostly a no-op.)

---

### Two separations that prevent workplace confusion

* **Model vs tools:** the cook can draft a dish; only instruments can verify reality.
  *The cook can narrate a steak. Only the thermometer can tell you it’s actually done.*

* **Instructions vs context:** the ticket is what you want done; the prep counter is what you’re allowed to use.
  *A recipe isn’t ingredients. Ingredients aren’t a recipe.*

**Kitchen truth:** If you didn’t measure it, you don’t know it.

---

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
