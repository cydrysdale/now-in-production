# Trace an answer back to its evidence

Thinking in Systems · Essay 03
All the Information, None of the Context
By Chris Yasuda Drysdale

Choose one question your assistant is expected to answer. Use records from an
actual run where possible. Mark unknowns rather than filling them in by inference.

These four concerns regroup [essay one's five-stage diagnostic](https://cydrysdale.github.io/now-in-production/guides/when-ai-gets-the-right-answer.html#diagnostic-title).
Source and retrieval retain their earlier roles. Organization includes authority,
scope and the connections between records. Application combines interpretation
with answer and verification.

## The question and the answer

User's question (including intended use and date):

Assistant's answer:

Expected answer, verified by:

Conditions that could change the expected answer:

## 1. Source

Which authoritative records support the expected answer? Include owners,
versions, dates and applicable scope.

What is missing, outdated or contradictory?

## 2. Organization

How is each record connected to the subject of the question?
(For example: asset → license; license → amendment; campaign → planned use.)

Which record governs this use, and what establishes its authority? What takes
precedence when records disagree?

Which relationships or authority decisions remain unclear, and who can resolve them?

## 3. Retrieval

Which passages actually reached the model? Save their source identifiers and
surrounding context, where available.

Which necessary passages were missing? Which irrelevant or outdated passages
could have complicated the answer?

## 4. Application

Compare each claim in the answer with the evidence supplied to the model.
Were the relevant restrictions, exceptions and dates applied correctly?

Does each citation support the claim it accompanies, including its scope?

What conclusion does the evidence support? What does it leave unresolved?

## The next step

Working explanation for the failure (more than one stage may be involved):

For example: missed evidence during retrieval, conflicting guidance, or a
misinterpreted rule. Model capability is a possible cause to test when the
evidence and instructions are adequate but the application still fails.

Smallest useful change to test:

What result would support or challenge that explanation?

Who must resolve any remaining authority or approval question?

---

This is a working diagnostic, not a standardized taxonomy. A plausible generated
explanation is not a record of the model's internal decision process. Inspect
available inputs and outputs, and keep unobserved steps marked as unknown.

Guide: https://cydrysdale.github.io/now-in-production/guides/all-the-information-none-of-the-context.html
