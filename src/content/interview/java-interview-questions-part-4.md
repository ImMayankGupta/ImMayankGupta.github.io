---
title: "Java Interview Questions — Part 4 (OOP Fundamentals)"
description: "Java OOP interview questions: classes, objects, inheritance, encapsulation, polymorphism, abstraction, composition vs aggregation, and access modifiers."
pubDatetime: 2023-07-15T00:00:00Z
tags: ["java", "oop", "interview", "inheritance", "polymorphism"]
externalUrl: "https://qamayankgupta.medium.com/most-important-java-interview-questions-with-answer-part-4-ecc4d48508c9"
---

## Table of contents

## What is an object?

An object is an instance of a class that represents a real-world entity with its own state and behavior.

## What is a class?

A class is a blueprint or template that defines the properties (attributes) and behaviors (methods) of objects.

```java
public class Car {
    // Attributes (state)
    String color;
    int speed;

    // Behavior
    void accelerate() { speed += 10; }
}

Car myCar = new Car();  // Instance
```

## What is inheritance?

A mechanism that allows a class to inherit properties and methods from another class. Enables code reuse and hierarchical class organization.

```java
class Vehicle {
    void start() { /* ... */ }
}
class Car extends Vehicle {
    void drive() { /* ... */ }
}
```

## Inheritance vs composition

- **Inheritance** — "**is-a**" relationship where a subclass inherits from a superclass
- **Composition** — "**has-a**" relationship where a class contains other objects as its members

**Rule of thumb:** Favor composition over inheritance for flexibility.

## What is encapsulation?

Bundling of data (attributes) and methods that operate on that data into a single unit called an object. Provides **data hiding** and protects the internal state from external access.

```java
public class BankAccount {
    private double balance;  // hidden

    public double getBalance() { return balance; }
    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
}
```

## What is polymorphism?

The ability of objects of different classes to respond to the same method in different ways. Allows for code flexibility and generic code.

**Two forms:**

- **Compile-time** — Method overloading
- **Runtime** — Method overriding

## Method overriding

Occurs when a subclass provides its own implementation of a method already defined in its superclass. Requires **same name, return type, and parameter list**.

```java
class Animal {
    public void sound() { System.out.println("Some sound"); }
}
class Dog extends Animal {
    @Override
    public void sound() { System.out.println("Woof"); }
}
```

## Method overloading

The ability to define multiple methods with the **same name** but **different parameters** in the same class. Methods must differ in number, order, or types of parameters.

## Method overloading vs overriding

- **Overloading** — Resolved at **compile-time** based on method signature
- **Overriding** — Resolved at **runtime** based on the actual object type

## What is abstraction?

The process of hiding the internal details and complexities of an object and providing only the essential information. Achieved via **abstract classes** and **interfaces**.

## What is an abstract class?

A class that cannot be instantiated and is meant to be subclassed. Can have both abstract and non-abstract methods. Subclasses must provide implementations for the abstract methods.

```java
abstract class Shape {
    abstract double area();  // must be implemented
    void describe() { System.out.println("A shape"); }
}
```

## What is an interface?

A reference type that defines a set of methods a class must implement. Allows **multiple inheritance of type** and is used to achieve abstraction and provide a contract.

```java
interface Drawable {
    void draw();
}
class Circle implements Drawable {
    public void draw() { /* ... */ }
}
```

## Abstract class vs interface

- **Abstract class** — Can have instance variables, constructors, and non-abstract methods
- **Interface** — Cannot have instance variables (only constants) or constructors
- A class can implement **multiple interfaces** but can only extend **a single abstract class**

## Composition vs aggregation

- **Composition** — Strong "has-a" relationship. Lifecycle of contained object is managed by the container. Container dies → contained dies.
- **Aggregation** — Weak "has-a" relationship. Contained object can exist independently of the container.

**Example:**

- House **has-a** Room — composition (room can't exist without house)
- Team **has-a** Player — aggregation (player can join another team)

## Access modifiers

Control the visibility and accessibility of classes, variables, methods, and constructors:

- **`public`** — Access from anywhere
- **`protected`** — Access within the same package or subclasses
- **`private`** — Access only within the same class
- **default** (no modifier) — Access within the same package

## `super` keyword

Refers to the superclass of a class. Used to:

- Access superclass members
- Call superclass constructors
- Differentiate between superclass and subclass members with the same name

## `this` keyword

A reference to the current object. Used to:

- Refer to instance variables
- Invoke current class methods
- Invoke current class constructors

## Static variable

A variable that belongs to the **class** rather than instances. Shared among all instances. Accessed using the class name.

```java
class Counter {
    static int count = 0;  // shared
    int id;                // per-instance
}
```

## Static method

A method that belongs to the **class** rather than instances. Called using the class name without creating an instance. Cannot access instance variables directly.

```java
Math.max(1, 2);  // static method call
```
