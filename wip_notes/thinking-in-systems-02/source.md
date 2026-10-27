# A Better Prompt Won't Fix the Wrong Problem

*How the way we define a problem determines the solutions we can imagine—and why understanding what we're building matters more than how quickly we build it.*

Imagine a creative team struggling to keep up with requests.

Projects are taking longer than expected, deadlines are slipping, and everyone seems to be working at capacity. Leadership sees an opportunity to improve things with AI.

"We need an assistant that can produce creative assets faster."

It's a reasonable suggestion. Generative AI can accelerate many creative tasks, and producing a first draft in minutes rather than hours certainly sounds like an improvement.

But suppose we investigate how the work actually happens.

We discover that producing the initial design takes about an hour. The project then spends three days waiting for feedback, another day going through revisions, and several more hours waiting for someone to approve the final deliverable.

If we reduce that initial hour to six minutes, we've made one part of the process ten times faster.

The overall project might still take five days.

Worse, if the new tool encourages people to produce more creative variations, we might actually increase the amount of material requiring review. The designers become more productive while the approval process becomes more congested.

We've successfully accelerated production without meaningfully improving delivery.

The technology did exactly what we asked it to do. The problem is that we may have asked it to solve the wrong problem.

This is a recurring challenge in systems design. We tend to approach problems through whatever aspect is most visible, familiar, or within our control. When a system isn't performing as expected, we look for the component that appears to be responsible and start thinking about how to improve it.

Sometimes that works.

But sometimes the problem exists in the relationships between components, in assumptions we've never examined, or in how we've defined success.

Before we can decide what to build, we need to understand what we're trying to change.

And that turns out to be a considerably more interesting intellectual problem than it first appears.

## The map is not the territory

Imagine you're navigating Seattle.

If you're traveling by public transportation, you might use a transit map. It highlights routes, stations, and connections while ignoring most of the city's geography.

If you're walking, you might prefer a topographic map. Seattle has some rather inconvenient hills, and a route that looks perfectly reasonable on a transit map might be considerably less pleasant on foot.

If you're looking for somewhere to open a business, a zoning map might be more useful than either.

These maps describe the same city. They can all be accurate, and they can all lead you to completely different conclusions about where to go.

The difference isn't necessarily the quality of the information.

It's what the information has been selected to represent.

This is an example of **abstraction**: the process of representing certain properties of something while deliberately omitting others.

Abstraction is fundamental to human reasoning. We couldn't function without it.

A diagram of an electrical circuit doesn't need to reproduce the physical appearance of every wire. An organizational chart doesn't attempt to capture every conversation between employees. A project timeline doesn't show every decision, dependency, or disagreement that influences the work.

Each representation preserves certain relationships while leaving others out.

That selectivity is what makes the representation useful.

The Polish-American philosopher and engineer Alfred Korzybski explored this distinction in his work on general semantics. In his 1933 book *Science and Sanity*, he described a principle that has since become familiar across philosophy, psychology, and systems thinking:

**"The map is not the territory."**

Korzybski's point wasn't simply that maps are incomplete. It was that our representations of reality should never be confused with reality itself.

Words, categories, descriptions, and conceptual models are tools for understanding the world. They are not the world.

Consider the difference between the statement "Our production process is inefficient" and the process itself.

The statement compresses an enormous amount of activity into a single judgment. It doesn't tell us which activities are inefficient, how we're measuring efficiency, or whether the person making the statement is concerned about time, cost, quality, or something else entirely.

It's a representation of a situation, not a complete description.

And there's another complication: two people can produce different representations of the same situation without either being wrong.

One person might describe the production problem as a shortage of designers. Another might see unnecessary approval requirements. A third might notice that requests frequently arrive without enough information to begin work.

All three explanations could be accurate.

They might even describe different consequences of the same underlying problem.

But each representation directs our attention toward a different kind of solution.

This is where abstraction becomes more than an intellectual curiosity.

**The way we represent a problem influences which causes we investigate, which relationships we notice, and which solutions appear reasonable.**

If we describe a production problem exclusively in terms of design capacity, adding designers or automating design work will seem like an obvious response.

