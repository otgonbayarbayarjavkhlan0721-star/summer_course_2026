function setup() {
  createCanvas(600, 600);
}

function mousePressed() {

}

function draw() {     
  background('#f2f2f2');
  fill('#098327ff');
  circle(300, 200, 120);
  
  let a = 7;
  let b = 7;
  print(a >= b);
  print(a < b);
  print(a <= b);
  print('heloo');
  print(a == b);
  print(mouseX);

  if (mouseX > 300) {
    fill('#e41212ff');
    circle(300, 200, 120);
  }
}