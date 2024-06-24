function preload() {}

function setup() {
    canvas = createCanvas(1000, 480);
}

function draw() {
    fill("blue");
    circle(50, 50, 75);
    circle(50, 150, 75);
    circle(150, 150, 75);
    circle(50, 250, 75);
    circle(150, 250, 75);
    circle(250, 250, 75);
    circle(50, 350, 75);
    circle(150, 350, 75);
    circle(250, 350, 75);
    circle(350, 350, 75);
    fill("black");
    rect(450, 150, 150, 50);
    rect(500, 100, 50, 150);
    fill("blue");
    circle(750, 100, 75);
    circle(750, 200, 75);
    circle(850, 200, 75);
    circle(750, 300, 75);
    circle(850, 300, 75);
    circle(950, 300, 75);
}