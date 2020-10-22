const readlineSync = require("readline-sync");

let serie = {};
let c = [];


function askTvSerie(){
    let name = readlineSync.question("what is your favorite serie ? ");
    let productionYear = readlineSync.question("what is the year of the production ? ");
    let castMembers = new Number(readlineSync.question("How many cast members do you know ? "));
    
    serie.name = c;
    serie.name = name;
    serie.productionYear = productionYear;

    
    for (let x = 0; x < productionYear; x++){
            c.push(readlineSync.question("the name: "));
    }
    
    return serie;
}


function randomizeCast(arr) {
	for (let x = arr.length-1; x > 0; x--) {
		let random = Math.floor(Math.random() * x);
		let temp = arr[x];
		arr[x] = arr[random];
		arr[random] = temp;
	}

    console.log(arr);
}


askTvSerie();
randomizeCast(c);
console.log(JSON.stringify(serie));


