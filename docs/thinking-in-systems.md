# Building the Thinking in Systems lessons

The series shares an editorial shell, typography, navigation, and a few optional figure patterns. Each essay keeps its own argument and structure. There is no required number of chapters, visuals, or interactions.

The website remains plain HTML/CSS/JS. These optional authoring tools update committed files; GitHub Pages does not run them and needs no build step.

## Where things live

| File | Purpose |
| --- | --- |
| `guides/thinking-in-systems.json` | Series title, five lesson slots, lesson titles, URLs, and statuses |
| `templates/thinking-in-systems/lesson.html` | Clean page shell, metadata, Home links, contents, theme, references, and footer |
| `templates/thinking-in-systems/brief.md` | Review prompts copied into each new lesson's brief by `maintain.py new` |
| `templates/thinking-in-systems/components.html` | Optional worked example, comparison, research note, and takeaway snippets |
| `assets/css/thinking-in-systems.css` | Shared editorial design and figure styles |
| `assets/js/thinking-in-systems.js` | Reading time and grouped contents; safe to include on other pages |
| `wip_notes/thinking-in-systems-NN/source.md` | Original essay, preserved verbatim |
| `wip_notes/thinking-in-systems-NN/brief.md` | Editorial decisions, visual plan, source review, author approval, and QA notes |
| `wip_notes/thinking-in-systems-NN/edited.html` | Saved edited copy; read the live page in `guides/` for preview |
| `tools/guides/maintain.py` | Create drafts, synchronize navigation/cards, and validate publication files |
| `tools/guides/smoke.mjs` | Repeatable browser checks |
| `wip_notes/thinking-in-systems-handoff.md` | Dated session handoff: completed work, local versus live state, remaining work and next steps |

## Start a session with the series context

Read the [latest handoff](../wip_notes/thinking-in-systems-handoff.md), then check the current manifest and Git status. The handoff describes a point in time; it does not override newer files or user instructions. Use the edited pages for current wording and the lesson briefs for editorial decisions. Preserve unrelated work and review existing publication authorization before asking for it again.

The series has introduced these complementary tools:

