var b1;
var b2;

function setup() {
  createCanvas(1020, 600);
  b1 = new Bubble(250, 200);
  b2 = new Bubble(350, 200);
}

function draw() {
  background(180);
  b1.update();
  b2.update();
  b1.display();
  b2.display();

  if (b1.intersects(b2)) {
    b1.changeColor();
    b2.changeColor();
  }
}
