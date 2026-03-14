Below is a **copy‑ready V3 skeleton** you can paste into your existing `how-llms-work-v2.html` with minimal layout/JS changes. I kept your classes (`hero`, `callout`, `note`, `tabs`, etc.) and your existing widgets (prompt ladder tabs + audit quiz).   

**How to use this:** for each section, replace the content inside the corresponding `<section>` in your V2 HTML with the block below (or replace the whole `<section>...</section>` if that’s easier). For the prompt ladder and quiz widgets, I preserved IDs/attributes so your existing JS keeps working. 

---

## 1) Introduction section replacement

```html
<section>
  <h2>Introduction: How LLMs Generate Text (and Why Prompts Matter)</h2>

  <div class="hero">
    <div>
      <p class="kicker">
        An LLM is like a very fast autocomplete: it writes a response <strong>one small chunk at a time</strong>.
        Each time it adds a chunk, it looks at the text so far and guesses what chunk should come next.
      </p>

      <div class="callout">
        <p style="margin:0">
          <strong>Make it sharper</strong><br>
          Under the hood, the model scores many possible “next chunks,” then the system <em>chooses</em> one and repeats.
          That choosing step is why the same prompt can feel stable (repeatable) or varied (different phrasing) depending on settings.
        </p>
      </div>

      <div class="callout">
        <p style="margin:0">
          <strong>Why prompts matter</strong><br>
          The model’s default job is to produce a <em>coherent continuation</em>.
          If your prompt is vague, “coherent” often means it picks one interpretation of messy info and keeps going.
          If your prompt is a spec (rules + format + checks), “coherent” means it produces something you can audit.
        </p>
      </div>

      <div class="callout">
        <p style="margin:0">
          <strong>TL;DR</strong><br>
          The model predicts “what text should come next,” chunk‑by‑chunk.
          Your prompt supplies <strong>instructions</strong> (what to do) and <strong>context</strong> (what to use).
          Better specs don’t make the model “smarter”—they make the output easier to verify.
        </p>
      </div>

      <div class="grid">
        <div class="callout">
          <p style="margin:0"><strong>Two separations that prevent workplace confusion</strong></p>
          <ul style="margin:.5rem 0 0 1.1rem">
            <li><strong>Model vs tools</strong>: drafting a plan vs verifying reality</li>
            <li><strong>Instructions vs context</strong>: what to do vs what to use</li>
          </ul>
        </div>
        <div class="callout">
          <p style="margin:0">
            <strong>Running example</strong><br>
            We’ll use one messy “Marketing Potluck” intake dump to practice extraction, normalization, and QA—without teaching potluck logistics.
          </p>
        </div>
      </div>

      <div class="callout">
        <p style="margin:0">
          <strong>Reader checkpoint</strong><br>
          If someone says “the model knows our calendar,” what’s the safer correction?
          <span class="note">Model answer: It only knows what’s in the prompt/context unless it’s connected to a verified tool.</span>
        </p>
      </div>
    </div>

    <figure class="diagram" aria-label="Placeholder visual showing the LLM loop: chunk scoring, choosing, chunk-by-chunk output">
      <img src="../images/image-placeholder.png" alt="Placeholder image for a future visual aid: text chunks being generated one by one from a ranked list of next-chunk options.">
      <figcaption>Visual aid (placeholder): score next chunks → choose one → append → repeat.</figcaption>
    </figure>
  </div>

  <details class="callout micro-glossary">
    <summary><strong>Sidequest (optional): Micro‑Glossary</strong></summary>
    <ul style="margin:.6rem 0 0 1.25rem">
      <li><strong>Model</strong>: the text generator producing output</li>
      <li><strong>Prompt</strong>: your instructions + any pasted context</li>
      <li><strong>Token / chunk</strong>: a small piece of text the model predicts</li>
      <li><strong>Context window</strong>: how much text it can consider at once</li>
      <li><strong>Attention</strong>: a linking mechanism that connects parts of the input during generation</li>
      <li><strong>Decoding</strong>: how the system chooses the next chunk from many candidates</li>
      <li><strong>Temperature / top‑p</strong>: settings that affect how strict vs varied “choosing” is (when sampling is used)</li>
      <li><strong>Hallucination</strong>: confident-sounding text not supported by the provided sources</li>
    </ul>
    <p class="note" style="margin:.6rem 0 0">
      Important nuance: “temperature” alone isn’t “randomness.” You typically get run‑to‑run variation when the system uses <em>sampling</em>.
    </p>
  </details>
</section>
```

---

## 2) Running example dataset section replacement

