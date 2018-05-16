// Meant to have passed one OriginCircle, one EndCircle object
// for x1,y1,x2,y2 coordinates.
line_network = []

class LineNetwork {
  constructor(obj) {
    this.pos_start = createVector(obj1.pos.x, obj1.pos.y);
    this.pos_end = createVector(obj2.pos.x, obj2.pos.y);
  }

  run() {
    this.display();
  }

  add_line() {
    stroke(255);
    line()
  }
  // Method to display
  display() {
    stroke(255);
    line(this.pos_start.x, this.pos_start.y, this.pos_end.x, this.pos_end.y);
  }
}
