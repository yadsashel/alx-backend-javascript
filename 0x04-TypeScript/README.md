# 0x04-TypeScript Project - README

## Description
This project covers TypeScript fundamentals, including interfaces, classes, functions, working with the DOM, generics, namespaces, and more advanced typing features. The tasks progress from creating simple interfaces and classes to more complex type systems and working with third-party libraries through ambient namespaces. Each task builds upon TypeScript’s type-checking features to ensure robust code that is type-safe and easily maintainable.

## Learning Objectives
By the end of this project, you will be able to:
- Understand basic types in TypeScript.
- Use interfaces, classes, and functions effectively.
- Work with the DOM using TypeScript.
- Apply generic types in your code.
- Use namespaces and merge declarations.
- Use ambient namespaces to import external libraries.
- Utilize nominal typing with TypeScript.

## Project Structure
The project is organized into several directories, each containing tasks that focus on different TypeScript concepts. Each task includes configuration files like `package.json`, `.eslintrc.js`, `tsconfig.json`, and `webpack.config.js` for proper setup and build.

```
0x04-TypeScript/
│
├── task_0/
│   ├── js/
│   │   └── main.ts
│   └── package.json
│   └── webpack.config.js
│   └── tsconfig.json
│   └── .eslintrc.js
│
├── task_1/
│   ├── js/
│   │   └── main.ts
│   └── package.json
│   └── webpack.config.js
│   └── tsconfig.json
│
├── task_2/
│   ├── js/
│   │   └── main.ts
│   └── package.json
│   └── webpack.config.js
│   └── tsconfig.json
│
├── task_3/
│   ├── js/
│   │   ├── interface.ts
│   │   ├── crud.d.ts
│   │   └── main.ts
│   └── package.json
│   └── webpack.config.js
│   └── tsconfig.json
│
├── task_4/
│   ├── js/
│   │   ├── subjects/
│   │   │   └── Teacher.ts
│   │   │   └── Subject.ts
│   └── package.json
│   └── webpack.config.js
│   └── tsconfig.json
```

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/alx-backend-javascript.git
   cd alx-backend-javascript/0x04-TypeScript
   ```

2. **Install dependencies**:
   Each task has its own `package.json`. Navigate to each task's directory and run:
   ```bash
   npm install
   ```

3. **Build the project**:
   TypeScript files will be compiled using Webpack. To build the project for each task, run:
   ```bash
   npm run build
   ```

4. **Run the project**:
   The build process compiles the TypeScript into JavaScript files, which can be run using your preferred method (e.g., Node.js, a local server, etc.).

## Task Overview

### Task 0: Creating an Interface for a Student
- **Objective**: Define a `Student` interface and render the student data in a table using Vanilla JS and TypeScript.
- **File**: `task_0/js/main.ts`

### Task 1: Let's Build a Teacher Interface
- **Objective**: Define a `Teacher` interface with modifiable properties and allow additional attributes dynamically.
- **File**: `task_1/js/main.ts`

### Task 2: Extending the Teacher Class
- **Objective**: Create a `Directors` interface that extends the `Teacher` interface, adding a new property.
- **File**: `task_1/js/main.ts`

### Task 3: Printing Teachers
- **Objective**: Write a function `printTeacher` and define an interface for it.
- **File**: `task_1/js/main.ts`

### Task 4: Writing a Class
- **Objective**: Define a `StudentClass` class with methods and describe its constructor and class via interfaces.
- **File**: `task_1/js/main.ts`

### Task 5: Advanced Types Part 1
- **Objective**: Create interfaces and classes for both `Director` and `Teacher` with specific methods. Write a function to create instances based on a salary.
- **File**: `task_2/js/main.ts`

### Task 6: Creating Functions Specific to Employees
- **Objective**: Write functions that use type predicates and execute methods based on employee type.
- **File**: `task_2/js/main.ts`

### Task 7: String Literal Types
- **Objective**: Define a string literal type and write a function to teach specific subjects.
- **File**: `task_2/js/main.ts`

### Task 8: Ambient Namespaces
- **Objective**: Create an ambient namespace and type declarations for interacting with a third-party library.
- **Files**: `task_3/js/interface.ts`, `task_3/js/crud.d.ts`, `task_3/js/main.ts`

### Task 9: Namespace & Declaration Merging
- **Objective**: Create namespaces and perform declaration merging.
- **Files**: `task_4/js/subjects/Teacher.ts`, `task_4/js/subjects/Subject.ts`

## Requirements
- **Allowed editors**: vi, vim, emacs, Visual Studio Code.
- **Platform**: Transpiling will be done on Ubuntu 18.04.
- **Code Checks**: TypeScript code should have no compilation errors or warnings.
- **File Extension**: TypeScript files should use the `.ts` extension.
