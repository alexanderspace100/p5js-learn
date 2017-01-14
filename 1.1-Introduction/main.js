function setup() {
  createCanvas(1020, 560);
}

function draw() {
  background(140, 110, 130);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //body
  fill(255, 0, 0);
  rect(240, 145, 20, 100);

  //head
  fill(120, 55, 155);
  ellipse(240, 115, 60, 60);

  //eyes
  fill(0, 255, 0, 90);
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);

  //legs
  line(230, 195, 220, 205);
  line(250, 195, 260, 205);
}
