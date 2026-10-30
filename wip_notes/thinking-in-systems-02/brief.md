# Essay 02: A Better Prompt Won't Fix the Wrong Problem

- Status: approved for release on 2026-10-27; published in the series registry.
- Source: source.md, preserved verbatim on 2026-10-27.
- Edited page: ../../guides/a-better-prompt-wont-fix-the-wrong-problem.html
- `edited.html` saves the current revised guide, including its figures and worksheet. It is an editorial snapshot, not a record of publication approval.

## Flow fixes — 2026-10-30

The author approved the [flow-fix plan](../thinking-in-systems-flow-fixes-2026-10-30.md) on 2026-10-30 without striking anything, so all proposed wording and new humor are applied as written, including optional lines. This approval does not cover publication: the change is local and uncommitted, and the hosted page still shows the earlier text. `source.md` is unchanged.

Fixes 2.1–2.9. The prompt sidebar stays, and a new paragraph resolves its case before the conclusion. The “When improving the parts” section moved before “Good decomposition,” with IDs unchanged and the backlog joke and queue conditions moved verbatim. Author-approved changes to original wording: the Simon paragraphs (2.2), the third framing (2.4), and “frontloading” at its first use (2.6). The application of near-decomposability to the creative team is the essay's, not Simon's. `guide:updated` is 2026-10-30; the publication date is preserved. Worksheets are unchanged.

Validation: `maintain.py check` passes and all five lessons plus the homepage pass `smoke.mjs`, run with installed Chrome because the bundled Playwright Chromium was out of date. Every removed word was compared against the plan, and protected wording and audit corrections were confirmed present. Ten of twenty captures of changed passages (1280px light, 390px dark) were inspected. Evidence and before copies: `artifacts/guide-checks/flow-fixes-2026-10-30/`.

## Repository save — 2026-10-28

The author requested committing and pushing the completed session work. Content
commit `7398fd8` was pushed to `origin/main`, including this guide's approved copy,
humor and worksheet-continuity changes. Final metadata/local-link checks, all
seven authoring-tool tests, and browser smoke checks for all three guides passed.
The browser suite includes the final wording and worksheet export. GitHub Pages
deployment succeeded. On 2026-10-28, the hosted guide, blank worksheet, worksheet
export script, homepage and registries matched the local files byte for byte.
The deployed guide still links to essay one; essay three remains WIP and is
excluded from its public series navigation. Earlier local-only notes below
describe the state before this repository save.

## Humor review — 2026-10-28

The author supplied and approved the final sentence of the growing-queue
paragraph: “And this is how you successfully automate the creation of a backlog.”
Their complete paragraph is implemented verbatim. The following qualification
about demand, review capacity and work removed elsewhere remains intact.
The edited snapshot is current. All five individually reviewed humor suggestions
are now resolved and implemented in their approved forms across the series.

## Approved copy edit — 2026-10-28

The author approved implementing the [series copy review](../thinking-in-systems-03/copy-review-2026-10-28.md).
The agent example now contains incompatible requirements: all six product
features must appear on the opening panel, while the proposed layout allows
only a headline and image. The following paragraph identifies the need to
communicate and resolve that decision.

Reduced repeated drafting-versus-delivery explanations. The queue section now
focuses on additional drafts entering a review stage with fixed capacity,
retains the conditions under which no queue growth follows, and uses a short
practical definition of emergence. Trimmed repeated architecture takeaways and
the worked application. The conclusion retains the personal admission, the
better-prompt callback and its qualification, and ends with the map metaphor.
The author's exact brief-quality aside, other humor, figures, worksheet and
series continuity are preserved.

Validation: metadata/local links and browser smoke checks passed for all three
guides, including this guide's four-answer worksheet export. Changed prose was
visually reviewed on desktop in light mode and mobile in dark mode. Source
hashes, anchor IDs, figure markup and worksheet markup match the before copies.
Backups and captures are under `artifacts/guide-checks/copy-edit-2026-10-28/`.
The edited snapshot is current. These copy edits and the earlier worksheet
continuity changes remain local and uncommitted; no publication action was taken.

