---
title: "Top 20 TestNG Interview Questions with Answers"
description: "TestNG framework interview questions: annotations, priorities, groups, data providers, parallel execution, dependencies, XML config, and Maven/Gradle integration."
pubDatetime: 2023-07-09T00:00:00Z
tags: ["testng", "java", "interview", "test-automation", "junit"]
externalUrl: "https://qamayankgupta.medium.com/top-20-testng-interview-questions-with-answer-b27b045fa569"
---

## Table of contents

## 1. What is TestNG?

TestNG is a testing framework for Java that is widely used in the industry. It provides advanced features like annotations, grouping, parallel test execution, dependency management, and comprehensive reporting.

## 2. Advantages of TestNG over JUnit

- Support for parallel test execution
- Flexible test configuration using annotations
- Advanced dependency management between test methods
- Ability to define test suites and groups
- Rich reporting capabilities

## 3. Different annotations used in TestNG

- `@Test`
- `@BeforeMethod`, `@AfterMethod`
- `@BeforeClass`, `@AfterClass`
- `@BeforeSuite`, `@AfterSuite`
- `@BeforeTest`, `@AfterTest`

## 4. How do you prioritize test cases?

Use the `priority` attribute in `@Test`. Tests execute in **ascending order** of priority.

```java
@Test(priority = 1)
public void loginTest() { ... }
```

## 5. How do you skip a test method?

Set `enabled = false` in the `@Test` annotation:

```java
@Test(enabled = false)
public void skipMe() { ... }
```

## 6. How do you group test cases?

Use the `groups` attribute:

```java
@Test(groups = {"smoke", "regression"})
public void checkoutFlow() { ... }
```

Then run specific groups via TestNG XML or CLI.

## 7. How do you handle dependencies between test methods?

Use the `dependsOnMethods` attribute:

```java
@Test(dependsOnMethods = {"login"})
public void viewProfile() { ... }
```

## 8. What is a data provider?

A method that supplies data to test methods. Allows running the same test with different data sets. The provider must return a `Object[][]` or `Iterator<Object[]>`.

```java
@DataProvider(name = "logins")
public Object[][] loginData() {
  return new Object[][] {{"user1", "pass1"}, {"user2", "pass2"}};
}
```

## 9. How do you enable assertions in TestNG?

TestNG has built-in support for assertions via `Assert` class. No special enablement needed — just use `Assert.assertEquals()`, etc.

## 10. How do you parameterize test methods?

Use `@Parameters` annotation with values defined in TestNG XML.

```xml
<parameter name="browser" value="chrome" />
```

```java
@Test
@Parameters({"browser"})
public void run(String browser) { ... }
```

## 11. How do you perform parallel test execution?

Set the `parallel` attribute in TestNG XML:

```xml
<suite name="Suite" parallel="tests" thread-count="4">
```

Values: `methods`, `tests`, `classes`, `instances`.

## 12. Difference between `@BeforeMethod` and `@BeforeTest`

- **`@BeforeMethod`** — runs before **each test method**
- **`@BeforeTest`** — runs before all test methods in a `<test>` tag in TestNG XML

## 13. How do you generate TestNG HTML reports?

TestNG generates HTML reports by default in the `test-output` folder. Custom reports via listeners or plugins like ReportNG or Extent Reports.

## 14. How do you perform cross-browser testing?

Combine TestNG with Selenium WebDriver. Use `@Parameters` to pass browser type, and TestNG XML to define multiple `<test>` blocks per browser.

## 15. How do you handle test failures and errors?

Implement listeners like `IInvokedMethodListener` or `ITestListener` for custom failure/error handling logic.

## 16. How do you run specific test methods or groups?

Define `<classes>` or `<methods>` tags in TestNG XML with `<include>` and `<exclude>`:

```xml
<classes>
  <class name="com.example.LoginTest">
    <methods>
      <include name="testValidLogin" />
    </methods>
  </class>
</classes>
```

## 17. How do you run TestNG tests from the command line?

```bash
java -cp "testng.jar:bin" org.testng.TestNG testng.xml
```

## 18. How do you configure TestNG to run tests in a specific order?

Use the `preserve-order` attribute in the `<test>` tag:

```xml
<test name="Sequential" preserve-order="true">
```

## 19. How do you handle test data setup and teardown?

Use `@BeforeClass`/`@AfterClass` (per class) or `@BeforeSuite`/`@AfterSuite` (per suite) to run setup/teardown methods.

## 20. Integration with Maven or Gradle

- **Maven**: Add TestNG dependency to `pom.xml`, configure Surefire plugin to pick up `testng.xml`
- **Gradle**: Add `useTestNG()` in `test { }` block with TestNG dependency
