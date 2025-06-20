# Project CI/CD
[![Node.js CI](https://github.com/Zastial/Project-CI-CD/actions/workflows/ci.yml/badge.svg)](https://github.com/Zastial/Project-CI-CD/actions/workflows/ci.yml)
[![Playwright Tests](https://github.com/Zastial/Project-CI-CD/actions/workflows/playwright.yml/badge.svg)](https://github.com/Zastial/Project-CI-CD/actions/workflows/playwright.yml)

# Author
Alexandre CAROL - IW 4e année

## Description
This project is a Node.js application that demonstrates continuous integration and continuous deployment (CI/CD) practices. It includes automated testing using Jest and browser automation testing with Playwright.

## Prerequisites
- Node.js 18 or higher
- npm (Node Package Manager)

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd project_ci_cd
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Scripts
- To run the application:
  ```
  node src/index.js
  ```
- To run the tests using Jest:
  ```
  npm test
  ```
- To run Playwright tests:
  ```
  npx playwright test
  ```

## ESLint
This project uses ESLint for linting JavaScript code. You can run ESLint with the following command:
```
npx eslint src/
```
