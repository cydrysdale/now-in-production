# How AI Works Part 2: Theory Outline

## Working Position

This guide is the sequel to `guides/how-llms-work.html`.

Part 1 explains the machine-level foundations:

- prediction over tokens
- context limits and drift
- why prompting matters
- why workflows beat one-shot prompting
- why human verification remains necessary

Part 2 should assume that foundation and move up a level. The subject is no longer "how the model works" but "how useful AI work is structured when the task lasts longer than a single back-and-forth."

This is a theory-first guide with interactive reinforcement followed by practical application. It should reference the basics only as prior knowledge, not reteach them.

## Core Thesis

The central theoretical move in part two is this:

Prompting is not one skill. Once work becomes multi-step, long-running, or delegated, "prompting" splits into several different disciplines:

- shaping a request clearly
- shaping the information environment
- shaping what the system should optimize for
- shaping a specification that can survive without live supervision

The guide should argue that most AI failures at this level are not failures of raw intelligence. They are failures of structure:

- incomplete problem statements
- vague or uncheckable definitions of done
- unspoken tradeoffs
- overloaded context
- missing escalation rules
- missing evaluation loops

## Guide Goals

By the end of part two, the reader should be able to:

- distinguish between conversational prompting and delegated execution
- understand the difference between prompt craft, context engineering, intent engineering, and specification engineering
- identify which layer a given failure belongs to
- define work in a way that can survive longer, more autonomous execution
- use structured checks to reduce the "technically correct but wrong" problem

## Structural Principles

- Basics are assumed. Refer back to part one instead of reteaching tokens, context windows, hallucinations, and iterative prompting.
- Theory comes first. Each major section introduces a conceptual model before any templates or tactics.
- Every theory section gets an interactive module.
- Every interactive module is followed by a practical application exercise.
- The practical layer should feel like "how to use the theory," not "copy this magic prompt."
- Avoid named tools, model versions, and company examples in the main theory.

## Suggested High-Level Arc

1. Bridge from part one: the limits of chat-style prompting
2. The four-discipline framework
3. The first new primitive: self-contained problem statements
4. The second new primitive: acceptance criteria
5. The third new primitive: constraint architecture
6. The fourth new primitive: decomposition and handoffs
7. The fifth new primitive: evaluation design
8. Context engineering as environment design
9. Intent engineering as encoded judgment
10. Specification engineering as the top-layer discipline
11. Closing synthesis: clear thinking made executable

---

## Section 0: Bridge From Part One

### Purpose

Create continuity with part one without repeating it.

### Theory To Introduce

Part one explained why AI needs:

- a clear ticket
- the right information on the counter
- staged workflows
- an expo check at the end

Part two should extend that logic:

- When the task becomes longer, more autonomous, or less supervised, the old "prompt, inspect, revise" loop becomes too fragile.
- The human can no longer assume they will catch problems in time.
- Any judgment previously supplied during the conversation now has to be encoded before the work begins.

The conceptual shift:

- Part one: how to get a better response
- Part two: how to design work that can hold together across multiple steps without constant rescue

### Interactive Module

`Interactive: Rescue Dependency`

Present a scenario where a user thinks a task is "well prompted," but the task only succeeds because the user keeps stepping in to:

- clarify missing context
- correct priorities
- redefine done
- stop a bad choice

The reader identifies which interventions were doing hidden structural work.

### Practical Application

`Exercise: Audit Your Last Successful AI Task`

Ask the reader to list the human interventions that made it succeed. Then sort those interventions into:

- context supplied midstream
- intent supplied midstream
- constraints supplied midstream
- acceptance checks supplied midstream

Key lesson: if the task only works when you babysit it, you do not yet have a delegable structure.

---

## Section 1: The Ceiling of Conversational Prompting

### Purpose

Explain why good chat prompting is real but insufficient.

### Theory To Introduce

Conversational prompting assumes:

- the human is present
- the human can inspect in real time
- the human can correct the system as it drifts
- the human can answer clarifying questions on demand

That means the human is quietly providing four hidden functions:

