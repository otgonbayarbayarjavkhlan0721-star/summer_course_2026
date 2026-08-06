function setup() {
  createCanvas(600, 600);
}

function mousePressed() {

}

function draw() {     
  background('#f2f2f2');

  if (mouseY < height / 2) {
    fill('#2ecc71');
    circle(300, 200, 140);
  } else {
    fill('#9b59b6');
    circle(300, 200, 140);
  }
}