---
title: "F2.1 — Tokens, embeddings, and prediction"
track: foundation
module: F2
order: 21
---

**Objective.** Explain what a large language model actually does — predict the next token — and why that simple idea produces such capable behaviour.

## Key concepts

- Tokens and tokenisation
- Embeddings: turning words into vectors of meaning
- Next-token prediction and probability
- Why the same prompt can give different answers (temperature, sampling)

## Hands-on

<HandsOn>
Use the OpenAI tokenizer to see how your own sentence is split into tokens; then lower/raise "creativity" in a playground and observe the change.
</HandsOn>

## Free tools

<ToolList
  tools={[
    { name: 'OpenAI Tokenizer', url: 'https://platform.openai.com/tokenizer', description: 'See how text is split into tokens' },
    { name: 'Google AI Studio', url: 'https://aistudio.google.com', description: 'Free playground with temperature controls' },
  ]}
/>

## Read / explore

<ReadExplore
  links={[
    { label: 'Vaswani et al., Attention Is All You Need', url: 'https://arxiv.org/abs/1706.03762' },
  ]}
/>
