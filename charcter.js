let Playerx= 300;
let Playery= 370;

function setup() {
  createCanvas(600, 400);
  background('beige');
}

function draw() {
  background('beige');
//floor
  fill("yellow");
  rect(0, 390, width, 20);
//chacracter
  rect(Playerx, Playery, 20, 20);

  //check for keyboard input
  if (keyIsDown(LEFT_ARROW)) { 
    Playerx -= 5;
  }else if 
  (keyIsDown(RIGHT_ARROW)) {
    Playerx += 5;
  }
}
