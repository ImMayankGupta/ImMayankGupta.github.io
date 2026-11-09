---
title: "Java Interview Questions — Part 1 (Core Fundamentals & JVM Architecture)"
description: "Foundational Java interview questions covering JVM, JRE, JDK, bytecode, memory architecture (Heap vs Stack), ClassLoader, Garbage Collection basics, and OOP principles."
pubDatetime: 2023-07-01T00:00:00Z
tags: ["java", "jvm", "interview", "programming", "fundamentals"]
---

## 1. What is the difference between JDK, JRE, and JVM?

- **JVM (Java Virtual Machine):** The abstract computing machine that executes compiled Java bytecode (`.class` files). It is platform-dependent and provides a runtime environment with memory management and garbage collection.
- **JRE (Java Runtime Environment):** An implementation of the JVM bundled with core runtime libraries (like `java.lang`, `java.util`) needed to **run** Java applications. It does not contain compilers or debuggers.
- **JDK (Java Development Kit):** A complete software development package that contains the JRE plus development tools such as the Java compiler (`javac`), archiver (`jar`), documentation generator (`javadoc`), and debugger (`jdb`).

```
+-------------------------------------------------------+
| JDK (Development Tools: javac, jar, jdb)              |
|   +-----------------------------------------------+   |
|   | JRE (Core Class Libraries + Runtime Support)  |   |
|   |   +---------------------------------------+   |   |
|   |   | JVM (Class Loader, Execution Engine)  |   |   |
|   |   +---------------------------------------+   |   |
|   +-----------------------------------------------+   |
+-------------------------------------------------------+
```

---

## 2. Why is Java considered platform-independent?

Java source code (`.java`) is compiled by `javac` into an intermediate representation called **bytecode** (`.class`), rather than native machine machine code.

Any system with a compatible Java Virtual Machine (JVM) installed can execute this bytecode regardless of the underlying operating system or processor architecture. This is summarized by the philosophy: **"Write Once, Run Anywhere" (WORA)**.

---

## 3. Explain the JVM Memory Model (Heap vs Stack)

| Memory Area      | What it stores                                                          | Scope & Lifecycle                                                          | Thread Safety                                        |
| :--------------- | :---------------------------------------------------------------------- | :------------------------------------------------------------------------- | :--------------------------------------------------- |
| **Stack Memory** | Method execution frames, primitive local variables, object references.  | Created when a thread or method begins; destroyed when the method returns. | Thread-safe (each thread has its own stack).         |
| **Heap Memory**  | All objects and instances created via `new`, including instance fields. | Allocated dynamically at runtime; reclaimed by the Garbage Collector.      | Shared among all threads (requires synchronization). |
| **Metaspace**    | Class metadata, static variables, method bytecodes, constant pool.      | Replaces PermGen (Java 8+); uses native off-heap memory.                   | Shared across JVM.                                   |

---

## 4. How does the JVM ClassLoader work?

The JVM loads compiled classes dynamically into memory using three standard class loaders following the **Delegation Hierarchy Principle**:

1. **Bootstrap ClassLoader:** Written in native C/C++; loads core Java runtime classes from `<JAVA_HOME>/lib` (e.g., `rt.jar`, `java.base`).
2. **Platform / Extension ClassLoader:** Loads standard extensions from `<JAVA_HOME>/lib/ext` or modular runtimes.
3. **Application / System ClassLoader:** Loads classes specified on the application's classpath (`-cp` or environment variable).

When a class is requested, the request is delegated upward to the parent loader before the child attempts to load it.

---

## 5. What are the four core principles of OOP?

1. **Encapsulation:** Bundling data (fields) and methods operating on that data into a single unit (class), while restricting direct access using access modifiers (`private`, `protected`, `public`).
2. **Abstraction:** Hiding complex implementation details and exposing only essential functional interfaces (via `interface` and `abstract class`).
3. **Inheritance:** Enabling one class (subclass) to inherit fields and behaviors from another class (superclass) using `extends`, promoting code reuse.
4. **Polymorphism:** Allowing objects to be treated as instances of their parent type.
   - _Compile-time (Static):_ Method overloading.
   - _Runtime (Dynamic):_ Method overriding via virtual method dispatch.

---

## 6. What is the difference between Primitive Data Types and Wrapper Classes?

Java has 8 primitive data types (`byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, `char`) that store raw values directly in memory for high performance.

**Wrapper classes** (`Integer`, `Double`, `Boolean`, etc.) encapsulate primitives into full objects, allowing them to:

- Be used within Java Collections (e.g., `List<Integer>`, not `List<int>`).
- Represent `null` values in databases and APIs.
- Provide utility methods (`Integer.parseInt()`, `Double.valueOf()`).

Java automatically converts between primitives and wrappers via **Autoboxing** and **Unboxing**.

---

## 7. How does Garbage Collection work in Java?

Garbage Collection (GC) is the automated memory management daemon process in the JVM that identifies and deletes unreferenced objects in Heap memory to free resources.

The heap is organized into generations based on the **Weak Generational Hypothesis** (most objects die shortly after allocation):

```
+-------------------------------------------------------+
| Young Generation                                      | Old Generation        |
| [Eden Space] -> [Survivor S0] -> [Survivor S1]        | (Tenured Space)       |
+-------------------------------------------------------+
```

1. **Minor GC:** Collects short-lived objects in the Young Generation (Eden space). Surviving objects move to Survivor spaces and eventually get promoted to Old Generation.
2. **Major / Full GC:** Scans and cleans the Old Generation.
3. Common GC Algorithms: **G1 GC** (default in modern Java), **ZGC** (ultra-low latency), and **Parallel GC** (high throughput).

---

## 8. Why is String immutable in Java?

In Java, `String` objects cannot be modified after creation. If you alter a string, a new `String` object is allocated in the **String Constant Pool**.

Reasons for immutability:

- **Security:** Strings represent sensitive information like database connection URLs, network sockets, usernames, and passwords.
- **Thread Safety:** Multiple threads can share strings without synchronization.
- **Caching & Memory Efficiency:** Allows String interning in the String Pool to conserve memory.
- **HashCode Caching:** Since the value cannot change, `hashCode()` is computed once and cached, making Strings ideal keys for `HashMap`.
