---
title: "Top 20 Appium Interview Questions with Answers"
description: "Appium mobile automation interview questions: architecture, native/hybrid/web apps, gestures, desired capabilities, contexts, locators, and parallel execution."
pubDatetime: 2023-07-23T00:00:00Z
tags: ["appium", "mobile-testing", "ios", "android", "interview"]
externalUrl: "https://qamayankgupta.medium.com/top-20-appium-interview-questions-with-answer-76cc6de33138"
---

## Table of contents

## 1. What is Appium?

Appium is an open-source mobile application automation testing tool that allows you to automate **native**, **hybrid**, and **mobile web** applications on iOS and Android platforms. It uses the WebDriver protocol.

## 2. Types of mobile applications Appium supports

- **Native Apps** — Built for a specific platform (iOS or Android)
- **Hybrid Apps** — Combination of native and web elements
- **Mobile Web Apps** — Accessed via a mobile browser

## 3. How does Appium automate mobile applications?

Uses the WebDriver protocol to send commands via the Appium server, which forwards them to the device's automation API:

- **XCUITest** for iOS
- **UiAutomator2** for Android

## 4. Prerequisites for running Appium tests

- Appium Server installed on the machine
- Android SDK (for Android) or Xcode (for iOS)
- Appium client libraries in your preferred language
- A mobile device or emulator/simulator

## 5. How do you inspect mobile elements in Appium?

Use the **Appium Inspector** tool or **Appium Desktop**. These allow viewing the app hierarchy, identifying elements, and generating automation code.

## 6. Difference between Appium and Selendroid

- Appium is **cross-platform** (iOS + Android); Selendroid is Android-only
- Appium uses **WebDriver protocol**; Selendroid uses JSON Wire Protocol
- Appium is actively maintained; Selendroid is legacy

## 7. How do you handle mobile gestures?

Use `TouchAction` and `MultiTouchAction` classes (older) or W3C Actions API (newer):

```java
new TouchAction(driver)
  .press(PointOption.point(100, 200))
  .moveTo(PointOption.point(100, 500))
  .release()
  .perform();
```

## 8. What are Desired Capabilities?

A set of key-value pairs used to configure the Appium server for test execution. Specifies device and app settings:

```json
{
  "platformName": "Android",
  "deviceName": "Pixel_7",
  "app": "/path/to/app.apk",
  "appPackage": "com.example",
  "appActivity": ".MainActivity"
}
```

## 9. How do you install an app on the device?

Use the `app` capability pointing to the app file:

- `.apk` for Android
- `.ipa` or `.app` for iOS

Or use `appPackage` + `appActivity` for a pre-installed Android app.

## 10. Locators supported by Appium

- **ID** — `By.id()`
- **Name** — `By.name()`
- **XPath** — `By.xpath()`
- **Accessibility ID** (iOS) — `AppiumBy.accessibilityId()`
- **UIAutomator** (Android) — `AppiumBy.androidUIAutomator()`
- **Class Name** — `By.className()`
- **iOS Predicate String** — `AppiumBy.iOSNsPredicateString()`

## 11. How do you switch between contexts?

Use the `context()` method to switch between `NATIVE_APP` and `WEBVIEW_*`:

```java
Set<String> contexts = driver.getContextHandles();
for (String context : contexts) {
  if (context.contains("WEBVIEW")) {
    driver.context(context);
  }
}
```

## 12. Appium architecture

Three main components:

1. **Appium Client** — Sends automation commands (test code)
2. **Appium Server** — Node.js HTTP server, receives and forwards commands
3. **Mobile Device** — Executes commands via automation API (XCUITest/UiAutomator2)

```
[Test Code] → [Appium Client] → [Appium Server] → [Device Automation API] → [App]
```

## 13. How do you handle alerts and pop-ups?

```java
driver.switchTo().alert().accept();
driver.switchTo().alert().dismiss();
String text = driver.switchTo().alert().getText();
```

## 14. How do you run Appium tests in parallel?

Use test frameworks (TestNG, JUnit, pytest) with multiple Appium server instances on different ports, each targeting a different device.

```xml
<suite name="Parallel Devices" parallel="tests" thread-count="3">
```

## 15. How do you perform scroll actions?

Use `mobile: scrollGesture` (new W3C) or UiAutomator (Android):

```java
((JavascriptExecutor) driver).executeScript("mobile: scrollGesture",
  ImmutableMap.of(
    "left", 100, "top", 100, "width", 200, "height", 200,
    "direction", "down", "percent", 3.0
  ));
```

## 16. How do you capture screenshots?

```java
File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(src, new File("screenshot.png"));
```

## 17. Set up Appium environment for iOS testing

- Install **Xcode** on a Mac
- Set up a **simulator** or connect a real device
- Install Appium client libraries
- Have an iOS app (`.ipa`) or App Store access
- Configure code signing for real devices

## 18. What is the Appium Inspector tool?

A GUI tool provided by Appium that lets you:

- Inspect mobile elements
- Record user actions
- Generate automation scripts in various languages

## 19. How do you handle timeouts?

- **Implicit wait** — Global timeout for element searches
- **Explicit wait** — Wait for a specific condition using `WebDriverWait` + `ExpectedConditions`

```java
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("btn")));
```

## 20. How do you generate test reports?

Appium doesn't have built-in reporting. Integrate with:

- **TestNG** or **JUnit** for HTML reports
- **Allure** for rich, filterable reports
- **ExtentReports** for detailed test analytics
