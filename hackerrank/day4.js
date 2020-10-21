process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function writeLine(string) {
  process.stdout.write(`${string}\n`);
}

function Person(initialAge) {
  let actualAge = initialAge;

  if (actualAge < 0) {
    writeLine('Age is not valid, setting age to 0.');

    actualAge = 0;
  }

  this.age = actualAge;

  this.amIOld = function () {
    const { age } = this;

    if (age < 13) return writeLine('You are young.');
    if (age >= 13 && age < 18) return writeLine('You are a teenager.');

    writeLine('You are old.');
  };

  this.yearPasses = function () {
    this.age++;
  };
}

function main() {

  var T = parseInt(readLine());
  for (i = 0; i < T; i++) {
    var age = parseInt(readLine());
    var p = new Person(age);
    p.amIOld();
    for (j = 0; j < 3; j++) {
      p.yearPasses();

    }
    p.amIOld();
    console.log("");
  }
}
