function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225, 204, 169);

 
  stroke(0);
  strokeWeight(3);
  fill(240, 190, 10);
  circle(200, 200, 180);

  
  stroke(0);
  strokeWeight(4);
  noFill();
  arc(160, 180, 50, 40, PI, TWO_PI);
  arc(240, 180, 50, 40, PI, TWO_PI);

 
  arc(200, 210, 110, 90, 0, PI);

  noStroke();
  fill(210, 80, 90);
  circle(140, 210, 40);
  circle(260, 210, 40);
}