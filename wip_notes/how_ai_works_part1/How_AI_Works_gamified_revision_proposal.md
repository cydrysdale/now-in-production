# How AI Works — Gamified Analogy Revision Proposal (v0)

Goal: keep the existing “pixel kitchen sim” vibe, but swap **real restaurant jargon** (mise en place, expo, service, plating) for **game/UI language** that’s more broadly familiar—without introducing metaphor lies.

Reference bar: `guides/rgb-to-cmyk-guide.html` (scannable headings, playful-but-clear voice, frequent callouts, optional sidequests, and a “bonus dungeon” sandbox).

---

## Success criteria (what “done” should feel like)

1) A reader who has never worked in a restaurant still understands every core mechanic without stopping to Google terms.
2) The metaphor is still technically honest:
   - No “the model fetches ingredients from training.”
   - No “XP/leveling up mid-chat.”
   - “Inventory” = only what you put in the prompt/context/tool outputs.
3) The guide reads like a tutorial for a **single run**, not a management sim (no staffing/finance/decor upgrade loop).

---

## Proposed vocabulary (v2) — “kitchen sim HUD” names

Use the **bold** term as the default in body copy. Keep the kitchen term as UI flavor (stamps/labels) or a one-time parenthetical on first mention.

| Technical concept | Current term | Proposed term (use in copy) | How to use it |
|---|---|---|---|
| Prompt | Ticket | **Mission Card** (or **Brief Card**) | First mention: “Mission Card (ticket/prompt)”. Then “Mission Card”. |
| Instructions | House rules | **Rules / Constraints** | Keep “House rules” only as a stamp label if you want. |
| Output format | Plating | **Output Spec** | First mention: “Output Spec (plating)”. Then “Output Spec”. |
| Model | Line cook | **Cook AI** | Avoid “NPC” voice; keep it functional. |
| Context | Prep counter | **Inventory** (or **Active Tray**) | First mention: “Inventory (what’s visible this turn)”. |
| Context window | Counter space | **Inventory Slots** | Always explain it’s a size limit, not “memory.” |
| Tools | Thermometer/scale | **Instruments / Tools** | “Tools verify reality.” Keep the fun tool icons. |
| QA gate | Expo pass | **Checkpoint** (or **Gate Check**) | First mention: “Checkpoint (expo pass / QA gate)”. Then “Checkpoint”. |
| Serving | Serve | **Ship** (or **Submit**) | Use “SERVE” as a stamp label; use “ship” in prose. |
| Long thread drift | Mid-service drift | **Run Drift** | Replace “mid-service” with “mid-run” consistently. |
| Model versions | “Level ups” | **Patch / Version Update** | Only use “level up” as a joke, immediately defined as “a patch.” |

### Term choice recommendation
Pick one of these and stick to it globally:
- **Mission Card + Inventory + Inventory Slots + Checkpoint + Ship**
- **Brief Card + Inventory + Inventory Slots + Checkpoint + Ship**

(I’d pick **Brief Card** if the audience is mostly marketing/creative; it’s universally understood and still “game UI.”)

---

## Global revision rules (applies across all sections)

### 1) De-jargon the titles
- Replace “Mise en Place” with “Setup Phase” (optionally “Setup Phase (mise en place)” once).
- Replace “Expo Pass” with “Checkpoint” (optionally “Checkpoint (expo pass)” once).

### 2) Swap restaurant-only verbs for game/work verbs
- “mid-service” → “mid-run”
- “plate/plating” → “output / format / build” (keep “plate” sparingly as flavor)
- “serve” → “ship / submit”

### 3) Keep the existing game beats, but standardize labels
You already have: **Power-up**, **Sidequest**, **Bonus**, **Quest Log**, **Character Select**, **LEVEL CLEAR**.

Proposed standard:
- **Power-up** = optional technique (like the RGB guide’s power-ups)
- **Sidequest** = optional deeper technical detail
- **Checkpoint** = required QA gate (not optional)
- **Bonus dungeon** = optional interactive sandbox

### 4) Add one recurring “metaphor safety rail” line early
In Section 0 (and optionally again in the Bonus):
> “This is a UI metaphor. The model can’t reach outside the Inventory unless you connect a tool and paste the output back in.”

