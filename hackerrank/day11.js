'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = [];
let currentLine = 0;

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

reader.on('line', data => {
  inputString.push('1 1 1 0 0 0');
  inputString.push('0 1 0 0 0 0');
  inputString.push('1 1 1 0 0 0');
  inputString.push('0 0 2 4 4 0');
  inputString.push('0 0 0 2 0 0');
  inputString.push('0 0 1 2 4 0');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

const shapes = [];

function readShape(m, x, y) {
  const topRow = Number(m[y][x]) + Number(m[y][x + 1]) + Number(m[y][x + 2]);
  const midRow = Number(m[y + 1][x + 1]);
  const bottomRow = Number(m[y + 2][x]) + Number(m[y + 2][x + 1]) + Number(m[y + 2][x + 2]);

  return topRow + midRow + bottomRow;
}

function findLargestShape(matrix) {
  for (let y = 0; y < matrix.length; y++) {
    const innerArray = matrix[y];

    for (let x = 0; x < innerArray.length; x++) {
      if (y < 4 && x < 4) {
        shapes.push(readShape(matrix, x, y));
      }
    }
  }

  return Math.max.apply(null, shapes);
}

function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  }

  findLargestShape(arr);
}
