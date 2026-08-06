let targetX = 100;
let targetY = 200;
let targetSize = 70;
let targetSpeed = 4;
let score = 0;
let lives = 3;
let gameState = "playing";

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);

  if (gameState === "playing") {
    targetX += targetSpeed;

    if (targetX < targetSize / 2 || targetX > width - targetSize / 2) {
      targetSpeed *= -1;
    }

    fill("#e74c3c");
    noStroke();
    circle(targetX, targetY, targetSize);
  } else if (gameState === "gameOver") {
    fill(0);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
  }

  fill(0);
  textSize(18);
  textAlign(LEFT, TOP);
  text("Score: " + score, 20, 20);
  text("Lives: " + lives, 20, 45);
}

function mousePressed() {
  if (gameState === "playing") {
    let dx = mouseX - targetX;
    let dy = mouseY - targetY;
    let d = sqrt(dx * dx + dy * dy);

    if (d < targetSize / 2) {
      score += 1;
      if (targetSpeed > 0) {
        targetSpeed += 1;
      } else {
        targetSpeed -= 1;
      }
      targetY = random(targetSize / 2, height - targetSize / 2);
    } else {
      lives -= 1;
      if (lives <= 0) {
        gameState = "gameOver";
      }
    }
  }
}

function doubleClicked() {
  targetX = 100;
  targetY = 200;
  targetSpeed = 4;
  score = 0;
  lives = 3;
  gameState = "playing";
}