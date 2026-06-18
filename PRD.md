# PRD.md — AI for Management & Research

## 1. Problem / Opportunity

There is no single free, well-organized resource that teaches AI to *both* managers and researchers from a shared conceptual base, then branches into the specific judgment each audience needs (adoption/governance for managers; methodology/validity for researchers). Existing resources are either too technical (ML courses), too shallow (LinkedIn content), or paywalled (executive education). This project fills that gap as a public, practice-oriented tutorial site.

## 2. Goals

- Publish a complete, navigable curriculum covering a Shared Foundation, a Research Track, and a Management Track, exactly as specified in `AI_Curriculum_Outline.docx`.
- Every lesson must be practice-oriented: a concept, a free tool, a hands-on activity, and credible further reading — no concept taught without something the reader can do.
- Site must be free to run indefinitely (hosting, search, analytics) and trivially maintainable by one non-developer content owner.
- Site should feel credible to a senior management/research audience — calm, documentation-grade design, not a marketing page.

## 3. Non-Goals

- Not building a learning management system (no accounts, progress tracking, quizzes, or certificates) in v1.
- Not hosting any interactive AI demo or backend inside this site — those are linked out (Hugging Face Spaces / Colab).
- Not building a CMS UI for the professor in v1 — authoring is via Markdown + git.
- Not optimizing for SEO/growth marketing as a primary goal — primary goal is a complete, usable reference site.

## 4. Target Users / Personas

**"The Manager"** — a functional leader, consultant, or executive who needs enough AI literacy to evaluate vendor claims, sponsor pilots, and govern risk. Time-poor, wants frameworks and cases over math, will skim then act.

**"The Researcher"** — an academic, PhD student, or analyst who wants to use AI in the research process (literature review, coding, writing) and potentially as a research method itself (silicon sampling, LLM annotation, simulation). Cares deeply about validity, reproducibility, and disclosure norms.

Both personas start in the **Shared Foundation** before branching.

## 5. Success Metrics

Since this is a free public resource without an LMS, success is measured qualitatively and through lightweight analytics rather than revenue/conversion metrics:

- All ~14 backlog pages (Section 8 of the outline) published and live.
- Site loads fast and is fully navigable on mobile (verified via Lighthouse, manual device check).
- GoatCounter shows sustained organic traffic across both Research and Management sections (not just Foundation).
- Zero broken outbound links at any given audit (tracked via periodic link-check).
- Positive informal feedback from SPJIMR students/faculty using it as coursework support.

## 6. Information Architecture

| Section | Contents | Primary audience |
|---|---|---|
| Shared Foundation (F1–F5) | What AI is, how GenAI/LLMs work, prompting, agentic AI, responsible AI | Everyone |
| Research Track (R1–R4 + capstone) | Opening to AI, GenAI in practice, theory & research design, GenAI as a research method | Researchers, PhD students, analysts |
| Management Track (M1–M6 + capstone) | AI-literate manager, GenAI in business, data & decisions, agentic AI for enterprise, strategy, governance & change | Managers, consultants, leaders |
| Toolkit | Free tools directory, grouped by category | Everyone |
| Library | Papers, books, courses, repos | Everyone |

Every lesson session = one page, one fixed template (see §8).

## 7. Functional Requirements

- **Navigation**: persistent sidebar grouped by the three tracks plus flat Toolkit/Library links; collapsible groups; works identically on mobile (collapses to a drawer).
- **Search**: full-text search across all lesson content, instant client-side results (Pagefind).
- **Homepage**: track picker — short framing of "shared foundation first, then choose your track" plus three track cards linking into each track's first session.
- **Lesson page**: renders Objective, Key concepts, Hands-on (visually distinct callout), Free tools (card list), Read/explore (link list) — every page, no exceptions.
- **Toolkit page**: full categorized directory of every free tool referenced anywhere in the curriculum, deduplicated.
- **Library page**: categorized reading list (research papers, management reading, courses/repos/toolkits).
- **Capstone pages** (one per track): describe the end-to-end capstone deliverable; visually represented as a stage-by-stage roadmap.
- **Theme toggle**: dark mode default, light mode available, persisted across visits.
- **All outbound links**: open in new tab, no exceptions.

## 8. Content Requirements

Every lesson page must contain, in this order, and may omit a block only if the source outline omits it:

