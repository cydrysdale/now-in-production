# Essay 03: All the Information, None of the Context

- Latest copy review: [Voice, tone and prose — 2026-10-28](copy-review-2026-10-28.md).
  Includes an addendum on guides one and two. The author approved implementing
  the fixes, and the copy edit below is complete across all three guides.
- Status: Published; hosted page and public navigation verified 2026-10-28.
- Source: source.md, preserved verbatim on 2026-10-27.
- Edited page: ../../guides/all-the-information-none-of-the-context.html
- Source SHA-256: `6ff26df7f516baddb41228ed7cacaff42358a97b9df0226c57c0f736596e9f34`.

## Publication — 2026-10-28

After asking whether essay three was linked from the homepage and the end sections
of essays one and two, the author authorized publication: “I think it's ready to
publish unless there's a reason you want to hold off.” The completed editorial,
source and visual reviews contain no unresolved publication blocker.

Changed the manifest status to `published` and regenerated the registry,
homepage card and all three series footers. Essays one and two now link to
essay three; essay two also has a Next essay link. Essay three no longer has
`noindex,follow`, and its footer says “This essay.” All three edited snapshots
are refreshed. The approved prose and original source remain unchanged.

Metadata/local-link and whitespace checks passed. Browser checks passed for all
three published essays, including homepage cards and fallbacks, navigation,
320–1440px layouts, themes, keyboard disclosures, no-JavaScript access, basic
print visibility and essay two's worksheet export. The new footer links were
visually checked on desktop and mobile. Screenshots are under
`artifacts/guide-checks/publish-03-2026-10-28/`.

