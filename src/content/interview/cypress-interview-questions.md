---
title: "Top 20 Cypress Interview Questions with Answers"
description: "Cypress E2E testing interview questions covering commands, fixtures, API testing, authentication, custom commands, retries, and CI integration."
pubDatetime: 2023-07-09T00:00:00Z
tags: ["cypress", "e2e", "javascript", "interview", "test-automation"]
externalUrl: "https://qamayankgupta.medium.com/top-20-cypress-interview-questions-with-answer-33f85b363b8b"
---

## Table of contents

## 1. What is Cypress?

Cypress is a JavaScript-based end-to-end testing framework used to automate browser testing. It provides a simple and intuitive API for interacting with web elements and performing testing operations.

## 2. Advantages of using Cypress

- Easy setup and installation
- Powerful built-in assertions and test runners
- Automatic waiting and retries for handling asynchronous behavior
- Real-time reloading and time-travel debugging
- Supports modern frameworks — React, Angular, Vue

## 3. How does Cypress differ from Selenium?

- Cypress runs **directly in the browser** with access to the JS runtime
- Simpler, more expressive API
- Eliminates flaky XPath/CSS selectors — use `cy.get()` directly
- Built-in waiting, no explicit `Thread.sleep()` needed

## 4. Common Cypress commands for element selection

- `cy.get(selector)` — Selects an element by CSS selector
- `cy.contains(text)` — Selects an element by its text content
- `cy.find(selector)` — Selects an element within a parent
- `cy.get().as(alias)` — Assigns an alias for later use

## 5. How do you handle asynchronous operations?

Cypress **automatically waits** for commands and assertions. For special cases:

```javascript
cy.wait(2000); // explicit
cy.get(".item").should("be.visible"); // chained assertions retry
```

## 6. What is a fixture in Cypress?

A way to load external data into your tests. You can define data in JSON/CSV files under `cypress/fixtures/` and use them via `cy.fixture()`.

```javascript
cy.fixture("users.json").then(users => {
  cy.get("#username").type(users.admin.name);
});
```

## 7. How do you handle test environment configurations?

Create separate config files like `cypress.dev.json` or `cypress.prod.json` and use `Cypress.env()` to access environment-specific values.

## 8. How do you perform API testing in Cypress?

Use `cy.request()`:

```javascript
cy.request("POST", "/api/login", { user: "foo", pass: "bar" }).then(
  response => {
    expect(response.status).to.eq(200);
  }
);
```

## 9. How do you handle authentication?

- `cy.request()` to authenticate programmatically before running tests
- `cy.setCookie()` or `cy.setLocalStorage()` to set tokens manually
- Custom commands for reusable auth flows

## 10. How do you handle browser alerts or pop-ups?

Use `cy.on()` to intercept browser events:

```javascript
cy.on("window:alert", txt => {
  expect(txt).to.contains("Success");
});
```

## 11. How do you run Cypress tests in headless mode?

Use the `--headless` flag when running from CLI:

```bash
npx cypress run --headless --browser chrome
```

## 12. What are custom commands?

Reusable commands defined in `cypress/support/commands.js` that can be used across tests:

```javascript
Cypress.Commands.add("login", (user, pass) => {
  cy.get("#username").type(user);
  cy.get("#password").type(pass);
  cy.get("#submit").click();
});
```

## 13. How do you generate test reports?

- Default: Test Runner GUI
- Enhanced: plugins like `mochawesome` or `cypress-xunit-reporter` for HTML/XML reports with screenshots and videos

## 14. What is Cypress Test Retries?

Automatically retries failed tests. Configure in `cypress.config.js`:

```javascript
retries: {
  runMode: 2,
  openMode: 0
}
```

## 15. How do you handle file uploads?

Use `cy.fixture()` and `attachFile` (from `cypress-file-upload` plugin):

```javascript
cy.get("input[type=file]").attachFile("sample.pdf");
```

## 16. How do you configure Cypress with TypeScript?

- Install TypeScript
- Create `tsconfig.json` in project root
- Install Cypress TypeScript definitions
- Rename test files to `.ts`

## 17. How do you handle test data cleanup?

Use hooks like `beforeEach()` or `afterEach()` to make API calls or interact with the app to delete/reset test data.

## 18. Best practices for writing Cypress tests

- Keep tests focused, short, and readable
- Use descriptive test names
- Use custom commands or page objects to avoid duplication
- Use `data-*` attributes for resilient selectors
- Use fixtures instead of hardcoded data

## 19. Limitations of Cypress

- Primarily Chrome-focused (limited Safari support)
- Can't test across multiple tabs/windows simultaneously
- Difficult with file downloads and third-party integrations
- Limited mobile device testing

## 20. How do you integrate Cypress with CI?

Configure CI (Jenkins, CircleCI, GitHub Actions) to install deps, run Cypress in headless mode, and generate reports. Cypress Dashboard offers parallel execution and advanced reporting.

```yaml
- name: Run Cypress
  uses: cypress-io/github-action@v6
  with:
    record: true
```
