---
title: "Top 20 SQL Interview Questions with Answers"
description: "Core SQL interview questions covering DDL/DML/DQL/DCL, SELECT, JOINs, GROUP BY, primary/foreign keys, views, ACID, and subqueries."
pubDatetime: 2023-08-06T00:00:00Z
tags: ["sql", "database", "interview", "fundamentals"]
externalUrl: "https://qamayankgupta.medium.com/top-20-sql-interview-questions-with-answer-626947575642"
---

## Table of contents

## 1. What is SQL?

SQL (Structured Query Language) is a domain-specific language used to manage relational databases. It enables users to perform operations like querying, updating, and managing data in databases.

## 2. What are the different types of SQL commands?

SQL commands can be categorized into four types:

- **DDL** (Data Definition Language): Used to define and manage database objects — `CREATE`, `ALTER`, `DROP`
- **DML** (Data Manipulation Language): Used to manipulate data — `INSERT`, `UPDATE`, `DELETE`
- **DQL** (Data Query Language): Used to retrieve data — `SELECT`
- **DCL** (Data Control Language): Used to control access — `GRANT`, `REVOKE`

## 3. What is the difference between SQL and MySQL?

SQL is a language used to interact with relational databases, whereas MySQL is an open-source RDBMS that uses SQL as its language to manage databases.

## 4. What is the SELECT statement?

The SELECT statement is used to retrieve data from a database. It is one of the fundamental SQL commands.

## 5. How do you filter records in a SELECT statement?

Use the `WHERE` clause in the SELECT statement to filter records based on specified conditions.

## 6. What is the difference between the WHERE clause and HAVING clause?

- `WHERE` — used with SELECT/UPDATE/DELETE to filter rows **before** grouping or aggregating
- `HAVING` — used with `GROUP BY` to filter results **after** grouping or aggregating

## 7. What is the ORDER BY clause?

The `ORDER BY` clause is used to sort the result set in ascending or descending order based on specified columns.

## 8. What are SQL functions?

SQL functions are built-in or user-defined functions used to perform calculations, manipulate data, and retrieve specific information from the database.

## 9. What is a JOIN in SQL?

JOIN is used to combine rows from two or more tables based on a related column between them.

## 10. What are the different types of JOINs?

- `INNER JOIN`
- `LEFT JOIN` (or LEFT OUTER JOIN)
- `RIGHT JOIN` (or RIGHT OUTER JOIN)
- `FULL JOIN` (or FULL OUTER JOIN)

## 11. Explain the difference between UNION and UNION ALL.

- `UNION` combines the result sets of two or more SELECT statements and **removes duplicates**
- `UNION ALL` includes all rows, including duplicates

## 12. What is the GROUP BY clause?

The `GROUP BY` clause is used to group rows based on specified columns. It is often used with aggregate functions like `COUNT`, `SUM`, `AVG`.

## 13. How do you add a new column to an existing table in SQL?

Use the `ALTER TABLE` statement with the `ADD COLUMN` clause.

```sql
ALTER TABLE employees ADD COLUMN email VARCHAR(100);
```

## 14. What is a primary key in SQL?

A primary key is a unique identifier for each row in a table. It ensures that each row can be uniquely identified and provides a reference for other tables.

## 15. What is a foreign key in SQL?

A foreign key is a column (or set of columns) that establishes a link between data in two tables. It enforces referential integrity and maintains relationships between tables.

## 16. What is a view in SQL?

A view is a virtual table that is derived from one or more base tables. It allows you to simplify complex queries and encapsulate logic for easy access.

## 17. How do you perform a backup and restore in SQL?

Use the `BACKUP` and `RESTORE` commands to perform database backup and restoration operations.

## 18. Explain the ACID properties in SQL.

ACID stands for **Atomicity, Consistency, Isolation, and Durability**. These properties ensure that database transactions are reliable, consistent, and maintain data integrity.

## 19. What is a subquery in SQL?

A subquery is a query nested inside another query. It is used to retrieve data based on the result of another query.

## 20. How do you find the second highest salary in an employee table?

Use the `ORDER BY` clause with `LIMIT`/`OFFSET`:

```sql
SELECT salary FROM employee ORDER BY salary DESC LIMIT 1 OFFSET 1;
```