If we represent the same problem as a coordination issue, our attention shifts toward handoffs, decision-making, and ownership.

If we represent it as a demand-management problem, we might discover that the organization is accepting work without adequately considering its value or cost.

The territory hasn't changed.

We've changed the map.

And by changing the map, we've changed what we can see.

## Problems don't arrive with instructions

There's a subtle assumption embedded in the way we ordinarily talk about problem-solving.

We tend to imagine that problems exist as clearly defined objects waiting for someone to solve them.

First, we identify the problem. Then, we apply our knowledge and expertise to find the best solution.

That model works reasonably well when the problem is already understood.

If a website returns a specific error because a function receives an invalid input, we can investigate the function and correct the defect.

But real-world problems frequently arrive in a much less convenient form.

A department wants to be more productive. A product isn't meeting expectations. A team is overwhelmed. A customer experience feels unnecessarily complicated.

What exactly are we being asked to solve?

In *The Reflective Practitioner* (1983), philosopher and organizational theorist Donald Schön made an important distinction between **problem-solving** and **problem-setting**.

Problem-solving concerns finding appropriate means to achieve established objectives.

Problem-setting is the work of determining what the problem actually is, what matters about the situation, and which objectives should guide our response.

Schön argued that professional practice often involves confronting situations that are ambiguous, uncertain, and resistant to straightforward technical analysis. Before we can apply a solution, we have to construct a useful understanding of the situation.

This doesn't mean inventing a problem or deciding arbitrarily what we'd prefer to solve.

It means recognizing that a situation doesn't automatically tell us which aspects deserve attention.

Return to our hypothetical creative team.

Leadership wants to make production faster.

But what does *faster* mean?

Perhaps it means reducing the time designers spend creating assets. Perhaps it means getting campaigns into market sooner. Perhaps the real concern is that important requests are delayed because the team is occupied with lower-priority work.

These objectives are related, but they are not interchangeable.

Reducing the amount of time spent designing an individual asset doesn't necessarily shorten the time between receiving a request and delivering the finished work.

Likewise, increasing the number of assets a team can produce doesn't necessarily mean the organization is using its resources more effectively.

We can optimize one measurement while making another worse.

That's why problem-setting requires more than clarifying what someone wants. It requires understanding **why they want it, what outcome they're trying to achieve, and what assumptions connect their proposed solution to that outcome.**

A request often contains an implicit theory about the cause of a problem.

"We need more designers" assumes that insufficient design capacity is the relevant constraint.

"We need fewer meetings" assumes that meetings are preventing valuable work.

"We need a better AI prompt" assumes that the instructions given to the model are responsible for the unsatisfactory result.

These explanations might be correct. But their plausibility isn't evidence of their accuracy.

An experienced problem-solver needs to recognize the difference between the situation being described and the explanation being proposed.

Otherwise, we risk becoming exceptionally good at solving problems that nobody has established actually exist.

## The same system can be divided in different ways

Once we've constructed a useful representation of a problem, another question emerges.

How do we decide which parts of the system to examine?

This is the problem of **systems decomposition**.

Decomposition means dividing a complex system into smaller components so that we can understand their responsibilities, dependencies, and interactions.

It's the intellectual foundation behind everything from software architecture to organizational design.

And it contains a surprisingly important choice.

There isn't necessarily one correct way to divide a system.

Consider our creative-production workflow.

We might decompose it into a sequence of activities:

Request, design, review, revision, approval, and delivery.

This representation is useful because it shows the order in which work happens. We can examine how long each stage takes, identify unnecessary transitions, and measure how frequently work moves backward.

But we could also divide the same system according to responsibility.

Who defines the requirements? Who decides whether the work satisfies the request? Who determines whether the content is accurate? Who is responsible for technical quality? Who has authority to approve the result?

This second representation might reveal that the same person is responsible for decisions across several stages, or that different teams believe someone else owns a particular decision.

The process map shows what happens next.

The responsibility model shows who controls what.

Neither is inherently more accurate. They answer different questions.

We could construct a third representation focused on dependencies: what information, decisions, or resources must be available before a task can proceed.

