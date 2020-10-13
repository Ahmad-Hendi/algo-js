const readlineSync = require("readline-sync");

let number = new Number(readlineSync.question('enter a number between 1 and 7'));

if (number == 1){
    console.log("Monday");
}else if (number == 2){
    console.log("tusday");
}else if (number == 3){
    console.log("wensday");
}else if (number == 4){
    console.log("tursday");
}else if (number == 5){
    console.log("friday");
}else if (number == 6){
    console.log("saturday");
}else if (number == 7){
    console.log("Sunday")
}else console.log("you didint choose the right number, try again")