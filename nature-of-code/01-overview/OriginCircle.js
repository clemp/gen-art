class OriginCircle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.radius = r;
  }

  run() {
    this.display();
  }

  // Method to display
  display() {
    noStroke();
    fill(125, 35);
    ellipse(this.pos.x, this.pos.y, this.radius);
  }
}
