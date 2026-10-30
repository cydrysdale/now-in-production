# The Human in the Loop Isn't Always in Control

*Why distributing cognitive work is easy—and distributing judgment responsibly is not.*

At the end of an automated workflow, there's a button labeled **Approve**.

A person clicks it. A document gets published, a recommendation becomes a decision, or an action is taken on someone's behalf.

The system records who approved the result. There's an audit trail, a timestamp, and a human name attached to the outcome.

Everything appears to be working as intended.

But suppose the result turns out to be wrong.

The person who approved it didn't have access to the original information. They weren't qualified to evaluate one of the claims. They had thirty seconds to review something that would ordinarily take twenty minutes to verify.

Technically, a human made the final decision.

Did that human actually exercise any meaningful control?

This is one of the more consequential problems emerging from the adoption of artificial intelligence. Organizations increasingly rely on AI to perform work that once required human expertise, then preserve some form of human approval as a safeguard against mistakes.

The arrangement sounds reasonable. Machines handle the repetitive work. Humans provide the judgment.

Unfortunately, putting those two things together doesn't guarantee that either will happen.

The deeper problem is that we've been treating human involvement as though it were equivalent to human judgment. We've also been treating judgment as though it necessarily occurs at the end of a process, when someone accepts or rejects a finished result.

Neither assumption holds up particularly well.

To understand why, we need to reconsider something even more fundamental: where thinking actually happens.

## The mind was never working alone

In 1995, cognitive scientist and anthropologist Edwin Hutchins published *Cognition in the Wild*, an unusual investigation into how people think while performing complicated tasks.

Hutchins had spent years studying navigation, including the work performed aboard large naval vessels. Rather than bringing participants into a laboratory to investigate isolated mental processes, he examined cognition where it occurred naturally.

Consider what it takes to navigate a ship into port.

No single crew member necessarily performs every calculation, maintains every relevant piece of information, or personally observes everything needed to bring the vessel safely to its destination.

Different people perform different functions. Instruments provide measurements. Charts preserve spatial information. Established procedures coordinate activities. Information moves between participants, sometimes changing form as it moves.

Someone measures a bearing. Someone else records it. Another person incorporates the information into a representation of the ship's position.

The resulting navigation depends on how these activities work together.

Hutchins proposed that we could understand this process more effectively by treating the entire arrangement—people, instruments, representations, and procedures—as a cognitive system.

This perspective became known as **distributed cognition**.

Instead of asking only what an individual knows or calculates, distributed cognition examines how information is represented, transformed, communicated, and used across a larger system.

The distinction is important.

A chart doesn't need to understand navigation to participate in the process. A measuring instrument doesn't need to know why a particular reading matters. Individual crew members don't need to hold identical knowledge.

Yet their coordinated activity can produce an outcome that depends on all of them.

This doesn't establish that an organization has a conscious mind or that every tool participating in a cognitive process possesses understanding. Those are separate philosophical questions.

Distributed cognition offers something more immediately useful: a different unit of analysis.

When we want to understand how a complicated task gets accomplished, the individual person may not be the most informative place to begin.

In 2000, James Hollan, Hutchins, and David Kirsh extended this perspective into human-computer interaction, arguing that understanding how people work with technology requires examining the broader environments in which their activities unfold.

This should sound familiar to anyone who has worked on a complicated project.

A designer uses reference materials, established standards, and feedback from colleagues. A developer relies on documentation, test suites, and version control. A project manager maintains timelines and dependencies in systems that other people update.

The information required to accomplish the work is distributed across the organization.

We don't ordinarily conclude that these people are less capable because they rely on external resources.

In fact, those resources are often what make sophisticated work possible.

A good checklist doesn't replace professional competence. It allows competence to operate without depending entirely on memory.

A shared design system doesn't eliminate creative judgment. It preserves decisions that shouldn't need to be reconsidered every time someone creates a new document.

The distinction matters because artificial intelligence isn't the first technology to redistribute cognitive work.

It's simply expanding the range of activities that can be redistributed.

And that raises a much harder question than whether machines can think.

**What happens when the work we redistribute includes the work of making judgments?**

## Delegating work is not the same as delegating decisions

Cognitive scientists Evan Risko and Sam Gilbert describe *cognitive offloading* as using external actions or resources to reduce the mental demands of a task.

Writing down a phone number is a simple example.