And a fourth focused on the movement of work through the system: where tasks accumulate, where capacity is constrained, and where completed work repeatedly returns for revision.

The important thing isn't how many diagrams we can produce.

It's whether the representation exposes the relationships relevant to the problem.

This connects to the work of Herbert A. Simon, whose 1962 paper *The Architecture of Complexity* explored how complex systems are organized and understood.

Simon observed that many complex systems exhibit hierarchical structures, composed of subsystems that themselves contain smaller subsystems.

He also developed the concept of **near-decomposability**.

In a nearly decomposable system, interactions within subsystems are sufficiently stronger or more immediate than interactions between them that we can often study parts of the system with some degree of independence.

Think about a computer.

We can investigate how a storage device works without continuously analyzing every operation occurring inside the processor.

That doesn't mean the components are completely independent. They still interact, and those interactions matter.

But the structure allows us to reason about portions of the system without having to understand everything simultaneously.

Simon was careful about what this implied. Complex systems need not be mysterious or irreducible in some absolute philosophical sense. Their difficulty often lies in the practical challenge of understanding many interacting parts.

He also used *hierarchy* in a broader sense than an organizational reporting structure. A system can be hierarchical because it contains nested subsystems, even when none of those components has authority over the others.

This matters because decomposition is not simply an exercise in making something smaller.

**It's about finding boundaries that allow us to understand and change parts of a system without losing sight of how those parts contribute to the whole.**

Those boundaries are especially consequential when we start designing systems around AI.

## Where does the system actually begin and end?

Imagine we're designing an AI assistant to support the creative team.

We could define the system narrowly: a language model that receives a creative brief and generates an initial draft.

Within that boundary, we can evaluate whether the generated material follows instructions, matches the requested format, and meets certain quality standards.

That may be entirely appropriate if our objective is to improve initial drafting.

But suppose our actual objective is to reduce the time required to deliver completed projects.

Now our system boundary might need to include request intake, clarification, content preparation, creative production, stakeholder review, revision, approval, and delivery.

The language model is only one component within that larger system.

Changing the boundary changes what counts as success.

An assistant that generates drafts in thirty seconds may be excellent when evaluated as a drafting tool.

The same assistant might have almost no measurable effect on the delivery process if most delays occur elsewhere.

Both evaluations can be correct.

They're evaluating different systems.

This is why choosing a system boundary is such an important design decision.

A boundary determines what we're treating as part of the problem and what we're treating as an external condition.

Too narrow, and we risk excluding the relationships responsible for the behavior we're trying to change.

Too broad, and the model becomes unwieldy. We can end up investigating everything from organizational culture to market conditions without making a useful decision.

There is no universal rule that tells us exactly where the boundary belongs.

But there is a useful principle:

**Include the components and relationships necessary to explain the outcome you're trying to influence.**

The boundary should be large enough to capture the relevant causes, but small enough to support meaningful investigation and action.

And it should remain open to revision.

Perhaps we initially believe the delays occur during stakeholder approval. After examining the workflow, we discover that reviewers aren't actually receiving the information they need to make a decision.

Our boundary may need to expand to include how project requirements are established.

Or perhaps we discover that approval delays are caused by conflicts in scheduling across several departments. We may need a model of shared capacity and competing priorities.

The system hasn't suddenly become more complicated because we looked at it differently.

We simply uncovered relationships that our earlier representation concealed.

## Good decomposition is about choosing the right boundaries

Systems decomposition doesn't just help us understand existing systems.

It also informs how we build new ones.

In 1972, computer scientist David Parnas published *On the Criteria to Be Used in Decomposing Systems into Modules*, a foundational paper in software engineering.

Parnas challenged the conventional approach of dividing a software system primarily according to the sequence of operations it performs.

He demonstrated that an alternative form of decomposition, organized around design decisions and the information they conceal, could produce systems that were easier to understand and modify.

This became central to the principle of **information hiding**.

The idea is straightforward.

A component should expose what other components need in order to work with it, while concealing implementation details they don't need to know.

That separation reduces unnecessary dependencies.

If a decision or implementation changes inside one component, the rest of the system shouldn't require extensive modification as long as the component continues to fulfill its agreed responsibilities.

