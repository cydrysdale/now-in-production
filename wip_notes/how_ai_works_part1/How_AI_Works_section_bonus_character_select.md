# BONUS SECTION: Character Selection — Why Models Feel Different (and why "best" is a trap)

> *This section is optional reading. The core guide teaches you how to work with any model. This bonus helps you understand why different models feel different—and how to pick one for a specific job.*

Throughout this guide, we've treated the **model as a line cook**, your **ticket (prompt)** as the order, your **prep counter (context)** as what’s in view for this turn, and your **counter space (context window)** as limited—what’s visible *right now* is what can be used. If it's not on the ticket, it doesn't exist.

Now we add a nuance: **not all line cooks were trained the same.**

### 1) Same ticket, different chef

Give the same ticket to two experienced cooks and you’ll get two different plates.

Not because one is “smart” and the other is “dumb,” but because they’ve practiced different things:

* One grew up on **classic French technique** (precise structure, careful reasoning).
* One worked the **rush-hour grill** (fast answers, rough edges).
* One did a decade in **pastry** (beautiful presentation, sometimes too sweet).

AI models are like that. Their “background” comes from two big forces:

1. **What they trained on (their corpus)** — the kinds of text/images/code they saw while learning patterns.
2. **How they were trained (their training recipe)** — the tuning and “house rules” layered on top so they behave more helpfully/safely.

**Kitchen truth:** *A model’s vibe is mostly a memory of what it practiced—and what it was rewarded for.*

---

### 2) The corpus: culinary school + years of reps

A model’s training data is like a chef’s lifetime of tasting, watching, and repeating recipes.

Crucially: the model **doesn’t store the training set like a library** it can flip through mid-service. Training changes the model’s internal numbers (“weights”), which are more like **muscle memory** than a searchable cookbook. OpenAI describes their data sources broadly as a mix of public internet, partner data, and data from users/trainers/researchers—and emphasizes that models don’t retain copies of training items. ([OpenAI Help Center][1])

Different companies disclose different amounts, but when they *do* describe their corpus, it’s usually some variant of:

* **Web documents + books + code** (common baseline)
* Sometimes **images/audio/video** for multimodal models
  (e.g., the Gemini technical report describes pretraining data from web docs, books, and code, and includes image/audio/video. )
* Sometimes additional **specialty mixes** (like more code, more dialogue, more academic text, more “real-time” content)

**Kitchen truth:** *Training data is a chef’s past—felt in the hands, not stored on the counter.*

---

### 3) The training recipe: “how the chef behaves under pressure”

Pretraining is learning general patterns (“how language usually goes”). But post-training is where the restaurant installs the **house rules**:

* Be helpful.
* Don’t hallucinate confidently. (It will try anyway.)
* Ask clarifying questions when needed. (Sometimes it forgets.)
* Avoid certain unsafe categories.

Anthropic describes “Constitutional AI” as giving the model an explicit set of principles (“the constitution”) and using that during training—so the “values” are more inspectable than pure human thumbs-up/thumbs-down. ([Anthropic][2])
xAI’s Grok model card describes a multi-stage recipe (pretraining + supervised fine-tuning + reinforcement learning) and also mentions training on **synthetic data** as part of its approach. 

So two models can know roughly the same *things*, but behave differently when the ticket is ambiguous, risky, emotional, or adversarial—because they were *rewarded differently* during training.

**Kitchen truth:** *Two chefs can share ingredients and still plate differently if the head chef rewards different habits.*

---

### 4) Tools and ecosystem: what’s on their station

A line cook is only as effective as their station setup.

Same with models: some live inside products that give them “kitchen tools”—search, code execution, file access, email/calendar integration, enterprise connectors, etc. That changes what “good” looks like.

Example: Microsoft says Copilot is designed to work across Microsoft 365 apps and uses orchestration/routing with underlying models (they describe GPT-5 as part of that stack). ([GitHub Docs][3])
Google positions Gemini 3 as available across Google surfaces (Gemini app, AI Studio, Vertex AI, Search experiences). ([blog.google][4])

**Kitchen truth:** *A chef without tools guesses; a chef with tools measures.*

---

### 5) So… is there a best AI?

Only in the same way there’s a “best vehicle.”

Best *for what*?

* Hauling gravel?
* Racing corners?
* Driving kids to school?
* Operating in the snow?

AI is the same. The “best model” depends on the ticket:

* Do you need **creative options** or **surgical accuracy**?
* Do you need **speed** or **deep reasoning**?
* Do you need **tight safety rails** or **more open-ended exploration**?
* Do you need it to **use your tools** (docs, code, web, enterprise data), or is it working purely from what you pasted onto the counter?

**Kitchen truth:** *There’s no best chef. There’s only the best chef for this ticket, in this kitchen, with these tools.*

---

## Expo Check: Pick the chef

**Ticket:** “Summarize this messy 20-page doc into: (1) 6 bullet executive summary, (2) risks, (3) next steps. Cite where each claim came from. If info is missing, label it MISSING INFO.”

**Expo answer (how to think, not which brand to worship):**
Pick a model/product combo that:

1. can reliably follow a strict output format,
2. is comfortable with long documents (or can work in chunks), and
3. supports citations/checks (either by careful quoting from provided text, or by tool-based retrieval you can verify).
   Then force the behavior with the ticket: explicit structure, explicit “MISSING INFO,” and an Expo Pass checklist at the end.

**Kitchen truth:** *If you didn’t measure it, you don’t know it.*

---

## Character Select: Chef Bios (for your fighting-game roster)

These bios are “true where public info is clear” and **honest where details are not disclosed**. The goal is to teach readers *how to choose*, not to pretend we can see the locked back room.

### **ChatGPT (OpenAI) — “The All-Rounder Sous Chef”**

