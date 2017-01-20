function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255, 100);

  this.display = function() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, 36, 36);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 18) {
      this.col = color(205, 0, 170);
    }
  }

}
