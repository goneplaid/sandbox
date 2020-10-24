'use strict';

// EXAMPLE
// > npm run palindromes
// accbzyzxilicbbbded
// ----------
// zidcbbabbcdiz
// 13 chars long

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

function isPalindrome(value) {
  return value === [...value].reverse().join('');
}

function writeLine(value) {
  return process.stdout.write(`${value}\n`);
}

function sortChars(input) {
  const pairCounts = new Map();
  const discardedChars = [];

  const allChars = [...input];
  const uniqueChars = _.uniq(allChars).sort();

  for (let i in uniqueChars) {
    const char = uniqueChars[i];
    const charCount = allChars.filter(c => c === char).length;

    if (charCount === 1) {
      discardedChars.push(char);

      continue;
    }

    if (charCount % 2 !== 0) discardedChars.push(char);

    pairCounts.set(char, Math.floor(charCount / 2));
  }

  return {
    pairCounts,
    discardedChars
  }
}


function buildPalindrome(input) {
  if (isPalindrome(input)) return input;

  const {
    pairCounts,
    discardedChars
  } = sortChars(input);

  let palindomeHalf = '';

  pairCounts.forEach((value, key) => {
    palindomeHalf += Array(value).fill(key).join('');
  });

  let palindromeMirror = [...palindomeHalf].reverse().join('');

  if (discardedChars.length) palindromeMirror += discardedChars[0];

  return palindromeMirror + palindomeHalf;
}

function main(input) {
  const result = buildPalindrome(input);

  writeLine('----------')
  writeLine(result);
  writeLine(`${result.length} chars long\n`);
}
