const readlineSync = require("readline-sync");

let userName = readlineSync.question("How old are you?");
let age = userName;
 

if (age > 18){
    console.log("you are an adult");
}else{
    console.log("you are not yet an adult")
}

