# Now in Production

Static HTML guides (GitHub Pages–friendly).

## Structure

- `index.html` — homepage; builds guide cards by fetching each guide and reading its `<meta>` tags.
- `guides/` — individual guide pages.
- `assets/css/` — shared CSS.
- `assets/js/` — shared JS (`core.js`) and optional widgets (`widgets.js`), plus page-specific helpers like `sandbox.js`.
- `images/` — shared images/icons (referenced by pages and OpenGraph meta).

## Add a Guide

1. Create `guides/<your-guide>.html`.
2. Include shared assets (note the `../`):
   - CSS: `../assets/css/style.css`
   - Core JS: `../assets/js/core.js`
   - Optional widgets: `../assets/js/widgets.js` (only if the page uses rule cards, feature lab, etc.)
3. Add required metadata so the homepage can build a card:
   - `<title>…</title>`
   - `<meta name="description" content="…">`
   - `<meta name="guide:category" content="…">`
   - `<meta name="guide:updated" content="YYYY-MM-DD">`
   - `<meta property="og:image" content="…">`
4. Register it in `guides/guides.json` with `status: "published"` (or `"wip"` to hide it from the homepage).

## Local Preview

Run a simple static server from the repo root:

`python3 -m http.server 8000`

Then open `http://localhost:8000/`.