Imagine an AI-assisted creative workflow that generates layouts.

We could construct it as a chain of specialized agents.

One interprets the brief. Another determines the content structure. A third creates layout instructions. A fourth checks compliance with design requirements. A fifth prepares the final output.

This might be a sensible architecture.

But merely dividing the work among five agents doesn't establish that we've created a well-designed system.

What information does each agent need?

What assumptions does it make about the output of the previous one?

What happens when the requirements change?

Suppose the first agent interprets "modern and minimal" as a request for sparse typography and subdued color. The layout agent interprets the same language as a request for large typography and expansive whitespace.

Neither interpretation is necessarily unreasonable.

But if their responsibilities and interfaces don't establish how design decisions should be communicated, the system can produce contradictory or unusable results even when the individual agents are performing their assigned tasks.

We can create a great deal of activity without creating much coordination.

Parnas's principle offers a useful way to reconsider the architecture.

Instead of asking how many specialized agents we can create, we might ask which decisions should be made independently, which information needs to pass between components, and which changes should remain contained.

Perhaps the requirements need to be translated into a shared, explicit specification before layout generation begins.

Perhaps design constraints should be maintained separately from the process that produces an individual asset.

Perhaps some decisions shouldn't be distributed at all.

Or perhaps the task is simple enough that a single well-structured workflow would be more reliable than several agents negotiating with one another.

These possibilities can't be evaluated by counting components.

The architecture has to be judged against the responsibilities and relationships it is supposed to manage.

Parnas was writing about software modules, not contemporary language-model agents. We shouldn't pretend his work establishes a universal prescription for modern AI architecture.

But the underlying design question remains relevant:

**What should be separated, what must remain connected, and what should happen when something changes?**

Modularity is valuable when it manages complexity.

Dividing a system into smaller pieces without improving those relationships can simply distribute the complexity across more places.

## When improving the parts makes the whole worse

There's another reason we need to think beyond individual components.

Sometimes every component can perform exactly as intended while the complete system produces an undesirable outcome.

Let's return to the creative team.

Suppose we introduce AI-assisted drafting and dramatically increase the number of assets designers can produce.

From the perspective of drafting, the improvement is undeniable.

But the review team has a relatively fixed amount of capacity.

Previously, designers produced a manageable number of drafts each week. Now they can produce substantially more.

If all those drafts still require the same level of review, the volume of work arriving at the review stage may increase faster than reviewers can process it.

The queue grows.

Completed designs spend more time waiting.

The organization might even experience longer turnaround times, despite having made its production capabilities substantially faster.

This isn't an inevitable consequence of AI adoption. If demand remains fixed, review capacity is sufficient, or the automation removes work elsewhere, faster drafting may genuinely improve delivery.

The point is that the outcome depends on the relationships between the parts.

A local improvement doesn't automatically produce a system-level improvement.

This distinction is central to systems thinking.

Ludwig von Bertalanffy's work on general systems theory emphasized the importance of studying organized wholes and the relationships among their components, rather than assuming that every phenomenon can be adequately explained by examining isolated parts.

A similar concern appears in Simon's treatment of complexity.

The properties of individual components don't always make the behavior of their interactions obvious.

This brings us to the concept of **emergence**.

In its practical sense, emergence describes system-level patterns or properties that arise from interactions among components.

The word sometimes carries stronger philosophical implications, particularly in debates about whether certain properties can be reduced to the behavior of underlying parts.

We don't need to settle those debates to understand the engineering problem.

Our creative workflow isn't displaying some mysterious new property that defies explanation.

It's demonstrating that the outcome of the complete system depends on how the components interact.

A production tool can become faster while the process becomes slower.

Individual teams can meet their objectives while the organization fails to meet its own.

A workflow can satisfy every local requirement while producing an outcome nobody intended.

The mistake is treating success at one level as sufficient evidence of success at another.

This is especially relevant when evaluating AI.

We often measure AI systems through discrete tasks: how quickly they generate a response, how accurately they complete an instruction, or how consistently they produce a particular format.

Those measurements can be useful.