```html
<section>
  <h2>Running Example Dataset: A Messy Intake Dump</h2>

  <p>
    This intake dump is the only “data” we reuse throughout the guide. It’s intentionally contradictory—like real workplace intake.
  </p>

  <div class="grid">
    <div>
      <div class="callout">
        <p style="margin:0"><strong>Plain-language</strong><br>
          Imagine ten coworkers left sticky notes on a table. The model can help sort the sticky notes into bins.
          It cannot magically know which sticky note is “the real plan.”
        </p>
      </div>

      <div class="callout">
        <p style="margin:0"><strong>Make it sharper</strong><br>
          Our job is <em>not</em> to resolve the potluck. Our job is to turn this messy text into:
          (1) a normalized list of constraints/conflicts/requests, and (2) the questions/actions needed to unblock a real human decision.
        </p>
      </div>

      <div class="callout">
        <p style="margin:0"><strong>Why this happens</strong><br>
          Contradictory input is normal in workplace text. The model is biased toward producing one coherent story unless you require an output format that can hold uncertainty (like “Needs clarification”).
        </p>
      </div>

      <div class="callout">
        <p style="margin:0"><strong>What to notice before you read the dump</strong></p>
        <ul style="margin:.5rem 0 0 1.1rem">
          <li><strong>Contradictions</strong>: time, location, and “which invite is authoritative”</li>
          <li><strong>Hard constraints</strong>: Facilities rules, HR policy, nut allergy</li>
          <li><strong>Missing decision rights</strong>: who decides “simple vs vibe”</li>
          <li><strong>Loaded words</strong>: “next Thursday,” “lunch‑ish,” “Whole30‑ish,” “special,” “low lift”</li>
        </ul>
      </div>

      <details class="callout">
        <summary><strong>Sidequest (optional): Two useful terms</strong></summary>
        <p style="margin:.6rem 0 0"><strong>DRI</strong> = single-threaded owner (one person accountable).</p>
        <p style="margin:.4rem 0 0"><strong>Normalize</strong> = turn messy notes into consistent rows without silently resolving conflicts.</p>
      </details>

      <p class="note">Tip: use the <span class="kbd">☰ Inventory</span> menu (top right) to jump between sections.</p>
    </div>

    <div class="image-container">
      <img src="../images/imgPlaceholder.png" alt="Placeholder image for a future visual aid: a sticky-note wall representing intake sources.">
    </div>
  </div>

  <div class="callout">
    <label style="display:flex; gap:.5rem; align-items:center;">
      <input id="toggleHighlights" type="checkbox">
      <span><strong>Highlight ambiguity hotspots</strong> (e.g., “next Thursday”, “lunch-ish”, “Whole30‑ish”)</span>
    </label>
    <p class="note" style="margin:.4rem 0 0">This toggle is already wired in your V2 script block.</p>
  </div>

  <div class="callout">
    <label style="display:flex; gap:.5rem; align-items:center;">
      <input id="toggleHardConstraints" type="checkbox" disabled>
      <span><strong>Highlight hard constraints</strong> (Facilities / HR / allergy) <span class="badge">Planned</span></span>
    </label>
    <p class="note" style="margin:.4rem 0 0">
      Coming soon: a second highlight mode so readers learn to separate “must” constraints from “nice-to-have” preferences.
    </p>
  </div>

  <div class="intake-wrap" id="intakeWrap" data-highlight="off">
    <details>
      <summary><strong>Open the full intake dump (copy/paste friendly)</strong></summary>
      <!-- Keep your existing <pre><code> intake dump exactly as-is here -->
      <!-- (No changes required unless you want to add more <mark> tags for hard constraints later.) -->
    </details>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Common confusion</strong><br>
      “If the intake contains all the facts, the model will use all the facts.”
      Safer mental model: it only uses what’s in the provided context, and it tends to follow what looks like “instructions” more reliably than what looks like “random notes.”
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Reader checkpoint</strong><br>
      Name one <em>hard constraint</em> and one <em>preference</em>.
      <span class="note">Model answer: Hard = no open flames / nut allergy / voluntary participation. Preference = looks nice for photos / “vibe” standards.</span>
    </p>
  </div>
</section>
```

---

## 3) Prompt ladder section replacement (tabs preserved, copy upgraded)

This keeps your tab widget IDs/attributes so `widgets.js` continues working. 

