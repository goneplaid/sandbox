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
  main(inputStdin);
});

const Maths = {
  pow: function (base, exponent) {
    if (exponent === 1) return base;

    return base * Maths.pow(base, exponent - 1);
  }
}

function writeLine(value) {
  return process.stdout.write(`${value}\n`);
}

function main(input) {
  writeLine(Maths.pow(10, parseInt(input)));
}
