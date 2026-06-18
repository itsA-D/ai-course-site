**AI for Management & Research**

A Master Course & Website Outline --- Two Tracks, Shared Foundation

*Tutorials · Lessons · Articles · Hands-on labs with free tools*

**Prepared for: Prof. Abhishek Kumar Jha, SPJIMR**

Purpose: A complete, link-rich curriculum blueprint for a public website teaching AI from a management perspective, with a parallel research-methods track and practical, free hands-on activities.

*Version 1.0 --- June 2026*

Table of Contents

1\. About This Curriculum

This curriculum is designed for a website that publishes tutorials, lessons, and articles about Artificial Intelligence aimed primarily at managers and researchers. It is deliberately practice-oriented: concepts are always paired with a free tool, a small hands-on activity, and links to credible sources so that a reader can learn by doing without paying for anything.

The content is organised as a Shared Foundation followed by two specialised tracks. Roughly the first half of any learner\'s journey is common to everyone --- the basics of AI, how generative models work, prompting, agentic AI, and responsible use. After that, learners branch into the track that fits their goals.

The two tracks

**Management Track.** For leaders, consultants, and functional managers who need the judgment to evaluate, adopt, and govern AI --- not to build it. Emphasis on use cases, decision frameworks, ROI, risk, and change management. Lighter on mathematics, heavier on cases.

**Research Track.** For academics, doctoral students, and analysts who want to use AI as part of the research process and as a research method in its own right (e.g., literature synthesis, qualitative coding, silicon sampling, synthetic data). Heavier on methodology, validity, and reproducibility.

How the pieces fit together

Each track is delivered as a set of self-contained mini-courses so that a reader can take just one, or stack several. The Research Track follows the four mini-courses you specified: Opening to AI, Using GenAI in Practice, Connecting GenAI to Theory & Strategy, and Using GenAI as a Research Method. The Management Track mirrors and extends your three existing SPJIMR course outlines (Generative AI for Business, AI & Analytics Foundation, and Agentic AI).

How to use the site

- Every session is a single web page (a tutorial or article) with the same structure: Objective, Key concepts, a Hands-on activity, free Tools, and Read/explore links.

- \"Hands-on\" boxes are intentionally doable in a browser with a free account --- no installation unless noted.

- Articles can be published independently and later grouped into a mini-course; the outline doubles as a content backlog (see Section 8).

2\. Curriculum Map at a Glance

The Shared Foundation is taken by both audiences. The two tracks then run in parallel.

| **Block** | **Modules / Mini-courses** | **Primary audience** |
|----|----|----|
| Shared Foundation | F1 What AI Really Is · F2 Inside GenAI · F3 Working with AI (Prompting) · F4 From Chatbots to Agents · F5 Responsible AI | Everyone |
| Research Track | R1 Opening to AI · R2 GenAI in Practice · R3 Connecting GenAI to Theory & Strategy · R4 GenAI as a Research Method · Capstone | Researchers, PhD students, analysts |
| Management Track | M1 The AI-Literate Manager · M2 GenAI in Practice for Business · M3 Data, Decisions & Analytics · M4 Agentic AI for Enterprise · M5 Strategy & Advantage · M6 Governance & Change · Capstone | Managers, consultants, leaders |
| Toolkit & Library | Free Tools Directory · Reading & Resource Library · Content Backlog | Everyone |

3\. Shared Foundation (Common Core)

These five modules give every reader a common vocabulary and intuition. They are deliberately tool-rich and math-light. Each can be read on its own as an explainer article.

Module F1 --- What AI Really Is

F1.1. From rules to learning to generation

**Objective.** Build an accurate mental model of AI by tracing the path from rule-based systems to machine learning, deep learning, and generative AI.

**Key concepts:**

- AI vs. ML vs. deep learning vs. generative AI --- the nested relationship

- Supervised, unsupervised, and reinforcement learning in plain language

- Discriminative vs. generative models: predicting a label vs. producing content

- Why \"AI\" today usually means large neural networks trained on huge data

**Hands-on.** Ask ChatGPT, Claude, and Gemini the same question and compare answers; note where they agree, differ, and hedge. This is the reader\'s first \"model comparison\".

