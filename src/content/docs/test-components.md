---
title: Component Tests
---

# Component Tests

## HandsOn.astro

<HandsOn>
This is a hands-on exercise callout. It should have a mint left border and a raised background surface.
</HandsOn>

<HandsOn>
Another hands-on block with different content to test spacing and rendering.
</HandsOn>

## ToolList.astro

<ToolList
  tools={[
    { name: 'ChatGPT', url: 'https://chat.openai.com', description: 'Free AI chat interface for conversations and tasks' },
    { name: 'Claude', url: 'https://claude.ai', description: 'Anthropic\'s AI assistant for analysis and writing' },
    { name: 'Perplexity', url: 'https://perplexity.ai', description: 'AI-powered search engine with citations' },
  ]}
/>

## ReadExplore.astro

<ReadExplore
  links={[
    { label: 'AI for Management - Harvard Business Review', url: 'https://hbr.org/topic/artificial-intelligence' },
    { label: 'Machine Learning Research Papers - arXiv', url: 'https://arxiv.org/list/cs.LG/recent' },
    { label: 'AI Ethics Guidelines - EU AI Act', url: 'https://artificialintelligenceact.eu' },
  ]}
/>

## TrackCard.astro

<TrackCard
  title="Foundation Track"
  description="Essential AI concepts for everyone - 5 modules covering the fundamentals"
  audience="All learners"
  ctaHref="/foundation/f1-1-placeholder/"
/>

<TrackCard
  title="Research Track"
  description="Advanced AI for academics and analysts - 4 mini-courses plus capstone"
  audience="PhD students, researchers, analysts"
  ctaHref="/research/r1-1-placeholder/"
/>

## RoadmapTimeline.astro

<RoadmapTimeline
  stages={[
    { label: 'Discover', description: 'Identify research question and data sources' },
    { label: 'Design', description: 'Plan methodology and experimental setup' },
    { label: 'Apply Method', description: 'Execute analysis using AI tools' },
    { label: 'Validate', description: 'Verify results and ensure reproducibility' },
    { label: 'Publish', description: 'Document findings and share insights' },
  ]}
/>