```html
<section>
  <h2>Prompting: Turning Vague Intent into a Spec (V0 → V4) <span class="badge">Interactive</span></h2>

  <div class="callout">
    <p style="margin:0"><strong>Plain-language</strong><br>
      If you tell a coworker “handle the potluck,” they’ll guess what you mean. The model does the same.
      The ladder below upgrades your request from “helpful vibes” to “auditable output.”
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Make it sharper</strong><br>
      Each version narrows what “a good answer” can be:
      role → deliverables → boundaries → schema/evidence → chunking/unknowns policy.
    </p>
  </div>

  <div class="tabs" data-tabs="prompt-ladder">
    <div class="tablist" role="tablist" aria-label="Prompt ladder versions">
      <button type="button" role="tab" aria-selected="true" aria-controls="panel-v0" id="tab-v0">V0</button>
      <button type="button" role="tab" aria-selected="false" aria-controls="panel-v1" id="tab-v1">V1</button>
      <button type="button" role="tab" aria-selected="false" aria-controls="panel-v2" id="tab-v2">V2</button>
      <button type="button" role="tab" aria-selected="false" aria-controls="panel-v3" id="tab-v3">V3</button>
      <button type="button" role="tab" aria-selected="false" aria-controls="panel-v4" id="tab-v4">V4</button>
    </div>

    <!-- V0 -->
    <div class="tabpanel" role="tabpanel" id="panel-v0" aria-labelledby="tab-v0" aria-hidden="false">
      <div class="compare">
        <div class="prompt-block">
          <h3 style="margin-top:0">Prompt (V0)</h3>
          <pre><code>Organize this marketing potluck and tell me what to do next.

[PASTE THE INTAKE DUMP]</code></pre>

          <div class="callout" style="margin-top:10px">
            <p style="margin:0"><strong>Why it’s weak</strong><br>
              “Organize” could mean: pick a location, resolve conflicts, write invites, invent owners, propose food rules—so the model guesses what kind of “help” you want.
            </p>
          </div>
        </div>

        <div class="prompt-block">
          <h3 style="margin-top:0">Typical failure (example excerpt)</h3>
          <pre><code>Plan:
- Host the event in the Atrium from 11:30–2:30.
- Enforce “no plastic” for photos.
- Ask everyone to avoid nuts.</code></pre>
          <div class="callout" style="margin-top:10px">
            <p style="margin:0"><strong>Why this happens</strong><br>
              A “clean plan” looks like a complete answer. Unless you require a place to store uncertainty, the model often picks one interpretation and continues.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- V1 -->
    <div class="tabpanel" role="tabpanel" id="panel-v1" aria-labelledby="tab-v1" aria-hidden="true">
      <div class="compare">
        <div class="prompt-block">
          <h3 style="margin-top:0">Prompt (V1)</h3>
          <pre><code>You are a project coordinator.

Goal: Convert the intake dump into:
1) a normalized table of requests/constraints/conflicts, and
2) a short next-steps plan.

Use only the information in the intake dump.

[PASTE THE INTAKE DUMP]</code></pre>
        </div>

        <div class="prompt-block">
          <h3 style="margin-top:0">Output excerpt (what “better” looks like)</h3>
          <pre><code>Normalized intake (excerpt):
- Schedule: “next Thursday” has no date (sources: A, C) → unclear
- Location conflict: Kitchen vs Conf Room B vs Atrium (sources: C, D, E, I) → unclear
- Hard constraints: Facilities rules + HR rules + nut allergy (sources: G, H, A) → must-follow

Next steps (excerpt):
1) Confirm DRI + decision rights (theme vs simple)
2) Confirm date + time window
3) Confirm location that is actually available</code></pre>

          <div class="callout" style="margin-top:10px">
            <p style="margin:0"><strong>Why it improves</strong><br>
              You gave the model a job and two deliverables. That nudges it toward “work artifacts” (lists/tables) instead of “advice.”
            </p>
          </div>

          <div class="callout" style="margin-top:10px">
            <p style="margin:0"><strong>Common confusion</strong><br>
              V1 can still sound confident while making silent choices. It’s better structure—but not yet a tight acceptance test.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- V2 -->
    <div class="tabpanel" role="tabpanel" id="panel-v2" aria-labelledby="tab-v2" aria-hidden="true">
      <div class="compare">
        <div class="prompt-block">
          <h3 style="margin-top:0">Prompt (V2)</h3>
          <pre><code>You are a project coordinator.

Goal: organize the intake into a structured plan.

Non-goals:
- Do NOT propose themes, menus, or “vibe” ideas.
- Do NOT write invite copy or announcements.
- Do NOT guess missing dates, owners, or availability.

If something is unclear, mark it as unclear.

[PASTE THE INTAKE DUMP]</code></pre>
        </div>

        <div class="prompt-block">
          <h3 style="margin-top:0">Output excerpt (what “safer” looks like)</h3>
          <pre><code>Unclear items (flagged):
- Actual date for “next Thursday” → needs clarification
- Time window (12–1 vs 12–2 vs 11:30–2:30) → needs clarification
- Location (Kitchen vs Conf Room B vs Atrium) → needs clarification

Boundaries respected:
- No theme proposals
- No invite copy
- No invented owners/dates</code></pre>

          <div class="callout" style="margin-top:10px">
            <p style="margin:0"><strong>Why it improves</strong><br>
              Non-goals block the model’s most tempting “helpful patterns” (writing copy, inventing decisions). You’re teaching it what <em>not</em> to do.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- V3 -->
    <div class="tabpanel" role="tabpanel" id="panel-v3" aria-labelledby="tab-v3" aria-hidden="true">
      <div class="prompt-block">
        <h3 style="margin-top:0">Prompt (V3)</h3>
        <pre><code>You are a project coordinator.

Success criteria:
- Merge clear duplicates; if uncertain, keep both and note "Possible duplicate of ID X" in Risks.
- Every item has an Owner (or "Unassigned").
- Every item has a Due date/time (or "Unknown").
- Every item lists Dependencies and Risks (or "None noted").
- Every unclear item is flagged Needs_clarification = Yes.
- Every item includes Evidence pointing to one or more intake sections (A–L).

Optional reliability upgrade (recommended for safety/policy items):
- Add a Quote field (≤1 sentence) copied verbatim for safety/policy constraints.

Output exactly:
1) Normalized intake table (columns: ID, Category, Item, Evidence, Owner, Due, Dependencies, Risks, Needs_clarification, Confidence, Assumptions)
2) Top 10 next actions (Priority, Action, Owner, ETA band)
3) Questions to unblock (grouped by stakeholder)

Rules:
- Use only the intake dump.
- Do not invent.
- If contradictory, list both and mark Needs_clarification.

[PASTE THE INTAKE DUMP]</code></pre>

        <div class="compare" style="margin-top:10px">
          <div class="prompt-block">
            <h3 style="margin-top:0">Output excerpt (Evidence forces honesty)</h3>
            <pre><code>Table row (excerpt):
ID: 2
Category: Location
Item: Atrium cannot be used (Finance offsite).
Evidence: I (and conflicts with Invite #2: E)
Needs_clarification: No
Confidence: High

Table row (excerpt):
ID: 4
Category: Schedule
Item: Time window conflicts (12–1 vs 12–2 vs 11:30–2:30).
Evidence: C, D, E
Needs_clarification: Yes
Confidence: High</code></pre>
          </div>

          <div class="prompt-block">
            <h3 style="margin-top:0">Why this is the big upgrade</h3>
            <div class="callout">
              <p style="margin:0"><strong>Why this happens</strong><br>
                A schema narrows what the model can output. Evidence/needs-clarification fields create a “slot” for uncertainty and force traceability instead of smooth guessing.
              </p>
            </div>

            <div class="callout" style="margin-top:10px">
              <p style="margin:0"><strong>Common confusion</strong><br>
                Evidence doesn’t guarantee correctness. It guarantees you can <em>audit</em> where the claim came from.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- V4 -->
    <div class="tabpanel" role="tabpanel" id="panel-v4" aria-labelledby="tab-v4" aria-hidden="true">
      <div class="prompt-block">
        <h3 style="margin-top:0">Prompt (V4)</h3>
        <pre><code>You are a project coordinator.

Follow V3 exactly, plus:

Chunking policy:
- If the intake is too long, first output the full schema and process only sections A–F.
- Then stop and output: "READY FOR NEXT CHUNK: G–L".

Unknowns policy:
- Do not guess dates, availability, links, or owners.
- When ambiguous (e.g., "next Thursday", "Whole30-ish"), set Needs_clarification = Yes,
  Confidence = Low, and state the smallest possible assumption.

[PASTE THE INTAKE DUMP]</code></pre>

        <div class="callout" style="margin-top:10px">
          <p style="margin:0"><strong>Output excerpt (safe stopping point)</strong><br>
            <span class="note">Example:</span>
          </p>
          <pre><code>Schema:
ID | Category | Item | Evidence | Owner | Due | Dependencies | Risks | Needs_clarification | Confidence | Assumptions

Processed sections: A–F
READY FOR NEXT CHUNK: G–L</code></pre>
        </div>

        <div class="callout" style="margin-top:10px">
          <p style="margin:0"><strong>Why this happens</strong><br>
            The model can only consider so much text at once. Chunking prevents silent dropping and forces a visible “handoff” between batches.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Reader checkpoint</strong><br>
      Which ladder step is the first time you can realistically QA the output like a spreadsheet?
      <span class="note">Model answer: V3, because the schema + Evidence + needs-clarification fields become an acceptance test.</span>
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Interactive (coming soon)</strong><br>
      Add a “Show output excerpts” toggle that expands/collapses the excerpts above. The teaching moment is seeing the same input become more auditable as constraints and format tighten.
    </p>
  </div>
</section>
```

