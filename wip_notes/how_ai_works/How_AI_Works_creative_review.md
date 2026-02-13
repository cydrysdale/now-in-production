# How AI Works — Visual & Interaction Creative Review (Pixel Kitchen Sim Edition)

This review focuses on **visuals, callouts, and interactive elements** for the “How AI Works” series. The goal is to hit the same *fun + clear + practical* bar as `guides/rgb-to-cmyk-guide.html`, while staying consistent with the pixel kitchen HUD described in `wip_notes/how_ai_works/pixel_kitchen_metaphor_guide_sheet.md`.

Scope:

- `wip_notes/how_ai_works/How_AI_Works_section0_intro.md`
- `wip_notes/how_ai_works/How_AI_Works_section1.md`
- `wip_notes/how_ai_works/How_AI_Works_section2.md`
- `wip_notes/how_ai_works/How_AI_Works_section3.md`
- `wip_notes/how_ai_works/How_AI_Works_section4.md`
- `wip_notes/how_ai_works/How_AI_Works_section5.md`
- `wip_notes/how_ai_works/How_AI_Works_section6.md`
- `wip_notes/how_ai_works/How_AI_Works_section7_conclusion.md`
- `wip_notes/how_ai_works/How_AI_Works_section_bonus_character_select.md`

---

## Benchmark: What “success” looks like (from `rgb-to-cmyk-guide.html`)

### Images (static)

What works:

- **2-column grid rhythm**: concept on the left, visual on the right (or vice versa).
- **Images are explanatory, not decorative**: each image reinforces one idea; copy nearby explains why it matters.
- **Responsive containment**: images scale cleanly and stay readable at narrow widths.
- **Accessibility**: straightforward `alt` text; interactive visuals get ARIA labeling.

### Callout boxes

The guide uses three “tiers” that are easy to recognize:

- **`.callout`** = “stop and pay attention” (why this matters, big conceptual bridge, warnings).
- **`.tip`** = “optional but helpful” (TL;DRs and sidebars; often a `<details><summary>` accordion).
- **`.code` (CRT block)** = “exact thing” (formulas/templates; highly scannable; labeled via `data-label`).

### Interactive elements (lightweight but meaningful)

What works:

- **TOC as “Inventory”** with mobile toggle + floating button; it never feels like “site chrome,” it feels like UI.
- **Theme switch integrated into the lesson** (“context changes perception”), not just a settings widget.
- **CSS-only image compare slider (`.image-compare`)**: great for “before/after” without heavy JS.
- **Bonus dungeon sandbox**: one small input → clear output table, with upfront disclaimers and guard-railed JS.

Takeaway: interactions reinforce the learning, but **nothing is gated** behind interaction.

---

## Recommended UI Kit for “How AI Works” (consistent pixel HUD)

Anchor all visuals to these reusable HUD components (from `pixel_kitchen_metaphor_guide_sheet.md`):

1. **Ticket Card (Prompt UI)**: Order / House Rules / Plating / Expo Checks + stamp overlays.
2. **Prep Counter Panel (Context UI)**: items on counter + a single **Counter Space meter** (context window).
3. **Back Room (Training UI — locked)**: greyed out + lock + tooltip “Not directly searchable during service.”
4. **Chef Style Slider (Decoding UI)**: Standard Recipe ↔ Chef’s Special + “Sampling ON/OFF”.
5. **Expo Pass Checklist (QA UI)**: recurring gate overlay; consistent checklist items + stamp result.

Add one more reusable card because the guide now relies on it:

6. **Handoff Card (Tray Item)**: the artifact passed between stations (Known-good / Assumptions / Missing info / Next station goal).

### Callout taxonomy to keep consistent

- **Callout (“This matters”)**: common misconceptions, high-stakes warnings, “do not do this,” anything that prevents a costly misunderstanding.
- **Tip (“Optional depth”)**: TL;DR, sidequest expansions, mini-glossary, “if you’re curious” technical detail.
- **CRT block (“Copy/paste artifact”)**: templates, checklists, example tickets, recap blocks, handoff cards.

### Stamp set (keep small and reusable)

Recommended stamps to standardize (text-first overlays where possible):

- `MISSING INFO`
- `NEEDS TOOL CHECK`
- `NO PHANTOM INGREDIENTS`
- `COUNTER OVERFLOW`
- `FAIL` / `PASS` (paired with what failed: “FAIL: no receipt”, “FAIL: constraint broken”)
- `STAFF ONLY` (permissions section)

