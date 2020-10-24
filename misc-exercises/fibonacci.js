'use strict';

// EXAMPLE
// > npm run fibonacci
// 5
// 3
// ----------
// 8
// 13

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
  if (n < 1) return 0;
  if (n <= 2) return n - 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function main(input) {
  const result = fibonacci(parseInt(input));

  writeLine(result);
  writeLine('----------')
}
