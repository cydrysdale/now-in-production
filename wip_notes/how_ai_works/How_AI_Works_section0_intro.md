# How AI Works (Without the Hype)

### A practical guide for people who use AI tools—not build them

---

> Service is live. Tickets are flying. Let’s demystify the cook—without turning this into a PhD.

## What this guide is for

You've probably used ChatGPT, Claude, Gemini, or Copilot. You've seen it do impressive things. You've also seen it confidently make stuff up.

This guide won't make you an AI researcher. It will give you a **mental model**—a way to think about what's actually happening—so you can:

- Write better tickets (prompts) that get more predictable, verifiable results
- Understand why AI "forgets," drifts, or hallucinates
- Know when to trust an answer and when to verify it
- Run multi-step workflows without chaos

The goal is **practical fluency**, not hype or fear.

---

## The kitchen metaphor (and why we're using it)

Throughout this guide, we'll treat AI like a **busy kitchen during service**:

- The **model** is a fast line cook—trained at producing plausible dishes, but only working from what's visible right now
- Your **ticket (prompt)** is the order: what to make, what constraints apply, and how to plate it
- Your **prep counter (context)** is what you’ve put in view for this turn: notes, pasted references, and tool outputs the cook can actually use right now
- Your **counter space (context window)** is limited—when it gets crowded, older items get pushed off and stop influencing the dish
- **Tools** (calendar, spreadsheet, search) are **thermometers and scales**—they verify reality instead of guessing
- The **expo** (short for “expeditor,” basically the shift lead at the pickup window) runs the **expo pass (QA)**—a quick checklist before you “SERVE.”

This isn't a cute gimmick. It's a consistent frame that makes abstract concepts concrete.

**Kitchen truth:** *If it's not on the ticket or the counter, it doesn't exist.*

---

## What you'll learn

| Section | What it covers |
|---------|----------------|
| **1. Mise en Place** | How AI generates text (one slice at a time) and why tickets matter |
| **2. The Prep Counter** | Why AI "forgets," why long chats drift, and how to keep constraints visible |
| **3. Thermometers & Scales** | How tools verify reality—and how to use them |
| **4. Expo Pass** | A quality gate: how to check an answer before you trust it |
| **5. Station Workflow** | Running multi-step jobs without chaos |
| **6. Safe Handling** | What belongs on the counter—and what should stay locked up |
| **Bonus: Character Selection** | Why different models feel different (and how to pick one) |

---

## Who this is for

- **Creative and marketing teams** who use AI for planning, drafting, and organizing
- **Operations folks** who want to triage chaos into structured plans
- **Anyone** who wants to stop being surprised when AI does something weird

You don't need to code. You don't need to know what a "transformer" is. You just need to care about getting predictable, verifiable work from these tools.

---

## A note on tone

We're not going to tell you AI is magic. We're not going to tell you it's useless. We're going to treat it like what it is: a fast, pattern-matching tool that's very good at *plausible* and needs help with *true*.

The stance here is practical: **AI organizes and proposes; humans decide and verify.**

Let's start.

---

## Visual notes (HUD components to show in this section)

* **HUD Legend (one splash):** Ticket Card + Prep Counter Panel + Counter Space meter + Tool icons + Expo Pass gate (all labeled once)
* **Role label:** “EXPO (Shift Lead)” name tag at the pickup window (defines “expo” visually)
* **Quest Log preview:** the section list styled like a quest log menu (reused in Section 7)
* **Stamp vocabulary:** `MISSING INFO`, `NEEDS TOOL CHECK`, `NO PHANTOM INGREDIENTS` as small recurring pixel stamps

**First up:** How does the cook actually work? What happens when you send a ticket?
