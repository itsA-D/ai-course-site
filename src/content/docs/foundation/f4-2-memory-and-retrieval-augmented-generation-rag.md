---
title: "F4.2 — Memory and Retrieval-Augmented Generation (RAG)"
track: foundation
module: F4
order: 42
---

**Objective.** Explain how agents overcome context limits and hallucination using memory types and RAG.

## Key concepts

- Short-term vs. long-term memory; episodic, semantic, procedural
- Embeddings and vector databases
- RAG pipeline: ingest, retrieve, generate
- Reducing hallucination by grounding in documents

## Hands-on

<HandsOn>
Upload your own PDFs to NotebookLM and ask source-grounded questions; notice it citing your documents instead of guessing.
</HandsOn>

## Free tools

<ToolList
  tools={[
    { name: 'NotebookLM', url: 'https://notebooklm.google.com', description: 'Grounded in your documents' },
    { name: 'Hugging Face Spaces', url: 'https://huggingface.co/spaces', description: 'RAG demos' },
  ]}
/>

## Read / explore

<ReadExplore
  links={[
    { label: 'Lewis et al., Retrieval-Augmented Generation', url: 'https://arxiv.org/abs/2005.11401' },
  ]}
/>
