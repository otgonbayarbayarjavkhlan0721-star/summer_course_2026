
let circleX;
let circleY;
let circleSize = 80;
let circleColor = "#3498db";

function setup() {
  createCanvas(600, 400);
}
function mousePressed() {
  circleX = mouseX;
  circleY = mouseY;
}
function draw() {
  background("#f5f5f5");
  circle(mouseX, mouseY, 80);


}
