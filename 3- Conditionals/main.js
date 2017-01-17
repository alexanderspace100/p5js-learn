
function setup() {
  createCanvas(1060, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  for (var x = 0; x <= mouseX; x += 50) {
    for (var y = 0; y <= height; y += 50) {
    fill(random(155), 30, random(185));
    ellipse(x, y, 35, 35);
    }
  }
}
