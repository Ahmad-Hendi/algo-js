const readlineSync = require("readline-sync");

let x = readlineSync.question("what is the length of a rectangle??")
let y = readlineSync.question("what is the  width of a rectangle??")

function calcSurface (l, w){
    return l * w;
}
console.log("this is the surface" + ' ' + calcSurface(x, y) )

