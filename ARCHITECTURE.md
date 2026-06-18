# ARCHITECTURE.md — AI for Management & Research

## 1. Overview & Goals

A static, content-only website with three parallel learning tracks sharing a common foundation. Architectural priorities, in order:

1. **Zero hosting cost** — must run entirely on GitHub Pages' free tier.
2. **Zero backend / zero secrets** — no server, no database, no API keys in the repo.
3. **Low-friction authorship** — a non-developer (the professor) can add a lesson by writing one Markdown file.
4. **Consistency at scale** — ~40+ lesson pages must render identically structured content without per-page custom code.

## 2. Stack Rationale

| Layer | Choice | Why |
|---|---|---|
| Framework | Astro | Ships zero JS by default, fast builds, first-class Markdown/MDX, content collections fit "sessions" exactly |
| Theme | Starlight | Pre-built docs shell: sidebar, search, dark/light toggle, responsive nav — matches the doc-site reference pattern out of the box |
| Hosting | GitHub Pages | Free, integrates natively with GitHub Actions |
| CI/CD | GitHub Actions (`withastro/action` + `actions/deploy-pages`) | Official, maintained, no third-party build service needed |
| Search | Pagefind | Static index generated at build time, no server, ships with Starlight |
| Analytics | GoatCounter | Free tier, no cookie banner, privacy-friendly |
| Comments | giscus (optional) | Uses GitHub Discussions as the data store — no new infra |

Alternatives considered and rejected: Docusaurus (more setup for the same outcome, React overhead not needed), Hugo/Jekyll (viable but Astro's component model + MDX escape hatch is more useful here given occasional embeds), any headless CMS or Node backend (unnecessary — content is authored directly as Markdown by one person).

## 3. High-Level Architecture

```
 Author (professor)
        │  writes/edits .md file, git push
        ▼
 GitHub repo (main branch)
        │  triggers on push
        ▼
 GitHub Actions: build job
   ├─ checkout
   ├─ astro build  (content collections validated against schema)
   └─ pagefind index generated
        │  artifact
        ▼
 GitHub Actions: deploy job
   └─ actions/deploy-pages
        ▼
 GitHub Pages (static hosting)
        │
        ▼
 Reader's browser  ── search via Pagefind (client-side)
                    ── analytics ping → GoatCounter
                    ── (optional) comments → giscus/GitHub Discussions
                    ── interactive demo links → Hugging Face Spaces / Colab (external, separate infra)
```

No server exists between the reader and GitHub Pages' CDN. No write path exists at runtime — the only "write" is a git push, which is the entire deployment mechanism.

## 4. Repository / Folder Structure

```
ai-course-site/
├─ src/
│  ├─ content/
│  │  ├─ config.ts                 ← content collection schema (see §5)
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
│  └─ styles/custom.css            ← color tokens, typography overrides on top of Starlight defaults
├─ public/                          ← static assets (favicon, og-image)
├─ astro.config.mjs                 ← site/base URL, Starlight sidebar config
├─ package.json
└─ .github/workflows/deploy.yml
```

## 5. Content Model / Schema

Defined once in `src/content/config.ts`, enforced at build time (a malformed lesson file fails the build rather than silently rendering wrong):

```ts
import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const docs = defineCollection({
  schema: docsSchema({
    extend: z.object({
      track: z.enum(['foundation', 'research', 'management']).optional(),
      module: z.string().optional(),       // e.g. "F2", "R4", "M3"
      order: z.number().optional(),
    }),
  }),
});

export const collections = { docs };
```

Every lesson body follows the fixed five-block shape (Objective, Key concepts, Hands-on, Free tools, Read/explore) — enforced by convention and the `CLAUDE.md` template, not by schema, since body content is prose/Markdown.

## 6. Routing & URL Structure

Astro/Starlight derives routes directly from the file path under `src/content/docs/`:

```
/                                            ← index.mdx
/foundation/f2-1-tokens-embeddings-prediction/
/research/r4-2-silicon-samples/
/management/m3-1-data-before-models/
/toolkit/
/library/
```

`base` path is configured for the GitHub Pages project URL (`/ai-course-site`) in `astro.config.mjs`. If a custom domain is added later, `base` reverts to `/` and a `CNAME` file is added to `public/`.

## 7. Navigation / Sidebar Configuration

Sidebar groups are declared in `astro.config.mjs` under the Starlight integration config, mirroring the three tracks plus two flat links:

```js
starlight({
  title: 'AI for Management & Research',
  sidebar: [
    { label: 'Foundation', autogenerate: { directory: 'foundation' } },
    { label: 'Research Track', autogenerate: { directory: 'research' } },
    { label: 'Management Track', autogenerate: { directory: 'management' } },
    { label: 'Toolkit', link: '/toolkit/' },
    { label: 'Library', link: '/library/' },
  ],
})
```

`autogenerate` reads `order` frontmatter to sequence sessions within a module — this is why every lesson file sets `order`.

## 8. Component Architecture

All five custom components are presentational, no client-side state, rendered at build time:

- `HandsOn.astro` — slot-based callout, accent border using `--accent-mint`.
- `ToolList.astro` — props: `tools: {name, url, description}[]` → renders a card grid.
- `ReadExplore.astro` — props: `links: {label, url}[]` → simple list.
- `TrackCard.astro` — props: `title, description, audience, ctaHref` → used 3× on homepage.
- `RoadmapTimeline.astro` — props: `stages: {label, description}[]` → vertical connector + nodes, used only on the two capstone pages.

No component fetches data at runtime. No component requires JavaScript hydration — keeps the site at or near 100 Lighthouse performance.

## 9. Build & Deployment Pipeline

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push: { branches: [main] }
permissions: { contents: read, pages: write, id-token: write }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: "${{ steps.deployment.outputs.page_url }}" }
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Repo setting: **Settings → Pages → Source = GitHub Actions**. Every push to `main` triggers a full rebuild + redeploy, typically under two minutes for a site this size.