Instead of maintaining the number in working memory, we store it somewhere in the environment. The information hasn't disappeared. We've changed where it resides and how we access it.

Something similar happens when we use calendars, reminders, search engines, or reference documents.

These tools let us spend less cognitive effort on activities that don't necessarily deserve our undivided attention.

That can be enormously useful.

The trouble begins when we treat every kind of cognitive offloading as though it had the same implications.

There's a substantial difference between asking a system to remember information, asking it to analyze information, and allowing it to decide what should happen next.

In 2000, researchers Raja Parasuraman, Thomas Sheridan, and Christopher Wickens proposed a model distinguishing four broad functions that can be automated.

A system can acquire information, analyze it, select a decision or action, and implement that action.

Each function can be automated to a different degree.

Consider a hypothetical assistant that helps employees create business proposals.

It might retrieve relevant material from an internal knowledge base. That's information acquisition.

It might compare the client's requirements against the organization's available services. That's analysis.

It might recommend a particular proposal or pricing arrangement. That's decision selection.

And it might generate and send the finished proposal. That's action implementation.

The assistant could perform all four activities, but giving it permission to perform one doesn't necessarily justify allowing it to perform the others.

More importantly, the decisions involved aren't confined to the recommendation itself.

Someone must decide which sources the assistant can use, which rules govern its recommendations, what information it's allowed to disclose, and under what circumstances it can act without additional authorization.

Those are also decisions.

They may be made by people who never see the finished proposal.

The organization has already exercised considerable judgment before the person at the end of the process clicks anything.

This exposes a limitation in the way we commonly discuss human–AI collaboration.

We tend to imagine a division between human thinking and machine execution. The machine handles the preparation, and the human supplies the final judgment.

But a modern AI workflow doesn't necessarily divide itself along those lines.

The system might make consequential choices while retrieving information, interpreting a request, or deciding which instructions apply. A person might then approve the result without realizing which decisions have already been made.

In other words, **the moment of approval may not be the moment when the most important decisions occur**.

If we want to understand who controls a system, we have to examine the entire sequence of decisions—not simply the last person to touch its output.

## The strange problem of supervising something that rarely fails

The risks of automation are not new.

In 1983, engineer and psychologist Lisanne Bainbridge published a paper titled *Ironies of Automation*.

Bainbridge was concerned with industrial automation, particularly systems designed to perform routine operations while leaving human operators responsible for monitoring and handling exceptional conditions.

The arrangement had an obvious appeal.

Machines could perform repetitive tasks more consistently. Human operators could intervene when something unusual happened.

But Bainbridge identified an uncomfortable contradiction.

The more successfully a system automated routine activities, the less opportunity its human operators had to practice the skills needed when automation failed.

At the same time, those operators could be left responsible for diagnosing unfamiliar problems under unusually difficult circumstances.

Think about what that demands of the person.

They must remain attentive while the system performs correctly, sometimes for extended periods. They must recognize the rare occasion when its behavior becomes inappropriate. They must understand the situation well enough to diagnose the problem.

And they must do this despite having less direct experience performing the underlying task.

Automation can remove ordinary work while making the remaining work more difficult.

Bainbridge was writing about industrial control systems, not generative AI. The specific operating conditions are different, and her conclusions shouldn't be transferred indiscriminately.

But the underlying design problem is remarkably relevant.

Consider someone responsible for reviewing AI-generated documents.

The assistant produces twenty documents a day. Most are correct. The reviewer gradually learns that accepting its recommendations rarely causes problems.

Over time, review can become less an investigation and more a ritual.

Then, one day, the assistant produces a document containing a subtle but consequential error.

The reviewer has the authority to reject it.

They may even have the technical ability to correct it.

But do they have the information, expertise, attention, and practiced judgment required to recognize the problem?

These are separate questions.

A person can possess formal authority over a decision without possessing the practical means to evaluate it.

The difficulty becomes especially pronounced when automation is introduced specifically to reduce the time people spend on a task.

If the financial justification for automation assumes that a reviewer will spend almost no time examining the result, we shouldn't be surprised when their review becomes superficial.

We've created a system that depends on human judgment while simultaneously discouraging the conditions required to exercise it.

That isn't necessarily a failure of the individual reviewer.

It's a failure to design the human role as carefully as the automated one.

## Two heads aren't automatically better than one

There's a comforting assumption behind much of the enthusiasm for human–AI collaboration.

