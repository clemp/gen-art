var oms;

// var origins = [];
// var ends = [];
// var lines = [];

function setup() {
  c = createCanvas(320, 480);
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

function keyPressed() {
  if (keyCode === 32) {
    saveCanvas(c, 'myCanvas', 'png');
  }
  return false; // prevent default
}

function draw() {
  background(51);

  // Run each OmSystem
  for (var i = 0; i < oms.length; i++) {
    oms[i].run();
  }

  // If there is more than a single OmSystem
  if (oms.length > 1) {
    // Draw a line between each OmSystem origin
    for (var i = oms.length-1; i >= 0; i--) {
      for (var j = oms.length-2; j >= 0; j--){
        stroke(255, 20);
        line(oms[j].origin.x,oms[j].origin.y,oms[i].origin.x, oms[i].origin.y);
      }
    }

    // Draw a line between each particle and the proceeding OmSystems particles
    // for (var i = oms.length-1; i >= 0; i--){
    //   for (var j = oms[i].particles.length-1; j >= 0; j--){
    //     stroke(255);
    //     line(0,0,oms[i].particles[j].pos.x, oms[i].particles[j].pos.y);
    //   }
    // }

    for (var i = oms.length-1; i >= 0; i--) {
      for (var j = oms.length-2; j >= 0; j--) {
        for (var ip = oms[i].particles.length-1; ip >= 0; ip--) {
          for (var jp = oms[j].particles.length-1; jp >= 0; jp--) {
            stroke(155, 5);
            line(oms[j].particles[jp].pos.x,oms[j].particles[jp].pos.y,oms[i].particles[ip].pos.x,oms[i].particles[ip].pos.y);
          }
        }
      }
    }
  }
}
