# The Thermometer Is in the Wrong Room

*Why reliable AI systems depend on more than accurate outputs, successful tests, and increasingly sophisticated models.*

The dashboard was green.

A marketing team had recently introduced an AI-powered production system. It took approved briefs, retrieved verified product information, generated copy, and placed that copy into standardized templates.

The results looked promising. In its first month, the team produced 200 assets. Every draft received editorial approval, and an additional quality assurance sample of 40 drafts achieved a 95% pass rate.

Leadership was pleased. The team was already discussing how to increase production eightfold without hiring eight times as many people.

Then two published assets needed corrections.

Both contained product claims that were missing important qualifications. The team had approved the correct language, yet the published materials said something different.

Naturally, attention turned to the AI.

Perhaps its instructions weren't sufficiently precise. Perhaps the model needed better examples. Maybe the team should introduce a second AI to review the first one's work.

All reasonable suggestions, assuming the AI was responsible.

But further investigation revealed something interesting.

The AI had generated the correct copy. Editorial had approved it. The errors appeared afterward, when an automated layout process shortened text to fit the available space.

The shortening process had done exactly what it was designed to do. It made the text fit.

Unfortunately, making text fit and preserving the meaning of a product claim are not necessarily the same thing.

Nothing checked whether the approved language had changed before publication.

The system's quality dashboard still reported 95%.

*This is a fictional scenario, but it illustrates a failure that can occur in almost any automated workflow.*

The immediate problem was not that the AI had generated an incorrect answer. It was that the organization had built a process capable of introducing errors after its final quality check, with no reliable way to detect or prevent them.

The dashboard was accurately measuring one part of the process. It simply wasn't measuring the outcome that mattered.

**The thermometer was in the wrong room.**

And that distinction leads to a much larger question: How do we design reliable systems when we can't fully predict how they'll behave?

## Predictable and reliable are not the same thing

Consider two machines designed to maintain a room at a comfortable temperature.

The first is extremely precise. Under ideal conditions, it produces exactly the amount of heat needed to keep the room at 70°F. Its output is consistent, accurate, and entirely predictable.

The second is less precise. Sometimes it produces more heat, sometimes less. But it continuously measures the room's temperature and adjusts its behavior accordingly.

Now someone opens a window.

The first machine continues operating exactly as designed. It produces the same amount of heat it always has, even as the room becomes colder.

The second detects the change and increases its output.

Which machine would you trust to keep the room comfortable?

Probably the second.

Its individual actions are less predictable, but its overall performance is more dependable under changing conditions.

The first machine might be perfectly predictable and consistently fail to achieve its purpose.

That difference is fundamental.

**Predictability concerns what a system will do. Reliability concerns whether it continues to do what is required under the conditions in which it operates.**

Of course, the distinction depends on what we expect from the system. If we're designing a machine to produce an identical amount of heat every time, the first machine might be perfectly reliable. If we're designing one to maintain a comfortable room, it isn't.

Reliability is always relative to a requirement.

That becomes important when considering artificial intelligence.

A language model might produce slightly different answers to equivalent questions. Those differences could result from its generation process, variations in context, or changes in the surrounding workflow.

We might prefer that a system produce consistent answers, particularly when those answers concern established facts or organizational policies. But requiring identical wording in every response is not necessarily the same as requiring reliable behavior.

An assistant that uses different language to communicate the same accurate information may be working perfectly well.

Conversely, an assistant that consistently produces the same incorrect information is highly predictable and not particularly useful.

Variability alone doesn't tell us whether a system is dependable.

What matters is whether its behavior remains within acceptable limits, and what happens when it doesn't.

This isn't a new problem created by generative AI. Engineers, mathematicians, biologists, and philosophers have spent much of the last century investigating how systems maintain stability in environments they cannot completely control.

Their work offers a useful way to approach the problem.

## An old idea with surprisingly modern consequences

