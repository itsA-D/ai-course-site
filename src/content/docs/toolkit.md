---
title: Toolkit
description: Free tools directory for AI research and management
---

import ToolList from '../../components/ToolList.astro';

# Toolkit

Every tool below has a usable free tier (as of mid-2026; verify before relying on it). Use these in the Hands-on boxes throughout the curriculum.

## No-code / chat & general AI

<ToolList
  tools={[
    { name: 'ChatGPT', url: 'https://chatgpt.com', description: 'General assistant, analysis, drafting; free tier' },
    { name: 'Claude', url: 'https://claude.ai', description: 'Reasoning, long documents, careful writing' },
    { name: 'Gemini', url: 'https://gemini.google.com', description: 'Google-integrated assistant, multimodal' },
    { name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com', description: 'Assistant integrated with Microsoft 365' },
    { name: 'Perplexity', url: 'https://www.perplexity.ai', description: 'Search with citations; good for sourcing' },
    { name: 'NotebookLM', url: 'https://notebooklm.google.com', description: 'Source-grounded notebook over your own files' },
    { name: 'Poe', url: 'https://poe.com', description: 'Many models in one interface' },
    { name: 'Google AI Studio', url: 'https://aistudio.google.com', description: 'Free playground + API key + function calling' },
  ]}
/>

## Research-specific tools

<ToolList
  tools={[
    { name: 'Elicit', url: 'https://elicit.com', description: 'AI literature review, screening, extraction' },
    { name: 'Consensus', url: 'https://consensus.app', description: 'Evidence answers from papers' },
    { name: 'Connected Papers', url: 'https://www.connectedpapers.com', description: 'Citation-graph discovery' },
    { name: 'Research Rabbit', url: 'https://www.researchrabbit.ai', description: 'Citation explorer & alerts' },
    { name: 'Semantic Scholar', url: 'https://www.semanticscholar.org', description: 'Free scholarly search & API' },
    { name: 'OpenAlex', url: 'https://openalex.org', description: 'Open scholarly metadata' },
    { name: 'Scite', url: 'https://scite.ai', description: 'Citation context (supporting/contrasting)' },
    { name: 'SciSpace', url: 'https://scispace.com', description: 'Read & explain papers' },
    { name: 'Taguette', url: 'https://www.taguette.org', description: 'Free, open-source qualitative coding' },
    { name: 'QualCoder', url: 'https://github.com/ccbogel/QualCoder', description: 'Open-source CAQDAS for qualitative data' },
  ]}
/>

## Light coding & build/deploy (free)

<ToolList
  tools={[
    { name: 'Google Colab', url: 'https://colab.research.google.com', description: 'Free notebooks in the browser (Python)' },
    { name: 'Hugging Face', url: 'https://huggingface.co', description: 'Models, datasets, and free Spaces hosting' },
    { name: 'Gradio', url: 'https://www.gradio.app', description: 'Build simple AI web demos in Python' },
    { name: 'Ollama', url: 'https://ollama.com', description: 'Run open models locally, free' },
    { name: 'LM Studio', url: 'https://lmstudio.ai', description: 'Desktop app to run local models' },
    { name: 'LangGraph', url: 'https://github.com/langchain-ai/langgraph', description: 'Open framework for agent workflows' },
    { name: 'GitHub Pages', url: 'https://pages.github.com', description: 'Free static website hosting' },
  ]}
/>
