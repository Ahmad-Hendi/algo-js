const readlineSync = require("readline-sync");
let ask = Math.floor(readlineSync.question("how many random number do you want ?"));

// the average of an array
function average(arr){
    let resualt = 0;
    for (let i = 0; i < arr.length; i++){
        resualt += arr[i]
    }
    resualt = resualt / arr.length
    return resualt;
}




//  the minimum element of an array
function min(arr){
    return arr[0]
}


//  the Max element of an array
function maxi(arr){
    return Math.max(...arr)

}






// Return a random number between 1 and 10 
function rand10(){   
    return  Math.floor(Math.random() * 11 );
}

// Generate an array of n numbers between 1 and 10 
function multiRand10(n){
    let arr = []
    for (let x=0; x<=n-1; x++){
        arr.push(rand10());
    }
    return arr;
}

// console.log("you have" + multiRand10());

console.log(`you have ${ask} randome numbers in your array: ${multiRand10(ask)}`);
console.log(average(multiRand10(ask)));
// console.log(min(ask));
// console.log(maxi(ask));















// function rand10(){   
//     return  Math.floor(Math.random() * 11 );
// }

// let ask = Math.floor(readlineSync.question("how many random number do you want ?"));

// function multiRand10(n){
//     for (let x=0; x<=(n-1); x++){
//         arr.push(rand10());
      
//     }
//     return arr;
   
    
// }

// console.log(`you have ${ask} randome numbers in yor array: ${multiRand10(ask)} ${min}`)