In 1948, mathematician [Norbert Wiener](https://mitpress.mit.edu/9780262537841/cybernetics-or-control-and-communication-in-the-animal-and-the-machine/) published *Cybernetics: Or Control and Communication in the Animal and the Machine*.

Wiener was interested in an unusual connection.

How could a mechanical device regulate its temperature, a human body maintain its internal conditions, and an automated machine correct its own movements?

These systems are extraordinarily different. Yet they share a basic organizational principle.

Each operates in an environment that can change. Each must maintain certain conditions despite those changes. And each depends on information about what is happening to guide its response.

Wiener helped establish *cybernetics* as a general framework for understanding communication, control, and regulation across mechanical, biological, and social systems.

A central concept was **feedback**.

Feedback occurs when information about a system's behavior or effects influences what the system does next.

Consider a thermostat.

It has a desired temperature, a sensor that measures the actual temperature, and a mechanism that changes the heating system's behavior.

If the room becomes too cold, the thermostat activates the heat. As the temperature rises, the thermostat eventually turns it off.

The system doesn't need to predict every gust of wind, every open door, or every change in outdoor temperature.

It needs a way to detect meaningful deviations and respond before the room becomes unacceptably uncomfortable.

This is an example of *negative feedback*: a process in which the system's response counteracts a deviation.

The word *negative* doesn't mean harmful. It describes the direction of the feedback's effect.

Positive feedback, by contrast, reinforces a change. Consider a recommendation system that promotes already-popular content. Increased visibility attracts more engagement, which can cause the content to be promoted even further.

Positive feedback can be useful. It's involved in processes ranging from biological signaling to economic growth. But it can also amplify undesirable behavior.

Neither form is inherently good or bad.

The important question is what behavior the feedback encourages and whether that behavior serves the system's purpose.

And feedback is not automatically stabilizing.

A heating system that measures temperature too infrequently might overheat the room before detecting the change. It then switches off, allowing the temperature to fall too far before responding again.

The result can be oscillation: the system repeatedly overshoots and overcorrects.

A poorly designed feedback loop can actually make performance worse.

This matters when people propose increasingly elaborate AI workflows.

Imagine one model generates a document, a second model critiques it, and the first model revises its answer.

The critic identifies another potential problem. The generator revises again. The critic finds something else.

Eventually, the document has been rewritten six times.

Is it six revisions better?

Not necessarily.

The process has produced activity, but activity isn't evidence of improvement. Without meaningful standards for evaluating the revisions and a sensible stopping condition, the system might simply alternate between competing interpretations.

Each correction may introduce a new error.

Adding feedback is not enough. The system needs feedback that measures something meaningful, arrives at an appropriate time, and supports an effective response.

### A system must be able to handle the problems it encounters

Another important contribution came from British psychiatrist and cybernetician [W. Ross Ashby](https://ashby.info/Ashby-Introduction-to-Cybernetics.pdf).

In his 1956 book *An Introduction to Cybernetics*, Ashby developed what became known as the **Law of Requisite Variety**.

His formal treatment concerns the relationship between disturbances, regulatory responses, and the range of possible outcomes.

The practical implication is relatively intuitive.

A system's ability to regulate its behavior is limited by its capacity to distinguish and respond to the disturbances that matter.

Imagine a thermostat equipped with a perfectly accurate thermometer but connected to a heater that has stopped working.

It can detect the problem. It can recognize the difference between the desired temperature and reality.

It simply cannot do anything about it.

Now consider an AI assistant used to answer employees' questions.

Some questions are straightforward. Others are ambiguous. Some require confidential information the assistant cannot access. Still others involve decisions that must be approved by a qualified person.

Suppose the assistant has only one available behavior: generate an answer.

No matter how sophisticated the underlying model becomes, the surrounding system is poorly equipped to handle these different situations.

It has no way to ask for clarification, acknowledge missing authority, defer an answer, or escalate a consequential decision.

Those are different responses to meaningfully different conditions.

Giving the assistant more freedom might improve its ability to handle unfamiliar situations. But greater autonomy also creates opportunities for new kinds of mistakes.

Sometimes the better solution is to increase the system's capacity to respond.

Sometimes it's to reduce the variety of situations the system is expected to handle.

An assistant restricted to a well-defined set of tasks, supported by authoritative information and clear escalation paths, may be substantially more dependable than one encouraged to handle everything.

Ashby's work doesn't provide a ready-made formula for configuring AI assistants. His law has specific mathematical assumptions, and contemporary applications require interpretation.

But the underlying insight is valuable:

**A system cannot reliably manage conditions it is unable to distinguish or respond to effectively.**

That includes conditions in which the appropriate response is to stop.

## You cannot correct what you cannot see

Let's return to our fictional marketing team.

The quality dashboard reports a 95% pass rate.

What, exactly, does that number tell us?

Forty drafts received additional quality checks. Thirty-eight passed.

That tells us something about those 40 drafts at the point when they were reviewed.

It doesn't establish the accuracy of every generated draft. It doesn't establish that the sample represents the full range of work. And it tells us remarkably little about what happened after the review.

Most importantly, it doesn't measure the published assets.

The two errors discovered after publication are evidence of at least two production failures. They aren't a reliable estimate of the total failure rate, because nobody systematically examined the final outputs.

There may have been other mistakes that nobody noticed.

Even the apparently impressive dashboard becomes less reassuring when leadership's scaling ambitions are considered.

At 200 assets, a sample of 40 represents 20% of production.

At 1,600 assets, the same sample represents just 2.5%.

But increasing the sample wouldn't address the central problem.

Even if every draft received additional review, the workflow could still introduce errors afterward.

The team has visibility into an intermediate result without meaningful visibility into the final outcome.

This is an **observability problem**.

In formal control theory, observability concerns whether the internal state of a system can be inferred from its outputs over time, given an appropriate model of its dynamics. Rudolf Kálman's work around 1960 helped establish observability as a foundational concept in modern control theory.

Software engineering uses the term somewhat more broadly.

In software operations, observability generally refers to our ability to understand what a system is doing through evidence such as logs, metrics, and traces of its execution.

These meanings are related, though not identical.

In practical terms, observability helps answer a question that becomes increasingly important as workflows grow more complicated:

*When something goes wrong, can we determine what happened and where?*

Suppose an AI-generated document contains an incorrect product claim.

The problem might have originated in an obsolete reference document. The retrieval process might have selected the wrong source. The model might have misunderstood accurate information.

Or the model might have produced a correct answer that another component changed.

If all we retain is the final document, we can identify the error but may struggle to determine its origin.

Now suppose the workflow preserves the relevant source versions, retrieved information, generated draft, editorial changes, layout transformations, and published output.

We can compare stages and investigate where the claim changed.

That doesn't automatically tell us whether every decision was appropriate. Nor does it guarantee that every failure can be reconstructed. Some problems involve missing information, uncertain semantics, external dependencies, or behavior that isn't adequately captured.

But it gives us evidence that makes a defensible diagnosis possible.

Without that evidence, we're largely guessing.

This is especially important for modern AI systems because their behavior depends on more than the language model itself.

The information supplied to the model, external tools, retrieval mechanisms, routing decisions, transformations, and human interactions all influence the final result.

A system can fail even when every individual component performs its assigned function correctly.

The editor approved accurate copy. The layout automation shortened it to fit. The publishing process distributed the resulting asset.

Each component accomplished its immediate task.

The overall system failed.

No individual step had responsibility for preserving the accuracy of the approved claim throughout the entire process.

The failure lived between the steps.

### A dashboard is not a safety mechanism

There's an important limitation to observability.

Knowing that something is wrong doesn't necessarily improve the outcome.

Imagine a dashboard that reports how many incorrect claims were published last week.

It's useful information. It may help identify trends or justify further investigation.

But it does nothing to prevent the next incorrect claim from being published.

This is the difference between **monitoring** and **regulation**.

Monitoring makes behavior visible.

Regulation uses information about that behavior to influence what happens next.

A complete corrective process needs some mechanism for taking action: rejecting an output, revising it, retrying a failed operation, requesting clarification, routing an exception to a specialist, or preventing a consequential action.

In our fictional marketing workflow, detecting that the layout process has changed approved copy is only part of the solution.

Someone—or something—must be able to determine whether the change is acceptable.

And there must be authority to stop publication when it isn't.

Otherwise, we've simply built a more sophisticated way to observe failure.

This distinction has become increasingly relevant as organizations deploy AI systems beyond controlled testing environments.

In March 2026, the US National Institute of Standards and Technology published [*Challenges to the Monitoring of Deployed AI Systems*](https://doi.org/10.6028/NIST.AI.800-4).

The report draws on practitioner workshops and a literature review to examine the difficulties of monitoring AI after deployment.

Its central concern is that pre-deployment evaluations, while useful, cannot capture every condition a system will encounter in the real world.

Inputs change. Operational environments evolve. New interactions produce unexpected behavior. Even well-tested systems can encounter situations their designers didn't anticipate.

The report also makes an important qualification: robust AI monitoring remains an evolving discipline. Standardized, validated approaches are not yet available for every problem.

Monitoring is necessary, but it isn't a complete solution.

A system may be observable in some respects while remaining opaque in others. Some failures are difficult to define, much less detect automatically.

And collecting more information introduces its own costs, including privacy, security, storage, and operational complexity.

The objective should not be to record everything.

It should be to make the evidence needed for meaningful decisions available to the people and mechanisms responsible for those decisions.

## When more AI makes the system less reliable

When an AI workflow produces errors, a common suggestion is to introduce another AI to check its work.

That can be useful.

A second model might identify unsupported claims, inconsistent terminology, missing context, or problems that the generating model overlooked.

But the presence of a reviewer doesn't automatically make the workflow reliable.

The reviewer has limitations of its own.

Research on using language models as evaluators has identified several sources of bias. For example, a [2025 study by Shi and colleagues](https://aclanthology.org/2025.ijcnlp-long.18/) examined position bias in language-model evaluations, finding that judgments can be influenced by the order in which candidate responses are presented. The magnitude and character of these effects varied across models and tasks.

This doesn't mean model-based evaluation is ineffective.

It means the evaluator is another component that needs to be evaluated.

Its judgments are not an independent guarantee of correctness simply because the evaluation happens in a separate step.

Two models may overlook the same ambiguity. They may rely on similar assumptions or insufficient evidence. A critic may confidently reject a correct answer or approve a plausible but incorrect one.

The important questions are whether the evaluator can detect the relevant failures, how often it misses them, and what happens when its judgment is uncertain.

In some situations, adding another model is a sensible choice.

In others, the problem can be addressed more directly.

Consider the missing qualifications in our fictional production workflow.

One option is to instruct a second AI to inspect every finished asset and determine whether its claims remain accurate.

That might detect some failures. But it also creates another probabilistic judgment process.

A simpler intervention would be to preserve the approved text and compare it with what appears in the final layout.

Software can determine whether a passage changed without needing to understand its meaning.

If the approved language has not changed, that particular risk has not materialized. If it has changed, the workflow can prevent publication until the modification is verified.

This doesn't mean every change is unsafe.

A shorter sentence might preserve its meaning perfectly well. A seemingly minor alteration might completely change the scope of a product claim.

Detecting a textual difference and evaluating its semantic significance are separate tasks.

The first can often be handled by conventional software. The second may require a language model, a qualified human reviewer, or a carefully defined combination of both.

And if the layout routinely needs shorter copy, perhaps the problem should be addressed before it reaches layout.

The workflow could generate and approve shorter variants in advance. Critical qualifications could be protected from automatic removal. Assets that cannot accommodate required language could be routed to a different template.

These interventions reduce the opportunity for the failure to occur in the first place.

They also illustrate an important principle of reliability engineering:

**The best safeguard is not necessarily the most sophisticated one. It's the one that addresses the relevant failure mechanism with acceptable cost and risk.**

Adding controls indiscriminately can produce new problems.

Every additional model, approval stage, transformation, and automated decision creates another dependency.

More components mean more potential failure points, more interactions to understand, and often more time and resources required to operate the system.

A workflow that repeatedly sends an output between competing evaluators may be harder to understand than one with a straightforward, well-placed validation step.

Sometimes the most effective improvement is removing complexity.

This is why diagnosing the actual failure matters before deciding how to correct it.

If the language model is producing inaccurate drafts, improving the model or its supporting context might be appropriate.

If a downstream process is corrupting accurate information, improving the model won't solve the problem.

And if a workflow is attempting tasks for which no adequate safeguards exist, restricting its scope may be more responsible than adding another layer of automation.

## How reliable is reliable enough?

Suppose an AI assistant answers 99% of questions correctly.

Is that good?

It depends.

For an optional brainstorming tool, 99% accuracy might be excellent.

For a system generating legally consequential statements, a 1% error rate could be unacceptable, particularly if errors can reach the public without verification.

At 10,000 comparable operations, a true 1% failure rate would correspond to roughly 100 failures on average.

Whether those failures matter depends on what they are.

An awkwardly phrased headline and an inaccurate legal qualification should not carry the same consequences.

This is why reliability cannot be reduced to one accuracy percentage.

The severity of failures, the conditions under which they occur, and the system's ability to detect and contain them all matter.

A system that produces occasional harmless variations but reliably prevents dangerous outputs from reaching users may be more dependable for its intended purpose than one with a higher average accuracy score and no effective safeguards.

Software reliability engineers have dealt with related trade-offs for decades.

Google's [Site Reliability Engineering approach](https://sre.google/sre-book/embracing-risk/) explicitly recognizes that pursuing ever-higher reliability involves costs.

Engineering resources devoted to preventing increasingly rare failures are resources unavailable for other improvements. Not every additional increment of reliability creates enough value to justify its cost.

Google's framework uses *service-level indicators* to measure relevant behavior and *service-level objectives* to define acceptable performance targets.

The important idea isn't that every system should accept some fixed percentage of mistakes.

It's that reliability targets should reflect what users actually need, and the organization should understand how it will respond when those targets aren't met.

For an AI-assisted creative brainstorming tool, the organization might accept substantial variability because the output is reviewed and revised before use.

For an automated system making consequential decisions, requirements may be much stricter.

Some failures may be unacceptable regardless of how rarely they occur.

In those cases, average model accuracy is insufficient. The workflow needs stronger preventive controls, independent validation, restricted authority, or human approval.

And there are situations where a system cannot currently demonstrate adequate reliability.

The appropriate response may be to delay deployment or narrow the task.

That isn't a failure of technological ambition.

It's recognition that deploying a system means accepting responsibility for its behavior under real operating conditions.

### Reliability has to survive contact with reality

A successful evaluation tells us how a system performed under the conditions tested.

It doesn't guarantee the same performance when those conditions change.

Before deployment, evaluation should include representative tasks, meaningful edge cases, known failure modes, and the requirements that matter most.

During execution, checks should protect consequential actions.

After deployment, monitoring should reveal how the system performs in practice, including failures and conditions not adequately represented during testing.

These activities serve different purposes.

A pre-deployment test might reveal that a model occasionally omits important information.

An execution-time safeguard might prevent an incomplete claim from being published.

Post-deployment monitoring might reveal that a new template is causing an unusual number of exceptions.

Together, they create opportunities to identify problems, contain their effects, and improve the workflow.

But they shouldn't be confused with a guarantee that every error will be caught.

Some failures won't be visible until an external stakeholder reports them. Some standards of correctness are subjective or contested. Some risks cannot be reliably measured with the available evidence.

Reliable system design requires acknowledging those limitations rather than pretending they disappear when enough checks are added.

And if the organization cannot tell whether a critical requirement is being met, that uncertainty should influence what the system is allowed to do.

## Closing the loop

We can bring these ideas together in a straightforward mental model.

A dependable workflow needs to establish what acceptable performance looks like, observe what actually happens, compare those observations against its requirements, and respond when reality differs from expectations.

**Define → Observe → Compare → Respond.**

Then observe again to determine whether the response worked.

This is a practical synthesis of control and reliability principles, not a formal theorem. Its value lies in the questions it encourages us to ask.

What outcomes are we trying to preserve?

What evidence would tell us those outcomes are no longer being achieved?

How do we distinguish an acceptable variation from a consequential failure?

What actions are available when something goes wrong?

And who has the authority to take them?

Notice that none of these questions begins with the assumption that the AI is the problem.

They begin with the system's purpose.

That shift changes how we evaluate proposed improvements.

A better prompt may be useful if the instructions are causing errors. Better retrieval may help if the system lacks relevant information. Another AI evaluator may be appropriate when it can demonstrably identify failures that other controls miss.

But those interventions should follow from an understanding of the problem.

They shouldn't be our automatic responses to uncertainty.

The fictional marketing team illustrates why.

Its known production failures weren't caused by a model inventing claims. They resulted from a transformation that changed approved content without verification.

A defensible improvement would protect the meaning of approved claims as they move through production.

That might involve retaining the approved copy, detecting downstream modifications, blocking unverified material changes, and providing approved alternatives when templates require shorter language.

The team would then test whether those controls actually prevent the relevant failures while keeping review workload and production delays manageable.

It would also need to determine who owns exceptions and what circumstances justify stopping publication.

The goal wouldn't be to eliminate every possible variation.

It would be to prevent unacceptable outcomes and make the remaining risks visible enough to manage.

There's another distinction worth making here.

A system can correct an individual output without learning anything in the machine-learning sense.

If a validation check rejects a changed claim and the workflow restores the approved version, that's an operational correction.

If repeated incidents lead the organization to redesign the layout process, that's a process improvement.

If the underlying model is retrained using new data, that's model learning.

All three can affect reliability, but they are different mechanisms.

A workflow can become substantially more dependable without modifying the model at all.

And that may be the most useful consequence of thinking about AI through the lens of cybernetics.

It shifts our attention from the intelligence of an individual component toward the behavior of the complete system.

## Someone still has to decide what matters

There's a philosophical complication hidden inside every feedback loop.

A thermostat knows whether the room is too cold because someone selected a desired temperature.

The machine can measure a difference. It can activate the heater. It can regulate the room within the limits of its design.

But it doesn't independently determine what temperature the occupants ought to prefer.

That decision comes from outside the control mechanism.

AI systems face a similar problem.

A workflow can measure performance against a defined objective. It can identify deviations, evaluate possible corrections, and sometimes implement those corrections automatically.

But someone still has to determine which outcomes matter.

In our marketing example, the layout automation prioritized fitting text into the available space.

That was a perfectly reasonable design objective.

It was simply insufficient.

The organization also needed to preserve the accuracy of product claims, including qualifications that might make the copy longer or less convenient to place.

Those requirements can conflict.

Should the system shorten the copy, change the template, delay production, or request an exception?

The answer depends on priorities that cannot be derived from production efficiency alone.

These are organizational decisions involving risk, authority, and accountability.

As AI systems become more capable of independently evaluating and modifying their own behavior, such decisions become more important, not less.

An automated system can optimize what we've defined. Whether we've defined the right thing remains a separate question.

And a perfectly functioning feedback loop can reliably produce the wrong outcome if its objective is poorly chosen.

That's why reliable systems require more than technical safeguards.

They require people who understand what the system is supposed to accomplish, which trade-offs are acceptable, and when automated decisions must give way to human judgment.

The objective is not to remove uncertainty from every step of the process. For complicated systems operating in changing environments, that may be impossible.

The objective is to design around uncertainty.

To know what we can observe, what we can control, and what remains beyond our confidence.

To catch consequential failures before they spread when possible, and to have meaningful recovery mechanisms when they don't.

And to recognize that a system's ability to detect a problem is only useful if someone—or something—can respond appropriately.

Our fictional marketing team began with a green dashboard and a reasonable belief that its AI workflow was performing well.

The problem wasn't that the dashboard was lying.

It was reporting what it had been built to measure.

The mistake was assuming that measurement represented the reliability of the entire system.

**Reliability isn't the absence of uncertainty. It's the capacity to operate dependably despite it.**

We don't need to predict every action a system will take. We need enough understanding of its operating conditions, limits, and failure mechanisms to judge whether it can continue doing what matters.

Which leaves us with a useful question to ask before trusting any automated workflow:

*When this system gets something wrong, how will it know—and what happens next?*

If we can't answer that question, another green dashboard probably won't help.

We might just need to move the thermometer.

---

## Selected references and further reading

**Foundational works**

- [Norbert Wiener, *Cybernetics: Or Control and Communication in the Animal and the Machine* (1948)](https://mitpress.mit.edu/9780262537841/cybernetics-or-control-and-communication-in-the-animal-and-the-machine/). A foundational work connecting feedback, communication, and control across biological and mechanical systems.

- [W. Ross Ashby, *An Introduction to Cybernetics* (1956)](https://ashby.info/Ashby-Introduction-to-Cybernetics.pdf). Particularly Chapter 11, which develops the Law of Requisite Variety, and Chapter 12, which explores error-controlled regulation.

**Contemporary research and applications**

- [NIST, *AI Risk Management Framework: Measure Playbook*](https://airc.nist.gov/airmf-resources/playbook/measure/). Guidance on selecting appropriate risk measurements, evaluating AI systems, and tracking performance before and after deployment.

- [NIST, *Challenges to the Monitoring of Deployed AI Systems* (2026)](https://doi.org/10.6028/NIST.AI.800-4). An examination of post-deployment AI monitoring practices, limitations, and unresolved challenges.

- [Google, *Site Reliability Engineering: Embracing Risk*](https://sre.google/sre-book/embracing-risk/) and [*Service Level Objectives*](https://sre.google/sre-book/service-level-objectives/). Practical discussions of reliability targets, measurement, acceptable risk, and engineering trade-offs.

- [Shi et al., *Judging the Judges: A Systematic Study of Position Bias in LLM-as-a-Judge* (2025)](https://aclanthology.org/2025.ijcnlp-long.18/). Peer-reviewed research on biases affecting language-model-based evaluation.

- [OpenTelemetry, *Observability Primer*](https://opentelemetry.io/docs/concepts/observability-primer/). An accessible introduction to modern software observability and the evidence used to understand complex systems.