---

## 4) Ambiguity collapse section replacement (adds second example + “why”)

```html
<section>
  <h2>Failure Pattern: Ambiguity Collapse</h2>

  <div class="callout">
    <p style="margin:0"><strong>Plain-language</strong><br>
      When the notes disagree, a vague request often produces one clean-sounding answer. Clean is comforting. Clean is not the same as correct.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Make it sharper</strong><br>
      This failure shows up when your prompt doesn’t define how to handle contradictions.
      The model “chooses a story” because that’s what finished writing usually looks like.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Why this happens</strong><br>
      The model is optimized to produce coherent continuations. Without an explicit slot for uncertainty (like “Needs clarification”), it tends to collapse multiple options into one narrative.
    </p>
  </div>

  <div class="compare">
    <div class="callout">
      <strong>Example 1: Location</strong>
      <pre><code>Bad: “We’ll do the Atrium 11:30–2:30.”</code></pre>
      <p class="note" style="margin:0">Ignores the Finance note that Atrium is unavailable.</p>
    </div>

    <div class="callout">
      <strong>Safer: preserve the conflict</strong>
      <pre><code>Good: “Atrium is unavailable (Finance). Location is contested. Mark Needs_clarification and ask stakeholders.”</code></pre>
      <p class="note" style="margin:0">Looks messier. Is safer to act on.</p>
    </div>
  </div>

  <div class="compare" style="margin-top:12px">
    <div class="callout">
      <strong>Example 2: Time window</strong>
      <pre><code>Bad: “Lunch is 12–2.”</code></pre>
      <p class="note" style="margin:0">Collapses 12–1 vs 12–2 vs 11:30–2:30 into one guess.</p>
    </div>

    <div class="callout">
      <strong>Safer: flag the mismatch</strong>
      <pre><code>Good: “Time conflicts across sources. Needs_clarification=Yes; list options and ask Tara/Dylan to confirm.”</code></pre>
      <p class="note" style="margin:0">You can’t schedule people on a guess.</p>
    </div>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Reader checkpoint</strong><br>
      When the input contains contradictions, should the safe output get cleaner or messier?
      <span class="note">Model answer: Messier (more explicit), because it must preserve uncertainty until a human resolves it.</span>
    </p>
  </div>
</section>
```

---

## 5) Tokens & decoding section replacement (also fixes the nested `<section>` issue)