**Public training note:** OpenAI describes training inputs broadly as (1) public internet content, (2) partner data, and (3) data provided/generated by users, trainers, and researchers; and notes that trained models don’t retain copies of that data. ([OpenAI Help Center][1])
**Good for:** Clear structured drafts, planning, summarizing, rewriting, and “turn this chaos into a plan” workflows.
**Watch-outs:** Can still hallucinate and sound confident; use a strict Expo Pass checklist when correctness matters.
**Ticket tip:** Ask for: *assumptions*, *uncertainties*, and a *final verification step* (what needs a tool check vs what’s supported by the counter).

---

### **Gemini (Google) — “The Multimodal Prep Monster”**

**Public training note:** Gemini’s technical report describes training on a multimodal, multilingual dataset using web documents, books, and code, including image/audio/video.
**Good for:** Multimodal workflows and “use the ecosystem” tasks (docs + slides + search + planning). ([blog.google][4])
**Watch-outs:** Can improvise; when accuracy matters, force traceability (quotes/receipts) instead of vibes.
**Ticket tip:** Require: “Quote the exact line I gave you that supports this bullet” (or equivalent).

---

### **Claude (Anthropic) — “The Careful, Principle-Driven Chef”**

**Public training note:** Anthropic describes “Constitutional AI” as training with an explicit set of principles (“a constitution”) and using those principles during critique/revision and reinforcement learning stages to shape safer, more helpful behavior. ([Anthropic][2])
**Good for:** Thoughtful longform writing, editing, and careful reasoning when you want a steadier “don’t be reckless” posture.
**Watch-outs:** May refuse or hedge more readily depending on topic; still needs grounding when facts matter.
**Ticket tip:** If you hit over-caution, tighten the scope: “High-level, non-actionable summary” or “Explain the tradeoffs” rather than “Give me step-by-step instructions.”

---

### **Grok (xAI) — “The Spicy Line Cook (Fast, Real-Time-Flavored)”**

**Public training note:** Grok’s model card describes training that includes supervised fine-tuning and reinforcement learning, and mentions the use of synthetic data in the training recipe.
**Good for:** Rapid ideation, punchy rewrites, brainstorming, and opinionated framing (when factual precision isn’t the main goal).
**Watch-outs:** “Bold” can become “confidently wrong.” Treat outputs like a draft that must be checked.
**Ticket tip:** If you need correctness, force restraint: “If you’re not sure, say ‘UNCERTAIN’ and list what would verify it.”

---

### **Copilot (Microsoft / GitHub) — “The IDE Station Specialist”**

**Public product note:** GitHub Copilot is built for coding workflows and supports multiple underlying models depending on plan/org settings. ([GitHub Docs][3])
**Good for:** Code completion, refactors, “write the boring parts,” and inline explanations in the flow of dev tools.
**Watch-outs:** Can generate plausible-but-wrong code; may miss project-specific constraints unless you feed it repo context.
**Ticket tip:** Require: “Explain what you changed,” “List assumptions,” and “Add a minimal test or validation step.”

---

### **Llama (Meta) — “The Build-Your-Own Chef (Open Weights)”**

**Public training note:** Meta’s Llama 3.2 model card describes pretraining on up to **9T tokens** from “publicly available sources,” and describes alignment stages (SFT + preference optimization methods) for instruction-tuned variants. ([Hugging Face][5])
**Good for:** Privacy-sensitive workflows, custom assistants, offline/edge scenarios, experimentation, and “run it where you want” setups.
**Watch-outs:** “You own the kitchen” also means “you own the safety, evaluation, and ops.”
**Ticket tip:** Build your own Expo Pass: eval set, regression tests, and a refusal/safety layer appropriate to your environment.

---

## TL;DR Panel

* Models differ because they practiced on different corpora and were rewarded by different training recipes. ([OpenAI Help Center][1])
* Training builds "muscle memory," not a searchable database. ([OpenAI Help Center][1])
* Tools and ecosystem matter as much as raw model skill. ([GitHub Docs][3])
* "Best AI" is a category error: choose the best chef *for the ticket*.
* Use Expo checks (assumptions, missing info labels, verification steps) to prevent confident nonsense.

---

## References

The model bios and training details above reference publicly available information from these sources:

[1] OpenAI Help Center - How ChatGPT and our language models are developed
https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed

[2] Anthropic - Constitutional AI
https://www.anthropic.com/constitutional-ai

[3] GitHub Docs - About GitHub Copilot
https://docs.github.com/en/copilot/about-github-copilot

[4] Google Blog - Gemini 1.5 and Gemini across Google products
https://blog.google/products/gemini/

[5] Hugging Face - Meta Llama 3.2 Model Card
https://huggingface.co/meta-llama/Llama-3.2-3B

All citations reflect information that was publicly documented as of the guide's writing. Model capabilities, ecosystems, and disclosures evolve—when in doubt, check the vendor's current documentation.

**Kitchen truth:** *Good receipts never go out of style.*

---

**Ready to put this into practice?** Return to Section 7’s “Quest Log (starter missions)” to start using the templates with your actual work.

---

## Visual notes (HUD components to show in this section)

* **Character Select screen:** use `wip_notes/how_ai_works/assets/character_select/*.png` as portraits (grid + highlight frame + “SELECT” button)
* **Stat bars (playful, not absolute):** Speed / Structure / Safety Rails / Tooling (avoid “best model” claims)
* **Info panel layout:** “Good for / Watch-outs / Ticket tip” as stacked cards or tabs
* **Optional widget:** Rule Card (“random ticket tip”) and/or Audit Quiz (“pick the chef for this ticket”)
* **Callout:** “Models patch often—treat this as selection logic, not a permanent tier list.”
