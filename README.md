# Now in Production

This repo holds the files for **Now in Production**, a small website of practical guides about design, production, and AI.

You can read it here:

`https://cydrysdale.github.io/now-in-production/`

The project is intentionally simple. The site is plain HTML, CSS, and JavaScript served on GitHub Pages.

Some of the guides currently in here:

- `how-llms-work.html`
- `rgb-to-cmyk-guide.html`
- `who-owns-type.html`
- `when-ai-gets-the-right-answer.html`

If you are just visiting, the main thing to know is that this repo is the site. There is not a separate app, CMS, or build system behind it.

## A few notes for code assistants

The homepage is [index.html](index.html). It reads [guides/guides.json](guides/guides.json), fetches each published guide, and builds the guide cards from metadata inside each guide file.

The homepage also contains static card snapshots inside `#guideCards`, so opening `index.html` directly, disabling JavaScript, or a failed registry request still shows the published guides. After changing guide metadata or publication status, run `python3 tools/guides/maintain.py sync` to refresh these snapshots and series navigation, then `python3 tools/guides/maintain.py check` to validate them. Use `<h3 class="guide-card-title">` for card titles under the Guides `<h2>`.

The guides live in [guides/](guides/). Shared styles live in [assets/css/](assets/css/). Shared scripts live in [assets/js/](assets/js/). Images and Open Graph assets live in [images/](images/).

Each guide should keep its basic metadata intact, especially:

- `<title>`
- `meta name="description"`
- `meta name="guide:category"`
- `meta name="guide:updated"`
- `meta property="og:image"`

In [guides/guides.json](guides/guides.json), `published` means the guide appears on the homepage and `wip` means it stays hidden from navigation. For Thinking in Systems lessons, edit status in [the series index](guides/thinking-in-systems.json) and run sync; the matching registry entries are maintained automatically.

## Creating the next Thinking in Systems lesson

Follow the [authoring playbook](docs/thinking-in-systems.md) for the essay → editorial review → visual plan → page → factual/browser review → publication process. It includes the clean template, source preservation, optional components, draft creation command, and reusable checks. The site still has no build step; Python and Playwright are optional authoring tools.
