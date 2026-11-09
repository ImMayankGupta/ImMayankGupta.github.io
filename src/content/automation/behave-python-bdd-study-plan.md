---
title: "Behave (Python BDD) Study Plan"
description: "A practical study plan for Behavior-Driven Development in Python with Behave — covering Gherkin syntax, step definitions, hooks, data-driven testing, and best practices."
pubDatetime: 2026-03-24T16:54:12Z
tags: ["behave", "bdd", "python", "automation", "gherkin"]
externalUrl: "https://qamayankgupta.medium.com/behave-python-bdd-study-plan-e9ee9022e6f9"
featured: true
---

## Table of contents

## What is BDD?

- Behavior-Driven Development bridges the gap between business stakeholders and developers.
- Tests are written in plain English (Gherkin) before code is implemented.
- Cycle: **Discovery → Formulation → Automation**

## Gherkin Syntax

The `.feature` file language:

| Keyword             | Purpose                                    | Example                                       |
| ------------------- | ------------------------------------------ | --------------------------------------------- |
| `Feature:`          | Describes the feature being tested         | `Feature: Posts API`                          |
| `Scenario:`         | A single test case                         | `Scenario: Get all posts`                     |
| `Given`             | Precondition / setup                       | `Given the API client is initialized`         |
| `When`              | Action / trigger                           | `When I send a GET request to "/posts"`       |
| `Then`              | Expected outcome / assertion               | `Then the response status code should be 200` |
| `And` / `But`       | Continuation of the previous keyword       | `And the response should have field "id"`     |
| `Background:`       | Steps shared by ALL scenarios in a feature | Runs before every scenario                    |
| `Scenario Outline:` | Data-driven test template                  | Uses `Examples:` table for parameterization   |
| `@tag`              | Tags for filtering/organizing              | `@smoke`, `@api`, `@negative`                 |

## Behave Architecture & Project Structure

**How Behave maps Gherkin to Python:**

```
feature file (Gherkin)         → step definitions (Python)
─────────────────────────────────────────────────────────
Given the API client …         → @given("the API client is initialized")
When I send a GET …            → @when('I send a GET request to "{endpoint}"')
Then status code …             → @then("the response status code should be {code:d}")
```

**Standard Behave directory structure:**

```
project/
├── behave.ini             # Configuration file
├── features/
│   ├── environment.py     # Hooks (before/after scenario, feature, etc.)
│   ├── *.feature          # Gherkin feature files
│   └── steps/
│       └── *.py           # Step definition files
```

**Key files to study:**

| File              | What to learn                                               |
| ----------------- | ----------------------------------------------------------- |
| `behave.ini`      | Configuration: format, paths, junit output, tags            |
| `environment.py`  | Hooks: `before_scenario`, `after_scenario`, etc.            |
| `api_steps.py`    | Step definitions with `@given`, `@when`, `@then` decorators |
| `base_service.py` | Service layer pattern (separating HTTP logic from steps)    |

## Step Definitions Deep Dive

Step matching patterns:

```python
# 1. Simple string match
@given("the API client is initialized")
def step_init(context):
    pass

# 2. Parameterized with parse (default)
@when('I send a GET request to "{endpoint}"')
def step_get(context, endpoint):  # endpoint extracted automatically
    pass

# 3. Type conversion with :d (integer), :f (float)
@then("the response status code should be {code:d}")
def step_verify(context, code):  # code is already an int
    pass

# 4. Table data (context.table)
@when('I send a POST request to "{endpoint}" with data:')
def step_post(context, endpoint):
    for row in context.table:
        print(row["field"], row["value"])

# 5. Multi-line text (context.text)
@when('I send the following body')
def step_body(context):
    print(context.text)  # Raw text block from feature
```

**The `context` object** — Behave's shared state bag:

- `context.response` — store anything between steps
- `context.table` — data table from a step
- `context.text` — multi-line text from a step
- Lives for the duration of a scenario (reset per scenario)
- Attributes set in `environment.py` hooks are available in steps

Multiple decorators on one function (alias steps):

```python
@then('the user "{field}" should be "{value}"')
@then('the post "{field}" should be "{value}"')
def step_verify_value(context, field, value):
    context.active_service.verify_field_equals(field, value)
```

## Run Tests & Understand Output

Run commands to try:

```bash
# Run ALL tests
behave

# Run a specific feature file
behave features/posts_api.feature

# Run by tag
behave --tags=@smoke
behave --tags="@smoke and @posts"
behave --tags="not @negative"

# Tag expression syntax
behave --tags="@api and not @data-driven"
behave --tags="@smoke or @negative"

# Dry run (check step bindings without executing)
behave --dry-run

# List undefined steps (show suggested snippets)
behave --snippets

# Verbose / specific format
behave -f pretty                 # Colored, readable output
behave -f progress               # Dots like unittest
behave -f json -o report.json    # JSON report

# JUnit XML output
behave --junit --junit-directory=reports/junit/
```