1. **Title** (matches outline code + name, e.g. "F2.1 — Tokens, embeddings, and prediction")
2. **Objective** — one to two sentences
3. **Key concepts** — bullet list, 3–5 items
4. **Hands-on** — one concrete, doable-in-browser activity
5. **Free tools** — name + link (+ one-line description if available)
6. **Read / explore** — credible external links (papers, docs, articles)

Capstone pages additionally describe the deliverable and the stage pipeline (used to drive the roadmap-timeline visual).

Content must be sourced directly from `AI_Curriculum_Outline.docx` — no fabricated tools, papers, or claims.

## 9. UX Requirements

Full design system lives in `CLAUDE.md` §5 — referenced here at requirement level only:

- Dark-mode-first, documentation-site shell (sidebar + search + consistent lesson template), in the visual language of a credible technical/academic resource — not a marketing or crypto-style page.
- A roadmap/timeline visual motif is permitted **only** on the homepage learning-path overview and the two capstone pages — everywhere else stays calm and text-forward.
- Mobile-responsive: sidebar collapses to a drawer, card grids reflow to single column, timeline becomes a single vertical stack.
- Accessible: WCAG AA contrast minimum in both themes, semantic heading order, keyboard-navigable sidebar and search.

## 10. Non-Functional Requirements

- **Cost**: $0 recurring (GitHub Pages, Pagefind, GoatCounter free tier, giscus all free).
- **No backend, no secrets in repo** — any interactive demo lives externally (Hugging Face Spaces / Colab).
- **Performance**: static-first build, target 90+ Lighthouse performance/accessibility/best-practices/SEO scores.
- **Maintainability**: a non-developer must be able to add a new lesson by copying a template `.md` file, filling it in, and pushing to `main` — no build step required locally.
- **Resilience to link rot**: scheduled link-checking recommended (see `ARCHITECTURE.md` §14).

## 11. Launch Plan / Milestones

Publishing order follows the curriculum's own backlog (Section 8 of the outline) — Foundation first, then alternating Research/Management weekly:

1. F1.1 What AI really is
2. F1.2 AI vs. the hype
3. F2.1 How LLMs work
4. F3.1 Prompting that actually works
5. F4.1 From chatbots to agents
6. F5.1 Responsible AI in five minutes
7. R1.2 Your free AI research stack
8. R2.1 Literature review with AI, done right
9. R4.1 LLMs as a coding/annotation method
10. R4.2 Silicon samples: promise and peril
11. M1.1 AI for the busy manager
12. M2.2 GenAI across business functions
13. M3.1 Why AI projects fail: it's the data
14. M6.1 Governing AI: a manager's checklist

**v1 launch bar**: all 6 Foundation pages + Toolkit + Library live and cross-linked, even before every Research/Management page is published — Foundation is the common entry point and must be complete first.

**v1.1**: remaining Research and Management sessions + both capstone pages, in publishing-backlog order.

## 12. Risks & Open Questions

- **Link rot**: many "Free tools" and "Read/explore" links are third-party SaaS products that change free-tier terms or URLs — needs an owner and a cadence for re-verification.
- **Scope creep into an LMS**: there will be pressure to add progress tracking / accounts over time — explicitly out of scope for v1, revisit only if there's clear demand.
- **Authoring bottleneck**: currently a single content owner (the professor) authoring via Markdown/git — acceptable for v1 given the small, finite page count, but worth revisiting (see `ARCHITECTURE.md` §13 CMS migration path) if more contributors join.
- **Open question**: should comments (giscus) be enabled at launch, or held back until there's a moderation plan?

## 13. Appendix — Full Page Inventory

- **Foundation**: F1 (What AI is), F2 (Inside GenAI), F3 (Prompting), F4 (Agents), F5 (Responsible AI) — 13 sessions total.
- **Research Track**: R1 (Opening to AI), R2 (GenAI in practice), R3 (Theory & strategy), R4 (GenAI as a research method) + capstone — 16 sessions + capstone.
- **Management Track**: M1 (AI-literate manager), M2 (GenAI in practice for business), M3 (Data, decisions, analytics), M4 (Agentic AI for enterprise), M5 (Strategy & advantage), M6 (Governance & change) + capstone — 14 sessions + capstone.
- **Toolkit**: 3 categorized tables (chat/general, research-specific, light coding/build/deploy).
- **Library**: 3 categorized reading lists (foundational papers, management reading, courses/repos/toolkits).
