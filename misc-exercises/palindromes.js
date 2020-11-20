'use strict';

/*
  Run the npm script and then type in an arbitrary number of characters
  and press enter. The longest possible palindrome will be displayed along
  with its length.

  EXAMPLE

  > npm run palindromes
  > jalkjdsfljsdjllkjlkj8u9838&**^&*^&&^
  | ----------
  | sllkjjjd^8*&&*&&*8^djjjklls
  | 27 chars long
*/

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

/*
  This function takes an arbitrary length string and returns two structures,
  a map and an array. The map contains a count for each character that can be
  paired with another of its type. The array contains references of characters
  that only appears once or in odd numbers.

  For example, the input `aaccdiiaccdl` would return the following map of pair
  counts and an array of single & odd numbered characters:

  map: {
    a: 1,
    c: 2,
    d: 1,
    i: 1
  }

  array: [ a, l ]
*/
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

/*
  This function takes user input and displays the longest possible palindrome and
  its length.

  It sorts the characters in the string by counting the number of pairs that
  occur for each one and also creates a list of unique chars or ones that occur in
  odd numbers, which it uses for the mid-point of the palindrome (if one is found).

  It then assembles half the palindrome, inserts a unique center character if one was
  found, and mirrors the other half for first half of the full palindrome that is
  displayed to the user.
*/
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