## Write a New Feature File

Challenge: Create a `comments_api.feature` for the Comments endpoint.

```gherkin
@api @comments
Feature: Comments API
  Test operations for Comments endpoint

Background:
  Given the API client is initialized

@smoke
Scenario: Get all comments
  When I send a GET request to "/comments"
  Then the response status code should be 200
  And the response should contain a list of items

Scenario: Get comments for a specific post
  When I send a GET request to "/comments?postId=1"
  Then the response status code should be 200
  And the response should contain a list of items

Scenario Outline: Validate comment fields
  When I send a GET request to "/comments/<id>"
  Then the response status code should be 200
  And the response should have field "postId"
  And the response should have field "name"

  Examples:
    | id |
    | 1  |
    | 2  |
    | 3  |
```

This reuses your existing step definitions — no new Python code needed.

## Write New Step Definitions

Add these new steps to your step file:

```python
# Verify response array length
@then("the response should contain {count:d} items")
def step_verify_count(context, count):
    data = context.active_service.response_json
    assert isinstance(data, list), "Response is not a list"
    assert len(data) == count, f"Expected {count} items, got {len(data)}"

# Verify field value contains text
@then('the response field "{field}" should contain "{text}"')
def step_verify_contains(context, field, text):
    data = context.active_service.response_json
    assert field in data, f"Field '{field}' not found"
    assert text in str(data[field]), f"'{text}' not in '{data[field]}'"

# Verify response time
@then("the response time should be less than {ms:d} milliseconds")
def step_verify_time(context, ms):
    elapsed = context.active_service._response.elapsed.total_seconds() * 1000
    assert elapsed < ms, f"Response took {elapsed:.0f}ms, expected < {ms}ms"
```

## Environment Hooks

All available hooks in `environment.py`:

```python
# Execution order: feature → scenario → step

def before_all(context):
    """Once before everything — setup global config, DB connections"""
    pass

def after_all(context):
    """Once after everything — cleanup, final reports"""
    pass

def before_feature(context, feature):
    """Before each .feature file"""
    pass

def before_scenario(context, scenario):
    """Before each scenario — reset state"""
    context.response = None
    context.test_data = {}

def after_scenario(context, scenario):
    """After each scenario — cleanup, screenshots on failure"""
    if scenario.status == "failed":
        print(f"FAILED: {scenario.name}")
```

Enhance your `environment.py` with logging on failure:

```python
def after_scenario(context, scenario):
    if scenario.status == "failed":
        if hasattr(context, 'active_service') and context.active_service._response:
            print(f"\n--- FAILURE DEBUG ---")
            print(f"Status: {context.active_service.status_code}")
            print(f"Body: {context.active_service.response_text[:500]}")
```

## Advanced Gherkin & Data-Driven Testing

**Scenario Outline + Examples:**

```gherkin
Scenario Outline: Create post from Excel data
  Given I load test data from sheet "posts" with test_id "<test_id>"
  When I send a POST request to "/posts" with the loaded data
  Then the response status code should be 201
  And the post "title" should be "<expected_title>"

Examples:
  | test_id | expected_title    |
  | POST001 | My First Post     |
  | POST002 | Test Post Title   |
```

**Data tables (inline):**

```gherkin
When I send a POST request to "/posts" with data:
  | field  | value           |
  | title  | Test Post       |
  | body   | Test body text  |
  | userId | 1               |
```

## Best Practices Checklist

| Practice                               | Description                                             |
| -------------------------------------- | ------------------------------------------------------- |
| **Declarative steps**                  | `When I create a post` not `When I click submit button` |
| **Reusable steps**                     | Generic steps with parameters over specific ones        |
| **Service layer**                      | Separate HTTP logic from step definitions               |
| **Context as glue**                    | Pass data between steps via `context`, never globals    |
| **One assertion concept per scenario** | Each scenario tests one behavior                        |
| **Tags for organization**              | `@smoke`, `@regression`, `@negative`, `@wip`            |
| **Background for shared setup**        | Don't repeat `Given` steps across scenarios             |
| **Thin steps**                         | Steps call service methods; logic lives in services     |

## Quick Reference Card

```bash
behave                                    # Run all tests
behave features/posts_api.feature         # Run one feature
behave --tags=@smoke                      # Filter by tag
behave --dry-run                          # Validate step bindings
behave -f json -o report.json             # JSON report
behave --no-capture                       # Show stdout in real-time

# Step decorators
@given("…")   @when("…")   @then("…")

# Context object
context.table      # Data table from step
context.text       # Multi-line text from step
context.response   # Custom attributes (set by you)

# Hooks (environment.py)
before_all → before_feature → before_scenario → before_step
after_step → after_scenario → after_feature → after_all
```

## Resources

- Behave docs: <https://behave.readthedocs.io/>
- Gherkin reference: <https://cucumber.io/docs/gherkin/reference/>
