const readlineSync = require("readline-sync");

let shoesSize = readlineSync.question('What is your shoe size?');
let birthYear = readlineSync.question('what is your birth');
let resualt = shoesSize * 2;
let resualt1 = resualt + 5;
let resualt2 = resualt1 * 50;
let resualt3 = resualt2 - birthYear;
let resualt4 = resualt3 + 1766;

console.log(resualt);
console.log(resualt1);
console.log(resualt2);
console.log(resualt3);
console.log(resualt4);




