---
title: "Top 20 JavaScript Interview Questions with Answers"
description: "Core JavaScript interview questions: hoisting, closures, let/const/var, this, async/await, promises, arrow functions, event delegation, and equality operators."
pubDatetime: 2023-07-09T00:00:00Z
tags: ["javascript", "interview", "programming", "web"]
externalUrl: "https://qamayankgupta.medium.com/top-20-javascript-interview-questions-with-answer-38074f9714ad"
---

## Table of contents

## 1. What is JavaScript?

JavaScript is a programming language primarily used for creating interactive and dynamic web content. It runs on the client-side (in the browser) and allows developers to add behavior to web pages.

## 2. What are the different data types in JavaScript?

- **Primitive types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **Object type**: objects, arrays, functions

## 3. Difference between `null` and `undefined`

- **`null`** — Intentional absence of any object value. Assigned by a programmer.
- **`undefined`** — Absence of a value or the default value when a variable hasn't been assigned.

## 4. What is hoisting?

A JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This allows you to use variables and functions before they are declared.

## 5. What are closures?

Closures are functions that have access to variables from their outer (enclosing) function even after the outer function has returned. They "remember" the environment in which they were created.

```javascript
function outer() {
  const secret = 42;
  return function inner() {
    console.log(secret); // still accessible
  };
}
const revealer = outer();
revealer(); // 42
```

## 6. Difference between `let`, `const`, and `var`

- **`let`** and **`const`** — Block-scoped (introduced in ES6)
- **`var`** — Function-scoped
- **`let`** allows reassignment; **`const`** does not

## 7. Purpose of the `this` keyword

The `this` keyword refers to the object that is currently executing the code. Its value depends on how a function is called or how an object is accessed.

## 8. What is event delegation?

Attach an event listener to a parent element and listen for events on its child elements. This helps handle events efficiently, especially with dynamically added elements.

## 9. Difference between `==` and `===`

- **`==`** — Loose equality with type coercion (`1 == '1'` is `true`)
- **`===`** — Strict equality without coercion (`1 === '1'` is `false`)

## 10. Synchronous vs asynchronous JavaScript

- **Synchronous** — Executes code line by line, blocking further execution until current operation completes
- **Asynchronous** — Allows code to run in the background without blocking subsequent code

## 11. Purpose of `async` and `await`

- **`async`** — Defines an asynchronous function
- **`await`** — Pauses execution of an async function until a Promise is resolved or rejected

```javascript
async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}
```

## 12. Error handling in JavaScript

Use `try-catch` blocks:

```javascript
try {
  riskyOperation();
} catch (err) {
  console.error("Something went wrong:", err);
}
```

## 13. What are arrow functions?

A concise syntax for JavaScript functions. Shorter syntax than regular function expressions and **lexically binds** the value of `this`.

```javascript
const add = (a, b) => a + b;
```

## 14. Purpose of `localStorage` and `sessionStorage`

- **`localStorage`** — Stores data that persists even when the browser is closed
- **`sessionStorage`** — Stores data for a specific session; cleared when the browser is closed

## 15. What are JavaScript Promises?

A way to handle asynchronous operations. They represent the eventual completion or failure of an async operation and allow you to chain actions.

```javascript
fetch("/api/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

## 16. Purpose of the `map()` function

Iterates over an array and creates a **new array** by applying a transformation to each element.

```javascript
const doubled = [1, 2, 3].map(n => n * 2); // [2, 4, 6]
```

## 17. Cross-origin requests

Handled using **CORS** (Cross-Origin Resource Sharing) or **JSONP** (for GET requests only). The server must send appropriate CORS headers.

## 18. Purpose of `setTimeout()`

Delays the execution of a function or code by a specified time interval (in milliseconds).

```javascript
setTimeout(() => console.log("Hi!"), 1000);
```

## 19. What is event bubbling?

The process where an event triggered on a child element propagates up the DOM tree, triggering parent elements' event handlers as well.

## 20. Deep copy vs shallow copy

- **Shallow copy** — New object/array that **references** the original's properties/elements
- **Deep copy** — Completely independent copy including nested objects/arrays

```javascript
// Shallow
const shallow = { ...original };
// Deep
const deep = structuredClone(original);
```
