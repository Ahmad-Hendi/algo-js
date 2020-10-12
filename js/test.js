const readlineSync = require("readline-sync");


// let userName = readlineSync.question('Can you give me your name please?');
// console.log("Hello " + userName);

// console.log("It works !!!");





/* Types of variables :

1- numbers
2- String
3- Booleans

*/

// 1-number


/* let age = 23;

let sisterAge = age + 11;

age += 12; // age = age + 12;

console.log(age); */

// 2- string 

// let name = "Jean";

// let nameSister = "Emma";

// console.log("my name is " + name)

// let userName = readlineSync.question("what is your name?");
// console.log("he's called" + userName);


let htmlBadges = new Number (readlineSync.question('How many HTML badges do you have?'));
let cssBadges = new Number (readlineSync.question('How many css badges do you have?'));

let totalBadges = htmlBadges + cssBadges;

console.log('Woaw, you have ' + totalBadges + "!");
