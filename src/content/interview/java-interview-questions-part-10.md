---
title: "Java Interview Questions — Part 10 (Programs)"
description: "Classic Java programming problems: factorial, palindrome, Fibonacci, prime numbers, binary search, linked list reverse, anagrams, and array operations."
pubDatetime: 2023-07-15T00:00:00Z
tags: ["java", "programming", "interview", "algorithms", "practice"]
externalUrl: "https://qamayankgupta.medium.com/most-important-java-interview-questions-with-answer-part-10-programs-based-39970bbbd824"
---

## Table of contents

## Swap two variables without a temporary variable

```java
int a = 10;
int b = 20;
a = a + b;
b = a - b;
a = a - b;
// a = 20, b = 10
```

## Factorial of a number

```java
int number = 5;
int factorial = 1;
for (int i = 1; i <= number; i++) {
    factorial *= i;
}
// factorial = 120
```

## Check if a string is a palindrome

```java
String str = "madam";
boolean isPalindrome = true;
for (int i = 0; i < str.length() / 2; i++) {
    if (str.charAt(i) != str.charAt(str.length() - 1 - i)) {
        isPalindrome = false;
        break;
    }
}
```

## Find maximum and minimum in an array

```java
int[] numbers = {5, 10, 3, 8, 2};
int max = numbers[0];
int min = numbers[0];

for (int i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
    if (numbers[i] < min) min = numbers[i];
}
```

## Sort an array in ascending order

```java
int[] numbers = {5, 10, 3, 8, 2};
Arrays.sort(numbers);
```

## Sum of all elements in an array

```java
int[] numbers = {5, 10, 3, 8, 2};
int sum = 0;
for (int number : numbers) {
    sum += number;
}
```

## Reverse a string

```java
String str = "Hello";
String reversed = new StringBuilder(str).reverse().toString();
```

## Find prime numbers in a range

```java
int start = 1;
int end = 100;

for (int i = start; i <= end; i++) {
    boolean isPrime = true;
    if (i < 2) continue;
    for (int j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) System.out.print(i + " ");
}
```

## Remove duplicates from an array

```java
int[] numbers = {1, 2, 3, 2, 4, 1, 5};
Set<Integer> uniqueNumbers = new HashSet<>();
for (int number : numbers) {
    uniqueNumbers.add(number);
}
int[] uniqueArray = uniqueNumbers.stream().mapToInt(Integer::intValue).toArray();
```

## Count occurrences of each element in an array

```java
int[] numbers = {1, 2, 3, 2, 4, 1, 5};
Map<Integer, Integer> countMap = new HashMap<>();
for (int number : numbers) {
    countMap.put(number, countMap.getOrDefault(number, 0) + 1);
}
```

## Find the second highest number in an array

```java
int[] numbers = {5, 10, 3, 8, 2};
int max = Integer.MIN_VALUE;
int secondMax = Integer.MIN_VALUE;

for (int number : numbers) {
    if (number > max) {
        secondMax = max;
        max = number;
    } else if (number > secondMax && number < max) {
        secondMax = number;
    }
}
```

## Check if a number is prime

```java
int number = 13;
boolean isPrime = true;
if (number < 2) isPrime = false;
for (int i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
        isPrime = false;
        break;
    }
}
```

## Sum of digits in a number

```java
int number = 12345;
int sum = 0;
while (number != 0) {
    sum += number % 10;
    number /= 10;
}
// sum = 15
```

## Check if two strings are anagrams

```java
String str1 = "listen";
String str2 = "silent";
boolean isAnagram = false;

if (str1.length() == str2.length()) {
    char[] charArray1 = str1.toCharArray();
    char[] charArray2 = str2.toCharArray();
    Arrays.sort(charArray1);
    Arrays.sort(charArray2);
    isAnagram = Arrays.equals(charArray1, charArray2);
}
```

## Common elements between two arrays

```java
int[] array1 = {1, 2, 3, 4, 5};
int[] array2 = {4, 5, 6, 7, 8};
Set<Integer> commonElements = new HashSet<>();

Arrays.sort(array2);  // required for binarySearch
for (int element : array1) {
    if (Arrays.binarySearch(array2, element) >= 0) {
        commonElements.add(element);
    }
}
```

## Generate a Fibonacci series

```java
int n = 10;
int[] fibonacciSeries = new int[n];

fibonacciSeries[0] = 0;
fibonacciSeries[1] = 1;

for (int i = 2; i < n; i++) {
    fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
}
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

## Largest prime factor of a number

```java
long number = 13195;
long largestPrimeFactor = 2;

while (number % 2 == 0) {
    number /= 2;
}

for (long i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i == 0) {
        largestPrimeFactor = i;
        number /= i;
    }
}

if (number > 2) {
    largestPrimeFactor = number;
}
```

## Reverse a linked list

```java
class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; }
}

class LinkedList {
    Node head;

    void reverse() {
        Node prev = null;
        Node current = head;
        Node next = null;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        head = prev;
    }
}
```

## Binary search

```java
int[] sortedArray = {2, 4, 6, 8, 10, 12};
int target = 8;
int low = 0;
int high = sortedArray.length - 1;
int index = -1;

while (low <= high) {
    int mid = (low + high) / 2;
    if (sortedArray[mid] == target) {
        index = mid;
        break;
    } else if (sortedArray[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}
```

## Maximum occurring character in a string

```java
String str = "hello world";
int[] charCount = new int[256];

for (char c : str.toCharArray()) {
    charCount[c]++;
}

char maxChar = ' ';
int maxCount = 0;
for (int i = 0; i < charCount.length; i++) {
    if (charCount[i] > maxCount) {
        maxChar = (char) i;
        maxCount = charCount[i];
    }
}
// maxChar = 'l' (occurs 3 times)
```
