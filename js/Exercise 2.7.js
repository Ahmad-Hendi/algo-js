const readlineSync = require("readline-sync");

let num =  Number(readlineSync.question('enter a number n'));
let sum = 0;


for (let i = 0; i < num; i++){
   let x =  Number(readlineSync.question('enter a number n'));
   sum += x;
}
console.log(sum)
// let num2 = new Number(readlineSync.question('enter a number n'));
// let sum = num1 + num2;
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);










