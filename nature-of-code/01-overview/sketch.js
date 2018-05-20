var oms;

// var origins = [];
// var ends = [];
// var lines = [];

function setup() {
  createCanvas(640, 360);
  // Make a Walker object
  // c = new OriginCircle();
  oms = [];
}

// Create new cells when mouse is pressed on canvas
function mouseClicked() {
  this.om = new OmSystem(createVector(mouseX, mouseY));
  this.om.addParticles();
  oms.push(om);

  print("# of origins: ", str(oms.length));
}

function draw() {
  background(51);

  for (var i = 0; i < oms.length; i++) {
    oms[i].run();
  }

}
