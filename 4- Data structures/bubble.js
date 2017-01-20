function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255, 100);
  this.lifespan = 255;

  this.display = function() {
    noStroke();
    fill(255, this.lifespan);
    ellipse(this.x, this.y, 36, 36);
  }

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.lifespan = this.lifespan -1;
  }

}
