---
title: "Java Interview Questions — Part 3 (Strings)"
description: "Java String interview questions: String vs StringBuilder vs StringBuffer, string manipulation, comparison, immutability, and common operations."
pubDatetime: 2023-07-15T00:00:00Z
tags: ["java", "strings", "interview", "programming"]
externalUrl: "https://qamayankgupta.medium.com/most-important-java-interview-questions-with-answer-part-3-f06ddf512b2b"
---

## Table of contents

## What is a String in Java?

A string in Java is an object that represents a sequence of characters. **String objects are immutable** — their values cannot be changed after they are created.

## String vs StringBuilder vs StringBuffer

- **`String`** — Immutable, cannot be modified once created
- **`StringBuilder`** — Mutable, efficient way to modify strings without creating new objects. **Not thread-safe**
- **`StringBuffer`** — Similar to StringBuilder but **thread-safe**, suitable for multi-threaded environments

## How to create a string

Using a string literal (recommended, uses string pool):

```java
String str = "Hello, World!";
```

Using the `new` keyword (creates new object outside pool):

```java
String str = new String("Hello, World!");
```

## `equals()` vs `==` for string comparison

- **`equals()`** — Compares the contents of two string objects for equality
- **`==`** — Compares the object references (memory addresses)

```java
String s1 = "hello";
String s2 = "hello";
String s3 = new String("hello");

s1 == s2;         // true (string pool)
s1 == s3;         // false (different objects)
s1.equals(s3);    // true (content equal)
```

## How to concatenate strings

Using the `+` operator:

```java
String result = str1 + str2;
```

Using the `concat()` method:

```java
String result = str1.concat(str2);
```

## Convert to uppercase or lowercase

```java
String upper = str.toUpperCase();
String lower = str.toLowerCase();
```

## Check if a string contains a substring

```java
if (str.contains("substring")) {
    // substring found
}
```

## Case-insensitive comparison

```java
str1.equalsIgnoreCase(str2);
// Or convert both to same case first
str1.toLowerCase().equals(str2.toLowerCase());
```

## Check if a string starts or ends with a substring

```java
if (str.startsWith("prefix")) { /* ... */ }
if (str.endsWith("suffix")) { /* ... */ }
```

## Find the index of a substring

```java
int index = str.indexOf("substring");
// Returns -1 if not found
```

## Split a string

```java
String[] parts = str.split(",");
```

## Extract a substring

```java
String sub = str.substring(startIndex, endIndex);
String subFromIndex = str.substring(startIndex);
```

## Reverse a string

Using `StringBuilder`:

```java
String reversed = new StringBuilder(str).reverse().toString();
```

Or manually character by character.

## Convert integer/data types to string

```java
String str = String.valueOf(number);
String str = "" + number;
String str = Integer.toString(number);
```

## Convert string to integer/data types

```java
int number = Integer.parseInt(str);
double d = Double.parseDouble(str);
boolean b = Boolean.parseBoolean(str);
```

## Remove leading and trailing whitespace

```java
String trimmed = str.trim();
String stripped = str.strip();  // Java 11+, handles Unicode
```

## Replace characters or substrings

```java
String replaced = str.replace("old", "new");
String replacedRegex = str.replaceAll("\\d+", "#");  // regex
```

## Check if a string is empty or null

```java
if (str == null) { /* null */ }
if (str.isEmpty()) { /* empty */ }
if (str.isBlank()) { /* Java 11+, empty or only whitespace */ }
```

## Iterate over each character

```java
char[] chars = str.toCharArray();
for (char c : chars) {
    // Process each character
}

// Or:
for (int i = 0; i < str.length(); i++) {
    char c = str.charAt(i);
}
```

## Compare strings lexicographically

```java
int result = str1.compareTo(str2);
if (result < 0)      { /* str1 < str2 */ }
else if (result > 0) { /* str1 > str2 */ }
else                 { /* equal */ }
```

## Check if a string is a palindrome

```java
public static boolean isPalindrome(String s) {
    return s.equals(new StringBuilder(s).reverse().toString());
}
```

## Find occurrences of a substring

```java
int count = (str.length() - str.replace(sub, "").length()) / sub.length();
```

## Convert to character array

```java
char[] chars = str.toCharArray();
```

## Remove a specific character

```java
String removed = str.replace("x", "");
```

## Check if two strings are anagrams

```java
public static boolean isAnagram(String s1, String s2) {
    char[] a = s1.toCharArray();
    char[] b = s2.toCharArray();
    Arrays.sort(a);
    Arrays.sort(b);
    return Arrays.equals(a, b);
}
```
