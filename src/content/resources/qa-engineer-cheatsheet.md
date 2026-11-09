---
title: "The Ultimate QA Engineer's Cheatsheet: Playwright, Cypress, Docker & SQL"
description: "A fast reference cheatsheet for SDETs and QA Automation Engineers: essential CLI commands, selector strategies, Docker testing containers, and database validation queries."
pubDatetime: 2026-10-20T00:00:00Z
tags: ["cheatsheet", "playwright", "cypress", "docker", "sql", "git", "qa"]
featured: true
---

## 1. Playwright CLI & Core Commands

```bash
# Run all tests headlessly in parallel
npx playwright test

# Run tests in headed browser with specific worker count
npx playwright test --headed --workers=2

# Run a specific test file or tag
npx playwright test tests/login.spec.ts
npx playwright test --grep "@smoke"

# Interactive UI mode with time-travel debugger
npx playwright test --ui

# Record and generate test code automatically
npx playwright codegen https://example.com

# Inspect trace files after test runs
npx playwright show-trace trace.zip
```

### Essential Playwright Locators

```typescript
// Prefer user-facing semantic role selectors
page.getByRole("button", { name: "Submit" });
page.getByLabel("Password");
page.getByPlaceholder("Enter your work email");
page.getByTestId("checkout-cart-item");

// Resilient element waiting
await expect(page.getByText("Payment Succeeded")).toBeVisible({
  timeout: 10000,
});
```

---

## 2. Cypress Core Recipes

```javascript
// Intercepting API calls and asserting status & response
cy.intercept("POST", "/api/v1/auth/login").as("loginReq");
cy.get("[data-cy=submit-btn]").click();
cy.wait("@loginReq").its("response.statusCode").should("eq", 200);

// Preserving session cookies across test runs
beforeEach(() => {
  cy.session("user-session", () => {
    cy.visit("/login");
    cy.get("#username").type("qa-tester");
    cy.get("#password").type("Secret123!");
    cy.get("#submit").click();
    cy.url().should("include", "/dashboard");
  });
});
```

---

## 3. Docker Commands for Test Environments

```bash
# Spin up isolated test dependencies (DB, Redis, Mock server)
docker compose up -d

# Run Playwright tests inside an exact Ubuntu browser container
docker run -v $(pwd):/work -w /work --rm -it mcr.microsoft.com/playwright:v1.49.0-noble /bin/bash

# Inspect live test container logs
docker logs -f my-test-backend --tail 100

# Remove dangling containers, networks, and orphaned volumes
docker system prune -af --volumes
```

---

## 4. SQL Queries for Test Data Validation

```sql
-- Find duplicate records violating uniqueness constraints
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- Verify orphaned foreign key relationships
SELECT o.id, o.user_id
FROM orders o
LEFT JOIN users u ON o.user_id = u.id
WHERE u.id IS NULL;

-- Fast sample data sanity checks with pagination
SELECT id, status, total_amount, created_at
FROM transactions
WHERE status = 'FAILED'
ORDER BY created_at DESC
LIMIT 20 OFFSET 0;
```

---

## 5. Git Productivity for Automation Repos

```bash
# Stash untracked files while switching test branches
git stash -u

# Squash recent local WIP commits before opening PR
git rebase -i HEAD~3

# Interactively view changes in tests before staging
git diff --stat
git diff src/tests/
```
