function writeLine(string) {
  return process.stdout.write(`${string}\n`);
}

function processData(input) {
  const inputLines = input.split('\n');

  const n = parseInt(inputLines.shift());

  if (!(n >= 1 && n <= Math.pow(10, 5))) return;

  const keyValuePairs = inputLines.slice(0, n);
  const queries = inputLines.slice(n, inputLines.length + 1);
  const phoneBook = new Map(
    keyValuePairs.map(input => input.split(' '))
  );

  queries.forEach(element => {
    if (phoneBook.has(element)) {
      writeLine(`${element}=${phoneBook.get(element)}`);
    } else {
      writeLine('Not found');
    }
  });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