- missing context
- judgment about tradeoffs
- decomposition into next steps
- quality control

The theory point is that conversational prompting did not remove those functions. It only let the human perform them live inside the chat.

Once work extends beyond a tightly supervised exchange, those hidden functions must be externalized into artifacts.

### Interactive Module

`Interactive: Hidden Human Layers`

Show a simulated transcript where a task succeeds across six turns.

After each turn, the reader tags what the human actually contributed:

- request phrasing
- missing context
- acceptance criteria
- constraint correction
- escalation decision

The module should reveal that the "prompt" was only a small fraction of the actual control structure.

### Practical Application

`Exercise: Collapse a 6-Turn Chat Into a Single Brief`

Take a multi-turn example and ask the reader to compress the useful human interventions into a single starting brief.

Key lesson: the goal is not to sound smarter. The goal is to make fewer critical assumptions remain unstated.

---

## Section 2: The Four-Discipline Framework

### Purpose

Introduce the main theory stack that organizes the rest of the guide.

### Theory To Introduce

Prompting is an umbrella term hiding four distinct disciplines:

1. Prompt Craft
2. Context Engineering
3. Intent Engineering
4. Specification Engineering

These disciplines operate at different levels.

#### 1. Prompt Craft

The local skill of phrasing a task clearly in a specific interaction.

Main concern:

- how the request is expressed

Failure mode:

- vague, underspecified, poorly structured asks

#### 2. Context Engineering

The design of the information environment in which the task runs.

Main concern:

- what information is available, relevant, and visible at the right time

Failure mode:

- missing, noisy, stale, or poorly curated context

#### 3. Intent Engineering

The encoding of goals, values, tradeoffs, and decision boundaries.

Main concern:

- what the system should optimize for when multiple valid choices exist

Failure mode:

- work that is efficient but misaligned with what actually matters

#### 4. Specification Engineering

The writing of a complete, executable description of what should be produced, how it should be judged, and how the work should be staged.

Main concern:

- whether the task can survive across time without live supervision

Failure mode:

- work that begins plausibly but collapses under ambiguity, drift, or scope confusion

### Key Theory Claims

- These are not competing ideas. They stack.
- Higher layers depend on lower layers but are not reducible to them.
- A strong prompt cannot fix a missing intent framework.
- Rich context cannot fix a vague definition of done.
- A specification is not just a longer prompt. It is a more explicit contract.

### Interactive Module

`Interactive: Failure Layer Classifier`

Give the reader a set of failures and ask them to assign each one to the dominant layer:

- bad wording
- wrong source material loaded
- optimized for the wrong tradeoff
- no definition of done
- no escalation rule
- task too big for one uninterrupted run

### Practical Application

`Exercise: Diagnose Your Own AI Failure`

Reader picks a real failure and labels:

- what went wrong
- which layer was actually missing
- what artifact would have prevented it

Key lesson: diagnosis gets sharper when "prompting" is broken into layers.

---

## Section 3: Self-Contained Problem Statements

### Purpose

Introduce the first major primitive: defining a task so it is solvable without live backfilling.

### Theory To Introduce

Most requests rely on invisible shared context.

Humans tolerate this because other humans can infer a lot. AI systems also infer, but their inference is pattern completion rather than grounded understanding. That makes unstated assumptions dangerous.

A self-contained problem statement is not maximal detail. It is sufficient operational detail.

Theoretical components:

- the actual outcome, not just the activity
- the relevant background
- the audience or user
- the constraints
- the output form
- the definition of success
- the likely ambiguity points

Main distinction:

- conversational request: depends on the receiver to fill in gaps
- self-contained problem statement: carries enough of its own context to be plausibly executable

### Interactive Module

`Interactive: Gap Detector`

Show a casual request and let the reader uncover hidden omissions by clicking or revealing layers such as:

- audience
- timeframe
- source of truth
- quality standard
- constraints
- definitions

The module should end by showing how much of the task was implied but never stated.

### Practical Application

`Exercise: Rewrite a Casual Ask`

