// Run the npm script `npm fibonacci2` to see the first 25 values in the fibonacci sequence.

function writeLine(value) {
  return process.stdout.write(`${value}\n`);
}

function fibonacci(n) {
  // Hard code the first three values in the set with guard clauses: 0, 1, 1
  if (n < 1) return 0;
  if (n <= 2) return n - 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const sequence = [];

for (let i = 0; i <= 25; i++) {
  sequence.push(fibonacci(i));
}

writeLine(sequence.join(', '));
