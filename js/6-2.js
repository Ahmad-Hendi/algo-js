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