**Free tools:** [ChatGPT](https://chatgpt.com) · [Claude](https://claude.ai) · [Gemini](https://gemini.google.com)

**Read / explore:** [Elements of AI (free course)](https://www.elementsofai.com) · [Google ML Crash Course](https://developers.google.com/machine-learning/crash-course)

F1.2. Live AI vs. marketing hype

**Objective.** Separate what AI can reliably do today from vendor claims, using the Gartner Hype Cycle and the idea of a \"jagged frontier\" of capability.

**Key concepts:**

- The Gartner Hype Cycle applied to GenAI

- Capability vs. reliability: where models are superhuman and where they fail

- The \"jagged frontier\" --- tasks of similar difficulty, very different success

- How to read a benchmark and a demo critically

**Hands-on.** Pick three AI claims from recent ads or LinkedIn posts and test each one directly in a chatbot; classify them as real, exaggerated, or false.

**Free tools:** [Perplexity (cited answers)](https://www.perplexity.ai)

**Read / explore:** [Dell\'Acqua et al., Navigating the Jagged Technological Frontier](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321) · [Ethan Mollick --- One Useful Thing](https://www.oneusefulthing.org)

F1.3. Mapping the AI landscape

**Objective.** Give readers a map of the field: model families, providers, modalities (text, image, audio, video, code), and open vs. closed models.

**Key concepts:**

- Major model families and providers (OpenAI, Anthropic, Google, Meta, Mistral, open-source)

- Modalities and multimodality

- Open-weight vs. proprietary models --- trade-offs

- Where Indian and global models fit

**Hands-on.** Build a one-page personal \"AI stack\": list one free tool you would use for writing, search, images, and data.

**Free tools:** [Hugging Face (model & demo hub)](https://huggingface.co) · [Poe (many models, one place)](https://poe.com)

**Read / explore:** [Stanford AI Index Report](https://aiindex.stanford.edu/report/)

Module F2 --- Inside GenAI: How LLMs Work

F2.1. Tokens, embeddings, and prediction

**Objective.** Explain what a large language model actually does --- predict the next token --- and why that simple idea produces such capable behaviour.

**Key concepts:**

- Tokens and tokenisation

- Embeddings: turning words into vectors of meaning

- Next-token prediction and probability

- Why the same prompt can give different answers (temperature, sampling)

**Hands-on.** Use the OpenAI tokenizer to see how your own sentence is split into tokens; then lower/raise \"creativity\" in a playground and observe the change.

**Free tools:** [OpenAI Tokenizer](https://platform.openai.com/tokenizer) · [Google AI Studio (free playground)](https://aistudio.google.com)

**Read / explore:** [Vaswani et al., Attention Is All You Need](https://arxiv.org/abs/1706.03762)

F2.2. Context windows, hallucination, and limits

**Objective.** Understand the practical limits that shape every AI workflow: context length, hallucination, knowledge cut-offs, and bias.

**Key concepts:**

- Context window: the model\'s short-term memory

- Hallucination --- why models invent confident, wrong answers

- Training cut-offs and why models need search or documents

- Bias and representativeness of training data

**Hands-on.** Deliberately trigger a hallucination (ask for citations on a niche topic), then verify each one --- a memorable lesson in always checking.

**Free tools:** [NotebookLM (grounded in your sources)](https://notebooklm.google.com)

**Read / explore:** [Anthropic --- Prompt engineering overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)

F2.3. The frontier: reasoning and test-time compute

**Objective.** Introduce reasoning models and the shift from training-time to test-time (inference-time) compute --- the current frontier.

**Key concepts:**

- System 1 vs. System 2 thinking applied to models (Kahneman)

- Chain-of-thought and why \"thinking longer\" helps

- Train-time scaling laws vs. test-time compute

- Latency and cost vs. reasoning depth --- a manager\'s trade-off

**Hands-on.** Run a multi-step logic puzzle on a standard model and a reasoning model; compare quality, time, and cost.

**Free tools:** [ChatGPT (reasoning modes)](https://chatgpt.com) · [Claude](https://claude.ai)

**Read / explore:** [Wei et al., Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903)

Module F3 --- Working with AI: Prompting & Co-Intelligence

F3.1. Prompting fundamentals

**Objective.** Teach a repeatable prompting method so readers get reliable results instead of lucky ones.

**Key concepts:**

- A simple framework: Task, Context, References, Evaluate, Iterate

- Role, format, and constraints in a prompt

- Few-shot prompting: showing examples

- Giving the model a way to say \"I don\'t know\"

**Hands-on.** Take a weak one-line prompt and improve it through five iterations, saving each version to start a personal prompt library.

**Free tools:** [Anthropic interactive prompting tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) · [Google Prompting Essentials](https://www.coursera.org/specializations/prompting-essentials-google)

**Read / explore:** [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)

F3.2. Advanced prompting patterns

**Objective.** Move beyond single prompts to structured techniques that improve accuracy and control.

**Key concepts:**

- Chain-of-thought and step-by-step decomposition

- Self-critique and \"reflect then revise\"

- Structured output (tables, JSON, templates)

- Prompt chaining and reusable templates

**Hands-on.** Design a reusable prompt template for a recurring task (e.g., summarising a report into a one-pager) and test it on three inputs.

**Free tools:** [Claude (Projects & artifacts)](https://claude.ai)

**Read / explore:** [DeepLearning.AI --- ChatGPT Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)

F3.3. Co-intelligence: being the human in the loop

**Objective.** Frame AI as a collaborator, not an oracle, using Mollick\'s practical rules for working with AI.

**Key concepts:**

- \"Always invite AI to the table\" and \"be the human in the loop\"

- Treating AI as a smart but unreliable colleague

- When to trust, when to verify, when to refuse

- Augmentation vs. automation of a task

**Hands-on.** Pick one task from your week; redesign it as a human-AI workflow, deciding what AI drafts and what you must check.

**Free tools:** [ChatGPT](https://chatgpt.com) · [Claude](https://claude.ai)

**Read / explore:** [Ethan Mollick, Co-Intelligence (book site)](https://www.penguinrandomhouse.com/books/741805/co-intelligence-by-ethan-mollick/)

Module F4 --- From Chatbots to Agents: Agentic AI

F4.1. What makes an agent (vs. a chatbot)

**Objective.** Define agentic AI: models that plan, use tools, remember, and act over multiple steps toward a goal.

**Key concepts:**

- The augmented LLM: model + tools + memory + retrieval

- Reason--Act--Reflect loops

- Why memory, tools, and reasoning enable autonomy

- Human-in-the-loop and escalation triggers

**Hands-on.** Use a free agentic feature (e.g., a chatbot that can browse or run code) to complete a 3-step task and inspect each step.

**Free tools:** [Google AI Studio (function calling)](https://aistudio.google.com)

**Read / explore:** [Anthropic --- Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

F4.2. Memory and Retrieval-Augmented Generation (RAG)

**Objective.** Explain how agents overcome context limits and hallucination using memory types and RAG.

**Key concepts:**

- Short-term vs. long-term memory; episodic, semantic, procedural

- Embeddings and vector databases

- RAG pipeline: ingest, retrieve, generate

- Reducing hallucination by grounding in documents

**Hands-on.** Upload your own PDFs to NotebookLM and ask source-grounded questions; notice it citing your documents instead of guessing.

**Free tools:** [NotebookLM](https://notebooklm.google.com) · [Hugging Face Spaces (RAG demos)](https://huggingface.co/spaces)

**Read / explore:** [Lewis et al., Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401)

F4.3. Tools, multi-agent systems, and protocols

**Objective.** Introduce tool use and multi-agent coordination --- how several specialised agents collaborate.

**Key concepts:**

- Tool/function calling and JSON schemas

- Multi-agent patterns: centralized, decentralized, hierarchical

- Frameworks: LangGraph, CrewAI, AutoGen (overview only)

- Emerging protocols: MCP and Agent-to-Agent (A2A)

**Hands-on.** Sketch (on paper or in a chatbot) a \"committee\" of 3 agents for a task you know well --- who does what, and who checks whom.

**Free tools:** [LangGraph (open framework)](https://github.com/langchain-ai/langgraph) · [CrewAI](https://www.crewai.com)

**Read / explore:** [Model Context Protocol (MCP)](https://modelcontextprotocol.io)

Module F5 --- Responsible AI

F5.1. Ethics, bias, and fairness

**Objective.** Equip readers to spot and reason about bias, fairness, and harm in AI systems.

**Key concepts:**

- Sources of bias: data, design, deployment

- Fairness trade-offs and disparate impact

- Transparency and explainability

- Algorithmic accountability and liability

**Hands-on.** Probe a model for biased outputs on a sensitive scenario, then attempt to mitigate with better prompting; document what changed.

**Free tools:** [Perplexity (for sourcing claims)](https://www.perplexity.ai)

**Read / explore:** [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)

F5.2. Privacy, governance, and regulation

**Objective.** Map the governance landscape: data privacy, IP, and the major regulatory frameworks.

**Key concepts:**

- What not to paste into a public chatbot (data leakage)

- Copyright, IP, and provenance of AI output

- Global frameworks: EU AI Act; India\'s DPDP Act and emerging guidance

- Building an organisational responsible-AI policy

**Hands-on.** Draft a one-page \"safe use\" checklist for your team covering data, disclosure, and verification.

**Free tools:** [EU AI Act explorer](https://artificialintelligenceact.eu)

**Read / explore:** [OECD AI Principles](https://oecd.ai/en/ai-principles)

4\. Research Track

The Research Track teaches researchers to use AI across the whole research lifecycle and, ultimately, as a method in its own right. It follows your four mini-courses and ends in a reproducible mini-project. Throughout, the emphasis is on validity, transparency, and reproducibility --- the things that separate research use from casual use.

Mini-course R1 --- Opening to AI for Researchers

A gentle on-ramp that connects the Shared Foundation to the realities of academic and applied research.

R1.1. Why AI matters for research now

**Objective.** Frame the opportunity and the risks of AI for research, and set norms for responsible scholarly use.

**Key concepts:**

- Where AI helps across the lifecycle: ideation, review, data, analysis, writing

- What journals and funders currently say about AI use and disclosure

- The reproducibility problem with stochastic models

- Academic integrity and authorship

**Hands-on.** Read your target journal\'s AI policy and write a two-line disclosure statement you could reuse.

**Free tools:** [Semantic Scholar](https://www.semanticscholar.org)

**Read / explore:** [Grossmann et al., AI and the transformation of social science (Science)](https://www.science.org/doi/10.1126/science.adi1778) · [Bail, Can Generative AI improve social science? (PNAS)](https://doi.org/10.1073/pnas.2314021121)

R1.2. The AI-augmented research workflow

**Objective.** Give a map of free tools for each research stage so readers can assemble a zero-cost stack.

**Key concepts:**

- Discovery, synthesis, extraction, analysis, writing, references

- Matching tool to task (and knowing each tool\'s failure mode)

- Keeping a research log of prompts and model versions

- Validation as a habit, not an afterthought

**Hands-on.** Assemble your free research stack from the Tools Directory (Section 6) and note one validation step for each tool.

**Free tools:** [Elicit](https://elicit.com) · [Consensus](https://consensus.app) · [Connected Papers](https://www.connectedpapers.com)

**Read / explore:** [howtousellms --- practical notebook](https://github.com/cssmodels/howtousellms)

Mini-course R2 --- Using GenAI in Practice (Research Workflow)

Hands-on use of GenAI for the everyday work of research, with validation built into every step.

R2.1. Literature discovery and synthesis

**Objective.** Use AI search and synthesis tools to map a field quickly without losing rigour.

**Key concepts:**

- AI literature search vs. traditional databases

- Citation-graph exploration to find seminal and adjacent work

- Evidence synthesis and the risk of fabricated citations

- Building a defensible search log

**Hands-on.** Run the same review question through Elicit, Consensus, and Connected Papers; triangulate and verify five key papers in Semantic Scholar.

**Free tools:** [Elicit](https://elicit.com) · [Consensus](https://consensus.app) · [Research Rabbit](https://www.researchrabbit.ai) · [Connected Papers](https://www.connectedpapers.com)

**Read / explore:** [Scite (citation context)](https://scite.ai)

R2.2. Reading, summarising, and note-making at scale

**Objective.** Turn large source sets into structured, source-grounded notes you can trust.

**Key concepts:**

- Grounded summarisation vs. open-ended summarisation

- Extracting structured data from papers (PICO-style tables)

- Audio/visual overviews for fast orientation

- Avoiding summary drift and overclaiming

**Hands-on.** Load 5--10 PDFs into NotebookLM, generate a briefing and a concept map, then spot-check three claims against the originals.

**Free tools:** [NotebookLM](https://notebooklm.google.com) · [SciSpace](https://scispace.com) · [Scholarcy](https://www.scholarcy.com)

**Read / explore:** [OpenAlex (open scholarly data)](https://openalex.org)

R2.3. Writing, editing, and academic communication

**Objective.** Use AI to improve clarity and structure of scholarly writing while preserving voice and integrity.

**Key concepts:**

- Drafting vs. editing with AI; keeping authorial voice

- Improving structure, flow, and reviewer-readiness

- Reverse-outlining and gap-finding

- Disclosure, plagiarism, and the limits of AI-assisted writing

**Hands-on.** Take a rough abstract, ask AI to reverse-outline it, identify gaps, and tighten it --- then compare against your original.

**Free tools:** [Claude](https://claude.ai) · [ChatGPT](https://chatgpt.com)

**Read / explore:** [Anthropic prompt engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)

Mini-course R3 --- Connecting GenAI to Theory, Strategy & Research Design

Moving from tasks to thinking: using GenAI to sharpen theory, hypotheses, and research design --- with healthy scepticism.

R3.1. Theory development and hypothesis generation

**Objective.** Use AI as a sparring partner for theory-building without outsourcing judgement.

**Key concepts:**

- Brainstorming constructs, mechanisms, and rival explanations

- Stress-testing a theory with adversarial prompting

- Surfacing assumptions and boundary conditions

- Guarding against plausible-but-empty output

**Hands-on.** Give the model your research question and ask for three competing theoretical framings plus the strongest objection to each.

**Free tools:** [Claude](https://claude.ai)

**Read / explore:** [Awesome-LLM-for-Social-Science (paper hub)](https://github.com/KeHang-Zhu/Awesome-LLM-for-Social-Science)

R3.2. Research design and methods planning

**Objective.** Use AI to pressure-test design choices: sampling, measures, identification, and threats to validity.

**Key concepts:**

- Mapping questions to designs (experimental, survey, qualitative, mixed)

- Anticipating threats to internal and external validity

- Power, measurement, and operationalisation as a dialogue

- Pre-registration thinking

**Hands-on.** Ask the model to critique your draft design as \"Reviewer 2\"; convert its best three points into design changes.

**Free tools:** [ChatGPT](https://chatgpt.com)

**Read / explore:** [OSF --- pre-registration](https://www.cos.io/initiatives/prereg)

R3.3. AI strategy for a research programme

**Objective.** Help researchers decide where AI belongs in a multi-year agenda --- and where it should not.

**Key concepts:**

- Build vs. buy vs. avoid for research infrastructure

- Cost, reproducibility, and longevity of tools

- Ethics review and data governance for AI-in-research

- Documenting an AI-use protocol for a lab

**Hands-on.** Draft a one-page \"AI in this project\" protocol: tools, prompts, versions, validation, and disclosure.

**Read / explore:** [Argyle et al., Out of One, Many (Political Analysis)](https://doi.org/10.1017/pan.2023.2)

Mini-course R4 --- Using GenAI as a Research Method

The deepest mini-course: GenAI not as an assistant but as an instrument of measurement and data generation. This is where validation, reliability, and reporting matter most. Two of your linked resources anchor this module: the Oxford-style LLM-for-Social-Science repo and the UCLA Anderson product-sprint kit.

R4.1. LLMs for text annotation and classification

**Objective.** Use LLMs to code and classify text at scale, and validate against human labels properly.

**Key concepts:**

- Zero-shot and few-shot classification

- Inter-rater reliability between model and humans (e.g., Cohen\'s/Krippendorff\'s)

- Prompt sensitivity and the need for multiple runs

- When fine-tuned classical models still win

**Hands-on.** Replicate the howtousellms workflow: classify a small labelled text set (e.g., populism), compute agreement with the gold labels, and report it.

**Free tools:** [howtousellms notebook](https://github.com/cssmodels/howtousellms) · [Google Colab](https://colab.research.google.com) · [Hugging Face](https://huggingface.co)

**Read / explore:** [Ziems et al., Can LLMs Transform Computational Social Science?](https://arxiv.org/abs/2305.03514) · [Risks of LLM text annotation (arXiv)](https://arxiv.org/pdf/2503.22040)

R4.2. Silicon samples and synthetic respondents

**Objective.** Critically explore using LLMs to simulate human samples for early-stage and pilot research.

**Key concepts:**

- \"Silicon sampling\": conditioning models on personas to mimic populations

- Where it is useful (piloting, pretesting) and where it misleads

- Validity, coverage, and bias of synthetic respondents

- Ethical and reporting standards

**Hands-on.** Adapt the LLM-for-Social-Science synthetic-sampling notebook to generate synthetic survey responses, then compare distributions to a real benchmark.

**Free tools:** [LLM-for-Social-Science-Research repo](https://github.com/antndlcrx/LLM-for-Social-Science-Research) · [Google Colab](https://colab.research.google.com)

**Read / explore:** [Argyle et al., Out of One, Many](https://doi.org/10.1017/pan.2023.2) · [Horton, LLMs as Simulated Economic Agents](https://www.nber.org/papers/w31122)

R4.3. Agent-based and simulation studies

**Objective.** Introduce multi-agent LLM simulations as an emerging method for studying interaction and emergence.

**Key concepts:**

- LLM agents as simulated actors in social/market settings

- Designing a simulation: roles, environment, interaction rules

- Interpreting emergent behaviour with caution

- Reproducibility of stochastic simulations

**Hands-on.** Build a tiny 2--3 agent negotiation or market simulation in a chatbot or Colab and log the transcript for analysis.

**Free tools:** [Google Colab](https://colab.research.google.com) · [LangGraph](https://github.com/langchain-ai/langgraph)

**Read / explore:** [Multi-Agent LLM Systems for Social Science (arXiv)](https://arxiv.org/html/2506.01839v2)

R4.4. Building and sharing a research app or demo

**Objective.** Package a method as a small, shareable app so others can reproduce and extend it.

**Key concepts:**

- From notebook to interactive demo

- Editable system prompts and transparency

- Synthetic data for safe demonstration

- Deployment options (free): Hugging Face Spaces, GitHub Pages

**Hands-on.** Follow the UCLA Anderson App Development Kit to stand up a minimal AI app, then publish a no-backend version on Hugging Face Spaces or GitHub Pages.

**Free tools:** [UCLA Anderson App Development Kit](https://ucla-anderson-ssai.github.io/SSAI/Product%20Sprint/App_Development_Kit.html) · [Hugging Face Spaces](https://huggingface.co/spaces) · [Gradio](https://www.gradio.app)

**Read / explore:** [UCLA Anderson SSAI (course site)](https://ucla-anderson-ssai.github.io/SSAI/)

R4.5. Validity, reliability, and reporting standards

**Objective.** Establish how to validate AI-as-method results and report them so others can reproduce the work.

**Key concepts:**

- Run multiple iterations; report variability, not a single run

- Human validation subsets and agreement metrics

- Reporting prompts, model versions, dates, and parameters

- Threats to validity specific to LLM measurement

**Hands-on.** Write a methods paragraph for one of the earlier R4 exercises that a reviewer could reproduce exactly.

**Read / explore:** [Evaluation guidelines for empirical studies with LLMs (arXiv)](https://arxiv.org/pdf/2411.07668)

Research Track --- Capstone

Choose one research question and carry it through an AI-augmented pipeline: discover and synthesise the literature (R2), sharpen the design (R3), apply one AI-as-method technique (R4 --- annotation, silicon sampling, or simulation), validate against a human or real-data benchmark, and write a reproducible methods note plus a disclosure statement. Optionally publish a small demo. Deliverable: a short working paper + a public notebook or Space.

5\. Management Track

The Management Track builds the strategic and applied literacy a leader, consultant, or transformation manager needs: to diagnose AI opportunities, evaluate vendor claims, manage implementation risk, and drive adoption. It mirrors and extends your three SPJIMR outlines. It is case-led and decision-focused, with light, optional hands-on.

Mini-course M1 --- The AI-Literate Manager

M1.1. Intelligent systems: what AI actually is for business

**Objective.** Give managers an accurate, hype-free model of AI and a shared vocabulary for cross-functional conversations.

**Key concepts:**

- Rule-based to GenAI in business terms

- Live capability vs. marketing hype

- Mapping the AI landscape to business functions

- What AI changes about competitive dynamics

**Hands-on.** Audit your own role: list five tasks and mark each as automate, augment, or leave alone.

**Free tools:** [ChatGPT](https://chatgpt.com) · [Gemini](https://gemini.google.com)

**Read / explore:** [McKinsey --- The State of AI](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)

M1.2. The AI revolution so far --- promise vs. delivery

**Objective.** Assess what AI has actually delivered globally and in India, and the implications for firms.

**Key concepts:**

- Global and Indian model ecosystems

- Promised vs. realised value; the adoption gap

- Why most AI projects fail (and the data behind it)

- Adoption implications for Indian firms

**Hands-on.** Find one AI success and one failure case in your industry; identify the single biggest factor in each.

**Read / explore:** [BCG/HBS --- Jagged Frontier field study](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321)

M1.3. What comes next: models, workflows, and agents

**Objective.** Help managers anticipate the move from models to workflows to autonomous agents.

**Key concepts:**

- Models vs. workflows vs. agents

- Human--AI interface design

- Predicting 3-year enterprise maturity

- Where to place safe early bets

**Hands-on.** Sketch a 3-year AI maturity path for your function with one initiative per year.

**Free tools:** [Perplexity](https://www.perplexity.ai)

**Read / explore:** [Anthropic --- Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

Mini-course M2 --- GenAI in Practice for Business

M2.1. Prompting and productivity for managers

**Objective.** Build practical prompting skill for management tasks: analysis, drafting, synthesis, and decision prep.

**Key concepts:**

- Task--Context--References--Evaluate--Iterate for business

- Prompt templates for recurring management tasks

- Human-in-the-loop verification

- Building a team prompt library

**Hands-on.** Create three reusable prompts (board summary, customer email triage, meeting-notes-to-actions) and test them.

**Free tools:** [Claude](https://claude.ai) · [ChatGPT](https://chatgpt.com) · [Microsoft Copilot](https://copilot.microsoft.com)

**Read / explore:** [Google Prompting Essentials](https://www.coursera.org/specializations/prompting-essentials-google)

M2.2. GenAI across business functions

**Objective.** Tour high-value GenAI use cases by function with realistic ROI and risk.

**Key concepts:**

- Marketing & content; sales; service; HR; finance; operations

- Personalisation and customer experience

- Augmenting vs. replacing roles

- Estimating value and cost

**Hands-on.** Pick one function and design a small GenAI pilot with a success metric and a risk to watch.

**Free tools:** [NotebookLM](https://notebooklm.google.com) · [Gamma (decks)](https://gamma.app)

**Read / explore:** [Brynjolfsson et al., Generative AI at Work](https://www.nber.org/papers/w31161)

M2.3. Low-code prototyping for managers

**Objective.** Let managers build a working proof-of-concept without engineers, to make AI concrete.

**Key concepts:**

- No-code/low-code AI builders

- Custom GPTs / assistants for a workflow

- Connecting a chatbot to your own documents (RAG, lightly)

- From prototype to a business case

**Hands-on.** Build a custom assistant grounded in a few of your documents and demo it to a colleague.

**Free tools:** [Hugging Face Spaces](https://huggingface.co/spaces) · [Google AI Studio](https://aistudio.google.com) · [Gradio](https://www.gradio.app)

**Read / explore:** [UCLA Anderson App Development Kit](https://ucla-anderson-ssai.github.io/SSAI/Product%20Sprint/App_Development_Kit.html)

Mini-course M3 --- Data, Decisions & Analytics

M3.1. Data before models: why transformations win or fail

**Objective.** Show managers why data quality and readiness decide AI outcomes more than model choice.

**Key concepts:**

- Four data dimensions: quality, availability, governance, structure

- Diagnosing a client\'s or firm\'s data posture

- Why most AI failures are really data failures

- Building a minimum viable data foundation

**Hands-on.** Run a quick data-readiness self-assessment for one use case in your organisation.

**Read / explore:** [McKinsey --- The State of AI](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)

M3.2. Decision systems and managing risk

**Objective.** Translate model metrics into business decisions about acceptable error and cost.

**Key concepts:**

- Precision and recall in business terms

- Cost of false positives vs. false negatives

- Decision thresholds as a management choice

- Segmentation and customer intelligence beyond demographics

**Hands-on.** For a churn or fraud scenario, decide where to set the threshold and justify the trade-off in money terms.

**Free tools:** [ChatGPT (Advanced Data Analysis)](https://chatgpt.com)

**Read / explore:** [Google ML Crash Course --- classification](https://developers.google.com/machine-learning/crash-course)

M3.3. From text and behaviour to intelligence

**Objective.** Use NLP and pattern-mining to turn customer voice and behaviour into decisions.

**Key concepts:**

- Sentiment and topic modelling; classical NLP vs. LLM cost/complexity

- Association and co-purchase patterns (cross-sell, assortment)

- Actionable signal vs. noise

- Semantic search and RAG for enterprise knowledge

**Hands-on.** Paste a set of customer reviews into a chatbot and extract themes, sentiment, and three actions; sanity-check the themes.

**Free tools:** [Claude](https://claude.ai) · [NotebookLM](https://notebooklm.google.com)

**Read / explore:** [howtousellms (text analysis)](https://github.com/cssmodels/howtousellms)

Mini-course M4 --- Agentic AI for Enterprise Workflows

M4.1. Reasoning, memory, and agents in the enterprise

**Objective.** Explain agentic AI for managers: what it automates, where it needs oversight, and the governance implications.

**Key concepts:**

- Reason--Act--Reflect loops in a business process

- Memory and RAG for institutional knowledge

- Escalation triggers, audit trails, human oversight

- Specifying memory and tools for a client need

**Hands-on.** Map one end-to-end process and mark where an agent could act vs. where a human must approve.

**Read / explore:** [Anthropic --- Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

M4.2. Multi-agent systems and orchestration

**Objective.** Show how a \'committee\' of specialised agents can run a workflow, and the failure modes to manage.

**Key concepts:**

- Generic (proxy) vs. specialist agents

- Centralized, decentralized, hierarchical patterns

- Agent-to-Agent communication and failure modes

- Roles, recovery, and accountability

**Hands-on.** Design a multi-agent committee for a real workflow (e.g., loan review): name each agent, its tools, and its checks.

**Free tools:** [CrewAI](https://www.crewai.com) · [LangGraph](https://github.com/langchain-ai/langgraph)

**Read / explore:** [Model Context Protocol](https://modelcontextprotocol.io)

Mini-course M5 --- Strategy, Innovation & Competitive Advantage

M5.1. AI strategy and business models

**Objective.** Connect AI capability to strategy: where it creates durable advantage and where it is just table stakes.

**Key concepts:**

- AI as feature vs. AI as platform

- Build vs. buy vs. partner

- Data and workflow as moats

- Portfolio approach to AI initiatives

**Hands-on.** Place three possible AI initiatives on an impact-vs-feasibility grid and pick one to champion.

**Read / explore:** [Wharton --- AI for Business (exec ed overview)](https://executiveeducation.wharton.upenn.edu/for-individuals/all-programs/ai-for-business/)

M5.2. Innovation, disruption, and the future of work

**Objective.** Examine how GenAI reshapes industries, roles, and the labour market.

**Key concepts:**

- Exposure of occupations and tasks to GenAI

- Augmentation vs. displacement

- Reskilling and workforce strategy

- Industry disruption patterns

**Hands-on.** Estimate the AI exposure of your own team\'s tasks and draft a reskilling priority.

**Read / explore:** [Eloundou et al., GPTs are GPTs](https://arxiv.org/abs/2303.10130)

Mini-course M6 --- Governance, Ethics & Leading AI Change

M6.1. AI without guardrails: governance, fairness, liability

**Objective.** Prepare managers to govern AI: bias, fairness, liability, and responsible-AI frameworks.

**Key concepts:**

- Algorithmic bias and consultant/firm liability

- Responsible-AI principles in practice

- India-specific regulation (DPDP) and global frameworks

- Vendor due diligence and contractual safeguards

**Hands-on.** Draft a responsible-AI checklist for evaluating a vendor\'s AI product.

**Free tools:** [EU AI Act explorer](https://artificialintelligenceact.eu)

**Read / explore:** [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) · [OECD AI Principles](https://oecd.ai/en/ai-principles)

M6.2. Implementing AI and leading change

**Objective.** Turn an AI plan into adoption by managing people, process, and resistance.

**Key concepts:**

- Change frameworks (e.g., ADKAR) for AI adoption

- Overcoming middle-management resistance

- 90-day post-deployment monitoring and stakeholder plans

- Measuring realised value

**Hands-on.** Build a 90-day adoption plan for one AI initiative, including a resistance-mitigation step.

**Read / explore:** [McKinsey --- The State of AI](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)

Management Track --- Capstone

Produce a consulting-grade AI implementation plan for a real organisational problem: diagnose the opportunity and data posture (M3), select the right approach from classical ML to agents (M1, M4), build a small prototype or mock-up (M2), assess governance and risk (M6), and present a plan integrating data strategy, ROI, change management, and a 90-day rollout. Deliverable: a short deck or memo + an optional working prototype.

6\. Hands-on Toolkit --- Free Tools Directory

Every tool below has a usable free tier (as of mid-2026; verify before relying on it). Use these in the Hands-on boxes. Links open the official site.

6.1 No-code / chat & general AI

| **Tool** | **What it\'s for** | **Link** |
|----|----|----|
| ChatGPT | General assistant, analysis, drafting; free tier | [chatgpt.com](https://chatgpt.com) |
| Claude | Reasoning, long documents, careful writing | [claude.ai](https://claude.ai) |
| Gemini | Google-integrated assistant, multimodal | [gemini.google.com](https://gemini.google.com) |
| Microsoft Copilot | Assistant integrated with Microsoft 365 | [copilot.microsoft.com](https://copilot.microsoft.com) |
| Perplexity | Search with citations; good for sourcing | [perplexity.ai](https://www.perplexity.ai) |
| NotebookLM | Source-grounded notebook over your own files | [notebooklm.google.com](https://notebooklm.google.com) |
| Poe | Many models in one interface | [poe.com](https://poe.com) |
| Google AI Studio | Free playground + API key + function calling | [aistudio.google.com](https://aistudio.google.com) |

6.2 Research-specific tools

| **Tool** | **What it\'s for** | **Link** |
|----|----|----|
| Elicit | AI literature review, screening, extraction | [elicit.com](https://elicit.com) |
| Consensus | Evidence answers from papers | [consensus.app](https://consensus.app) |
| Connected Papers | Citation-graph discovery | [connectedpapers.com](https://www.connectedpapers.com) |
| Research Rabbit | Citation explorer & alerts | [researchrabbit.ai](https://www.researchrabbit.ai) |
| Semantic Scholar | Free scholarly search & API | [semanticscholar.org](https://www.semanticscholar.org) |
| OpenAlex | Open scholarly metadata | [openalex.org](https://openalex.org) |
| Scite | Citation context (supporting/contrasting) | [scite.ai](https://scite.ai) |
| SciSpace | Read & explain papers | [scispace.com](https://scispace.com) |
| Taguette | Free, open-source qualitative coding | [taguette.org](https://www.taguette.org) |
| QualCoder | Open-source CAQDAS for qualitative data | [github.com/ccbogel/QualCoder](https://github.com/ccbogel/QualCoder) |

6.3 Light coding & build/deploy (free)

| **Tool** | **What it\'s for** | **Link** |
|----|----|----|
| Google Colab | Free notebooks in the browser (Python) | [colab.research.google.com](https://colab.research.google.com) |
| Hugging Face | Models, datasets, and free Spaces hosting | [huggingface.co](https://huggingface.co) |
| Gradio | Build simple AI web demos in Python | [gradio.app](https://www.gradio.app) |
| Ollama | Run open models locally, free | [ollama.com](https://ollama.com) |
| LM Studio | Desktop app to run local models | [lmstudio.ai](https://lmstudio.ai) |
| LangGraph | Open framework for agent workflows | [github.com/langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) |
| GitHub Pages | Free static website hosting | [pages.github.com](https://pages.github.com) |

7\. Reading & Resource Library

7.1 Foundational papers (research method)

**•** [Vaswani et al. (2017) --- Attention Is All You Need](https://arxiv.org/abs/1706.03762)

**•** [Wei et al. (2022) --- Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903)

**•** [Lewis et al. (2020) --- Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401)

**•** [Argyle et al. (2023) --- Out of One, Many (silicon sampling)](https://doi.org/10.1017/pan.2023.2)

**•** [Ziems et al. (2024) --- Can LLMs Transform Computational Social Science?](https://arxiv.org/abs/2305.03514)

**•** [Horton (2023) --- LLMs as Simulated Economic Agents](https://www.nber.org/papers/w31122)

**•** [Grossmann et al. (2023) --- AI & the transformation of social science (Science)](https://www.science.org/doi/10.1126/science.adi1778)

**•** [Bail (2024) --- Can Generative AI improve social science? (PNAS)](https://doi.org/10.1073/pnas.2314021121)

**•** [Navigating the Risks of LLM Text Annotation (2025)](https://arxiv.org/pdf/2503.22040)

**•** [Evaluation Guidelines for Empirical Studies with LLMs](https://arxiv.org/pdf/2411.07668)

7.2 Foundational reading (management)

**•** [Brynjolfsson, Li & Raymond (2023) --- Generative AI at Work](https://www.nber.org/papers/w31161)

**•** [Eloundou et al. (2023) --- GPTs are GPTs](https://arxiv.org/abs/2303.10130)

**•** [Dell\'Acqua et al. (2023) --- Navigating the Jagged Technological Frontier](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321)

**•** [McKinsey --- The State of AI](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)

**•** [Mollick --- Co-Intelligence](https://www.penguinrandomhouse.com/books/741805/co-intelligence-by-ethan-mollick/)

**•** [Ethan Mollick --- One Useful Thing (blog)](https://www.oneusefulthing.org)

7.3 Courses, repos & toolkits

**•** [LLM-for-Social-Science-Research (provided)](https://github.com/antndlcrx/LLM-for-Social-Science-Research)

**•** [UCLA Anderson SSAI --- App Development Kit (provided)](https://ucla-anderson-ssai.github.io/SSAI/Product%20Sprint/App_Development_Kit.html)

**•** [howtousellms --- LLMs for text analysis](https://github.com/cssmodels/howtousellms)

**•** [Awesome-LLM-for-Social-Science](https://github.com/KeHang-Zhu/Awesome-LLM-for-Social-Science)

**•** [mlabonne/llm-course (technical)](https://github.com/mlabonne/llm-course)

**•** [UPenn CIS 7000 --- Large Language Models](https://llm-class.github.io/)

**•** [Anthropic --- Prompt engineering interactive tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial)

**•** [Google Prompting Essentials](https://www.coursera.org/specializations/prompting-essentials-google)

**•** [DeepLearning.AI --- ChatGPT Prompt Engineering](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)

**•** [Elements of AI (free intro)](https://www.elementsofai.com)

8\. Website Content Backlog (Publishing Order)

Each session above is a publishable page. A practical launch sequence:

| **\#** | **Article / tutorial (page)**                         | **Track**  |
|--------|-------------------------------------------------------|------------|
| 1      | What AI really is --- from rules to generation (F1.1) | Foundation |
| 2      | AI vs. the hype: testing claims yourself (F1.2)       | Foundation |
| 3      | How LLMs work: tokens, embeddings, prediction (F2.1)  | Foundation |
| 4      | Prompting that actually works (F3.1)                  | Foundation |
| 5      | From chatbots to agents (F4.1)                        | Foundation |
| 6      | Responsible AI in five minutes (F5.1)                 | Foundation |
| 7      | Your free AI research stack (R1.2 + Tools)            | Research   |
| 8      | Literature review with AI, done right (R2.1)          | Research   |
| 9      | LLMs as a coding/annotation method (R4.1)             | Research   |
| 10     | Silicon samples: promise and peril (R4.2)             | Research   |
| 11     | AI for the busy manager (M1.1)                        | Management |
| 12     | GenAI across business functions (M2.2)                | Management |
| 13     | Why AI projects fail: it\'s the data (M3.1)           | Management |
| 14     | Governing AI: a manager\'s checklist (M6.1)           | Management |

Tip: publish the six Foundation pages first, then alternate Research and Management pages weekly to serve both audiences from launch.
