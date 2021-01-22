'use strict';

process.stdin.setEncoding('utf-8');


function writeLine(value) {
  return process.stdout.write(`${value}\n`);
}

var moveZeroes = function (nums) {
  let length = nums.length;
  let count = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] != 0) {
      nums[count++] = nums[i];
    }
  }

  while (count < length) {
    nums[count++] = 0;
  }

  return nums;
};

function main() {
  const input = [0, 0, 1];

  const result = moveZeroes(input);

  writeLine(result.toString());
}

main();
