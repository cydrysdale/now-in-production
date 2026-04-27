# Development History Reconstruction: The AI Guide Project

> Reconstructed 2026-04-10 from repository evidence (git history, file timestamps), Claude Code session artifacts, Codex CLI history, ChatGPT webapp conversation history, and project files. Two independent reconstructions were produced — one from the CLI toolchain (git, Codex, Claude Code) and one from the ChatGPT webapp — then merged into this document.

---

## Evidence Sources

| Source | Location / ID | Date Range | What It Provides |
|---|---|---|---|
| Git history | This repository, all branches | Sep 2025 – Apr 2026 | Commit hashes, dates, file diffs, rename tracking |
| File timestamps | `wip_notes/how_ai_works_part1/`, `images/`, `guides/` | Jan 2026 – Mar 2026 | Creation/modification dates for drafts, images, planning docs |
| Codex CLI history | `~/.codex/history.jsonl` | Jan 2026 | User prompts from two sessions tied to this project |
| Claude Code sessions | `~/.claude/projects/.../*.jsonl` (5 files) | Mar–Apr 2026 | Session metadata (content not extractable) |
| Claude auto-memory | `~/.claude/projects/.../memory/project_ai_guide_part2.md` | Mar 14, 2026 | Context packet decisions snapshot |
| ChatGPT webapp conversations | 7 chats (links below) | ~Jan 2026 | Drafting, review, planning, visual work |
| Process log | `wip_notes/how_ai_works_part2/process-log.md` | Mar 15–25, 2026 | 11 phases of Part 2 production decisions |

### ChatGPT Conversations Referenced

