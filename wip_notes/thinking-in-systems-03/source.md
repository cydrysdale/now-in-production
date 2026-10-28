# All the Information, None of the Context

*Why AI can have access to every document and still miss what matters.*

“Approved for use.”

Three perfectly ordinary words. The kind you might find in a project-management system, an email thread, or a document describing which creative assets a team can use.

Now imagine a marketing employee asks an internal AI assistant whether a particular photograph can be used in an upcoming advertising campaign.

The assistant searches the company's files, finds a record marked “Approved for use,” and confidently responds that the photograph is cleared for the campaign. It even cites the approval record.

There's just one problem.

The photograph was originally licensed for a company website in the United States. The approval applied to a particular event, and the license expired at the end of the previous year. The new campaign involves paid advertising in several European countries.

All of that information exists in the organization's documentation. The license agreement specifies the permitted geography and usage. The original campaign brief identifies the event. The approval record is accurately dated. The new campaign brief describes the intended distribution.

The assistant has access to every one of these documents.

Yet it gives the wrong answer.

This is a fictional example, but it illustrates a problem that becomes increasingly important as organizations connect AI systems to their internal knowledge.

We tend to think of knowledge as something we accumulate. More documents, more databases, more information. When an AI system struggles to answer questions about our organization, the instinctive response is often to give it access to more material.

But information doesn't become useful simply because it's available.

The phrase “Approved for use” is accurate within its original context. What makes the assistant's answer wrong isn't necessarily a missing fact. It's the failure to preserve and apply the relationships that determine what the approval actually means.

**The usefulness of information depends not only on what it says, but on how it relates to everything else.**

This is a much older problem than artificial intelligence. Librarians, information scientists, philosophers, and computer scientists have spent generations trying to understand how information can be organized, connected, discovered, and interpreted.

Their work offers a useful way to think about one of the less glamorous but more consequential challenges in modern AI: designing the information environments from which intelligent systems construct their answers.

## The information arrived. Did the meaning?

In 1948, mathematician and electrical engineer Claude Shannon published *A Mathematical Theory of Communication*, a paper that helped establish modern information theory.

Shannon was interested in an engineering problem: how to communicate messages reliably through channels subject to limitations and noise.

His work made it possible to reason mathematically about the transmission of information without needing to understand what the information meant.

This distinction was deliberate.

As Shannon explained, the semantic aspects of communication were not relevant to the particular engineering problem his theory addressed.

That doesn't mean Shannon believed meaning was unimportant. He was separating two different questions.

The first concerns whether a message can be transmitted accurately.

The second concerns what that message means to whoever receives it.

Imagine someone sends you a sentence written in a language you don't understand.

If the message arrives without a single error, the communication system has succeeded in Shannon's engineering sense. Every character is present and correctly ordered.

But have you learned anything useful?

Perhaps not.

You have received the information without acquiring the ability to interpret it.

This distinction matters because AI systems increasingly operate in environments where delivering information to a model is treated as though it resolves the information problem.

A document is uploaded. A database is connected. A search retrieves a passage. The passage is added to the model's context.

The information has arrived.

But the system still needs to determine what that information refers to, why it is relevant, how it relates to other information, and whether it applies to the question being asked.

Shannon's theory doesn't tell us how to solve those problems. That wasn't its purpose.

What it gives us is a useful conceptual warning: **successfully transmitting information and successfully interpreting it are different achievements.**

A system can accomplish the first without guaranteeing the second.

And that raises a more interesting question.

If meaning depends partly on context, how should information be organized so that its relevant context can be recovered?

## A document has more than one address

Long before anyone was discussing vector databases or large language models, librarians were struggling with a surprisingly similar challenge.

Imagine organizing a library.

A book about the economic effects of agricultural policy in nineteenth-century India could reasonably belong under economics, agriculture, political history, geography, or colonial studies.

But a physical book traditionally occupies one location on a shelf.

Where should it go?

Wherever you put it, someone searching according to a different subject might have difficulty finding it.

This problem fascinated the Indian mathematician and librarian S. R. Ranganathan.

In 1933, Ranganathan published *Colon Classification*, a system that approached subjects through combinations of characteristics rather than requiring every possible subject to occupy a predefined position within an exhaustive hierarchy.

