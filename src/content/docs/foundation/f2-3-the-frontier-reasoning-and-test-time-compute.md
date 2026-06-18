---
title: "F2.3 — The frontier: reasoning and test-time compute"
track: foundation
module: F2
order: 23
---

**Objective.** Introduce reasoning models and the shift from training-time to test-time (inference-time) compute — the current frontier.

## Key concepts

- System 1 vs. System 2 thinking applied to models (Kahneman)
- Chain-of-thought and why "thinking longer" helps
- Train-time scaling laws vs. test-time compute
- Latency and cost vs. reasoning depth — a manager's trade-off

## Hands-on

<HandsOn>
Run a multi-step logic puzzle on a standard model and a reasoning model; compare quality, time, and cost.
</HandsOn>

## Free tools

<ToolList
  tools={[
    { name: 'ChatGPT', url: 'https://chatgpt.com', description: 'Reasoning modes available' },
    { name: 'Claude', url: 'https://claude.ai', description: 'Advanced reasoning capabilities' },
  ]}
/>

## Read / explore

<ReadExplore
  links={[
    { label: 'Wei et al., Chain-of-Thought Prompting', url: 'https://arxiv.org/abs/2201.11903' },
  ]}
/>
