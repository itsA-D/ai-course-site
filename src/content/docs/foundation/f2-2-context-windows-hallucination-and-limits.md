---
title: "F2.2 — Context windows, hallucination, and limits"
track: foundation
module: F2
order: 22
---

**Objective.** Understand the practical limits that shape every AI workflow: context length, hallucination, knowledge cut-offs, and bias.

## Key concepts

- Context window: the model's short-term memory
- Hallucination — why models invent confident, wrong answers
- Training cut-offs and why models need search or documents
- Bias and representativeness of training data

## Hands-on

<HandsOn>
Deliberately trigger a hallucination (ask for citations on a niche topic), then verify each one — a memorable lesson in always checking.
</HandsOn>

## Free tools

<ToolList
  tools={[
    { name: 'NotebookLM', url: 'https://notebooklm.google.com', description: 'Grounded in your own sources' },
  ]}
/>

## Read / explore

<ReadExplore
  links={[
    { label: 'Anthropic — Prompt engineering overview', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
  ]}
/>
