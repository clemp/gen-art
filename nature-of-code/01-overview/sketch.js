var w;

function setup() {
  createCanvas(640,360);
  w = new Walker();
}

function draw() {
  background(51);
  w.display();
  w.update()
}

function Walker() {
  // this.x = width/2;
  // this.y = height/2;
  this.pos = createVector(width/2,height/2);
  this.vel = createVector(0,0);

  this.update = function() {
    // store mouse position
    var mouse = createVector(mouseX, mouseY);

    // change acceleration randomly
    // this.acc = createVector(random(-1,1),random(-1,1));

    // acceleration to follow mouse location
    this.acc = p5.Vector.sub(mouse,this.pos);
    this.acc.mult(0.001);
    // acceleration changes velocity
    this.vel.add(this.acc);
    // velocity changes position
    this.pos.add(this.vel);




    // this.pos.x = this.pos.x + random(-1, 1);
    // this.pos.y = this.pos.y + random(-1, 1);
  }

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }

}
