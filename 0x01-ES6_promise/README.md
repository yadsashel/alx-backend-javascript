# 0x01. ES6 Promises

## Project Overview

This project focuses on mastering JavaScript Promises and their related methods such as `then`, `resolve`, `catch`, and others. Promises are an essential part of asynchronous JavaScript, and through this project, you will learn how to handle multiple asynchronous operations, error handling, and use of `async` and `await`.

### Key Concepts

- **Promises**: Learn how to create, resolve, reject, and chain promises to handle asynchronous operations.
- **Error Handling**: Use `try/catch` for error handling with promises.
- **Async/Await**: Simplify working with promises using `async` and `await`.
- **Promise Methods**: Learn to use the Promise object’s methods like `then()`, `catch()`, `all()`, and others.

---

## Learning Objectives

By the end of this project, you should be able to:

- Understand and explain **Promises**: how, why, and what they are.
- Use the `then`, `resolve`, and `catch` methods effectively.
- Utilize every method of the **Promise** object.
- Apply the **throw/try/catch** error handling mechanism.
- Use the **await** operator.
- Implement and use **async** functions.

---

## Project Setup

### Requirements

- All files will be executed on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**.
- Allowed editors: **vi**, **vim**, **emacs**, **Visual Studio Code**.
- All your files should end with a new line.
- A **README.md** file at the root of the project is mandatory.
- All your code will use the `.js` extension.
- Your code will be tested using **Jest** and the command `npm run test`.
- Your code will be verified using **ESLint**.

### Tools

- **NodeJS** (12.11.x)
- **Jest**: for unit testing.
- **Babel**: for compiling ES6 code.
- **ESLint**: for linting.

---

## Installation Guide

To set up your environment for this project:

1. **Install NodeJS 12.11.x**:
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```

2. **Check versions**:
    ```bash
    nodejs -v
    npm -v
    ```

3. **Install Jest, Babel, and ESLint**:
    - Use the provided `package.json` file and run:
    ```bash
    npm install
    ```

---

## Configuration Files

### `package.json`
This file contains all the dependencies required for the project, such as **Jest**, **Babel**, and **ESLint**. Make sure to run `npm install` before starting the project.

### `babel.config.js`
This file is used to configure **Babel** for compiling modern JavaScript.

### `.eslintrc.js`
This file contains **ESLint** configuration to ensure your code follows the required coding style.

### `utils.js`
Contains utility functions (`uploadPhoto`, `createUser`) that return promises. These functions are used in several tasks.

---

## Tasks

### 0. Keep every promise you make and only make promises you can keep
- **File**: `0-promise.js`
- Return a simple promise using the `getResponseFromAPI` function.

### 1. Don’t make a promise…if you know you can’t keep it
- **File**: `1-promise.js`
- Return a promise based on a boolean parameter (`success`). If `true`, resolve it with an object; if `false`, reject it with an error.

### 2. Catch me if you can!
- **File**: `2-then.js`
- Use the `handleResponseFromAPI` function and append three handlers to handle resolved and rejected promises and log responses.

### 3. Handle multiple successful promises
- **File**: `3-all.js`
- Import functions from `utils.js`, and resolve multiple promises, logging the results. Handle errors by logging "Signup system offline."

### 4. Simple promise
- **File**: `4-user-promise.js`
- Create a function `signUpUser` that returns a resolved promise with the user’s first and last names.

### 5. Reject the promises
- **File**: `5-photo-reject.js`
- Write a function `uploadPhoto` that returns a rejected promise if the filename cannot be processed.

### 6. Handle multiple promises
- **File**: `6-final-user.js`
- Use `signUpUser` and `uploadPhoto` to return an array of results from promises, showing the status and value of each.

### 7. Load balancer
- **File**: `7-load_balancer.js`
- Create a function `loadBalancer` to resolve the fastest of two promises (for example, downloading from different regions).

### 8. Throw error / try catch
- **File**: `8-try.js`
- Implement `divideFunction` to throw an error if the denominator is 0.

### 9. Throw an error
- **File**: `9-try.js`
- Write a `guardrail` function that returns an array with the result of a math function and handles errors if thrown.

---

## How to Test

To run tests on your code, use the following commands:

- Run tests with Jest:
    ```bash
    npm run test
    ```

- Lint your code with ESLint:
    ```bash
    npm run lint
    ```

---

## Author

**Yazide Salhi** - Project Developer.
