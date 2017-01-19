var bubbles = [];


function setup() {
  createCanvas(1020, 600);
  for (var i = 0; i < 400; i++) {
    bubbles[i] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {
        noStroke();
        fill(100, 25, 190);
        ellipse(this.x, this.y, 34, 34);
      },
      move: function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
    }
  }

}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}
