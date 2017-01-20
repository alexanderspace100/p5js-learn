var bubbles = [];

function setup() {
  createCanvas(1020, 600);
  // for (var i = 0; i < 70; i++) {
  //   var x = random(width);
  //   var y = random(height);
  //   bubbles.push(new Bubble(x, y));
  // }
}

function mousePressed() {
  var b = new Bubble(mouseX, mouseY);
  bubbles.push(b);
}

function draw() {
  background(180);
  for (var i = bubbles.length-1; i >=0; i--) {
    bubbles[i].update();
    bubbles[i].display();
    if (bubbles[i].lifespan < 0) {
      bubbles.splice(i, 1);
    }
  }
}
