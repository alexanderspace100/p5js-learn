
function setup() {
  createCanvas(1060, 600);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill;
  if (mouseX > 400) {
    ellipse(300, 200, 100, 100);
  } else if (mouseY > 300){
    rect(300, 200, 100, 100);
  } else {
    point(300, 200);
  }
}