---

## Section-by-section proposed revisions

### Section 0 — Intro (`How_AI_Works_section0_intro.md`)

**Primary goal:** establish the “kitchen sim HUD” frame immediately so later terms feel natural.

**Recommended heading tweak**
- Current: “The kitchen metaphor (and why we're using it)”
- Proposed: “The kitchen sim HUD (and why it works)”

**Proposed rewrite (drop-in) for the metaphor bullets**
Replace the current bullet list with something like:

> Think of this guide like a kitchen sim tutorial:
> - The **Cook AI (model)** generates output fast, but only based on what’s visible right now.
> - Your **Brief Card (ticket/prompt)** is the objective + rules + output format.
> - Your **Inventory (context)** is everything you’ve placed in view for this turn: notes, pasted excerpts, and tool outputs.
> - Your **Inventory Slots (context window)** are limited. If you overpack, older items fall off-screen.
> - **Tools** are instruments that touch reality (calendar, spreadsheet, search). The model can’t “guess” these reliably.
> - The **Checkpoint (QA)** is the gate before you ship anything.

**Kitchen truth (swap to game-safe version)**
- Current: “If it's not on the ticket or the counter, it doesn't exist.”
- Proposed: “If it’s not on the Brief Card or in your Inventory, it doesn’t exist.”

**RGB-style polish**
- Add a short `.callout` under the metaphor: “This is a sim tutorial, not a management game” (prevents drift into staffing/finances).

---

### Section 1 — Setup Phase (Generation) (`How_AI_Works_section1.md`)

**Title rename**
- Current: “Mise en Place: …”
- Proposed: “Setup Phase: How LLMs Generate Text (and Why the Brief Card matters)”
  - Optional subtitle once: “(Mise en place = your setup before the run starts.)”

**Key language swaps**
- “ticket” → “Brief Card” (or “Mission Card”)
- “plating” → “Output Spec”
- “plate” → “draft/output” (use “plate” only when you want flavor)

**RGB-style microcopy**
- Your “Power-up: improv meter” already matches the RGB guide’s “Power-up” sections. Consider renaming it to “Power-up: randomness settings (why temperature isn’t magic)”.

---

### Section 2 — Inventory Slots (Context Window) (`How_AI_Works_section2.md`)

**Title rename**
- Current: “The Prep Counter (Context) / Counter Space (Context Window)…”
- Proposed: “Inventory Slots (Context Window): Why AI ‘forgets’ and why long runs drift”

**Hook tweak**
- “You’re mid-service” → “You’re mid-run”
- Make the “no secret clipboard” line more game-native:
  - Current: “no secret clipboard”
  - Proposed: “no hidden stash tab”

**Replace “Recenter” framing**
- Keep the mechanic, rename the UI:
  - “RECENTER BLOCK” → “CHECKPOINT RECAP”
  - “Fresh Ticket vs Recenter” → “New Run vs Checkpoint Recap”

**RGB-style interaction opportunity**
- This section is a perfect fit for the RGB guide’s `.image-compare` slider:
  - “Overpacked inventory” vs “clean inventory + checkpoint recap”

---

### Section 3 — Instruments (Tools) (`How_AI_Works_section3.md`)

**Light rename**
- Keep the fun: “Thermometers & Scales”
- Add game label: “Thermometers & Scales (Tools): Stop guessing, start checking”
  (Already close—main change is to consistently call the *process* “tooling” not “chef skill.”)

**Key language swap**
- “place on counter” → “put in inventory”
- “plate with receipts” → “ship with receipts”

**RGB-style callouts**
- Add a compact `.callout` pattern: “Fake citations vs real receipts” (your creative review already suggests this).

---

### Section 4 — Checkpoint (QA) (`How_AI_Works_section4.md`)

**Title rename**
- Current: “Expo Pass (QA)…”
- Proposed: “Checkpoint (QA): How to test an answer before you ship it”

**Remove/relocate ‘expeditor’ explanation**
If you keep it at all, demote it to a sidebar `<details>`:
- Summary line in body: “Checkpoint = the gate before shipping.”
- Sidebar (optional): “In restaurants, this role is called ‘expo’.”

**Standardize stamps**
- Prefer “SHIP / SEND BACK” in prose
- Keep “SERVE / SEND BACK” as stamp art if you want the kitchen flavor

**RGB-style “final boss” moment**
- You already use “boss pattern” language. Lean into it like the RGB guide:
  - “The Four Checks” = the “boss pattern”
  - End with a punchy “fails fast” rule

---

### Section 5 — Questline Workflow (Stations) (`How_AI_Works_section5.md`)

**Title rename**
- Current: “Station Workflow…”
- Proposed: “Questline Workflow: Run multi-step jobs without chaos”

**Key language swaps**
- “stations” are fine (they’re also common in games). If you want more game:
  - “Phase” → “Stage”
  - “handoff card” → “handoff item” / “handoff card” (card is already game-native)

**RGB-style bonus dungeon suggestion**
This is the best home for an interactive:
- “Bonus dungeon: Station Ticket Builder” (fill fields → outputs a ready-to-copy Brief Card + Checkpoint list)

---

### Section 6 — Safe Handling (`How_AI_Works_section6.md`)

**Title rename**
- Current: “What you should (and shouldn’t) put on the counter”
- Proposed: “Safe Handling: What you should (and shouldn’t) put in the Inventory”

**Key language swaps**
- “tape it to the pass” → “pin it to the shared HUD”
- “order book” → “private notes / private log” (optional: “save file” as a playful aside)

**Keep the seriousness**
This is the one chapter where “too much game voice” can feel weird. Keep the language clean, and use game terms only where they clarify:
- Inventory = “stuff you paste into the system”
- Lockbox/private log = “stuff you keep outside”

---

### Section 7 — Conclusion (`How_AI_Works_section7_conclusion.md`)

**Title rename**
- Current: “Closing Time…”
- Proposed: “End Screen: The Complete Loop”

**Rename “Kitchen Loop” to “Core Loop”**
That’s a familiar game term and matches your earlier “core loop” framing request.

**Keep “LEVEL CLEAR”**
It’s already consistent with the RGB guide’s quest/boss framing.

---

### Bonus — Character Select (`How_AI_Works_section_bonus_character_select.md`)

This section is already heavily gamified. Two recommended tweaks:

1) **Add a “Patch Notes” mini-callout** near the top:
   - “When GPT‑4 becomes GPT‑5, you didn’t gain XP. The game patched in a new chef.”
   - “Same skills (Brief Card, Inventory, Tools, Checkpoint) still apply—rerun the Checkpoint because behavior can shift.”

