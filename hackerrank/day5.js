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
  return process.stdout.write(`${string}\n`);
}

function main() {
  const n = parseInt(readLine(), 10);
  const multipliers = Array.from(Array(10).keys());

  if (n >= 2 && n <= 20) {
    multipliers.forEach((value) => {
      const multiplier = value + 1;
      writeLine(`${n} x ${multiplier} = ${n * multiplier}`);
    });
  }
}
