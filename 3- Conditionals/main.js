
function setup() {
  createCanvas(1060, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  var x = 0;

  while(x < width) {
    fill(0, 155, 230);
    ellipse(x, 150, 25, 25);
    x += 50;
  }

  for (var y = 0; y < width; y += 50){
    fill(200, 15, 180);
    ellipse(y, 300, 25, 25);
  }
}
