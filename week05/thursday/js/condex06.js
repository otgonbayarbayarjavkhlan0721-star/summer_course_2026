let circleX = 300;
let circleY = 200;
let circleColor = "#3498db";
let circleSize = 90;

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {

  circleX = mouseX;
  circleY = mouseY;
}

function draw() {
  background("#f5f5f5");


  if (circleX < width / 2) {
    fill(circleColor);
  } else {
    fill("#e5d00c");
  }

  circle(circleX, circleY, circleSize);
}