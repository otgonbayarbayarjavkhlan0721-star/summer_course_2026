let rectX=200;
let rectY=200;
let rectWidth = 90;
let rectHeight = 50;

let rectRed = 255;
let rectGreen = 100;
let rectBlue = 50;

function setup() {
  createCanvas(600, 400);


}

function draw() {
  background(220);
  
  fill(rectRed, rectGreen, rectBlue);

  
  rect(rectX, rectY, rectWidth, rectHeight);
}

function mousePressed() {
  rectX = mouseX;
  rectY = mouseY;
  
  rectRed = random(255);
  rectGreen = random(255);
  rectBlue = random(255);
  
  rectWidth = random(30, 150);
  rectHeight = random(20, 100);
}