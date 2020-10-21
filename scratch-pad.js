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

reader.on('line', inputStdin => {
  main(inputStdin);
  // inputString += `${inputStdin}\n`;
});


function writeLine(string) {
  return process.stdout.write(`${string}\n`);
}

function main() {
  const n = parseInt(readLine(), 10);
  const binary = [...n.toString(2)].map(s => parseInt(s));

  // if there's at least one 1, then we have at least one consecutive 1. Umm, yep.
  let consecutiveCount = binary.includes(1) ? 1 : 0;

  consecutiveCount += binary.reduce((a, b) => {
    return (a === 1 && b === 1) ? 1 : 0;
  });

  writeLine(consecutiveCount);
}



/*
reader.on('close', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});
*/
/*
function readLine() {
  return inputString[currentLine++];
}
*/