Take a rough request and rewrite it as a self-contained problem statement with explicit fields.

Key lesson: specificity is not verbosity. It is removal of critical ambiguity.

---

## Section 4: Acceptance Criteria and the Definition of Done

### Purpose

Explain why many outputs fail not because they are nonsense, but because they stop at the wrong point.

### Theory To Introduce

If "done" is vague, the system will choose its own stopping condition.

That produces the common middle state:

- polished enough to look plausible
- incomplete in ways that matter
- expensive to repair because the missing expectations were never encoded

Acceptance criteria are observer-verifiable checks. They should let a third party determine whether the output meets the bar without asking the original requester what they meant.

Theory distinctions:

- vague quality language versus observable criteria
- subjective preference versus functional requirement
- output existence versus output adequacy

### Interactive Module

`Interactive: Vague vs Checkable`

Give the reader a list of criteria and ask them to sort each into:

- vague
- partially checkable
- observer-verifiable

Examples can include:

- "make it strong"
- "keep it concise"
- "include three risks and a recommendation"
- "match the provided house style"

### Practical Application

`Exercise: Write 3 Acceptance Criteria`

Reader takes one real task and writes three checks that another person could verify without clarification.

Key lesson: the quality bar must be visible before the work begins, not only after disappointment.

---

## Section 5: Constraint Architecture

### Purpose

Show how to prevent the smart-but-wrong failure mode.

### Theory To Introduce

A task can be well described and still go wrong when multiple valid paths exist.

Constraint architecture makes decision boundaries explicit. It answers:

- what must happen
- what must never happen
- what should be preferred when there are several acceptable choices
- what should trigger escalation instead of autonomy

This section should frame constraints as a theory of controlled freedom:

- too few constraints and the system improvises into the wrong space
- too many constraints and the system becomes brittle or unusable

Constraint architecture is therefore not just rule listing. It is failure-mode prevention.

### Interactive Module

`Interactive: Failure Mode Mapper`

Present a task with subtle ways it could go wrong. Ask the reader to map each failure mode to one of four buckets:

- Must Do
- Must Not Do
- Prefer
- Escalate

The reveal should show that different failure types require different forms of control.

### Practical Application

`Exercise: Build a Four-Quadrant Constraint Sheet`

Reader chooses a high-stakes task and fills out:

- Must Do
- Must Not Do
- Prefer
- Escalate

Key lesson: most preventable failures were foreseeable but never encoded.

---

## Section 6: Decomposition and Handoffs

### Purpose

Explain why bigger tasks must be broken into verifiable pieces.

### Theory To Introduce

Complex work fails when treated as one uninterrupted action.

The theory of decomposition in AI work:

- large tasks hide multiple subproblems
- different subproblems need different context
- errors compound when early steps are not checked
- handoffs require explicit boundaries

Important concepts:

- task granularity
- independent verification
- staged outputs
- progress memory
- checkpoint design

This section should connect to part one's workflow logic, but at a higher abstraction level. The point is no longer just "use multiple prompts." The point is "design work so each stage has a clear input, output, and verification rule."

### Interactive Module

`Interactive: Task Splitter`

Give the reader a large project and ask them to break it into smaller units. The module should score the split based on:

- whether each piece has a clear output
- whether each piece can be checked independently
- whether dependencies are explicit
- whether any step is still too vague or too large

### Practical Application

`Exercise: Create a Handoff Map`

Reader takes one task and writes:

- stage name
- input
- output
- acceptance check
- next handoff

Key lesson: a clean handoff is part of the spec, not an implementation detail.

---

## Section 7: Evaluation Design

### Purpose

Move beyond "does this look okay?" to systematic judgment.

### Theory To Introduce

Without evaluation design, improvement is mostly anecdotal.

Evaluation design is the theory of knowing whether a system is actually performing well on your recurring work. It introduces:

- test cases
- expected qualities
- known failure modes
- repeatable checks
- regression awareness

The key distinction:

- output evaluation is about one result
- evaluation design is about building a reusable method for judging many results over time

