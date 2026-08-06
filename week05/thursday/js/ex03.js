let faceX;
let faceY;
let faceSize = 160;
let eyeSize = 20;
let eyeDistance = 35;
let eyeYPosition = 25;
let mouthWidth = 70;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  faceX = mouseX;
  faceY = mouseY;

  background(220);


  fill('#FFD700');
  noStroke();
  circle(faceX, faceY, faceSize);

  fill(0);
  

  circle(faceX - eyeDistance, faceY - eyeYPosition, eyeSize);
  

  circle(faceX + eyeDistance, faceY - eyeYPosition, eyeSize);


  stroke(0);
  strokeWeight(4);
  line(
    faceX - mouthWidth / 2, 
    faceY + 35, 
    faceX + mouthWidth / 2, 
    faceY + 35
  );
}