In your V2 HTML, this section currently has an extra `<section>` wrapper. Replace both with this single block. 

```html
<section>
  <h2>Tokens &amp; Decoding: How Text Actually Gets Generated</h2>

  <div class="callout">
    <p style="margin:0"><strong>Plain-language</strong><br>
      The model doesn’t write a whole answer in one gulp. It writes tiny pieces in sequence—like placing one tile at a time to make a mosaic.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Make it sharper</strong><br>
      Those tiny pieces are often called <strong>tokens</strong> (think “text chunks”).
      For each next chunk, the model produces a ranked set of candidates. <strong>Decoding</strong> is the choosing rule the system uses to pick which chunk gets appended next.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Why this happens</strong><br>
      Because the system chooses chunk-by-chunk, small changes in your wording and formatting can steer the continuation.
      If your prompt looks like a table schema, the continuation often looks like rows.
      If your prompt looks like “give advice,” the continuation often looks like confident advice.
    </p>
  </div>

  <div class="callout" style="overflow:auto">
    <p style="margin:0"><strong>Potluck lens: a tiny toy example</strong></p>
    <pre style="margin:.6rem 0 0"><code>Input snippet:
Location: Kitchen
Time: 12–1
Hard constraints: nut allergy, no open flames, voluntary participation

What tends to happen next:
- The model continues with more structured fields (Owner, Risks, Questions)
…if you asked for a table/schema.</code></pre>
    <p class="note" style="margin:.4rem 0 0">
      You don’t need to know token math to use this. You just need the habit: “shape the output you want.”
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Common confusion</strong><br>
      Tokens are not exactly words, and “temperature” is not automatically “randomness.”
      The practical takeaway: strict schemas reduce run‑to‑run variation because they narrow what counts as an acceptable continuation.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Reader checkpoint</strong><br>
      If you want the output to be stable and easy to QA, what do you change first: “be more detailed” or “require a schema”?
      <span class="note">Model answer: Require a schema (output format). Details help, but format creates a target the model can reliably hit.</span>
    </p>
  </div>

  <details class="callout">
    <summary><strong>Sidequest (optional): Decoding knobs in one analogy</strong></summary>
    <p style="margin:.6rem 0 0">
      Imagine the model has a shortlist of “next chunk” options.
    </p>
    <ul style="margin:.5rem 0 0 1.1rem">
      <li><strong>Greedy</strong> choosing = always pick the top option (more repeatable)</li>
      <li><strong>Sampling</strong> = sometimes pick a different high-quality option (more variety)</li>
      <li><strong>Temperature</strong> = how adventurous sampling is</li>
      <li><strong>Top‑p</strong> = only sample from the most plausible slice of options</li>
    </ul>
  </details>

  <div class="callout">
    <strong>Interactive (placeholder): Temperature slider</strong>
    <p class="note" style="margin:.4rem 0 0">
      Planned demo: the same prompt produces slightly different phrasing under sampling, but the same schema keeps the structure stable.
    </p>
  </div>
</section>
```

---

## 6) Context window & attention section replacement (split into two mini-subsections)

```html
<section>
  <h2>Context Window &amp; Attention: Why Placement Matters</h2>

  <h3>Context window = the size of the prep table</h3>

  <div class="callout">
    <p style="margin:0"><strong>Plain-language</strong><br>
      If your prep table is small and you dump too much on it, things fall off the edge. The model has a “prep table” too.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Make it sharper</strong><br>
      The <strong>context window</strong> is how much text the model can consider at once (instructions + intake + any earlier text still in view).
      If the intake is long, details may be compressed or dropped unless you chunk and reconcile.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Why this happens</strong><br>
      The model can only condition on a limited amount of text at one time.
      Chunking creates a safe workflow: schema first → process in batches → reconcile conflicts.
    </p>
  </div>

  <h3>Attention = highlighter strings (not eyeballs)</h3>

  <div class="callout">
    <p style="margin:0"><strong>Plain-language</strong><br>
      While writing, the model draws invisible “highlighter strings” between parts of the text that seem related—so it can pull the right pieces forward for the next chunk.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Make it sharper</strong><br>
      <strong>Attention</strong> is a mechanism that links text to other text during generation.
      It is not awareness. It’s how the model decides which earlier tokens should influence the next token.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Common confusion</strong><br>
      “Attention” sounds like a human paying attention. It’s not.
      It’s a linking system that helps the model reuse relevant parts of the input while it continues writing.
    </p>
  </div>

  <div class="callout">
    <strong>High-ROI prompt order</strong>
    <ol style="margin:.4rem 0 0 1.2rem">
      <li>Rules and hard constraints (Facilities / HR / allergy)</li>
      <li>Intake dump (sources)</li>
      <li>Output format (acceptance test)</li>
    </ol>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Reader checkpoint</strong><br>
      If your intake dump is huge, what’s the safest first output to ask for?
      <span class="note">Model answer: the schema + the first processed chunk + a clear “READY FOR NEXT CHUNK” stop point.</span>
    </p>
  </div>

  <div class="callout">
    <strong>Interactive (placeholder): Constraint placement experiment</strong>
    <p class="note" style="margin:.4rem 0 0">
      Planned demo: same constraints, different order. Notice which constraints “survive” into the action list when they’re buried vs emphasized.
    </p>
  </div>
</section>
```

