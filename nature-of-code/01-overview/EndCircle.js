class EndCircle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.origin = createVector(x,y);
    this.acc = createVector(random(-0.01, 0.01),random(-0.01, 0.01));
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
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.radius);
  }

  move() {
    if (dist(this.pos.x, this.pos.y, this.origin.x, this.origin.y) < 150) {
      this.velocity.add(this.acc);
      this.pos.add(this.velocity);
    }
  }
  
}
