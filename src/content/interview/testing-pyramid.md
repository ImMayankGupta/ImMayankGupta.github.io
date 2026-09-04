---
title: "What is the Testing Pyramid?"
description: "The classic model for balancing unit, integration, and E2E tests — with a modern take on where it breaks."
pubDatetime: 2026-08-15T10:00:00Z
tags: ["fundamentals", "strategy", "interview"]
featured: true
---

## Question

**"Explain the testing pyramid. Where does it hold up, and where does it fall apart in modern systems?"**

## Answer

The **Testing Pyramid**, introduced by Mike Cohn, prescribes:

- Many **unit tests** (fast, cheap, isolated)
- Some **integration/service tests** (slower, medium cost)
- Few **end-to-end tests** (slow, expensive, flaky)

### Why it works

1. **Fast feedback** — most failures caught in seconds
2. **Cheap to maintain** — unit tests rarely break on refactors when written well
3. **Precise diagnosis** — a failing unit test pinpoints the bug

### Where it falls short today

- **Microservices** — you often need more integration coverage than the pyramid suggests
- **SPAs** — component tests (Testing Library, Playwright Component) blur the middle layer
- **Contract testing** (Pact) — didn't exist when the pyramid was drawn

### Modern refinement: the "Testing Trophy" (Kent C. Dodds)

Emphasises **integration** as the fattest layer for frontend/full-stack apps:

- Static (types, lint) → Unit → **Integration** → E2E

### Follow-up questions to expect

- How do you decide what to unit-test vs integration-test?
- What's the cost of an E2E test failing on `main`?
- How do you keep E2E suites under 10 minutes?
