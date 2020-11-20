'use strict';

/*
EXAMPLE

Run the npm script and then type in a number to see what value in the
sequence is at that position in the set.

> npm run fibonacci
> 1
| 0
| ----------
> 4
| 2
| ----------
> 8
| 13
| ----------
*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

reader.on('line', inputStdin => {
  main(inputStdin);
});

function writeLine(value) {
  return process.stdout.write(`${value}\n`);
}

function fibonacci(n) {
  // Hard code the first three values in the set with guard clauses: 0, 1, 1
  if (n < 1) return 0;
  if (n <= 2) return n - 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function main(input) {
  const result = fibonacci(parseInt(input));

  writeLine(result);
  writeLine('----------')
}
