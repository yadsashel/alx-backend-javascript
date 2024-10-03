# 0x02. ES6 Classes Project - README

## Table of Contents
- [Project Overview](#project-overview)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [Tasks](#tasks)
  - [Task 0: ClassRoom](#task-0-classroom)
  - [Task 1: Initialize Classrooms](#task-1-initialize-classrooms)
  - [Task 2: HolbertonCourse](#task-2-holbertoncourse)
  - [Task 3: Currency](#task-3-currency)
  - [Task 4: Pricing](#task-4-pricing)
  - [Task 5: Building](#task-5-building)
  - [Task 6: SkyHighBuilding](#task-6-skyhighbuilding)
  - [Task 7: Airport](#task-7-airport)
  - [Task 8: HolbertonClass](#task-8-holbertonclass)
  - [Task 9: Hoisting](#task-9-hoisting)

## Project Overview
This project covers object-oriented programming concepts using JavaScript ES6 classes. You'll define classes, use getters and setters, work with inheritance, and practice metaprogramming with static methods. This project is essential for building a solid foundation in ES6 features and class-based OOP.

## Learning Objectives
By the end of this project, you should be able to:
- Define and create ES6 classes.
- Add methods to a class.
- Understand and implement static methods.
- Extend classes using inheritance.
- Utilize metaprogramming with symbols and static methods.

## Requirements
- All code will be executed on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**.
- **Allowed editors:** `vi`, `vim`, `emacs`, `Visual Studio Code`.
- Every file must end with a new line.
- You must include a `README.md` at the root of the project directory.
- Code will be tested with **Jest** and linted using **ESLint**.
- Ensure that your code passes all tests and lint checks using `npm run full-test`.

## Setup Instructions
1. **Install NodeJS 12.11.x**
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   nodejs -v
   npm -v
   ```
   
2. **Install Jest, Babel, and ESLint**:
   In your project directory, after adding the `package.json` file, run:
   ```bash
   npm install
   ```

3. **Configuration Files**:
   Ensure that the following files are present in your project:
   - `package.json`
   - `babel.config.js`
   - `.eslintrc.js`

## Tasks

### Task 0: ClassRoom
Create a class named `ClassRoom` with the following:
- Constructor that takes `maxStudentsSize` and assigns it to a private attribute `_maxStudentsSize`.

**File:** `0-classroom.js`

```js
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
```

### Task 1: Initialize Classrooms
Create a function `initializeRooms` that returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34.

**File:** `1-make_classrooms.js`

```js
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
```

### Task 2: HolbertonCourse
Implement a class `HolbertonCourse` with attributes `name`, `length`, and `students`. Use getters and setters for validation.

**File:** `2-hbtn_course.js`

```js
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name);
    this._length = this.validateNumber(length);
    this._students = this.validateArray(students);
  }

  validateString(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
    return value;
  }

  validateNumber(value) {
    if (typeof value !== 'number') throw new TypeError('Length must be a number');
    return value;
  }

  validateArray(value) {
    if (!Array.isArray(value) || !value.every(el => typeof el === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateString(value);
  }

  // Similar getters and setters for length and students
}
```

### Task 3: Currency
Implement a `Currency` class with `code` and `name`. Add a method `displayFullCurrency` to format output as "name (code)".

**File:** `3-currency.js`

```js
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
```

### Task 4: Pricing
Extend the `Currency` class and implement a `Pricing` class. Add methods to calculate and display prices.

**File:** `4-pricing.js`

```js
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
```

### Task 5: Building
Create an abstract `Building` class with a method `evacuationWarningMessage`. Any class that extends it must implement this method.

**File:** `5-building.js`

```js
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
```

### Task 6: SkyHighBuilding
Extend the `Building` class with a `SkyHighBuilding` class that includes a `floors` attribute. Override the `evacuationWarningMessage`.

**File:** `6-sky_high.js`

```js
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
```

### Task 7: Airport
Create an `Airport` class with `name` and `code` attributes. The `toString()` method should return the airport code.

**File:** `7-airport.js`

```js
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
```

### Task 8: HolbertonClass
Create a `HolbertonClass` with `size` and `location`. Override the behavior when cast to `Number` and `String`.

**File:** `8-hbtn_class.js`

```js
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
```

### Task 9: Hoisting
Fix the code so that `HolbertonClass` and `StudentHolberton` work as intended.

**File:** `9-hoisting.js`

```js
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}
```

## Author
**Yazide Salhi**
