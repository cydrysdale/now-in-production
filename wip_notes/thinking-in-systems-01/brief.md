# Essay 01: When AI Gets the Right Answer for the Wrong Reasons

- Source: `source.md`, recovered verbatim from the author’s original essay in this task on 2026-10-26. Original wording and formatting are preserved.
- Live edited page: `../../guides/when-ai-gets-the-right-answer.html`.
- Edited snapshot: `edited.html`; relative assets are intended for the live guide location, not this notes folder.
- Series state: published in the local registry. The author requested committing and merging to origin after completion on 2026-10-26.

## Flow fixes — 2026-10-30

The author approved the [flow-fix plan](../thinking-in-systems-flow-fixes-2026-10-30.md) on 2026-10-30 without striking anything, so all proposed wording and new humor are applied as written, including optional lines. This approval does not cover publication: the change is local and uncommitted, and the hosted page still shows the earlier text. `source.md` is unchanged.

Fixes 1.1–1.8. The conclusion now answers the students' question. The font facts appear in the main text at the Claim section, and the two disclosures are unchanged. The second brand-document example is signaled as new. The audit's justified-true-belief correction is reworded with its Stanford link retained. Gettier's first case (job applicants and coins) was checked against Wikipedia's summary only; the paper itself remains inaccessible to automated access. `guide:updated` is 2026-10-30; the publication date is preserved. The “end of day” line stays: the flow review misread it as an inconsistency and withdrew that finding.

Validation: `maintain.py check` passes and all five lessons plus the homepage pass `smoke.mjs`, run with installed Chrome because the bundled Playwright Chromium was out of date. Every removed word was compared against the plan, and protected wording and audit corrections were confirmed present. Ten of twenty captures of changed passages (1280px light, 390px dark) were inspected. Evidence and before copies: `artifacts/guide-checks/flow-fixes-2026-10-30/`.

## Repository save — 2026-10-28

The author requested committing and pushing the completed session work. Content
commit `7398fd8` was pushed to `origin/main`, including this guide's approved copy
and humor edits. Final metadata/local-link checks, all seven authoring-tool tests,
and browser smoke checks for all three guides passed. These browser checks include
the final humor wording and supersede the earlier limited checks for those edits.
GitHub Pages deployment succeeded. On 2026-10-28, the hosted guide, homepage,
registries and changed shared assets matched the local files byte for byte.
The deployed guide still links to essay two; essay three remains WIP and is
excluded from its public series navigation. Earlier local-only notes below
describe the state before this repository save.

## Humor review — 2026-10-28

During the one-at-a-time humor review, the author chose to retain the original
opening of the one-week section and change only its final sentence to:
“In reality, leadership often wants a solution by end of day.” This exact wording
is implemented. The proposed philosophers/Friday replacement was not adopted.
The author also supplied and approved the parenthetical “(that percentage sign
is doing a lot of heavy lifting)” in the sentence about “I’m 95% certain.” Their
complete paragraph is implemented verbatim. The edited snapshot is current;
metadata and local-link checks pass. The series humor review is complete, with
all five suggestions implemented in their individually approved forms.

## Approved copy edit — 2026-10-28

The author approved implementing the [series copy review](../thinking-in-systems-03/copy-review-2026-10-28.md).
The font examples now carry the same facts forward: Helvetica is the old rule,
Inter is current for a standard company presentation, and a claim about *all*
presentations still needs a scope check. The citation example uses the correct
Inter answer with a campaign brief that contains no typography instructions,
isolating the unsupported citation from an incorrect answer.

Removed the repeated explanation after the stopped-clock example, made the
transition to claim/evidence/confidence more direct, grouped the calibration
research in the existing research-note pattern, and shortened the conclusion to
the opening question, practical checks and final thought. Research distinctions
and citations are retained. The updated date is 2026-10-28; the edited snapshot
and generated homepage card are current.

Validation: guide metadata/local links and browser smoke checks passed for all
three guides. Changed prose was visually reviewed at 1440px in light mode and
390px in dark mode. All original source hashes, anchor IDs and figure markup
match the before copies. Backups and captures are under
`artifacts/guide-checks/copy-edit-2026-10-28/`. This was a prose edit using the
existing source review, not a new factual audit. The changes remain local and
uncommitted; no publication action was taken.

