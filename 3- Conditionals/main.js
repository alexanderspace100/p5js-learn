var on = false;

function setup() {
  createCanvas(1060, 400);
}

function draw() {
  if (on) {
    background(40, 105, 70);
  } else {
    background(0);
  }

  stroke(255);
  strokeWeight(4);
  noFill();

  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    fill(155, 40, 175);
  }
  rectMode(CENTER);
  rect(300, 200, 100, 100);
}

function mousePressed() {
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    on = !on;
  }
}
