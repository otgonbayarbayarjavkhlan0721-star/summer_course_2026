    let WIDTH=400;
    let HEIGTH=400;
    let ELIPSEY=200;
    function setup() { 

    createCanvas(WIDTH, HEIGTH);
 
}

function draw() {
let RADUIS=80;

    // 1. Sunset Sky
    background(255, 160, 122); // Light salmon

    // 2. The Sun
    noStroke();
    fill(255, 215, 0); // Gold
    ellipse(300, 100, 80, 80); // Placed in the top right

    // 3. The Ground
    fill(46, 139, 87); // Sea green
    rect(0, 300, WIDTH, 100);

    // 4. The Tree Trunk
    fill(101, 67, 33); // Dark brown
    rect(80, 200, 40, 120);

    // 5. The Tree Leaves (Overlapping circles)
    fill(34, 139, 34); // Forest green
    // Left leaf clump
    ellipse(70, ELIPSEY, 80,RADUIS);
    // Right leaf clump
    ellipse(130, ELIPSEY, 80, RADUIS);
    ellipse(140, ELIPSEY, 80, RADUIS);
    ellipse(150, ELIPSEY, 80, RADUIS);
    // Top center leaf clump
    ellipse(100, 160, 90, 90);
}