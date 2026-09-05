---
title: "Java Interview Questions — Part 6 (Advanced Concepts)"
description: "Advanced Java interview questions: transient, volatile, inner classes, lambda expressions, Stream API, Java Memory Model, composition vs inheritance."
pubDatetime: 2023-07-15T00:00:00Z
tags: ["java", "advanced", "interview", "streams", "concurrency"]
externalUrl: "https://qamayankgupta.medium.com/most-important-java-interview-questions-with-answer-part-6-2572692b3a4a"
---

## Table of contents

## Purpose of the `transient` keyword

Indicates that a field should **not be serialized** when an object is converted to a byte stream. Typically for sensitive or temporary data that doesn't need to be persisted. When an object is deserialized, transient fields are set to default values (`null` for objects, `0` for integers).

```java
public class User implements Serializable {
    private String name;
    private transient String password;  // won't be serialized
}
```

## Different types of inner classes

Four types:

- **Static nested class** — Static class defined within another class; no access to outer instance variables/methods
- **Non-static nested class (inner class)** — Non-static class within another class; has access to outer instance members
- **Local class** — Class defined within a method or code block; limited scope; can access variables of enclosing block
- **Anonymous class** — Class defined without a name, instantiated at declaration; typically for one-time use (event handlers)

## Purpose of the `volatile` keyword

Indicates a variable's value may be modified by multiple threads. Ensures changes are **immediately visible** to all threads. The compiler and runtime take extra precautions for memory visibility and synchronization.

```java
private volatile boolean stopFlag = false;
```

## Purpose of the `finalize()` method

Called by the garbage collector when an object is about to be reclaimed. Provides an opportunity to release resources before garbage collection. **Not recommended**: use `try-finally` or `try-with-resources` instead.

## Composition vs inheritance

- **Composition** — "has-a" relationship where a class contains other objects. More flexible, modular. Composed objects can be swapped or modified easily
- **Inheritance** — "is-a" relationship where a class inherits from a superclass. Promotes code reuse

**Favor composition over inheritance** for flexibility and to avoid limitations of single inheritance.

## Benefits of the Stream API

Introduced in Java 8, provides a functional programming approach to processing collections:

- Concise and expressive code
- Improved code readability
- Better performance through parallel processing (`parallelStream()`)
- Combinable high-level operations: `filter`, `map`, `reduce`, `collect`

```java
int sum = numbers.stream()
    .filter(n -> n > 0)
    .mapToInt(Integer::intValue)
    .sum();
```

## `==` vs `.equals()`

- **`==`** — Compares object references (memory addresses); primitive comparison
- **`.equals()`** — Compares contents of two objects; can be overridden for custom equality

## Lambda expressions

Anonymous functions introduced in Java 8. Allow passing behavior as a method argument.

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.forEach(n -> System.out.println(n));

// Or method reference:
numbers.forEach(System.out::println);
```

## ArrayList vs LinkedList (deeper)

- **ArrayList** — Resizable array; O(1) random access; O(n) insertion/deletion mid-list
- **LinkedList** — Doubly-linked list; O(n) random access; O(1) insertion/deletion at known position

**Use ArrayList** for read-heavy scenarios; **LinkedList** for insert-heavy scenarios in the middle.

## `synchronized` vs `volatile`

- **`synchronized`** — Provides mutual exclusion and thread synchronization. Ensures only one thread executes a synchronized block/method at a time
- **`volatile`** — Declares a variable as "volatile," indicating its value may be modified by multiple threads. Ensures visibility, but **not atomicity**

## Java Memory Model (JMM)

Defines rules and guarantees for how threads interact with memory in a multi-threaded environment. Specifies:

- Visibility of changes made by one thread to other threads
- Atomicity guarantees for shared variables
- Ordering guarantees for operations (happens-before relationship)

Ensures predictable behavior in concurrent programs.
