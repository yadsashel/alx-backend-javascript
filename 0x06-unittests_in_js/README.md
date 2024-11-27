# 0x06. Unit Tests in JavaScript

## Overview
This project focuses on understanding and implementing unit tests in JavaScript using tools such as Mocha, Chai, and Sinon. It covers the basics of testing Node.js applications, including creating and organizing test cases, using spies and stubs, and writing both unit and integration tests.

---

## Learning Objectives
By the end of this project, you will be able to:

1. Write a test suite using Mocha.
2. Use different assertion libraries (Node assert, Chai).
3. Organize and present long test suites.
4. Utilize spies and stubs for function behavior analysis.
5. Apply hooks (`before`, `after`, `beforeEach`, `afterEach`) in tests.
6. Perform unit tests with asynchronous functions.
7. Write integration tests for small Node.js servers.

---

## Resources
- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://github.com/request/request)
- [How to Test NodeJS Apps using Mocha, Chai, and SinonJS](https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai)

---

## Requirements
- **Environment:** Ubuntu 18.04, Node.js v12.x
- **Files:** `.js` extension
- **Editor:** Any text editor (e.g., `vi`, `vim`, `emacs`, `VS Code`)
- **Testing Command:** `npm test <filename>.test.js`
- **Output:** All tests must pass without warnings or errors.
- **Mandatory:** Include a `README.md` file at the root of the project.

---

## Tasks

### **0. Basic Test with Mocha and Node Assertion Library**
- **File:** `0-calcul.js`, `0-calcul.test.js`
- **Objective:** Implement a `calculateNumber` function that rounds inputs and sums them.
- **Testing:** Use `assert` to test edge cases.

---

### **1. Combining Descriptions**
- **File:** `1-calcul.js`, `1-calcul.test.js`
- **Objective:** Extend `calculateNumber` to support `SUM`, `SUBTRACT`, and `DIVIDE` operations.
- **Testing:** Use `describe` to organize test cases.

---

### **2. Basic Test Using Chai Assertion Library**
- **File:** `2-calcul_chai.js`, `2-calcul_chai.test.js`
- **Objective:** Rewrite tests using Chai's `expect` for better readability.

---

### **3. Spies**
- **File:** `utils.js`, `3-payment.js`, `3-payment.test.js`
- **Objective:** Use `sinon.spy` to monitor calls to `Utils.calculateNumber`.

---

### **4. Stubs**
- **File:** `4-payment.js`, `4-payment.test.js`
- **Objective:** Replace `Utils.calculateNumber` with a stub for faster and controlled testing.

---

### **5. Hooks**
- **File:** `5-payment.js`, `5-payment.test.js`
- **Objective:** Use `beforeEach` and `afterEach` hooks to set up and clean up test spies.

---

### **6. Async Tests with Done**
- **File:** `6-payment_token.js`, `6-payment_token.test.js`
- **Objective:** Write asynchronous tests using a `done` callback for promise-based functions.

---

### **7. Skip**
- **File:** `7-skip.test.js`
- **Objective:** Learn to skip specific test cases without removing them.

---

## Repository Structure
```
alx-backend-javascript/
├── 0x06-unittests_in_js/
│   ├── 0-calcul.js
│   ├── 0-calcul.test.js
│   ├── 1-calcul.js
│   ├── 1-calcul.test.js
│   ├── 2-calcul_chai.js
│   ├── 2-calcul_chai.test.js
│   ├── utils.js
│   ├── 3-payment.js
│   ├── 3-payment.test.js
│   ├── 4-payment.js
│   ├── 4-payment.test.js
│   ├── 5-payment.js
│   ├── 5-payment.test.js
│   ├── 6-payment_token.js
│   ├── 6-payment_token.test.js
│   ├── 7-skip.test.js
│   └── package.json
```

---

## Running Tests
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests for a specific file:
   ```bash
   npm test <filename>.test.js
   ```
3. Verify all tests pass:
   ```bash
   npm test
   ```

---

## Tips
- Always restore spies and stubs after tests to avoid side effects.
- Use `describe` and `it` blocks to organize test cases.
- Leverage Chai for better readability and easier debugging.
- Use hooks to reduce repetitive setup code in tests.
- Test edge cases to ensure robust implementations.

---

Happy Testing! 🎉
