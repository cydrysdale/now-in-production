# Now in Production

This repo holds the files for **Now in Production**, a small website of practical guides about design, production, and AI.

You can read it here:

`https://cydrysdale.github.io/now-in-production/`

The project is intentionally simple. The site is plain HTML, CSS, and JavaScript served on GitHub Pages.

Some of the guides currently in here:

- `how-llms-work.html`
- `rgb-to-cmyk-guide.html`
- `who-owns-type.html`

If you are just visiting, the main thing to know is that this repo is the site. There is not a separate app, CMS, or build system behind it.

## A few notes for code assistants

The homepage is [index.html](/Users/chris.drysdale/Documents/projects/now-in-production/index.html). It reads [guides/guides.json](/Users/chris.drysdale/Documents/projects/now-in-production/guides/guides.json), fetches each published guide, and builds the guide cards from metadata inside each guide file.

The guides live in [guides/](/Users/chris.drysdale/Documents/projects/now-in-production/guides). Shared styles live in [assets/css/](/Users/chris.drysdale/Documents/projects/now-in-production/assets/css). Shared scripts live in [assets/js/](/Users/chris.drysdale/Documents/projects/now-in-production/assets/js). Images and Open Graph assets live in [images/](/Users/chris.drysdale/Documents/projects/now-in-production/images).

Each guide should keep its basic metadata intact, especially:

- `<title>`
- `meta name="description"`
- `meta name="guide:category"`
- `meta name="guide:updated"`
- `meta property="og:image"`

In [guides/guides.json](/Users/chris.drysdale/Documents/projects/now-in-production/guides/guides.json), `published` means the guide appears on the homepage and `wip` means it stays hidden.
