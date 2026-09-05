---
title: "Java Interview Questions — Part 9 (Scenario-Based)"
description: "Scenario-based Java interview questions: banking, student management, shopping cart, car rental, library — practical class design and method implementation."
pubDatetime: 2023-07-15T00:00:00Z
tags: ["java", "scenario-based", "interview", "oop", "design"]
externalUrl: "https://qamayankgupta.medium.com/most-important-java-interview-questions-with-answer-part-9-scenario-based-353eded849e0"
---

## Table of contents

## Banking application — Fund transfer

> Write a Java code snippet to implement fund transfer functionality between accounts.

```java
public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void transferFunds(double amount, BankAccount destinationAccount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Invalid amount for fund transfer");
        }
        if (this.balance < amount) {
            throw new IllegalStateException("Insufficient funds");
        }
        this.balance -= amount;
        destinationAccount.deposit(amount);
    }

    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Invalid amount for deposit");
        }
        this.balance += amount;
    }

    public double getBalance() {
        return this.balance;
    }
}
```

## Student Management System — Student class

> Write a Java class to implement the Student class with appropriate attributes and methods.

```java
public class Student {
    private String studentId;
    private String firstName;
    private String lastName;
    private int age;

    public Student(String studentId, String firstName, String lastName, int age) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public String getStudentId() { return studentId; }
    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public void printDetails() {
        System.out.println("Student ID: " + studentId);
        System.out.println("Name: " + firstName + " " + lastName);
        System.out.println("Age: " + age);
    }
}
```

## E-commerce — Shopping cart with total price

> Write a Java code snippet to calculate the total price of items in a cart.

```java
public class ShoppingCart {
    private List<Item> items;

    public ShoppingCart() {
        this.items = new ArrayList<>();
    }

    public void addItem(Item item) { items.add(item); }
    public void removeItem(Item item) { items.remove(item); }

    public double calculateTotalPrice() {
        double totalPrice = 0.0;
        for (Item item : items) {
            totalPrice += item.getPrice();
        }
        return totalPrice;
    }
}

public class Item {
    private String name;
    private double price;

    public Item(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() { return name; }
    public double getPrice() { return price; }
}
```

## Car Rental System — RentalCar class

> Write a Java class to implement a RentalCar class.

```java
public class RentalCar {
    private String carId;
    private String make;
    private String model;
    private int year;
    private boolean rented;

    public RentalCar(String carId, String make, String model, int year) {
        this.carId = carId;
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }

    public String getCarId() { return carId; }
    public String getMake() { return make; }
    public String getModel() { return model; }
    public int getYear() { return year; }
    public boolean isRented() { return rented; }

    public void rentCar() {
        if (rented) {
            throw new IllegalStateException("Car is already rented");
        }
        rented = true;
    }

    public void returnCar() {
        if (!rented) {
            throw new IllegalStateException("Car is not currently rented");
        }
        rented = false;
    }
}
```

## Social Media Platform — Count likes on a post

> Write a Java method to count the number of likes on a post.

```java
public int countLikes(Post post) {
    return post.getLikes().size();
}
```

## Payment Processing — Validate credit card number

> Write a Java method to validate a credit card number.

```java
public boolean validateCreditCardNumber(String creditCardNumber) {
    // Luhn algorithm implementation
    int sum = 0;
    boolean alternate = false;
    for (int i = creditCardNumber.length() - 1; i >= 0; i--) {
        int n = Character.getNumericValue(creditCardNumber.charAt(i));
        if (alternate) {
            n *= 2;
            if (n > 9) n = (n % 10) + 1;
        }
        sum += n;
        alternate = !alternate;
    }
    return sum % 10 == 0;
}
```

## Student Grading — Calculate average grade

> Write a Java method to calculate the average grade for a student.

```java
public double calculateAverageGrade(List<Integer> grades) {
    int sum = 0;
    for (int grade : grades) {
        sum += grade;
    }
    return (double) sum / grades.size();
}
```

## Library Management — Check book availability

> Write a Java method to check if a book is available for borrowing.

```java
public boolean isBookAvailable(String bookTitle) {
    Book book = bookRepository.findByTitle(bookTitle);
    return book != null && !book.isBorrowed();
}
```
