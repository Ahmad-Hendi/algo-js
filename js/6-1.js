// A=πr2 = math.pi * (math.pow(radius, 2))



class Circle {
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset){
        this.xPos = this.xPos + this.xOffset;
        this.yPos = this.yPos + this.yOffset;
        
    }
    surface(){
        return Math.PI*(Math.pow(this.radius,2));
    }
}


let circle = new Circle(2, 3, 10);
console.log(circle);
circle.move(-2 , 3);
console.log(circle.surface());


