/*

class Rectangle{
    constructor(topLeftXPos, topLeftYPos, width, lenght){
        this.topLeftXPos=topLeftXPos;
        this.topLeftYPos=topLeftYPos;
        this.width=width;
        this.lenght=lenght;
    }
    collides(otherRectangle){
        let collides = false;
        if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width && 
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.lenght &&
            this.topLeftYPos + this.lenght > otherRectangle.topLeftYPos){
                collides = true;
            }
        return collides;
    }
}

// let topLeftXPos;
// let topLeftYPos;
// let width;
// let lenght;
let rectangleArray = [];
let topLeftXPos=Math.random()*100;
let topLeftYPos=Math.random()*100;
let width=Math.random()*100;
let lenght=Math.random()*100;
rectangleArray[0]=new Rectangle(topLeftXPos,topLeftYPos,width,lenght);
for (let i=1; i<1000;i++){
    topLeftXPos=Math.random()*100;
    topLeftYPos=Math.random()*100;
    width=Math.random()*100;
    lenght=Math.random()*100;
    rectangleArray[i]=new Rectangle(topLeftXPos,topLeftYPos,width,lenght);
    for (let j=1; j<=i;j++){
        console.log(rectangleArray[i].collides(rectangleArray[i-j]));
    }
} 

*/


class Rectangle{
    constructor(topLeftXPos, topLeftYPos, width, lenght){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.lenght = lenght;
        

    }
    collides(otherRectangle){
        let collides = false;
        if (this.topLeftXPos === otherRectangle.topLeftXPos && this.topLeftYPos === otherRectangle.topLeftYPos && this.width === otherRectangle.width && this.lenght === otherRectangle.lenght){
            collides = true;
        }
        return collides;
    }
}

let rectangle = new Rectangle(1,1,2,2);
let rectangle1 = new Rectangle(2,2,2,2);
let rectangle3 = new Rectangle(2,2,2,2);
console.log(rectangle.collides(rectangle1));
console.log(rectangle1.collides(rectangle));
console.log(rectangle1.collides(rectangle3));










