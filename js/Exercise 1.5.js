const readlineSync = require("readline-sync");

let decimal = readlineSync.question('write a decimal number with');
let other = readlineSync.question('second number is');



console.log(Math.trunc(decimal) * other);