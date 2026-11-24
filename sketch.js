let bg;

function setup() {
  createCanvas(400, 600);
  bg = new Background(60);
}

function draw() {
  bg.progress = constrain(1 - mouseY / height, 0, 1);
  bg.display();
}
