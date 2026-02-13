# Closing Time: The Complete Kitchen Loop

You've learned the whole workflow. Here it is in one view.

---

## The Kitchen Loop (one-page summary)

### 1. Write the ticket (prompt)
- **Order:** What you want (goal)
- **House rules:** Constraints, tone, what's off-limits
- **Plating:** Output format and structure
- **Expo checks:** What must be true for you to accept it

### 2. Pack the counter (context)
- Paste only what the current task needs
- Use **recap blocks** to keep constraints visible
- Separate **Known-good facts** from **Assumptions**
- Label unknowns as **MISSING INFO**

### 3. Measure with tools
- If a fact must be true, don't let the model guess—verify it
- Paste tool outputs onto the counter
- Require **receipts** (citations to specific sources)
- Mark unverified claims as **NEEDS TOOL CHECK**

### 4. Run Expo Pass (QA)
Before you trust the output, check:
- [ ] **Constraints:** Did it follow every must/must-not?
- [ ] **Sources:** Can every important claim point to a receipt?
- [ ] **Consistency:** Does it agree with itself and the counter?
- [ ] **Edge cases:** What breaks this?

If it fails, send it back. Don't fix it in your head.

### 5. For big jobs: Station Workflow
- Don't make the model be PM + researcher + writer + QA in one prompt
- Split into stations: **Intake → Measurement → Draft → QA**
- Use **Handoff Cards** between stations to prevent drift

### 6. Safe handling
- Never paste credentials
- Prefer counts and constraints over PII dumps
- Redact identity, keep meaning
- Keep a private **order book**; paste only what the station needs

---

## The six kitchen truths

These are the one-liners that capture the guide. Use them as mental shortcuts.

1. **If it's not on the ticket or the counter, it doesn't exist.**
2. **Longer chats don't mean more memory—they mean more clutter pushing old items off.**
3. **The cook can narrate a steak. Only the thermometer tells you it's done.**
4. **Confidence is not evidence.**
5. **If it only works on perfect days, it doesn't work.**
6. **No phantom ingredients—if it wasn't provided, don't accept it as fact.**

---

## Quick-start templates

### Ticket Card
```
**Order:** [What you want]
**House rules:** [Constraints, tone, off-limits]
**Plating:** [Output format]
**Expo checks:** [What must be true]
```

### Recap Block
```
**Known-good facts:** [Verified items]
**Constraints:** [Must/must-not]
**Goal:** [Current task]
**Plating:** [Format]
**Expo checks:** [QA criteria]
```

### Handoff Card
```
**What this is:** [One sentence]
**Known-good facts:** [Confirmed]
**Assumptions:** [Quarantined]
**MISSING INFO:** [What's unknown]
**Next station goal:** [One sentence]
```

### Expo Pass Checklist
```
[ ] Constraints satisfied
[ ] Sources cited (receipts attached)
[ ] Consistent with itself and the counter
[ ] Edge cases considered
[ ] Unknowns labeled MISSING INFO or NEEDS TOOL CHECK
```

---

## Quest Log (starter missions)

1. **Try one template.** Pick a real task and use the Ticket Card format. See if the output is easier to verify.

2. **Notice when you drift.** Next time a long chat goes sideways, try a recap block instead of "keep going."

3. **Ask for receipts.** When the model gives you a number or fact, ask: "Cite the source." If it can't, label it and verify.

4. **Split a big job.** Take something you'd normally ask in one prompt and run it through stations instead.

5. **(Optional) Read the Bonus Section** to understand why different models feel different and how to pick one for a specific job.

---

## Final kitchen truth

AI is a tool. A fast, pattern-matching, plausible-sounding tool. It's not a truth oracle, and it's not a replacement for judgment.

**The cook drafts. You decide what ships.**

That's how the kitchen runs.

---

## Visual notes (HUD components to show in this section)

* **One-page poster:** Pipeline diagram + six kitchen truths (final “kitchen loop” overview)
* **Template cards:** Ticket Card / Recap Block / Handoff Card / Expo Pass rendered as CRT-style copy/paste panels (`data-label`)
* **Quest Log UI:** the 5 starter missions as a checklist menu (game UI, not appendix)
* **End screen:** a small “LEVEL CLEAR” panel with a big PASS stamp

**LEVEL CLEAR:** You’ve got a repeatable process now. Go plate something useful.