This section should argue that evaluation is part of the input system, not merely a postscript. If you cannot state how good work will be recognized, you have not fully specified the task.

### Interactive Module

`Interactive: Build an Eval`

Reader is shown a recurring task and asked to choose:

- what should be tested
- what should count as success
- what failure modes to watch for
- what would make the task no longer worth delegating

### Practical Application

`Exercise: Draft a Mini Eval Harness`

Reader creates:

- one recurring task
- three test cases
- a short checklist for each
- a pass / acceptable / fail threshold

Key lesson: evaluation makes quality legible and lets you notice drift.

---

## Section 8: Context Engineering as Environment Design

### Purpose

Treat context as a designed environment rather than a pile of information.

### Theory To Introduce

Part one already established that context is limited and drift-prone. Part two should extend that into a stronger claim:

The challenge is not merely supplying more information. It is supplying the right information in the right structure at the right moment.

Context engineering theory includes:

- relevance over exhaustiveness
- signal-to-noise management
- stable context versus task-specific context
- retrieval burden
- freshness and staleness
- persistent guidance versus temporary materials

The key idea is that environment quality shapes reasoning quality. An overloaded context can be as harmful as a missing one.

### Interactive Module

`Interactive: Pack the Counter`

Give the reader a limited context budget and a set of possible materials:

- background docs
- current task brief
- style guide
- outdated notes
- edge-case policy
- example outputs
- irrelevant history

The reader selects what to load. The reveal shows tradeoffs:

- what was essential
- what was noise
- what should have been summarized instead of pasted

### Practical Application

`Exercise: Build a Context Packet`

Reader creates a minimal packet for one task with:

- stable context
- task-specific context
- source-of-truth materials
- optional references

Key lesson: context engineering is curation, not accumulation.

---

## Section 9: Intent Engineering as Encoded Judgment

### Purpose

Explain how to encode what should be optimized when the task involves tradeoffs.

### Theory To Introduce

Context tells a system what is available. Intent tells it what matters.

When tasks involve judgment, there are usually competing goods:

- speed versus depth
- consistency versus flexibility
- completeness versus brevity
- caution versus initiative

Humans often operate with unstated priority hierarchies. That works poorly in delegated AI work because the hierarchy only becomes visible when something important is sacrificed.

Intent engineering makes these priorities explicit:

- what the system is optimizing for
- what tradeoff wins when values collide
- what decisions are autonomous
- what decisions require escalation

This section should stress that intent is not brand tone or mission language. It is operational judgment.

### Interactive Module

`Interactive: Tradeoff Ladder`

Present pairs of values in tension and ask the reader to choose:

- which wins
- under what threshold
- when the loser becomes unacceptable

The module should make the reader feel how often "good judgment" is really structured prioritization.

### Practical Application

`Exercise: Write a Priority Hierarchy`

Reader defines:

- top priority
- second priority
- default optimization target
- non-delegable decisions

Key lesson: if priorities are only obvious in hindsight, they were never encoded.

---

## Section 10: Specification Engineering

### Purpose

Present specification engineering as the top-layer discipline that integrates all prior sections.

### Theory To Introduce

A specification is not merely a long instruction. It is a structured contract that integrates:

- the problem statement
- acceptance criteria
- constraint architecture
- decomposition
- context requirements
- evaluation logic
- escalation boundaries

The theory claim:

As work becomes longer and less supervised, the specification becomes the real prompt.

Specification engineering exists because complex work cannot rely on shared context, vibes, or live clarification. It requires a document that:

- survives time
- survives handoffs
- survives ambiguity
- remains checkable

This section should emphasize that specification quality reflects thinking quality. Weak specs often reveal that the human has not fully clarified the work for themselves.

### Interactive Module

`Interactive: Spec Stress Test`

Show a draft spec and let the reader probe it with failure questions:

- what is the output exactly
- who is it for
- how is success measured
- what should never happen
- what should be escalated
- what happens if step 2 fails
- what context is assumed but not provided

The module should highlight where the spec breaks under pressure.

### Practical Application

