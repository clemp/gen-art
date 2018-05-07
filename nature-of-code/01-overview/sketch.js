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

// acceleration can be set as a static variable as well
// to change position with each cycle, rotate the acceleration angle
// in the update function
  this.acc = p5.Vector.fromAngle(random(TWO_PI));
  this.acc.setMag(0.001);

  this.update = function() {
    // store mouse position
    var mouse = createVector(mouseX, mouseY);
// Acceleration
    // change acceleration randomly
    // this.acc = createVector(random(-1,1),random(-1,1));

    // acceleration to follow mouse location
    // this.acc = p5.Vector.sub(mouse,this.pos);

    // random acceleration
    // method #1
    // this.acc = createVector(random(-1,1),random(-1,1));

    // method #2
    // this.acc = p5.Vector.fromAngle(3*PI/2);
    // this.acc = p5.Vector.fromAngle(random(TWO_PI));

    // method 3
    // fixed acceleration in object properties, rotate in update function

    this.acc.rotate(0.01);
// Magnitude
// Method #1
    // normalize vector to be of length one
    // still in the direction of target location
    // this.acc.normalize();

    // shrink acceleration vector
    // this.acc.mult(0.01);
// Method #2
    this.acc.setMag(0.18);

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