---

## Repurposable site elements (OK to lift as-is)

These already exist and can be reused for the final guide HTML:

- CSS components: `assets/css/style.css` (`.grid`, `.callout`, `.tip`, `.code`, `.image-compare`, `.sandbox-*`, TOC styles).
- Core JS: `assets/js/core.js` (theme + TOC + in-view animation + code typewriter; safe no-op if markup missing).
- Sandbox JS pattern: `assets/js/sandbox.js` (guarded DOM hooks; “bonus dungeon” interaction style).
- Optional widgets: `assets/js/widgets.js` (Rule Card + Audit Quiz; already used in other guides).

---

## Planned visuals: section-by-section review + suggestions

### Section 0 — Intro (`How_AI_Works_section0_intro.md`)

Current: no explicit visual notes.

Suggestions:

- Add a **single “HUD legend” splash**: Ticket Card + Prep Counter + Counter Space meter + Tool icons + Expo Pass gate, all labeled once.
- Consider a small **callout** that defines “expo = expeditor / shift lead” *visually* (name tag: “EXPO (Shift Lead)”).
- Consider making the “What you’ll learn” table look like a **Quest Log** UI card list later (to match the conclusion).

### Section 1 — Mise en Place (`How_AI_Works_section1.md`)

Planned visuals (good direction):

- Ticket Card, Prep Counter Panel + Counter Space meter
- Chef Style Slider
- Generation loop (score → pick → plate → repeat)
- Stamps (`NO PHANTOM INGREDIENTS`, `MISSING INFO`, `NEEDS TOOL CHECK`)

Suggestions:

- Make the **generation loop** feel like the RGB guide’s CRT blocks: a short animated “typing” loop reinforces *step-by-step* generation without extra explanation.
- Add one micro visual: “Top 3 next slices” as a tiny list to hint at **scoring candidates** (no need to show probabilities yet).
- Use the Chef Style Slider here and **reuse the same UI again** in Section 5 (agent mode) so it becomes familiar UI, not a one-off illustration.

### Section 2 — The Prep Counter (`How_AI_Works_section2.md`)

Planned visuals (strong and on-metaphor):

- NO PEANUTS card sliding off as the counter fills
- Counter Space meter dropping into red
- “Power-Up: Recenter” recap overlay
- Expo checklist FAIL → PASS after recap
- Templates as collectible item cards

Suggestions:

- Use the **`.image-compare` slider** for “no recap vs recap” (same ticket, different counter packing). This is a perfect match for the existing component.
- Make “constraint burial” visually unmistakable: show the **constraint card physically occluded**, not just removed.
- Keep the Counter Space meter design identical across all sections (same color thresholds and scale).

### Section 3 — Thermometers & Scales (`How_AI_Works_section3.md`)

Planned visuals (good and repeatable):

- Thermometer overlay reading “???” while confident plating happens
- Tool belt icons (thermometer, scale, reservation book, inventory terminal)
- Tool output card drops onto counter like loot
- Receipts panel pinning claims to snippets
- Expo check FAIL (no receipts) → PASS (receipts attached)

Suggestions:

- Keep the **tool icon set small** and reuse the same 4 icons everywhere (avoid tool metaphor sprawl).
- Make “receipts” literal: snippet cards should include a tiny **source label + timestamp** (even if fake in the illustration) to teach the habit.
- Consider a compact callout visual: **Fake citations vs real receipts** (one screenshot-like panel each).

### Section 4 — Expo Pass (`How_AI_Works_section4.md`)

Planned visuals (excellent):

- Pipeline diagram: Ticket → Counter → Tools → Draft → Expo gate → Serve
- Four checks as a 4-icon checklist
- “Show your work” overlay that pins claims to evidence
- Before/after example: unknown headcount vs tool-verified headcount

Suggestions:

- Make the pipeline a **reusable asset** where each section highlights a different step (Section 4 highlights the QA gate).
- For the four checks, standardize iconography:
  - ticket = constraints
  - receipt = sources
  - mirror = consistency
  - cracked plate / warning triangle = edge cases
- Consider a light interaction: a checklist you can click (optional), but ensure the static version reads perfectly without interaction.

### Section 5 — Station Workflow (+ Agent Mode) (`How_AI_Works_section5.md`)

Planned visuals (strong):

- Overloaded ticket + flashing COUNTER OVERFLOW meter
- 3-panel workflow: Prep List → Station Assignments → Service Run
- Handoff Card as tray item
- PASS stamps between stations
- Expo Pass overlay blocks SERVE

