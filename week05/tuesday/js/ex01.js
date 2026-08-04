
let X=1;
let Y=400;
function setup() { 

    createCanvas(400, 400);
 
}

function draw() {
    background('#b06d6dff');
    fill('#000');
    circle(X,Y,50);
    X=X+1;
    Y=Y-1;


}