var objects = [];

function setup() {
  createCanvas(640, 360);
  // Make a Walker object
  // c = new OriginCircle();
}

// Create new cells when mouse is pressed on canvas
function mousePressed() {
    origin_radius = random(45,95);
    objects.push(new OriginCircle(mouseX, mouseY, origin_radius));
  }

function draw() {
  background(51);
  for (var i = objects.length - 1; i >= 0; i--) {
    objects[i].run();
  }
}