## 10. Search, Analytics, Comments

- **Search**: Pagefind runs as a post-build step (bundled with Starlight), generates a static index — no server, no third-party SaaS dependency.
- **Analytics**: GoatCounter script tag added to the Starlight head config; free tier comfortably covers this traffic volume.
- **Comments**: if enabled, giscus is added as an MDX/component embed on lesson pages only (not toolkit/library), backed by GitHub Discussions on the same repo — no separate database.

## 11. Interactive Demo Hosting (no backend in this repo)

Two sessions (Research R4.4, Management M2.3) call for a live demo. Architecture decision: **never host these inside the Astro site or commit API keys to this repo.**

- Primary path: build the demo separately as a Gradio/Streamlit app, deploy free on **Hugging Face Spaces**, then either link to it or embed via `<iframe>` in the MDX file.
- Secondary path: a **Google Colab** notebook with an "Open in Colab" badge — reader runs it in their own session, using their own (free) API quota if needed.
- Any API keys required by a demo live only in the Space's/Colab's own environment secrets — never in this repository, never in `.env` files committed to git.

## 12. Performance & Accessibility

- Static HTML + minimal JS (Starlight's nav/search interactivity only) → fast TTFB and low CLS by default.
- Semantic heading hierarchy enforced by the fixed lesson template (H1 title → H2 section blocks).
- Color tokens in §5 of `CLAUDE.md` chosen for WCAG AA contrast in both dark and light themes — verify with axe/Lighthouse before launch.
- All outbound tool/reference links open in a new tab (`target="_blank" rel="noopener"`), per the content convention.

## 13. Extensibility / Future Migration Path

If the content owner later wants non-technical in-browser editing (vs. git), the migration path is: keep the same `src/content/docs` schema and swap the authoring surface for a git-backed headless CMS (e.g. Decap CMS / TinaCMS) layered on top of the same repo — no change to the Astro build, routing, or deployment pipeline. This is deliberately not built now, only kept open as an option.

## 14. Known Risks / Tech Debt

- Outbound free-tool links (Section 6 of the curriculum) will rot over time — needs a periodic link-check (e.g. a scheduled GitHub Action running a link-checker) rather than manual review.
- Pagefind/Starlight version upgrades should be tested in a preview branch before merging to `main`, since `main` auto-deploys to production immediately.
- No staging environment by default — consider a `preview` branch + PR-preview Pages deployment if iteration speed becomes an issue.
