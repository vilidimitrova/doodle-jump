let bg;
let starPlayer;
let gameCharacter;

function preload() {
  gameCharacter = loadImage('star.png');
}

function setup() {
  createCanvas(400, 600);
  bg = new Background(60);
}

function keyPressed() {
  if(key == ' ') {
    starPlayer.jump();
  }
}

function draw() {
  bg.progress = constrain(1 - mouseY / height, 0, 1);
  bg.display();
  starPlayer.show();
  starPlayer.move();
}