## Editorial decisions

Build an educational long-form essay with restrained visuals and a light editorial pass. Preserve the distinction between correctness, justification, reliability, and understanding. Keep the philosophical positions and their objections visible without treating them as experimental proof about modern models.

Use three broad movements: being right versus knowing why; performance versus understanding; and evidence for operational trust. Keep the brand-standards examples as the practical thread. Place supporting research near the relevant claims and retain further reading.

## Visual decisions and review

- The stopped-clock/brand evidence example uses native disclosures. Its documents and standards are fictional and its use case is held constant.
- The knowledge diagram is a schematic response to Gettier, not an established taxonomy. The traditional justified-true-belief account equates JTB with knowledge; the inner boundary remains disputed.
- The Claim / Evidence / Confidence figure distinguishes historical authority from present applicability. Optional Toulmin terminology is explained in a research note.
- The source-precedence table states its assumed campaign and internal-presentation scopes. Its hierarchy is illustrative, not a general rule that the newest document wins.
- Optional FP1–FP7 terminology is defined and attributed in a collapsible research note.
- Knowledge-diagram labels use a 13–15px responsive range independent of SVG scaling, following review of the oversized labels.

The author approved proceeding with the guide, requested review and fixes to the additional visuals, and approved the repeatable authoring workflow. Browser and source-review results were reported during that work. Future substantive revisions should receive their own editorial review.

## Repeatable checks

Run the Python publication check and optional browser smoke script described in `../../docs/thinking-in-systems.md`. They cover metadata/assets/anchors, publication navigation, theme/contents/Home, small-screen layout, native disclosures, and homepage fallbacks. They do not establish factual accuracy or replace author review.

## Paragraphing pass — 2026-10-27

The author requested the same paragraphing review approved for essay two. This page already used mostly developed paragraphs, so the pass is selective: join the two student descriptions, connect the symbol example to its context, and keep related explanations and consequences together. Eleven paragraph breaks were removed. Deliberate questions, the stopped-clock reveal, highlighted takeaways, and the closing thought retain their pauses.

No sentence wording, punctuation, citation, figure, list or interactive content changed. A normalized comparison against the pre-pass HTML verifies this; only paragraph boundaries and the updated-date metadata differ. The original `source.md` remains unchanged. The update date and generated homepage card were synchronized, and the edited snapshot was refreshed. These are local revisions to the published guide; this pass does not deploy them.

Validation: metadata/local-link checks and browser smoke checks passed for both essays, including homepage fallbacks, theme and TOC behavior, 320–1440px layouts, keyboard disclosures, and essay two's worksheet export. Prose excerpts were visually reviewed at desktop and mobile widths. Before copies and screenshots are saved locally under ignored `artifacts/guide-checks/paragraphing-review/`.

## Release — 2026-10-27

The author subsequently requested committing and pushing the completed guide work. This release includes the paragraphing revisions above and a generated link to the published second essay. The edited snapshot reflects the release navigation.

## Audit follow-up — 2026-10-29

Corrected the two Gettier links to the DOI, replaced the incomplete MIT Plato
page with the complete Gutenberg translation, qualified the history of the
justified-true-belief account, and made the stopped clock explicitly analog.
The source is unchanged. Modification date and snapshot are current; publication
date is preserved. Metadata and browser checks pass. These fixes are included in the author-requested audit release. See the [audit record](../thinking-in-systems-audit-2026-10-29.md)
for source access levels, decisions, and validation.

### Audit release verified — 2026-10-29

Audit commit `998bba0` is pushed to `origin/main`. GitHub Pages
[deployment 40975211990](https://github.com/cydrysdale/now-in-production/actions/runs/40975211990)
succeeded. All four hosted guides, the homepage, both registries, and four social
images match the release byte for byte. Browser checks confirm the corrections,
original publication dates, homepage cards, series links, and mobile layout,
with no browser errors. Essay five and its supporting files were excluded.
Evidence is under `artifacts/guide-checks/publish-audit-2026-10-29/` in the main
workspace. The original sources and unrelated local work are preserved.
