## The Making of This Guide: AI Workflow in Action

### Building the “Choose Your Chef” character select screen

Most of this guide was built with AI involved somewhere in the process—planning, writing, visuals, or review. I also gave myself a slightly unhinged constraint: **three weeks** to plan, design, build, and test the whole thing.

A full behind-the-scenes would be longer than the guide itself, so this appendix focuses on **one** piece: the **“Choose Your Chef”** interactive—built like a fighting-game character select screen where you pick a model and see a sprite, a bio, and a standardized stat panel.

It started as an afterthought. It ended up getting a weird amount of love anyway.

---

### Phase 1: Define requirements before writing code

Before I touched HTML/CSS/JS, I used AI for what it’s best at: **pressure-testing a plan** and surfacing missing requirements (data shape, interactions, responsive layout decisions, accessibility, edge cases, naming conventions, etc.).

Here’s my initial prompt:

```text
I’m about to build a new “Sandbox” section in @guides/how-llms-work.html, and I’ll be coding it myself (HTML/CSS/JS, no framework or build step).

The feature is a “Choose Your Chef” interactive in the style of a fighting-game character select screen,
using the existing images in @images/character_select/ (note: images are still in progress).

UI behavior:
- The grid shows character selection boxes. For now each box uses a placeholder headshot.
- Selecting a character shows the full sprite/illustration to the side (or below on mobile), plus:
  - a short bio
  - a standardized stats panel shared by all models, using 1–5 stars per stat
- Use placeholders anywhere assets/content aren’t ready yet.

What I need from you:
Help me plan the component and identify anything missing (data model, interactions, responsive layout decisions,
accessibility, edge cases, asset naming conventions, etc.) before I start implementing.

Before we begin: what requirements, assumptions, or missing pieces should I lock down so this can be built cleanly?
```

Note that I specified that the goal wasn’t to “generate code.” but to **get a data model and a checklist**.

---

### A quick note on “data model” (in normal terms)

A **data model** is just the structure your UI runs on: a list of character objects with the fields your component needs (name, image paths, bio, stats, etc.).

This saves time because you don’t sprinkle content across a dozen places. You update **one** object and the UI updates everywhere. It also makes placeholders painless: swap image paths later without rewriting the component.

A simplified example:

```js
const chefs = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    title: "The Grandmaster",
    portrait: "images/character_select/portraits/chatgpt.png", // placeholder ok
    sprite:   "images/character_select/ChatGPT.png",
    bio: "…",
    stats: { clarity: 4, speed: 3, creativity: 5, rigor: 4 }
  }
];
```

---

### Phase 2: Build the wireframe (I wrote the code)

After I had the plan, I implemented the component myself.

Not because AI can’t produce code, but because I wanted two advantages:

* **I can iterate faster** when I understand every line, so I don't waste time hunting for the right code to edit.
* **Debugging is faster** when the architecture matches how I think and I can instinctively know what's gone wrong.


My loop looked like this:

1. **Build the wireframe + interactions manually** (grid selection → detail panel)
2. Use AI to **review**: accessibility, keyboard states, responsive layout, edge cases
3. Fix issues, tighten logic, and iterate

**Time saved:** several hours. Having requirements + a checklist up front prevented trial and error loops.

---

### Phase 3: Artwork (AI for drafts, me for production-ready)

Once the wireframe was stable and tested, I moved to visuals.

Normally I’d hand-draw everything. But since this is literally a guide about AI, I let AI generate initial concept art—then I did the part AI still struggles with: **making it actually production-ready.**

It took a few tries but I found a prompt that got the results I was looking for and I used that as a template for each sprite (illustration).

My eventual illustration prompt:

```text
Full-body illustrated 2D fighting game character of ChatGPT as a grandmaster chef.
Stands tall and centered in a confident neutral stance, one arm extended in invitation,
the other resting calmly at the waist.

Wears a pristine white long-coat chef uniform with teal inner lining and trim.
Clothing is immaculate and minimal. Glowing kitchen utensils floats horizontally
at chest height.

Calm expression, perfectly balanced posture.
Color palette strictly white, teal, and soft gray.
Strong, clean silhouette.
```

Refining prompt (because the first draft is never good enough):

```text
subtle forward lean, knees slightly bent, grounded stance
visible tension in shoulders and forearms
calm but alert posture, like a martial arts ready stance instead of statue-like
```

Then I cleaned everything up in Photoshop and converted it into actual sprites.

**Sprite cleanup process**

1. Pick a target sprite size

   * **128×128**
2. Downscale intentionally

   * resize to target resolution
   * **Nearest Neighbor only** (no smoothing)
3. Manual cleanup

   * clean silhouettes
   * fix eyes/hands/tools
   * remove stray pixels and accidental anti-aliasing
   * add intentional highlights + shadows

Each sprite took **30–60 minutes** from prompt → cleanup, which saved me **1–2 hours per character** compared to drawing from scratch. The tradeoff is real: they were a bit stiff, and the color palettes were slightly muddy. That said, this was an acceptable compromise for the deadline I set.

For headshots, I took the pragmatic route: **cropped close-ups of the full sprite** instead of drawing separate portraits.

---

### Phase 4: Bios (AI drafts, human rewrite)

For the character bios, I prompted AI to generate silly, exaggerated writeups for each model, including:

* **Best at:** what this model tends to excel at
* **Watch for:** the model’s common failures

The first drafts were useful and I checked them against different models and a quick google search to see if anythign was wildly inaccurate, but nothing went in unedited. The value here was speed: I wasn't starting from a blank page.

---

### Phase 5: Integration + polish

Once assets and copy existed, I dropped them into folders, hooked them up to the data model, and used AI to help map content into the wireframe (and made a few manual adjustments).

After that it was pure polish:

* spacing and alignment tweaks
* animations
* interaction timing
* making the select screen feel responsive

---

### What AI actually did for me

AI didn’t “build the feature.” It accelerated the parts that would usually slow me down:

* surfacing missing requirements early
* generating usable first drafts (art and copy)
* acting as an extra review pass when I was too close to the work

The key is that the workflow still has a human checkpoint at every stage: **I decide what ships, and I verify it before it’s public.**

This workflow works well for me, but it’s not a universal template. I’m most productive when I’m reacting to something concrete—an outline, a rough draft, a messy first pass—because revision feels like momentum, while a blank page tends to slow me down. Other people are wired the opposite way: they prefer starting from nothing and discovering the shape of the work as they go, and an AI-generated draft can feel like clutter they have to unbuild before they can start. The takeaway isn’t that there's a single, right way to use AI—it’s that it’s most useful when it matches you: for planners and editors it can be a fast brainstorming partner and a second set of eyes, and for exploratory creators it may work better later in the process for critique, edge cases, and revision.