But they don't necessarily tell us whether the system improves the work around them.

An assistant that creates excellent drafts might also generate additional work for reviewers.

An automation that eliminates manual data entry might create more exceptions for someone else to reconcile.

A highly capable agent might complete an assigned workflow successfully while consuming more resources than the problem justifies.

The relevant question isn't simply whether the technology works.

It's whether the technology produces the intended improvement within the larger system.

## The problem changes as we learn about it

There's a danger in taking all of this too far.

We could conclude that responsible systems design requires understanding every component, dependency, and possible consequence before building anything.

That would be a rather effective way to never finish a project.

The objective isn't perfect understanding.

It's to construct a sufficiently useful model to support a defensible decision, while remaining willing to revise it.

This becomes particularly important when problems involve people, organizations, and competing priorities.

In 1973, Horst Rittel and Melvin Webber published *Dilemmas in a General Theory of Planning*, introducing an influential account of what they called **wicked problems**.

Unlike problems with clearly defined conditions and criteria for success, wicked problems resist definitive formulation. Their interpretation is entangled with competing values, incomplete understanding, and the consequences of possible interventions.

Rittel and Webber were concerned primarily with social policy and planning, not ordinary software projects. Calling every difficult organizational problem "wicked" would dilute the concept.

But their work exposes an important limitation in the way we often approach design.

We can't always establish a complete, uncontested problem definition before beginning to explore solutions.

Sometimes investigating a solution reveals something important about the problem.

Consider a team experimenting with an AI assistant that interprets project briefs.

During testing, the assistant repeatedly asks for information that isn't included in the incoming requests: intended audience, publication channel, required deliverables, success criteria, and approval requirements.

Initially, the project was framed as a way to automate creative production.

But the experiment reveals that the team spends significant effort interpreting incomplete instructions.

Perhaps the most valuable intervention isn't automating the production of assets.

Perhaps it's improving the way requests are defined.

We only discovered that possibility because the prototype exposed something our initial model had overlooked.

This is consistent with Schön's understanding of reflective professional practice.

Rather than treating problem definition as a one-time activity completed before implementation, we can treat design as a continuing interaction between our understanding of the problem and the evidence produced by attempting to solve it.

Our model informs the intervention.

The intervention reveals information about the system.

That information may require us to revise the model.

This doesn't undermine the value of frontloading the work. It clarifies what that work is supposed to accomplish.

We aren't trying to predict everything that could happen.

We're trying to identify the important assumptions before committing substantial resources to a solution that depends on them.

And when possible, we should choose investigations that allow those assumptions to be tested cheaply.

A brief examination of where time is spent might reveal that automated drafting is unlikely to solve the delivery problem.

A small prototype might expose missing requirements.

A limited workflow experiment might show that a simpler intervention achieves the desired outcome without introducing additional complexity.

The purpose of early investigation is to make better commitments, not to eliminate the need for learning after those commitments are made.

## AI is exceptionally capable of solving the problem we've described

Modern AI makes this discussion particularly interesting because it has dramatically lowered the effort required to turn an idea into a working artifact.

We can describe a workflow and ask an AI system to help implement it.

We can generate code, create prototypes, transform documents, connect tools, and construct increasingly sophisticated automations without the same level of manual implementation work these activities once required.

This is a remarkable capability.

It also changes the economics of making poorly understood decisions.

When implementation becomes easier, there's less friction preventing us from committing to a solution before we've examined the problem.

It's tempting to skip the investigation and start building.

If the first attempt doesn't work, we can generate another.

And another.

Eventually, we may have an elaborate collection of prompts, agents, integrations, and exception-handling rules supporting a process that should have been reconsidered before any of them existed.

None of this means AI systems are incapable of helping us reason about problems.

Quite the opposite.

A capable model can help compare different system representations, identify assumptions, propose alternative decompositions, and examine potential consequences.

It can challenge an initial framing and suggest relationships we may have overlooked.

But the usefulness of that reasoning still depends on how we define the task and what information we provide.

An AI system asked to design a five-agent workflow can produce a sophisticated five-agent workflow.

It may even identify potential weaknesses and recommend improvements.

