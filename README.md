<div align="center">

🧠

# AI for Management & Research

A free, public curriculum website teaching AI from a management and research perspective — tutorials, lessons, hands-on labs with free tools.

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-428F59?logo=githubpages&logoColor=white)](https://pages.github.com)
[![License MIT](https://img.shields.io/badge/License-MIT-gray.svg)](LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/YOUR-USERNAME/ai-course-site)](https://github.com/YOUR-USERNAME/ai-course-site/commits/main)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/YOUR-USERNAME/ai-course-site/pulls)

[View Live Site →](https://YOUR-USERNAME.github.io/ai-course-site) · [Start with the Foundation →](/foundation/)

</div>

---

## About

This site teaches AI from a management and research perspective through a shared conceptual foundation that branches into track-specific content. Every concept is paired with a free tool and a hands-on activity doable in a browser — no theory without practice. Built for senior managers, consultants, academics, and analysts who need credible, practice-oriented AI literacy without the hype or the math-heavy technical overhead.

---

## Tracks at a Glance

| Track | Who it's for | Modules |
|---|---|---|
| **Foundation** ⭐ Start here | Everyone | F1: What AI Really Is, F2: Inside GenAI, F3: Working with AI, F4: From Chatbots to Agents, F5: Responsible AI |
| **Research Track** | Researchers, PhD students, analysts | R1: Opening to AI, R2: GenAI in Practice, R3: Theory & Strategy, R4: GenAI as a Research Method |
| **Management Track** | Managers, consultants, leaders | M1: AI-Literate Manager, M2: GenAI in Business, M3: Data & Decisions, M4: Agentic AI for Enterprise, M5: Strategy & Advantage, M6: Governance & Change |

---

## Site Structure

### URL Structure

```text
/
/foundation/f1-1-from-rules-to-learning-to-generation/
/foundation/f1-2-live-ai-vs-marketing-hype/
/foundation/f1-3-mapping-the-ai-landscape/
/foundation/f2-1-tokens-embeddings-and-prediction/
/foundation/f2-2-context-windows-hallucination-and-limits/
/foundation/f2-3-the-frontier-reasoning-and-test-time-compute/
/foundation/f3-1-prompting-fundamentals/
/foundation/f3-2-advanced-prompting-patterns/
/foundation/f3-3-co-intelligence-being-the-human-in-the-loop/
/foundation/f4-1-what-makes-an-agent-vs-a-chatbot/
/foundation/f4-2-memory-and-retrieval-augmented-generation-rag/
/foundation/f4-3-tools-multi-agent-systems-and-protocols/
/foundation/f5-1-ethics-bias-and-fairness/
/foundation/f5-2-privacy-governance-and-regulation/
/research/r1-1-why-ai-matters-for-research-now/
/research/r1-2-the-ai-augmented-research-workflow/
/research/r2-1-literature-discovery-and-synthesis/
/research/r2-2-reading-summarising-and-note-making-at-scale/
/research/r2-3-writing-editing-and-academic-communication/
/research/r3-1-theory-development-and-hypothesis-generation/
/research/r3-2-research-design-and-methods-planning/
/research/r3-3-ai-strategy-for-a-research-programme/
/research/r4-1-llms-for-text-annotation-and-classification/
/research/r4-2-silicon-samples-and-synthetic-respondents/
/research/r4-3-agent-based-and-simulation-studies/
/research/r4-4-building-and-sharing-a-research-app-or-demo/
/research/r4-5-validity-reliability-and-reporting-standards/
/research/capstone/
/management/m1-1-intelligent-systems-what-ai-actually-is-for-business/
/management/m1-2-the-ai-revolution-so-far-promise-vs-delivery/
/management/m1-3-what-comes-next-models-workflows-and-agents/
/management/m2-1-prompting-and-productivity-for-managers/
/management/m2-2-genai-across-business-functions/
/management/m2-3-low-code-prototyping-for-managers/
/management/m3-1-data-before-models-why-transformations-win-or-fail/
/management/m3-2-decision-systems-and-managing-risk/
/management/m3-3-from-text-and-behaviour-to-intelligence/
/management/m4-1-reasoning-memory-and-agents-in-the-enterprise/
/management/m4-2-multi-agent-systems-and-orchestration/
/management/m5-1-ai-strategy-and-business-models/
/management/m5-2-innovation-disruption-and-the-future-of-work/
/management/m6-1-ai-without-guardrails-governance-fairness-liability/
/management/m6-2-implementing-ai-and-leading-change/
/management/capstone/
/toolkit/
/library/
```

### Page Template

Every lesson page follows the same six-block template for consistency:

```markdown
---
title: "F2.1 — Tokens, embeddings, and prediction"
track: foundation
module: F2
order: 21
---

**Objective.** One to two sentences explaining what the reader will learn.

## Key concepts
- Concept one
- Concept two
- Concept three

## Hands-on
<HandsOn>
One concrete, doable-in-browser activity.
</HandsOn>

## Free tools
<ToolList
  tools={[
    { name: 'Tool name', url: 'https://example.com', description: 'One-line description' },
  ]}
/>

## Read / explore
<ReadExplore
  links={[
    { label: 'Source name', url: 'https://example.com' },
  ]}
/>
```

---

## Tech Stack

| Layer | Choice | Why | Docs link |
|---|---|---|---|
| Framework | Astro | Ships zero JS by default, fast builds, first-class Markdown/MDX, content collections fit "sessions" exactly | [astro.build](https://astro.build) |
| Theme | Starlight | Pre-built docs shell: sidebar, search, dark/light toggle, responsive nav — matches the doc-site reference pattern out of the box | [starlight.astro.build](https://starlight.astro.build) |
| Hosting | GitHub Pages | Free, integrates natively with GitHub Actions | [pages.github.com](https://pages.github.com) |
| CI/CD | GitHub Actions | Official, maintained, no third-party build service needed | [github.com/features/actions](https://github.com/features/actions) |
| Search | Pagefind | Static index generated at build time, no server, ships with Starlight | [pagefind.app](https://pagefind.app) |
| Analytics | GoatCounter | Free tier, no cookie banner, privacy-friendly | [goatcounter.com](https://goatcounter.com) |
| Comments | giscus (optional) | Uses GitHub Discussions as the data store — no new infra | [giscus.app](https://giscus.app) |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- Git
- A GitHub account (for deployment)

### Local development

```bash
git clone https://github.com/YOUR-USERNAME/ai-course-site.git
cd ai-course-site
npm install
npm run dev        # → http://localhost:4321
```

### Production build

```bash
npm run build
npm run preview    # verify before push
```

---

## Deployment

### One-time GitHub setup

1. Go to your GitHub repo → **Settings → Pages**
2. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
3. The `.github/workflows/deploy.yml` workflow will handle the rest

### How deploys work

Every push to `main` triggers the GitHub Action, which runs `astro build` and deploys to Pages automatically. Typical time: under 2 minutes for a site this size.

### Custom domain (optional)

Add a `CNAME` file to `public/` and update `base` in `astro.config.mjs`. See [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Adding Content

> [!TIP]
> You don't need to run any commands locally. The steps below are the only thing needed to publish a new lesson.

1. Go to `src/content/docs/<track>/` in the GitHub web UI (or locally).
2. Copy any existing `.md` file as a template.
3. Update the frontmatter (`title`, `track`, `module`, `order`).
4. Fill in the five content blocks (Objective, Key concepts, Hands-on, Free tools, Read/explore).
5. Commit to `main` — the site rebuilds and publishes automatically.

**Minimal frontmatter template:**

```markdown
---
title: "F2.1 — Tokens, embeddings, and prediction"
track: foundation
module: F2
order: 21
---
```

> [!WARNING]
> Never paste API keys or sensitive data into lesson files. Interactive demos belong on Hugging Face Spaces or Colab, linked from the lesson — not embedded with credentials.

---

## Repository Layout

<details>
<summary>📁 Full repository layout</summary>

```text
ai-course-site/
├─ src/
│  ├─ content/
│  │  ├─ config.ts                 ← content collection schema
│  │  └─ docs/
│  │     ├─ index.mdx              ← landing page / track picker
│  │     ├─ foundation/
│  │     │  ├─ f1-1-...md … f5-2-...md
│  │     ├─ research/
│  │     │  ├─ r1-1-...md … r4-5-...md
│  │     │  └─ capstone.md
│  │     ├─ management/
│  │     │  ├─ m1-1-...md … m6-2-...md
│  │     │  └─ capstone.md
│  │     ├─ toolkit.md
│  │     └─ library.md
│  ├─ components/
│  │  ├─ HandsOn.astro
│  │  ├─ ToolList.astro
│  │  ├─ ReadExplore.astro
│  │  ├─ TrackCard.astro
│  │  └─ RoadmapTimeline.astro
│  └─ styles/custom.css            ← color tokens, typography overrides
├─ public/                          ← static assets (favicon, og-image)
├─ astro.config.mjs                 ← site/base URL, Starlight sidebar config
├─ package.json
└─ .github/workflows/deploy.yml
```

</details>

---

## Design System

### Visual direction

- **Dark documentation-site shell** — collapsible nested sidebar with search at top, clean card grids for support/option content, accordion-style FAQs, multi-column footer. This is the skeleton of the whole site (navigation, lesson template, toolkit/library pages).
- **Dark roadmap/timeline visual** — vertical connector line with glowing nodes, bold uppercase tracking-wide labels, terminal/technical accent font, mint/teal glow on a near-black background. Used sparingly, only on the homepage learning-path overview and the two capstone pages.

### Color tokens

| Token | Value | Use |
|---|---|---|
| `--bg-base` | `#0B0E14` | page background |
| `--bg-surface` | `#141925` | sidebar, cards, code blocks |
| `--bg-surface-raised` | `#1B2230` | hovered cards, modals |
| `--border` | `#2A3142` | hairlines, card borders |
| `--text-primary` | `#E8EAF0` | body text |
| `--text-muted` | `#8B93A7` | secondary text, captions |
| `--accent-mint` | `#2DD4BF` | primary accent — links, active nav, timeline nodes, primary buttons |
| `--accent-indigo` | `#6C8DF7` | secondary accent — Research track tag, secondary buttons |
| `--accent-amber` | `#F2B84B` | Management track tag, warnings |

Light mode inverts the bg tokens; accent hues stay consistent.

---

## Content Inventory

<details>
<summary>📚 Full page inventory (53 pages)</summary>

### Foundation (14 sessions + index)

| Code | Title |
|---|---|
| index | Foundation landing page |
| F1.1 | From rules to learning to generation |
| F1.2 | Live AI vs marketing hype |
| F1.3 | Mapping the AI landscape |
| F2.1 | Tokens, embeddings, and prediction |
| F2.2 | Context windows, hallucination, and limits |
| F2.3 | The frontier: reasoning and test-time compute |
| F3.1 | Prompting fundamentals |
| F3.2 | Advanced prompting patterns |
| F3.3 | Co-intelligence: being the human in the loop |
| F4.1 | What makes an agent vs a chatbot |
| F4.2 | Memory and retrieval-augmented generation (RAG) |
| F4.3 | Tools, multi-agent systems, and protocols |
| F5.1 | Ethics, bias, and fairness |
| F5.2 | Privacy, governance, and regulation |

### Research Track (15 sessions + capstone)

| Code | Title |
|---|---|
| R1.1 | Why AI matters for research now |
| R1.2 | The AI-augmented research workflow |
| R2.1 | Literature discovery and synthesis |
| R2.2 | Reading, summarising, and note-making at scale |
| R2.3 | Writing, editing, and academic communication |
| R3.1 | Theory development and hypothesis generation |
| R3.2 | Research design and methods planning |
| R3.3 | AI strategy for a research programme |
| R4.1 | LLMs for text annotation and classification |
| R4.2 | Silicon samples and synthetic respondents |
| R4.3 | Agent-based and simulation studies |
| R4.4 | Building and sharing a research app or demo |
| R4.5 | Validity, reliability, and reporting standards |
| Capstone | Research Track capstone |

### Management Track (15 sessions + capstone)

| Code | Title |
|---|---|
| M1.1 | Intelligent systems: what AI actually is for business |
| M1.2 | The AI revolution so far — promise vs delivery |
| M1.3 | What comes next: models, workflows, and agents |
| M2.1 | Prompting and productivity for managers |
| M2.2 | GenAI across business functions |
| M2.3 | Low-code prototyping for managers |
| M3.1 | Data before models: why transformations win or fail |
| M3.2 | Decision systems and managing risk |
| M3.3 | From text and behaviour to intelligence |
| M4.1 | Reasoning, memory, and agents in the enterprise |
| M4.2 | Multi-agent systems and orchestration |
| M5.1 | AI strategy and business models |
| M5.2 | Innovation, disruption, and the future of work |
| M6.1 | AI without guardrails: governance, fairness, liability |
| M6.2 | Implementing AI and leading change |
| Capstone | Management Track capstone |

</details>

---

## Roadmap

**v1 (launch)**
- [x] All 6 Foundation sessions live
- [x] Toolkit and Library pages live
- [x] Search, analytics enabled
- [x] Mobile-responsive QA passed

**v1.1**
- [x] All Research Track sessions live
- [x] All Management Track sessions live
- [x] Both capstone pages with timeline visual

**Future / open questions**
- [ ] Comments (giscus) — pending moderation plan
- [ ] CMS UI for non-git authoring
- [ ] Progress tracking / accounts (explicitly out of scope for v1)

---

## Contributing

PRs for content corrections, broken links, and accessibility fixes are welcome. Open an issue before making structural changes. Content must follow the lesson template in `CLAUDE.md` §4 exactly. See `CLAUDE.md` for the full contribution guide.

---

## License

This project is licensed under the MIT License. Course content © Prof. Abhishek Kumar Jha, SPJIMR, June 2026.

---

## Acknowledgements

- Astro + Starlight teams
- All tool and paper authors linked in the curriculum
- Ethan Mollick (Co-Intelligence framing used in F3.3)
- UCLA Anderson SSAI project (App Development Kit used in R4.4/M2.3)

---

*Made with Astro & Starlight*
