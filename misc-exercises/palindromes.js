'use strict';

// EXAMPLE
// > npm run palindromes
// accbzyzxilicbbbded
// 13

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

function calculatePairs(input) {
  const allChars = [...input];
  const uniqueChars = _.uniq(allChars);
  const pairCounts = new Map();

  for (let i in uniqueChars) {
    const char = uniqueChars[i];
    const pairCount = Math.floor(allChars.filter(c => c === char).length / 2);

    pairCounts.set(char, pairCount);
  }

  return pairCounts;
}

function buildPalindrome(input) {
  if (isPalindrome(input)) return input.length;

  const characterPairs = calculatePairs(input);
  let palindromeHalf = '';
  let centerChar;

  characterPairs.forEach((value, key, map) => {
    if (value === 0 && !centerChar) {
      centerChar = key
    } else {
      palindromeHalf += Array(value).fill(key).join('');
    }
  });

  let palindrome = [...palindromeHalf].reverse().join('');

  if (centerChar) palindrome += centerChar;

  return palindrome + palindromeHalf;
}

function main(input) {
  const result = buildPalindrome(input);

  writeLine(result.length);
}
