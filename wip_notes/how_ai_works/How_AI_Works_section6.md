# Safe Handling & Permissions: What you should (and shouldn’t) put on the counter

### Hook: the “helpful” paste that wasn’t safe

You’re trying to be efficient, so you paste the full RSVP export: names, emails, phone numbers, plus a column called “Allergies / medical notes.”

The model *can* help… but you just put more on the prep counter (context) than the job actually required.

This chapter is how to keep the work fast **without** turning the counter into a junk drawer of sensitive stuff.
**Kitchen truth:** *A clean counter isn’t just organized—it’s safer.*

---

## 1) Permissions are “who can see the counter”

In a real kitchen, “who can see the prep counter” depends on the space:

* Public line during service (lots of eyes)
* Back-of-house prep table (restricted)
* Locked office (restricted + logged)

AI is similar. Different products and setups have different retention, access controls, and admin policies. The key habit is simple:

Treat anything you paste like you’re handing it to **another system**—because you are.

So before you paste, ask two boring-but-powerful questions:

1. **Do I have permission to share this outside my org/team?** (Even if it’s “just a tool.”)
2. **Does the model actually need this exact detail to do the task?**

**Quick Permission Check (copy/paste):**
- Can I share this outside my org/team?
- Does this station need this exact detail?

If the answer to #2 is “no,” don’t paste it. If the answer to #1 is “not sure,” route through the approved channel or redact first.
**Kitchen truth:** *If you wouldn’t tape it to the pass, don’t put it on the counter.*

---

## 2) The “do not put on the counter” list (with human reasons)

You don’t need paranoia. You need categories.

### A) Credentials (never)

* Passwords, API keys, OAuth tokens, private keys, session cookies
  If a credential hits the counter, assume it’s compromised and rotate it.

**Safe pattern:** replace with placeholders like:

* `API_KEY=<REDACTED>`
* `Authorization: Bearer <TOKEN_REDACTED>`

**Kitchen truth:** *Secrets don’t belong on the line.*

### B) PII (Personally Identifiable Information) and “PII-adjacent” (almost never)

PII = info that can identify a real person: name + email + phone, addresses, IDs, etc.
PII-adjacent = anything that becomes identifying when combined (unique job title + small team + city).

**Safe pattern:** aggregate or pseudonymize (swap real identities for stable labels).

* “Guest_01, Guest_02…”
* “Customer_A, Customer_B…”
* “Manager_X…”

**Kitchen truth:** *If a person can be identified, you’re holding something sharp.*

### C) Proprietary / confidential docs (usually no; sometimes “small excerpts”)

Internal strategy decks, unreleased roadmaps, customer lists, legal terms, source code you don’t have rights to share, partner docs under NDA.

**Safer move:** paste only the *minimum excerpt* needed, and keep the rest in your own order book.
**Kitchen truth:** *Don’t dump the whole storeroom when the recipe needs one spice.*

---

## 3) Redaction patterns that actually work (and don’t break the job)

Redaction fails in two common ways:

* You remove so much meaning the model can’t help.
* You leave “breadcrumbs” that still identify people.

Here are reliable patterns that keep meaning:

### Pattern 1: Replace with typed placeholders

* `[NAME]`, `[EMAIL]`, `[PHONE]`, `[ADDRESS]`, `[EMPLOYEE_ID]`, `[CLIENT]`
  Good when the *shape* matters (“there is an email”), but the value doesn’t.

### Pattern 2: Pseudonyms with stable IDs

* `Guest_01`, `Guest_02` (and keep the mapping in your private order book)
  Good when you need consistency across steps (“Guest_07 is vegetarian and also allergic to walnuts”).

### Pattern 3: Bucket instead of list

Instead of 60 rows of people, give:

* Headcount totals
* Dietary counts
* Constraint summary
* Any edge cases (“2 severe allergies: peanuts, shellfish”)

This is usually enough for planning, messaging, and QA—without exposing identities.

**Kitchen truth:** *Redact the identity, keep the constraint.*

---

## 4) Keep an “Order Book” outside the model, paste only what’s needed

Your order book is your private source of truth (spreadsheet, doc, notes app, secure system). It contains the raw sensitive details.

The model doesn’t need your whole order book. It needs **a clean ticket** plus **just enough counter items** to do the next station’s job.

A practical workflow:

1. **Order Book (private):** full RSVP list, real names/emails, exact allergy notes
2. **Counter Paste (sanitized):** counts, constraints, pseudonyms, excerpts
3. **Station Tickets:** one task at a time (intake → draft → QA), with explicit “no new facts”

Example “counter paste” for catering:

* Total guests: 60
* Vegetarian: 12
* Severe allergies present: peanuts (1), shellfish (1)
* Other constraints: no stove; warming trays only
* Edge cases: Guest_07 = vegetarian + nut allergy; Guest_19 = gluten-free

That’s enough to produce menus, labels, comms drafts, and shopping lists—without exposing everyone’s inbox.

**Kitchen truth:** *The order book stays locked; the counter gets the portion you’re cooking right now.*

---

## 5) Running example: “Catering Chaos” without leaking the guest list

### The risky version (what people do)

> “Here’s the RSVP export (pastes 60 rows with names, emails, phone numbers, allergy notes). Make a plan.”

### The safe version (what works)

**TICKET (sanitized):**

* **Order:** Create menu + shopping list + timeline for 60 guests.
* **House rules:** Peanut-free. No stove. Label allergens.
* **Prep counter items:**

  * Headcount: 60
  * Dietary counts: vegetarian 12; gluten-free 4 (count only)
  * Severe allergies: peanuts (1), shellfish (1)
  * Edge cases (pseudonyms): Guest_07 vegetarian + nut allergy; Guest_19 gluten-free
* **Plating:** Menu (3 sections) + shopping list by aisle + “banned ingredients” confirmation line
* **Expo checks:** “No peanuts anywhere (including sauces). Unknown ingredients labeled MISSING INFO.”

Same usefulness. Way less exposure.

**Kitchen truth:** *You can plan the service without publishing the guestbook.*

---

## Expo Check: should this go on the counter?

**Question:**
You’re about to paste a spreadsheet with customer names, emails, renewal dates, and contract notes so the model can “draft follow-up emails.” What’s the safer move?

**Expo answer:**
Keep the raw sheet in your order book. Paste only what’s needed for the drafting task: anonymized rows (Customer_A…), or better—draft one email template + a few redacted examples. If personalization is needed, use placeholders and do the final mail-merge/personalization in your own tools. Any uncertainty about permission gets **NEEDS TOOL CHECK (policy)**.

**Kitchen truth:** *Draft the script on the counter; keep the identities in the lockbox.*

---

## Common failure modes (and how to fix them)

### 1) “Just this once” credential spill

You paste a token “temporarily” so the model can debug a curl command.

**Fix:** redact immediately, rotate the secret, and use placeholders going forward.
**Kitchen truth:** *A spilled secret isn’t a mistake—it’s a reset.*

### 2) Over-sharing by default (full docs, full exports, full screenshots)

You paste the whole contract because searching it feels annoying.

**Fix:** extract only the relevant clause(s) and paste a short excerpt.
**Kitchen truth:** *The counter is for today’s task, not the whole archive.*

### 3) Breadcrumb identity leaks

You redact the name but keep “only left-handed neurosurgeon at Company X in Boise.”

**Fix:** remove or generalize unique descriptors; use buckets or pseudonyms.
**Kitchen truth:** *If it’s uniquely identifying, it’s still identifying.*

### 4) Over-redaction that destroys meaning

You redact the one thing that mattered (“allergy: [REDACTED]”).

**Fix:** redact identity, not constraints: keep “peanut allergy” but remove who.
**Kitchen truth:** *Don’t blind the cook—just don’t hand them the wallet.*

---

## TL;DR Panel

* Permissions = who’s allowed to see what you paste; when in doubt, treat it like sharing externally.
* Never paste credentials. Rotate if you do.
* Avoid PII and proprietary dumps; prefer counts, constraints, pseudonyms, and small excerpts.
* Use redaction patterns that preserve meaning: placeholders, stable IDs, buckets.
* Keep a private order book; paste only what the current station needs.

**That's the core guide.** You now have the mental model and the templates to work with any AI system effectively.

**Want more?** The Bonus Section covers *Character Selection*—why different models feel different, and how to pick the right one for a specific job.

---

## Visual notes (HUD components to show in this section)

* **Hook:** Prep Counter Panel overflowing with “RSVP_EXPORT.csv” + a flashing “TOO MUCH ON COUNTER” meter
* **Permissions:** A “Staff Only” door icon next to the counter, labeled “Who can see this?”
* **Redaction patterns:** Collectible item cards: `[EMAIL]`, `Guest_07`, “Bucket totals”
* **Order book:** Locked “Back Office Ledger” panel; only sanitized “tray” items move to the counter
* **Avoid visual confusion:** Back Office Ledger (your private docs) should look distinct from Back Room (learned technique, locked)
* **Before/after compare:** Use the `.image-compare` slider for “raw dump vs redacted/bucketed”
* **Expo Check:** Expo Pass stamp: “LEAK RISK → REDACT / AGGREGATE / USE PLACEHOLDERS”
