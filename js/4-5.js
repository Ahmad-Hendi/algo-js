/*
it is the square root of
(x2 - x1)2 + (y2 - y1)2 

*/

// let A = [7, 3]
// let B = [8, 2]

// function calcDistance(A,B){
//     console.log(Math.sqrt(Math.pow(B[0] - A[0]) + Math.pow(B[1] - A[1])));
// }


let arrA=[1,1];
let arrB=[3,1];


function calcDistance(A,B){
    return Math.sqrt(Math.pow(arrB[0] - arrA[0], 2) + Math.pow(arrB[1] - arrA[1], 2)) 
}

calcDistance()
console.log(calcDistance(arrA,arrB));

