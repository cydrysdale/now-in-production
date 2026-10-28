# Thinking in Systems: handoff for guide four

Updated 2026-10-28. Verify this note against current files, Git status and later
user instructions before acting.

## Repository save — 2026-10-28

The author subsequently requested committing and pushing the completed session
work. Content commit `7398fd8` is on `origin/main`. It contains the revised first
two guides, guide three's WIP draft and assets, and their editorial records.
The authoring workflow, template and verified handoff are recorded in the
follow-up commit containing this entry.
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
| Guide 01 | Published; approved copy/humor fixes complete, snapshot current, checks pass. | Content commit `7398fd8` pushed; hosted content verified 2026-10-28. |
| Guide 02 | Published; approved copy/humor fixes and diagnostic connections complete, snapshot current, checks pass. | Content commit `7398fd8` pushed; hosted guide and worksheet assets verified 2026-10-28. |
| Guide 03 | WIP with seven figures, evidence worksheet, social art and approved copy/humor fixes. Snapshot current; checks pass. | Content commit `7398fd8` pushed; direct URL and assets verified 2026-10-28. Absent from public series links and homepage cards. |
| Guides 04–05 | Planned, without titles, URLs or source essays. | No pages exist yet. |

Latest content commit: `7398fd8` on `main`; the workflow/handoff commit follows it.
Use Git status and log for the current tip. The author authorized committing and
pushing this session's work; no promotion of guide three to published status was
requested. Honor any later publication instruction without asking for it again.

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
rollback folders under the first three lessons. Leave these alone. If preparing
a release, stage the intended files explicitly; do not add every untracked file.

## Next session

Use lesson slot 04 when the author supplies its essay. Do not create the notes
folder beforehand: `maintain.py new` refuses to overwrite existing notes.
The command now generates a structured review brief from
`templates/thinking-in-systems/brief.md` as well as the page shell.

Start with the essay's contribution to the series, a prose/source pass and a
small visual plan. Document how any new framework relates to the existing ones
before building figures. Review figure meaning and copy before layout polish,
then revisit the prose for repetition around the new figures. Keep worked
examples and worksheet exports consistent. The existing copy and humor reviews
are complete; begin from their approved wording rather than reopening them.

If guide three is authorized for release, set its manifest state to `published`,
sync, refresh affected snapshots and run the appropriate checks. Review the
complete intended diff, commit and push, then verify hosting and public navigation
before reporting it live. Guide four's drafting can proceed independently of
that release decision.
