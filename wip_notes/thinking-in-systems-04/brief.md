# Essay 04: The Thermometer Is in the Wrong Room

- Status: published 2026-10-29; hosted content and navigation verified.
- Source: [source.md](source.md), preserved verbatim on 2026-10-28.
- Edited page: [the-thermometer-is-in-the-wrong-room.html](../../guides/the-thermometer-is-in-the-wrong-room.html).
- Workflow: [authoring guide](../../docs/thinking-in-systems.md).
- Source SHA-256: `cf8f1d57457f9b2955d52ab4b8be35fe89228ca41c3c23fd8295fc58fc5e030e`.

## Editorial brief

The audience is people designing, managing, or evaluating AI-assisted creative
and organizational workflows. The central question is how a workflow remains
dependable when component behavior and operating conditions vary. The practical
takeaway is to define the requirement, observe the relevant outcome, compare it
with that requirement, and provide an effective response with an accountable owner.

The author supplied the essay and noted that it probably needed personalization.
The draft preserves the title, subtitle, main sequence, historical connections,
fictional opening, and final thermometer callback. The announced editorial
approach was to follow the established conversational voice, group related
sentences, trim repeated explanations, and retain technical qualifications.
Three navigation groups organize the original arguments:

1. Feedback and reliability: requirements, cybernetics, and response capacity.
2. Seeing the failure: measurement, observability, action, and evaluator limits.
3. Requirements and responsibility: acceptable risk, lifecycle checks, closing
   the loop, and the choice of objective.

No first-person work history, personal anecdote, or client incident was invented.
Humor comes from the version count, workplace metrics, and the gap between
component success and outcome. The fictional designation remains explicit.
Paragraphs develop a thought, with short pauses retained for deliberate turns.

The initial draft had approximately 4,230 words including figure copy and
references, compared with 4,981 whitespace-separated words in the source.
Trimming removes repeated transitions, the second recap of safeguards, and
multiple versions of the conclusion. The final section develops responsibility
for the objective and ends with the dashboard and thermometer once.

The reusable takeaway is the worked control loop and five prose questions after
it. A separate worksheet or new JavaScript widget was unnecessary.

## Connection to earlier lessons

