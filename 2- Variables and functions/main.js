var colorX = 0;
var colorY = 0;

function setup() {
  createCanvas(1020, 560);
}

function draw() {
  stroke(120, 55, 155);
  colorX = map(mouseX, 0, 1020, 0, 235);
  colorY = map(mouseY, 0, 235, 0, 600);
  background(colorX);
  background(colorY);
  ellipse(mouseX, mouseY, 30, 30);
}