## Revision following the author’s review

Implemented on 2026-10-27:

- Added an early internal AI assistant case: repeated prompt rewrites cannot resolve conflicting source policies without a decision about scope and precedence. Linked the passage directly to essay one’s “The problem might not be the model” section.
- Built the drafting/delivery timeline and all four representations of the workflow: sequence, responsibility, dependency, and flow. Both are accessible HTML/CSS; neither depends on JavaScript. Numerical and organizational assumptions are explicit in the captions.
- Turned the four framing questions into a writable problem brief. Readers can download their completed answers as Markdown, download a blank worksheet without JavaScript, and inspect a worked internal AI assistant example. An early shortcut and contents label make the brief easy to find.
- Credited Goldratt **and Jeff Cox**, with a 1984 publication reference. Described the creative-production scenario as our application of the bottleneck idea, not a case lifted from *The Goal* or a claim that the book originated every related principle.
- Added Meadows’ *Thinking in Systems* (2008, edited by Diana Wright) and *Leverage Points* (1999) to Further reading.
- Replaced the Korzybski event link with the Institute of General Semantics’ book page. Used the fuller quotation supplied in the review and explained why preservation of relevant relationships matters.
- Converted lists of “perhaps” alternatives into actual lists, removed the flagged stock transitions and “genuine/genuinely,” and preserved the intake-prototype passage and “The territory hasn’t changed. We’ve changed the map.”
- Changed the AI-capability heading to “AI makes it easier to build before we understand.” Clarified the transition from investigating a process to designing its components.
- Added keywords metadata and dedicated SVG/PNG Open Graph art.

The author subsequently said to ignore the em-dash notes. No punctuation cleanup was made on that basis, and essay one’s content remains unchanged.

## Editorial review

Audience: designers, creative operations teams, and people commissioning or building AI-assisted workflows.

Thesis: the way a problem is represented and bounded determines which interventions seem useful; judge an intervention by the outcome of the relevant system, not merely the speed of one component.

Connection to essay one: move from asking what justifies trusting an answer to asking what justifies the problem and intervention we choose. The recurring creative-team example makes this a practical continuation without repeating the first essay’s epistemology lesson.

### Proposed reading structure

1. **Framing the problem:** abstraction, maps, and Schön’s problem-setting distinction.
2. **Understanding the system:** alternative decompositions, system boundaries, module responsibilities, and local versus overall improvement.
3. **Choosing the intervention:** learning through experiments, appropriate AI architecture, outcome measures, and deciding what to build.

The reading draft applies these group labels to the contents and chapter markers while preserving the original section headings and order.

### Editorial decisions

The assistant example uses a general description rather than a product name: an AI assistant that answers questions about internal standards. Subsequent references use “the assistant.”

- Keep the practical creative-team example as the main thread; use the shorter internal AI assistant case to connect the title, essay one, and the reader’s own diagnostic exercise.
- Preserve the author’s philosophical qualifications and the distinction between an existing process model and a proposed architecture.
- Preserve the original source separately. The reviewed essay changes are in the guide and its edited snapshot only.

Preserve the qualifications already present: greater review congestion is conditional on the amount of work submitted and review capacity; not every difficult project is a wicked problem; Parnas’s modules are not a direct experimental result about AI agents; simpler architecture is a starting hypothesis, not an absolute rule.

The opening’s tenfold drafting speedup is arithmetically sound: 60 minutes becomes 6, saving 54 minutes. “About five days” is an illustrative overall duration. Do not invent a precise overall percentage or mix working hours with elapsed days when diagramming it.

## Visual plan

Use the same restrained editorial design as essay one. The author’s review refined the original three-figure proposal into two diagrams and a usable diagnostic worksheet.

