let targetX;
let targetY;
let targetSize = 80;
let score = 0;

function setup() {
  createCanvas(600, 400);
  targetX = random(targetSize / 2, width - targetSize / 2);
  targetY = random(targetSize / 2, height - targetSize / 2);
}

function draw() {
  background(240);

 
  fill("#e74c3c");
  circle(targetX, targetY, targetSize);

 
  fill(0);
  textSize(24);
  text("Score: " + score, 20, 40);
}

function mousePressed() {
  let dx = mouseX - targetX;
  let dy = mouseY - targetY;

  let distanceSquared = dx * dx + dy * dy;
  let radius = targetSize / 2;
  let radiusSquared = radius * radius;

  if (distanceSquared < radiusSquared) {
    score += 1;
    targetX = random(targetSize / 2, width - targetSize / 2);
    targetY = random(targetSize / 2, height - targetSize / 2);
  } else {
    score -= 1;
  }
}