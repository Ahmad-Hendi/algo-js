const readlineSync = require("readline-sync");

let min = readlineSync.question("enter a min number: ")
let max = readlineSync.question("enter a max number: ")
let current = readlineSync.question("enter a current number: ");

// if(min > max){
//     console.log("try again")
// }
// let current = readlineSync.question("enter a current number: ");
// if ((min < current) && (current < max)){
//     console.log("your number in between min and max");
// }else {
//     console.log("your number is not between min and max");
// }


if (min > max){
    console.log("error, be sure that your input the right number");
}else if ((min < current) && (current < max)){
    console.log("your number in between min and max");
}else {
    console.log("your number is not between min and max");
}