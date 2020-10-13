const readlineSync = require("readline-sync");

let number = Number(readlineSync.question('enter your favorite number'));

while (number !== 42){
    console.log("are you sure");
    number = Number(readlineSync.question('enter your favorite number'));
}if (number = 42){
    console.log("bravo");
}
    

