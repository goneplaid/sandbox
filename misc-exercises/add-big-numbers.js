'use strict';

/*
  This example problem requires that you add two very large integers together. Integers
  that exceed Number.MAX_SAFE_INTEGER means that you need to manually add the numbers
  together, digit by digit, and return the result as a string. 
 
  EXAMPLE

  > npm run add-big-numbers
  > adding "999719925474492812" and "8349349989834983"
  > equals "1008069275464327795"
*/

/**
 * Because of the physical limitations on large numbers in JavaScript, they
 * have to be handled as strings and added together similarly to how adding
 * is taught to children in middle school.
 * 
 * Here we take two strings and we add up the characters in each sequence,
 * from right to left, and add them up one by one, remembering to carry the
 * one when appropriate :)
 * 
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (string1, string2) {
  // An array of values collected during adding
  let sumValues = [];
  let carry = 0;

  for (let i = 0; i < string1.length; i++) {
    const a = string1.charAt(string1.length - 1 - i);
    const b = string2.charAt(string2.length - 1 - i) || 0;
    const sum = Number(a) + Number(b) + carry;

    if (sum > 9) {
      sumValues.push(sum.toString().charAt(1));
      carry = 1;
    } else {
      sumValues.push(sum.toString());
      carry = 0;
    }

    writeLine(`${a} + ${b} = ${sum}`);
  }

  if (carry) sumValues.push(carry.toString());

  return sumValues.reverse().join('');
};

function writeLine(value) {
  return process.stdout.write(`${value}\n`);
}

function main() {
  const string1 = "999719925474492812";
  const string2 = "8349349989834983";

  writeLine(`adding numbers ${string1} and ${string2}`);
  writeLine(`equals ${addStrings(string1, string2)}`);
}

main();
