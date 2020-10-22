const readlineSync = require("readline-sync");

let ask = Math.floor(readlineSync.question("how many random number do you want ?"));



function rand10(){   
    return  Math.floor(Math.random() * 11 );
}
function multiRand10(n){
    let arr = []
    for (let x=0; x<=n-1; x++){
        arr.push(rand10());
    }
    return arr;
}

console.log(`you have ${ask} randome numbers in yor array: ${multiRand10(ask)}`)









// let random = Math.floor(Math.random() * 11 );

// function rand10(){   // function with no parameters
//     console.log(random)
// }

// rand10()

// let random = arr[Math.floor(Math.random()*arr.length)];

// function multiRand(n){   
    
//     console.log(random)
// }

// multiRand(n)