| Lesson | Question or tool already introduced | Connection to preserve |
| --- | --- | --- |
| [01: justified trust](../guides/when-ai-gets-the-right-answer.html#trust) | Claim → evidence → confidence; correctness alone does not establish reliability. | New recommendations and diagnoses still need supporting evidence. |
| [01: failure investigation](../guides/when-ai-gets-the-right-answer.html#diagnostic-title) | Source documents → authority & scope → retrieval & context → interpretation → answer & verification. | These are places to investigate. Conflicting guidance and model capability are possible causes, not additional stages. |
| [02: problem framing](../guides/a-better-prompt-wont-fix-the-wrong-problem.html#framing-worksheet-title) | Define the desired outcome, test assumptions and choose the system boundary. | When answer reliability is the problem, use lesson one's diagnostic within that boundary. The brief does not replace the diagnostic. |
| [03: information-dependent failures](../guides/all-the-information-none-of-the-context.html#context-fig-4) | Source → organization → retrieval → application. | Organization expands authority/scope to include record relationships. Application combines interpretation with answer verification. Source and retrieval retain their roles. |

Links use stable IDs, not figure numbers. Lesson three's `context-fig-4` is now displayed as Fig. 07 after new figures were inserted. Keep existing IDs when renumbering, and recheck visible figure references when adding or removing figures. The manifest determines whether a lesson is public; a local link in this map does not imply publication.

## 1. Preserve the essay and create a draft

Save the supplied essay as UTF-8 Markdown. From the repository root, substitute the actual title, slug, description, and essay path:

```bash
python3 tools/guides/maintain.py new \
  --number 2 \
  --slug your-lesson-slug \
  --title "Your lesson title" \
  --description "A short, specific description of this lesson." \
  --essay /path/to/essay.md
```

The command copies the source bytes without changing wording or line endings, creates a clean HTML page and review brief, and sets the lesson to `wip`. The brief includes continuity, source, visual, validation and handoff prompts from `templates/thinking-in-systems/brief.md`. Fill these in as part of the existing authoring work; they are not additional approval stages. The command refuses to overwrite an existing lesson or notes folder. It does not adapt the essay automatically.

The default site image is a temporary placeholder. Supply `--image images/your-lesson.png` if the final Open Graph image already exists. Every published lesson needs suitable art under `images/`; use a 1200 × 630 PNG for social sharing and keep an SVG source when appropriate.

The three series states are:

- `planned`: the slot exists, with no URL. Future topics need not be invented.
- `wip`: a page exists, with `noindex,follow`; it stays off homepage cards and other lessons’ public links.
- `published`: the page appears on the homepage and in series navigation.

WIP is a navigation status, not access control. A committed draft can still be opened directly on a static host. Keep confidential material out of the repository.

## 2. Review the essay before assembling the page

Record the intended audience, central question, and practical takeaway in `brief.md`. Propose the outline and any substantive edits with the author before implementing those changes.

Preserve the author’s voice. Use a light editorial pass to reduce repetition, clarify transitions, and correct claims. Keep philosophical arguments distinct from experimental findings and engineering recommendations. A fictional example should be identified as fictional; a schematic should name its assumptions and limits.

Keep the author's established preferences: educational presentation, generalized assistant names, and em dashes where used. Do not apply a blanket punctuation or hedging cleanup. Preserve deliberate humor and exact wording the author has supplied.

Group related sentences into paragraphs that develop one thought, often two to four sentences. Keep short standalone paragraphs for deliberate questions, turns and conclusions. Review the rhythm on desktop and mobile; avoid imposing a fixed word count or separating every sentence for emphasis.

When a lesson introduces a diagnostic or changes its labels, compare it with earlier lessons. Link to the original figure and explain what is retained, combined or expanded. Keep that connection in any standalone worksheet too. Distinguish the stages being inspected from possible causes of failure; changing the labels should not make earlier checks disappear.

Verify references against primary sources when available. Check the title, authors, date, URL, and whether the source actually supports the adjacent claim. Preserve disagreements or uncertainty where the evidence does not settle the question. Record corrections and unresolved questions in the brief. The automated checks do not perform factual or philosophical review.

Record the level of verification: full text, abstract, publisher metadata or inaccessible source. For experimental claims, preserve the task/model/setup limits. For metrics, check what is being counted and what reference judgments the calculation requires; a correct answer key and a set of relevant passages serve different purposes.

### Review the prose as a connected argument

Use a dedicated prose pass during editing, then revisit it after the figures are
in place. Grammar and paragraph grouping alone do not catch repeated arguments.

- Give each section a distinct contribution. Trim repeated thesis statements,
  announcements such as “the broader insight is what matters,” and conclusions
  that restate the same lesson several times. A heading should pose a question
  the section actually answers.
- Let concrete records, people and decisions carry explanations where possible.
  Vary historical introductions so every section does not begin with a name,
  year and publication title. Keep the historical connections and source scope.
- Read the prose together with its figures. Shorten adjacent text when a figure
  now carries the same explanation, while retaining accessible text equivalents
  and the context needed to interpret it.
- Check the recurring example as a continuous story. Signal a new hypothetical
  rather than silently changing an established fact. If an example is meant to
  demonstrate a conflict, make sure its conditions really are incompatible.
- Compare earlier lessons for voice and continuity without repeating their whole
  argument. Preserve qualifications that affect a conclusion, and distinguish
  them from transitions or caveats that add no information.

The [2026-10-28 copy review](../wip_notes/thinking-in-systems-03/copy-review-2026-10-28.md)
contains concrete examples. Its line references describe the pre-edit pages;
use the current guide and lesson brief for final wording.

### Review voice and humor in context

The author's voice includes dry observations about familiar work situations,
conversational asides, parentheses and sentences beginning with “And.” These
are not automatically filler. Concision should leave room for personality; the
shortest version is not always the best one.

Humor should arise from the situation being explained and keep the underlying
claim clear. If a joke needs a confusing metaphor to work, reconsider it rather
than explaining the metaphor. In this session, jokes about a folder *name*
expiring obscured the real issue: what happens when the license expires. The
author supplied a different aside about that issue. Preserve the final wording
in the lesson brief rather than promoting rejected proposals into style rules.

For optional voice or humor changes, use the following review format when
working through suggestions with the author:

1. Show the current passage and the proposed passage with enough surrounding
   text to judge the flow. Say whether the edit adds, replaces or removes words.
2. Explain the effect briefly, including a concern when the joke or transition
   does not work. Prefer the smallest useful change; the deadline joke here was
   resolved by changing only “by next Friday” to “by end of day.”
3. When the author requests one-at-a-time review, present one pending change and
   wait for their decision. A wording question remains a proposal in that
   process. Apply approved wording exactly, refresh the edited snapshot, record
   the decision, and move to the next item.

This is a review format, not an additional approval stage for work already
authorized. A batch of approved copy fixes can be implemented together. Do not
infer permanent bans on punctuation, a required joke count, or a requirement
that every aside be brief from individual decisions. Read humor with its setup
and following explanation before proposing another nearby joke.

## 3. Make a small visual plan

For each proposed visual, write down the concept it teaches, its evidence or assumptions, and a text equivalent. Use a visual when it makes a distinction, relationship, or consequence easier to grasp. The lesson can have as many or as few as its argument needs.

- Prefer HTML/CSS or SVG for diagrams, comparisons, and tables; keep text selectable and accessible.
- Use native `details`/`summary` when revealing evidence changes the reader’s assessment. The explanation must still work without JavaScript and in print.
- Put optional research terminology in a clearly titled research note. Define terms before using them.
- Keep the main reading path calm: no scores, rewards, or decorative interactions.
- Size diagram labels independently of the drawing. The existing knowledge figure uses `clamp(.8125rem, 4cqi, .9375rem)` (13–15px at the default text size). Treat this as a restrained label pattern, not a universal size for headings or body text. Verify new diagrams at their smallest rendered width.

Copy only useful snippets from `components.html`. Replace every TODO, assign unique IDs, and keep captions explicit about limitations. Figure numbering is editorial and should follow reading order.

Before polishing the layout, read each proposed figure as an argument: what do its labels, groupings and arrows imply, and does the evidence support its conclusion? Check for false choices between compatible approaches, or an inference from a failed search to a record's nonexistence. Review the caption together with the drawing; a caveat below it does not repair a contradictory label above it.

After inserting the figures, repeat the connected-prose check above. An
illustration can make previously necessary explanation redundant; adding it
should not leave the reader working through the same example twice in a row.

Keep a short record of the recurring example's facts in the brief. Compare dates, scope, permissions and unresolved questions across the prose, figures and worksheets. Where an illustration intentionally changes an assumption, label that change. Maintain the same conceptual connections in the on-page exercise, blank download and completed export. Shared worksheet JavaScript currently includes lesson-two-specific copy; do not copy that markup into a new lesson and assume the export is generic.

## 4. Assemble and preview

Edit the HTML in `guides/`. The template is a starter, not a live include: later shell changes require reviewing existing pages. Shared CSS/JS changes affect every lesson, so run the browser check across all published lessons after changing them.

Use sections with stable, descriptive heading IDs. `data-toc-label` supplies a short contents label; put `data-toc-group` only on the first heading of a group. Keep the no-JavaScript `.reading-route` links consistent with the actual sections. Preserve Home links, theme controls, the reading-time element, and both generated marker pairs.

Keep the manifest title, `<title>`, visible `<h1>`, and `og:title` aligned. Inline emphasis and line breaks in the h1 are fine. Update the description and `og:description`, canonical and `og:url`, lesson category and order, image, and `guide:updated` when editing. The updated date is a deliberate editorial choice; sync does not silently change it.

Add a concise, lesson-specific `keywords` meta tag during assembly; the starter does not infer keywords from the title.

```bash
python3 tools/guides/maintain.py sync
python3 tools/guides/maintain.py check
python3 -m http.server 8000
```

Open the draft at `http://localhost:8000/guides/your-lesson-slug.html`. Stop the preview server when done.

`sync` updates series-owned entries in `guides/guides.json`, five-part footers, previous/next links to published lessons, robots metadata, and static homepage cards for **all** published guides. It preserves non-series registry entries. Edit the series manifest to change a series lesson’s status; edit `guides/guides.json` directly only for other guides. Do not hand-edit the generated blocks between `SERIES_NAV` or `GUIDE_CARDS` markers.

Static navigation and cards remain usable through `file://`, without JavaScript, or if the homepage registry request fails. Live HTTP card generation still reads each guide’s metadata.

## 5. Review and run the checks

The lightweight Python check requires only Python 3.9+:

```bash
python3 tools/guides/maintain.py check
```

It checks required metadata, date format, local image and link targets, heading IDs, title consistency, preserved source copies, and stale generated content. Published series pages cannot contain TODOs, template tokens, or the default placeholder image. It does not verify external links, source claims, visual quality, or author approval.

Install the optional browser tooling once (Node.js 20+):

```bash
npm ci --prefix tools/guides
cd tools/guides
npx playwright install chromium
cd ../..
```

Run checks for a draft or for all published series lessons:

```bash
npm --prefix tools/guides run smoke -- --lesson 2 --screenshots artifacts/guide-checks
npm --prefix tools/guides run smoke -- --screenshots artifacts/guide-checks
```

Screenshots are saved relative to the repository root and ignored by Git. The script starts and closes its own local server. It tests homepage publication filtering and fallbacks, Home and contents navigation, reading time, light/dark persistence, widths from 320–1440px, the existing diagram’s type limits, keyboard disclosures, no-JavaScript use, and basic print visibility. Google Fonts requests are stubbed to make the run independent of that service. Manually inspect screenshots, figure meaning, contrast, and print output as well.

To use an installed browser instead of downloading Chromium, set `GUIDE_BROWSER_EXECUTABLE` to its executable path, for example on macOS:

```bash
GUIDE_BROWSER_EXECUTABLE='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' \
  npm --prefix tools/guides run smoke
```

If changing the maintenance tool itself, also run its isolated publication-transition tests:

```bash
python3 -m unittest discover -s tools/guides -p 'test_*.py' -v
```

## 6. Save the reviewed copy and publish

Record the author’s approval and completed source/browser review in `brief.md`. A saved snapshot alone never means approval. Keep `source.md` unchanged; record any later supplied source as a separate version.

When the lesson is ready, change its status to `published` in `guides/thinking-in-systems.json`, then:

```bash
python3 tools/guides/maintain.py sync
python3 tools/guides/maintain.py snapshot --number 2
python3 tools/guides/maintain.py check
npm --prefix tools/guides run smoke
```

Review the Git diff: include the page, final image, source/review files, manifest, registry, affected series footers, and homepage. Commit and push through the repository’s normal publication workflow. The maintenance commands never commit, push, or deploy. To withdraw a lesson from navigation, set it back to `wip`, run sync and checks, and publish that change.

After an authorized release, check the hosted guide's actual content, image and downloads, homepage card and previous/next links. Record the commit and verification date in the brief. A successful push and a local `published` flag do not establish that hosting has finished deploying. Use authorization already given; do not add another approval request merely because the work spans sessions.

Before ending a session, update the handoff with completed editorial work, checks and their limits, outstanding work, and the separate local/committed/live states. Name the files to read next and the lesson slot to use. Do not invent the next essay's topic or pre-create its notes folder; `maintain.py new` expects to create that folder once the source is available. Keep local rollback copies and unrelated work out of the publication commit, and stop temporary preview servers.
