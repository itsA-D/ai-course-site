---
title: Research Track Capstone
description: Apply AI-augmented methods to a real research question
track: research
module: Capstone
order: 99
---

import RoadmapTimeline from '../../components/RoadmapTimeline.astro';

# Research Track Capstone

Choose one research question and carry it through an AI-augmented pipeline from discovery to validation. This capstone integrates the skills from R2 (literature synthesis), R3 (research design), and R4 (AI-as-method techniques).

## Deliverable

A short working paper plus a public notebook or Hugging Face Space documenting your complete AI-augmented research pipeline.

## Stage pipeline

<RoadmapTimeline
  stages={[
    { label: 'Discover & synthesise literature', description: 'Use AI search and synthesis tools (Elicit, Consensus, Connected Papers) to map your field and build a defensible search log.' },
    { label: 'Sharpen research design', description: 'Apply AI as a sparring partner to stress-test your theory, hypotheses, and research design choices.' },
    { label: 'Apply AI-as-method technique', description: 'Choose one technique from R4: LLM text annotation, silicon sampling, or multi-agent simulation.' },
    { label: 'Validate against benchmark', description: 'Compare AI-generated results against human labels or real data; compute agreement metrics.' },
    { label: 'Write methods note & disclosure', description: 'Document prompts, model versions, dates, and parameters so others can reproduce your work exactly.' },
    { label: 'Optionally publish demo', description: 'Package your method as a shareable app on Hugging Face Spaces or GitHub Pages.' },
  ]}
/>

## Key requirements

- **Validity first**: Run multiple iterations; report variability, not a single run
- **Human validation**: Include a human validation subset with agreement metrics
- **Transparency**: Report prompts, model versions, dates, and parameters
- **Reproducibility**: Provide a public notebook or Space that others can run

## Suggested timeline

- Week 1-2: Literature discovery and synthesis
- Week 3-4: Research design refinement
- Week 5-7: Apply AI-as-method technique
- Week 8: Validation and methods documentation
- Week 9-10: Optional demo and final working paper
