'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

reader.on('line', inputStdin => {
  inputString += inputStdin;
});

reader.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the lonelyinteger function below.
function lonelyinteger(a) {
  let result = 0;

  for (let element of a) {
    result ^= element;
  }

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

  let result = lonelyinteger(a);

  ws.write(result + "\n");

  ws.end();
}
