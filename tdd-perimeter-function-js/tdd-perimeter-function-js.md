Use your JavaScript & Jest skills to test drive your solution to a real-universe problem.

## Getting Started

From your `challenges` folder in the terminal, type the following commands:

```no-highlight
et get tdd-perimeter-function-js
cd tdd-perimeter-function-js
yarn install
atom .
```

> your work will go in `main.js`

In the browser, open up the JavaScript console. You can refresh the page in order to see your changes.

### Instructions

Write a JavaScript function to calculate the perimeter of a rectangle by letting your tests be your guide.

Run `yarn test` and take a look at the first test failure. You should see

```no-highlight
yarn run v1.12.3
$ jest
 FAIL  tests/main.test.js
  ✕ it defines perimeter (5ms)

  ● it defines perimeter

    TypeError: perimeter is not a function

      2 |
      3 | test('it defines perimeter',() => {
    > 4 |   expect(perimeter()).toBeDefined()
        |          ^
      5 | })
      6 |

      at Object.perimeter (tests/main.test.js:4:10)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        3.308s
```

You can look in the `tests` folder to open your `main.test.js` file. The first test is looking to confirm the existence of a `perimeter` function.

In `main.js`, write your function. Your goal is to satisfy the test suite and see an output like this:

```no-highlight
yarn run v1.12.3
$ jest
 PASS  tests/main.test.js
  ✓ it defines perimeter (5ms)
  ✓ it allows only one argument to be 0 (1ms)
  ✓ it does not allow both arguments to be 0 (1ms)
  ✓ it takes in two arguments and returns a positive number (1ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.223s
Ran all test suites.
✨  Done in 4.17s.
```

Your perimeter function may require some conditional statements, so pay attention to what your tests are expecting from you!

Hints: In order for the function to `.beDefined` it will need a return value that is NOT undefined.

Use a `console.log` to invoke your perimeter function & see your function's returns.

### Sample Output

```no-highlight
perimeter(3, 5)  // returns 16
```