---

## 7) Structured output section replacement (adds the “Evidence forces friction” demo)

```html
<section>
  <h2>Structured Output: Turning Text Into a Dataset</h2>

  <div class="callout">
    <p style="margin:0"><strong>Plain-language</strong><br>
      A schema is a sign-up sheet with required columns. Required boxes force honesty.
      If you don’t know the allergen, you can’t pretend—there’s a blank cell.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Make it sharper</strong><br>
      Schemas reduce hallucination risk because they create an acceptance test:
      every row must name its source (Evidence), its uncertainty (Needs clarification), and its confidence.
      Unsupported claims become visible gaps instead of hidden guesses.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Why this happens</strong><br>
      Without a schema, the model can produce smooth prose that sounds right and keeps going.
      With Evidence + Needs clarification fields, it has to “point back” to the intake—so contradictions and missing facts show up as explicit rows.
    </p>
  </div>

  <div class="compare">
    <div class="callout">
      <strong>Without Evidence (bad)</strong>
      <pre><code>“We’ll do the Atrium 11:30–2:30.”</code></pre>
      <p class="note" style="margin:0">Sounds decisive. Hides the Finance conflict.</p>
    </div>
    <div class="callout">
      <strong>With Evidence (good)</strong>
      <pre><code>Location options:
- Atrium (Evidence: E) conflicts with “Atrium unavailable” (Evidence: I)
Needs_clarification: Yes
Confidence: High (conflict is explicit)</code></pre>
      <p class="note" style="margin:0">Less “clean.” More auditable.</p>
    </div>
  </div>

  <div class="callout" style="overflow:auto">
    <table class="sandbox-table" aria-label="Example normalized intake table excerpt">
      <thead>
        <tr>
          <th>ID</th><th>Category</th><th>Item</th><th>Evidence</th><th>Owner</th><th>Due</th><th>Needs clarification</th><th>Confidence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td><td>Ownership</td><td>Confirm DRI + decision rights (theme vs “simple”).</td><td>A,B,L</td><td>Unassigned</td><td>Unknown</td><td>Yes</td><td>High</td>
        </tr>
        <tr>
          <td>2</td><td>Location</td><td>Atrium cannot be used (Finance offsite).</td><td>I</td><td>Unassigned</td><td>Unknown</td><td>No</td><td>High</td>
        </tr>
        <tr>
          <td>3</td><td>Safety</td><td>Define nut policy + cross-contamination handling.</td><td>A,F,L</td><td>Unassigned</td><td>Unknown</td><td>Yes</td><td>High</td>
        </tr>
      </tbody>
    </table>
    <p class="note" style="margin:.6rem 0 0">
      Placeholder excerpt. Final table should match the V3/V4 schema exactly (including Dependencies/Risks/Assumptions).
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Reader checkpoint</strong><br>
      What does an Evidence column give you that “a good summary” doesn’t?
      <span class="note">Model answer: traceability. You can audit which source supports each claim and see contradictions instead of hiding them.</span>
    </p>
  </div>

  <details class="callout">
    <summary><strong>Sidequest (optional): “Normalize” without losing contradictions</strong></summary>
    <p style="margin:.6rem 0 0">
      Normalizing doesn’t mean “choose the truth.” It means: one row per distinct issue, with multiple sources attached.
      When sources disagree, you keep both options and mark Needs clarification.
    </p>
  </details>
</section>
```

---

## 8) QA section replacement (adds 2-pass workflow + red flags)

```html
<section>
  <h2>Failure Modes &amp; QA: How to Treat Outputs Safely</h2>

  <div class="callout">
    <p style="margin:0"><strong>Plain-language</strong><br>
      Treat the model output like a first draft from a junior coordinator: helpful, fast, and not automatically correct.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Make it sharper</strong><br>
      A reliable workflow separates three jobs:
      (1) extract/normalize, (2) QA contradictions and unknowns, (3) plan next actions.
      This prevents “wishful coherence.”
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Why this happens</strong><br>
      When you ask for “a plan” in one step, the model tends to smooth uncertainty to look complete.
      Multi-pass structure makes uncertainty visible before decisions get baked into the plan.
    </p>
  </div>

  <div class="callout">
    <strong>QA pass you can append to V3/V4</strong>
    <pre><code>QA pass:
- List contradictions you see.
- List missing Owners / Due dates.
- List items that risk safety/policy violations.
- List assumptions you made (keep minimal).
- If you see invented details, call them out as "Potential hallucination".</code></pre>
    <p class="note" style="margin:0">
      Self-QA helps, but it’s still the same brain checking its own work. Use it as a second sweep, not a guarantee.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Red flags in coordination output</strong></p>
    <ul style="margin:.5rem 0 0 1.1rem">
      <li>Any fixed date derived from “next Thursday”</li>
      <li>Any room chosen without Evidence</li>
      <li>Allergy handling summarized without specifics (policy/handling missing)</li>
      <li>“Final decisions” made despite explicit conflicts in the intake</li>
    </ul>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Reader checkpoint</strong><br>
      What is the single highest-stakes thing to QA in this potluck scenario?
      <span class="note">Model answer: safety/policy constraints (nut allergy + Facilities/HR rules) and any unsupported “decisions” that override them.</span>
    </p>
  </div>
</section>
```

