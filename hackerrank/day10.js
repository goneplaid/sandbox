'use strict';

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

reader.on('line', data => {
  inputString += `${data}\n`;
});

reader.on('close', () => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const n = parseInt(readLine(), 10);
  const b = n.toString(2);

  let i = 0;
  let countOnes = 0;

  const counts = [];

  while (i < b.length) {
    if (b[i] === '1') {
      countOnes += 1;
    } else {
      if (countOnes !== 0) counts.push(countOnes);

      countOnes = 0;
    }

    i++;
  }

  console.log(Math.max.apply(null, counts));
}







function oldMain() {
  const n = parseInt(readLine(), 10);

  if (n < 1 || n > 10 ** 6) return;

  const binary = n.toString(2);

  let maxConsecutive = 0;
  let currentCount = 0;
  let i = 0;

  while (binary[i]) {
    const current = binary[i];

    process.stdout.write(`${i} - ${binary[i]}\n`);

    debugger;

    if (current === "1") {
      if (currentCount === 0 || binary[i - 1] === '1') currentCount++;
    } else {
      if (currentCount > maxConsecutive) maxConsecutive = currentCount;

      currentCount = 0;
    }

    i++;
  }

  process.stdout.write(`${maxConsecutive}`);
}
