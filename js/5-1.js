const readlineSync = require("readline-sync");


let serie = {};

function askTvSerie(){
    let name = readlineSync.question("what is your favorite serie ? ");
    let productionYear = readlineSync.question("what is the year of the production ? ");
    let castMembers = new Number(readlineSync.question("How many cast members do you know ? "));
    let c = [];

    serie.name = name;
    serie.productionYear = productionYear;
    for (let x = 0; x < productionYear; x++){
            c.push(readlineSync.question("the name: "));
    }
    serie.name = c;
    return serie;
}





askTvSerie();
console.log(JSON.stringify(serie));