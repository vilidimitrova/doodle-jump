export default class starPlayer {
    xPos;
    yPos;
    radius;
    vy;
    gravity;

    constructor() {
        this.radius = 100;
        this.xPos = 50;
        this.yPos = height - this.radius;
        this.vy = 0;
        this.gravity = 1;
    }

    jump() {
        if (this.yPos == height - this.radius){
        this.vy = -25;
        }
    }

    move() {
        this.yPos += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.radius);
    }

    show() {
        image(gameCharacter,this.xPos,this.yPos,this.radius,this.radius);
    }
}