`Exercise: Turn a Brief Into a Spec`

Reader starts with a rough brief and expands it into:

- overview
- acceptance criteria
- constraints
- staged tasks
- evaluation criteria
- definition of done

Key lesson: specification is the discipline of making thinking executable.

---

## Section 11: The Human Prompt and Pre-AI Clarification

### Purpose

Preserve one of the strongest ideas from the notes: thinking before interacting.

### Theory To Introduce

One major failure mode occurs before the AI ever sees the task:

The human has not yet clarified what they actually want.

AI fluency can hide this by giving a polished response to an under-formed ask. That can cause the user to adopt the system's framing instead of finishing their own thinking.

The theory here is not "use pen and paper because analog is magical." The theory is:

- externalizing thought before interaction reduces framing contamination
- pre-AI clarification improves delegation quality
- the quality of the first artifact often depends on whether the user defined the problem before receiving fluent suggestions

This section can act as a bridge between theory and practice by introducing a pre-flight reflection pattern.

### Interactive Module

`Interactive: Before You Open the Chat`

Reader answers a short sequence:

- what outcome do you actually want
- what would count as wrong even if it looks polished
- what do you know that an outsider would not know
- what is the hard part

The module should then show how those answers improve downstream specification quality.

### Practical Application

`Exercise: Pre-Flight Card`

Reader fills out a reusable pre-flight card before a major task.

Key lesson: better delegation begins before prompting begins.

---

## Section 12: Synthesis

### Purpose

Unify the theories into one mental model and prepare the reader for later practical tooling.

### Theory To Reinforce

The progression across the guide should resolve into a single framework:

- Prompt craft shapes the local request.
- Context engineering shapes the information environment.
- Intent engineering shapes the value hierarchy.
- Specification engineering shapes the executable contract.
- Evaluation design closes the loop.

The guide should make clear that these are not "advanced prompt tricks." They are theories of delegated cognitive work.

Final synthesis claims:

- better AI use is often better task design
- better task design is often better communication
- better communication requires explicit thinking where humans usually rely on shared context
- the real skill shift is from asking for output to designing work that can hold together without rescue

### Interactive Module

`Interactive: Build the Stack`

Reader is given a messy task and must assemble the full stack in order:

- problem statement
- context packet
- intent hierarchy
- acceptance criteria
- constraints
- decomposition
- evaluation

The module ends with a visual showing how each layer prevents a different class of failure.

### Practical Application

`Exercise: End-to-End Delegation Blueprint`

Reader creates a compact blueprint for one real task using all concepts from the guide.

Key lesson: reliability comes from layered structure, not from finding the perfect wording.

---

## Recommended Interactive System

To keep the guide coherent, the interactive pieces should repeat a small set of mechanics instead of inventing a new interface each time.

Suggested recurring mechanics:

- classifier: identify which theory layer a failure belongs to
- sorter: decide whether a criterion is vague or checkable
- mapper: connect failure modes to constraints
- packer: choose what belongs in context
- builder: assemble a spec from component parts
- stress test: probe an artifact for missing structure

These repeated patterns will make the theory feel cumulative instead of fragmented.

## Recommended Practical Artifacts Produced By The Reader

By the end of the guide, the reader should have drafted:

- one self-contained problem statement
- one set of acceptance criteria
- one four-quadrant constraint sheet
- one task decomposition map
- one mini eval harness
- one context packet
- one priority hierarchy
- one lightweight specification

This gives the guide a strong "learn, test, apply" rhythm without turning it into a prompt library.

## Recommended Writing Constraint

Because voice and tone will be handled later, the outline should preserve only the conceptual discipline:

- use theory language precisely
- define each concept by the problem it solves
- separate adjacent concepts cleanly
- avoid collapsing everything into "better prompting"
- avoid tactical sprawl until the practical application block of each section

## Short Version

If reduced to a one-sentence summary:

Part two is a guide to the theory of delegated AI work: how to turn vague tasks into structured, checkable, context-aware, value-aligned specifications reinforced by interactive modules and grounded by practical exercises.
