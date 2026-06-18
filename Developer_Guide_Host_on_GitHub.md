# Developer Brief — Build & Host the "AI for Management & Research" Website on GitHub

**Audience:** the web developer building this site.
**Goal:** a fast, free, easy-to-maintain tutorials/articles website with two learning tracks (Management, Research) and a shared foundation, hosted on **GitHub Pages**.

This brief is deliberately prescriptive so you can start immediately. If you prefer a different stack, keep the same information architecture and URL structure described in Section 2.

---

## 1. Recommended stack (free, low-maintenance)

Use a **static site generator (SSG)**. The content is articles/lessons, so we do not need a database or server. Recommended, in order of preference:

| Option | Best when | Notes |
|---|---|---|
| **Astro** (recommended) | You want fast pages, MDX, great SEO | Modern, content-collections fit "sessions" perfectly. |
| **Hugo** | You want the simplest, fastest build | Single binary, themes like `Doks`/`Book` suit docs/courses. |
| **Jekyll** | You want zero config on GitHub Pages | Native to GitHub Pages; theme `just-the-docs` is course-friendly. |
| **Docusaurus** | You want versioned docs + built-in search | React-based; "docs" + "blog" maps to lessons + articles. |

All four deploy to GitHub Pages for free. If you are unsure, choose **Astro** with the [Starlight](https://starlight.astro.build) docs theme (built-in sidebar, search, dark mode) — it matches a multi-track course site almost out of the box.

**Author experience:** all content is **Markdown/MDX**, so the professor can write lessons in plain Markdown without touching code.

---

## 2. Information architecture (please keep this structure)

Mirror the curriculum outline (`AI_Curriculum_Outline.docx`). Three top-level sections, each a sidebar group:

```
/                         → landing page (what the site is, pick a track)
/foundation/              → Shared Foundation (F1–F5)  [taken by everyone]
/research/                → Research Track (R1–R4 + capstone)
/management/              → Management Track (M1–M6 + capstone)
/toolkit/                 → Free Tools Directory
/library/                 → Reading & Resource Library
```

Each **session** is one page. Use stable, human-readable slugs that match the outline codes, e.g.:

```
/foundation/f2-1-tokens-embeddings-prediction/
/research/r4-2-silicon-samples/
/management/m3-1-data-before-models/
```

Every lesson page should render the same blocks (so make a template/component):
**Title → Objective → Key concepts → Hands-on → Free tools → Read/explore.**

> Tip: define a reusable "Hands-on" callout component and a "Tools" link-list component so every page looks consistent.

---

## 3. Suggested repository layout (Astro/Starlight example)

```
ai-course-site/
├─ src/
│  ├─ content/
│  │  └─ docs/
│  │     ├─ index.mdx
│  │     ├─ foundation/   (f1-1.md, f1-2.md, …)
│  │     ├─ research/     (r1-1.md, …)
│  │     ├─ management/   (m1-1.md, …)
│  │     ├─ toolkit.md
│  │     └─ library.md
│  └─ components/  (HandsOn.astro, ToolList.astro)
├─ astro.config.mjs       (sidebar config = the three tracks)
├─ package.json
└─ .github/workflows/deploy.yml   (auto-deploy to Pages)
```

A minimal lesson file:

```markdown
---
title: "F2.1 — Tokens, embeddings, and prediction"
sidebar: { order: 21 }
---
**Objective.** Explain what an LLM actually does…

## Key concepts
- Tokens and tokenisation
- Embeddings…

## Hands-on
Use the OpenAI tokenizer to see how your sentence splits into tokens…

## Free tools
- [OpenAI Tokenizer](https://platform.openai.com/tokenizer)
- [Google AI Studio](https://aistudio.google.com)

## Read / explore
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
```

---

## 4. Step-by-step: publish on GitHub Pages

### A. One-time setup
1. Create a GitHub account (if needed) and a **new public repository**, e.g. `ai-course-site`.
2. Locally scaffold the site (Astro example):
   ```bash
   npm create astro@latest -- --template starlight
   cd ai-course-site
   npm install
   npm run dev          # preview at http://localhost:4321
   ```
3. Add the content folders and pages from Section 3. Commit and push:
   ```bash
   git init
   git add .
   git commit -m "Initial course site"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/ai-course-site.git
   git push -u origin main
   ```

### B. Configure the base path
GitHub Pages serves a project site at `https://<USERNAME>.github.io/ai-course-site/`. Set the base in `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://<USERNAME>.github.io',
  base: '/ai-course-site',
  integrations: [starlight({ /* sidebar config */ })],
});
```
(Hugo: set `baseURL` in `config.toml`. Jekyll: set `baseurl` in `_config.yml`.)

### C. Auto-deploy with GitHub Actions
Create `.github/workflows/deploy.yml`:
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
      - uses: withastro/action@v3      # Astro's official Pages action
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: "${{ steps.deployment.outputs.page_url }}" }
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```
> Astro provides [`withastro/action`](https://github.com/withastro/action). For Jekyll, GitHub builds it automatically; for Hugo/Docusaurus use their official Pages actions.

### D. Turn on Pages
In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**. Push to `main`; the Action builds and deploys. The live URL appears under Settings → Pages.

### E. (Optional) Custom domain
Buy a domain, add a `CNAME` file with the domain name, and point a DNS `CNAME`/`A` record at GitHub Pages (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)). Enable "Enforce HTTPS".

---

## 5. Search, analytics, comments (all free)

- **Search:** Starlight/Docusaurus ship with built-in search (Pagefind/local). Otherwise add [Pagefind](https://pagefind.app) (static, free).
- **Analytics (privacy-friendly):** [GoatCounter](https://www.goatcounter.com) or [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) — both free, no cookie banner needed.
- **Comments:** [giscus](https://giscus.app) (free, uses GitHub Discussions) so readers can discuss lessons.

---

## 6. Handling the hands-on / interactive parts

Most "Hands-on" boxes just link out to free tools (ChatGPT, Colab, NotebookLM) — no hosting needed. For the two places where a **live demo app** is useful (Research R4.4 and Management M2.3), do **not** put API keys in the static site. Instead:

- Host interactive demos separately on **[Hugging Face Spaces](https://huggingface.co/spaces)** (free, supports Gradio/Streamlit) and **embed** them with an `<iframe>`, **or**
- Link to a **[Google Colab](https://colab.research.google.com)** notebook (open-in-Colab badge) so readers run code in their own session.
- The [UCLA Anderson App Development Kit](https://ucla-anderson-ssai.github.io/SSAI/Product%20Sprint/App_Development_Kit.html) (one of our references) shows the Railway-based pattern if a full backend demo is ever wanted later.

**Never commit API keys to the repo.** Keep any keys in the Space/Colab environment, not in GitHub.

---

## 7. Definition of done (checklist)

- [ ] Repo public; GitHub Actions deploy passing.
- [ ] Live URL works; `base` path correct (no broken CSS/links).
- [ ] Three sidebar groups (Foundation, Research, Management) + Toolkit + Library.
- [ ] Lesson template renders the 6 standard blocks consistently.
- [ ] All outbound links open in a new tab and are valid.
- [ ] Search, analytics, and (optional) comments enabled.
- [ ] Mobile-responsive and dark-mode tested.
- [ ] README explains how the professor adds a new lesson (create a `.md` file → push).

---

## 8. Reference links for the developer

- GitHub Pages: https://pages.github.com  ·  Docs: https://docs.github.com/en/pages
- Astro: https://astro.build  ·  Starlight theme: https://starlight.astro.build  ·  Deploy action: https://github.com/withastro/action
- Hugo: https://gohugo.io  ·  Jekyll: https://jekyllrb.com  ·  just-the-docs: https://just-the-docs.com
- Docusaurus: https://docusaurus.io
- Pagefind (search): https://pagefind.app  ·  giscus (comments): https://giscus.app
- GoatCounter (analytics): https://www.goatcounter.com
- Hugging Face Spaces (interactive demos): https://huggingface.co/spaces  ·  Gradio: https://www.gradio.app
- Google Colab: https://colab.research.google.com