Suggestions:

- Show stations as **separate counters** (separate screens), and make the Handoff Card the *only* thing that crosses between them.
- For the new “Agent Mode” add-on: reuse the same station diagram, add an **AUTO-RUN toggle**, and make **checkpoints** a big, obvious UI affordance (“STOP AFTER EACH STATION”).
- If you want one interactive piece in the entire guide, Section 5 is the best home:
  - A small “Station Ticket Builder” sandbox (fill fields → see the handoff card populate).
  - This can reuse the RGB guide’s sandbox layout (`.sandbox-card`, input + table) and the safe “guarded DOM hooks” JS style.

### Section 6 — Safe Handling (`How_AI_Works_section6.md`)

Planned visuals (on point):

- Counter overflowing with “RSVP_EXPORT.csv” + TOO MUCH ON COUNTER meter
- Staff-only door icon: “Who can see this?”
- Redaction pattern cards: `[EMAIL]`, `Guest_07`, “Bucket totals”
- Locked “Back Office Ledger” panel; sanitized tray items move to counter
- Leak risk stamp: “REDACT / AGGREGATE / USE PLACEHOLDERS”

Suggestions:

- Use the **`.image-compare` slider** for “raw dump vs redacted/bucketed” (super teachable moment).
- Visually distinguish:
  - **Back Office Ledger** = *your* private docs
  - **Back Room (learned technique)** = the model’s training (locked, not searchable)
  This avoids “back room” meaning two different things in visuals.
- Add a tiny badge set for **“never paste”** (keys/password/token icons) so it reads instantly.

### Section 7 — Conclusion (`How_AI_Works_section7_conclusion.md`)

Current: no explicit visual notes, but the content is highly visualizable.

Suggestions:

- Make a **one-page poster** visual: the pipeline + six kitchen truths + a mini “Quest Log” checklist.
- Render the templates as **CRT blocks** with `data-label` (“Ticket Card”, “Recap Block”, “Handoff Card”, “Expo Pass”).
- Turn “Quest Log (starter missions)” into a UI list (checkboxes) so it feels like a game menu, not an appendix.

### Bonus — Character Selection (`How_AI_Works_section_bonus_character_select.md`)

Current: text-only; character portraits exist under `wip_notes/how_ai_works/assets/character_select/` but aren’t referenced in the draft.

Suggestions:

- Treat this as a true **character select screen**:
  - portrait
  - stat bars (Speed / Carefulness / Tooling / “Refusal rate” if you want)
  - “Good for / Watch-outs / Ticket tip” as tabs or stacked cards
- Consider repurposing existing widgets:
  - **Rule Card** (“chef quirks” / “ticket tip of the day”)
  - **Audit Quiz** (“pick the best chef for this ticket”)
- Add a small callout: “Models change; always recheck vendor docs” (this keeps the section future-proof).

---

## Drop-in patterns to reuse (HTML sketches)

These match the existing guide system and can be repurposed directly:

### Callout
```html
<div class="callout">
  <h3>Common confusion</h3>
  <p>Training is technique, not a searchable stockroom.</p>
</div>
```

### Tip + collapsible sidequest
```html
<div class="tip">
  <details>
    <summary><strong>Sidequest: Why “temperature” doesn’t add memory</strong></summary>
    <p>Temperature affects sampling, not the context window.</p>
  </details>
</div>
```

### CRT template block
```html
<div class="code" data-label="Ticket Template:">
  <pre><code>**Order:** …
**House rules:** …
**Plating:** …
**Expo checks:** …</code></pre>
</div>
```

### Image compare (before/after)
```html
<figure dir="rtl">
  <p class="image-compare" role="img" tabindex="0"
     aria-label="Before/after: counter packed without recap vs with recap.">
    <span><img src="before.png" alt="" aria-hidden="true"></span>
    <img src="after.png" alt="" aria-hidden="true">
  </p>
</figure>
```

---

## Recommendation: choose one “hero order” and reuse it everywhere

The RGB→CMYK guide gets a lot of mileage from carrying one example through the entire page. For this guide, pick one “hero ticket” (same event/order) and keep using it in visuals:

- same ticket headings (Order / Rules / Plating / Expo checks)
- same named constraint (e.g., “NO PEANUTS”)
- same tool receipt source (e.g., “RSVP export”)

It will make the HUD feel like one coherent game UI instead of a slideshow of unrelated examples.

