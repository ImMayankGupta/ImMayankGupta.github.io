---
title: "Java Interview Questions — Part 2 (OOP & Access Modifiers)"
description: "Core Java OOP interview questions: final vs finally vs finalize, abstract class vs interface, access modifiers, method overloading/overriding, and inheritance."
pubDatetime: 2023-07-15T00:00:00Z
tags: ["java", "oop", "interview", "programming", "fundamentals"]
externalUrl: "https://qamayankgupta.medium.com/most-important-java-interview-questions-with-answer-part-2-ce4220f4cf96"
---

## Table of contents

## Difference between `final`, `finally`, and `finalize`

- **`final`** — Keyword used to define constants, methods that cannot be overridden, or classes that cannot be subclassed
- **`finally`** — Block following a try-catch, executed regardless of whether an exception is thrown
- **`finalize`** — Method in the Object class called by the garbage collector before an object is destroyed

## Abstract class vs interface

- **Abstract class** can have both abstract and non-abstract methods and can provide default implementations
- **Interface** can only have abstract methods (Java 8+ allows default methods) and cannot provide any implementation. Defines a contract that classes implementing must follow

## `equals()` vs `==`

- **`equals()`** — Compares the contents of two objects for equality
- **`==`** — Compares the memory addresses (references) to check if they refer to the same instance

## Access modifiers in Java

Four access modifiers:

- **`public`** — Access from anywhere
- **`protected`** — Access within the same package or subclasses
- **`private`** — Access only within the same class
- **default** (no modifier) — Access within the same package

## Method overloading

Defining multiple methods with the **same name** but **different parameter types** or **number of parameters**. Resolved at **compile-time**.

```java
public class Calculator {
    public int add(int a, int b) { return a + b; }
    public double add(double a, double b) { return a + b; }
    public int add(int a, int b, int c) { return a + b + c; }
}
```

## Method overriding

Occurs when a subclass provides its own implementation of a method already defined in its superclass. Method must have **same name, return type, and parameter list**. Resolved at **runtime**.

```java
class Animal {
    public void sound() { System.out.println("Some sound"); }
}
class Dog extends Animal {
    @Override
    public void sound() { System.out.println("Woof"); }
}
```

## String vs StringBuilder vs StringBuffer

- **`String`** — Immutable class representing a sequence of characters
- **`StringBuilder`** — Mutable, efficient, **not thread-safe** (faster)
- **`StringBuffer`** — Mutable, efficient, **thread-safe** (synchronized methods)

## Java package

A mechanism for organizing related classes and interfaces:

- Namespace management
- Improves code maintainability
- Helps avoid naming conflicts

## ArrayList vs LinkedList

- **`ArrayList`** — Resizable array; fast access by index; slower insertion/deletion
- **`LinkedList`** — Doubly linked list; fast insertion/deletion; slower access by index

## static vs instance variables/methods

- **`static`** — Belongs to the class itself, shared among all instances
- **Instance** — Belongs to individual instances, separate values for each

## Wrapper classes

Wrap primitive data types and provide additional methods:

| Primitive | Wrapper |
| --- | --- |
| `int` | `Integer` |
| `boolean` | `Boolean` |
| `char` | `Character` |
| `double` | `Double` |

## `equals()` method

Compares the contents of two objects for equality. Typically overridden in custom classes to provide meaningful equality comparison based on specific attributes.

## `hashCode()` method

Generates a hash code value for an object. Commonly used in hashing-based data structures like `HashMap` to efficiently store and retrieve objects.

**Contract:** If `a.equals(b)` is true, then `a.hashCode() == b.hashCode()`.

## NullPointerException

A runtime exception thrown when a program tries to access or invoke a method on a null object reference.

## `throw` vs `throws`

- **`throw`** — Manually throw an exception within a method
- **`throws`** — Method signature declaration indicating the method may throw one or more exceptions

## `implements` vs `extends`

- **`implements`** — A class implementing an interface
- **`extends`** — A class inheriting from another class (or an interface extending another interface)

## `this` keyword

Refers to the current instance of a class. Used to:

- Distinguish between instance and local variables with same name
- Invoke constructors within a class
- Pass current object as a parameter

## `super` keyword

Refers to the superclass. Used to:

- Access superclass methods and constructors
- Invoke the superclass's constructor from a subclass (`super()`)
- Reference superclass fields when hidden by subclass fields
