# Test Driven React

## Chapter 1: TDD With Jest

### Introducing Jest

#### Running Package Binaries With NPX

- `NPX` allows you to run packages without having to install them globally

#### Writing a Test

- `describe()` declares a test suite, which is a grouping of tests. Its first argument is a name, and the second is a function containing one or more tests.
- `it()` declares a test. Its first argument is a name, and the second is a function with the actual test code.
- `expect()` creates an assertion. It takes a single argument, typically a value generated by the code being tested, and returns an object that exposes a set of matcher functions.
- `toBe()` is a matcher that performs a strict equality test between the value being tested (the expect() argument) and the expected value (its own argument).
- `toEqual()` differs from `toBe()` in that toBe expects strict equality and toEqual checks for deep object equality

Test Suites (`describe()`) are typically nouns, the test name (`it()`) is a verb. Combined they make a sentence, making it easier to understand.

### The Tao of Test-Driven Development

#### Measuring Test Coverage

- `Branches` refer to possible outcomes of `if/else` statements

### The Mantra: Red, Green, Repeat

Write tests first yo

## Chapter 2: Integrated Tooling With VSCode

### Editing With VS Code

#### User Settings

Use this setting to see defaults and your overrides

```
  "workbench.settings.useSplitJSON": true
```

### Checking Code Quality With ESLint

#### Installation & Configuation

- Install ESLint: `npm install --save-dev eslint`
- Create an `.eslintrc.js` file

Example:

```js
module.exports = {
  extends: ["eslint:recommended"],
};
```

- ESLint by default will try to use ES5, and doesn't understand modules so make sure to add those

#### Extending An ESLint Config

- You can add plugins like `eslint-plugin-jest` to help ESLint understand different file types

### Beautifying Code With Prettier

### Real-Time Testing With Wallaby

### Mantra: Live In The Code
