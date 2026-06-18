---
title: "R4.1 — LLMs for text annotation and classification"
track: research
module: R4
order: 41
---

**Objective.** Use LLMs to code and classify text at scale, and validate against human labels properly.

## Key concepts

- Zero-shot and few-shot classification
- Inter-rater reliability between model and humans (e.g., Cohen's/Krippendorff's)
- Prompt sensitivity and the need for multiple runs
- When fine-tuned classical models still win

## Hands-on

<HandsOn>
Replicate the howtousellms workflow: classify a small labelled text set (e.g., populism), compute agreement with the gold labels, and report it.
</HandsOn>

## Free tools

<ToolList
  tools={[
    { name: 'howtousellms notebook', url: 'https://github.com/cssmodels/howtousellms', description: 'Practical notebook for LLM annotation' },
    { name: 'Google Colab', url: 'https://colab.research.google.com', description: 'Free cloud notebooks' },
    { name: 'Hugging Face', url: 'https://huggingface.co', description: 'Model & demo hub' },
  ]}
/>

## Read / explore

<ReadExplore
  links={[
    { label: 'Ziems et al., Can LLMs Transform Computational Social Science?', url: 'https://arxiv.org/abs/2305.03514' },
    { label: 'Risks of LLM text annotation (arXiv)', url: 'https://arxiv.org/pdf/2503.22040' },
  ]}
/>
