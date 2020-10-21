function processData(input) {
  const evenChars = [];
  const oddChars = [];

  [...input].forEach((char, index) => {
    if (char === '\n') return;

    if ((index + 1) % 2 === 0) {
      evenChars.push(char);
    } else {
      oddChars.push(char);
    }
  });

  process.stdout.write('');
  process.stdout.write(`${oddChars.join('')}  ${evenChars.join('')}`);
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
