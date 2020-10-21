'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function writeLine(string) {
  process.stdout.write(`${string}\n`);
}

function main() {
  const _ = require('lodash');
  const N = parseInt(readLine(), 10);

  if (N % 2 !== 0 || _.inRange(N, 5, 21)) return writeLine('Weird');
  if (_.inRange(N, 1, 6) || N > 20) writeLine('Not Weird');
}

