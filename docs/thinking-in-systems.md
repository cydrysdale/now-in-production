# Building the Thinking in Systems lessons

The series shares an editorial shell, typography, navigation, and a few optional figure patterns. Each essay keeps its own argument and structure. There is no required number of chapters, visuals, or interactions.

The website remains plain HTML/CSS/JS. These optional authoring tools update committed files; GitHub Pages does not run them and needs no build step.

## Where things live

| File | Purpose |
| --- | --- |
| `guides/thinking-in-systems.json` | Series title, five lesson slots, lesson titles, URLs, and statuses |
| `templates/thinking-in-systems/lesson.html` | Clean page shell, metadata, Home links, contents, theme, references, and footer |
| `templates/thinking-in-systems/components.html` | Optional worked example, comparison, research note, and takeaway snippets |
| `assets/css/thinking-in-systems.css` | Shared editorial design and figure styles |
| `assets/js/thinking-in-systems.js` | Reading time and grouped contents; safe to include on other pages |
| `wip_notes/thinking-in-systems-NN/source.md` | Original essay, preserved verbatim |
| `wip_notes/thinking-in-systems-NN/brief.md` | Editorial decisions, visual plan, source review, author approval, and QA notes |
| `wip_notes/thinking-in-systems-NN/edited.html` | Saved edited copy; read the live page in `guides/` for preview |
| `tools/guides/maintain.py` | Create drafts, synchronize navigation/cards, and validate publication files |
| `tools/guides/smoke.mjs` | Repeatable browser checks |

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

The command copies the source bytes without changing wording or line endings, creates a clean HTML page and review brief, and sets the lesson to `wip`. It refuses to overwrite an existing lesson or notes folder. It does not adapt the essay automatically.

The default site image is a temporary placeholder. Supply `--image images/your-lesson.png` if the final Open Graph image already exists. Every published lesson needs suitable art under `images/`; use a 1200 × 630 PNG for social sharing and keep an SVG source when appropriate.

The three series states are:

- `planned`: the slot exists, with no URL. Future topics need not be invented.
- `wip`: a page exists, with `noindex,follow`; it stays off homepage cards and other lessons’ public links.
- `published`: the page appears on the homepage and in series navigation.

WIP is a navigation status, not access control. A committed draft can still be opened directly on a static host. Keep confidential material out of the repository.

## 2. Review the essay before assembling the page

Record the intended audience, central question, and practical takeaway in `brief.md`. Propose the outline and any substantive edits with the author before implementing those changes.

Preserve the author’s voice. Use a light editorial pass to reduce repetition, clarify transitions, and correct claims. Keep philosophical arguments distinct from experimental findings and engineering recommendations. A fictional example should be identified as fictional; a schematic should name its assumptions and limits.

Verify references against primary sources when available. Check the title, authors, date, URL, and whether the source actually supports the adjacent claim. Preserve disagreements or uncertainty where the evidence does not settle the question. Record corrections and unresolved questions in the brief. The automated checks do not perform factual or philosophical review.

## 3. Make a small visual plan

For each proposed visual, write down the concept it teaches, its evidence or assumptions, and a text equivalent. Use a visual when it makes a distinction, relationship, or consequence easier to grasp. The lesson can have as many or as few as its argument needs.

- Prefer HTML/CSS or SVG for diagrams, comparisons, and tables; keep text selectable and accessible.
- Use native `details`/`summary` when revealing evidence changes the reader’s assessment. The explanation must still work without JavaScript and in print.
- Put optional research terminology in a clearly titled research note. Define terms before using them.
- Keep the main reading path calm: no scores, rewards, or decorative interactions.
- Size diagram labels independently of the drawing. The existing knowledge figure uses `clamp(.8125rem, 4cqi, .9375rem)` (13–15px at the default text size). Treat this as a restrained label pattern, not a universal size for headings or body text. Verify new diagrams at their smallest rendered width.

Copy only useful snippets from `components.html`. Replace every TODO, assign unique IDs, and keep captions explicit about limitations. Figure numbering is editorial and should follow reading order.

## 4. Assemble and preview

Edit the HTML in `guides/`. The template is a starter, not a live include: later shell changes require reviewing existing pages. Shared CSS/JS changes affect every lesson, so run the browser check across all published lessons after changing them.

Use sections with stable, descriptive heading IDs. `data-toc-label` supplies a short contents label; put `data-toc-group` only on the first heading of a group. Keep the no-JavaScript `.reading-route` links consistent with the actual sections. Preserve Home links, theme controls, the reading-time element, and both generated marker pairs.

Keep the manifest title, `<title>`, visible `<h1>`, and `og:title` aligned. Inline emphasis and line breaks in the h1 are fine. Update the description and `og:description`, canonical and `og:url`, lesson category and order, image, and `guide:updated` when editing. The updated date is a deliberate editorial choice; sync does not silently change it.

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