But unless we examine the broader purpose, we might never establish whether five agents are needed at all.

This distinction has practical support in contemporary AI engineering guidance.

In its 2024 article *Building Effective Agents*, Anthropic recommended beginning with simpler approaches and introducing additional agentic complexity when the task justifies it. The guidance distinguishes predetermined workflows from systems in which models dynamically direct their own processes, noting that increased flexibility can introduce costs and operational trade-offs.

That isn't evidence that simpler systems are always better.

It reflects a more defensible design principle: additional complexity should serve an identifiable purpose.

A single model call may be sufficient for one task.

A structured workflow may be appropriate when responsibilities and decision points are predictable.

A more autonomous agent may be useful when the task requires flexibility, tool use, and decisions that cannot be completely specified in advance.

The architecture should follow the problem.

Not the other way around.

And here's a subtle but important distinction.

**The ability to implement a solution doesn't establish that the solution is worth implementing.**

As AI reduces the technical difficulty of building systems, the judgment required to decide what those systems should accomplish becomes more consequential, not less.

We're gaining the ability to build more things.

That makes choosing the right things to build increasingly important.

## Frontload the understanding, not the implementation

So how do we approach a problem without prematurely committing to its solution?

I think the starting point is to develop a habit of questioning the representation itself.

When someone describes a problem, ask what their description includes and what it leaves out.

When they propose a solution, ask what would have to be true for that solution to work.

When a system appears to be failing, ask whether the failure belongs to a component, an interaction, or the larger objective the components are meant to support.

And when you're deciding how to structure something, ask whether your proposed boundaries make the important responsibilities and dependencies easier to understand.

These aren't steps in a rigid procedure.

They're different ways of interrogating the assumptions behind a design.

Let's apply them to our creative-production example one last time.

The original request was to use AI to accelerate creative production.

Rather than immediately designing the assistant, we establish that the desired outcome is shorter turnaround time for completed work.

That's a more useful definition because it identifies the result we're trying to influence.

We then examine the current process.

How much time is spent actively producing assets? How much is spent waiting? Where does work return for revision? Which activities constrain the movement of projects through the system?

This reveals whether production speed is actually the relevant limitation.

We also examine responsibilities.

Who defines the requirements? Who can approve an exception? Which decisions require specialist judgment? Who is accountable for the final result?

These questions may reveal coordination problems that aren't visible in a chronological workflow.

Then we consider interventions.

Perhaps automating repetitive production tasks would create meaningful capacity.

Perhaps a better intake process would eliminate repeated clarification and rework.

Perhaps review responsibilities need to be redistributed.

Perhaps several changes are warranted, or perhaps a small process adjustment would accomplish most of what leadership wants.

We don't need to decide that in advance.

We need enough understanding to compare the possibilities.

We also need to establish how we'll know whether the intervention worked.

If our objective is faster delivery, we should examine changes in end-to-end turnaround time, not merely how quickly an AI tool produces drafts.

We may also need to consider quality, rework, effort, and the consequences for people elsewhere in the process.

These measurements help us distinguish genuine improvement from shifting work between components.

Most importantly, we remain willing to reconsider the model when the evidence changes.

If an intervention improves drafting speed but doesn't improve delivery, that's useful information.

It may indicate that our original representation was incomplete.

We can expand it, revise our assumptions, and choose a more appropriate next step.

The first attempt wasn't necessarily wasted.

But repeating it indefinitely without reconsidering the problem probably would be.

## Sometimes the most important decision is what not to build

There's something appealing about elegant solutions.

A sophisticated agent architecture is interesting. An elaborate automation can be satisfying to design. A beautifully organized workflow gives us the sense that we've imposed order on a complicated situation.

I enjoy that kind of work.

But sophistication isn't the same as effectiveness.

The difficult intellectual work often happens before we begin implementing a solution: deciding what matters, what can be ignored, which relationships need to be preserved, and what outcome would justify the effort.

Korzybski reminds us that our representations are not reality.

Schön shows why defining the problem is itself a form of professional judgment.

Simon helps explain how complex systems can be understood through carefully chosen subsystems.