---

## 9) Audit quiz section replacement (adds rationales block)

Keep your existing widget markup; add the rationale callout beneath it.

```html
<section>
  <h2>Audit Quiz: Spot Unsupported Claims <span class="badge">Interactive</span></h2>

  <div class="callout">
    <p style="margin:0"><strong>Plain-language</strong><br>
      This is practice for a real workplace habit: don’t ask “does it sound right?” Ask “what supports it?”
    </p>
  </div>

  <!-- KEEP YOUR EXISTING quiz widget exactly as-is here -->
  <!-- (No changes required unless you want to wire rationales dynamically later.) -->

  <div class="callout">
    <p style="margin:0"><strong>Why this happens</strong><br>
      The model can produce confident text even when it’s unsupported, because confidence is a writing style.
      Auditing is how you keep the assistant from becoming the decision-maker.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Answer rationales (for learning)</strong></p>
    <ul style="margin:.5rem 0 0 1.1rem">
      <li><strong>Q1</strong>: Atrium is explicitly unavailable (Finance note). Any plan using it is unsupported.</li>
      <li><strong>Q2</strong>: “Whole30‑ish” is ambiguous; safest handling is Needs clarification + ask Exec/CEO for definition.</li>
      <li><strong>Q3</strong>: “Do not guess; mark unknowns and ask questions” is the most reliable hallucination reducer in coordination work.</li>
    </ul>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Reader checkpoint</strong><br>
      If a plan claims “Conf Room B is booked,” what should you look for?
      <span class="note">Model answer: Evidence from the intake (or a verified tool result). Otherwise it must be treated as “needs verification.”</span>
    </p>
  </div>
</section>
```

---

## 10) Limits & failure modes section replacement (adds “authority laundering”)

```html
<section>
  <h2>Limits and Failure Modes (Mechanics, Not Morals)</h2>

  <div class="callout">
    <p style="margin:0"><strong>Plain-language</strong><br>
      Most failures are the same failure: the model filled a gap to keep the text flowing.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Make it sharper</strong><br>
      Common failure modes in planning work:
    </p>
    <ul style="margin:.5rem 0 0 1.1rem">
      <li><strong>Hallucination (gap-filling):</strong> inventing the date for “next Thursday.”</li>
      <li><strong>Ambiguity collapse:</strong> picking one time/location when sources disagree.</li>
      <li><strong>Instruction conflict:</strong> “keep it low lift” vs “theme experience” rules.</li>
      <li><strong>Overconfident tone:</strong> sounding decisive when confidence should be low.</li>
      <li><strong>Authority laundering:</strong> a confident guess feels “approved” because it’s written like a final answer.</li>
    </ul>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>What to do about it</strong></p>
    <ul style="margin:.5rem 0 0 1.1rem">
      <li><strong>Force traceability</strong>: require Evidence (and optional Quote for safety/policy).</li>
      <li><strong>Force honesty</strong>: require Needs clarification + Unknowns policy.</li>
      <li><strong>Force review</strong>: run a short QA pass before acting.</li>
    </ul>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Reader checkpoint</strong><br>
      Which is safer: “a complete plan that guesses” or “a partial plan that flags unknowns”?
      <span class="note">Model answer: A partial plan that flags unknowns—it protects you from acting on confident fiction.</span>
    </p>
  </div>
</section>
```

---

## 11) Tools vs model section replacement (adds rule-of-thumb)

```html
<section>
  <h2>Tools vs Model: Where LLMs Stop and Systems Begin</h2>

  <div class="callout">
    <p style="margin:0"><strong>Plain-language</strong><br>
      Writing “bake at 350°F” doesn’t turn on the oven. Writing “check the calendar” doesn’t check your calendar.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Make it sharper</strong><br>
      A model-only system can draft plans and restructure text. It cannot verify external facts (room bookings, invite acceptance, file access) unless it’s connected to tools that can actually query those systems.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Rule of thumb</strong><br>
      If the output doesn’t cite a provided source (or a verified tool result), treat it as unverified—even if it sounds confident.
    </p>
  </div>

  <figure class="diagram">
    <img src="../images/image-placeholder.png" alt="Placeholder diagram showing model-only vs tool-connected workflows.">
    <figcaption>Visual aid (placeholder): model drafts vs tool-connected verification.</figcaption>
  </figure>

  <div class="callout">
    <p style="margin:0"><strong>Reader checkpoint</strong><br>
      In this potluck scenario, what are two things you should not let the model “decide” without verification?
      <span class="note">Model answer: the final location and the final time window (both conflict in the intake), plus any policy interpretations like “Whole30-ish.”</span>
    </p>
  </div>
</section>
```

---

## 12) Wrap section replacement (tight + reduces replacement anxiety)

```html
<section>
  <h2>Wrap: Templates, Checklist, and Practice Modules</h2>

  <div class="callout">
    <p style="margin:0"><strong>Plain-language</strong><br>
      Use the model as an assistant for structure: sorting, labeling, and drafting checklists. Keep human judgment for decisions, priorities, and taste.
    </p>
  </div>

  <p class="note">
    Transferable loop (any coordination mess): normalize the intake → QA contradictions/unknowns → plan next actions → ask unblock questions.
    The potluck is just a safe dataset to practice on.
  </p>
</section>
```