Publication commit `7830a00` is pushed to `origin/main`. GitHub Pages
[deployment 40765048549](https://github.com/cydrysdale/now-in-production/actions/runs/40765048549)
succeeded. On 2026-10-28, all three guide pages, the homepage, both registries,
shared CSS/JS, both worksheets and essay three's social PNG/SVG matched local
files byte for byte. A live browser check followed the homepage card and both
earlier essays' end-section links to essay three, confirmed essay two's Next
essay link and removal of `noindex`, and reported no page errors. The homepage
card was also visually checked. Verification evidence is saved alongside the
publication screenshots in `hosted-check.json` and `hosted-homepage-card.png`.

Earlier WIP and pending approval statements below describe the history before
this publication decision. No release or editorial approvals remain pending.

## Repository save — 2026-10-28

The author requested committing and pushing the completed session work. Content
commit `7398fd8` was pushed to `origin/main`, including this draft, its seven
figures, worksheet, social image, source and editorial records. WIP status and
`noindex,follow` are retained; the guide remains excluded from homepage cards
and other lessons' public navigation. A WIP file committed to Pages can still
be opened directly after deployment.

Final metadata/local-link checks, all seven authoring-tool tests, and browser
smoke checks for all three guides passed, including the final humor wording.
GitHub Pages deployment succeeded. On 2026-10-28, the hosted draft, evidence
worksheet, social PNG/SVG, shared assets and registries matched the local files
byte for byte. Its direct URL is accessible; its WIP status, robots metadata and
exclusion from the homepage and essays one/two's end navigation are preserved.
Local rollback folders and unrelated work were excluded from the commit. Earlier
local-only notes below describe the state before this repository save.

## Humor review — 2026-10-28

The author requested reviewing humor suggestions one at a time with the existing
and proposed passages shown together. Approved and added “Otherwise, everything
checks out.” to the end of the opening licensing-mismatch paragraph, in normal
body text. The author subsequently approved combining the restrictions into one
sentence, with “the approval applied only to a specific event” and “the license
expired at the end of last year.” The original “There's just one problem.” and
the period after “Otherwise, everything checks out.” remain.

For the second suggestion, the author rejected jokes about the folder name
expiring and supplied the replacement paragraph. It is implemented verbatim,
with the existing code/emphasis markup retained. The added sentence is:

> And some might be asking what happens to a folder named "Approved Images" when a license expires (at least I hope that's true), but that's a topic for a different time.

The edited snapshot is current. The series humor review is complete, with all
five suggestions implemented in their individually approved forms. This approval
does not cover publication.

## Approved copy edit — 2026-10-28

The author approved the voice, tone and prose review and requested implementation.
The opening scenario, section structure and seven figures remain. The edit:

- Removes repeated thesis statements and narration announcing a point's
  importance. Historical introductions now vary: the relationship question
  precedes Quillian, and the evolving search precedes Bates.
- Describes concrete records, actions and decisions where abstract restatements
  previously slowed the argument. The faceted-classification passage now also
  reflects the figure's coexistence of folders and metadata.
- Reduces prose that duplicates the figures, including the search sequence,
  isolated expiration clause, retrieval counts and diagnostic steps. The figures
  retain their complete text equivalents, assumptions and qualifications.
- Corrects the heading to “Why not give the model everything?” and preserves
  the long-context study descriptions and limits.
- Shortens the context-engineering introduction and the diagnostic setup while
  retaining the three concerns, four diagnostic stages, mapping to essay one,
  causes-versus-stages distinction, and worksheet.
- Keeps the distinction between undocumented knowledge and an unresolved
  organizational decision. The conclusion now answers its heading by returning
  to a useful response about the photograph, then ends with the original final
  reflection.

The article text, including figures and references, decreased from 6,052 to
4,609 whitespace-delimited words. This is a result of the edit, not a word target.
Research scope, licensing uncertainty, source links and the preserved source
essay remain intact. The earlier source review still applies; no new external
source audit was performed.

Validation: `maintain.py check` and browser smoke checks passed for guides one,
two and three, including homepage publication filtering/fallbacks, 320–1440px
layouts, navigation, theme persistence, keyboard disclosures, no-JavaScript
access, basic print visibility, and guide two's worksheet export. Changed prose
was visually reviewed at 1440px in light mode and 390px in dark mode. All original
source hashes, anchor IDs and figure markup match the before copies. The edited
snapshots and generated homepage cards are current. Backups, comparison counts
and screenshots are under `artifacts/guide-checks/copy-edit-2026-10-28/`.

Approval covers the copy fixes. Guide three remains WIP; no commit, push or
publication was performed.

## Editorial review

Audience: readers evaluating or building AI systems around organizational information, including people who are not implementing retrieval systems themselves.

Central question: why can an assistant with access to all the necessary documents still give an unsupported answer? The practical takeaway is to inspect the source, its relationships, the retrieved material, and its application separately. More documents or a different model may not address the failure.

The original photograph example and all ten main sections are retained. Contents groups divide the reading path into meaning and relationships, retrieval and context, and diagnosis and decisions. In-body links connect the argument to essay one's claim/evidence/confidence discussion and essay two's system boundaries.

The paragraphing follows the approach approved for essays one and two: related sentences develop one thought; questions and major turns retain pauses. The four semantic statements, context questions, failure checks and undocumented-knowledge examples are lists where their parallel structure helps. The three architecture concerns and four diagnostic concerns are definition lists. Sentence wording is preserved except for the following light corrections and additions:

- In the faceted-classification passage, “independent dimensions” becomes “distinct dimensions.” Attributes need not be statistically independent.
- In the SKOS discussion, “a more specific instance of another” becomes “narrower in scope than another.” Concept hierarchy should not be confused with class-instance membership.
- The previously uncited long-context/RAG comparison now names Li et al. (2024), describes the tested-dataset result and cost trade-off, and has a corresponding reference. It does not assert that one approach universally outperforms the other.
- Shannon, Quillian, Bates and Lost in the Middle now have primary-source links at their first substantive mentions.
- The Nature review is called a “contemporary description,” without implying that the complete review or original book is freely accessible.
- Added the series connection, four original figures and a downloadable Markdown worksheet. Figure copy stays specific to the fictional example and distinguishes missing evidence from an unresolved organizational decision.

Em dashes are preserved, following the author's explicit instruction. No product or assistant name has been introduced.

## Visual plan

All figures are original HTML/CSS, with selectable text, headings and captions. They use the supplied fictional example, not reproduced research images. Labels stay at 13–15px rather than scaling with the diagram; larger quotations and figure titles retain the established editorial styles.

| Figure | Learning objective | Assumptions and text equivalent |
| --- | --- | --- |
| 01: Approved for which use? | Compare an approval's conditions with the proposed use. | Native disclosure contains a table of channel, geography, timing and scope, with a qualified conclusion. The scenario is fictional; the record does not establish permission for the new campaign. No new licensing terms are invented. |
| 02: One photograph, different records | Show why the type of relationship matters, beyond topical similarity. | The asset connects to its earlier approval, governing license and proposed campaign. Every connection has an HTML label. The comparison is described in text. The map is conceptual and does not prescribe graph technology. |
| 03: What does Section 4 permit? | Show what a retrieved passage cannot establish on its own. | The quotation remains separate from the context that needs to be recovered. The missing year is explicitly identified. No generated summary is treated as authority to add terms. |
| 04: Trace one answer | Turn the author's four-part diagnostic into questions a reader can apply. | Each concern includes a question and an investigation. The caption identifies this as the essay's working framework, allows multiple failures, and calls for retesting. |

The worksheet at `assets/downloads/thinking-in-systems-03-evidence-worksheet.md` asks for an actual question, expected answer and verifier, source versions/scopes, record connections, retrieved passages, claim/evidence comparison, next experiment, and decision owner. It downloads without JavaScript and does not request private information from the reader. No new client-side JavaScript was needed.

The social card has an editable SVG source and a 1200 × 630 PNG under `images/thinking-in-systems-03.*`.

## Source review — 2026-10-27

Claims were checked against primary publisher, author, standards-body or research records. The level of access matters: abstract-level checks below are not claims to have audited each paper's complete experiments.

| Reference | Check and scope |
| --- | --- |
| [Shannon (1948), Bell Labs](https://www.nokia.com/bell-labs/publications-and-media/publications/a-mathematical-theory-of-communication/) | Publisher's July 1, 1948 record and opening explanation support the transmission/semantics distinction. The essay correctly limits “irrelevant” to the engineering problem. |
| [Ranganathan / Nature review (1934)](https://www.nature.com/articles/133008b0) | Publisher-indexed review identifies the 1933 book and combinatorial divisions. Direct article access redirected through a login flow; the indexed publisher abstract was checked, not the complete book. |
| [Quillian (1967), Wiley](https://onlinelibrary.wiley.com/doi/10.1002/bs.3830120511) | Publisher-indexed title, date and abstract confirm an experimental network of elements and associations. Direct DOI retrieval failed in the review tool; publisher metadata and abstract were available through search. No claim that the model establishes how all human semantic memory works. |
| [Bates (1989), author's UCLA copy](https://pages.gseis.ucla.edu/faculty/bates/berrypicking.html) | Full text supports evolving questions and gathering information across sources. Applying the idea to AI retrieval is an editorial analogy, not an experiment reported by Bates. |
| [W3C SKOS Primer (2009)](https://www.w3.org/TR/skos-primer/) | Verified labels, concept hierarchies and associative relationships. Broader/narrower concept relations do not establish the licensing, precedence or authorization relations discussed separately. |
| [Lewis et al. (2020)](https://arxiv.org/abs/2005.11401) | Abstract and NeurIPS acceptance record support the influential RAG formulation combining parametric and retrieved memory. The initial submission is 2020, despite a later arXiv revision date. |
| [Liu et al. (2024)](https://aclanthology.org/2024.tacl-1.9/) | TACL publication and abstract support position-sensitive results in the studied QA and key-value tasks. The 2024 publication date is correct despite an earlier preprint. No universal current-model claim is made. |
| [Li et al. (2024)](https://aclanthology.org/2024.emnlp-industry.66/) | Added citation. Abstract compares three models across public datasets: sufficiently resourced long context performed better on average, while RAG cost less. The text keeps both conditions. |
| [Anthropic, Contextual Retrieval (2024)](https://www.anthropic.com/research/contextual-retrieval) | Checked passage contextualization, contextual embeddings/BM25, evaluation setup and retrieval-failure results. The essay uses no numerical guarantee and labels the result as Anthropic's tested setup. |
| [Saad-Falcon et al., ARES (2024)](https://aclanthology.org/2024.naacl-long.20/) | Abstract identifies context relevance, answer faithfulness and answer relevance. It supports evaluating separate dimensions, not validating the essay's four-part framework or eliminating human reference judgments. |
| [Du et al. (2025)](https://aclanthology.org/2025.findings-emnlp.1264/) | Publication record and abstract confirm the title, math/QA/coding tasks and experiments controlling ordinary retrieval failures. Results remain qualified by models and settings; no generalized performance curve was drawn. |
| [Anthropic, Context Engineering (2025)](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) | September 29, 2025 article supports curation and maintenance of instructions, tools, external data and history across inference steps. The essay does not adopt the article's broader model-performance claims. |

## Review and publication

The draft is registered as `wip`, with `noindex,follow`. It has Home links, a grouped TOC, theme controls, links back to the two published essays, keywords and dedicated social metadata. It is excluded from homepage cards and other lessons' public navigation. Lessons four and five remain unassigned.

Validation completed on 2026-10-27:

- `maintain.py check` passed: metadata, titles, assets, local links, original source, navigation and registry consistency.
- Browser smoke checks passed for lesson three and the two published lessons after the shared CSS addition. Coverage includes 320–1440px, Home and TOC navigation, both themes, native keyboard disclosures, no-JavaScript access, basic print visibility, homepage WIP filtering and HTTP/file/failure fallbacks. Essay two's worksheet export still preserves all four answers.
- Figures and covers were visually reviewed on desktop and mobile, in light and dark themes. The final pass prevents wrapped figure numbers and explicitly caps the comparison table text at 13px.
- The blank worksheet downloaded over HTTP with JavaScript disabled; the downloaded bytes match the committed source file. In a direct `file://` preview, Chrome opens the Markdown target instead of emitting a download event. This does not affect the hosted site or the readability of the local worksheet.
- The original essay's SHA-256 still matches the supplied source. The edited snapshot was saved after final page changes. `git diff --check` passed.

Review screenshots are saved locally under ignored `artifacts/guide-checks/essay-03/preview/`. Temporary browser sessions and the local HTTP server were closed. Existing OS metadata, presentation work and earlier rollback folders were left alone.

Author review and a publication decision are pending. A saved `edited.html` is a review snapshot, not approval. No essay-three commit, push or publication has been performed.

## Review revisions — 2026-10-28

The author supplied an external review and invited disagreement. The following changes address its central concern: the four concerns must connect to the diagnostic readers already encountered, rather than appear to replace it.

- Linked the diagnostic introduction and Fig. 04 caption directly to essay one's Fig. 05 (`#diagnostic-title`). The explanation retains source and retrieval, expands authority and scope into organization, and combines interpretation with answer verification under application.
- Made authority, scope and precedence explicit in the definition, preliminary questions and Organization step. Application now explicitly checks the citation and the claim's scope, so combining stages does not omit verification.
- Added the same mapping, precedence questions and citation check to the downloadable worksheet. The discussion and worksheet preserve retrieval failure, conflicting guidance, interpretation and model capability as possible explanations. The qualification to the review's suggested mapping is that stages and causes are different: conflicting guidance can arise in source records or their precedence, and capability can constrain application even with adequate inputs.
- Retained the undocumented-knowledge section because it develops the distinction between an unrecorded decision and an unresolved decision. Its opening now links directly to essay one's precedence example (`#precedence-title`), and one generic transition was removed.
- Removed the explicit graph-database caveats from Fig. 02 and the SKOS passage; retained the practical graph-versus-spreadsheet example near the diagnostic. Removed the historical recap in the conclusion, adjusted the following transition and kept the closing lines.
- Expanded the Du et al. finding to name the controlled whitespace and masking experiments, verified against the [publisher-hosted abstract](https://aclanthology.org/2025.findings-emnlp.1264/). The paragraph that limits generalization to the models and settings studied remains in place.
- Left the general level of hedging and em-dash usage alone. Added a cross-lesson diagnostic check to the authoring playbook for later essays.

No personal lesson/debrief details were added to the public guide. The source essay remains unchanged. The guide's updated date is now 2026-10-28. The supplied review is recorded here as feedback, not as an instruction to send Nat a message or publish the page; status remains WIP.

Validation: metadata/local-link checks and lesson-three browser smoke checks passed. The two published lessons also passed after updating essay two's shared worksheet export. The revised diagnostic was visually reviewed on desktop, mobile and with print styles; basic print visibility is covered by the smoke check, rather than a full pagination audit. Both forms of essay two's worksheet download contain the new connection. Screenshots and before copies are under ignored `artifacts/guide-checks/essay-03/review-2026-10-28/`. On 2026-10-28, an HTTP check confirmed that the public essay-three URL returns 404. No publishing or messaging action was taken.

## Visuals pass — 2026-10-28

Requested by the author after a review found that essay three carried fewer figures than essays one and two, with the longest unillustrated stretch in its middle. Three figures were added where they make a distinction easier to see; long-context research results, the three-concerns list, Shannon and the undocumented-knowledge section were left as text. Rollback snapshot and instructions: `rollback-2026-10-28-pre-visuals/README.md`.

| Figure | Learning objective | Assumptions and text equivalent |
| --- | --- | --- |
| 02: Filed once, or described several ways? | Show why one folder location answers one question while facets serve several people's decisions. | The same fictional photograph, filed in an "Approved Images" folder and described by subject, campaign, license, channel, region and expiry (values consistent with Fig. 01). Three short lines name who uses which facet. The caption states that facets do not encode relationships between records, which bridges to Fig. 03. |
| 04: Each answer changes the next search. | Show berrypicking: each discovery changes the next query, and a one-shot search stops at the first plausible record. | Two columns compare one search with four sequential searches (approval, license, renewals, campaign brief). Assumes no renewal is on file, stated in the caption. Identified as an illustration of Bates's point, not a procedure from her paper. Links to essay two's architecture figure for the fixed-sequence vs. self-directed choice. |
| 06: The right passages, in a crowd. | Make recall and precision concrete with the essay's example. | Six retrieved passages, each with a text tag (relevant, outdated, different asset, conflicting, off-question), and two relevant passages that were not retrieved. Counts (2 of 6; 2 of 4) are illustrative and labelled as such; the caption notes that real measurement uses a test set with known answers. Tags carry their meaning in text, not color alone. |

Existing figures were renumbered in reading order (02 → 03, 03 → 05, 04 → 07); their IDs and all essay text, references and the worksheet are unchanged. Each new figure is wrapped in `visuals-2026-10-28` HTML comments, and its styles sit in one marked block at the end of the shared CSS, scoped to new class names. Labels and tags are 13–15px, matching the existing diagram pattern.

Validation: `maintain.py check` and `git diff --check` passed. The repository's browser smoke checks passed for lesson three and for both published lessons after the shared CSS change (run in a Linux Chromium from a copy of the repository at the same file hashes). The new figures were inspected at 1280, 768, 390 and 320px in light and dark themes, with no horizontal overflow, no console errors, and all seven figures present without JavaScript. The `edited.html` snapshot was refreshed. Author review and a publication decision remain pending; status remains WIP.

## Corrections to the added visuals — 2026-10-28

The author approved fixing the issues identified in the visual review. These corrections supersede the corresponding explanations in the visuals-pass notes above. All three additions and their layouts are retained.

- **Fig. 02:** Retitled “One file, several ways to find it.” Removed the false choice between folders and metadata, including the claim that adding a category requires moving or copying the file. The caption now acknowledges that metadata can represent relationships, as the license field already does, and explains why the governing agreement and applicable terms must be identifiable.
- **Fig. 04:** The comparison now concerns stopping at the first match versus investigating missing evidence. The search returns no renewal in the records searched; it does not establish that none exists. The conclusion says the retrieved records do not establish current permission and asks licensing to confirm whether a renewal or amendment covers the use. The caption explicitly allows one search to be sufficient and retains the link to essay two's architecture choices.
- **Fig. 06:** Corrected the caption to explain that precision and recall can describe one query, while system evaluation needs many representative queries and passage-level relevance judgments. The four relevant passages are explicitly an assumption of the fictional example; the arithmetic is unchanged. Added a link to the definitions in Manning, Raghavan and Schütze's [Introduction to Information Retrieval](https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-unranked-retrieval-sets-1.html), verified during the preceding review. The conclusion no longer promises that two missing records alone would settle permission.

The original essay, earlier diagnostic connections, figure IDs and numbering, styles, scripts and worksheet remain unchanged. The edited snapshot was refreshed. Status remains WIP; this instruction approves the figure corrections, not publication.

Validation: metadata/local-link checks, `git diff --check` and the lesson-three browser smoke suite passed, including 320–1440px layouts, themes, navigation, disclosures, no-JavaScript use, basic print visibility and homepage filtering/fallbacks. Final screenshots of the three figures were visually reviewed in desktop and mobile layouts and both themes. The original source hash is unchanged, and comparison against the pre-visuals snapshot confirms that changes to the page are confined to the added figures and their numbering. Captures are in ignored `artifacts/guide-checks/essay-03/visual-fixes/`. No shared CSS or JS changed during these corrections, so the already-passing published-lesson checks were not repeated.
