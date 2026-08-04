
 let count = 10;
function setup() {
let count = 50; 
  createCanvas(400, 400);
  print("setup доторх count: " + count);
}

function draw() {
   
  background('#b06d6dff');
  fill('#000');
  square(200, 200, count);
  print(count);
  noLoop();
}