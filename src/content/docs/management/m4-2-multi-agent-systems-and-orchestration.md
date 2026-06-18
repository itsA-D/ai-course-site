---
title: "M4.2 — Multi-agent systems and orchestration"
track: management
module: M4
order: 42
---

**Objective.** Show how a 'committee' of specialised agents can run a workflow, and the failure modes to manage.

## Key concepts

- Generic (proxy) vs. specialist agents
- Centralized, decentralized, hierarchical patterns
- Agent-to-Agent communication and failure modes
- Roles, recovery, and accountability

## Hands-on

<HandsOn>
Design a multi-agent committee for a real workflow (e.g., loan review): name each agent, its tools, and its checks.
</HandsOn>

## Free tools

<ToolList
  tools={[
    { name: 'CrewAI', url: 'https://www.crewai.com', description: 'Multi-agent orchestration' },
    { name: 'LangGraph', url: 'https://github.com/langchain-ai/langgraph', description: 'Open framework for agent workflows' },
  ]}
/>

## Read / explore

<ReadExplore
  links={[
    { label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' },
  ]}
/>
