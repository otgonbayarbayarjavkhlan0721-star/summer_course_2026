function setup() {
  createCanvas(400, 400);
}

function draw() {
  describe('Lorem ipsum dolor sit, amet consectetur adipisicing.');

  background(220);

  fill(255, 200, 0);
  circle(200, 200, 100);

  fill(0);
  circle(200, 200, 80);
  circle(330, 160, 20);

  line(270, 220, 330, 220);

  fill(155);
  rect(200, 200, 50, 90);

  strokeWeight(5);
  point(50, 50);
  point(185, 20);

  square(-30, 20, 55);
  triangle(30, 75, 58, 20, 86, 75);
  ellipse(250, 250, 80, 40);
  strokeWeight(2);
  arc(50, 150, 80, 80, 0, PI + HALF_PI);
}