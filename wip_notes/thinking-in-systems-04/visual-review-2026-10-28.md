# Essay four: review of the prose updates and new visuals

Reviewed 2026-10-28. This is a review record; no changes were made to the essay,
its edited snapshot, or its styles.

Follow-up: the author requested these fixes, and all findings and caption
suggestions were applied later on 2026-10-28. See the resolution below. The
findings retain their pre-fix wording and line references.

Compared the current page against the pre-visual rollback and the previous
connected-prose pass. The small intervening prose changes preserve the argument.
The two new figures fit their sections, and the original three figures retain
their stable IDs after renumbering. No substantive factual regression found in
the changed material. This was not a new external reference audit.

## Findings

### 1. Reset the response table's column width when it stacks on mobile

Location: `assets/css/thermometer.css:101` and `:113`.

The desktop `.response-table .is-single` rule sets `width: 24%`. It has higher
specificity than the mobile `.response-table td` rule setting `width: auto`, so
the narrow column survives after the table cells become blocks. At a 390px
viewport, the "With one behavior / Generate an answer" cell is only 70.55px wide
inside a 294px row. Both phrases wrap unnecessarily, leaving most of the row
empty and lengthening every card.

Use an equally specific mobile override, such as
`.thinking-guide .response-table td.is-single { width: auto; }` inside the existing
media query. A browser-only trial made the cell 294px wide and reduced its height
from 83px to 45.5px. This trial did not modify the stylesheet.

Evidence: `artifacts/guide-checks/essay-04/visual-review-2026-10-28/lesson-4-mobile-figure-2.png`.

### 2. Keep the thermostat's SVG labels readable when the panels sit side by side

Location: `assets/css/thermometer.css:69`, `:73`, `:86`, and `:94`.

The SVG's text scales with the drawing. Immediately above the 700px stacking
breakpoint, its 200-unit viewBox renders at about 159px wide: "Hallway" and "Room"
are effectively 9.54px, and temperature readings are 10.33px. Even at 900px the
labels render at about 11.44px. Nothing overflows, so the existing smoke checks
do not catch this readability issue.

Keep meaningful labels around the series' 13–15px pattern independently of SVG
scaling, or adjust the panel arrangement and label sizing together. Raising the
stacking breakpoint alone will not fix the small labels at wider viewports.
The HTML readouts preserve the information, but the floor-plan labels should
still be comfortable to read.

Evidence: `artifacts/guide-checks/essay-04/visual-review-2026-10-28/sensor-701.png`
and `label-measurements.json` in the same directory.

### 3. Let the new response table replace some adjacent explanation

Location: `guides/the-thermometer-is-in-the-wrong-room.html:145`–`:147`.

The prose lists four question types and the missing responses, then Fig. 02
immediately repeats both lists. The table makes the mapping easier to scan;
retain it and shorten the introduction. This is an editorial suggestion, not
an accuracy problem.

Current introduction:

> Consider an AI assistant used to answer employees' questions. Some questions
> are straightforward. Others are ambiguous. Some require confidential
> information the assistant cannot access. Still others involve decisions that
> must be approved by a qualified person.
>
> Suppose the assistant has only one available behavior: generate an answer.
>
> No matter how sophisticated the model becomes, the surrounding system is poorly
> equipped for these different situations. It has no way to ask for clarification,
> acknowledge missing authority, defer an answer, or escalate a consequential
> decision. Those are different responses to meaningfully different conditions.

Possible replacement before the table:

> Consider an AI assistant used to answer employees' questions. Suppose its only
> available behavior is to generate an answer. A more sophisticated model won't
> give the surrounding system a way to defer a question or escalate a decision.

The following paragraph beginning "Giving the assistant more freedom…" still
provides the autonomy/scope trade-off, and the research note preserves the
distinction between the illustration and Ashby's formal law.

## Small caption polish

- At line 130, "The second and third thermostats" should be "The two thermostats":
  the first panel has fixed output, so there are only two thermostats.
- At line 161, "each one needs the information to choose it" gives the response
  an awkward role. A clearer replacement for the second sentence would be:
  "Adding responses doesn't make a system reliable on its own. The system needs
  enough information to choose an appropriate response and a way to carry it out."
  The introduction identifying this as an engineering illustration can remain.

## What works

- Fig. 01 makes the warm-hallway example concrete and connects sensor placement
  to the later production workflow without changing the underlying example.
- Fig. 02 clearly distinguishes answering from clarifying, deferring, and
  escalating; the native table retains its headers and cell roles in Chrome's
  accessibility tree after the mobile layout change.
- Light/dark styling is consistent with the existing figures. Accessible HTML
  readouts accompany the decorative floor-plan SVGs.
- The tighter pilot sentence and consistent "reviewer" terminology preserve the
  previously reviewed meaning. The ending and established humor are intact.

## Verification and limits

- `python3 tools/guides/maintain.py check` passed.
- The lesson-four browser suite passed with installed Google Chrome, including
  320–1440px layouts, themes, navigation, disclosures, no-JavaScript access,
  homepage filtering/fallbacks, and basic print visibility. No console/page
  errors were reported. This does not constitute a print-pagination audit.
- Additional measurements covered 320, 390, 700, 701, 768, 900, 1100, 1101, 1280,
  and 1440px. Screenshots were inspected for the new figures in desktop/mobile
  layouts and light/dark themes; no horizontal overflow was found.
- The edited snapshot matches the page. The original source hash remains
  `cf8f1d57457f9b2955d52ab4b8be35fe89228ca41c3c23fd8295fc58fc5e030e`.
- References are unchanged; the earlier source audit stands. Shared assets and
  the earlier essays were not changed. No commit, push, or publication performed.
- Essay four remains a local, uncommitted WIP with `noindex,follow`.

Review evidence is under the ignored
`artifacts/guide-checks/essay-04/visual-review-2026-10-28/` directory.

## Resolution — 2026-10-28

Applied the author's request to fix the review findings, including both caption
suggestions. Fig. 02's mobile answer cells now reset their width explicitly.
Fig. 01 uses HTML labels over the decorative SVGs so room names remain 13px and
temperature readings remain 14px as the drawings scale. The hallway is slightly
wider to leave space around its label in the narrowest three-panel layout.
Accessible readouts, diagram meaning, figure IDs and numbering are unchanged.
The introduction and captions use the exact wording proposed above.

The edited snapshot matches the page. Metadata/local-link checks and the
lesson-four browser suite passed, including homepage fallbacks and basic print
visibility. Additional measurements on fresh pages at ten widths from 320–1440px
confirm that labels fit within their rooms, mobile answer cells occupy the full
row, and the settled layouts have no horizontal overflow. Screenshots of the
figures and the revised response section were inspected in desktop/mobile and
light/dark layouts. This is not a full print-pagination or resize-transition
audit; the unchanged references were not audited again.

Evidence and before copies are under
`artifacts/guide-checks/essay-04/visual-fixes-2026-10-28/`. The original source,
references, links, IDs, shared assets, registry states, homepage and social art
are preserved. No commit, push or publication performed. All review findings
are resolved; essay four remains a local WIP.