Humans are good at some things. Machines are good at others. Combine them, and the result should be better than either working independently.

Sometimes that's true.

But it's not a mathematical certainty.

In 2024, researchers Michelle Vaccaro, Abdullah Almaatouq, and Thomas Malone published a systematic review and meta-analysis examining when combinations of humans and AI actually improve performance.

They analyzed 106 experimental studies reporting 370 effect sizes. The studies included comparisons between humans working alone, AI systems working alone, and combinations of the two.

The findings complicate the usual story.

On average, human–AI combinations performed better than humans working alone. However, they performed worse than the stronger of the human-only and AI-only alternatives.

This is an important distinction.

Adding AI can improve human performance without producing a system that is better than its best component.

The researchers also found meaningful differences between types of tasks.

Combining humans and AI was associated with performance losses in decision-making tasks. Creative or content-generation tasks showed more promising results, although the average evidence for synergy in that category did not establish a statistically significant advantage over the best individual performer.

These findings concern the experimental configurations studied, predominantly from research published between 2020 and mid-2023. They aren't a universal verdict on every contemporary AI system.

Nevertheless, they challenge a remarkably persistent assumption.

**Collaboration is not automatically an improvement. Its value depends on how the work is divided and coordinated.**

Think about a person evaluating an AI recommendation.

If the AI is better at the task, but the person routinely substitutes a less accurate judgment, adding human involvement can reduce performance.

If the person is more knowledgeable but tends to defer to the machine, the same problem can occur in reverse.

Even when both participants are individually competent, their interaction can introduce errors that neither would have made independently.

Researchers have studied several related phenomena.

*Automation bias* describes forms of inappropriate reliance on automated recommendations, including accepting incorrect suggestions or overlooking problems that the system fails to identify.

The opposite problem also exists.

Research on *algorithm aversion* has found that people may become reluctant to rely on algorithms after observing errors, even when the algorithms outperform human alternatives.

The goal, then, isn't to maximize human involvement or maximize automation.

It's to develop arrangements in which each participant's involvement improves the outcome.

John Lee and Katrina See explored this problem in their 2004 review of trust in automation. Their emphasis was on **appropriate reliance**: people should use automation in ways that reflect its actual capabilities and limitations, rather than trusting or rejecting it indiscriminately.

That requires more than presenting a confidence score or telling people to be careful.

It requires designing the interaction itself.

In a 2021 experiment involving 199 participants, Zana Buçinca and colleagues studied interventions intended to make people engage more critically with AI recommendations.

Some interventions significantly reduced overreliance compared with simpler approaches that provided AI explanations.

There was a catch.

Participants tended to rate the interventions that most effectively reduced overreliance less favorably.

The methods that encouraged better judgment weren't necessarily the methods people preferred using.

That should give anyone designing an AI product something to think about.

We often treat friction as a defect in an interface. Sometimes it is. An unnecessary confirmation screen or redundant approval step can make a process slower without making it safer.

But friction can also create the conditions for deliberate thought.

The challenge is distinguishing between the two.

A pause that merely forces someone to click another button accomplishes very little. A pause that requires someone to identify the evidence supporting a consequential claim may serve an entirely different purpose.

The difference isn't the number of actions.

It's what those actions require the person to think about.

## What happens to judgment when the machine does the work?

Automation changes more than the distribution of tasks. It can change the cognitive habits of the people using it.

A 2025 study by researchers including Hao-Ping Lee and Advait Sarkar examined how knowledge workers reported using critical thinking when working with generative AI.

The researchers surveyed 319 knowledge workers, collecting 936 examples of AI-assisted tasks.

They found an association between greater confidence in generative AI and lower self-reported critical-thinking effort. Greater confidence in one's own ability to perform a task was associated with more critical-thinking engagement.

But the findings were more nuanced than the claim that AI makes people stop thinking.

Participants described changes in where they directed their attention.

Work that previously involved gathering information increasingly involved verifying information.

Work that required solving a problem shifted toward integrating AI-generated responses.

And work that involved directly producing an outcome increasingly involved supervising or managing the process.

These are different forms of cognitive activity.

The study relied on self-reports and associations. It doesn't establish that generative AI causes a general decline in critical-thinking ability, nor does it tell us what happens to those abilities over a period of years.

Still, it identifies a possibility worth taking seriously.

If AI changes what people spend their time thinking about, then the design of AI workflows influences which cognitive skills they continue to exercise.

