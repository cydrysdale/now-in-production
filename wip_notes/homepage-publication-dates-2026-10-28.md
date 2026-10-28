# Homepage publication dates — 2026-10-28

The author requested publication dates instead of edited dates on homepage cards.
Both the JavaScript cards and generated static fallbacks now display
`guide:published` and sort by it, newest first. Equal dates retain the existing
URL tie-breaker. `guide:updated` remains unchanged as separate edit metadata.

## Publication dates and their sources

| Guide | First recorded publication | Evidence |
| --- | --- | --- |
| RGB → CMYK | 2025-08-18 | Author confirmed first publication in a different repository on August 18, 2025. This predates the current repository's launch. |
| Typography Inc. | 2025-09-10 | Launch commit `350025f` contains the original root-level page and lists it on the homepage. |
| LLM Kitchen | 2026-02-25 | Commit `b88aa71` changes the registry status from WIP to published. |
| Thinking in Systems 01 | 2026-10-26 | Commit `785cabe` adds the published page and registry entry. |
| Thinking in Systems 02 | 2026-10-27 | Commit `1896f43` publishes the second essay. |
| Thinking in Systems 03 | 2026-10-28 | Commit `7830a00` changes the third essay from WIP to published. |

The RGB → CMYK date is supplied by the author. The remaining dates use the
calendar dates recorded with these commits. They are historical publication
records, not a fresh audit of deployment timestamps. Typography
later became WIP during the site reorganization and returned to published on
2026-03-09; the first publication date is retained. Draft creation and edited
dates are not used as substitutes for publication dates.

## Maintenance

- Added `guide:published` to the six published pages; no publication date was
  assigned to the essay-four WIP draft.
- `maintain.py` requires a valid publication date for published guides and uses
  it to generate and order homepage snapshots. It never invents a date during
  sync. Withdrawal or republication does not reset the first-publication date.
- Updated the lesson template comment and authoring documentation. Adjusted
  existing lifecycle-test fixtures to supply publication metadata.
- Refreshed edited snapshots for essays one–three; their body content is unchanged.

## Verification

- All seven existing maintenance workflow tests passed.
- Metadata, local links, image targets and generated-content checks passed.
- Browser smoke checks passed for the three published series lessons and the
  homepage, including WIP filtering and network/no-JavaScript fallbacks.
- A separate browser check verified the displayed dates and order over HTTP,
  direct-file access, disabled JavaScript, registry failure, and individual
  guide-fetch failure. Serving an edited date of 2099 for the LLM guide did not
  change its displayed publication date or position.
- Inspected desktop/light and mobile/dark homepage captures. No mobile overflow
  or page-script errors were found. Evidence and before copies are under
  `artifacts/guide-checks/homepage-publication-dates-2026-10-28/`.
- Guide bodies, edited dates, original essay sources and registry states are
  preserved. Essay four remains WIP and absent from the homepage.

Changes are local and uncommitted. No push or deployment was requested or performed.

Author correction: changed RGB → CMYK to 2025-08-18 and regenerated the homepage
cards. Metadata/local-link and whitespace checks passed; the generated card shows
`Published 2025-08-18`. The existing browser checks cover the unchanged rendering
logic and were not repeated for this date-only correction.
