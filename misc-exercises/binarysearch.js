'use strict';

// EXAMPLE
// > npm run binarysearch
// 5000
// ----------
// found in 8 iterations

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


function writeLine(value) {
  return process.stdout.write(`${value}\n`);
}

let i = 0;

function binarySearch(s, n, sMin, sMax) {
  if (sMin > sMax) return 0;

  const sMid = Math.floor(sMin + sMax / 2);

  if ()

    return 5;
}

function main(input) {
  const value = parseInt(input);

  if (!value) {
    writeLine('numbers, please! 🖕');

    return;
  }

  const set = Array.from(Array(5000).keys());
  const result = binarySearch(set, value, 0, set.length - 1);

  if (result === 0) {
    writeLine('you fucked something up 🖕');
  }


  writeLine('----------')
  writeLine(`it took ${result} iterations`);
}
