var objects = [];
var lines = [];

function setup() {
  createCanvas(640, 360);
  // Make a Walker object
  // c = new OriginCircle();
}

// Create new cells when mouse is pressed on canvas
function mousePressed() {
    // Store x, y coordinates of previous object origin
    var pos = createVector(mouseX,mouseY);

    origin_radius = random(45,95);
    objects.push(new OriginCircle(pos.x, pos.y, origin_radius));
  }

function draw() {
  background(51);
  for (var i = objects.length - 1; i >= 0; i--) {
    objects[i].run();
  }
}