2) **Reduce niche sub-genre references**
   - “fighting-game roster” → “character roster” (slightly more universal)

---

## Proposed “search/replace” list (for the eventual rewrite)

These are safe-ish if you do them carefully (some are context-sensitive):
- `mid-service` → `mid-run`
- `Expo Pass` → `Checkpoint`
- `Expo Check` → `Checkpoint`
- `prep counter` → `inventory`
- `counter space` → `inventory slots`
- `plating` → `output spec`
- `serve` → `ship`

I would *not* do a blind global replace of `ticket` until you’ve chosen “Ticket” vs “Brief Card” vs “Mission Card” as the one true term.

---

## Next step (if you want)

Once you pick the final vocabulary set (especially **Ticket vs Brief Card vs Mission Card**), I can apply the changes directly across:
- `wip_notes/how_ai_works/How_AI_Works_section0_intro.md`
- `wip_notes/how_ai_works/How_AI_Works_section1.md`
- `wip_notes/how_ai_works/How_AI_Works_section2.md`
- `wip_notes/how_ai_works/How_AI_Works_section3.md`
- `wip_notes/how_ai_works/How_AI_Works_section4.md`
- `wip_notes/how_ai_works/How_AI_Works_section5.md`
- `wip_notes/how_ai_works/How_AI_Works_section6.md`
- `wip_notes/how_ai_works/How_AI_Works_section7_conclusion.md`
- `wip_notes/how_ai_works/How_AI_Works_section_bonus_character_select.md`

