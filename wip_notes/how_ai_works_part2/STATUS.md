# How AI Works Part 2 — Project Status

> Last updated: 2026-03-23

## Current Phase

**Phase 1 drafting — Part 2B Sections 6–8 drafted.** Sections 6, 7, and 8 were drafted, reviewed (editorial + section-boundary + interactive-alignment; Section 8 also got running-example-consistency), and revised in a single session using the review-orchestrator agent. Section 6 resolves the Part 2A final-state artifact open item by naming the bundle "kitchen setup." Two Part 2B sections remain (9–10). Two Part 2A polish items still carry forward: Section 1 taxonomy wobble and Kitchen Inspection sidebar placement.

## Decisions Log

| Decision | Status | Date |
|---|---|---|
| Guide splits into Part 2A + Part 2B | Decided | 2026-03-14 |
| Audience is not blank slate | Confirmed | 2026-03-14 |
| Case study is a separate future guide; document process as we go | Decided | 2026-03-14 |
| Section 0 opener uses catering scenario, not competitive analysis | Decided | 2026-03-17 |
| Acme/Bolt/Cirrus as canonical competitors | Decided | 2026-03-23 |
| Context packet needs voice-preservation rules alongside structural rules | Decided | 2026-03-19 |
| Section 5 tasting system components: quality markers, thresholds, known failure modes, regression checks, walk-away line | Decided | 2026-03-23 |
| Interactive module prioritization | Deferred | — |
| Part 2A final-state artifact named "kitchen setup" | Decided | 2026-03-23 |
| Visual assets (banners, OG cards) | Deferred | — |

## Part 2A: The Building Blocks (Sections 0–5)

| Section | Draft | Review | Packet Updated | Regeneration Test |
|---|---|---|---|---|
| 0 — From One Cook to a Full Kitchen | v3 done | Reviewed (section + editorial) | Yes (2 rounds) | v2 regressed on voice; v3 with revised packet approved to proceed |
| 1 — The Four Disciplines | v2 done | v1 reviewed (section + editorial); v2 addresses all feedback | Yes | v2 regenerated — all four review issues resolved |
| 2 — The Complete Order | v2 done | v1 reviewed (section + editorial); v2 addresses all feedback | Yes | v2 regenerated — count mismatch, interactive alignment, Section 6 boundary, meter framing all fixed |
| 3 — Plating Standards & House Rules | v1 done | Editorial review done; revised in-session | — | — |
| 4 — Station Assignments | v1 done | Editorial review done; revised in-session | — | — |
| 5 — The Tasting System | v1 done | Editorial review done; revised in-session | — | — |

## Part 2B: The Disciplines in Action (Sections 6–10)

| Section | Draft | Review | Packet Updated | Regeneration Test |
|---|---|---|---|---|
| 6 — Mise en Place (+ bridge) | v1 done | Editorial + section-boundary + interactive-alignment; revised in-session | — | — |
| 7 — The House Philosophy | v1 done | Editorial + section-boundary + interactive-alignment; revised in-session | — | — |
| 8 — The Recipe Card | v1 done | Editorial + section-boundary + interactive-alignment + running-example-consistency; revised in-session | — | — |
| 9 — The Pre-Service Meeting | Not started | — | — | — |
| 10 — Running the Kitchen | Not started | — | — | — |

## Other Deliverables

| Item | Status |
|---|---|
| Context packet | Updated 2026-03-19 — 7 voice-preservation changes across `03`, `04a`, `05`, `06`, `08` |
| Process log (`process-log.md`) | Updated — Phase 11 entry covers 2026-03-23 Part 2B drafting session |
| Draft directory structure (`drafts/part-2a/`, `drafts/part-2b/`) | Created |
| Kitchen Inspection sidebars (2–3 total) | Not started — not blocking Part 2B drafting, but still required before assembly |
| Interactive module content specs | Part 2A (0–5) and Part 2B (6–8) drafted inline with section prose |
| Interactive module JS implementation | Not started |
| Part 2A HTML assembly | Not started |
| Part 2B HTML assembly | Not started |
| Part 2A banner / OG image | Not started |
| Part 2B banner / OG image | Not started |
| `guides.json` registration | Not started |

## Blockers

None currently.

## Next Actions

1. Draft Section 9 (The Pre-Service Meeting)
2. Draft Section 10 (Running the Kitchen — Synthesis)
3. Fix the Section 1 hidden-work crosswalk taxonomy wobble
4. Place Kitchen Inspection sidebars (2–3 total across Part 2A)
5. Run a voice/coherence check across the full Part 2A + 2B sequence before HTML assembly
6. Cross-section continuity review across Part 2B (Sections 6–10) once all are drafted
7. Validate "kitchen setup" naming across the full sequence
