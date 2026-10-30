# Thinking in Systems: session handoff

Updated 2026-10-30. Verify this note against current files, Git status and later
user instructions before acting.

## Start here next session

- The author requested publication of essay five on 2026-10-30. Release
  preparation is in progress: first-publication date and published status are
  set, homepage and all five series footers are synchronized, and snapshots
  are current. Metadata, browser, and publication-navigation checks pass; hosted
  verification is pending.
- Read the [guide](../guides/the-human-in-the-loop-isnt-always-in-control.html)
  and [brief](thinking-in-systems-05/brief.md). The reviewed prose, six figures,
  original ending, research qualifications, and social art are unchanged.
  Figure 02 retains the author's latest no-list layout and valid heading.
- Essays 01–04 retain the audit corrections released in `998bba0` and verified
  on 2026-10-29. Today's changes to those pages only add essay-five navigation.
  Original sources and first-publication dates are preserved.
- This release includes essay-five source/review files and the series-map rows
  for essays four and five. Presentations, OS files, rollback folders, and other
  unrelated local work remain outside the commit.

The dated entries below are historical records of each step. Statements that
work was local or uncommitted describe that step; the state above and the
current-state table reflect the completed session.

## Audit release verified — 2026-10-29

Audit commit `998bba0` is pushed to `origin/main`. GitHub Pages
[deployment 40975211990](https://github.com/cydrysdale/now-in-production/actions/runs/40975211990)
succeeded. All four hosted guides, the homepage, both registries, and four social
images match the release byte for byte. Browser checks confirm the corrections,
original publication dates, homepage cards, series links, and mobile layout,
with no browser errors. Essay five and its supporting files were excluded.
Evidence is under `artifacts/guide-checks/publish-audit-2026-10-29/` in the main
workspace. The original sources and unrelated local work are preserved.

## Essay audit corrections — 2026-10-29

The author supplied findings for all five essays and asked us to check them.
The [audit record](thinking-in-systems-audit-2026-10-29.md) records the findings,
source access levels, corrections, and qualifications. Changes include essay
one's citations/history/clock, repeated experimental runs and explicit assumptions
in essay two, narrower research summaries in essay three, the known-versus-total
failure count in essay four, and essay five's figure heading and raw HTML repair.
The latest manual removal of Figure 02's list is preserved. Its question now
states the comparison directly, without an unused “benchmark” label.

Essay five's “Most” title is corrected; Figure 05's title was already softened.
The audit did not identify its second title, so clarification was requested.
No other title was changed speculatively. The who-owns-type guide has no local
prose or em-dash change; its latest committed update only added publication-date
metadata. Precision and recall in essay three remain unchanged.

The author subsequently requested a commit and push. Essays 01–04 are included
in release `998bba0`; essay-five corrections remain local for tomorrow morning.
Evidence and pre-edit backups, including the current manual edits,
are under `artifacts/guide-checks/essay-audit-2026-10-29/`.

## Essay five review follow-up — 2026-10-29

Applied the redundant-question and terminology fixes, one optional word cut,
and two short links back to essay four. The 96% example now explicitly asks
whether human reviewers caught errors, could stop publication, and could sustain
that work with a full day's queue. Preserved the original example and full ending
under the author's light-edit direction. Three proposed “necessarily” cuts are
declined because they change the qualifications; the series recap is unnecessary
given the cover's Essay 05 / 05 label and existing conclusion.

The review's “reviewer has to be tested” quotation concerns a second model in
essay four. Its marketing workflow is fictional; the callback says so. The
five oversight questions are useful diagnostically but remain a practical
heuristic, not a validated test. Added them and essay four's feedback loop to the
authoring map. The social PNG and SVG source are ready, and the page's Open Graph
reference is updated. Essay five remains local WIP; no release was performed.
See its current brief for validation and the review response for detailed reasons.

The author's subsequent review follow-up is applied: the essay-four callback now
begins “Decisions can come after approval, too.” and appears before the section's
closing paragraph. This explicitly connects the examples before and after approval.
No other essay wording changed. Snapshot and metadata/local-link checks pass;
essay five remains WIP and essays four and two are unchanged.

## Essay five visuals pass — 2026-10-29

At the author's request, researched representation techniques
([visual research note](thinking-in-systems-05/visual-research-2026-10-29.md)) and
implemented six figures plus a closing "Across the series" section, using a new
lesson stylesheet, `assets/css/human-in-the-loop.css`. No shared CSS/JS or other guide
changed; no essay prose outside the new section changed. The pre-visuals page, snapshot
and brief are preserved with hashes and restore steps in
`wip_notes/thinking-in-systems-05/rollback-2026-10-29-pre-visuals/`. The brief records
figure facts, draft wording for author review, three proposed (unapplied) prose trims,
and validation. `maintain.py check` and smoke checks for lesson five, all published
lessons and the homepage passed. Captures are under
`artifacts/guide-checks/essay-05/visuals-2026-10-29/`. Still local, uncommitted and `wip`;
no commit, push or publication was requested.

## Essay four publication verified — 2026-10-29

The author requested publication. Added the 2026-10-29 first-publication date,
set essay four to published, and synchronized homepage and series navigation.
Prepared the release separately from local work on essay five and guide two.
The source, reviewed prose, five figures, and social art are unchanged.
Local metadata/link and whitespace checks passed, as did browser checks for all
four published essays and homepage fallbacks. The new card and series navigation
were visually inspected; original article bodies and assets are unchanged. Hosted
content and navigation verification passed; details follow. Screenshots are under
`artifacts/guide-checks/publish-04-2026-10-29/`.


### Hosted publication verified — 2026-10-29

Release commit `cecf247` is pushed to `origin/main`. GitHub Pages
[deployment 40912999445](https://github.com/cydrysdale/now-in-production/actions/runs/40912999445)
completed successfully. Verified fourteen hosted files byte for byte against
that release: the homepage, both registries, essays one–four, shared and
lesson-specific CSS/JS, and essay four's PNG/SVG social art.

The live browser followed the homepage card and essay three's Next link to essay
four, checked incoming series links from all earlier essays and the Previous
link back to essay three, and confirmed the publication date, removal of noindex,
five figures, and mobile layout. No browser errors occurred. Hosted card and
mobile screenshots were inspected. The approved article bodies remain unchanged.
Evidence is under `artifacts/guide-checks/publish-04-2026-10-29/` in the main workspace,
including `deployment.json` and `hosted-verification.json`. Temporary browser and
preview sessions are closed. Essay five and the unrelated guide-two prose edit
were excluded from the release.

## Essay five restored to the original with light edits — 2026-10-29

The author superseded the compressed rewrite and the one-at-a-time review with:
“Lets just revert to the original and make the usual paragraphing and
personalization edits.” The page is rebuilt from the preserved source, retaining
every prose block in its original sequence and restoring the original headings,
examples, research qualifications, ten references, and complete conclusion.
There is no pending question about the opening; its original “Technically” turn
and following question are restored under this instruction.

Grouped related sentences into paragraphs, retaining deliberate short turns and
the original dry irony. Six local personalization changes add conversational
address and a few observations; four narrow factual corrections reuse the prior
source verification. The brief records all ten wording changes. The essay is
back to approximately 5,000 words, with no reduction target. The “Hopefully” aside
and the first rewrite's expanded scenarios and shortened ending are removed.

The prior review is marked historical. The guide retains its shell, anchor IDs,
WIP status, and existing placeholder social image. No other guide or shared asset
is edited; the existing guide-two wording change is unrelated and preserved.
Source-block and wording checks, source preservation, snapshot agreement, and
metadata/local-link checks pass. Lesson-five browser checks passed at 320–1440px,
including theme persistence, navigation, no-JavaScript access, and homepage
filtering/fallbacks. The desktop/light opening and mobile/dark opening, approval
sequence, and ending were visually inspected. Print coverage is article visibility
only. Preview/browser processes are closed. Artifacts are under
`artifacts/guide-checks/essay-05/original-light-edit-2026-10-29/`.

No commit, push, or publication was requested or performed. Continue from the
restored page and current brief, rather than the superseded review suggestions.

## Essay five second voice pass started — 2026-10-29 (superseded)

The author approved revisiting the first edit to preserve deliberate irony,
understatement, pauses, and callbacks. Review the original, current edit, and
recommended version in context, one passage at a time until the balance is clear.
Retain useful cuts and research corrections; do not treat the 31% reduction as
a target. The brief records pending item 1: replace the explanatory opening
paragraph with the original “Technically, a human made the final decision.” and
“Did that human actually exercise any meaningful control?” as separate paragraphs.
This is approval of the review process, not a recorded decision on that wording.
The guide and snapshot are unchanged; earlier validation remains applicable.

## Essay five critical prose review and draft — 2026-10-29

The author supplied essay five and requested a critical review to make the prose
less AI-like, more conversational and personable. The local WIP page retains the
title, subtitle, nine principal sections, research spine, and approval-button
callback. It is about 3,450 words including references versus about 4,970 in the
source. The edit removes repeated setup and conclusions, varies historical
introductions, develops paragraphs, and carries the fictional proposal example
through the human roles. No personal work history was invented.

The separate critical review gives priorities and original/replacement passages.
The brief records source verification, access limits, exact draft voice choices,
example assumptions, and validation. These are editorial choices under the
requested pass, not individually approved final wording. Substantive changes
clarify authorization scope, exception routing as a possible failure, testing
reviewers on valid recommendations as well as errors, and the distinction between
accuracy and authority over a commitment. All ten original works are retained;
two primary references support automation bias and algorithm aversion.

The page uses the existing shell without new figures or shared CSS/JS changes.
Its five questions remain a practical heuristic, explicitly separate from NIST's
guidance. Lesson-specific social art is still needed before publication; WIP
metadata currently uses the existing default image.

Metadata/local-link, source-preservation, and whitespace checks pass. Lesson-five
browser checks passed at 320–1440px, including navigation, theme persistence,
no-JavaScript access, and homepage filtering/fallbacks, with no unexpected browser
errors. Desktop/light and mobile/dark cover and body captures were inspected.
Print review covers article visibility only. Evidence is under
`artifacts/guide-checks/essay-05/prose-review-2026-10-29/`. Preview/browser processes
are closed. No broader regression run was needed because earlier guides and
shared assets are unchanged.

Essay five is local, uncommitted, `wip`/`noindex,follow`, without a publication date,
homepage card, or incoming public series link. No commit, push, or hosted release
was requested or performed. Essay four's existing publication plan remains a
separate task. Next: author review of the draft and the recorded edits.

## Commit and push verified; essay four deferred — 2026-10-28

The author authorized committing and pushing the completed site work, with
guide four's publication deferred until tomorrow. Commit `81f916b` on `main` saves the reviewed
essay-four WIP, its figures and social art, and the homepage publication-date
changes. Guide four remains `wip`, `noindex,follow`, without a publication date
or homepage card. On publication, set `guide:published` to the actual release
date, change its manifest status to `published`, synchronize, and verify hosting.
No automatic release is scheduled.

Metadata/local-link and whitespace checks pass. The existing seven maintenance
tests, published-series browser checks, essay-four checks, and targeted homepage
date/fallback checks passed in the preceding work. Original source files are
preserved. The 26-file commit was pushed to `origin/main`; OS files, presentations,
and local rollback folders were excluded and remain untouched.

GitHub Pages reports a successful build of `81f916b`. Verified the hosted homepage
against the committed HTML, both registries, all six published guides' publication
metadata, and guide four's WIP/noindex state. The homepage shows RGB → CMYK as
`Published 2025-08-18`; guide four has no card or publication date. Evidence is
under `artifacts/guide-checks/homepage-publication-dates-2026-10-28/hosted-verification.json`.
No automatic publication is configured for tomorrow. This handoff update records
the completed push and deployment verification.

## RGB → CMYK publication date corrected — 2026-10-28

The author confirmed that the RGB → CMYK guide was first published on 2025-08-18
in a different repository. Updated its `guide:published` metadata and regenerated
the homepage cards. The date record now cites the author's correction rather
than this repository's later launch. The edited date is unchanged. Metadata/local-link
and whitespace checks passed; the generated card shows `Published 2025-08-18`.
This correction remains local and uncommitted; no deployment was requested.

## Homepage publication dates — 2026-10-28

The author requested publication dates instead of edited dates on homepage cards.
Live cards and generated fallbacks now display and sort by `guide:published`,
newest first. Added the six published guides' dates from repository history;
the [date record](homepage-publication-dates-2026-10-28.md) documents each source.
Edited dates are unchanged. The maintenance tool requires publication metadata
for published guides; the template and authoring documentation explain when to
add it and preserve it. Essay four remains WIP without a publication date.

The three published essays' snapshots are refreshed; their prose is unchanged.
All seven maintenance tests, metadata/local-link checks, and the published-series
browser suite passed. Additional homepage checks verify dates/order across HTTP,
direct-file, no-JavaScript and fetch-failure fallbacks; changing an edited date
to 2099 does not change a card's publication date or position. Desktop/light and
mobile/dark captures were inspected. Evidence is under
`artifacts/guide-checks/homepage-publication-dates-2026-10-28/`. All original sources
and publication statuses are preserved. Preview processes are closed. Changes
remain local and uncommitted; no push or deployment was requested or performed.

## Essay four visual fixes applied — 2026-10-28

Applied the author's request to fix the latest review findings, including its
caption suggestions. The mobile response table now uses the full row width.
Thermostat labels remain at 13–14px independently of the drawings' scale, with
space around the hallway label. Shortened the prose before Fig. 02 and applied
both caption corrections. The review record and brief document the resolution;
the edited snapshot is current.

Metadata/local-link and lesson-four browser checks passed. Additional fresh-page
measurements at ten widths from 320–1440px verify label size and placement, mobile
cell widths, and no horizontal overflow. Desktop/mobile and light/dark captures
were inspected. Evidence is under
`artifacts/guide-checks/essay-04/visual-fixes-2026-10-28/`. Print coverage remains
basic visibility; unchanged references were not audited again. Original source,
shared assets, links, IDs, registries and social art are preserved. Temporary
preview processes are closed. Essay four remains local, uncommitted, and WIP;
no publication was requested. Read its current page and brief for any next
revision or release request. Essay five remains planned without a supplied source.

## Essay four visual update review — 2026-10-28

Reviewed the subsequent prose updates and both new figures against the previous
copy pass and pre-visual rollback. No essay or stylesheet edits were made.
The [review record](thinking-in-systems-04/visual-review-2026-10-28.md) identifies
two rendering fixes: the response table retains its 24% column width after
stacking on mobile, and the thermostat's SVG labels shrink to about 9.5px just
above the stacking breakpoint. It also proposes trimming prose that Fig. 02 now
repeats and polishing two captions. The follow-up above resolves these findings.

Metadata/local-link checks and the lesson-four browser suite passed. Additional
screenshots, SVG text measurements, and mobile accessibility-tree inspection
support the findings; evidence is under
`artifacts/guide-checks/essay-04/visual-review-2026-10-28/`. Print coverage remains
basic visibility, and unchanged references were not audited again. The source
hash is preserved and the edited snapshot matches the page. Essay four remains
local, uncommitted, and WIP; no release was requested. Read the review record and
current page next. Temporary browser sessions and preview servers are closed.

## Essay four connected prose pass — 2026-10-28

Completed the author's request for another full copy pass. Tightened abstract
wording and repeated explanations, clarified the broken-heater example and the
negative-feedback reference, and changed two headings to fit their sections.
The NIST section now ends with the team's ability to act. The evaluator study's
comparison terminology is explained in plain language, with its limits intact.
The reviewed pilot, queue bridge, predictability and warm-hallway passages,
humor, figures, references, and final section remain unchanged.

The edited snapshot is current. Metadata/link and whitespace checks, preservation
checks, and the lesson-four browser suite passed. Changed prose was visually
reviewed on desktop/light and mobile/dark; print coverage remains basic visibility.
Evidence is under `artifacts/guide-checks/essay-04/copy-pass-2026-10-28/`; the brief
records the editorial decisions. No release was requested. Essay four remains
local, uncommitted, and WIP; other essays and shared assets are unchanged.

## Essay four pilot prose follow-up — 2026-10-28

The author confirmed the eleven-point revision and requested shorter pilot
sentences and a clear bridge to the queue paragraph. The pilot now explains the
proposed test through short sentences and two questions. “Review delays matter
here” replaces “That last part matters,” without ranking delays above missed
failures. Removed the repeated sample-selection phrase from the main text;
Fig. 01 retains the qualification. The brief records the current exact wording.
Metadata/link and whitespace checks passed, and the edited snapshot is current.
No figures, sources, styling, or release state changed. Earlier browser/source
checks stand; this prose-only follow-up did not repeat them. Essay four remains
local, uncommitted, and WIP.

## Essay four review applied — 2026-10-28

The author supplied an eleven-point review and invited pushback. All concerns
are addressed in the local draft; see essay four's brief under “Author-supplied
review” for the decisions and exact alignment passages. Fixed Kálmán and the
explicit subject, connected fixed thermostat rules with disturbance-dependent
timing, clarified that the 95% dashboard did not reflect the corrections, and
returned to the eightfold scaling question with a pilot and staged expansion.
The pilot includes independent final-output inspection and agreed limits;
passing planted failures alone is not presented as sufficient evidence to scale.
Sensor placement uses a warm-hallway example rather than claiming a thermostat
can only affect its sensor's room.

Reduced clustered caveats while retaining their meaning in Fig. 01's caption,
moved the series links to a note after the example's payoff in 1–2–3 order,
cut the retention tangent and extra concluding maxim, and applied the requested
local wording fixes. The existing humor, offer example, queue paragraph, source,
CSS/JS, social art, and earlier essays are preserved. The lesson plan was not
found locally; alignment is based on the supplied review excerpts only.

Metadata/link checks and the lesson-four browser suite passed, including homepage
fallbacks, 320–1440px, themes, navigation, disclosures, and basic print visibility.
Evidence is under `artifacts/guide-checks/essay-04/review-2026-10-28/`.
The edited snapshot is current. Essay four remains local, uncommitted, and WIP;
the review did not request publication or sending a message. The release state
of essays one–three is unchanged.

## Essay four draft — 2026-10-28

The author supplied **The Thermometer Is in the Wrong Room** and requested
personalization work on the prose. A complete local WIP page is now at
`guides/the-thermometer-is-in-the-wrong-room.html`. The original essay is preserved
verbatim in `thinking-in-systems-04/source.md`; read its `brief.md` for editorial
decisions, source verification, exact voice changes, and validation. The edited
snapshot matches the guide.

The draft keeps the argument and fictional scenario, groups related sentences,
trims repeated explanations and endings, and adds restrained workplace humor.
Technical clarifications distinguish variable output from unpredictability,
sample coverage from statistical adequacy, the two sampled failures from the
two discovered publication failures, and text comparison from rendered-asset
verification. Three accessible figures cover the measurement gap, a missing
qualification, and Define → Observe → Compare → Respond. Series continuity
links retain the earlier diagnostics and extend the investigation beyond the
approved answer through publication.

The new page uses the shared shell plus its own `assets/css/thermometer.css`;
shared CSS/JS and essays one–three are unchanged. Social art is supplied as
1200 × 630 PNG with SVG source. Metadata, links, generated content, original
source preservation, and the essay-four browser suite pass. Screenshots are in
`artifacts/guide-checks/essay-04/`; desktop/mobile figures, both themes, and the
social image were visually inspected. Print verification is basic visibility,
not a full pagination audit. Browser tooling used installed Google Chrome.

This is an edited draft under the author's request, not a record of individual
wording approval. It remains local and uncommitted, with `wip`/`noindex,follow`
status and no homepage card or incoming public series links. No commit, push,
or publication was requested for essay four. Next action: author review of the
draft, followed by any requested revisions or release. Essay five remains
planned without a topic or notes folder. Unrelated existing work is preserved.

## Essay three publication — 2026-10-28

The author authorized publication after asking about the missing homepage and
end-section links. Publication commit `7830a00` is pushed to `origin/main`.
Essay three is now `published` in both registries. The homepage has its card;
essays one and two link to it in their end sections, and essay two also has a
Next essay link. Its `noindex,follow` metadata is removed. All three edited
snapshots are current, with approved prose and original source files unchanged.

Metadata/local-link checks, whitespace checks and the browser suite passed for
all three published essays and homepage fallbacks. Desktop/mobile footer links
were visually reviewed. Captures are under
`artifacts/guide-checks/publish-03-2026-10-28/`.
GitHub Pages [deployment 40765048549](https://github.com/cydrysdale/now-in-production/actions/runs/40765048549)
succeeded. On 2026-10-28, twelve hosted files matched the local release byte for
byte: the homepage, all three essays, both registries, shared CSS/JS, both
worksheets and essay three's social PNG/SVG. A live browser followed the homepage
card and essays one/two's end-section links to essay three, verified essay two's
Next essay link and removal of `noindex`, and reported no page errors. The live
homepage card was visually checked. Evidence is in the same artifact folder:
`hosted-check.json` and `hosted-homepage-card.png`.

This publication decision supersedes the WIP and pending-release statements in
the historical session entries below. No editorial approvals remain pending.

## Repository save — 2026-10-28

The author subsequently requested committing and pushing the completed session
work. Content commit `7398fd8` is on `origin/main`. It contains the revised first
two guides, guide three's WIP draft and assets, and their editorial records.
The authoring workflow, template and verified handoff are recorded in
follow-up commit `40d4b3b`, also pushed to `origin/main`.
Final metadata/local-link checks, all seven authoring-tool tests, and browser
checks for all three guides passed, including the final humor wording. Captures
are under `artifacts/guide-checks/commit-2026-10-28/`.

GitHub Pages [deployment 40764109392](https://github.com/cydrysdale/now-in-production/actions/runs/40764109392)
succeeded. On 2026-10-28, the homepage, all three guide pages, both registries,
changed shared CSS/JS, both worksheets and guide three's social PNG/SVG matched
the local files byte for byte over HTTPS. The verification record is under
`artifacts/guide-checks/commit-2026-10-28/hosted-check.json`.

Guide three retains WIP status: its direct URL is accessible while its homepage
card and links in essays one/two's end sections remain absent. The author asked
about those links during the save; their current absence and the publication
status needed to add them were explained. No status change was requested.
Presentation work, `.DS_Store` changes, rollback folders and local screenshots
are excluded. Earlier local-only and no-push statements below describe the state
before the commit/push instruction.

## Session close check — 2026-10-28

All requested copy, humor and process work is complete. Final metadata/local-link
and whitespace checks passed; all three edited snapshots match their guide pages,
and the original source hashes are unchanged. No session preview or smoke-test
processes remain running. The browser validation and its limits are recorded
below. Changes are saved locally but uncommitted; guide three remains WIP.
Committing and publishing are the remaining release steps when requested.

## Process carried forward — 2026-10-28

The author asked which lessons from this session should be documented for next
time. The authoring guide now includes “Review the prose as a connected argument”
and “Review voice and humor in context.” The brief template prompts the same
checks so new lessons inherit them.

Use a dedicated prose pass and revisit it after adding figures: remove repeated
theses and explanations, check headings against their sections, preserve example
continuity, and give the conclusion one clear ending. Keep substantive research
limits. The author's voice allows conversational asides and parentheses; do not
flatten those into uniformly terse prose. For optional wording discussions,
show current/proposed passages and identify the actual change. Honor requested
one-at-a-time review, preserve exact approved wording, and use the smallest edit
that works. This introduces no extra approval stage for authorized work.

The folder-name metaphor was rejected because it confused the label with the
license. The replacement folder aside, percentage-sign parenthetical, end-of-day
deadline and backlog sentence are author-supplied wording to preserve. Specific
choices about punctuation or joke placement are not blanket style restrictions.
No new skill or automation is needed; the existing guide and brief are the places
to maintain this process.

## Humor review complete — 2026-10-28

The author reviewed five suggested humor additions one at a time, with
before/after context. Suggestion one is approved and implemented: “Otherwise,
everything checks out.” at the end of guide three's opening licensing-mismatch
paragraph. For suggestion two, the author supplied the complete “Approved Images”
paragraph after rejecting the name-expiring metaphor. Their wording is implemented
verbatim and recorded in guide three's brief. For suggestion three, the author
kept guide one's original paragraph and changed “by next Friday” to “by end of
day.” This is implemented; the proposed philosophers/Friday replacement was not
adopted. For suggestion four, the author supplied and approved the parenthetical
“(that percentage sign is doing a lot of heavy lifting)” in guide one's sentence
about “I’m 95% certain.” Their paragraph is implemented verbatim. For suggestion
five, the author supplied and approved “And this is how you successfully automate
the creation of a backlog.” This replaces the final sentence of guide two's
growing-queue paragraph. Its following qualification is unchanged.

The author subsequently approved a refinement to guide three's opening: combine
the restrictions into one sentence, use “the approval applied only to a specific
event” and “the license expired at the end of last year,” and retain the original
“There's just one problem.” and the period after “Otherwise, everything checks
out.” This wording is implemented and the snapshot is refreshed.

All five suggestions are implemented in their individually approved forms; none
remain pending. All three edited snapshots are current, and metadata/local-link
checks pass. These were small prose changes; the browser checks recorded for the
earlier copy edit were not repeated. Changes remain local and uncommitted, and
guide three's publication state remains WIP.

## Latest approved copy edit — 2026-10-28

The author requested a review of guide three's voice, tone and prose. The
[copy review](thinking-in-systems-03/copy-review-2026-10-28.md) records prioritized
findings and sample edits. Main concerns are repeated thesis statements,
abstract language, formulaic transitions and historical introductions, and an
overextended conclusion. The long-context heading also reverses its intended
question. The review recommends preserving the concrete example, substantive
research qualifications and series voice. The author then expanded the review
to the first two guides. The addendum identifies an unclear font-scenario reset
in guide one, compatible design descriptions presented as a potential conflict
in guide two, and repeated explanations and conclusions in both.

The author then approved implementation. All three guides now contain the fixes:
guide one carries the font scenario through consistently and groups calibration
research in a note; guide two demonstrates an actual layout conflict and trims
repeated delivery explanations; guide three has more concrete prose, varied
historical transitions, less repetition around figures, a corrected long-context
heading and a conclusion that returns to the photograph. All three conclusions
are shorter. See each lesson's “Approved copy edit” entry for details.

Original sources, figures, anchor IDs, worksheets and publication statuses are
unchanged. The edited snapshots and generated cards are current. This was a copy
edit using the existing source review, not a new external source audit. No commit,
push or publication was requested or performed in this pass.

## Read first

1. [Authoring workflow and series map](../docs/thinking-in-systems.md).
2. [Series manifest](../guides/thinking-in-systems.json), which controls lesson status.
3. [Guide three's editorial record](thinking-in-systems-03/brief.md), especially
   “Humor review” and “Approved copy edit”; its earlier review and visual
   corrections remain relevant to the figures and diagnostic.
4. The current HTML pages when checking concepts or quotations. `source.md` is
   the immutable supplied essay; `edited.html` is a saved review copy.

## Current state

| Work | Local state at handoff | Committed / hosted state |
| --- | --- | --- |
| Guide 01 | Audit corrections to citations, history, and clock example. Snapshot current; checks pass. | Released in `998bba0`; hosted verification passed 2026-10-29. |
| Guide 02 | “Assumptions” restored and each experimental condition repeated. Snapshot and worksheet-export checks pass. | Released in `998bba0`; hosted verification passed 2026-10-29. |
| Guide 03 | Li/Du research clarifications. Seven figures and precision/recall explanation preserved. Snapshot current; checks pass. | Released in `998bba0`; hosted verification passed 2026-10-29. |
| Guide 04 | Figure 03 distinguishes discovered failures from the unknown total. Prose and other figures preserved. Snapshot current; checks pass. | Released in `998bba0`; hosted verification passed 2026-10-29. |
| Guide 05 | Publication requested 2026-10-30; date, manifest, homepage, navigation, and snapshots prepared. Reviewed prose and figures unchanged. | Release checks pass; hosted verification pending. |

Previous site-content commit: `998bba0`, followed by verification record `04e934f`.
Essay-five publication is in progress. Use Git status and log for the current tip.
All earlier essays retain their first-publication dates.

## Editorial decisions to carry forward

- Keep the presentation educational and restrained. Add figures for concepts that
  benefit from them, without matching another lesson's figure count.
- Paragraphs develop a thought, usually in two to four sentences. Keep deliberate
  short turns; do not split every sentence or enforce a word quota.
- Preserve em dashes and the author's supplied wording and humor. Use generalized
  assistant names. Avoid automatic series-wide rewriting of hedges or punctuation.
- Review voice and argument after figures are inserted. Show optional wording
  changes in context; keep exact approved asides and distinguish those decisions
  from general style guidance. Use the updated authoring guide and brief prompts.
- Link changes in diagnostic labels to their earlier meaning. Guide two's brief
  defines the problem and boundary; it does not replace guide one's diagnostic.
  Guide three regroups that diagnostic. The authoring guide has exact anchors.
- Keep relationship type, authority, relevance and truth distinct. Facets and
  linked records can coexist. A missing retrieval result does not prove absence.
  Precision/recall for one query use passage relevance judgments; broader claims
  require representative evaluation.
- Preserve research limitations and record source access limits. A plausible
  caption or a working URL alone is not a source review.

## Completed checks and artifacts

The approved copy edit passed metadata/local-link checks and browser smoke checks
for all three guides, including guide two's worksheet export. Changed prose was
visually reviewed on desktop in light mode and mobile in dark mode. Comparison
with the before copies confirms unchanged source hashes, anchor IDs, figure
markup and guide-two worksheet markup. Backups, word counts and captures are
under `artifacts/guide-checks/copy-edit-2026-10-28/`. Browser checks cover basic
print visibility, not a full pagination audit. Temporary browsers and local
servers were closed.

Guide three passed metadata/local-link checks, browser coverage at 320–1440px,
theme/TOC/Home navigation, disclosures, no-JavaScript access and homepage WIP
filtering/fallbacks. Its source hash is unchanged. Final figure screenshots are
under ignored `artifacts/guide-checks/essay-03/visual-fixes/`.

The two published guides passed after shared CSS/JS changes. Both guide-two
worksheet downloads contain the continuity explanation and preserve all four
answers. Guide three's Markdown worksheet downloads over HTTP without JavaScript.
Basic print visibility was checked; a full pagination audit was not performed.
Temporary browser sessions and preview servers were closed.

The authoring tool now loads the structured brief template when creating a lesson.
All seven isolated workflow tests passed after that change, as did the existing
guide checks. The process/template changes did not alter rendered pages.

Unrelated work includes OS `.DS_Store` changes, `presentations/`, and local
rollback folders under lessons 01–04. Leave these alone. If preparing
a release, stage the intended files explicitly; do not add every untracked file.

## Next session

Complete and verify the authorized essay-five publication if not recorded above.
The author has approved release of the current guide; no additional publication
permission is required. Preserve its original source and reviewed body, including
the latest Figure 02 layout. Release evidence is under
`artifacts/guide-checks/publish-05-2026-10-30/`. Keep rollback copies and unrelated
local work out of the release, and stop temporary browser/preview processes.
