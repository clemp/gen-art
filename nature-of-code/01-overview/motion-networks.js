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
    end_radius = 2;

    origins.push(new OriginCircle(pos.x, pos.y, origin_radius));

    for (var i = 250; i >= 0; i--) {
      // distance away from origin is regulated inside the EndCircle object
      o = new EndCircle(pos.x, pos.y, end_radius);
      ends.push(o);
    }
  }

function end_network(objects) {
  // Draw line
  if (objects.length > 1) {
    for (var i = objects.length-1; i >= 1; i--) {
      // stroke(255, random(55,90));
      stroke(255, 10);
      line(ends[i].pos.x, ends[i].pos.y, ends[i-1].pos.x, ends[i-1].pos.y);
    }
  }
}

function origin_end_network(origins_list, ends_list) {
  var o = origins_list.length
  var e = ends_list.length

  // If an origin has been created..
  if (o + e > 1) {
  // // For each origin...
    for (var i = o-1; i >= 0; i--) {
     // And each end
      for (var j = e-1; j >= 0; j--) {
        // Draw a line
        stroke(255, 17);
        line(ends_list[j].pos.x, ends_list[j].pos.y, origins_list[i].pos.x, origins_list[i].pos.y);
      }
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

  end_network(ends);
  origin_end_network(origins, ends);
}
