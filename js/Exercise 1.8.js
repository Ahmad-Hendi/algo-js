const readlineSync = require("readline-sync");

let firstQ = readlineSync.question("What is your name?")
let secondQ = readlineSync.question("and your last name?")
// let thirdQ = readlineSync.question("are you sure?")

let myAnswear1 = firstQ;
let myAnswear2 = secondQ;
// let myAnswear3 = thirdQ;
let myAnswear4 = "Stracriex";
let myAnswear5 = "March";





console.log("your name is not" + ' ' + myAnswear1 + "and your last name is not" + ' ' + myAnswear2 + "your name is" + ' ' + myAnswear4 + "and you come from" + ' ' + myAnswear5 );