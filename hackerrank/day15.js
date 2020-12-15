process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

reader.on('line', data => {
  input_stdin += `${data}\n`;
});

reader.on('close', () => {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function writeLine(value) {
  return process.stdout.write(`${value}\n`);
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.insert = function (head, data) {
    // I cheated on this one :(
    if (!head) return new Node(data);

    const originalHead = head;

    while (head.next) head = head.next;
    head.next = new Node(data);

    return originalHead;
  };

  this.display = function (head) {
    var start = head;
    while (start) {
      process.stdout.write(start.data + " ");

      start = start.next;
    }
  };
}

function main() {
  var T = parseInt(readLine());
  var head = null;
  var mylist = new Solution();

  for (i = 0; i < T; i++) {
    var data = parseInt(readLine());
    head = mylist.insert(head, data);
  }

  mylist.display(head);
}



