---
title: "Top 20 SOAP UI Interview Questions with Answers"
description: "SOAP UI interview questions: WSDL, test cases, test suites, mock services, assertions, property transfer, SSL certificates, and REST/SOAP testing."
pubDatetime: 2023-07-15T00:00:00Z
tags: ["soap-ui", "soap", "web-services", "api", "interview"]
externalUrl: "https://qamayankgupta.medium.com/top-20-soap-ui-interview-questions-with-answer-f38563ba8732"
---

## Table of contents

## 1. What is SOAPUI?

SOAPUI is an open-source testing tool used for testing SOAP and RESTful web services. It provides a user-friendly interface for designing, building, and testing web services.

## 2. Key features of SOAPUI

- Support for SOAP and RESTful web services
- WSDL import and validation
- Test case creation and execution
- Data-driven testing
- Assertions and validations
- Mock services for simulating web service behavior
- Reporting and logging

## 3. What is a WSDL?

**WSDL (Web Services Description Language)** is an XML-based language used to describe the interface and behavior of a web service. In SOAPUI, a WSDL file is imported to create a project and define the structure and operations of the web service being tested.

## 4. How do you create a test case?

1. Open SOAPUI and create a new project
2. Import the WSDL file of the web service
3. Right-click on the project → "Add Test Case"
4. Provide a name for the test case
5. In the test case editor, add test steps (requests, assertions, validations)

## 5. What is a test suite?

A collection of test cases grouped together. Allows organized test execution and provides a logical structure for managing and running multiple test cases.

## 6. How do you parameterize requests?

Use **properties** or **data sources**:

- **Properties** — Set at project, test suite, or test case level; referenced in requests using `${#Project#propName}`
- **Data sources** — Excel, CSV, JDBC files for iterating through different data sets

## 7. How do you handle authentication?

SOAPUI supports:

- **Basic Authentication**
- **Digest Authentication**
- **OAuth 1.0/2.0**
- **NTLM**
- **Kerberos**

Configure in request headers or test case settings.

## 8. What are assertions in SOAPUI?

Used to verify expected behavior and responses. Validate:

- XPath match
- XQuery match
- Contains/Not Contains
- Response SLA (time)
- Schema Compliance
- Status codes
- HTTP headers
- JSONPath (for REST)

## 9. How do you handle dynamic data?

- **XPath** or **JSONPath** expressions to extract values from responses
- Store extracted values in properties
- Reference in subsequent requests
- Data sources for iterating through dynamic sets

## 10. How do you run load tests?

Use the **LoadUI** module (integrated with SOAPUI). Configure:

- Multiple virtual users
- Scenarios (thread strategies)
- Ramp-up times
- Test duration

Provides insights into server performance under load.

## 11. What is a mock service?

A simulated implementation of a web service. Mimics real service behavior without a live server. Useful for:

- Testing client applications
- Development before backend is ready
- Isolating dependencies

## 12. How do you create a mock service?

1. Right-click on project or test suite → "Add New MockService"
2. Provide a name
3. In the mock service editor, define operations, request/response messages, and behavior
4. Start the mock service to make it available for testing

## 13. How do you automate SOAPUI tests?

- Use **testrunner** command-line tool
- Integrate with CI tools (Jenkins, TeamCity, Bamboo)
- Use **Groovy scripts** for dynamic test logic
- Maven/Gradle plugins for SOAPUI

```bash
testrunner.sh -sTestSuite1 project.xml
```

## 14. How do you generate reports?

Built-in reporting capabilities:

- Select desired test case/suite/project
- Click "Create Report"
- Export formats: HTML, PDF, JUnit XML, CSV

## 15. What is property transfer?

Extracts values from one response and transfers them to subsequent requests or tests. Useful when data needs to be shared between different parts of a test case or between different test cases.

Example: Extract `sessionId` from login response → use in subsequent authenticated requests.

## 16. How do you handle timeouts?

Configure at multiple levels:

- Project level
- Test suite level
- Test case level
- Individual request level (Socket timeout)

Timeout values specify maximum wait time before considering a failure.

## 17. How do you handle SSL certificates?

Import SSL certificates into SOAPUI's truststore:

- Preferences → SSL Settings → Keystore
- Reference truststore in requests
- Validates SSL certificates during communication
- Supports client certificates for mutual TLS

## 18. Difference between SOAP and REST web services

- **SOAP** — Protocol using XML for message exchange; relies on WSDL for service interfaces
- **REST** — Architectural style using standard HTTP methods; supports XML, JSON, and other formats

REST is simpler, faster, and more widely adopted for modern web APIs.

## 19. Can SOAPUI test RESTful web services?

**Yes.** SOAPUI supports:

- Creating and executing REST requests
- Validating responses (JSON, XML)
- Assertions (JSONPath, XPath)
- Same testing capabilities as SOAP services
- OAuth 2.0 for authentication

## 20. How do you handle file uploads?

Configure the request as `multipart/form-data`:

- Add file parameter to request body
- Read file from local directory
- Generate file dynamically via Groovy script
- Attach file via "Attachments" tab in the request editor
