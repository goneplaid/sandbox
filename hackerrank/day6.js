function writeLine(string) {
  return process.stdout.write(`${string}\n`);
}

function processData(input) {
  const inputLines = input.split('\n');
  const count = inputLines[0];
  let i = 1;

  while (i <= count) {
    const value = inputLines[i];
    const chars = [...value];
    const evenChars = chars.filter((_, index) => (index + 1) % 2 === 0);
    const oddChars = chars.filter((_, index) => (index + 1) % 2 !== 0);

    writeLine(`${oddChars.join('')} ${evenChars.join('')}`);

    i++;
  }
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
