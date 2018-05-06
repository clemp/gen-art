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
  this.x = width/2;
  this.y = height/2;

  this.walk = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.display = function() {
    fill(255);
    ellipse(this.x, this.y, 48, 48);
  }

}
