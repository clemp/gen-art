var w;

function setup() {
  createCanvas(640,360);
  w = new Walker();
}

function draw() {
  background(51);
  w.display();
  w.walk()
}

function Walker() {
  // this.x = width/2;
  // this.y = height/2;
  this.pos = createVector(width/2,height/2);

  this.walk = function() {
    this.vel = createVector(random(-1, 1),random(-1, 1));
    this.pos = this.pos.add(this.vel);

    // this.pos.x = this.pos.x + random(-1, 1);
    // this.pos.y = this.pos.y + random(-1, 1);
  }

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }

}