Instead of treating every subject as one indivisible category, his approach allowed subjects to be constructed from multiple dimensions.

A [1934 review in *Nature*](https://www.nature.com/articles/133008b0) described this combinatorial structure as one of the system's defining innovations.

The technical details of Colon Classification are less important here than the underlying insight.

**Something can belong to several meaningful categories simultaneously, and which category matters depends on the question you're asking.**

Consider that photograph from our opening example.

It isn't simply a photograph.

It's also an asset associated with a particular campaign, governed by a licensing agreement, subject to geographic restrictions, authorized for certain distribution channels, and valid during a particular period.

Someone searching for photographs might care about its subject matter.

Someone assembling a campaign might care about its intended audience.

Someone responsible for licensing might care about the agreement and its expiration date.

All three people are looking at the same underlying asset. But they need to understand different relationships to make their decisions.

A folder called `Approved Images` tells us very little about these distinctions.

Even adding more folders doesn't necessarily help. The photograph might belong under photography, events, advertising, licensing, or historical campaigns.

Duplicating the file across those folders creates its own problems. Which copy is authoritative? What happens when its status changes? Do all the copies get updated?

A richer organizational system can describe the asset through multiple attributes without forcing us to choose only one.

We might associate it with a campaign, a licensing agreement, an expiration date, a permitted geographic region, and a distribution channel.

This is the practical value of *faceted classification*: information can be described along several independent dimensions.

And it's one reason information architecture is more than a matter of keeping files tidy.

The structure of an information environment influences which distinctions can be made and which relationships can be discovered.

But classification alone isn't enough.

Knowing that two documents concern the same topic doesn't necessarily tell us how those documents relate to one another.

For that, we need to move from categories to relationships.

## The relationship might be the most important piece of information

In 1967, computer scientist M. Ross Quillian published *Word Concepts: A Theory and Simulation of Some Basic Semantic Capabilities*.

Quillian was investigating whether computers could represent aspects of semantic memory through interconnected networks of concepts.

Rather than treating words as isolated entries, his experimental model represented information through elements and associations connecting them.

The idea was significant for early artificial intelligence and research into knowledge representation.

Consider a few simple statements:

A photograph is a creative asset.

A creative asset may be governed by a licensing agreement.

A licensing agreement permits particular uses.

A campaign involves particular uses.

Individually, these are straightforward facts.

But their relationships allow us to ask a question that no single statement necessarily answers:

Does this agreement permit the planned use of this photograph in this campaign?

To answer, we need to connect the specific photograph to the correct agreement, determine which uses that agreement permits, identify what the campaign intends to do, and compare those conditions.

The answer emerges from the relationships between pieces of information.

This is a different problem from simply locating a sentence containing the word “approved.”

Modern approaches to knowledge organization continue to reflect this insight.

The World Wide Web Consortium's [Simple Knowledge Organization System (SKOS)](https://www.w3.org/TR/skos-primer/), for example, provides a way to represent concepts through preferred names, alternative labels, broader and narrower categories, and associative relationships.

This helps distinguish several ideas that might otherwise become entangled.

Two terms may refer to the same concept. One concept may be a more specific instance of another. Two concepts may be related without either being a subtype of the other.

These distinctions can improve how information is described and discovered.

Other relationships require different representations. A licensing agreement that *governs* an asset, a document that *supersedes* an earlier policy, or a person who *approved* an exception involves more than ordinary subject classification.

Different technologies can represent these connections: metadata, relational databases, explicit rules, document references, or knowledge graphs.

There is no requirement that every organization construct an elaborate graph database.

The point is conceptual.

**A collection of documents is not the same thing as a representation of how those documents relate.**

Of course, modern language models can infer many relationships directly from natural language. They don't require every connection to be explicitly encoded in a database.

If a document clearly states that a license permits website use in the United States, a capable model may correctly recognize that this does not establish permission for European paid advertising.

But inferred relationships have limits.

The relevant conditions might be scattered across several files. A passage might refer to “this agreement” without identifying which agreement it means. An approval might be ambiguous about the action it authorizes.

And some relationships cannot be reliably reconstructed from the available text because the organization never made them explicit.

A model may recognize that two documents are related without knowing which governs.

It may identify an exception without knowing whether the exception remains active.

It may find two contradictory instructions without knowing whether one replaced the other.

These aren't necessarily failures of language comprehension. Sometimes the information environment itself does not adequately represent the distinctions required to answer.

The solution isn't always to make the model more sophisticated.

Sometimes we need to make the relationships more explicit.

## Finding something isn't the same as finding what matters

Even a well-organized collection presents another challenge.

How does a system determine which information is relevant to a particular question?

This has been a central problem in information retrieval for decades.

In 1989, information scientist Marcia J. Bates published *The Design of Browsing and Berrypicking Techniques for the Online Search Interface*.

Bates challenged a simplified model of searching in which someone begins with a fully formed question, submits a query, and receives a definitive set of results.

Actual information seeking is often more complicated.

We begin with an incomplete understanding of what we need. We discover something interesting, which changes our understanding. That discovery suggests another question, leading to another source.

Our search evolves as we learn.

Bates called this process *berrypicking*, emphasizing how information seekers gather useful pieces of knowledge across successive encounters rather than obtaining everything through one perfectly formed query.

It's an especially useful idea when thinking about AI systems.

Suppose someone asks our assistant:

“Can we use the photograph from last year's event in our new campaign?”

A simple search might retrieve the photograph's original approval record.

But a more complete investigation could require several steps.

Which photograph is being discussed? Which campaign originally used it? What agreement governs the asset? Does the agreement cover the proposed distribution channel? Has it expired? Is there an amendment or renewal?

Each answer can change what the system should look for next.

A retrieval system that treats the original question as the only search it needs to perform may miss information that becomes relevant only after an intermediate discovery.

This doesn't mean every question requires an autonomous research agent. Simple lookups often need nothing more than a well-designed search.

It means that the structure of the question should influence how information is retrieved.

A question about a document's title is different from a question that requires reconciling several documents and applying conditions across them.

Both involve retrieval.

Only one may require reconstructing a network of relationships.

## RAG doesn't eliminate the problem. It moves part of it.

In contemporary AI, one of the most common approaches to connecting language models with external knowledge is retrieval-augmented generation, usually shortened to RAG.

The concept is straightforward.

Rather than relying exclusively on information encoded in a model's learned parameters, a RAG system searches an external collection for relevant material and provides that material to the model while it generates an answer.

Patrick Lewis and colleagues introduced an influential formulation of this approach in their [2020 paper on retrieval-augmented generation](https://arxiv.org/abs/2005.11401).

The promise is significant.

External information can be updated without retraining the entire model. Responses can be informed by domain-specific material. Retrieved passages can also make it easier to trace claims back to their sources.

But RAG doesn't turn an arbitrary collection of documents into a coherent body of organizational knowledge.

It adds a retrieval process between the collection and the model.

And that process introduces its own decisions.

What gets indexed? How are documents divided into searchable passages? How does the system determine relevance? How many passages should be returned? What surrounding context is preserved?

These decisions influence which information becomes available when the model answers.

For example, suppose a long licensing agreement contains this sentence:

“The permissions granted in Section 4 expire on December 31.”

If the document is divided into smaller passages, that sentence might become separated from Section 4.

On its own, the sentence is difficult to interpret. We know that something expires, but not what.

A search engine might retrieve it because it contains useful terminology, yet the passage lacks the information necessary to apply it.

This is one reason retrieval quality cannot be reduced to whether a relevant sentence was found.

The surrounding context may be just as important as the sentence itself.

In 2024, Anthropic described an approach called [Contextual Retrieval](https://www.anthropic.com/research/contextual-retrieval), which enriches individual passages with information about their originating documents before indexing them.

In Anthropic's reported evaluations, contextualizing passages reduced retrieval failures substantially compared with its tested baseline. Those results are specific to the company's evaluation setup, not a universal guarantee.

The broader insight is what matters.

Removing information from its original context can make it harder to find and interpret, even when the passage itself hasn't changed.

Retrieval introduces another important trade-off: finding enough relevant information without surrounding it with so much irrelevant material that using it becomes difficult.

Information retrieval researchers describe these concerns through *recall* and *precision*.

Recall asks how much of the relevant material we found.

Precision asks how much of what we retrieved was actually relevant.

An assistant might retrieve twenty passages, including the one containing the correct answer.

That's better than missing the answer entirely.

But if the other nineteen passages concern outdated practices, unrelated situations, or contradictory instructions, the model now has a more complicated interpretation problem.

The relevant information is present, but it's competing with material that may obscure its significance.

Which brings us to another appealing idea that doesn't always work the way we expect.

## If more information is the problem, why not give it everything?

As language models have become capable of processing increasingly large amounts of text, it's tempting to imagine that retrieval will eventually become unnecessary.

Why search for the right five documents if the model can read all five hundred?

There are circumstances where supplying the complete material is a sensible approach. It can preserve document structure, avoid retrieval omissions, and simplify the overall system.

In fact, research comparing retrieval-based approaches with long-context models has found cases where processing longer source material directly performs better, provided sufficient computational resources are available.

But the ability to accept a large amount of text doesn't establish that every part of that text will be used equally well.

In *Lost in the Middle: How Language Models Use Long Contexts*, published in 2024, Nelson F. Liu and colleagues investigated how models used information placed at different positions within long inputs.

Across the models and tasks studied, performance often declined when the relevant information appeared in the middle of a long context, compared with information positioned near the beginning or end.

A later study, [*Context Length Alone Hurts LLM Performance Despite Perfect Retrieval*](https://aclanthology.org/2025.findings-emnlp.1264/), investigated a related question.

Researchers tested several language models on mathematical reasoning, question answering, and coding tasks. They found performance degradation as input length increased even in experimental settings designed to remove ordinary retrieval failures.

These studies reveal limitations in particular models and experimental conditions. They don't establish that every current or future model will behave identically. Long-context capabilities are improving, and the relative merits of retrieval and full-context processing depend on the task, model, cost, and quality of the input.

Nevertheless, they challenge a convenient assumption.

**Being able to fit information into a context window does not guarantee that the system can use it effectively.**

And even a hypothetical model with flawless long-context processing would face a separate problem.

If two documents provide incompatible instructions and neither identifies which should govern, reading both perfectly doesn't settle the disagreement.

The system can recognize the contradiction.

It can't necessarily resolve an organizational decision that hasn't been made.

More context can reveal a problem without supplying the authority to solve it.

## Context is something we construct

This brings us to a relatively recent development in AI engineering.

For several years, much of the public conversation about improving AI centered on *prompt engineering*: finding better ways to phrase instructions so a model would produce more useful results.

Prompting remains important.

But increasingly sophisticated AI systems require us to manage much more than the words of a single request.

They may depend on system instructions, tool definitions, retrieved documents, previous interactions, workflow state, user permissions, and information discovered during intermediate operations.

The question becomes less about how we phrase one instruction and more about what information the model should have available at a particular moment.

This broader practice is commonly called *context engineering*.

In its 2025 article [*Effective Context Engineering for AI Agents*](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents), Anthropic describes context engineering as the deliberate curation and maintenance of information available to a language model during inference.

The term is contemporary, but the underlying concerns are familiar.

Which information is relevant?

What relationships need to be preserved?

What information is missing?

What should be excluded?

How should the system respond when the available material doesn't support a conclusion?

These questions connect modern AI engineering to the older disciplines of information organization, retrieval, and knowledge representation.

It's useful to distinguish three overlapping concerns.

**Information and knowledge architecture** concern how the larger information environment is organized: what sources exist, how they are described, how they relate, who maintains them, and what makes them authoritative.

**Retrieval** concerns how relevant material is discovered and selected for a particular task.

**Context engineering** concerns how information, instructions, tools, and other necessary state are assembled and maintained while the model performs that task.

These are useful distinctions rather than rigid disciplinary boundaries. Different technical architectures may combine them in different ways.

But together, they expose a dependency that is easy to overlook.

The quality of the context available to an AI system depends partly on the quality of the information environment from which that context is constructed.

Context engineering doesn't begin when text enters the model.

Some of its most important prerequisites exist long before anyone writes a prompt.

## The decisions hiding inside our documentation

Return to our fictional photograph.

Suppose we want to improve the assistant so it stops making the same mistake.

The most obvious response might be to improve the retrieval mechanism.

Perhaps we should use a more capable embedding model, add keyword search, retrieve additional passages, or introduce a system that searches iteratively.

Any of those changes might help.

But before deciding, we should ask what actually went wrong.

Did the relevant licensing agreement exist and contain accurate information?

Was the agreement properly associated with the photograph?

Did the search return the agreement?

Did the system identify the restrictions?

Did it compare those restrictions with the proposed campaign?

These questions follow the path from source information to an applied answer.

For practical diagnosis, I find it useful to separate that path into four concerns: **source, organization, retrieval, and application**.

This isn't a standardized academic taxonomy. It's a way to investigate where an information-dependent AI system might be failing without assuming the model itself is responsible for everything.

At the source level, we care whether the information is accurate, current, and sufficiently complete.

At the organization level, we care whether the information can be identified and related to the other information needed for the task.

At the retrieval level, we care whether the right material actually reaches the model.

At the application level, we care whether the system uses that material appropriately.

The distinction matters because each failure suggests a different intervention.

If the agreement is missing from the collection, improving the model won't make it appear.

If the agreement exists but isn't associated with the image, the system may need better metadata or a reliable way to connect records.

If the agreement is properly represented but never retrieved, the search process needs investigation.

If the correct evidence reaches the model and it still applies the restrictions incorrectly, then the problem may involve instructions, reasoning performance, context presentation, or the model's capabilities.

A useful investigation therefore examines retrieved evidence separately from the generated answer.

This distinction is reflected in contemporary RAG evaluation research. For example, the [ARES framework](https://aclanthology.org/2024.naacl-long.20/) evaluates aspects of context relevance, answer faithfulness, and answer relevance rather than collapsing the entire system into one measure of answer quality.

In a practical deployment, a small set of representative questions with human-verified answers can help reveal where failures occur. We can inspect what was retrieved, whether essential information was omitted, and whether the final response correctly applied the evidence.

Automated evaluation can assist, but it doesn't eliminate the need for authoritative reference answers or human judgment, especially when a question has consequential implications.

Nor does every failure justify a major architectural redesign.

Perhaps we discover that the licensing agreement simply needs to be linked to the asset record.

Perhaps several outdated documents should be excluded from routine search.

Perhaps a small table describing approved uses, geographic restrictions, and expiration dates would make the relevant distinctions explicit.

Or perhaps the system should not provide an unconditional approval at all. Instead, it should identify the available evidence and escalate uncertain cases to whoever is authorized to decide.

A complex knowledge graph may be appropriate for some environments.

In others, a well-maintained spreadsheet might solve the actual problem.

The objective isn't to build the most sophisticated representation of organizational knowledge.

It's to represent enough of the relevant relationships to support the decisions the system is expected to make.

## Some missing information isn't in the files

There's one final complication.

Organizations often operate through knowledge that has never been adequately documented.

A person knows which approval is still valid.

A team knows that a process described in an old document was quietly replaced.

Someone remembers that an exception applied to only one project.

Two departments use the same terminology to mean different things.

Much of this can work reasonably well when experienced people are present to interpret the situation.

The problems become more visible when we expect an AI system to operate from written records alone.

The organization may have accumulated enormous quantities of information without explicitly representing the rules that determine how that information should be used.

Adding AI doesn't create those omissions.

It exposes them.

And not all of these gaps can be closed through technical inference.

Suppose two departments disagree about who is authorized to approve a particular use of a creative asset.

An AI assistant might identify the competing procedures, compare their dates, and explain the apparent conflict.

But deciding which department has authority is an organizational governance question.

Unless that authority is already established through some valid rule or decision, the AI has no reliable basis for inventing one.

It can assist with the investigation.

It cannot legitimately substitute its own preference for a decision the organization has not made.

This is where the boundary between knowledge architecture and organizational design becomes particularly interesting.

Knowledge isn't maintained independently of the people who create and use it.

Documents have owners. Rules have scopes. Policies change. Exceptions are authorized. Interpretations are challenged. Decisions are revised.

These relationships are part of how organizational knowledge functions.

A trustworthy AI system needs a way to work within that structure, not simply consume the text it produces.

Sometimes that means retrieving authoritative sources.

Sometimes it means making uncertainty explicit.

And sometimes it means recognizing that the appropriate next step is to ask a human being to make a decision.

## What becomes possible when the relationships are visible?

We've become remarkably good at storing information.

We can preserve documents almost indefinitely, search millions of records, and give language models access to quantities of text that would take a person years to read.

These capabilities are valuable. But storage and access solve only parts of the larger problem.

Claude Shannon helped formalize how information could be transmitted without requiring its meaning to be part of the engineering model.

Ranganathan showed how organizing subjects through multiple dimensions could make complex collections more flexible and discoverable.

Quillian explored how networks of relationships could support computational representations of semantic information.

Bates described information seeking as an evolving process in which discovery changes the questions we ask.

Modern AI systems bring these concerns together in new combinations.

They can retrieve information, interpret natural language, recognize patterns across documents, and generate responses that synthesize material from multiple sources.

But those capabilities don't make the structure of the information environment irrelevant.

They make that structure consequential in new ways.

The distinction is worth remembering whenever someone suggests that an AI system will improve if we give it more information.

Perhaps it will.

But before adding another hundred documents, we might ask whether the system can identify what those documents refer to, distinguish what governs from what merely describes, preserve the conditions under which a statement applies, and recognize when the available evidence is insufficient.

Those questions aren't as exciting as selecting a new model or building an autonomous agent.

They may also be more important.

Because the information we need is often already there.

What's missing is the architecture that makes it useful.

And sometimes, in trying to teach AI what our organization knows, we discover how much of that knowledge we've never actually made explicit.

---

## Sources and further reading

The following works informed this essay. They provide historical foundations, formal approaches to knowledge representation, and contemporary research into retrieval and context use.

- **Claude E. Shannon (1948)** — [*A Mathematical Theory of Communication*](https://www.nokia.com/bell-labs/publications-and-media/publications/a-mathematical-theory-of-communication/). The foundational paper distinguishing the engineering problem of information transmission from semantic interpretation.

- **S. R. Ranganathan (1933)** — *Colon Classification*. See the [contemporary review in *Nature* (1934)](https://www.nature.com/articles/133008b0) for an accessible description of the system's combinatorial approach to classification.

- **M. Ross Quillian (1967)** — [*Word Concepts: A Theory and Simulation of Some Basic Semantic Capabilities*](https://doi.org/10.1002/bs.3830120511). An early investigation of representing semantic information through interconnected networks.

- **Marcia J. Bates (1989)** — [*The Design of Browsing and Berrypicking Techniques for the Online Search Interface*](https://pages.gseis.ucla.edu/faculty/bates/berrypicking.html). A model of information seeking as iterative and evolving rather than a single static search.

- **W3C (2009)** — [*SKOS Simple Knowledge Organization System Primer*](https://www.w3.org/TR/skos-primer/). A reference for representing concepts through labels, hierarchies, and associative relationships.

- **Lewis et al. (2020)** — [*Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks*](https://arxiv.org/abs/2005.11401). Foundational research combining language models with externally retrieved information.

- **Liu et al. (2024)** — [*Lost in the Middle: How Language Models Use Long Contexts*](https://aclanthology.org/2024.tacl-1.9/). An empirical investigation of how information position affects long-context performance.

- **Anthropic (2024)** — [*Introducing Contextual Retrieval*](https://www.anthropic.com/research/contextual-retrieval). An applied technique for preserving information about a passage's originating document during retrieval.

- **Saad-Falcon et al. (2024)** — [*ARES: An Automated Evaluation Framework for Retrieval-Augmented Generation Systems*](https://aclanthology.org/2024.naacl-long.20/). Research on evaluating retrieval relevance and generated-answer quality as distinct concerns.

- **Du et al. (2025)** — [*Context Length Alone Hurts LLM Performance Despite Perfect Retrieval*](https://aclanthology.org/2025.findings-emnlp.1264/). Evidence that long inputs can affect model performance independently of ordinary retrieval failures.

- **Anthropic (2025)** — [*Effective Context Engineering for AI Agents*](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents). A contemporary engineering perspective on assembling and maintaining useful context during AI inference.