That isn't necessarily bad.

Someone who spends less time assembling routine documents may have more time to evaluate strategy, investigate unusual problems, or improve the systems responsible for producing those documents.

That would be a meaningful improvement.

But consider a different possibility.

Suppose someone no longer performs the work required to understand a process, yet remains responsible for detecting mistakes in its output.

Their job hasn't disappeared. It's changed from performing work to supervising work they may gradually become less equipped to evaluate.

This is an organizational problem as much as a cognitive one.

An experienced employee might be capable of detecting subtle AI errors because they developed expertise through years of direct practice.

A newer employee entering a heavily automated workflow may never encounter enough of the underlying work to develop the same expertise.

If organizations expect people to provide meaningful oversight, they need to consider how those people acquire and maintain the judgment that oversight requires.

That might mean preserving opportunities for independent practice, providing examples of known failure modes, conducting structured reviews, or deliberately involving specialists in difficult cases.

The right approach depends on the work.

What matters is recognizing that human expertise is not a permanent resource that exists independently of how the work is organized.

It develops through experience, feedback, and opportunities to make decisions.

And, under some conditions, it can deteriorate when those opportunities disappear.

## The decision that happened before the decision

Let's return to our automated business proposal.

The organization wants employees to generate customized materials without sending every request through a specialist team.

That's a legitimate goal.

Much of the work may be repetitive. A well-designed system could reduce unnecessary production effort, improve consistency, and allow specialists to spend more time on problems that genuinely require their expertise.

Now suppose the organization decides that every AI-generated proposal must be approved by the employee requesting it.

A human remains in the loop.

Does that solve the accountability problem?

Not necessarily.

The employee might understand the customer's needs and recognize whether the proposal is commercially appropriate. But they might not know whether a technical claim is accurate, whether a particular statement is authorized, or whether the information being used is current.

Requiring that employee to approve the entire document gives them responsibility for judgments they may not be qualified to make.

We could require a specialist to review every proposal instead.

That would address some of the expertise problem, but it might reproduce the bottleneck that motivated automation in the first place.

And if the volume of generated content becomes sufficiently large, even specialist review can deteriorate into superficial approval.

A better approach begins by identifying the different decisions involved.

Consider two proposals.

The first assembles previously authorized information into a standard format. Its content is drawn from maintained sources, and the system operates within clearly defined constraints.

The second introduces a new competitive comparison and makes a customer-specific claim that hasn't been evaluated before.

Both documents might look equally polished.

Both might be produced by the same assistant.

But the decisions required to produce them are different.

The first may involve relatively predictable operations that can be validated in advance.

The second requires judgments about evidence, context, acceptable claims, and the consequences of getting something wrong.

Treating them as equivalent because they share the same document format would be a mistake.

One reasonable design would allow narrowly defined, low-risk activities to proceed automatically while routing unfamiliar or consequential decisions to people with relevant expertise and authority.

But this only works if the boundaries are meaningful.

Someone must establish what qualifies as previously authorized information. Someone must maintain that authorization as circumstances change. The system needs a reliable way to distinguish ordinary use cases from exceptions.

And the organization needs to decide who can accept the risks associated with releasing an output.

These responsibilities may belong to different people or functions.

The person defining the rules need not be the person operating the assistant. The person verifying factual claims need not be the person approving a commercial commitment. The person responsible for maintaining the technology need not be authorized to accept every consequence of its use.

What matters is that the responsibilities are explicit and coordinated.

This is where the distributed cognition perspective becomes especially useful.

The question is no longer whether a human or a machine should produce the proposal.

It's how information, judgment, authority, and action should move through the entire system.

A system designed around that question may require fewer individual approvals while providing more effective oversight.

That isn't a contradiction.

Oversight doesn't have to mean manually inspecting every result.

It can also mean defining appropriate boundaries in advance, validating behavior, monitoring outcomes, detecting exceptions, and retaining the ability to intervene.

Sometimes the most consequential human judgment occurs long before the individual document exists.

## When oversight actually means something

The phrase *human in the loop* has become a convenient way to describe AI systems that preserve some form of human participation.

Unfortunately, it tells us very little about what that participation accomplishes.

A person might supply input, receive information, make recommendations, authorize decisions, monitor performance, or intervene after a problem occurs.

Those are different roles.

