class LineNetwork {
  constructor(x1, y1, x2, y2) {
    this.pos_start = createVector(x1, y1);
    this.pos_end = createVector(x2, y2);
  }

  run() {
    this.display();
  }

  // Method to display
  display() {
    stroke(255);
    line(this.pos_start.x, this.pos_start.y, this.pos_end.x, this.pos_end.y);
  }
}