| Figure | Placement and learning objective | Representation and limits |
| --- | --- | --- |
| Faster drafting, similar delivery time | After the opening; distinguish a local speedup from the outcome leadership wants | Compare 60→6 minutes of drafting with unchanged review/revision/approval stages. Mark it as a fictional example. Show the 54-minute saving and approximate overall duration; avoid a misleading exact total or unlabeled proportional scale. Provide all values in HTML text. |
| One workflow, four useful views | Decomposition section; show how representation selects relationships | Sequence, responsibility, dependency, and flow appear together in a comparison. Each view states its question and limitations. Mobile stacks the panels. Roles are illustrative, and the flow queue assumes arrivals exceed review capacity. |
| Four-question problem brief | Frontload section; help the reader frame an actual request | Four labeled answer fields, a downloadable Markdown brief, a blank no-JavaScript worksheet, and a worked internal AI assistant example. Questions cover representation, assumptions, failure level, and boundaries. |

Keep the five-agent example primarily in prose. A compact shared-specification example can be added later only if it clarifies a responsibility or interface not already explained. A queue simulator would require a new set of assumptions and is not needed to teach the current argument.

Diagram labels should stay in the shared readable, capped range rather than scale with a large SVG. Avoid inserting unrelated stock photography or a literal geographic map that would introduce an additional factual burden.

## Source review — 2026-10-27

This is a targeted check of the essay’s attributions and relevant passages, not a complete audit of every cited book.

| Source | Finding and follow-up |
| --- | --- |
| Korzybski, *Science and Sanity* | The IGS history confirms the original 1933 publication. The originally supplied URL leads to a Bateson event; the guide now uses the IGS book page, which identifies its current sixth edition as 2023. The fuller quotation was supplied in the author’s review; its p. 58 attribution and wording are corroborated by a reproduced passage. No full-book audit is claimed. |
| Schön, *The Reflective Practitioner* | The indexed passage in the original text supports the distinction between problem-solving and problem-setting. The publisher’s description supports reflection-in-action; its linked paperback has a 1984 sale date, which is not evidence that the original 1983 date is wrong. The complete PDF exceeded the web reader’s size limit; no full-book review is claimed. |
| Simon, *The Architecture of Complexity* | The supplied CMU scan resolves. Simon’s later revised chapter explicitly identifies the 1962 paper as its source and supports nested hierarchy, short-term approximate independence, and longer-term aggregate interaction. Keep the original-paper link, and avoid describing near-decomposability as complete independence. |
| Parnas, *On the Criteria to Be Used in Decomposing Systems into Modules* | ACM’s indexed record confirms December 1972, volume 15(12), pp. 1053–1058. The digitized paper explains organizing modules around difficult or changeable design decisions. Preserve the distinction between a useful design analogy and a prescription for language-model agents. Direct DOI access was blocked for the reader; the indexed record and university-hosted transcription were available. |
| Bertalanffy, *General System Theory* | The supplied selected passages explicitly discuss mutual interaction and systems as interrelated elements. The current link label accurately identifies this as selected passages rather than the full book. |
| Rittel and Webber, *Dilemmas in a General Theory of Planning* | Springer confirms June 1973, authors, and journal details. Its abstract places the argument in social policy and contested formulation/objectives. Full text is subscription content; the essay appropriately avoids treating every difficult engineering task as wicked. |
| Anthropic, *Building Effective Agents* | The article is dated December 19, 2024 and supports the workflow/agent distinction and increasing complexity when justified. It now carries a notice that tooling has changed since publication. Keep it as dated practitioner guidance, not a current tooling catalog or universal empirical result. |
| Goldratt and Cox, *The Goal* | North River Press confirms both authors and first publication in 1984. Goldratt Marketing’s overview describes the book’s treatment of bottlenecks, throughput, and flow balancing. The essay’s creative-team scenario is explicitly an illustrative application. |
| Meadows, *Thinking in Systems* and *Leverage Points* | Chelsea Green confirms the book’s 2008 publication and Diana Wright’s editorial credit. Meadows’ archived essay covers information flows, rules, and goals as interventions and explicitly rejects a guaranteed recipe. Both are included as further reading. |

Review links:

