## Section: **Character Selection — Why Models Feel Different (and why “best” is a trap)**

In the intro, we set the stage: the **model is the line cook**, your **prompt is the ticket**, and the **context window is the prep counter**—what’s visible *right now* is what can be used. If it’s not on the ticket, it doesn’t exist.  

Now we add the next ingredient: **not all line cooks were trained the same.**

### 1) Same ticket, different chef

Give the same ticket to two experienced cooks and you’ll get two different plates.

Not because one is “smart” and the other is “dumb,” but because they’ve practiced different things:

* One grew up on **classic French technique** (precise structure, careful reasoning).
* One worked the **rush-hour grill** (fast answers, rough edges).
* One did a decade in **pastry** (beautiful presentation, sometimes too sweet).
* One learned in a kitchen where “never say no” was the rule (more adventurous, more risk).

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

**Model answer (how to think, not which brand to worship):**
Pick a model/product combo that:

1. can reliably follow a strict output format,
2. is comfortable with long documents (or can work in chunks), and
3. supports citations/checks (either by careful quoting from provided text, or by tool-based retrieval you can verify).
   Then force the behavior with the ticket: explicit structure, explicit “MISSING INFO,” and an Expo Pass checklist at the end.

**Kitchen truth:** *If you didn’t measure it, you don’t know it.*

---

# Character Select: Chef Bios (for your fighting-game roster)

These bios are “true where public info is clear” and **honest where details are not disclosed**. The goal is to teach readers *how to choose*, not to pretend we can see the locked back room.

### **ChatGPT (OpenAI) — “The All-Rounder Sous Chef”**

**Studio:** OpenAI
**Training snapshot (publicly described):** OpenAI describes training inputs broadly as (1) public internet content, (2) partner data, and (3) data provided/generated by users, trainers, and researchers; and notes that trained models don’t retain copies of that data. ([OpenAI Help Center][1])
**Signature moves:** Clear structured drafts, strong general reasoning, good “turn this chaos into a plan” energy.
**Best quests:** Writing + rewriting, summarizing, planning, brainstorming, explaining concepts, multi-step task breakdowns.
**Watch-outs:** Can still hallucinate; can sound confident; needs a strict Expo checklist when correctness matters.
**Ticket tip:** Ask for: *assumptions*, *uncertainties*, and a *final verification step* (what would need a tool check vs what’s supported by the provided text).

---

### **Gemini (Google) — “The Multimodal Prep Monster”**

**Studio:** Google / Google DeepMind
**Training snapshot (publicly described):** Gemini’s technical report describes training on a multimodal, multilingual dataset using web documents, books, and code, including image/audio/video. 
**Signature moves:** Strong “reads the room” across modalities when used in Google’s ecosystem; often great at tasks that mix text + other inputs.
**Best quests:** Multimodal workflows, planning + tool use in Google surfaces, research organization, summarization, building/learning/plan tasks across Google products. ([blog.google][4])
**Watch-outs:** As with any model: can improvise; needs explicit constraints and checks for accuracy.
**Ticket tip:** When you care about fidelity, require “Quote the exact line I gave you that supports this bullet” (or equivalent traceability).

---

### **Claude (Anthropic) — “The Careful, Principle-Driven Chef”**

**Studio:** Anthropic
**Training snapshot (publicly described):** Anthropic describes “Constitutional AI” as training with an explicit set of principles (“a constitution”) and using those principles during critique/revision and reinforcement learning stages to shape safer, more helpful behavior. ([Anthropic][2])
**Signature moves:** Thoughtful tone, strong at longform writing and careful reasoning in many workflows.
**Best quests:** Policy/communications drafts, editing, analysis that benefits from a steadier “don’t be reckless” posture, structured thinking.
**Watch-outs:** May refuse or hedge more readily depending on topic; still needs grounding when facts matter.
**Ticket tip:** If you hit refusal/over-caution, tighten the scope: “High-level, non-actionable summary” or “Explain the tradeoffs” rather than “Give me step-by-step instructions.”

---

### **Grok (xAI) — “The Spicy Line Cook (Fast, Real-Time-Flavored)”**

**Studio:** xAI
**Training snapshot (publicly described):** Grok’s model card describes training that includes supervised fine-tuning and reinforcement learning, and mentions the use of synthetic data in the training recipe. 
**Signature moves:** A bolder, sometimes more irreverent style; often positioned around “current conversation” culture and fast takes.
**Best quests:** Rapid ideation, punchy rewrites, brainstorming, opinionated framing (where factual precision isn’t the main goal).
**Watch-outs:** “Bold” can become “confidently wrong.” Treat outputs like a first draft that must be checked.
**Ticket tip:** If you need correctness, force restraint: “If you’re not sure, say ‘UNCERTAIN’ and list what would verify it.”

---

### **Copilot (Microsoft / GitHub) — “The IDE Station Specialist”**

**Studio:** Microsoft + GitHub
**Training snapshot (publicly described):** GitHub Copilot is built for coding workflows and supports multiple underlying models (the roster can include offerings from OpenAI, Anthropic, Google, and xAI depending on plan/org settings). ([Microsoft][5])
Microsoft positions Microsoft 365 Copilot as integrated across the Microsoft 365 suite with orchestration/routing and GPT-5 in its described stack. ([GitHub Docs][3])
**Signature moves:** Code completion, refactors, “write the boring parts,” inline explanations in the flow of development tools.
**Best quests:** Daily programming work, navigating large codebases, generating tests, scaffolding, API usage patterns.
**Watch-outs:** Can generate plausible-but-wrong code; may miss project-specific constraints unless you feed it context from your repo.
**Ticket tip:** Require: “Explain what you changed,” “List assumptions,” and “Add a minimal test or validation step.”

---

### **Llama (Meta) — “The Build-Your-Own Chef (Open Weights)”**

**Studio:** Meta
**Training snapshot (publicly described):** Meta’s Llama 3.2 model card describes pretraining on up to **9T tokens** from “publicly available sources,” and describes alignment stages (SFT + preference optimization methods) for instruction-tuned variants. ([Hugging Face][6])
**Signature moves:** You can run it where you want (including local/on-device setups depending on size), tune it, wrap it in your own toolchain.
**Best quests:** Privacy-sensitive workflows, custom assistants, offline/edge scenarios, experimentation, domain fine-tuning.
**Watch-outs:** “You own the kitchen” also means “you own the safety, evaluation, and ops.”
**Ticket tip:** Build your own Expo Pass: eval set, regression tests, and a refusal/safety layer appropriate to your environment.

---

## TL;DR Panel

* Models differ because they practiced on different corpora and were rewarded by different training recipes. ([OpenAI Help Center][1])
* Training builds “muscle memory,” not a searchable database. ([OpenAI Help Center][1])
* Tools and ecosystem matter as much as raw model skill. ([GitHub Docs][3])
* “Best AI” is a category error: choose the best chef *for the ticket*.
* Use Expo checks (assumptions, missing info labels, verification steps) to prevent confident nonsense.
