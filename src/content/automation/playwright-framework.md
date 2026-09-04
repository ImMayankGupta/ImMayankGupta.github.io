---
title: "Playwright + TypeScript Framework"
description: "A production-grade Playwright test framework with POM, fixtures, allure reporting, and GitHub Actions CI."
pubDatetime: 2026-08-01T10:00:00Z
tags: ["playwright", "typescript", "e2e", "ci"]
externalUrl: "https://github.com/TestWithAI/playwright-framework"
featured: true
---

## Overview

A batteries-included Playwright framework built for real-world QA teams.

### Highlights

- **Page Object Model** with typed page fixtures
- **Data-driven testing** via CSV/JSON providers
- **Allure + HTML reports** on every run
- **GitHub Actions** matrix (Chromium / Firefox / WebKit)
- **Docker image** for reproducible CI

### Quick start

```bash
git clone https://github.com/TestWithAI/playwright-framework
cd playwright-framework
pnpm install
pnpm test
```

### What's inside

| Folder | Purpose |
| ------ | ------- |
| `tests/` | Test specs |
| `pages/` | Page objects |
| `fixtures/` | Custom test fixtures |
| `.github/workflows/` | CI pipeline |
