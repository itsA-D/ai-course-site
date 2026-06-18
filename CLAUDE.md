# CLAUDE.md — AI for Management & Research (Course Site)

This file orients Claude (or any AI assistant / new contributor) working in this repository. Read this before touching content or code.

---

## 1. Project Overview

A free, public tutorials/articles website teaching AI from a management and research perspective, prepared for Prof. Abhishek Kumar Jha (SPJIMR). It has:

- A **Shared Foundation** (5 modules, everyone reads these first)
- A **Research Track** (4 mini-courses + capstone) — for academics, PhD students, analysts
- A **Management Track** (6 mini-courses + capstone) — for managers, consultants, leaders
- A **Free Tools Directory** and a **Reading & Resource Library**

It is a **content site, not an app**. No login, no database, no backend. Every page is static Markdown rendered through Astro + Starlight and deployed to GitHub Pages for free.

Source of truth for content: `AI_Curriculum_Outline.docx` (curriculum map + all lesson specs + publishing backlog).

---

## 2. Tech Stack

- **Astro** + **Starlight** (docs theme) — static site generator, content-collections, built-in sidebar/search/dark-mode
- **Markdown / MDX** for all lesson content
- **GitHub Pages** for hosting (free) + **GitHub Actions** for CI/CD
- **Pagefind** for search (ships with Starlight)
- **GoatCounter** for privacy-friendly analytics (no cookie banner)
- **giscus** (optional) for comments via GitHub Discussions

Do not introduce a backend, database, or server-rendered framework unless explicitly asked. The whole point of this stack is zero hosting cost and zero maintenance burden for a non-technical content owner (the professor).

---

## 3. Repository Structure

```
ai-course-site/
├─ src/
│  ├─ content/
│  │  └─ docs/
│  │     ├─ index.mdx                 (landing / track picker)
│  │     ├─ foundation/   f1-1.md … f5-2.md
│  │     ├─ research/     r1-1.md … r4-5.md, capstone.md
│  │     ├─ management/   m1-1.md … m6-2.md, capstone.md
│  │     ├─ toolkit.md
│  │     └─ library.md
│  ├─ components/
│  │  ├─ HandsOn.astro
│  │  ├─ ToolList.astro
│  │  ├─ ReadExplore.astro
│  │  ├─ TrackCard.astro
│  │  └─ RoadmapTimeline.astro
│  └─ styles/custom.css
├─ astro.config.mjs        (sidebar groups = the three tracks)
├─ package.json
└─ .github/workflows/deploy.yml
```

---

## 4. Content Conventions

- **Slugs match the outline codes**: `/foundation/f2-1-tokens-embeddings-prediction/`, `/research/r4-2-silicon-samples/`, `/management/m3-1-data-before-models/`.
- **Every lesson page uses the same frontmatter + body shape**:

```markdown
---
title: "F2.1 — Tokens, embeddings, and prediction"
track: foundation        # foundation | research | management
module: F2
order: 21
---

**Objective.** …

## Key concepts
- …

## Hands-on
…

## Free tools
- [Tool name](https://example.com)

## Read / explore
- [Source](https://example.com)
```

- Never invent content — copy/adapt directly from the curriculum outline. If a session is missing a field (e.g. no "Free tools" listed), omit that block rather than inventing a tool.
- One `.md` file per session. Do not merge multiple sessions into one page even if short.

---

## 5. UI/UX Design System

### 5.1 Visual direction

The reference inspiration combines two patterns on purpose:

1. **A dark documentation-site shell** — collapsible nested sidebar with search at top, clean card grids for support/option content, accordion-style FAQs, multi-column footer. This is the *skeleton* of the whole site (navigation, lesson template, toolkit/library pages).
2. **A dark roadmap/timeline visual** — vertical connector line with glowing nodes, bold uppercase tracking-wide labels, terminal/technical accent font, mint/teal glow on a near-black background. This is used *sparingly*, only where a journey/progression is the actual content — the homepage learning-path overview and the two capstone pages.

