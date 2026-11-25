import starPlayer from "./Star";
import Setting from "./background";

let gameCharacter; //name for object or the star
let setting;
let starImage;

function preload() {
  starImage = loadImage('star.png'); //image of star
}

function setup() {
  createCanvas(400, 600);
  setting = new Setting(100); //using the setting class
  gameCharacter = new starPlayer(starImage); //using the star class
}

//jump function
function keyPressed() {
  if(key == ' ') {
    gameCharacter.jump();
  }
}

//displaying our images
function draw() {
  setting.progress = 0.5;
  setting.display();
  gameCharacter.show();
  gameCharacter.move();
}

//making the functions accessible globally
//this fixed the problem of the functions never being read
window.preload = preload;
window.setup = setup;
window.draw = draw;
window.keyPressed = keyPressed;
