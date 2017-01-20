var bubbles = [];

function setup() {
  createCanvas(1020, 600);
  for (var i = 0; i < 70; i++) {
    var x = random(width);
    var y = random(height);
    bubbles.push(new Bubble(x, y));
  }
}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}
