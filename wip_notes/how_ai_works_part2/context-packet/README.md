# How AI Works Part 2: Context Packet

> **Status: Working draft.** This packet supports iterative guide development using Claude Code CLI. Refine as needed during drafting.

## What This Is

A structured context packet for building the "How AI Works Part 2: Running the Kitchen" guide. It separates stable guidance from section-specific inputs so that any drafting session starts with a clear, consistent foundation.

This packet is designed for file-based drafting in Claude Code CLI, not for Claude web app sessions. It assumes agentic review loops, iterative revision, and section-by-section generation.

## Packet Logic

The packet separates five concerns:

1. **What the guide is about** — thesis, audience, learning goals, and how it connects to Part 1
2. **What the guide sounds like** — voice, tone, teaching style, and patterns drawn from existing published guides
3. **What the guide contains** — section structure, goals per section, and the running example that threads through
4. **How the guide gets built** — drafting workflow, revision passes, review criteria, and quality checks
5. **What to watch out for** — known risks, hallucination traps, and common failure modes for this kind of content

## File Map

### Core Context (load for every drafting session)

- `01-project-brief.md` — What this guide is, who it's for, what it connects to, and what done looks like
- `02-thesis-and-framework.md` — The core argument, the four-discipline framework, and the kitchen metaphor system (**canonical definitions live here**)
- `03-voice-tone-style.md` — Writing voice, teaching patterns, style rules, and hard tradeoff decisions
- `04a-section-goals.md` — Section purposes, key lessons, running example arc, and cumulative artifacts table

### Drafting Support (load when actively generating or reviewing)

- `04b-section-content.md` — Theory summaries, failure example openers, interactive module descriptions, and exercise specs per section
- `05-interactive-and-visual-plan.md` — Full interactive module specifications, visual elements, and instructional design decisions
- `06-drafting-workflow.md` — How to draft section-by-section in Claude Code CLI, including revision and review passes
- `07-quality-bar.md` — Acceptance criteria, review checklists, and the definition of done
- `08-terminology-and-guardrails.md` — Usage guardrails, terms to avoid, claims to be careful with, escalation rules, and hallucination-prone areas
- `09-source-context.md` — Source materials, what to draw from, and what not to reteach from Part 1

### Reference

- `10-open-questions.md` — Decisions still needed, assumptions made, mid-project file changes log, and areas for manual refinement

## How to Use This Packet

**Before any session — check `10` first:**
Scan `10-open-questions.md` for recent decisions and mid-project file changes. If a stable context file was updated since your last session, it will be logged there.

**Starting a new drafting session:**
Load `01`, `02`, `03`, and `04a` as context. These are the stable foundation.

**Drafting a specific section:**
Also load `04b` (section content specs), `05` (for interactive specs), `06` (for workflow), and `08` (for guardrails).

**Running a review pass:**
Load `03` (voice), `07` (quality bar), and `08` (guardrails). Review against these.

**Checking overall coherence:**
Load `02` (thesis) and `04a` (section goals). Verify that section drafts serve the framework and advance the running example.

## What This Packet Does Not Do

- It does not contain the guide itself. It supports drafting the guide.
- It does not replace editorial judgment. It encodes enough structure that drafts start closer to right.
- It does not lock in every decision. Items marked OPEN QUESTION or ASSUMPTION are meant to be refined.
