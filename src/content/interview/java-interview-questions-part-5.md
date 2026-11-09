---
title: "Java Interview Questions — Part 5 (Collections Framework Deep Dive)"
description: "In-depth Java Collections Framework questions: List vs Set vs Map, ArrayList vs LinkedList, HashMap internals, hash collisions, ConcurrentHashMap, and Comparable vs Comparator."
pubDatetime: 2023-08-01T00:00:00Z
tags: ["java", "collections", "data-structures", "interview", "programming"]
---

## 1. What is the Java Collections Framework Hierarchy?

The Java Collections Framework (`java.util`) provides standard architectures for managing groups of objects:

```
               Collection (Interface)
              /          |           \
             /           |            \
       List (Interface) Set (Interface) Queue (Interface)
         - ArrayList      - HashSet       - PriorityQueue
         - LinkedList     - TreeSet       - ArrayDeque
         - Vector         - LinkedHashSet

       Map (Interface - Independent Hierarchy)
         - HashMap
         - TreeMap
         - LinkedHashMap
         - ConcurrentHashMap
```

---

## 2. Differentiate between `List`, `Set`, and `Map`

| Feature          | `List`                    | `Set`                                          | `Map`                                          |
| :--------------- | :------------------------ | :--------------------------------------------- | :--------------------------------------------- |
| **Duplicates**   | Allows duplicates         | Does not allow duplicates                      | Duplicate values allowed; unique keys required |
| **Ordering**     | Insertion order preserved | Unordered (except `LinkedHashSet` / `TreeSet`) | Unordered (except `LinkedHashMap` / `TreeMap`) |
| **Null Values**  | Allows multiple nulls     | Allows single null (none in `TreeSet`)         | Allows 1 null key & multiple null values       |
| **Key Examples** | `ArrayList`, `LinkedList` | `HashSet`, `TreeSet`                           | `HashMap`, `TreeMap`                           |

---

## 3. `ArrayList` vs `LinkedList`

| Characteristic                    | `ArrayList`                               | `LinkedList`                                   |
| :-------------------------------- | :---------------------------------------- | :--------------------------------------------- |
| **Underlying Structure**          | Resizable dynamic array                   | Doubly-linked list node chain                  |
| **Random Access (`get(i)`)**      | $O(1)$ fast indexed access                | $O(n)$ must traverse nodes                     |
| **Insertion / Deletion (Middle)** | $O(n)$ due to element shifting            | $O(1)$ once target pointer is found            |
| **Memory Overhead**               | Low (contiguous memory blocks)            | Higher (stores node pointers: previous & next) |
| **Best Used For**                 | Read-heavy or sequential append workflows | Heavy frequent insertions/deletions at ends    |

---

## 4. How does `HashMap` work internally in Java?

A `HashMap` stores key-value pairs using **hashing** and an array of buckets (`Node<K, V>[] table`).

### Insertion (`put(key, value)`) Process:

1. Calculates hash: `hash = (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16)`.
2. Computes bucket index: `index = (n - 1) & hash`.
3. If the bucket is empty, a new `Node` is placed.
4. **Collision Resolution:** If a node already exists:
   - Uses `equals()` to check if the key matches. If true, overwrites the value.
   - If false, chains the new node using a **Linked List**.
   - **Treeification (Java 8+):** If bucket entries exceed threshold `TREEIFY_THRESHOLD = 8` and table capacity $\ge 64$, the linked list converts into a **Red-Black Tree** to keep worst-case lookup at $O(\log n)$ instead of $O(n)$.

---

## 5. What is the contract between `equals()` and `hashCode()`?

If you override `equals()`, you **must** also override `hashCode()`.

1. **Rule 1:** If `objA.equals(objB) == true`, then `objA.hashCode() == objB.hashCode()` must be strictly true.
2. **Rule 2:** If `objA.hashCode() == objB.hashCode()`, the two objects are **not** necessarily equal (hash collision).
3. If violated, hash-based collections (`HashMap`, `HashSet`) will fail to find or retrieve stored keys correctly.

---

## 6. `HashMap` vs `HashTable` vs `ConcurrentHashMap`

| Feature                   | `HashMap`                               | `HashTable`                                 | `ConcurrentHashMap`                              |
| :------------------------ | :-------------------------------------- | :------------------------------------------ | :----------------------------------------------- |
| **Thread Safety**         | Not thread-safe                         | Thread-safe (coarse method locks)           | Thread-safe (fine-grained lock striping & CAS)   |
| **Null Keys / Values**    | Allows 1 null key, multiple null values | Does not allow null keys or values          | Does not allow null keys or values               |
| **Performance**           | Very high (unsynchronized)              | Poor under concurrency (entire table locks) | High throughput; locks only specific bucket bins |
| **Modern Recommendation** | Default for single-threaded             | Legacy (avoid in modern Java)               | Standard for multithreaded concurrent pipelines  |

---

## 7. `Comparable` vs `Comparator`

```java
// Comparable: Natural ordering within the class itself
public class Employee implements Comparable<Employee> {
    private int id;
    @Override
    public int compareTo(Employee other) {
        return Integer.compare(this.id, other.id);
    }
}

// Comparator: Custom external sorting strategies
Comparator<Employee> byName = (e1, e2) -> e1.getName().compareTo(e2.getName());
Collections.sort(employees, byName);
```

- **`Comparable` (`compareTo(T o)`):** Defines default natural ordering; modifies the original class in `java.lang`.
- **`Comparator` (`compare(T o1, T o2)`):** Defines custom or multiple sorting criteria; defined externally in `java.util`.