---

## 13) Bonus sandbox section replacement (minor polish)

```html
<section>
  <h2>Bonus: Potluck Triage Sandbox <span class="badge">Planned</span></h2>

  <div class="callout">
    <p style="margin:0"><strong>Interactive (placeholder)</strong><br>
      Planned: a local, simulated sandbox that practices the workflow:
      schema → normalize → QA → questions.
      (No model calls required; this is about learning the structure.)
    </p>
    <p class="note" style="margin:.4rem 0 0">
      What you should notice: the safest output often looks “unfinished” because it preserves uncertainty instead of smoothing it.
    </p>
  </div>
</section>
```

---

## 14) Teaching note section replacement (adds mantra)

```html
<section>
  <h2>Teaching Note</h2>

  <div class="callout">
    <p style="margin:0">
      Think of an LLM like a fast coordinator who’s great at turning text into structure, but can’t verify reality unless it has tools.
      The key insight is: <strong>prompts are specifications</strong>, not wishes.
    </p>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Memorable mantra</strong></p>
    <ol style="margin:.5rem 0 0 1.2rem">
      <li><strong>Give it the notes.</strong> (context)</li>
      <li><strong>Give it the rules.</strong> (constraints)</li>
      <li><strong>Give it the form.</strong> (output format)</li>
    </ol>
  </div>

  <div class="callout">
    <p style="margin:0"><strong>Reader checkpoint</strong><br>
      What’s the safest default instruction when facts are missing?
      <span class="note">Model answer: “Do not guess—mark unknowns and ask questions.”</span>
    </p>
  </div>
</section>
```

---

## 15) Prompt template section replacement (adds Evidence policy explicitly)

```html
<section>
  <h2>Prompt Template</h2>

  <pre><code>You are a project coordinator.

Context:
- [1–3 sentences: what this is and why it matters]

Goal:
- Convert the intake into (1) a normalized table and (2) a prioritized next-steps plan.

Constraints (must follow):
- [Hard constraints: safety/policy/legal requirements]
- [Operational constraints: time, budget, approvals]

Non-goals (must not do):
- Do NOT generate creative content/copy.
- Do NOT guess missing facts (dates, owners, availability, links).
- Do NOT resolve contradictions silently.

Output format (exact):
1) Normalized intake table
Columns: ID, Category, Item, Evidence, Owner (or "Unassigned"), Due (or "Unknown"),
Dependencies, Risks, Needs_clarification (Yes/No), Confidence (High/Med/Low), Assumptions

Evidence policy:
- Every row must cite one or more intake sections (A–L).
- If no evidence exists, set Confidence=Low and Needs_clarification=Yes.

Optional reliability upgrade:
- Add Quote column with ≤1 sentence copied verbatim for safety/policy items.

2) Top next actions (max 10)
Format: Priority, Action, Owner, ETA band (15m/1h/half-day/day+)

3) Questions to unblock
Group by stakeholder/team.

Unknowns policy:
- If ambiguous, set Needs_clarification=Yes, Confidence=Low, and state the smallest assumption.

Intake dump:
[PASTE INTAKE HERE]</code></pre>
</section>
```

---

## 16) QA checklist section replacement (adds two checks)

```html
<section>
  <h2>QA Checklist</h2>

  <ul>
    <li><strong>Coverage:</strong> includes all major sources (Slack, email, calendar, Facilities, HR, Finance, Exec).</li>
    <li><strong>Evidence present:</strong> every major claim points back to intake sections (or tool results, if used).</li>
    <li><strong>Dates honest:</strong> no invented dates/links; unknowns are “Unknown”.</li>
    <li><strong>Conflicts flagged:</strong> contradictions set <code>Needs_clarification = Yes</code>.</li>
    <li><strong>Hard constraints respected:</strong> allergy, policy, and safety are surfaced early (not buried).</li>
    <li><strong>Assumptions visible:</strong> any assumption is stated explicitly and kept minimal.</li>
  </ul>
</section>
```

---

## 17) Optional modules section replacement (reordered by teaching value)

```html
<section>
  <h2>Optional Interactive Modules <span class="badge">Planned</span></h2>

  <ul>
    <li>Prompt ladder (V0→V4) with output excerpts toggle</li>
    <li>Evidence/Quote “show your work” demo (unsupported vs supported claims)</li>
    <li>Constraint placement experiment (same rules, different order)</li>
    <li>Drag-and-drop normalization exercise (turn notes into rows)</li>
    <li>Audit quiz (spot hidden constraint violations)</li>
    <li>Potluck triage sandbox (schema → chunk → QA loop)</li>
  </ul>
</section>
```

---

### Notes tied to your existing file (quick sanity checks)

* This skeleton is built to drop into your current V2 HTML structure and classes. 
* The prompt ladder changes align with your agreed plan (V0 should match the “organize + next steps” intent; V3 adds schema/Evidence; V4 adds chunking). 
* All potluck-specific references remain operations-focused and consistent with the intake dump (time/location conflicts, Facilities/HR rules, allergy constraints, and “Whole30‑ish” ambiguity). 

If you want the next step, I can also generate a **single consolidated “V3 HTML patch”** (a full `how-llms-work-v3.html` file) by applying these replacements to your current file so you can drop it into `guides/` directly. 
