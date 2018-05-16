var origins = [];
var ends = [];
var lines = [];

// Set up array to store x, y coordinates of previous object origin
var prev_pos = [];

function setup() {
  createCanvas(640, 360);
  // Make a Walker object
  // c = new OriginCircle();
}

// Create new cells when mouse is pressed on canvas
function mouseClicked() {

    // Create position vector where the mouse is pressed
    var x = mouseX;
    var y = mouseY;

    var pos = createVector(x,y);

    // Store position vector
    prev_pos.push(pos);
    print("---- mousePressed() -----")
    print("new origin x: ", str(pos.x), "new origin y: ", str(pos.y));
    print("objects length: ", str(origins.length));

    print("new line x1: ", str(pos.x), "new line y1: ", str(pos.y));
    print("new line x2: ", str(pos.x), "new line y2: ", str(pos.y));
    // print("lines length: ", str(objects.length));

    // print("prev_pos length: ", str(prev_pos.length))
    // if (prev_pos.length > 1) {
    //   print("prev_pos x: ", str(prev_pos[prev_pos.length-2].x), "prev_pos y: ", str(prev_pos[prev_pos.length-2].y));
    // }

    // Create new OriginCircle object, and add it to the 'objects' array
    origin_radius = random(65,95);
    end_radius = 25;

    origins.push(new OriginCircle(pos.x, pos.y, origin_radius));

    for (var i = 1; i >= 0; i--) {
      // distance away from origin is regulated inside the EndCircle object
      o = new EndCircle(pos.x, pos.y, end_radius);
      ends.push(o);
    }

    // Creates new LineNetwork object, adds to the 'lines' array
    // If this is the first time the mouse is being pressed, line is created
    // as a single dot
    // lines.push(new LineNetwork(pos.x, pos.y, prev_pos[prev_pos.length-2].x, prev_pos[prev_pos.length-2].y));

    // } else {
    //   lines.push(new LineNetwork(pos.x, pos.y, prev_pos[0].x, prev_pos[0].y));
    // }
  }

function line_network(ends) {
  // Draw line
  if (ends.length > 1) {
    for (var i = ends.length-1; i >= 1; i--) {
      stroke(255);
      line(ends[i].pos.x, ends[i].pos.y, 0, 0);
      stroke(255);
      line(ends[i-1].pos.x, ends[i-1].pos.y, width, height);
    }
  }
}

function draw() {
  background(51);

  // Run every OriginCircle object in the 'origins' array
  for (var i = origins.length - 1; i >= 0; i--) {
    origins[i].run();
  }
  // Run every EndCircle object in the 'ends' array
  for (var i = ends.length - 1; i >= 0; i--) {
    ends[i].run();
  }

  line_network(ends);


// i = 1; ends.length = 1;
//
//
//
//
//

    // Run every LineNetwork object in the 'lines' array
  // for (var i = lines.length - 1; i >= 0; i--) {
    // lines[i].run();
  // }
}
