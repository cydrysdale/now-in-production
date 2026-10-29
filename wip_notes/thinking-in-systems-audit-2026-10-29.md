# Thinking in Systems: audit follow-up, 2026-10-29

The author asked us to check a supplied audit, including current manual edits,
and then requested a commit and push. This release contains the corrections to
published essays 01–04. Essay 05 and its supporting files remain local for
publication tomorrow morning; no automatic publication is scheduled.
The audit instruction authorizes the narrow essay-four figure correction despite
the earlier instruction to leave its prose alone. Its prose remains unchanged.

## Findings and actions

| Item | Assessment and action |
| --- | --- |
| 01: Gettier link | Replaced both old PDF links with the supplied DOI, and removed the misleading PDF label. The publisher's indexed article record confirms the title, author, issue, pages, and DOI. The old URL timed out; direct automated access to the publisher was blocked, so this is not a claim to have downloaded the full paper through the DOI. |
| 01: Plato link | Confirmed: the MIT HTML ends before the cited discussion. Both links now point to the complete Project Gutenberg Jowett translation; checked the passage beginning “true opinion, combined with reason” and the dialogue's continuation. |
| 01: justified true belief history | Replaced the historical-development claim with a modern starting point, explicitly acknowledging the disputed history and linking the Stanford Encyclopedia of Philosophy. Figure 01 and the Gettier reference no longer imply a settled historical consensus. |
| 01: clock | Made the clock explicitly analog and its hands show three o'clock. The observer concludes it is 3 PM; a clock stopped at 3 AM can show those same hand positions twelve hours later. |
| 02: experimental repetitions | The original brief did not explicitly require repetitions of each question within each condition. It now holds model, prompt, and generation settings fixed, repeats each representative question in fresh sessions under both source conditions, varies condition order, and compares accuracy/citations alongside variation within each condition. This remains an exploratory diagnostic, not a claim that a few repeats establish statistical significance. |
| 02: assumptions | Restored the explicit conceptual link while retaining the conversational phrasing: “why they want it, what they're trying to accomplish, and what assumptions link their proposed solution to that outcome.” |
| 03: Li et al. | The audit's wording needs qualification: the paper says “when resourced sufficiently” and explicitly discusses computation cost. The essay's more specific “sufficient computational resources” is unnecessary, so removed it. Retained the tested average-performance finding and RAG's cost advantage. |
| 03: Du et al. | Confirmed. The paper explicitly distinguishes finding and reproducing evidence within the model's context from external RAG retrieval. Clarified this in the paragraph and reference description, including that retrieval checks were separate from task evaluation. |
| 03: recall and precision | Already correct. Verified this portion of the guide is byte-for-byte unchanged. No corrections imported from another room. |
| 04: observed versus total failures | Changed “two claims” in Figure 03's transformation step to “some claims.” The measured box still reports two discovered failures and an unknown total, without implying that the transformation affected exactly two claims. |
| Who owns type | No local changes in either HTML file or its game script. The most recent change to the guide was publication-date metadata, not an em-dash edit. The specific em-dash finding was not included in the supplied message; no unrelated prose change was inferred. |

## Source checks

- [Gettier publisher record](https://academic.oup.com/analysis/article-abstract/23/6/121/109949): indexed bibliographic metadata; automated full-page access blocked.
- [MIT Theaetetus](https://classics.mit.edu/Plato/theatu.html): inspected its ending; it stops during the Protagoras discussion.
- [Complete Theaetetus translation](https://www.gutenberg.org/files/1726/1726-h/1726-h.htm): inspected the relevant true-opinion-and-account passage in the dialogue, rather than relying on the translator's introduction.
- [Stanford analysis of knowledge](https://plato.stanford.edu/entries/knowledge-analysis/): section 1 explicitly disputes the familiar historical account of broad acceptance.
- [Li et al. PDF](https://aclanthology.org/2024.emnlp-industry.66.pdf): abstract, §3.3 and cost discussion in §4.3. No claim that extra hardware or a separately manipulated compute budget caused the performance result.
- [Du et al. PDF](https://aclanthology.org/2025.findings-emnlp.1264.pdf): abstract, footnote 1, and separate exact-match retrieval evaluation. Retained the original scope limits and controlled-test qualifications.

## Validation and state

- All four released snapshots match their guides. Updated modification dates on
  essays 01–03 to 2026-10-29; all original publication dates remain unchanged.
- Metadata/local-link/generated-content and whitespace checks pass. A separate
  check of raw markup found no block elements nested inside paragraphs in any
  of the four released guides; browser repair of invalid HTML was not treated as validation.
- Browser smoke checks pass for all four released essays and the homepage, covering
  320–1440px, themes, navigation, keyboard disclosures, no-JavaScript access,
  homepage fallback behavior, and essay-two worksheet export. Print checks
  cover basic visibility, not a full pagination audit.
- Original sources, IDs, registries, shared styles/scripts, worksheets, and
  `who-owns-type` are preserved. Essay five is excluded from this release. The source-precision/recall section is unchanged.
- Backups of the current manual edits, per-guide diffs, hashes, and captures:
  `artifacts/guide-checks/essay-audit-2026-10-29/`.
- Release checks and deployment evidence are saved under
  `artifacts/guide-checks/publish-audit-2026-10-29/` in the main workspace.
  Hosted verification is pending deployment.
