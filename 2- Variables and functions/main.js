var ellipseX = 220;
var ellipseY = 20;


function setup() {
  createCanvas(1020, 560);
  background(150);
}

function draw() {
  stroke(120, 55, 155);
  ellipse(ellipseX, ellipseY, 30, 30);
  ellipseX += 2;
  ellipseY += 2;
}

function mousePressed() {
  background(150);
}
