# Essay five: visual research and proposals

Researched 2026-10-29 at the author's request, before any implementation. This is
a research record. No changes were made to the guide, its snapshot, brief, or styles.
Proposals follow `docs/thinking-in-systems.md` §3 (concept, evidence or assumptions,
text equivalent; calm reading path; no scores or rewards; native `details` for
reveals; works without JavaScript and in print; HTML/CSS or SVG).

## What the research says about engaging explanation

| Finding | Source and verification level | Implication for this essay |
| --- | --- | --- |
| Predicting before seeing data improved recall; predicting and then explaining the gap, or getting feedback, also improved trend comprehension. Effects held with moderate or little prior knowledge, disappeared for a highly familiar dataset, and prediction did not help with text-only presentation. | [Kim, Reinecke & Hullman, CHI 2017](https://mucollective.northwestern.edu/files/2017-ExplainingTheGap-CHI.pdf). Full PDF read via summary: 373 crowdworkers, one main dataset, two replications. | A predict-then-reveal figure is the best-supported "engaging" pattern. Participants actively entered predictions; a silent mental guess is weaker and untested. Ask for a guess and a reason. |
| Graphical prediction improved later predictions about replications; showing uncertainty as discrete outcomes improved recall. | [Hullman et al., InfoVis 2017](https://www.hullmanlab.northwestern.edu/paper/2017/04/01/imagining-replications.html). Lab abstract only. | Supports showing results as discrete marks rather than abstract statistics. |
| Interactive articles can prompt self-reflection, make systems explorable, and offer details on demand. Authoring cost, accessibility ("an open challenge") and archival are real costs; "interactivity may be distracting to readers or the functionality may go unused." | [Hohman, Conlen, Heer & Chau, Distill 2020](https://distill.pub/2020/communicating-with-interactive-articles/). Full article. | Use interaction only where it changes understanding; keep everything readable when the interaction is ignored. |
| Use interactivity for processes, systems and models; text for abstract concepts. Withholding an explanation can make it more effective. End by drawing on what the reader already learned. | [Nicky Case, 2014](https://blog.ncase.me/explorable-explanations). Practitioner essay. | Supports gated reveals and a closing figure that draws on essays one to four. |
| The "active reader" questions an argument; reactive documents should expose the model behind a claim. | [Bret Victor, 2011](https://worrydream.com/ExplorableExplanations/). Practitioner essay; his 2024 postscript says the term now means "any article with interactive pictures." | Reveals should expose reasoning and evidence, not decorate. |
| Only 10–15% of visitors to a NYT interactive clicked anything (Gregor Aisch, in a talk). | [FlowingData, 2017](https://flowingdata.com/2017/03/15/interactive-or-not-to-interactive-visualization/). Secondhand report; talk not identified. | The summary line of every reveal must carry the claim on its own. |
| Icon arrays help people with low numeracy understand proportions. | [Galesic, Garcia-Retamero & Gigerenzer, Health Psychology 28(2), 2009](https://doi.org/10.1037/a0014474). Title and metadata only. | A 100-mark array is an accessible way to show "96 of 100" and what the four failures were. |
| Interesting but irrelevant additions ("seductive details") reduce learning, with small-to-moderate aggregate effects. | Rey 2012 and Sundararajan & Adesope 2020, as summarized in [Kienitz, Krebs & Eitel, Instructional Science 2023](https://link.springer.com/10.1007/s11251-023-09632-w). Secondary mention only. | No decorative illustration (the ship, robots, icons for their own sake). |
| Complex images need a short description plus a long description of the essential information. A `figure` grouping the image with its long description is one accepted pattern. | [W3C WAI complex images tutorial (draft)](https://www.w3.org/WAI/EO/Drafts/tutorials/images/complex). | HTML figures with real text already satisfy this; SVG diagrams need an adjacent text equivalent. |

Related concepts surfaced for possible captions or research notes (not currently in the essay):

- [Shneiderman, "Human-Centered Artificial Intelligence: Reliable, Safe & Trustworthy" (arXiv 2020)](https://arxiv.org/abs/2002.04087): treats human control and automation as two separate dimensions rather than one slider. Full text read via summary. Advocacy framework, not an empirical finding.
- [Elish, "Moral Crumple Zones," Engaging Science, Technology, and Society 5 (2019)](https://estsjournal.org/index.php/ests/article/view/260): blame for a failure lands on a human operator who had limited control. Abstract only. Directly relevant to the responsibility section; adding it would be a content change, not a visual one.
- [Endsley & Kiris, "The Out-of-the-Loop Performance Problem and Level of Control in Automation," Human Factors 37(2), 1995](https://doi.org/10.1518/001872095779064555): metadata only via a secondary page. Possible support for the skill-erosion loop.
- [LOOPY](https://flowingdata.com/2017/03/27/loopy-is-a-tool-to-think-in-systems/) (Nicky Case): interactive causal-loop tool. Inspiration only; the series already cites Meadows in essay two.

## Proposed visuals, by priority

Each lists the concept, technique, evidence, text equivalent, and risks. "Section" uses the existing heading IDs.

### Tier 1: recommended

**1. Behind the Approve button** (`#delegating-decisions`). Concept: most decisions happen before and after the click. Technique: a plain approval card (the essay's opening button) with three labeled layers. *Before you saw this:* sources, rules, disclosure, what the assistant may do alone. *What the four functions did:* acquire, analyze, recommend, send (Parasuraman et al. 2000), each marked automated or human. *After approval:* a dashed stage linking to essay four's Fig. 03 (`#measurement-gap-title`). Reveal: optional `details` per layer ("What this screen doesn't show you"); the layers are visible without JS and in print. Evidence: details-on-demand (Distill 2020); Victor's exposed model. Text equivalent: the layers are HTML lists. Risk: the paper presents levels per function; confirm its figure before visually echoing it. Do not imply drafting is purely mechanical (brief correction). Absorbs the essay-four callback.

**2. Predict, then reveal: does the pair beat the better of the two?** (`#human-ai-performance`). Concept: on average, human–AI combinations beat humans alone but not the stronger of the two; it depends on task type and on who is better. Technique: `details` whose summary asks the reader to choose and give a reason before opening; inside, a simplified interval plot around a zero line. Values from Vaccaro et al. 2024: synergy g = −0.23 (95% CI −0.39 to −0.07); augmentation 0.64 (0.53 to 0.74); decision tasks −0.27 (−0.44 to −0.10); creation tasks 0.19 (−0.09 to 0.48, not significant); human better than AI alone 0.46 (0.28 to 0.66); AI better −0.54 (−0.71 to −0.37). Evidence: Kim et al. 2017; Hullman et al. 2017. It also enacts the essay's own Buçinca point: a pause that asks for thought, not another click. No input stored, no score. Risks: the relative-performance values were rechecked against the article's Results wording on 2026-10-29 (quoted g and CIs match); still confirm in the PDF when implementing; explain Hedges' g in plain words ("standardized difference; zero means no difference"); preserve the 2020–2023 window and "experimental configurations studied." Plain-language row labels, numbers in a research note if preferred.

**3. Five questions, three reviewers** (`#meaningful-oversight`, keep anchor `#oversight-questions`). Concept: a single missing condition breaks control. Technique: small multiples. Rows are the essay's own reviewers (expertise but cannot stop publication; authority but cannot inspect evidence; both but no time), plus the employee approving technical claims from `#decisions-before-approval` for competence. Columns are the five questions, filled or hollow, with the consequence named. Text equivalent: a real HTML table with a caption. Evidence: icon-like discrete marks (Hullman et al. 2017) and table scanning; this is the lesson's tool, which every earlier lesson presents as a figure. Risk: the questions remain a heuristic, not a validated test; keep the essay's qualification in the caption. The fifth question concerns the system, not the person; label it that way.

**4. Across the series: what had to be true for the click to mean anything** (new closing section before Further reading). Concept: each essay's tool applies at a different point in a workflow. Technique: five stage cards (02 frame, 03 context, 01 evidence, 05 approve, 04 feedback) with a return arrow, each linking to the earlier tool's stable anchor. Evidence: "conclude with prior knowledge" (Case 2014). Text equivalent: an ordered list. Risk: the essays were not written as one method; caption says these are places to look, earlier checks remain, and essay one's diagnostic spans several stages (docs series map rule).

### Tier 2: worth considering

**5. The irony loop** (`#supervising-automation` or `#maintaining-judgment`). Concept: Bainbridge's irony as a reinforcing loop: routine automation succeeds → less hands-on practice → weaker skill and awareness → review becomes ritual → more reliance. A balancing link shows the essay's remedies (practice, known failure examples, structured review, specialists). Technique: a static causal-loop diagram, the series' namesake idiom (Meadows is cited in essay two). Text equivalent: numbered sentence chain. Risks: a loop asserts causal links. Bainbridge is about industrial control; Lee et al. 2025 is self-reported and associational. Label the loop "a mechanism to watch for, not a measured effect." No animation.

**6. Two kinds of friction** (`#human-ai-performance`, after the Buçinca paragraphs). Concept: a confirmation click vs a pause that requires evidence. Technique: two side-by-side interface mocks: "Are you sure? Approve" versus "Which source supports the pricing claim?" with a source picker. Text equivalent: a two-column comparison. Risk: the evidence check is the essay's application, not the tested intervention (brief); caption says so.

**7. Authority versus means** (alternative to 3, not both). A 2×2 from the essay's sentence "A person can possess formal authority over a decision without possessing the practical means to evaluate it": rubber stamp, governor, adviser without power, bystander. Shneiderman's two-dimension framing and Elish's crumple zone could appear in a research note. Simpler than 3 but loses three of the five questions.

### Tier 3: optional or skip

- **Thirty seconds versus twenty minutes** (opening). A proportional time bar (1:40). Strong hook, but echoes essay two's Fig. 01 time bars; an early figure also delays the opening's short turns.
- **Same 96%, different failures** (`#testing-oversight`). Two 100-mark icon arrays with identical scores and different failure composition. Accessible (Galesic et al. 2009), but this ground belongs to essay four; the bridge sentence already covers it.
- **Two proposals that look alike** (`#decisions-before-approval`). The existing comparison component. Clear but adds little to the prose.
- **From gathering to verifying** (`#maintaining-judgment`). Lee et al.'s three shifts as from → to rows. Cheap; could be a caption inside visual 5.

Rejected: a timed "be the reviewer" game (conflicts with the no-scores rule; gamification targets behavior, not understanding, per Case); scrollytelling (not used by the series, fails the no-JS and print requirements); a ship-navigation illustration (decorative); reproducing Shneiderman's figure (new source and image reuse; derive visual 7 instead); a LOOPY-style animated loop (calm reading path).

## Implementation notes

- Prior essays carry five to seven figures. Tier 1 plus two from Tier 2 gives six.
- Pattern styles for numbered stages live in `assets/css/thermometer.css` (essay four only). Prefer a lesson stylesheet for essay five over shared CSS changes, which require re-checking all published lessons.
- The author restored the original prose. After figures are placed, the docs ask for a connected-prose pass; propose any trims next to a figure individually rather than applying them.
- Diagram labels follow the series pattern, `clamp(.8125rem, 4cqi, .9375rem)`, independent of SVG scaling; check the smallest rendered width.
- Record the visual plan, the chosen figures, and the verification of the Vaccaro moderator values in `brief.md` when implementation begins.
