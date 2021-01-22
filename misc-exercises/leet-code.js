'use strict';

process.stdin.setEncoding('utf-8');


function writeLine(value) {
  return process.stdout.write(`${value}\n`);
}

var subarraySum = function (nums, k) {
  const numLength = nums.length;
  let totalSum = 0;

  for (let i = 0; i < numLength; i++) {
    let innerSum = 0;

    for (let s = i; s < numLength; s++) {
      innerSum = innerSum + nums[s];

      if (innerSum === k) totalSum++;
    }
  }

  return totalSum;
};

function main() {
  const values = [1, -1, 0];
  const count = 0;

  const result = subarraySum(values, count);

  writeLine(result.toString());
}

main();
