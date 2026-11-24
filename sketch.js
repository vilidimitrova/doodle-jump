function setup() {
  createCanvas(600, 400);
  background(240);
}

function draw() {
  background(240);
  background("beige");

  line(0, 400, 500, 400);
  rect(0, 400, 500, 100); //floor
  fill("yellow");
  line(30, 500, 100, 400);
  line(130, 500, 200, 400);
  line(230, 500, 300, 400);
  line(330, 500, 400, 400);
}
//import player from charcter.js

function keyPressed() {
  if (keyCode === 38) {
    // spacebar for jump
    if (Py == 450) {
      // only allow jump if on the ground
      PyVelocity = 20; // set jump velocity
    }
  }
}