In its 2023 AI Risk Management Framework, the National Institute of Standards and Technology emphasizes the importance of defining and differentiating human roles and responsibilities.

NIST also recognizes that different systems may justify different arrangements, from extensive human involvement to activities that can operate without individual oversight.

The appropriate arrangement depends on context.

That's a more useful starting point than declaring that every consequential AI output needs a human signature.

A practical way to examine a proposed oversight arrangement is to ask whether the person has the information, competence, authority, capacity, and recourse needed to fulfill their role.

Can they access enough evidence to evaluate the decision?

Do they possess the expertise to recognize relevant mistakes?

Can they reject, modify, or halt the outcome when necessary?

Do they have sufficient time and attention to exercise that judgment?

And when something goes wrong, is there a workable process for identifying the failure, correcting its consequences, and improving the system?

These questions aren't a scientifically validated test. They're a design heuristic.

But they expose the difference between a person participating in a workflow and a person meaningfully governing its outcome.

Consider the implications.

A reviewer who has expertise but cannot stop publication lacks authority.

A reviewer who has authority but cannot inspect the relevant evidence lacks information.

A reviewer who has both but must process hundreds of complicated decisions without adequate time lacks capacity.

And a system that allows errors to occur without providing a way to investigate and correct them lacks an essential mechanism for learning.

Simply adding another approval stage won't necessarily fix any of these problems.

Sometimes the right intervention is to improve the information available to the reviewer. Sometimes it's to give the reviewer genuine authority. Sometimes it's to reduce review volume by automating well-characterized tasks.

And sometimes the problem is that the organization has assigned the decision to the wrong person entirely.

Effective oversight is not a property of a button.

It's a property of the surrounding system.

## Design for the exceptions, not just the demonstration

There's one more difficulty with evaluating automation that deserves attention.

Demonstrations tend to show what a system can do when everything works.

But the value of an oversight arrangement often becomes apparent only when something doesn't.

Suppose an organization tests an AI-assisted workflow on one hundred documents and determines that ninety-six are acceptable.

Is 96% good enough?

The percentage alone doesn't tell us.

What kinds of documents were tested? Were they representative of actual use? How was acceptability determined? What happened in the four unsuccessful cases?

If those four documents contained minor formatting problems, the result might support expanding the system's use.

If one contained a materially incorrect claim and another exposed information to someone who wasn't authorized to receive it, the same aggregate score would carry very different implications.

The distribution and consequences of errors matter.

So does the performance of the complete workflow.

An AI assistant might generate impressive individual documents while depending on outdated inputs, inadequate permissions, or review procedures that fail under realistic workloads.

Testing the model's output without testing the process around it provides an incomplete picture of reliability.

This is another reason why human–AI collaboration must be evaluated as a system rather than as two independent participants.

A meaningful evaluation should examine whether the entire arrangement performs better than the alternatives.

Does it reduce the total time required to produce usable work, including verification and corrections?

Does it improve quality, or merely increase the quantity of output?

Can it recognize situations that fall outside its validated capabilities?

When something goes wrong, can the organization determine what happened and respond effectively?

And, crucially, does the workflow preserve the human judgment it actually depends on?

These questions don't imply that automation must be perfect before it can be useful.

Human workflows are not perfect either.

A reasonable comparison considers the performance and consequences of the existing process, the automated alternative, and any proposed combination of the two.

In some situations, automation may be demonstrably more accurate than human performance and appropriate even without individual review of every result.

In others, the available evidence may justify only a limited deployment while the organization learns more.

The objective is not to eliminate uncertainty before making a decision.

It's to understand which uncertainties matter, what evidence would change the decision, and how to detect when the system is operating outside acceptable limits.

That is a more demanding approach than counting successful demonstrations.

It's also considerably more useful.

## The intelligence of a system is not the responsibility of a system

There's a philosophical distinction underneath all of this.

Distributed cognition encourages us to understand intelligence and cognitive performance as properties that can emerge from coordinated activity across people, tools, and environments.

But that doesn't mean responsibility should become equally diffuse.

A system may distribute the work required to produce a decision without eliminating the need for someone to be accountable for how that decision is made.

The AI might retrieve the information. Another system might verify its format. A human might provide contextual judgment. An automated process might execute the resulting action.

Those activities can be distributed.

The authority to establish acceptable behavior, authorize consequential actions, and respond to failures still needs to be assigned within the organization.

Otherwise, distributed cognition can become distributed ambiguity.