- [IGS history](https://generalsemantics.org/Mission-History)
- [IGS book information — recommended replacement](https://shop.generalsemantics.org/products/science-and-sanity-an-introduction-to-non-aristotelian-systems-and-general-semantics)
- [Supplied IGS event listing](https://www.generalsemantics.org/event-4967707)
- [Schön — publisher](https://www.hachettebookgroup.com/titles/donald-a-schon/the-reflective-practitioner/9780465068784/)
- [Schön — text consulted through indexed passage](https://andymatuschak.org/files/papers/Schon%20-%20The%20Reflective%20Practitioner.pdf)
- [Simon — supplied 1962 scan](https://www.andrew.cmu.edu/course/15-440/assets/READINGS/simon-architecture-of-complexity-1962.pdf)
- [Simon — revised chapter, near-decomposability at PDF page 16](https://public.econ.duke.edu/~kdh9/Source%20Materials/Zurich%20Papers/Simon%20Ch.%208.pdf)
- [Parnas — DOI](https://doi.org/10.1145/361598.361623)
- [Parnas — digitized paper](https://www.cs.lafayette.edu/~gexia/cs301/resources/parnas.html)
- [Bertalanffy — selected passages](https://www.panarchy.org/vonbertalanffy/systems.1968.html)
- [Rittel and Webber — publisher](https://link.springer.com/article/10.1007/BF01405730)
- [Anthropic — engineering article](https://www.anthropic.com/research/building-effective-agents)
- [Goldratt and Cox — publisher’s publication history](https://northriverpress.com/30th-anniversary-edition-of-the-goal-published/)
- [The Goal — official book overview](https://www.toc-goldratt.com/en/product/the-goal-a-process-of-ongoing-improvement)
- [Meadows — publisher](https://www.chelseagreen.com/product/thinking-in-systems/)
- [Meadows — Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/)

## Review and publication

Completed: source preserved verbatim; all eleven sections retained in the shared shell; Home, previous-essay, and in-body series links present; figures, worksheet, keywords, and social art added. The original supplied text remains in `source.md`.

Metadata/local-link checks and browser checks cover 320–1440px, themes, contents, native disclosures, no-JavaScript access, homepage WIP exclusion, and basic print visibility. The browser suite now downloads a completed brief by keyboard and verifies all four answers in the saved file, plus the blank worksheet without JavaScript. Lesson one was checked for regressions after shared CSS/JS changes. Desktop and mobile figures, the worksheet, and the Open Graph card were visually reviewed.

Pending: publication decision. The author’s instruction to change draft labels **when publishing** is recorded. When lesson two is set to `published` in the series manifest, `maintain.py sync` will update `guides.json`, the “This draft” label, both essays’ navigation, robots metadata, and homepage cards together. No commit, push, or deployment has been performed for essay two.

## Second visuals pass — 2026-10-27

Requested by the author after reviewing the revised guide: add the visuals that strengthen the argument, with a way to roll back. Rollback snapshot and instructions: `rollback-2026-10-27-pre-visuals/README.md`.

| Figure | Placement and learning objective | Representation, sources and limits |
| --- | --- | --- |
| Fig. 02, one request, three framings | End of "The map is not the territory"; show that a framing selects the solutions that look reasonable | Three rows (capacity, coordination, demand), each a problem statement and the solutions it points to. Fictional. Layout adapted from Wedell-Wedellsborg's slow-elevator exhibit (HBR, January–February 2017); redrawn, not copied. |
| Fig. 04, two boundaries | After "They're evaluating different systems."; show that moving the boundary changes the success measure | Nested narrow and wide systems titled "A system to…", components without arrows, plus outside and excluded lists. Fictional. Conventions adapted from the Open University's systems maps and the ANU systems toolkit's boundary chart. The caption names one condition that would move an outside item inside. |
| Fig. 05, complexity ladder | After the single call / workflow / agent paragraphs; make "start simple" usable as a decision aid | Four rungs with "use when" and "cost you take on". Two short quotations from Anthropic's article (verified 2026-10-27). Four-level structure adapted from Databricks' agent system design patterns; its "single agent as default" advice was deliberately not imported. Caption says real systems mix rungs. |

The former Fig. 02 (four views) is now Fig. 03. Considered and not added: a five-agent chain figure (the prose example is already concrete; see the visual plan above) and a value-stream timeline for Fig. 01 (it would require converting working days to hours, which the plan rules out). Fig. 01's mobile stage arrows were moved clear of the card borders.

Sources added to Further reading: Wedell-Wedellsborg, "Are You Solving the Right Problems?" (HBR, January–February 2017; confirmed on hbr.org and a reprint PDF); Werner Ulrich's introduction to Critical Systems Heuristics (i2Insights, 2022, by Ulrich); Databricks' agent system design patterns (product documentation, undated). Licensing: none of the source images were reused; all three figures are original HTML/CSS with structural credit in the captions.

Checks: `maintain.py check` passed; browser smoke checks passed for lesson 2 (including worksheet export) and for published lesson 1 after the shared CSS change; new figures visually reviewed at 1280px, 375px and 320px in light and dark themes with no horizontal overflow or script errors. Author approval of this pass is pending.

## Review of the additional visuals — 2026-10-27

The author requested a review of Claude's additions and authorized edits to the new copy. The changes below supersede the second-pass descriptions above. The original essay, em-dash usage, and generalized assistant naming are preserved. The lesson remains WIP; this review does not publish it.

- **Fig. 02:** Retained the three framings, but added an evidence question before each possible response. The previous layout went directly from an untested diagnosis to several fixes. The revised comparison makes the hypotheses explicit and provides something the reader can investigate. Shortened the caption and removed the second, elevator example from the reading path.
- **Fig. 04:** Retained the nested boundaries. Made the measures concrete: time to a usable draft versus request-to-delivery time, with quality and rework considered. Changed the outside labels so the study boundary is not equated with control. The caption now explains why another team's scheduling may belong in the investigation.
- **Fig. 05:** Replaced the numbered complexity ladder and meters with four equally presented architecture choices. The former visual implied a progression and a uniform increase in flexibility/cost; the caption's qualification did not undo that impression. Added the possibility of improving the process without AI. Replaced quoted and generic copy with concrete responsibilities, corrected the claim that a single call cannot have automated checks, and clarified that workflows and multiple agents can overlap. The multi-agent criterion is an editorial application of this essay's modularity argument, not a universal architecture rule.
- **Sources:** The Databricks design-patterns URL currently redirects to its Agent Bricks platform overview, which no longer supports the attributed four-level structure. Removed that reference along with the ladder, retaining Anthropic's 2024 article for the workflow/agent distinction. The ANU page could not be retrieved; replaced it with Chris Browne's accessible design toolkit PDF, §2.3. Updated the Ulrich reference to the actual article title and its original 2022 date. HBR's publisher preview confirms the title, author and issue; the full elevator exhibit was not independently rechecked during this pass.
- **Presentation:** Diagram text remains 13px, card headings 16px and framing statements 18px. Layouts reflow without scaling labels with the figure. Long framing and architecture figures can break between cards in print. Five figures plus the worksheet are sufficient; no additional visual is proposed.

Validation: `maintain.py check`, `git diff --check`, the lesson 2 browser smoke checks, and the published lesson 1 regression checks all passed. Browser coverage includes 320–1440px, Home/TOC navigation, light/dark themes, worksheet keyboard export, no-JavaScript access, basic print visibility, and homepage filtering/fallbacks. The revised figures were inspected in desktop and mobile screenshots, including both themes. Captures are in ignored `artifacts/guide-checks/guide-review-before/` and `artifacts/guide-checks/guide-review-after/`; the former also holds the pre-review HTML, CSS and brief. The existing pre-Claude rollback folder remains intact.

## Paragraphing pass — 2026-10-27

The author approved grouping related sentences into fuller paragraphs and subsequently requested the same pass on essay one. In essay two, setups, explanations and consequences now stay together across all eleven main-prose sections. Deliberate questions, bold central claims, and the map/territory turn retain distinct pauses. The revision removes 181 paragraph breaks without changing sentence wording, punctuation or order. On mobile review, the Parnas introduction was kept in two paragraphs so the challenge to sequential decomposition and the alternative remain easy to follow.

Figures, callouts, worksheet, lists and references retain their formatting. A normalized HTML comparison confirms that only paragraph boundaries changed; the supplied `source.md` remains unchanged. The edited snapshot was refreshed. Publication status remains WIP.

Validation: metadata/local-link checks and browser smoke checks passed for both essays, including homepage fallbacks, theme and TOC behavior, 320–1440px layouts, keyboard disclosures and worksheet export. Prose excerpts were visually reviewed at desktop and mobile widths. Before copies and screenshots are saved locally under ignored `artifacts/guide-checks/paragraphing-review/`. The authoring playbook now records the agreed paragraphing guidance for later lessons.

## Release — 2026-10-27

After the readiness review and approved paragraphing passes for both essays, the author requested committing and pushing the work. This is the release step described in that review. The series state is now `published`; generated homepage cards, both essays' series navigation, and robots metadata are synchronized. The current edited snapshots include the release navigation. Earlier WIP and pending-publication notes above describe prior review stages.

The release includes the second essay, its five figures and problem-framing worksheet, social images, source and editorial records, shared supporting CSS/JS and browser checks, plus the approved paragraphing revisions to both essays. Local rollback folders, presentation work, and OS metadata are excluded.

Release checks passed with both lessons published: `maintain.py check`, the complete published-lesson browser smoke run, and `git diff --check`. The homepage includes lesson two, lesson one links forward to it, and its `noindex` and draft-navigation labels are removed.

## Opening aside — 2026-10-27

At the author's request, added their exact wording: “Of course, this assumes the brief was good to begin with. Otherwise, we may have just become much faster at producing terrible content.” Following their placement correction, the aside comes after “The overall project might still take five days.” It stays within the existing paragraph and anticipates the later discussion of incomplete briefs. The author explicitly requested committing and pushing this addition. The original essay source remains preserved; the edited snapshot includes the new aside.

## Connection to essay one — 2026-10-28

During the review of essay three, the author asked whether essay two also needed a clearer connection to its predecessor. The opening already links the model-versus-prompt diagnosis to essay one. Added one targeted explanation in the problem-framing worksheet: essay one's five-stage diagnostic traces an unreliable answer, while this brief establishes the desired outcome and the boundary of the investigation. Readers can apply the diagnostic within that boundary when answer reliability is the problem; the two aids are not alternate versions of the same taxonomy.

The link and explanation appear in the page, blank Markdown worksheet and generated completed-brief download. The original essay and four worksheet questions are unchanged. Updated the metadata date to 2026-10-28, synchronized the homepage fallback card and refreshed the edited snapshot. These revisions are local and have not been committed or pushed.

Validation: metadata/local links, the published-lesson browser suite, worksheet keyboard export and homepage fallbacks passed. Both the blank and generated downloads were checked for the diagnostic link and boundary explanation. The updated worksheet was visually reviewed. Essay three's browser checks also passed during the same review.

## Audit follow-up — 2026-10-29

Restored “assumptions” in the local problem-setting sentence, keeping “what
they're trying to accomplish.” The worked brief now repeats each representative
question within each source condition, holds model/prompt/settings fixed, uses
fresh sessions and varied condition order, and compares within-condition variation.
The blank worksheet and export logic are unchanged; browser export checks pass.
Modification date and snapshot are current, and publication date is preserved.
These edits are included in the author-requested audit release. The previous local guide-two wording change
is now part of this audit correction, not an unrelated edit to discard or publish
incidentally. See the [audit record](../thinking-in-systems-audit-2026-10-29.md).

### Audit release verified — 2026-10-29

Audit commit `998bba0` is pushed to `origin/main`. GitHub Pages
[deployment 40975211990](https://github.com/cydrysdale/now-in-production/actions/runs/40975211990)
succeeded. All four hosted guides, the homepage, both registries, and four social
images match the release byte for byte. Browser checks confirm the corrections,
original publication dates, homepage cards, series links, and mobile layout,
with no browser errors. Essay five and its supporting files were excluded.
Evidence is under `artifacts/guide-checks/publish-audit-2026-10-29/` in the main
workspace. The original sources and unrelated local work are preserved.
