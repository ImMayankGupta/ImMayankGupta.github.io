---
title: "Scenario-based SQL Interview Questions with Answers"
description: "Real-world SQL scenarios: aggregates, JOINs, subqueries, date functions, LIMIT/OFFSET — the kind of problems asked in analytics and data engineering interviews."
pubDatetime: 2023-08-06T00:00:00Z
tags: ["sql", "database", "interview", "scenario", "analytics"]
externalUrl: "https://qamayankgupta.medium.com/scenario-based-sql-interview-questions-with-answer-f87d9f69fdbf"
---

## Table of contents

## 1. Highest salary among all employees

You have a table `employees` with columns `employee_id` and `salary`. Find the highest salary.

```sql
SELECT MAX(salary) AS highest_salary FROM employees;
```

## 2. Count employees in each department

```sql
SELECT department, COUNT(*) AS num_employees
FROM employees
GROUP BY department;
```

## 3. Top 5 highest-paid employees

```sql
SELECT employee_id, first_name, last_name, salary
FROM employees
ORDER BY salary DESC
LIMIT 5;
```

## 4. Employee names with department names (JOIN)

```sql
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id;
```

## 5. Employees with same salary and department as employee 101

```sql
SELECT e2.employee_id, e2.first_name, e2.last_name
FROM employees e1
INNER JOIN employees e2
  ON e1.salary = e2.salary AND e1.department_id = e2.department_id
WHERE e1.employee_id = 101 AND e2.employee_id != 101;
```

## 6. Number of orders placed by each customer in 2023

```sql
SELECT customer_id, COUNT(*) AS num_orders
FROM orders
WHERE YEAR(order_date) = 2023
GROUP BY customer_id;
```

## 7. Average salary per department

```sql
SELECT department_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id;
```

## 8. Employees without any department

```sql
SELECT employee_id, first_name, last_name
FROM employees
WHERE department_id IS NULL;
```

## 9. Number of employees hired per year

```sql
SELECT YEAR(hire_date) AS hire_year, COUNT(*) AS num_hired
FROM employees
GROUP BY YEAR(hire_date);
```

## 10. Second highest marks scored by a student

```sql
SELECT MAX(marks) AS second_highest_marks
FROM students
WHERE marks < (SELECT MAX(marks) FROM students);
```

## 11. Top 3 departments by average salary

```sql
SELECT department_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id
ORDER BY avg_salary DESC
LIMIT 3;
```

## 12. Orders per customer, sorted descending

```sql
SELECT customer_id, COUNT(order_id) AS num_orders
FROM orders
GROUP BY customer_id
ORDER BY num_orders DESC;
```

## 13. Employees who joined in January

```sql
SELECT first_name, last_name
FROM employees
WHERE MONTH(hire_date) = 1;
```

## 14. Top 5 most expensive products

```sql
SELECT product_id, product_name, price
FROM products
ORDER BY price DESC
LIMIT 5;
```

## 15. Employees with "A" in first name and "B" in last name

```sql
SELECT first_name, last_name
FROM employees
WHERE first_name LIKE '%A%' AND last_name LIKE '%B%';
```

## 16. Total sales per year

```sql
SELECT YEAR(order_date) AS sales_year, SUM(amount) AS total_sales
FROM orders
GROUP BY YEAR(order_date);
```

## 17. Employees without a manager

```sql
SELECT first_name, last_name
FROM employees
WHERE manager_id IS NULL;
```

## 18. Students with courses and marks (multi-table JOIN)

```sql
SELECT s.student_name, c.course_name, sc.marks
FROM students s
INNER JOIN student_courses sc ON s.student_id = sc.student_id
INNER JOIN courses c ON sc.course_id = c.course_id;
```

## 19. Oldest employee (earliest hire date)

```sql
SELECT employee_id, first_name, last_name, hire_date
FROM employees
WHERE hire_date = (SELECT MIN(hire_date) FROM employees);
```

## 20. Number of products in each category

```sql
SELECT category, COUNT(*) AS num_products
FROM products
GROUP BY category;
```