1. [Design Inspo Ideas](https://chatgpt.com/c/69d9077a-a384-83e8-8d4b-0a6636bfebbf)
2. [AI Workflow Appendix](https://chatgpt.com/c/69a08e47-78b0-8333-95c2-555faff6cee8)
3. [Branch: AI Workflow Framework Advice](https://chatgpt.com/c/69b4e152-5594-832d-8b63-6cd83d11e359)
4. [AI Project Timeline](https://chatgpt.com/c/69a106c4-df04-832a-a30c-765449a77b9e)
5. [AI Restaurant Metaphor](https://chatgpt.com/c/699f533e-7720-8327-8900-1eb38a103d5b)
6. [Choose Your Chef Interactive](https://chatgpt.com/c/69a0e023-a97c-8332-8fce-dcef311927e8)
7. [Branch: AI Workflow Framework Advice](https://chatgpt.com/c/69b4e38e-86bc-8330-ac9b-af7130893ccf)

---

## Output 1: Chronological Timeline

### Pre-History: Site Foundation

**~2025-09-10** — Site launched. The "Now in Production" static HTML site went live with initial guides (`rgb-to-cmyk-guide.html`, `who-owns-type.html`), shared CSS/JS, and GitHub Pages hosting. This established the architecture, tone, and design patterns that the AI guide would later need to match.

**Evidence:** Commit `350025f` (2025-09-10, "launch"); initial file structure.

---

### 0. Before the dated files — the project objective becomes clear

**Approx. date:** Before January 2026; exact date not recorded.

The teaching aim took shape before any visible artifact: explain AI to working professionals who need conceptual clarity, not jargon. The audience was marketing professionals, and the goal was to move them from casual prompting to structured, reliable use. This was **educational design** from the start — not just content production, but the design of a teaching system.

**Evidence:** Later planning documents consistently frame this objective. The `guide:updated` meta tag in the first HTML commit says `2025-09-05`, suggesting the idea may have preceded the site launch. No direct planning artifact survives from this period.

**Design work:** educational design, concept development, translation of complexity into accessible structure.

---

### Part 1: The Published Guide

#### Phase B: Content Development + Marketing Potluck

**2025-11-07** — First `how-llms-work.html` file created. A 222-line stub titled "How ChatGPT Works" with placeholder metadata (keywords copied from the RGB guide, OG image pointing to `rgb-to-cmyk-guide.png`). The file existed but was essentially empty scaffolding.

**Evidence:** Commit `89af59d`; `git show` confirms 222 insertions, title "How ChatGPT Works."

---

**~2026-01-06** — Marketing Potluck intake dump finalized (`MARKETING_POTLUCK_INTAKE_DUMP_REVISED.md`). This was not a casually messy dataset — it was precision-engineered mess. Twelve labeled sources (A through L) each planted a specific teaching problem: Slack messages with contradictory constraints, two calendar invites that conflicted on time, location, and scope, a sign-up doc with an almond-flour dessert violating the nut-free requirement, a locked Excel attachment no one could open, HR policy constraints that conflicted with "mandatory fun" culture, and a CEO who "might stop by" with vague dietary preferences ("Whole30-ish"). The final section (L) spelled out seven open questions the data deliberately left unresolved. Every element served a teaching purpose — ambiguity, contradiction, missing decision rights, hard constraints buried beneath soft preferences. This dataset became the single reusable worked example that anchored every concept in the guide.

**Evidence:** File timestamp Jan 6 08:16; `MARKETING_POTLUCK_INTAKE_DUMP_REVISED.md` shows 12 sections, 7 explicit open questions, and intentional cross-source contradictions.

---

**~2026-01-05-07** — Rapid content drafting phase using ChatGPT. The process began with a generation prompt (`draft_prompt.md`) that was itself a design artifact — not "write me a guide" but a structured specification of a teaching system. It assigned a Feynman-inspired pedagogy, required a dual-level explanation pattern (simple enough for a smart twelve-year-old, then a "Make it sharper" refinement for adults), mandated reader checkpoints with corrective coaching ("what to fix if you answered differently"), planned interactive elements as labeled placeholders, and set explicit anti-patterns: no marketing campaign copy, no replacement-anxiety framing, no jargon in first explanations. The success criteria were defined before the first word was generated — a reader should be able to explain what the model does, predict how prompt changes affect output, avoid common misconceptions, write clear instructions with constraints and acceptance checks, and apply the approach to a new scenario.

Six draft versions (v1-v6) were produced and reviewed in a tight generate-review-revise loop that compressed weeks of editorial work into roughly 24 hours:

**v1** arrived as a dense, 12-section guide built around the potluck. It introduced "Common confusion" callouts at key misconception points, interactive placeholders sprinkled near each concept, and the "Explain it like you're 12 / Make it sharper (for work)" dual-level voice. The V0-V4 prompt ladder — the guide's structural spine — was already in place. The v1 review praised the ladder as the strongest element but caught factual imprecision ("predicts the next useful words" implied intention; "predicts the most likely next tokens" stayed mechanical). It also flagged structural bloat: the repeated dual-level labels felt like a chant, the "Interactive (coming soon)" callouts interrupted flow, and the guide needed a micro-glossary to prevent readers from getting lost on terms like "DRI" and "normalize."

**v2** addressed every v1 review item. The glossary appeared, the TL;DR tightened from "useful words" to "most likely text," a "Quick Demo: What Vagueness Breaks" section showed rather than told, and interactive callouts were consolidated into a single reference section. The v2 review singled out one sentence as the best line in the document: *"Training gives it language patterns; tools give it new facts."* Remaining issues were polish-level: inconsistent heading capitalization, a normalization table that bundled two distinct issues into one row (undermining the guide's own definition of normalization), and evidence labels sorted inconsistently.

**v3** applied the v2 polish. Headings standardized. The location row split into two properly normalized entries. Token added to the glossary. But the v3 review performed an unusual analysis: it tracked what was *lost* during editing, not just what was improved. Five specific "Common confusion" callouts had been removed — misconceptions about vague prompts triggering clarifying questions, about the model "understanding like a person," about tokens being words, about chat memory persisting across the context window, and about hallucination meaning lying. The corrective coaching at reader checkpoints ("What to fix if you answered differently") was gone, turning checkpoints from instructional tools into rhetorical questions. A practical prompt-ordering micro-tactic (Rules → Intake → Output format) had disappeared from Section 4. Optional sidequests that broadened appeal — a creative-professional reframe, a "schema-first is underrated" justification, a "when is tool-connected AI worth it" decision guide — were cut. The reviewer also flagged "Kid version" as potentially patronizing for corporate readers and noted that an "80%" claim undercut the guide's anti-hype brand. This "what we lost" analysis is notable — most editorial reviews track forward progress; this one measured the pedagogical cost of cleaning up prose.

**v4** addressed the v3 loss analysis, adding "Randomness (temperature)" to the glossary and presumably restoring selective callouts.

**v5** was a tech review that pushed toward precision — and overshot. The TL;DR changed from "predicts the next most likely text" to "predicts a probability distribution over the next token," gaining accuracy but losing accessibility. A "Nerd note" appeared explaining that the model outputs probabilities and decoding settings determine token selection. The glossary expanded from six to eight terms, adding "Decoding (greedy vs sampling)" and redefining temperature as "a decoding knob that makes probabilities sharper or flatter." The guide was now more technically defensible but harder for marketing professionals to parse. This version represents a tension that would recur throughout the project: the pull toward precision versus the commitment to accessibility, and the question of how much technical nuance a "without the hype" guide can absorb before it becomes the hype it was trying to avoid.

**v6** was the final archived version, produced the following morning. It became the source text for the HTML conversion.

The v1→v6 progression itself mirrors the guide's own V0→V4 prompt ladder: each version added constraints, guardrails, and precision to the specification. The production process was recursively demonstrating its own thesis.

**Evidence:** File timestamps in `archive/` (v1: Jan 6 08:47, v2: Jan 6 09:30, v3: Jan 6 12:07, v4: Jan 6 12:49, v5: Jan 6 14:32, v6: Jan 7 08:18); review notes dated similarly; `draft_prompt.md` (Jan 6 08:34). ChatGPT conversations [AI Workflow Appendix][2], [AI Restaurant Metaphor][5].

---

**~2026-01-08** — Character select artwork generation began. AI-generated full-body "fighting game chef" illustrations for ChatGPT, then iteratively refined.

**Evidence:** `images/character_select/ChatGPT_v1.png` (Jan 8 12:56), `ChatGPT_v2.png` (Jan 8 14:09). ChatGPT conversation [Choose Your Chef Interactive][6].

---

**~2026-01-09** — Pixel Kitchen Metaphor Guide Sheet created. A canonical mapping document establishing the core metaphor system: model = line cook, prompt = ticket, context = prep counter, tools = thermometer/scale, training = culinary school. It also defined the visual language: Ticket Card, Prep Counter Panel, Back Room Pantry, Chef Style Slider, and Expo Pass Checklist. This document became the metaphor constitution for the entire project.

This is where the project became a **designed system** instead of a collection of explanations. The metaphor spec locked conceptual mapping, visual language, and guardrails before scaling content.

**Evidence:** `pixel_kitchen_metaphor_guide_sheet.md` file timestamp Jan 9 09:52. ChatGPT conversation timestamps suggest ~Jan 10 20:07 UTC for the final version. ChatGPT conversations [AI Restaurant Metaphor][5], [Design Inspo Ideas][1].

**Design work:** concept development, visual direction, systems thinking, information design.

---

**~2026-01-10** — Major repository restructuring. Created `guides/` directory, moved CSS/JS to shared `assets/`, established `guides.json` registry, committed all six draft versions, review notes, the pixel kitchen sheet, and character select artwork. Also created initial HTML versions (`how-llms-work-v2.html`).

**Evidence:** Commit `15edb00` (Jan 10, "new structure") — 48 files changed, 13,485 insertions.

---

**~2026-01-10-13** — Section-by-section drafting sprint. Using the metaphor guide sheet as the canon, the core chapter set was produced across ChatGPT and Codex sessions. Each section built on the previous one, creating a structured curriculum:

**Section 1 — "Mise en Place" (generation basics):** Explained step-by-step token generation, introduced the ticket/prep-counter split, reframed prompting as specification rather than magic. Established recurring lines like "If it's not on the ticket or the counter, it doesn't exist." This chapter set the voice of the whole guide: calm, clear, technically honest, metaphor-driven, built around short "kitchen truth" takeaways.
*Design work: educational design, information design, translation of complexity.*

**Section 2 — "Character Selection" (model comparison):** Explained that model differences come from training corpus, training recipe, and tools/ecosystem. Framed model selection as "best for what?" rather than a leaderboard. Introduced the fighting-game roster with chef bios. This is where the guide became **decision-support design** — teaching judgment, not just concepts.
*Design work: concept framing, accessible comparative design.*

**Section 3 — Context window / prep counter:** Introduced recap blocks, assumptions blocks, known-good facts, and "recenter" mechanics. Developed the "Catering Chaos" running example to show how constraints fall off the counter and need to be restated. The guide shifted from conceptual understanding to **operational technique** — teaching reusable workflow habits.
*Design work: systems thinking, workflow design, information design.*

**Section 4 — "Thermometers & Scales" (verification):** Formalized tools as measurement, introduced must-not-guess categories, taught receipts/citations as traceability, and defined a measurement loop: check, put on counter, generate with receipts. The guide moved from "manage context well" to "verify claims against external reality" — a substantial escalation in rigor. This is where it stopped being a beginner explainer and became a **work-quality framework**.
*Design work: systems thinking, instructional design, quality/process design.*

**Section 5 — "Expo Pass" (QA):** Defined QA as a repeatable gate with four core checks: constraints, sources, consistency, and edge cases. Introduced the "Claim, Evidence, Confidence" show-your-work pattern. Tools gave measurement; Expo Pass gave a complete review loop. The workflow now had generation, evidence, and quality control explicitly separated. This chapter made the guide feel like a real operational discipline.
*Design work: quality systems, information architecture, translation of tacit review practice into teachable structure.*

**Section 6 — "Station Workflow" (multi-step decomposition):** Defined a sequence of prep list, station assignments, and service run. Introduced Handoff Cards, intermediate artifacts, recap injection, and the rule that the model should not be PM + researcher + writer + QA all at once. The guide expanded from "how to make one response safer" to "how to design an entire AI-enabled workflow." This is arguably where the project became a **systems design artifact**.
*Design work: systems thinking, workflow design, service design.*

**Section 7 — Conclusion.** Wrapped up the curriculum.

**Bonus — "Choose Your Chef" character select interactive.** Fighting-game-style model selection screen with pixel art sprites, bios, and stat panels.

**Evidence:** Section file timestamps Jan 13 10:47-10:48 (content likely drafted in ChatGPT Jan 10-11, saved to files Jan 13). ChatGPT conversations [AI Workflow Appendix][2], [AI Restaurant Metaphor][5], [Choose Your Chef Interactive][6]. Codex `history.jsonl` session `019b9031` (Jan 10-12), session `019bb338` (Jan 12-13).

---

**~2026-01-10-11 (Codex sessions)** — Used Codex to review the repo and plan the guide structure. Key decisions made:
1. Title should be "How LLMs Work" not "How AI Works" because the concepts are LLM-specific
2. The guide read as "potluck-first" instead of "LLM-first" — a detailed restructuring proposal switching to a concept-first, example-second pattern was developed
3. Codex created `how-llms-work-v2.html` and began implementation
4. Copy was extracted into section-by-section documents (`How_LLMs_Work_v2_copy.md`, then `v3_copy.md`) for granular prose editing independent of HTML layout — a deliberate separation of concerns that allowed content iteration without touching markup

**Evidence:** Codex `history.jsonl` session `019b9031` entries; timestamps align with Jan 10-12 commits.

---

**~2026-01-12** — The kitchen metaphor was applied to the actual guide text. `How_LLMs_Work_v3_copy.md` shows the vocabulary transformation in practice: "Introduction" became "Mise en Place," "prompt" became "ticket" in running prose, "context" became "prep counter contents," "decoding" became "chef style setting," "deterministic" became "standard recipe," "sampling" became "chef's special," "temperature" became "improv meter," and "Reader checkpoint" became "Expo check." The metaphor guide sheet had existed as a specification; this document is where it was applied to prose. Phrases like "If it's not on the ticket or the counter, it doesn't exist" appeared here.

The transformation was more than vocabulary substitution. The entire framing shifted: the v2 copy opened with "An LLM is like a very fast autocomplete" — a simile that kept the technical concept front and explains it through comparison. The v3 copy opened with "Think of an LLM as a line cook or chef that can work at absurd speed" — a metaphor that replaced the technical concept with the kitchen and taught through it. The difference matters: simile says "this is like that"; metaphor says "this *is* that." The guide chose to inhabit the kitchen rather than point at it from outside.

This rewrite also revealed how the v5 tech-review overcorrections translated (or didn't) into the metaphor frame. The precise language about "probability distributions" and "decoding methods" needed kitchen equivalents that preserved accuracy without requiring the reader to understand the underlying statistics. "The model scores lots of possible next prep pieces, then the system chooses one" kept the mechanistic honesty while letting the kitchen do the explanatory work.

**Evidence:** Codex `history.jsonl` session `019b9031` entries; timestamps align with Jan 10-12 commits.

---

**~2026-01-12-13 (Codex sessions)** — Creative review of sections. Established the "fun, playful intro into highly technical concepts" intent. Referenced `rgb-to-cmyk-guide.html` as the tone benchmark and `pixel_kitchen_metaphor_guide_sheet.md` as the metaphor canon.

**Evidence:** Codex `history.jsonl` session `019bb338`; `How_AI_Works_creative_review.md` (timestamp Jan 12 10:53).

---

**~2026-01-12-22** — Creative review and gamified revision proposal developed. The creative review document specified a full "pixel kitchen HUD" visual system (Ticket Cards, Prep Counter Panel, Counter Space meter, Expo Pass Checklist) and benchmarked the guide against `rgb-to-cmyk-guide.html` for callout patterns, image rhythm, and interactive design. The gamified revision proposal (`How_AI_Works_gamified_revision_proposal.md`) proposed swapping restaurant jargon for game/UI language ("Mission Card" instead of "Ticket," "Checkpoint" instead of "Expo Pass") — ultimately the kitchen vocabulary was retained as more natural.

**Evidence:** File timestamps; `How_AI_Works_creative_review.md` (Jan 12), `How_AI_Works_gamified_revision_proposal.md` (Jan 22). ChatGPT conversations [Design Inspo Ideas][1], [Branch: AI Workflow Framework Advice][3].

**Design work:** interaction design, visual system design, vocabulary design.

---

#### Phase C: Kitchen Metaphor Rewrite

**2026-02-13** — "Rewriting LLM guide" commit. A massive ~4,000-line commit that:
- Archived all v1-v6 drafts and review notes into `archive/`
- Created granular section files (section0 through section7 + bonus character select)
- Committed the creative review and gamified revision proposal
- Created multiple HTML versions (v1, v3)
- Restructured the guide around the kitchen metaphor as load-bearing structure

**Evidence:** Commit `a474bb0` — 34 files changed, 3,998 insertions.

---

**2026-02-13-20** — Rapid section-by-section HTML development. "Prep counter" and "order ticket" sections added to the live guide. This is where the kitchen metaphor moved from planning documents into shipped HTML.

**Evidence:** Commits `6433062` ("added prep counter section"), `bb78258` ("updated The Order Ticket section").

---

**2026-02-20** — Context window diagrams created. Two technical illustrations showing context window mechanics and attention patterns (`LLM-context-window.png`, `LLM-context-window-attn.png`).

**Evidence:** File timestamps Feb 20 12:26/12:29.

---

**2026-02-23** — Character select sprites finalized. Six pixel-art sprites (ChatGPT, Claude, CoPilot, Gemini, Grok, LLaMA) at production resolution, plus cropped portraits and a silhouette placeholder. Each was AI-generated, then manually cleaned in Photoshop (downscale with nearest-neighbor, manual silhouette cleanup, highlight/shadow work). Each sprite took ~30-60 minutes from prompt to cleanup.

The making-of document (`making-of-this-guide-ai-workflow.md`) describes the production workflow: AI for requirements planning and review, human for implementation, AI for draft artwork, human for cleanup, AI for copy drafts, human for fact-checking and editing. This is the most explicit public documentation of the workflow approach.

**Evidence:** File timestamps in `images/character_select/` (all .png files at Feb 23 13:28-14:52); `making-of-this-guide-ai-workflow.md` documents the process. ChatGPT conversation [Choose Your Chef Interactive][6].

---

**2026-02-25** — Visual assets created for the guide: banner image (`how-llms-work-banner.png`), card/OG image (`how-llms-work-card.png`), kitchen illustration images (`kitchen-prep-counter.png`, `kitchen-ticket-msg.png`, `kitchen-ticket-prompt.png`), background images for light/dark themes.

**Evidence:** Commit `3e8749c` ("Create how-llms-work-banner.png"); file timestamps Feb 25.

---

**2026-02-25-27** — Intensive HTML refinement. 16 commits over three days, many on Feb 27 alone (13 commits). This was the publication push — integrating visual assets, polishing interactions, refining copy.

**Evidence:** Git log shows 16 commits touching `how-llms-work.html` between Feb 25-27.

---

#### Phase D: Part 1 Final Polish

**2026-03-02-04** — Final Part 1 polish. Title changed to "Demystifying AI: Stepping into the LLM Kitchen." Guide description updated to emphasize the kitchen metaphor. Last content refinements.

**Evidence:** Commits on Mar 2-4; current HTML `<title>` tag.

---

**2026-03-09** — Guide-specific CSS/JS extracted. `how-llms-work.css` and `how-llms-work.js` created as additive modules, separating guide-specific styling from the shared site assets.

**Evidence:** Commit `150b243`.

---

**2026-03-11-12** — Final Part 1 updates. Minor refinements; `guide:updated` meta set to `2026-03-03`. Part 1 is now effectively complete and published.

**Evidence:** Commits `66a0a00`, `23723c7`.

---

### Part 2: The Sequel

#### Phase E: Part 2 Conception + Context Engineering

**~Before 2026-03-14** — Theory outline created. A 13-section conceptual map using "engineering" terminology ("context engineering," "intent engineering," "specification engineering"). Structure was theory-first with interactive reinforcement. Key insight logged: the terminology was accurate but wrong for the audience (marketing professionals, not developers).

**Evidence:** `how-ai-works-part2-theory-outline.md` (timestamp Mar 13 08:06); process log Phase 1 entry.

---

**~Before 2026-03-14** — Outline v2 created. A full rewrite with two major changes: (1) terminology switched to kitchen-friendly equivalents ("Specification engineering" to "The Recipe Card," "Context engineering" to "Mise en Place"), and (2) sections condensed from 13 to 11 by merging acceptance criteria and constraints. A running example chosen: "Produce a monthly competitive landscape brief for the leadership team."

This is where the project evolved from a single long-form guide into a larger framework. Part 1 was no longer just a finished artifact; it became the first installment of a broader body of work.

**Evidence:** `how-ai-works-part2-outline-v2.md` (71,662 bytes, timestamp Mar 13 07:48); process log Phase 2. ChatGPT conversations [Branch: AI Workflow Framework Advice][3], [Branch: AI Workflow Framework Advice][7].

**Design work:** framework design, systems thinking, productization of educational content.

---

**~Before 2026-03-14** — Reference materials gathered. `Advanced Prompting.md` (video transcript covering the four-discipline framework) and `Prompt Kit.md` (practical templates including the "Prompt 0" concept). Explicitly classified as reference, not source — to mine, not to cite.

**Evidence:** File timestamps Mar 13; `09-source-context.md` documents the hierarchy.

---

**2026-03-14** — "Preparation for follow up AI guides" commit. Massive organizational move:
- Renamed `how_ai_works/` to `how_ai_works_part1/`
- Created full `how_ai_works_part2/` directory with:
  - 10-file context packet system (`01` through `10` + README)
  - Theory outline and v2 outline
  - Reference materials
  - STATUS.md and CLAUDE.md
- Guide confirmed to split into Part 2A (Sections 0-5: The Building Blocks) and Part 2B (Sections 6-10: The Disciplines in Action)

**Evidence:** Commit `dc1c030`; context packet file timestamps all Mar 14.

---

**2026-03-14 (afternoon)** — Context packet manually updated. Added Part 1 to Part 2 framing to `01`, webapp chat notes and the 80% Problem to `04`/`08`, regression vs. quality distinction, planner-worker architecture sidebar spec.

**Evidence:** Commit `3317af3` (Mar 14 15:35); process log Phase 4; Claude memory entry.

---

#### Phase F: Iterative Drafting + Context Packet Evolution

**2026-03-15** — Pre-drafting self-review (PR #1). The context packet was reviewed against the Advanced Prompting document's own principles — a meta-check: does the production packet practice what the guide preaches? Five gaps identified and fixed before any drafting:
1. Missing Escalate quadrant in constraint architecture (`08`)
2. Dual source-of-truth for definitions (`08` cross-references to `02`)
3. `04` mixed orientation and content-building specs — split into `04a` (always load) and `04b` (load when drafting)
4. No freshness mechanism — added mid-project file changes log to `10`
5. No priority ladder — added Hard Tradeoffs section to `03`

Process log created to capture decisions for a future case study.

**Evidence:** Commits `0a5a842`, `12e137b`, `4e34d57` on PR branch; commit `cf9d93b` (PR merge Mar 14 20:53).

---

**2026-03-17** — First drafting session: Sections 0-2. All core context files loaded. Key decision: replaced the competitive analysis opener with a catering order scenario (universally accessible, literally a kitchen scenario, mirrors AI chat perfectly). Three sections drafted following the pattern: failure, theory, interactive, exercise, key lesson.

**Evidence:** Process log Phase 6; draft files `section-00.md`, `section-01.md`, `section-02.md` (timestamps Mar 16-17).

---

**2026-03-17** — Review identified six categories of issues the context packet didn't prevent: vocabulary layering (disciplines and building blocks mixed), internal consistency drift (counts and labels), section boundary bleeding, illustrative vs. canonical framing ambiguity, framework accumulation without cross-mapping, and key lesson drift. Six rules added to five context packet files.

**Evidence:** Process log Phase 6 review section; feedback files `section-00-feedback.md` etc. (Mar 17).

---

**2026-03-18** — Drafting test commit. Section drafts, feedback files, and editorial review committed. Guide HTML updated.

**Evidence:** Commit `c175687` ("Drafting test for AI guide part 2").

---

**2026-03-19** — Regeneration test: Section 0 v2. The updated context packet was tested by regenerating Section 0 without referencing the original draft. Result: structurally superior but vocally inferior — the prose flattened. Root cause analysis identified three interacting rules that produced the flatness:
1. Vocabulary layering rule modeled generic replacement language
2. "Clarity beats metaphor" tradeoff was one-directional
3. "What wrong sounds like" examples only showed overwritten failure modes, not flat ones

Seven voice-preservation changes made across four files. Section 0 v3 combined structural and voice gains.

**Evidence:** Process log Phase 7; files `section-00-v2.md` (Mar 19), `section-00-v3.md` (Mar 19 16:55).

---

**2026-03-20** — Updates committed with revised context packet and Section 0 v3.

**Evidence:** Commit `3ff1ae3`.

---

**2026-03-23** — Major drafting push. Sections 1-2 regenerated (v2), Sections 3-5 drafted fresh. Each new section sent to an editorial-review agent and revised before proceeding. Key findings:
- Voice/structure tension from Phase 7 did not recur — packet changes generalized
- Interactive module design identified as weakest element across sections (interactives that confirm rather than discover)
- Specialized review agents created: editorial, cross-section continuity, voice/metaphor guardrail, interactive alignment, running-example consistency, section-boundary, reader clarity, HTML assembly QA
- Review-orchestrator agent added; model-tiered (Opus for judgment, Sonnet for rule-bound reviews)
- Acme/Bolt/Cirrus confirmed as canonical competitors
- Section 5 tasting system components ratified (including "walk-away line" — not in original spec)

**Evidence:** Process log Phases 8-10; draft files with Mar 23 timestamps; STATUS.md "Last updated: 2026-03-23."

---

#### Phase G: Part 2B Drafting with Agent Orchestration

**2026-03-23** — Part 2B Sections 6-8 drafted with review-orchestrator. Section 6 (Mise en Place) resolved the Part 2A artifact naming as "kitchen setup" and handled MCP in a collapsible sidebar. Section 7 (House Philosophy) established the chain from philosophy to plating standard to house rule. Section 8 (Recipe Card) was the convergence section — required four reviews (editorial + section-boundary + interactive-alignment + running-example-consistency).

**Evidence:** Process log Phase 11; draft files `section-06.md` through `section-08.md` in `drafts/part-2b/`.

---

**2026-03-25** — Latest commit with Part 2B drafts and process log updates.

**Evidence:** Commit `1b8004b`.

---

## Output 2: Milestone Summary

### Phase A: Site Foundation (Sep 2025)
**Goal:** Create a static HTML site for hosting practical design guides.
**Work:** Built the site architecture, CSS theming system, core JS modules, and published two guides (RGB-to-CMYK, Who Owns Type). Established the design language that all future guides would match.
**Result:** A working, published site with a clear pattern for adding guides.

### Phase B: Initial Exploration — Marketing Potluck (Nov 2025 - Jan 2026)
**Goal:** Create an approachable guide explaining how LLMs work for non-technical creative professionals.
**Work:** Started with a 222-line stub. Designed a precision-engineered "messy intake dump" with twelve labeled sources, planted contradictions, and seven explicitly unresolved questions — a teaching dataset, not just an example. Developed a structured AI generation prompt that was itself a design artifact: it specified a Feynman teaching philosophy, dual-level explanations, reader checkpoints with corrective coaching, and success criteria before the first draft existed. Produced six draft versions in ~24 hours, each reviewed with detailed editorial notes. The review cycle surfaced a tension that would recur throughout the project: the v1→v3 arc tightened the prose but lost pedagogically valuable elements (common-confusion callouts, corrective coaching, practical micro-tactics), while the v5 tech review pushed precision past the audience's threshold ("predicts a probability distribution over the next token"). Created the pixel kitchen metaphor guide sheet — the project's first true systems-design artifact. Applied the metaphor to copy in a dedicated text-only extraction, transforming simile ("an LLM is like autocomplete") into inhabited metaphor ("think of an LLM as a line cook"). Drafted the core chapter set across a concentrated sprint: generation basics, model comparison, context management, verification, QA, and multi-step workflow decomposition. Generated character select artwork. Restructured the repository. Used ChatGPT for drafting and Codex for review and implementation.
**Result:** A functioning but potluck-dominated guide, a rich archive of drafts and reviews, and a structured curriculum. The critical insight: the guide was teaching potluck coordination, not LLM mechanics. A structural flip was needed. The six-version editorial cycle also established a working pattern: AI generates, human reviews, human makes the structural call. The v1→v6 progression itself mirrored the guide's own V0→V4 prompt ladder — progressively better specifications producing progressively more reliable output.

### Phase C: Kitchen Metaphor Rewrite (Feb 2026)
**Goal:** Transform the guide from potluck-first to concept-first, with the kitchen as load-bearing structure rather than background flavor.
**Work:** Archived all previous drafts. Rewrote content into granular sections (0-7 + bonus). Created the creative review document specifying the pixel kitchen HUD system. Developed and rejected a gamified vocabulary proposal. Built rapid section-by-section HTML. Created all visual assets (character sprites with Photoshop cleanup, context window diagrams, kitchen illustrations, banner/card/background images). Published with the title "Demystifying AI: Stepping into the LLM Kitchen."
**Result:** A complete, published Part 1 guide with working interactives, pixel art character select, and the kitchen metaphor as the structural spine.

### Phase D: Part 1 Final Polish (Mar 1-12, 2026)
**Goal:** Refine the published guide and extract guide-specific assets.
**Work:** Final copy edits, CSS/JS modularization, title/description updates.
**Result:** Part 1 locked and published. Ready to serve as the foundation for Part 2.

### Phase E: Part 2 Conception + Context Engineering (Mar 13-15, 2026)
**Goal:** Plan the sequel with enough structure to support AI-assisted section-by-section drafting.
**Work:** Created theory outline (13 sections, engineering terminology), then v2 outline (11 sections, kitchen vocabulary). Gathered reference materials. Built a 10-file context packet system with load tiers. Ran a pre-drafting self-review against the guide's own principles, identifying five gaps. Created process log.
**Result:** A context packet that practices what the guide teaches — a concrete demonstration of context design, constraint architecture, and evaluation design applied to the production of the guide itself. The project became intellectually generative: the finished Part 1 was now a platform for broader educational work.

### Phase F: Iterative Drafting + Context Packet Evolution (Mar 17-23, 2026)
**Goal:** Draft all sections while treating the context packet as a testable, improvable system.
**Work:** Three drafting cycles:
1. Sections 0-2 drafted, reviewed, six rules added to packet
2. Section 0 regenerated, voice flattened, root cause analysis, seven voice-preservation rules added, regenerated successfully
3. Sections 1-2 regenerated + Sections 3-5 drafted fresh with per-section editorial review

Each cycle tested whether the context packet prevented previous failures. The regeneration tests explicitly measured regression vs. quality. Specialized review agents created and model-tiered.
**Result:** All six Part 2A sections drafted with validated voice/structure balance. The packet evolved from 10 files with 5 gaps to a self-correcting system with voice preservation, vocabulary layering, and section boundary discipline.

### Phase G: Part 2B Drafting with Agent Orchestration (Mar 23, 2026)
**Goal:** Draft the discipline sections (context design, intent framing, spec writing) using the review-orchestrator workflow.
**Work:** Sections 6-8 drafted, reviewed by specialized agents, and revised in-session. Review-orchestrator managed combined draft + review cycles. Section 8 (convergence section) received four reviews. MCP handled in a collapsible sidebar. "Kitchen setup" named as the Part 2A handoff artifact.
**Result:** Eight of eleven sections drafted. Remaining: Sections 9-10, interactive implementation, HTML assembly, visual assets.

---

## Output 3: Design/Process Narrative

### From Potluck to Kitchen: How an AI Guide Ate Its Own Cooking

The project began with a practical objective: teach a creative team enough about LLMs to make informed choices about which AI tools to use and how to write effective instructions. The constraint was non-negotiable — the audience included marketing professionals who would disengage at the first "transformer architecture" or "softmax layer."

Before any content was written, two design artifacts were created that shaped everything that followed.

The first was the worked example — a Marketing Potluck intake dump that looked chaotic but was engineered with surgical precision. Twelve labeled sources planted specific teaching problems: Slack messages with contradictory constraints, two calendar invites that disagreed on time, location, and scope, a sign-up doc where someone's almond-flour dessert contradicted a colleague's nut allergy, a locked Excel attachment no one could access, and a CEO who "might stop by" with dietary preferences described only as "Whole30-ish." Seven open questions were explicitly left unresolved. Every element existed to teach a concept — ambiguity, contradiction, missing decision rights, hard constraints buried beneath soft preferences. This dataset became the single anchor that every section of the guide would reference. It was instructional design disguised as a messy spreadsheet.

The second was the generation prompt itself. Rather than ask ChatGPT to "write a guide about AI," the prompt specified a Feynman-inspired teaching philosophy, mandated dual-level explanations (a version simple enough for a smart twelve-year-old, then a "Make it sharper" refinement for working adults), required reader checkpoints with corrective coaching ("what to fix if you answered differently"), planned interactive elements as labeled placeholders, and defined success criteria before the first word was generated. The prompt was a specification of a teaching system, not a request for content.

With those two artifacts in place, the drafting began — and immediately became an editorial marathon. Six versions were produced in roughly 24 hours. Each review surfaced a different class of problem and a different tension in the work.

The v1 review caught factual imprecision: "predicts the next useful words" implied the model had intentions; "predicts the most likely next tokens" stayed mechanical. It also flagged structural bloat — repeated dual-level scaffolding ("Explain it like you're 12 / Make it sharper") had become a chant, and the "Interactive (coming soon)" callouts were interrupting the teaching flow. The fix was a micro-glossary and a consolidation pass. The v2 review found the cleanups had worked, praised the one-liner "Training gives it language patterns; tools give it new facts" as the best sentence in the document, and shifted to polish: heading casing, evidence sorting, a normalization table that ironically violated the guide's own definition of normalization.

Then the v3 review performed an unusual analysis. Instead of just tracking forward progress, it inventoried what had been *lost* during editing. Five pedagogically valuable "Common confusion" callouts had been removed — guardrails against misconceptions about vague prompts triggering clarifying questions, about the model "understanding like a person," about tokens being words, about chat memory persisting across sessions, and about hallucination meaning lying. Corrective coaching at reader checkpoints was gone, turning them from instructional tools into rhetorical questions. A practical prompt-ordering micro-tactic — put rules first, then intake, then output format — had vanished from the attention section. This "what we lost" analysis represents a mature editorial sensibility: the recognition that editing for concision and editing for teachability can pull in opposite directions, and that every cut has a pedagogical cost.

The v5 tech review then demonstrated the opposite failure mode. In pursuit of precision, the TL;DR changed from "predicts the next most likely text" to "predicts a probability distribution over the next token." A "Nerd note" appeared about decoding settings. The glossary expanded to eight terms. The guide was now more defensible to an ML engineer but harder for marketing professionals to parse. This overcorrection — precision past the audience's threshold — established a tension that would recur throughout the project: the pull toward technical accuracy versus the commitment to accessibility, and the question of how much nuance a "without the hype" guide can hold before it becomes the hype.

Alongside the drafting, the Pixel Kitchen Metaphor Guide Sheet was created. It mapped every technical concept to a kitchen equivalent (model = line cook, prompt = ticket, context = prep counter, tools = thermometer/scale) with explicit rules about what the metaphor must never imply ("Do not imply the model can 'go fetch' items from training. Training is skill, not inventory you can browse"). The HUD components (Ticket Card, Prep Counter Panel, Expo Pass Checklist) gave the guide a visual grammar. This document became the project's constitution.

But a spec is not prose. The actual vocabulary transformation happened in a separate step: copy was extracted from the HTML into text-only documents (`How_LLMs_Work_v2_copy.md`, then `v3_copy.md`) to allow content editing independent of markup — a deliberate separation of concerns. In v3_copy, the metaphor guide sheet was applied to every sentence. "Introduction" became "Mise en Place." "Prompt" became "ticket." "Context" became "prep counter contents." "Decoding" became "chef style setting." "Deterministic" became "standard recipe." "Sampling" became "chef's special." And the framing shifted in a way that mattered: v2_copy opened with "An LLM is like a very fast autocomplete" — a simile that kept the technical concept front and explained through comparison. v3_copy opened with "Think of an LLM as a line cook or chef that can work at absurd speed" — a metaphor that replaced the concept with the kitchen and taught *through* it. Simile says "this is like that." Metaphor says "this is that." The guide chose to inhabit the kitchen rather than point at it from outside.

In Codex, a critical structural judgment was made: the guide read as "potluck-first" instead of "LLM-first." The potluck had become the subject rather than the example. The decision was to flip the narrative hierarchy — concept-first, example-second. A core chapter set was drafted in a concentrated sprint, each section building on the previous: generation basics, model comparison, context management, verification, QA, and multi-step workflow decomposition. By the end of that sprint, the guide had become a structured curriculum — not just explanations, but reusable mechanics (recap blocks, handoff cards, expo pass checklists) that readers could take into their own work.

The visual direction followed naturally. AI was used to generate character sprites for a fighting-game-style "Choose Your Chef" screen — one for each major LLM — then each sprite was manually cleaned in Photoshop at pixel resolution. The making-of document for this feature is itself a microcosm of the guide's workflow philosophy: AI for requirements planning and first drafts, human for implementation and production quality, AI again for review, human for the final call.

Part 1 published in early March 2026 as "Demystifying AI: Stepping into the LLM Kitchen." Then Part 2 began.

Part 2's development represents a qualitatively different process. Rather than generate-and-revise, the approach was to build a 10-file **context packet** — a structured specification for the guide's thesis, framework, voice, section goals, interactive designs, drafting workflow, quality bar, terminology guardrails, source hierarchy, and open questions. This packet was designed for file-based drafting in Claude Code CLI, with load tiers (core vs. drafting support vs. reference) that practiced the context design principles the guide itself teaches.

Before any section was drafted, the context packet was reviewed against the principles in the guide's own source material — a pre-service meeting for the guide's own kitchen. Five structural gaps were identified and fixed: a missing Escalate quadrant in the constraint architecture, a dual source-of-truth risk, a file that mixed orientation and content specs, no freshness mechanism, and no priority ladder. The irony was not lost: the guide's Section 3 teaches that constraint architecture needs all four quadrants, and the production packet was missing exactly that.

The drafting phase then became a controlled experiment. Sections were drafted, reviewed, and the context packet updated based on what the reviews found. When Section 0 was regenerated with the updated packet, it was structurally superior but vocally flat — the structural rules had inadvertently penalized craft. A root cause analysis identified three interacting rules that produced the flatness, and seven voice-preservation changes were made. The third generation (v3) combined structural and voice gains.

This cycle — draft, review, diagnose, update packet, regenerate, compare — is the most striking feature of the process. The context packet was not treated as a fixed spec. It was treated as a testable system whose outputs could be measured for both quality and regression. The process log documents each cycle with explicit case-study relevance notes, because Part 2 is designed to teach exactly this pattern.

By March 23, specialized review agents had been decomposed from a single "editorial review" into eight distinct functions (editorial, cross-section continuity, voice/metaphor guardrail, interactive alignment, running-example consistency, section-boundary review, reader clarity, HTML assembly QA), model-tiered by judgment complexity, and managed by a review-orchestrator agent. This decomposition itself became case-study material — the same pattern the guide argues for in its treatment of "prompting" as multiple disciplines.

As of the latest evidence, eight of eleven sections are drafted, with the context packet having undergone three major revision cycles. The project remains in active drafting, with Sections 9-10, interactive implementation, HTML assembly, and visual assets still ahead.

### Tools used across the project

The project used multiple AI tools at different stages:
- **ChatGPT (webapp):** Primary tool for Part 1 drafting, image generation, creative review, and planning. At least 7 distinct conversations are documented.
- **Codex (CLI):** Used for repo review, implementation decisions, and HTML coding during Part 1.
- **Claude Code (CLI):** Primary tool for Part 2, used for context packet development, section-by-section drafting, specialized review agents, and the review-orchestrator workflow.
- **Photoshop:** Manual cleanup of AI-generated character sprites.

The tooling evolution itself mirrors the guide's thesis: Part 1 used conversational, chat-style AI interaction; Part 2 used structured, file-based context engineering with specialized agents — the exact progression from chat-style prompting to delegated execution that the guide teaches.

---

## Output 4: Artifact Inventory

### Planning & Framework Documents

| Artifact | Timeline Position | Purpose | Status |
|---|---|---|---|
| `AI_GUIDE_PLAN.md` | Phase B (Jan 2026) | Initial outline with Marketing Potluck theme | Exploratory, superseded |
| `draft_prompt.md` | Phase B (Jan 2026) | Structured AI generation prompt specifying Feynman teaching philosophy, dual-level explanations, reader checkpoints with corrective coaching, interactive placeholders, anti-patterns, and success criteria — a teaching-system specification, not just a content request | Intermediate, used to generate v1 |
| `MARKETING_POTLUCK_INTAKE_DUMP_REVISED.md` | Phase B (Jan 2026) | Precision-engineered worked example: 12 labeled sources with planted contradictions, missing decision rights, hard vs. soft constraints, and 7 explicitly unresolved questions — instructional design disguised as messy data | Final — persisted into published guide |
| `pixel_kitchen_metaphor_guide_sheet.md` | Phase B (Jan 2026) | Canonical metaphor mapping (technical to kitchen equivalents) with absolute rules and HUD component definitions | Final — became the metaphor constitution |
| `How_AI_Works_creative_review.md` | Phase B-C (Jan-Feb 2026) | Visual & interaction design spec, pixel kitchen HUD system, benchmarked against rgb-to-cmyk-guide.html | Intermediate, informed final design |
| `How_AI_Works_gamified_revision_proposal.md` | Phase B-C (Jan-Feb 2026) | Proposed swapping restaurant jargon for game/UI language | Exploratory, rejected — kitchen vocab retained |
| `making-of-this-guide-ai-workflow.md` | Phase C-D (Feb 2026) | Public documentation of the character select production workflow | Final — published in guide |
| `choose-your-chef-template.html` | Phase C (Feb 2026) | Interactive component template for the character select screen | Final |

### Draft Versions (Part 1)

| Artifact | Timeline Position | Purpose | Status |
|---|---|---|---|
| `How_AI_Works_v1.md` through `v6.md` | Phase B (Jan 6-7, 2026) | Six full guide drafts in ~24 hours. v1→v3 tightened prose but lost pedagogically valuable elements; v5 tech review overcorrected toward precision; v6 was the final source for HTML conversion | Archived |
| `How_LLMs_Work_v2_copy.md` | Phase B (Jan 7-10) | Text-only extraction from HTML for prose iteration independent of markup — separation of content from layout | Archived |
| `How_LLMs_Work_v3_copy.md` | Phase B (Jan 10-12) | The document where the kitchen metaphor was applied to prose: "Introduction" → "Mise en Place," simile → inhabited metaphor, "Reader checkpoint" → "Expo check." Vocabulary transformation from spec to practice | Archived |
| `v1_review_notes.md`, `v2_review_notes.md`, `v3_review_notes.md` | Phase B (Jan 6) | Detailed editorial feedback. v1 notes targeted factual precision and structural bloat; v2 notes flagged polish issues; v3 notes performed a "what was lost" analysis tracking pedagogical cost of editing | Archived |
| `How_AI_Works_section0_intro.md` through `section7_conclusion.md` + bonus | Phase B-C (Jan-Feb 2026) | Section-by-section granular drafts | Intermediate, fed into HTML |

### Visual Assets

| Artifact | Timeline Position | Purpose | Status |
|---|---|---|---|
| `ChatGPT_v1.png`, `ChatGPT_v2.png`, `Claude_v1.png`, `Gemini_v1.png` | Phase B-C (Jan-Feb 2026) | Raw AI-generated character illustrations | Intermediate |
| `ChatGPT.png`, `Claude.png`, `CoPilot.png`, `Gemini.png`, `Grok.png`, `LLaMA.png` | Phase C (Feb 23) | Production pixel-art sprites (128x128, Photoshop-cleaned) | Final — in published guide |
| Portrait files (`*-portrait.png`) | Phase C (Feb 23) | Cropped headshots from sprites | Final |
| `LLM-context-window.png`, `LLM-context-window-attn.png` | Phase C (Feb 20) | Technical diagrams of context window and attention | Final |
| `kitchen-prep-counter.png`, `kitchen-ticket-msg.png`, `kitchen-ticket-prompt.png` | Phase C (Feb 25) | Kitchen metaphor illustrations | Final |
| `how-llms-work-banner.png` | Phase C (Feb 25) | Guide banner/hero image | Final |
| `how-llms-work-card.png` | Phase C (Feb 25) | OpenGraph/social sharing card | Final |
| `how-llms-work-bg.png`, `-bg-dk.png`, `-bg-lt.png` | Phase C (Feb 25-26) | Theme-specific background images | Final |

### Part 2 Context Packet & Drafting System

| Artifact | Timeline Position | Purpose | Status |
|---|---|---|---|
| `how-ai-works-part2-theory-outline.md` | Phase E (~Mar 13) | First structural outline (13 sections, engineering terminology) | Exploratory, superseded by v2 |
| `how-ai-works-part2-outline-v2.md` | Phase E (~Mar 13) | Authoritative outline (11 sections, kitchen vocabulary) | Final — canonical reference |
| `Advanced Prompting.md`, `Prompt Kit.md` | Phase E (~Mar 13) | Reference materials (video transcript, practical templates) | Reference — to mine, not cite |
| Context packet files `01` through `10` + README | Phase E (Mar 14) | 10-file structured context system with load tiers | Living document — updated through Phase G |
| `CLAUDE.md` (Part 2 subdirectory) | Phase E (Mar 14) | Claude Code instructions for drafting workflow | Final |
| `STATUS.md` | Phase E (Mar 14) | Progress tracker with decisions log | Living document |
| `process-log.md` | Phase F (Mar 15) | Running record of decisions and workflow observations for future case study | Living document — 11 phases logged |

### Part 2 Section Drafts

| Artifact | Timeline Position | Purpose | Status |
|---|---|---|---|
| `section-00.md` then `v2` then `v3` | Phase F (Mar 16-19) | Bridge section: three generations testing context packet | v3 approved |
| `section-01.md` then `v2` | Phase F (Mar 16-23) | Four disciplines framework: regenerated after packet update | v2 done |
| `section-02.md` then `v2` | Phase F (Mar 17-23) | Complete order: regenerated after packet update | v2 done |
| `section-03.md` through `section-05.md` | Phase F (Mar 23) | Plating standards, station assignments, tasting system | v1 done, reviewed |
| `section-06.md` through `section-08.md` | Phase G (Mar 23) | Context design, intent framing, spec writing | v1 done, reviewed |
| Feedback files (`section-00-feedback.md`, etc.) | Phase F (Mar 17) | Review findings per section | Intermediate |
| `sections-00-02-editorial-review.md` | Phase F (Mar 17) | Cross-section editorial review | Intermediate |

### Review Agent Definitions

| Artifact | Timeline Position | Purpose | Status |
|---|---|---|---|
| `.claude/agents/editorial-review.md` + 8 others | Phase G (Mar 23) | Specialized review agent definitions (editorial, continuity, voice, interactive, boundary, clarity, HTML QA, orchestrator) | Final — operational |
| `.claude/agent-memory/` files | Phase G (Mar 23) | Agent review findings and workflow decisions | Living |

### Reusable Teaching Mechanics (Part 1)

These are not standalone files but designed systems embedded in the guide content. They are listed here because they represent design artifacts, not just prose:

| Mechanic | Where Introduced | Purpose |
|---|---|---|
| "Catering Chaos" running example | Section 3 | Single recurring scenario for teaching context drift, tools, QA, and workflow |
| Ticket Card / Prep Counter Panel / Expo Pass HUD | Metaphor guide sheet, used throughout | Consistent visual grammar making the guide feel like one system |
| Recap blocks / Assumptions blocks / Known-good facts | Section 3 | Reusable workflow templates the reader can adopt |
| Handoff Cards | Section 6 | Intermediate artifacts for multi-step decomposition |
| Claim, Evidence, Confidence pattern | Section 5 | Show-your-work pattern for QA |
| V0-V4 prompt ladder | Sections 0-3 | Progressive refinement from vague to spec-quality prompts |

---

## Output 5: Gaps / Uncertainty

### Confirmed gaps

1. **No Claude session transcripts are readable.** The five `.jsonl` files in `~/.claude/projects/` for this project contain data but the user message content extraction returned empty. The session metadata shows they date from Mar 11-Apr 10, but the actual conversation content is not accessible. **Impact:** The Mar 11-14 period (the transition from Part 1 polish to Part 2 conception) is documented only through commit messages and file timestamps, not through conversation-level detail.

2. **ChatGPT conversation content is referenced but not fully available.** Seven conversation links are documented, but the actual turn-by-turn content (prompts, responses, image generation requests) was not exported into the reconstruction. The webapp-based timeline was produced from within those conversations and provides summary-level evidence, but not raw diffs or exact prompt text beyond what is quoted in the planning documents.

3. **Pre-November 2025 planning is not documented.** The first `how-llms-work.html` appeared on Nov 7, 2025, but the planning that led to it is not recorded. **Inferred:** The `guide:updated` meta tag in the first commit says `2025-09-05`, suggesting the idea may have preceded the site launch.

4. **Codex sessions for this project are limited.** The `history.jsonl` entries for this project span sessions `019b9031` and `019bb338` (Jan 2026). The detailed AI responses during those sessions are only partially visible through user messages.

5. **Exact dates for Phase B drafting have minor discrepancies across sources.** File timestamps place v1-v6 at Jan 6-7 and section files at Jan 13. ChatGPT conversation timestamps suggest section content was drafted ~Jan 10-11 UTC. The Codex history confirms activity Jan 10-13. These are consistent with content being drafted in ChatGPT, refined in Codex, and saved to local files on slightly different dates. The sequence is reliable; the exact date-to-artifact mapping has ~2-day uncertainty.

6. **The transition from "How ChatGPT Works" to "How LLMs Work"** is not documented in a single decision moment. The Codex history shows the question was asked, but the earlier shift from "ChatGPT" to "LLMs" is not captured.

7. **Image generation prompts for non-character-select assets** (kitchen illustrations, context window diagrams, background images) are not documented. Whether other images were AI-generated, hand-created, or hybrid is **inferred** from the project's general workflow but not directly evidenced.

8. **Part 2 Sections 9-10** have not been drafted yet. The process log's open threads section anticipates their creation but no drafts exist.

9. **Interactive feature chronology is partially inferred.** Features like "Choose Your Chef" and "Context Overflow" are referenced in later documents and are present in the published guide, but the intermediate implementation steps (wireframing, iteration, debugging) are not timestamped in the accessible files beyond what `making-of-this-guide-ai-workflow.md` describes for the character select screen.

---

## Executive Summary

The AI guide project spans November 2025 through the present, evolving from a 222-line HTML stub titled "How ChatGPT Works" into a published Part 1 guide ("Demystifying AI: Stepping into the LLM Kitchen") and an in-progress Part 2 sequel ("Running the Kitchen"). The project was built across three AI tools — ChatGPT for Part 1 drafting and visual work, Codex for implementation, and Claude Code for Part 2's context-engineered workflow — with Photoshop for visual cleanup.

The project demonstrates a consistent production pattern: AI generates first drafts and surfaces requirements, the human reviews and makes structural decisions, and each cycle produces artifacts that feed the next. The most notable evolution is not in the content but in the process itself — Part 1 used a tight generate-review-revise loop via ChatGPT, while Part 2 introduced a formal context packet system in Claude Code that was iteratively tested and improved, with each drafting cycle measuring whether the packet prevented previous failures. The tooling progression itself mirrors the guide's thesis: from chat-style prompting to structured, delegated execution with specialized agents.

Throughout, the project was treated as **educational design**, not just content production. The worked example dataset was precision-engineered with planted contradictions and unresolved questions. The metaphor system was locked before content was written. The six-version Part 1 drafting cycle revealed a recurring tension between concision and pedagogical completeness — the v3 review tracked "what was lost" during editing, while the v5 tech review demonstrated precision past the audience's threshold — establishing editorial dynamics that would recur in Part 2's voice-flattening incident. Reusable teaching mechanics (recap blocks, handoff cards, expo pass checklists) were designed as transferable tools, not just illustrations. The project's self-documenting process log explicitly tracks these design decisions, positioning the production history as raw material for a future case study guide.

---

## 5-Minute Walkthrough Version

1. **Nov 2025:** Created a bare HTML stub called "How ChatGPT Works." Essentially empty.

2. **Jan 2026 (1 week):** Built two design artifacts first — a precision-engineered "messy intake dump" with twelve labeled sources and planted contradictions, and a generation prompt that specified a Feynman teaching philosophy, dual-level explanations, reader checkpoints, and success criteria. Used ChatGPT to generate six draft versions in ~24 hours, each reviewed with editorial notes. The review cycle surfaced a recurring tension: tightening prose lost pedagogically valuable elements (v3 review tracked "what was lost"), while the v5 tech review pushed precision past the audience's threshold. Locked the kitchen metaphor system — a canonical mapping doc that became the project's constitution. Applied the metaphor to prose in a dedicated text-only extraction, transforming simile ("like autocomplete") into inhabited metaphor ("think of an LLM as a line cook"). Drafted core chapters in a concentrated sprint. Discovered the guide was teaching potluck coordination, not LLM mechanics — flipped the narrative to concept-first, example-second.

3. **Feb 2026 (3 weeks):** Major rewrite around the kitchen metaphor as load-bearing structure. Built section-by-section HTML. Created all visual assets — AI-generated pixel art sprites cleaned in Photoshop, context window diagrams, kitchen illustrations, banners. Published as "Demystifying AI: Stepping into the LLM Kitchen."

4. **Mar 14, 2026:** Started Part 2. Built a 10-file context packet — a structured specification for the sequel. Ran a self-review against the guide's own principles, found five gaps, fixed them before drafting. The tooling shifted from ChatGPT to Claude Code CLI.

5. **Mar 17-23:** Drafted eight of eleven sections through three controlled cycles. Each cycle tested the context packet, found what it missed, updated it, and regenerated. Discovered that structural rules without voice-preservation rules produce flat prose. Built specialized review agents and an orchestrator. The production process became a live demonstration of the guide's thesis.

---

## Key Takeaways About Process and Working Style

1. **Structure precedes content.** The metaphor guide sheet, the HUD component library, and the context packet were all built before the content they support. The preference is to lock rules, mappings, and interface language first, then scale content within that system. This is systems thinking applied to educational writing.

2. **AI output is treated as a first draft that earns its way into the final product through review, not as finished work.** Every artifact — from v1 prose to pixel art sprites to section drafts — went through human review before shipping. The v1 review notes are as detailed as the draft itself. This is consistent across Part 1 (six versions) and Part 2 (three generations of Section 0 alone).

3. **Testable systems are built, not one-off prompts.** The Part 2 context packet is not a prompt — it is a 10-file system designed to be loaded in tiers, updated based on measured failures, and validated through regeneration tests. The process log explicitly frames each drafting cycle as a hypothesis test. This is the same systems thinking visible in the guide's own teaching mechanics (recap blocks, handoff cards, expo pass checklists).

4. **The process is refactored mid-project when the evidence warrants it.** The Marketing Potluck to kitchen metaphor pivot, the concept-first restructuring, the voice-preservation rules after the flattening incident, and the review agent decomposition all represent structural changes made in response to concrete evidence, not planned from the start. A clear distinction is maintained between "good enough to proceed" and "fully finished."

5. **The production process is used as content material.** The process log, the making-of document, and the explicit "case study relevance" annotations throughout the log show that the how-it-was-made story is treated as a first-class output. The guide's thesis (structure beats intelligence) is demonstrated by its own production.

6. **The strongest design instinct is audience-first translation.** The most consequential decisions — renaming "specification engineering" to "The Recipe Card," choosing a catering opener over competitive analysis, retaining kitchen vocabulary over gamified vocabulary — all optimized for the audience's accessibility, not for technical accuracy or cleverness. The terminology shifts never changed the underlying concepts; they changed the surface to match who would be reading.

7. **Editing for concision and editing for teachability pull in opposite directions.** The v1→v6 cycle demonstrates this clearly: tightening prose and consolidating callouts made the guide read better as a document but cost specific pedagogical elements — common-confusion guardrails, corrective coaching at checkpoints, practical micro-tactics. The v3 review's "what was lost" analysis represents a mature editorial recognition that every cut has a teaching cost, not just a word count. The same tension recurred in Part 2 when structural rules produced vocally flat prose. The pattern suggests that quality in educational content requires tracking two axes simultaneously — clarity and pedagogical completeness — and that they frequently trade off against each other.

8. **Precision has a threshold past which it becomes inaccessibility.** The v5 tech review pushed "predicts the next most likely text" to "predicts a probability distribution over the next token," added decoding method explanations, and expanded the glossary. The guide became more defensible to an ML engineer and less accessible to its actual audience. The correction in later versions and in the kitchen metaphor transformation shows a consistent editorial instinct: find the level of technical honesty that a marketing professional can absorb without losing the thread, and resist the pull toward more precision than the audience needs.

9. **AI is used as an acceleration partner, not as the author of record.** The strongest signature across the project is not "AI wrote this" but "a human imposed a durable framework, then used AI to help populate and refine it." The workflow consistently follows: AI surfaces requirements and generates drafts, the human reviews and decides what ships, AI helps with review passes, the human makes the final call.

---

[1]: https://chatgpt.com/c/69d9077a-a384-83e8-8d4b-0a6636bfebbf "Design Inspo Ideas"
[2]: https://chatgpt.com/c/69a08e47-78b0-8333-95c2-555faff6cee8 "AI Workflow Appendix"
[3]: https://chatgpt.com/c/69b4e152-5594-832d-8b63-6cd83d11e359 "Branch: AI Workflow Framework Advice"
[4]: https://chatgpt.com/c/69a106c4-df04-832a-a30c-765449a77b9e "AI Project Timeline"
[5]: https://chatgpt.com/c/699f533e-7720-8327-8900-1eb38a103d5b "AI Restaurant Metaphor"
[6]: https://chatgpt.com/c/69a0e023-a97c-8332-8fce-dcef311927e8 "Choose Your Chef Interactive"
[7]: https://chatgpt.com/c/69b4e38e-86bc-8330-ac9b-af7130893ccf "Branch: AI Workflow Framework Advice"
