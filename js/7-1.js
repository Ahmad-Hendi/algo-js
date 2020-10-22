const readlineSync = require ('readline-sync')

function random(){
    return Math.floor(Math.random() * 100 + 1)
}

console.log(random());

let guess = readlineSync.question("Guess the number ");
let x = random;

if (x < random){
    console.log("two low");
}else if (x > random){
    console.log("two high");
}else {
    console.log("perfect");
}


/* 
Make a program that generates an integer between 1 and 100 (don't display it to the user).

Then the program should display "Guess the number" and ask the user to guess. 
If the user enters a number which is too low it should display "Too low" and re-ask the question. 
If the user enters a 
number which is too high it should display "Too high" and re-ask the question. 
If the user guess correctly it should display "Well guessed!" and exit.

*/