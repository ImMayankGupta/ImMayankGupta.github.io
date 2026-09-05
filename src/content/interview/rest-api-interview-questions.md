---
title: "Top 20 REST API Interview Questions with Answers"
description: "REST fundamentals, HTTP methods, status codes, authentication, versioning, HATEOAS, and best practices for designing and testing RESTful APIs."
pubDatetime: 2023-07-12T00:00:00Z
tags: ["rest-api", "api", "interview", "http", "web"]
externalUrl: "https://qamayankgupta.medium.com/top-20-rest-api-interview-questions-with-answer-7b60f0b4e309"
---

## Table of contents

## 1. What is REST API?

REST (Representational State Transfer) API is an architectural style that defines a set of principles for designing networked applications. It uses the HTTP protocol to communicate between the client and the server and is widely used for building web services.

## 2. What are the main principles of RESTful architecture?

- **Stateless**: Each request from a client contains all necessary information; the server stores no client state
- **Client-Server**: Client and server are separate entities communicating over a network
- **Uniform Interface**: The API uses standard HTTP methods (GET, POST, PUT, DELETE) and status codes (200, 404, 500)
- **Cacheable**: Responses can be cached by the client
- **Layered System**: Architecture can be composed of multiple layers with specific responsibilities

## 3. What are the commonly used HTTP methods?

- **GET** — Retrieves a representation of a resource
- **POST** — Creates a new resource
- **PUT** — Updates an existing resource or creates a new one
- **DELETE** — Deletes a resource
- **PATCH** — Partially updates a resource
- **OPTIONS** — Returns the supported methods for a resource

## 4. Difference between PUT and POST?

- **PUT** — Update an existing resource or create at a specific URI. **Idempotent** (multiple identical requests = same effect)
- **POST** — Submit data to be processed. **Not idempotent** (multiple requests may have different effects)

## 5. Difference between RESTful API and SOAP API?

- REST uses lightweight HTTP; SOAP uses XML-based protocols
- REST is simpler; SOAP is more complex but has more features
- REST is stateless; SOAP can maintain state
- REST has better performance and scalability; SOAP has stronger standards and security

## 6. Advantages of RESTful API

- Simplicity and ease of use
- Scalability and performance
- Supports multiple data formats (JSON, XML)
- Platform/device flexibility
- Better caching, reduced server load
- Stateless nature makes testing and maintenance easier

## 7. Common data formats in RESTful API

- **JSON** — Lightweight, human-readable, widely used
- **XML** — Markup language for structuring complex data

## 8. What is an endpoint?

A specific URL that represents a resource or a collection of resources. It defines where clients make requests to interact with the API.

## 9. Purpose of HTTP status codes

They indicate whether a request was successful, encountered an error, or requires further action. Common codes: **200** (OK), **404** (Not Found), **500** (Internal Server Error).

## 10. Authentication vs Authorization

- **Authentication** — Verifying the identity of a client (username/password, tokens)
- **Authorization** — Determining whether an authenticated client has permission to access a resource

## 11. What is content negotiation?

Selecting the appropriate representation of a resource based on the client's `Accept` header preferences (e.g., JSON vs XML).

## 12. How do you handle pagination?

Using query parameters like `page` and `limit`:

```
GET /api/users?page=2&limit=20
```

The server returns the requested page along with metadata like total count.

## 13. How can you version a RESTful API?

- **URL versioning** — `/api/v1/resource`
- **Query parameter** — `/api/resource?version=1`
- **Header versioning** — `X-API-Version: 1`

## 14. What is HATEOAS?

**Hypermedia as the Engine of Application State** — the server includes links/hypermedia controls in responses, allowing the client to discover and navigate related resources dynamically.

## 15. How do you handle error responses?

Return an appropriate HTTP status code and a response body containing error details:

```json
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "No user with id 42",
    "docs": "https://api.example.com/errors/USER_NOT_FOUND"
  }
}
```

## 16. Best practices for designing RESTful APIs

- Use descriptive, meaningful resource URIs
- Use HTTP methods appropriately
- Consistent naming conventions
- Implement authentication and authorization
- Document with OpenAPI/Swagger
- Handle errors with informative responses
- Version the API for backward compatibility

## 17. How can you test a REST API?

- **Manual** — Postman, cURL
- **Automated** — Selenium, REST-assured, Karate
- **Unit + integration tests** for individual endpoints
- **Performance** — JMeter, Gatling

## 18. Role of API documentation

Provides information about endpoints, request/response formats, authentication, resources, and requirements. Well-documented APIs are easier to understand, use, and integrate.

## 19. Common security vulnerabilities in RESTful APIs

- Injection attacks (SQL/command injection)
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Insecure direct object references
- Inadequate authentication/authorization
- Insecure handling of sensitive data

## 20. How do you handle rate limiting?

Restrict the number of requests a client can make within a time frame. Implementations:

- **Token bucket** algorithm
- **Fixed window** counter
- Return `429 Too Many Requests` when limit hit
- Track per-client (API key/IP) request counts