| Earlier concept and stable link | What this lesson retains, combines or adds | Where the connection appears |
| --- | --- | --- |
| [01: failure investigation](../../guides/when-ai-gets-the-right-answer.html#diagnostic-title) | Retains source → authority/scope → retrieval/context → interpretation → answer/verification; extends investigation beyond the approved answer. | Observability section, in a note after “The failure lived between the steps.” |
| [02: system boundaries](../../guides/a-better-prompt-wont-fix-the-wrong-problem.html#system-boundaries) | Includes transformation and publication, so an approved draft is not treated as the end result. | Same continuity paragraph; opening and Fig. 01. |
| [03: information diagnostic](../../guides/all-the-information-none-of-the-context.html#context-fig-4) | Retains source, organization, retrieval, and application; adds downstream investigation without dropping earlier checks. | Same paragraph. |

Define → Observe → Compare → Respond is a regulatory cycle, not a replacement
list of diagnostic stages. The page describes it as a practical synthesis,
not a theorem or a formal consequence of Ashby's law.

## Source review

Checked 2026-10-28. Scope is stated below; no claim of reading every book or
reproducing experimental results is intended.

| Claim or definition | Primary source and date | What was checked, including access limits | Correction or qualification |
| --- | --- | --- | --- |
| Wiener and cybernetics | [MIT Press publisher record](https://mitpress.mit.edu/9780262537841/cybernetics-or-control-and-communication-in-the-animal-and-the-machine/), first publication 1948 | Publisher description and edition metadata; not full book text. | Link describes a 2019 reissue of the 1961 second edition; reference now says so. |
| Requisite Variety | [Ashby book scan](https://ashby.info/Ashby-Introduction-to-Cybernetics.pdf), 1956 | Full text available; title/copyright pages and Chapter 11 §§11/5–11/8 checked, including assumptions and bounds. | Scan is the 1957 second impression. Assistant example is an engineering interpretation. Broken heater illustrates inability to act, not a proof of the law. More tools do not establish regulation. |
| Formal observability | [Kálmán NTIS record](https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/AD724842.xhtml), 1960; [TU Wien notes](https://www.acin.tuwien.ac.at/fileadmin/cds/lehre/multivar/multivar_notes_2.pdf), undated | NTIS metadata/author abstract; opening definition and reconstruction conditions in the full PDF notes. Caltech links timed out and were not used. | Includes known inputs, model dynamics, and measurements over time. Added support for previously uncited historical attribution. |
| Software observability | [OpenTelemetry primer](https://opentelemetry.io/docs/concepts/observability-primer/), current documentation | Definition, logs, spans, and traces. | Logs support diagnosis; they do not guarantee reconstruction or prove formal observability. |
| Deployed AI monitoring | [NIST AI 800-4](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-4.pdf), March 2026 | Full report available; publication pages, abstract, §3.1.1, privacy/security and resource discussions checked. | Workshops and literature review map challenges, not a validated universal standard. Main link uses accessible NIST PDF; DOI retained in references. |
| Evaluator position bias | [Shi et al.](https://aclanthology.org/2025.ijcnlp-long.18/), December 2025; [full PDF](https://aclanthology.org/2025.ijcnlp-long.18.pdf) | Author list, date, title, abstract, task setup, and limitations. | Names MTBench/DevBench and pairwise/list-wise comparisons. Effects vary by model/task. No marketing-review failure rate or evaluator independence inferred. |
| Reliability costs and targets | Google SRE, [Embracing Risk](https://sre.google/sre-book/embracing-risk/) and [Service Level Objectives](https://sre.google/sre-book/service-level-objectives/) | Full chapter pages, costs and SLI/SLO definitions. | Engineering application, not an instruction to accept an error budget for every failure category. |
| Risk measurements | [NIST AI RMF Measure Playbook](https://airc.nist.gov/airmf-resources/playbook/measure/), current page | Measure 1.1 and introductory guidance on purpose, metrics, and unmeasurable risks. | Further reading. Page notes a future update after framework revision; no guarantee of safety implied. |
| Sampling adequacy | [NIST statistical handbook](https://www.itl.nist.gov/div898/handbook/ppc/section3/ppc333.htm) | Full page: target parameter, variability, precision, sample size, trade-offs. | Keeps 40/200 = 20% and 40/1,600 = 2.5%; sampling fraction alone does not establish adequacy. No confidence interval inferred. |

## Factual and interpretive clarifications

- **Variable output versus predictability:** the regulated heater varies output
  but may be deterministic. Its success depends on sufficient capacity and timely
  action. Feedback does not inherently make it less precise or predictable.
- **Sample versus outcome:** 38/40 is a sample pass rate before layout, not
  final-asset accuracy, a confidence level, or proof of representativeness.
  The two failed sample checks are not known to be the two published errors.
- **Known failures:** two discovered failures establish at least two. No 1%
  total production-failure estimate is inferred from 2/200.
- **Text versus rendered output:** comparison identifies changed wording when
  final text can be obtained faithfully. Matching underlying text doesn't prove
  qualifications aren't clipped, hidden, or unreadable. Inspect the rendered asset.
- **Monitoring and response:** a dashboard by itself does not prevent errors;
  evidence can support regulation when someone has authority and capacity to act.
- **Risk:** a true 1% rate over 10,000 comparable operations means 100 failures
  in expectation, not exactly 100 or an observation from this scenario.
- **Learning:** restoring an output, redesigning a workflow, and retraining a
  model remain distinct. No automatic model-learning claim added.

## Visual and example plan

| Figure or exercise | What the reader should understand or do | Evidence, assumptions and relationships to preserve | Text equivalent and placement |
| --- | --- | --- | --- |
| Fig. 01: `measurement-gap-title` | Locate the check relative to the error-producing transformation. | Fictional sample 38/40; two known published failures; unknown final count. Arrows show process sequence. | Selectable HTML stages and metric labels in Observability; revised caption explains sample selection, outcome accuracy, and the unknown overlap between failed drafts and corrected assets. |
| Fig. 02: `claim-change-title` | Separate changed-word detection from meaning and presentation review. | Invented first-order 20% offer requires $100 spend; shortening removes the condition. | Two text panels and native disclosure with hold/review/recheck. Caption gives limits even when closed. |
| Fig. 03: `reliability-loop-title` | Connect requirements, evidence, comparison, response, and rechecking. | Proposed intervention, not tested performance; includes authority and review capacity. | Ordered HTML cards and visible return instruction in Closing the loop. |
| Social image | Recognize the essay and measurement-location metaphor. | Decorative schematic, no empirical claim. | 1200 × 630 PNG with SVG source; established series colors and typography. |

Recurring facts: approved briefs and verified product information; 200 assets
in the first month; every draft receives editorial approval; additional QA on
40 yields 38 passes; planned scale is 1,600 assets; two published claims lose
qualifications during shortening; no final comparison. QA failure disposition
and overlap with published failures are unspecified. Proposed controls describe
a redesign, not features of the original process.

## Voice changes in context

These are implemented draft choices under the personalization request, not
separately approved exact final wording. No one-at-a-time review was requested
in this session.

1. **Replace an abstract outcome with the room's concrete result.**
   - Original: “Its individual actions are less predictable, but its overall
     performance is more dependable under changing conditions. The first machine
     might be perfectly predictable and consistently fail to achieve its purpose.”
   - Draft: after explaining deterministic thermostat rules, “The first machine,
     meanwhile, can be perfectly consistent and consistently fail to keep anyone warm.”
   - Effect: dry emphasis rooted in the example; corrects the predictability claim.

2. **Replace the standalone answer with a workplace aside.**
   - Original: “Eventually, the document has been rewritten six times. Is it six
     revisions better? Not necessarily. The process has produced activity, but
     activity isn't evidence of improvement.”
   - Draft: “Eventually, the document has been rewritten six times. Is it six
     revisions better? It does at least have a higher version number.” The next
     paragraph explains standards and stopping conditions.
   - Effect: makes activity-versus-improvement concrete; no empirical claim added.

3. **Replace a general statement with a familiar measurement error.**
   - Original: “Whether those failures matter depends on what they are. An awkwardly
     phrased headline and an inaccurate legal qualification should not carry the
     same consequences.”
   - Draft: “And what are those failures? An awkward headline and an inaccurate
     legal qualification shouldn't count as equivalent problems just because each
     occupies one row in a spreadsheet.”
   - Effect: connects voice to the essay's subject—what a measurement counts.

4. **Add an operational observation after the control proposal.**
   - Original context: test controls while keeping review workload and delays manageable.
   - Addition: “That last part matters. A check that sends every asset to an
     already-overloaded reviewer has created a queue. The team still needs someone
     who can resolve it.”
   - Effect: connects authority with capacity, consistent with essay two's
     bottleneck example. Does not assert this fictional team already has the problem.

The original opening's “All reasonable suggestions, assuming the AI was
responsible” and the ending's thermometer line remain. Historical introductions
vary their setup. Prose was reread after figures: the lifecycle list replaces
two repeated runs through before/during/after; the loop figure replaces a second
full recap of controls. Technical qualifications remain attached to their claims.

## Author-supplied review — 2026-10-28

The author provided an eleven-point review and invited pushback. The feedback
was applied as a local revision; the pasted offer of one-at-a-time approval was
not a request to start a new approval process. Lesson-plan v2.1 was not present
in the repository. Alignment uses the excerpts supplied in the review, not an
independent reading of that plan. Personal lesson details were not added to the
public essay, and no message or release was requested.

| Item | Decision and resulting change |
| --- | --- |
| 1. Name | Corrected the body to Rudolf Kálmán, matching the reference. The immutable source retains its original spelling. |
| 2. Subject | Changed “but also creates” to “but it also creates” for clarity. |
| 3. Predictability | Replaced the rebuttal-like wording with fixed rules versus disturbance-dependent timing: switching depends on when the window opens and how quickly the room cools. Preserved the distinction between variability and randomness. |
| 4. Dashboard | Kept the 95% snapshot and added “Nothing on it reflected the two corrections.” Both facts can hold together. |
| 5. Scaling | Added a limited pilot with representative assets and deliberately introduced missing qualifications, independent final-layout inspection, agreed limits, and staged volume increases. Passing planted cases alone would not establish eightfold readiness. |
| 6. Sensor location | Added the warm-hallway example. Did not use “only regulates the room its sensor is in”: the heater can affect several rooms, while the feedback reflects the sensor's location. |
| 7. Qualifications | Shortened the first numbers paragraphs; kept the unknown final failure count in the main text. Moved sample-selection and overlap limitations into Fig. 01's caption. Removed the unexplained confidence-level aside. No blanket removal of research qualifications based on a word count. |
| 8. Series continuity | Moved the links after the example's payoff, into a visually secondary note ordered 1, 2, 3, with a short explanation of each essay. All diagnostic stages and stable links retained. |
| 9. Retention paragraph | Cut the records/access/retention tangent. The earlier evidence discussion and NIST's monitoring limitations remain. |
| 10. Ending | Removed “Reliability isn't the absence of uncertainty…” so the ending is the practical question and the thermometer callback. |
| 11. Wording | Removed “Naturally,” “Unfortunately,” and “Of course”; rephrased the “Conversely” sentence; changed “an external stakeholder” to “a customer.” These are local edits, not a permanent ban on these words. |

The version-number joke, spreadsheet sentence, $100-minimum offer, distinction
between detecting and judging a change, and queue paragraph remain unchanged.
The revised article contains 4,223 whitespace-separated words including figures
and references; new clarification is balanced by the cuts.

### Alignment passages from the first review

The thermostat paragraph now ends:

> Its rules can be fixed, but the timing of its response depends on what happens
> in the room: we can't say when it will switch on without knowing when the
> window opens and how quickly the room cools.

The new sensor-location passage reads:

> But it responds to the temperature where its sensor is. Put that sensor in a
> warm hallway, and the thermostat can switch the heater off while the room we
> care about is still cold.

The pilot paragraph replaces the general sentence about testing controls:

> Before increasing production eightfold, the team should run a limited pilot
> with representative assets and deliberately introduced missing qualifications,
> testing whether the controls catch them and independently inspecting the final
> layouts. Meeting agreed limits for missed failures, false alarms, and review
> delays would justify testing higher volumes in stages, with those limits checked
> again as the workload grows.

This is a proposed engineering procedure for the fictional team, not a claim
that a pilot has occurred or demonstrated readiness. The preceding questions
still establish the requirement and responsibility; the following queue paragraph
explains why review delays matter.

### Pilot prose follow-up — 2026-10-28

The author confirmed the eleven-point revision and requested two local fixes:
shorter pilot sentences and an explicit bridge to the queue paragraph. Replaced
the dense pilot with an explanatory setup and the author's two questions, while
retaining independent checking, agreed limits, and staged increases. Also removed
the repeated sample-selection phrase from the main paragraph; Fig. 01 retains it.

Current pilot and queue passages:

> A limited pilot would give the team evidence to consider before scaling
> eightfold. It could use representative assets, with missing qualifications
> planted on purpose. Do the controls catch them? Does an independent check of
> the final layouts agree? If missed failures, false alarms, and review delays
> stay within agreed limits, the team can test higher volumes. It can raise
> volume in stages and recheck those limits at each step.
>
> Review delays matter here. A check that sends every asset to an
> already-overloaded reviewer has created a queue. The team still needs someone
> who can resolve it.

Used “Review delays matter here” rather than “deserve the closest watch,” which
would imply a priority over missed failures that the example does not establish.
This supersedes the first review's pilot wording above. No figures, references,
source text, or publication status changed. The edited snapshot, metadata/link
checks, and whitespace checks were refreshed; the browser suite and source audit
were not repeated for this prose-only adjustment.

### Connected prose pass — 2026-10-28

The author requested another full copy pass. Read the complete article with its
figures and notes, then revised the remaining weak transitions, abstract phrases,
and repeated explanations. This was an authorized edit, not a new approval round.

- Made the opening diagnosis concrete: errors were introduced after review and
  weren't caught before publication. Removed the announcement of a “much larger
  question,” letting the question itself lead into the next section.
- Changed two headings to match what their sections actually explain: “What
  feedback changes” and “Does another AI solve the problem?” Stable IDs and
  short TOC labels are unchanged.
- Named the thermostat explicitly in the negative-feedback definition so the
  explanation doesn't depend on an ambiguous “This” after the misplaced-sensor
  example. The broken-heater paragraph now distinguishes measuring a cold room
  from having the ability to warm it, without implying the sensor diagnoses the
  heater's fault.
- Replaced abstract phrases about responses and diagnosis with direct statements
  about what the team can compare and investigate. Retained the limits on what
  records can establish.
- Moved the NIST discussion ahead of the corrective-action paragraph. The section
  now returns from monitoring limitations to the team's ability to stop publication
  and ends on its original “observe failure” line. The report's claims and limits
  are unchanged.
- Explained pairwise/list-wise comparisons as pairs and lists of responses, while
  keeping both benchmarks, model/task variation, and the limit on transferring
  results to this marketing example.
- Trimmed prose that repeated Fig. 02's detection/meaning distinction and its
  text-versus-rendering limit. Those distinctions remain in the preceding prose,
  unchanged figure, and concrete examples after it. Converted the short-copy
  commands into an explanation of the team's options.
- Tightened the reliability-target and lifecycle passages without dropping
  uncertainty about subjective standards or unmeasurable risks. Combined the
  repeated introduction to Define → Observe → Compare → Respond, and removed
  the repeated prompt/retrieval/evaluator recap before the pilot.

The reviewed predictability paragraph, warm-hallway passage, pilot and queue
paragraphs, both jokes, all three figures, references, and entire final section
are unchanged. A preservation comparison also confirms unchanged source, assets,
IDs, earlier essays, homepage, and registry statuses. The article went from 4,227
to 4,112 words using the same HTML text-count method; concision was a consequence
of the edits, not a target. Older counts above used slightly different extraction.

Metadata/link, snapshot, whitespace, and lesson-four browser checks passed.
Desktop/light and mobile/dark captures of the changed prose were visually
reviewed. Browser coverage includes 320–1440px, themes, navigation, native
disclosures, no JavaScript, homepage fallbacks, and basic print visibility;
it is not a full print-pagination audit. Shared assets were unchanged, so the
earlier lessons were not rerun. No new external source audit was needed for
these edits. Evidence, before-copy, diff, and preservation hashes are in
`artifacts/guide-checks/essay-04/copy-pass-2026-10-28/`.

### Third review follow-up — 2026-10-28

The author asked for all suggestions from the third review, including the
optional ones. Prose-only edits; no figures, references, IDs, or status changed.

- Pilot: merged the repeated volume sentences into "the team can raise volume in
  stages, rechecking those limits at each step."
- Repeated "too" construction: "The range of available responses matters too"
  became "A second limit is the range of available responses"; "The reviewer
  needs testing too" became "The reviewer has to be tested like any other
  component." "The finished layout needs checking too" is unchanged.
- Terminology in "Does another AI solve the problem?": "evaluator" and "critic"
  became "reviewer." The six-revisions critic example and "competing evaluators"
  (several evaluators) are unchanged.

Snapshot refreshed and `maintain.py check` passed. The browser suite was not rerun
for these sentence-level edits.

### Visuals pass — 2026-10-28

The author approved adding the figures the third review judged would strengthen
the essay. Chapter 01 had no figures; both additions sit there. Rollback copies,
checksums and restore steps: `rollback-2026-10-28-pre-visuals/README.md`.

| Figure | What the reader should understand | Evidence, assumptions and relationships | Text equivalent and placement |
| --- | --- | --- | --- |
| Fig. 01: `sensor-placement-title` | Predictable vs. reliable, and that a regulator responds to what its sensor measures. | Illustrative temperatures (70°F target; room 64°F; hallway 71°F). Thermostats two and three share rules; only sensor location differs. Caption links to Fig. 03 as the same measurement gap. | Three HTML panels with readouts; decorative inline SVG floor plans (`aria-hidden`). After the warm-hallway paragraph in "What feedback changes." |
| Fig. 02: `response-match-title` | One behavior applied to four conditions vs. a response suited to each. | Rows restate the prose's four conditions and responses. Caption repeats the research note's limit: an engineering illustration, not Ashby's formula; responses need information and a receiver. Plain table, not a diagram, to avoid implying a count. | Semantic table (stacks on mobile with labels). After "Those are different responses to meaningfully different conditions." |

Existing figures renumbered in reading order: 01 → 03, 02 → 04, 03 → 05. IDs
unchanged; no prose referred to figure numbers. The Visual and example plan table
above uses the earlier numbering. New styles are one marked block at the end of
`assets/css/thermometer.css`; shared CSS/JS unchanged. Figures wrapped in
`<!-- visuals-2026-10-28: thermostat|responses -->` comments for partial rollback.

Checks: `maintain.py check` passed; snapshot refreshed. Rendered with Playwright
Chromium (cloud session, local copy of the page and assets) at 390, 900 and 1280px,
light and dark: no page errors (404s were unstaged favicon/image requests only).
Table column widths adjusted after the first render. The repo's own browser suite
(`smoke.mjs`) was not run; run it before release. Screenshots:
`artifacts/guide-checks/essay-04/visuals-2026-10-28/`.

### Visual review fixes — 2026-10-28

The author requested applying the findings in
[`visual-review-2026-10-28.md`](visual-review-2026-10-28.md), including its caption
suggestions. All are now resolved:

- Reset the response table's desktop column width in its mobile layout.
- Moved the floor-plan labels into HTML overlays, keeping room names at 13px and
  readings at 14px as the SVGs scale. Slightly widened the hallway for label
  clearance; retained accessible readouts and the diagram's meaning.
- Replaced the repeated condition/response lists before Fig. 02 with the proposed
  short introduction. Applied both proposed caption corrections verbatim.

The snapshot is current. Metadata/local-link checks and the lesson-four browser
suite passed. Additional fresh-page measurements at ten widths from 320–1440px
confirm readable labels within their rooms, full-width mobile answer cells, and
no horizontal overflow. Desktop/mobile and light/dark screenshots were inspected,
including the revised prose with Fig. 02. Basic print visibility passed; full
pagination and all resize transitions were not audited. The original source,
references, links, IDs, shared assets, registries, homepage and social art are
unchanged. Evidence and before copies are under
`artifacts/guide-checks/essay-04/visual-fixes-2026-10-28/`. No release requested
or performed; essay four remains local, uncommitted, and WIP.

## Validation

- `maintain.py sync`: generated content current; no new public cards/incoming links.
- `maintain.py check`: metadata, keywords, links/anchors, image, source copies,
  generated cards/navigation passed.
- Original captured essay and preserved source are byte-identical; hash above.
- `maintain.py snapshot --number 4`: saved edited copy; not an approval record.
- Lesson-four browser suite passed using installed Google Chrome. Matching
  Playwright-managed Chromium was unavailable; no dependency changes made.
- Widths: 320, 390, 601, 900, 1101, 1440. Checked theme persistence, Home/contents,
  reading time, keyboard disclosure, no-JavaScript use, console/page errors,
  and basic print visibility.
- Homepage passed HTTP, direct-file, no-JavaScript, WIP filtering, registry failure,
  and individual-guide failure fallbacks.
- Figures/social art inspected visually on desktop/mobile and light/dark variants.
  Figure body labels use 13–15px text; 11px is confined to eyebrow/step metadata.
- Screenshots: `artifacts/guide-checks/essay-04/` (ignored).
- Print scope: basic visibility, not full pagination. No worksheet/export.
- Shared CSS/JS and existing essays unchanged; their browser suite was not rerun.

### Review revision checks

- Metadata/local-link checks, synchronization, and whitespace checks passed;
  the edited snapshot is refreshed after the final prose changes.
- Repeated the lesson-four browser suite, including homepage fallbacks; it passed
  at 320–1440px with themes, navigation, keyboard/no-JavaScript disclosures,
  and basic print visibility. No console or page errors.
- Review artifacts: `artifacts/guide-checks/essay-04/review-2026-10-28/`, including
  the pre-review HTML, readable diff, preservation hashes, and screenshots.
- Source, shared assets, lesson-specific CSS, social art, homepage, registries,
  and essays one–three match their pre-review hashes. Figure 02's content and
  all existing anchor IDs remain unchanged.
- Existing reference audit above was retained; this was not a new full external
  source review. No statistical or research findings changed.
- Visually reviewed the revised Fig. 01 caption, series note, pilot paragraph,
  and ending in desktop/light and mobile/dark captures. The one-off prose
  capture initially targeted heading IDs instead of their containing sections;
  corrected the capture selectors and reran it successfully. No page fix was needed.
- No new automated tests for this reversible content edit.

## Publication and handoff

- Author explicitly requested publication on 2026-10-29 while reviewing essay five.
- Local release state: `published`; publication date and updated date 2026-10-29.
  Homepage card and series links are generated; WIP robots metadata is removed.
- The reviewed prose, five figures, sources, styles, scripts, and social art are
  preserved. This release changes publication metadata and navigation only.
- Release prepared in an isolated checkout so essay five and unrelated local
  prose changes are excluded. Essay five remains under separate local review.
- Release checks and hosted verification are recorded below as completed.

### Publication checks — 2026-10-29

Metadata/local-link checks, synchronization, snapshot agreement, and whitespace
checks passed. All four published lessons passed the browser suite at 320–1440px,
including themes, navigation, disclosures, no-JavaScript use, homepage fallbacks,
and lesson two's worksheet export. There were no unexpected browser errors.
The new homepage card, essay three's Next link, and essay four's series footer
were visually inspected. Print coverage is basic visibility only. Original
article bodies and assets are unchanged. Captures are under
`artifacts/guide-checks/publish-04-2026-10-29/` in the main workspace.

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

## Audit follow-up — 2026-10-29

The author's new audit request authorizes one narrow Figure 03 correction:
“Qualifications are removed from some claims.” The two discovered failures
remain distinguished from the unknown total. The prose, source, publication
date, and other figures are unchanged. Snapshot and checks are current. This
fix is included in the author-requested audit release; the earlier hosted
verification describes the previous version. See the [audit record](../thinking-in-systems-audit-2026-10-29.md).
