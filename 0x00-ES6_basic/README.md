# 0x00-ES6_basic

This project covers fundamental concepts of ECMAScript 6 (ES6), a significant update to JavaScript that introduces new features to simplify coding and improve performance. This project will teach you about important ES6 features such as constants, block-scoped variables, arrow functions, default parameters, rest and spread syntax, and much more.

## Table of Contents

- [Requirements](#requirements)
- [Setup](#setup)
- [Tasks](#tasks)
  - [0. Const or Let?](#0-const-or-let)
  - [1. Block Scope](#1-block-scope)
  - [2. Arrow Functions](#2-arrow-functions)
  - [3. Parameter Defaults](#3-parameter-defaults)
  - [4. Rest Parameter Syntax](#4-rest-parameter-syntax)
  - [5. Spread Syntax](#5-spread-syntax)
  - [6. Template Literals](#6-template-literals)
  - [7. Object Property Value Shorthand](#7-object-property-value-shorthand)
  - [8. Computed Property Names](#8-computed-property-names)
  - [9. ES6 Method Properties](#9-es6-method-properties)
  
## Requirements

- Ubuntu 18.04 LTS using NodeJS 12.11.x
- All JavaScript files should end with a new line.
- A README.md file is mandatory at the root of the project folder.
- Your code should use the `.js` extension.
- Code will be tested using the Jest Testing Framework.
- Code will be analyzed using ESLint with specific rules provided.

## Setup

### Installing Node.js

To set up Node.js on your sandbox, follow these steps:

1. **Download and Install Node.js v12.11.x:**

   In your home directory, run the following commands:
   
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
```

## Verify the installation with:

```bash
nodejs -v
npm -v
```

## Install Project Dependencies:

After installing Node.js, navigate to your project directory and run the following command to install the necessary dependencies (Jest, Babel, and ESLint):

```bash
npm install
```

### ESLint Setup
You will be provided with an .eslintrc.js configuration file that enforces specific linting rules. Ensure this file is present in the root of your project directory and run ESLint to check your code quality.

### Babel Setup
Ensure the babel.config.js is properly configured for transpiling ES6+ code. Use Babel to ensure compatibility across different JavaScript environments.

### Jest Setup
Testing is done using the Jest framework. Once installed, you can run the test cases using:

```bash
npm run test
```
