'use strict';

const _ = require('lodash');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

reader.on('line', inputStdin => {
  const arrA = [5, 7, 9, 2, 6, 1, 4, 0, 3];
  const arrB = [12, 3, 8, 1, 6];

  orderArrays(arrA, arrB);
});

function writeLine(value) {
  return process.stdout.write(`${value}\n`);
}

function reverseArray(input) {
  if (input.length <= 1) return input;

  const last = input[input.length - 1];
  const remaining = input.slice(0, input.length - 1);

  return [last, ...reverseArray(remaining)];
}

function orderArrays(arrA, arrB) {
  const greaterCount = arrA.length > arrB.length ? arrA.length : arrB.length;
  const newB = reverseArray(arrB);
  const newArray = [];

  let i = 0;

  while (i < greaterCount) {
    if (typeof arrA[i] === 'number') newArray.push(arrA[i]);
    if (typeof newB[i] === 'number') newArray.push(newB[i]);
    i++;
  }

  writeLine(arrA.toString());
  writeLine(arrB.toString());
  writeLine(newArray.toString());
  writeLine('---------------');
}