Everyone performs their part. Everyone assumes someone else is handling the risks. When a problem finally appears, the organization discovers that the workflow was designed to produce outcomes without adequately defining who was responsible for them.

It's tempting to respond by inserting a human at the end.

But a final approval cannot retroactively supply missing expertise, correct flawed responsibilities, or resolve decisions that were poorly defined upstream.

Nor should we assume that keeping every decision with a human is automatically safer.

Humans make mistakes. They become distracted, overconfident, fatigued, and inconsistent. They misunderstand instructions, overlook relevant information, and sometimes reject better recommendations simply because those recommendations came from machines.

The relevant question is not which participant is inherently more trustworthy.

It's whether the overall arrangement allows the right judgments to be made, with the right information, by participants capable of making them—and whether the system can respond when those judgments prove inadequate.

Perhaps that's the most useful lesson artificial intelligence offers about human thinking.

We've become accustomed to treating intelligence as something an individual possesses and responsibility as something an individual accepts.

But sophisticated work rarely happens that neatly.

Our knowledge is distributed. Our decisions depend on shared representations, inherited rules, specialized expertise, and tools whose behavior we don't always fully understand.

AI makes those dependencies more visible, even as it introduces new ones.

The challenge isn't to keep humans performing tasks that machines could accomplish better. Nor is it to automate every activity until humans exist only to authorize the results.

It's to design a division of cognitive work that actually improves the system, while remaining clear about who has the authority and obligation to govern its consequences.

We can redistribute the work of thinking.

We can delegate the work of analysis, recommendation, and execution.

We can even design systems that make particular operational decisions without requiring individual human approval.

But we cannot treat the distribution of work as an excuse for the disappearance of responsibility.

That takes us back to the approval button.

The interesting question was never whether a human clicked it.

**The interesting question was what had to be true for that click to mean anything.**

---

## Further reading

The following sources provide the intellectual and empirical foundations for this essay.

**Distributed cognition and cognitive offloading**

- [Edwin Hutchins — *Cognition in the Wild* (1995)](https://mitpress.mit.edu/9780262581462/cognition-in-the-wild/). A foundational examination of cognition distributed across people, instruments, and cultural practices.
- [James Hollan, Edwin Hutchins, and David Kirsh — *Distributed Cognition: Toward a New Foundation for Human-Computer Interaction Research* (2000)](https://doi.org/10.1145/353485.353487). Connects distributed cognition to the design of technological systems.
- [Evan Risko and Sam Gilbert — *Cognitive Offloading* (2016)](https://doi.org/10.1016/j.tics.2016.07.002). Reviews how people use external resources to reduce cognitive demands.

**Automation and human judgment**

- [Lisanne Bainbridge — *Ironies of Automation* (1983)](https://doi.org/10.1016/0005-1098(83)90046-8). Explores the paradoxes created when automation leaves humans responsible for unusual failures.
- [Raja Parasuraman, Thomas Sheridan, and Christopher Wickens — *A Model for Types and Levels of Human Interaction with Automation* (2000)](https://pubmed.ncbi.nlm.nih.gov/11760769/). Provides a foundational distinction between different functions and degrees of automation.
- [John Lee and Katrina See — *Trust in Automation: Designing for Appropriate Reliance* (2004)](https://doi.org/10.1518/hfes.46.1.50_30392). Examines how reliance on automation can be calibrated to its capabilities and context.
- [Zana Buçinca, Maja Barbara Malaya, and Krzysztof Gajos — *To Trust or to Think* (2021)](https://www.eecs.harvard.edu/~kgajos/papers/2021/bucinca2021trust.shtml). Experimental research on interventions that reduce overreliance on AI recommendations.

**Contemporary research and governance**

- [Michelle Vaccaro, Abdullah Almaatouq, and Thomas Malone — *When Combinations of Humans and AI Are Useful* (2024)](https://www.nature.com/articles/s41562-024-02024-1). A meta-analysis examining when human–AI combinations outperform independent alternatives.
- [Hao-Ping Lee and colleagues — *The Impact of Generative AI on Critical Thinking* (2025)](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/). Survey research examining how knowledge workers report changes in critical-thinking practices and effort.
- [National Institute of Standards and Technology — *AI Risk Management Framework: Human-AI Interaction* (2023)](https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/). Guidance on defining human roles, responsibilities, and oversight in AI systems.