Do not let the timeline motif bleed into ordinary lesson pages — those stay calm, readable, doc-like.

### 5.2 Color palette (dark mode default)

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

Light mode: invert to a white/very-light-grey background, keep the same accent hues at slightly deeper saturation for contrast. Starlight's built-in theme toggle handles the switch — don't hand-roll one.

### 5.3 Typography

- **Body / UI**: Inter (or system sans fallback) — generous line-height (1.6+), max content width ~720px for lesson prose.
- **Labels / eyebrows / module codes** (e.g. "F2.1", "ROADMAP"): small caps or uppercase, letter-spacing wide, used the way the timeline reference uses "ROADMAP" / "CYBOX TIMELINE" — but only for section eyebrows and track tags, never for body copy.
- **Headings**: same sans family, bold, no decorative font — keep this readable for a management/research audience, not a crypto-marketing audience.

### 5.4 Layout patterns

- **Sidebar nav** (doc-shell pattern): three collapsible top-level groups — Foundation / Research / Management — each expands to its modules and sessions. Search input pinned above the tree. Toolkit and Library as flat links below the groups, mirroring the "Help Center / Changelog / Support" flat links pattern.
- **Homepage**: hero + three large `TrackCard` components (Foundation, Research, Management) — short description, "who it's for," and a CTA into the first session of that track. No timeline here; keep it simple.
- **Lesson page template** (every session): Title → Objective (lead paragraph, slightly larger/lighter text) → Key concepts (bullet list) → **Hands-on** rendered as a highlighted callout card (mint left-border, subtle surface-raised background) → **Free tools** rendered as a small card grid (icon-less, just name + link + one-line description) → **Read / explore** as a plain link list.
- **Toolkit page**: full card grid grouped by category (Chat & general / Research-specific / Light coding & deploy), same card component as the per-lesson "Free tools" block but denser.
- **Capstone pages** (Research & Management): the only pages that use `RoadmapTimeline.astro` — a vertical connector with glowing mint nodes, one node per stage of the capstone pipeline (e.g. Discover → Design → Apply method → Validate → Publish).
- **Library page**: simple categorized link lists (Foundational papers / Management reading / Courses & repos), no cards needed — this is reference material, scannability matters more than decoration.
- **Footer**: multi-column — Foundation / Research / Management quick links, then Toolkit, Library, and socials/GitHub repo link — mirroring the doc-shell footer pattern.

### 5.5 Components to build

- `HandsOn.astro` — callout card, accepts children markdown
- `ToolList.astro` — accepts an array of `{name, url, description}`
- `ReadExplore.astro` — simple styled link list
- `TrackCard.astro` — homepage track-picker card
- `RoadmapTimeline.astro` — vertical timeline, used only on capstone pages

### 5.6 Tone

Calm, credible, practitioner-oriented. No crypto/hype visual language outside the deliberately-scoped timeline component. This is for senior managers and academics — design should read as "trustworthy university resource," not "startup landing page."

---

## 6. Commands

```bash
npm run dev      # local preview, http://localhost:4321
npm run build    # production build
npm run preview  # preview the production build locally
```

---

## 7. Editing Workflow (for the professor / non-dev content owner)

1. Copy an existing `.md` file in the right track folder as a template.
2. Fill in the frontmatter (`title`, `track`, `module`, `order`) and the five content blocks.
3. Commit and push to `main` — GitHub Actions builds and deploys automatically. No build step the professor needs to run manually.

---

## 8. Things to avoid

- No backend, no API keys committed to the repo (interactive demos live on Hugging Face Spaces / Colab, linked or iframed — never embedded with secrets).
- No deviation from the lesson template — consistency across 40+ pages matters more than per-page creativity.
- No timeline/roadmap visual outside the homepage and capstone pages.
- No light-mode-only or dark-mode-only design — both must work via Starlight's toggle.
