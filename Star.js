export default class starPlayer {
    xPos;
    yPos;
    radius;
    vy;
    gravity;

    constructor(img) {
        this.img =img;
        this.radius = 100;
        this.xPos = 50;
        this.yPos = height - this.radius;
        this.vy = 0;
        this.gravity = 1;
    }

    draw() {
        rect(this.xPos, this.yPos, this.radius, this.radius);
    }

    jump() {
        if (this.yPos == height - this.radius){
        this.vy = -25;
        }
    }

    move() {
        this.yPos += this.vy;
        this.vy += this.gravity;
        this.yPos = constrain(this.yPos, 0, height - this.radius);
    }
    //telling the class to access the png
    show() {
        image(
            this.img,
            this.xPos,
            this.yPos,
            this.radius,
            this.radius
        );
    }
}