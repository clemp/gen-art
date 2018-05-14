class EndCircle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.acc = createVector(random(-0.5, 0.5),random(-0.5, 0.5));
    this.velocity = createVector(random(-1,1),random(-1,1));
    this.radius = r;
  }

  run() {
    this.display();
    this.move();
  }

  // Method to display
  display() {
    noStroke();
    fill(255, 204, 0, 35);
    ellipse(this.pos.x, this.pos.y, this.radius);
  }

  move() {
    this.velocity.add(this.acc);
    this.pos.add(this.velocity);
  }
}
