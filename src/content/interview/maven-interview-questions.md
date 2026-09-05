---
title: "Top 20 Maven Interview Questions with Answers"
description: "Maven build tool interview questions covering pom.xml, dependencies, repositories, plugins, profiles, goals, lifecycle phases, and inheritance."
pubDatetime: 2023-07-09T00:00:00Z
tags: ["maven", "java", "build-tool", "interview", "devops"]
externalUrl: "https://qamayankgupta.medium.com/top-20-maven-interview-questions-with-answer-e561ce84be47"
---

## Table of contents

## 1. What is Maven?

Maven is a build automation and dependency management tool primarily used for Java projects. It provides a standard way to build, package, and deploy applications, and manages project dependencies and configurations.

## 2. Purpose of the pom.xml file

The `pom.xml` (Project Object Model) is the core of a Maven project. It defines the project's configuration, dependencies, build settings, and plugins. Maven uses it to build the project and resolve dependencies.

## 3. Difference between Maven and Ant

- **Maven** uses declarative approach with conventions and predefined project structures
- **Ant** uses procedural approach with explicit build scripts
- Maven has built-in dependency management; Ant requires manual configuration
- Maven has a central repository; Ant relies on manual library management

## 4. What is a Maven repository?

A directory or network location containing Maven artifacts (JAR files, plugins, dependencies). Maven retrieves dependencies from repositories during builds. Common types: local, central, remote.

## 5. What is a Maven artifact?

A file (typically a JAR) produced by a Maven build. Represents compiled code, resources, and other files. Artifacts are versioned and shareable across projects.

## 6. How do you specify project dependencies?

In the `<dependencies>` section of `pom.xml`:

```xml
<dependency>
  <groupId>org.testng</groupId>
  <artifactId>testng</artifactId>
  <version>7.10.2</version>
  <scope>test</scope>
</dependency>
```

## 7. Purpose of the `<scope>` element

Specifies the scope of a dependency's usage during the build. Common scopes:

- `compile` (default) — available at all classpaths
- `test` — only for test compilation and execution
- `provided` — expected to be provided by JDK or container
- `runtime` — needed at runtime, not compile time

## 8. Difference between clean, compile, and package goals

- `clean` — Removes output files/directories from previous builds
- `compile` — Compiles the source code
- `package` — Creates an executable JAR/WAR from compiled source and resources

## 9. How do you execute a specific Maven goal?

```bash
mvn clean
mvn compile
mvn package
mvn clean install
```

## 10. Purpose of the `mvn install` command

Builds the project and installs the artifacts into the **local Maven repository** (`~/.m2/repository`). Installed artifacts can then be used by other local projects.

## 11. Purpose of `mvn dependency:tree`

Generates a tree representation of the project's dependency hierarchy — shows direct and transitive dependencies, useful for identifying conflicts.

```bash
mvn dependency:tree
```

## 12. Maven plugin vs Maven dependency

- **Maven plugin** — Extends Maven's functionality during the build (Surefire, Compiler, Assembly)
- **Maven dependency** — External library the project depends on during development or execution

## 13. Purpose of the `<build>` element

Defines the project's build settings: source directory, test directory, output directory, and plugins used during the build.

```xml
<build>
  <sourceDirectory>src/main/java</sourceDirectory>
  <plugins>
    <plugin>...</plugin>
  </plugins>
</build>
```

## 14. Purpose of the `<profiles>` element

Allows defining and activating different sets of build configurations based on conditions or environments. Profiles can contain specific dependencies, plugins, and build settings.

```xml
<profiles>
  <profile>
    <id>dev</id>
    <properties>
      <env>development</env>
    </properties>
  </profile>
</profiles>
```

## 15. How do you create a Maven project via CLI?

Use the Maven archetype plugin:

```bash
mvn archetype:generate \
  -DgroupId=com.example \
  -DartifactId=my-project \
  -DarchetypeArtifactId=maven-archetype-quickstart \
  -DinteractiveMode=false
```

## 16. How do you skip tests?

Use `-DskipTests` (skips execution, still compiles) or `-Dmaven.test.skip=true` (skips both).

```bash
mvn clean install -DskipTests
```

## 17. Purpose of the `<repositories>` element

Allows specifying additional repositories from which Maven can resolve dependencies (beyond Maven Central).

```xml
<repositories>
  <repository>
    <id>jitpack.io</id>
    <url>https://jitpack.io</url>
  </repository>
</repositories>
```

## 18. Purpose of the `<parent>` element

Establishes inheritance between the current project and a parent project. Enables sharing of configurations, dependencies, and settings across multi-module projects.

```xml
<parent>
  <groupId>com.example</groupId>
  <artifactId>parent-project</artifactId>
  <version>1.0.0</version>
</parent>
```

## 19. Purpose of the `<version>` element

Specifies the version of a dependency. Best practice: pin exact versions to avoid surprises.

```xml
<version>7.10.2</version>
```

## 20. How do you skip default build lifecycle phases?

Options include:

- `-DskipTests` — skip test execution
- `-Dmaven.test.skip=true` — skip test compilation and execution
- Configure `<skip>true</skip>` on specific plugin executions
