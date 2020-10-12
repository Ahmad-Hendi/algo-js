const readlineSync = require("readline-sync");

let userName = readlineSync.question("What is your name?");
console.log("Hello" + ' ' + userName)