Parnas demonstrates why the criteria used to establish boundaries can matter as much as the components themselves.

And systems theory reminds us that improving individual parts doesn't guarantee that the whole will improve.

These ideas come from different disciplines and address different questions. They aren't interchangeable, and none provides a universal method for designing the perfect system.

What they offer is a more deliberate way of thinking.

Before asking how to make something work better, we can ask what *better* actually means.

Before automating a workflow, we can examine why that workflow exists and what it is supposed to accomplish.

Before dividing a system into specialized components, we can establish which responsibilities genuinely benefit from being separated.

And before accepting someone's description of a problem, we can ask whether it preserves the relationships necessary to understand what's happening.

None of this requires us to distrust every proposed solution or turn every project into a philosophical investigation.

Sometimes the obvious solution really is the right one.

Sometimes a better prompt is all we need.

But we should reach that conclusion because the available evidence supports it, not because we decided what to build before understanding what needed to change.

The goal of frontloading the work isn't to spend more time planning.

It's to reduce the amount of effort committed to assumptions that haven't been examined.

A useful model doesn't need to capture everything. It needs to preserve what matters for the decision we're making.

And when that model stops explaining what we observe, we should be willing to redraw it.

After all, there's little value in creating an exceptionally detailed map if it keeps taking us to the wrong destination.

**The quality of a solution depends, in part, on the quality of the problem we've chosen to solve.**

And choosing that problem is itself one of the most important design decisions we make.

---

## Further reading

The following works explore the philosophical and technical foundations of problem representation, systems decomposition, and deliberate design.

### Foundations of abstraction and systems theory

**Alfred Korzybski — *Science and Sanity* (1933)**

Korzybski's work on general semantics explores the distinction between reality and the symbols, language, and abstractions through which we represent it. The map–territory principle provides a useful foundation for recognizing the limitations of our conceptual models.

[The Map Is Not the Territory — Institute of General Semantics](https://www.generalsemantics.org/event-4967707)

**Herbert A. Simon — *The Architecture of Complexity* (1962)**

Simon examines hierarchical organization, near-decomposability, and the relationship between the structure of complex systems and our ability to understand them. Particularly relevant is his discussion of how subsystems allow us to reason about complexity without treating every interaction as equally important.

[Read the original paper (PDF)](https://www.andrew.cmu.edu/course/15-440/assets/READINGS/simon-architecture-of-complexity-1962.pdf)

**Ludwig von Bertalanffy — *General System Theory: Foundations, Development, Applications* (1968)**

A foundational work examining organized systems, their relationships, and the limitations of approaches that explain complex phenomena solely by studying isolated components.

[Selected passages from General System Theory](https://www.panarchy.org/vonbertalanffy/systems.1968.html)

### Problem framing and design

**Donald A. Schön — *The Reflective Practitioner: How Professionals Think in Action* (1983)**

Schön explores how professionals confront uncertain situations through problem-setting, reflection, and ongoing interaction between their understanding of a problem and their attempts to address it.

[Book information — Basic Books](https://www.hachettebookgroup.com/titles/donald-a-schon/the-reflective-practitioner/9780465068784/)

**Horst W. J. Rittel and Melvin M. Webber — *Dilemmas in a General Theory of Planning* (1973)**

An influential paper distinguishing well-defined technical problems from complex social-policy problems whose formulations, objectives, and possible resolutions are contested.

[Read the paper — Policy Sciences](https://doi.org/10.1007/BF01405730)

### Software and AI systems design

**David L. Parnas — *On the Criteria to Be Used in Decomposing Systems into Modules* (1972)**

A foundational software-engineering paper demonstrating why the criteria used to establish module boundaries influence a system's comprehensibility, flexibility, and maintainability.

[Read the paper — Communications of the ACM](https://doi.org/10.1145/361598.361623)

**Anthropic — *Building Effective Agents* (2024)**

Practical guidance on AI workflows and agents, including the trade-offs between simpler, predetermined processes and more flexible autonomous systems. An applied example of why architectural complexity should be justified by task requirements.

[Read the engineering article](https://www.anthropic.com/research/building-effective-agents)