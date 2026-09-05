---
title: "Top 20 Manual Testing Interview Questions with Answers"
description: "Core manual QA interview questions: verification vs validation, testing life cycle, test cases, regression, smoke, sanity, exploratory testing, and bug life cycle."
pubDatetime: 2023-07-15T00:00:00Z
tags: ["manual-testing", "qa", "interview", "fundamentals", "sdlc"]
externalUrl: "https://qamayankgupta.medium.com/top-20-manual-testing-interview-questions-with-answer-41add52796cd"
---

## Table of contents

## 1. What is manual testing?

Manual testing is a testing approach where testers execute test cases manually without the use of automation tools. It involves verifying and validating software applications to identify defects, ensure functionality, and assess user experience.

## 2. Difference between verification and validation

- **Verification** — Checking whether the software meets specified requirements and adheres to design specifications (Are we building the product right?)
- **Validation** — Evaluating the software to ensure it meets the customer's expectations and needs (Are we building the right product?)

## 3. What is the testing life cycle?

Consists of several phases:

1. **Test Planning** — Strategy, scope, resources
2. **Test Case Design** — Writing test cases, review
3. **Test Environment Setup** — Data, tools, config
4. **Test Execution** — Running tests, logging defects
5. **Defect Tracking** — Managing bugs
6. **Test Closure** — Reports, sign-off

## 4. What is a test case?

A detailed set of steps and conditions to be followed during testing. Includes:

- Test case ID
- Preconditions
- Test steps
- Test data
- Expected results
- Post-conditions
- Actual results (after execution)

## 5. Positive vs negative testing

- **Positive testing** — Valid inputs; ensure the application works as expected
- **Negative testing** — Invalid/unexpected inputs; check how it handles errors and exceptions

## 6. What is regression testing?

Ensures recent changes or modifications haven't introduced new defects or side effects to previously tested functionality. Involves retesting affected areas and critical paths.

## 7. What is exploratory testing?

An ad-hoc technique where testers actively explore the application, identify defects, and learn about its behavior in real-time. Unscripted; relies on tester skills, experience, and domain knowledge.

## 8. What is smoke testing?

Also known as **build verification testing** — ensures critical functionalities are working after each build/release. A quick, broad check to identify showstopper issues early.

## 9. Black-box vs white-box testing

- **Black-box** — Testing functionality without knowing internal structure. Tester has no code knowledge.
- **White-box** — Testing internal logic, code structure, and implementation. Tester has full code access.

**Gray-box** = combination of both.

## 10. How do you prioritize test cases?

Based on factors:

- **Business impact** — Critical for revenue?
- **Risk** — High-risk features first
- **Complexity** — Complex flows need more coverage
- **Frequency of use** — Popular features first
- **Recent changes** — Newly modified areas
- **Historical defects** — Bug-prone areas

## 11. Defect/bug life cycle

Typical stages:

1. **New** — Defect logged
2. **Assigned** — Assigned to developer
3. **Open** — Being worked on
4. **In Progress** — Developer actively fixing
5. **Fixed** — Code change made
6. **Retest** — Tester verifies
7. **Closed** — Verified as fixed
8. **Reopened** — If issue persists
9. **Deferred** — Fix postponed
10. **Rejected** — Not a bug or invalid

## 12. What is boundary testing?

Tests the application's behavior at the upper and lower limits of valid inputs. Identifies defects near boundaries. Example: input field accepts 1-100 → test 0, 1, 100, 101.

## 13. Quality assurance vs quality control

- **QA (Quality Assurance)** — Process-oriented; **prevention**. Process improvement, guidelines, training, standards.
- **QC (Quality Control)** — Product-oriented; **detection**. Inspections, testing, defect tracking.

## 14. Smoke testing vs sanity testing

- **Smoke** — Broad, shallow check of critical functionalities after each build
- **Sanity** — Narrow, deeper check of specific areas after minor changes (subset of regression)

## 15. What is usability testing?

Evaluates ease of use, user-friendliness, and overall user experience. Focus:

- How intuitive is the app?
- Can users navigate easily?
- Can users complete tasks efficiently?
- Does it meet user expectations?

## 16. Test case vs test scenario

- **Test case** — Specific set of test steps and expected results for a particular feature
- **Test scenario** — Higher-level description of a user flow or business process (typically covered by multiple test cases)

## 17. Role of a test plan

Outlines the overall approach, scope, objectives, and schedule of testing:

- Test strategy
- Test environment requirements
- Test deliverables
- Team roles and responsibilities
- Entry/exit criteria
- Risks and mitigation

Provides a roadmap for the testing process.

## 18. What is integration testing?

Verifies interactions and data flow between different components or modules. Ensures the integrated system functions correctly as a whole. Approaches:

- **Big Bang** — All modules integrated at once
- **Top-Down** — Start from top-level modules
- **Bottom-Up** — Start from bottom-level modules
- **Sandwich/Hybrid** — Combination

## 19. How do you handle difficult stakeholders during testing?

- Effective communication
- Active listening
- Empathy
- Manage expectations
- Understand their concerns
- Address feedback constructively
- Demonstrate value of testing with data
- Focus on shared goals (quality delivery)

## 20. Role of a test closure report

Summarizes testing activities and results:

- Overview of testing performed
- Test coverage
- Defects found/fixed/deferred
- Unresolved issues or risks
- Recommendations for future testing
- Sign-off from stakeholders
