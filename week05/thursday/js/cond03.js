function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (mouseX < 200) {
    background('#ff0000'); 
    
  } else if (mouseX < 400) {
    background('#fffb00'); 
  } else {
    background('#56e73c'); 
  }

  fill('#ffffff');
  circle(mouseX, mouseY, 30);
}