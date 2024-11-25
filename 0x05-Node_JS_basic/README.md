# 0x05. NodeJS Basics

## Table of Contents
1. [Introduction](#introduction)
2. [Resources](#resources)
3. [Learning Objectives](#learning-objectives)
4. [Requirements](#requirements)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [Tasks](#tasks)
   - [0. Executing Basic JavaScript with Node.js](#0-executing-basic-javascript-with-nodejs)
   - [1. Using Process stdin](#1-using-process-stdin)
   - [2. Reading a File Synchronously](#2-reading-a-file-synchronously)
   - [3. Reading a File Asynchronously](#3-reading-a-file-asynchronously)
   - [4. Creating a Simple HTTP Server](#4-creating-a-simple-http-server)
   - [5. Creating a Complex HTTP Server](#5-creating-a-complex-http-server)
   - [6. Using Express for an HTTP Server](#6-using-express-for-an-http-server)
   - [7. Complex HTTP Server with Express](#7-complex-http-server-with-express)

---

## Introduction

This project is designed to introduce you to the basics of Node.js, including its modules, file system, HTTP servers, and the Express.js framework. You’ll work on building small HTTP servers, reading files, and understanding asynchronous programming.

---

## Resources
Refer to the following resources for help:
- [Node.js Getting Started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API Documentation](https://nodejs.org/api/process.html)
- [Child Process Module](https://nodejs.org/api/child_process.html)
- [Express.js Documentation](https://expressjs.com/)
- [Mocha Documentation](https://mochajs.org/)
- [Nodemon Documentation](https://nodemon.io/)

---

## Learning Objectives

By the end of this project, you will be able to:
- Run JavaScript using Node.js.
- Use Node.js modules.
- Read files with Node.js.
- Access command-line arguments and environment variables.
- Create HTTP servers using Node.js and Express.js.
- Handle routes with Express.js.
- Write asynchronous code with promises.
- Use Babel and ES6 features in Node.js.
- Utilize Nodemon for faster development workflows.

---

## Requirements

- **Editors**: `vi`, `vim`, `emacs`, or `Visual Studio Code`.
- **Environment**: Ubuntu 18.04 LTS with Node.js (v12.x.x).
- All files should have the `.js` extension and end with a newline.
- A `README.md` file is mandatory.
- Code must pass `Jest` tests with `npm run test`.
- Code must comply with `ESLint` using `npm run lint`.
- Full tests can be run with `npm run full-test`.

---

## Project Structure

```plaintext
0x05-Node_JS_basic/
├── database.csv
├── 0-console.js
├── 1-stdin.js
├── 2-read_file.js
├── 3-read_file_async.js
├── 4-http.js
├── 5-http.js
├── 6-http_express.js
├── 7-http_express.js
├── package.json
├── babel.config.js
├── .eslintrc.js
└── README.md
