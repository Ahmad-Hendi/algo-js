const readlineSync = require("readline-sync");

let userName = readlineSync.question('What is you name?');
let userFirstName = readlineSync.question('What is you firstname?');
let userCity = readlineSync.question('where are you from?');

console.log("Your name is " + userName + ' ' + userFirstName + ' ' + "you are from" + ' ' + userCity);