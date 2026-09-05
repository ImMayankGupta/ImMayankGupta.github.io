# ImMayank — Personal Portfolio & Content Hub

> Automation frameworks, developer resources, and interview prep — under the **TestWithAI** umbrella.

🌐 **Live site:** [https://immayankgupta.github.io/](https://immayankgupta.github.io/)

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/github/license/ImMayankGupta/ImMayankGupta.github.io?style=for-the-badge)

## 🧭 What's inside

A personal brand hub with three focused content sections:

- 🤖 **Automation** — test automation frameworks (Playwright, Cypress, Selenium, BDD)
- 📚 **Resources** — free APIs, developer tools, and curated references
- 💡 **Interview** — 25+ interview Q&A guides across Playwright, Cypress, Java, Python, SQL, REST API, Appium, JMeter, Manual Testing, and more

## 🏗️ Tech stack

- **Framework**: [Astro 7](https://astro.build/) with content collections
- **UI**: Tailwind CSS v4 + [Jost](https://fonts.google.com/specimen/Jost) font
- **Theme base**: Derived from [AstroPaper](https://github.com/satnaing/astro-paper) (MIT) with the Marrs/Carri Green palette from satnaing.dev
- **Search**: [Pagefind](https://pagefind.app/) (static, zero-JS on first load)
- **Content**: Markdown/MDX with typed frontmatter (Zod schemas)
- **Deploy**: GitHub Actions → GitHub Pages
- **Package manager**: pnpm

## 📂 Project structure

```
src/
├── content/
│   ├── automation/      # Framework guides (markdown)
│   ├── interview/       # Interview Q&A (markdown)
│   ├── resources/       # Developer resources (markdown)
│   └── posts/           # General blog posts
├── pages/
│   ├── index.astro      # Hero + Who am I + 3 section cards + Contact
│   ├── automation/      # Listing + detail pages
│   ├── interview/       # Listing + detail pages
│   ├── resources/       # Listing + detail pages
│   └── about.astro
├── components/          # Header, Footer, Cards, Socials, etc.
├── layouts/             # Layout.astro, PostLayout.astro
├── styles/              # theme.css, global.css, typography.css
└── i18n/                # Translation strings
astro-paper.config.ts    # Site title, socials, features
astro.config.ts          # Astro + fonts + integrations
```

## 🚀 Local development

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:4321)
pnpm dev

# Type-check + build for production
pnpm build

# Preview production build
pnpm preview

# Regenerate content types after adding new markdown
pnpm sync
```

## ✍️ Add new content

Content lives in `src/content/<section>/` as markdown files with typed frontmatter.

### Interview post example

Create `src/content/interview/kubernetes-interview-questions.md`:

```md
---
title: "Top 20 Kubernetes Interview Questions with Answers"
description: "Core Kubernetes concepts: pods, deployments, services, ingress, RBAC."
pubDatetime: 2026-09-05T00:00:00Z
tags: ["kubernetes", "devops", "interview"]
featured: true
---

## 1. What is a Pod?
...
```

The site auto-generates:

- The listing card on `/interview/`
- A detail page at `/interview/kubernetes-interview-questions/`
- Sitemap entry
- RSS feed entry

### Frontmatter schema (all sections)

| Field | Type | Required |
|---|---|---|
| `title` | string | ✅ |
| `description` | string | ✅ |
| `pubDatetime` | ISO date | ✅ |
| `tags` | string[] | — (defaults to `[]`) |
| `updatedDatetime` | ISO date | — |
| `externalUrl` | URL | — |
| `featured` | boolean | — |
| `draft` | boolean | — (excludes from build if `true`) |

## 🚢 Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Checkout + install pnpm/Node 22
2. `pnpm install --frozen-lockfile`
3. `pnpm build` (astro check + build + pagefind index)
4. Upload `dist/` as Pages artifact
5. Deploy via `actions/deploy-pages@v4`

Typical deploy: **~2 minutes** end-to-end.

## 🎨 Theme colors

Inspired by [satnaing.dev](https://satnaing.dev):

| Token | Light | Dark |
|---|---|---|
| Background | `#F9FAFB` | `#1D2A35` |
| Accent | `#007A7A` (Marrs Green) | `#05CE91` (Carri Green) |
| Foreground | `#004D4D` | `#F9FAFB` |

## 🙌 Credits

- Theme base: [AstroPaper](https://github.com/satnaing/astro-paper) by Sat Naing (MIT)
- Palette + font inspiration: [satnaing.dev](https://satnaing.dev)
- Framework: [Astro](https://astro.build/)

## 📄 License

MIT — see [LICENSE](LICENSE).
