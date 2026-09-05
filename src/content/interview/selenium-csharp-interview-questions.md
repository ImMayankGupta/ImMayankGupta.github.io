---
title: "Top 20 Selenium with C# Interview Questions with Answers"
description: "Selenium WebDriver with C# interview questions: launching browsers, locators, dropdowns, alerts, frames, cookies, screenshots, waits, and CI integration."
pubDatetime: 2023-07-09T00:00:00Z
tags: ["selenium", "csharp", "webdriver", "interview", "test-automation"]
externalUrl: "https://qamayankgupta.medium.com/top-20-selenium-with-c-interview-questions-with-answer-cbf10876e9a2"
---

## Table of contents

## 1. How do you launch a browser using Selenium WebDriver in C#?

```csharp
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

IWebDriver driver = new ChromeDriver();
driver.Navigate().GoToUrl("https://www.example.com");
```

## 2. How do you locate elements in C#?

```csharp
driver.FindElement(By.Id("id"));
driver.FindElement(By.Name("name"));
driver.FindElement(By.XPath("//div[@class='foo']"));
driver.FindElement(By.CssSelector(".btn-primary"));
```

## 3. How do you perform actions on elements?

```csharp
element.Click();
element.SendKeys("text");
element.Clear();
string val = element.GetAttribute("value");
```

## 4. How do you handle dropdowns?

Use the `SelectElement` class from `OpenQA.Selenium.Support.UI`:

```csharp
using OpenQA.Selenium.Support.UI;

IWebElement dropdown = driver.FindElement(By.Id("dropdown"));
SelectElement select = new SelectElement(dropdown);
select.SelectByText("Option 1");
select.SelectByValue("value1");
select.SelectByIndex(0);
```

## 5. How do you handle alerts?

```csharp
IAlert alert = driver.SwitchTo().Alert();
alert.Accept();          // OK
alert.Dismiss();         // Cancel
string txt = alert.Text;
```

## 6. How do you handle frames and iframes?

```csharp
driver.SwitchTo().Frame(0);                // by index
driver.SwitchTo().Frame("frameName");      // by name/ID
driver.SwitchTo().DefaultContent();        // back to main
```

## 7. How do you handle multiple windows or tabs?

```csharp
string current = driver.CurrentWindowHandle;
var handles = driver.WindowHandles.ToList();
driver.SwitchTo().Window(handles[1]);
driver.SwitchTo().Window(current);
```

## 8. How do you perform mouse hover actions?

Use the `Actions` class:

```csharp
using OpenQA.Selenium.Interactions;

Actions actions = new Actions(driver);
actions.MoveToElement(element).Perform();
```

## 9. How do you capture screenshots?

```csharp
Screenshot screenshot = ((ITakesScreenshot)driver).GetScreenshot();
screenshot.SaveAsFile("path/to/screenshot.png", ScreenshotImageFormat.Png);
```

## 10. How do you handle browser cookies?

```csharp
var cookies = driver.Manage().Cookies.AllCookies;
driver.Manage().Cookies.AddCookie(new Cookie("name", "value"));
driver.Manage().Cookies.DeleteCookieNamed("cookieName");
```

## 11. How do you perform scrolling?

Use JavaScript execution:

```csharp
IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
js.ExecuteScript("window.scrollTo(0, document.body.scrollHeight)");
js.ExecuteScript("arguments[0].scrollIntoView(true);", element);
```

## 12. How do you handle synchronization / waits?

Use `WebDriverWait`:

```csharp
using OpenQA.Selenium.Support.UI;

WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
wait.Until(ExpectedConditions.ElementIsVisible(By.Id("elementId")));
```

## 13. How do you generate test reports?

Selenium doesn't have built-in reporting. Use third-party frameworks:

- **NUnit** — Native .NET test framework with reporting
- **MSTest** — Microsoft's test framework
- **SpecFlow** — BDD framework with reports
- **ExtentReports** — Rich HTML reports

## 14. How do you handle test data?

- Read from external files: Excel, CSV, JSON
- Use data providers (`[TestCase]` in NUnit, `[DataRow]` in MSTest)
- Store in variables/constants within test code

## 15. How do you handle browser navigation?

```csharp
driver.Navigate().GoToUrl("url");
driver.Navigate().Back();
driver.Navigate().Forward();
driver.Navigate().Refresh();
```

## 16. How do you resize the browser window?

```csharp
driver.Manage().Window.Maximize();
driver.Manage().Window.Size = new Size(800, 600);
```

## 17. How do you handle browser authentication prompts?

Include credentials directly in the URL:

```csharp
driver.Navigate().GoToUrl("http://username:password@example.com");
```

## 18. How do you handle browser-specific issues?

Use browser-specific options:

```csharp
ChromeOptions options = new ChromeOptions();
options.AddArgument("--start-maximized");
options.AddArgument("--headless");
IWebDriver driver = new ChromeDriver(options);
```

## 19. How do you handle file uploads?

Use `SendKeys()` to enter the file path into the file input:

```csharp
IWebElement fileInput = driver.FindElement(By.Id("fileInput"));
fileInput.SendKeys(@"C:\path\to\file.txt");
```

## 20. Best practices for Selenium + C#

- Use Page Object Model (POM) for maintainability
- Explicit waits over implicit waits or `Thread.Sleep`
- Independent, isolated tests
- Use meaningful test names
- Clean up: dispose driver in `[TearDown]` / `[OneTimeTearDown]`
- Integrate with CI (Azure DevOps, GitHub Actions, Jenkins)
