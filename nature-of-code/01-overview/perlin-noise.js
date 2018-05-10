var xoff = 0;
var prevx = 0;

function setup() {
  createCanvas(640,360);
}

function draw() {
  background(51);

// not perlin noise
  // var x = random(0, width);

// perlin noise
// particle appears to float back and forth between two points
  var x = noise(xoff) * width;
  prevx = x;
  xoff += 0.009;

  // var x = width;
// cirle
  fill(255);
  ellipse(x, 180, 48, 48);

// other circle that comes close to first circle
  var otherx = map(x, 0, width, x + random(1, 50) * noise(xoff), width);
  // var otherx = map(x, 0, width, x + noise(xoff + random(1,width) + 10) * noise(xoff), width);

  fill(0);
  ellipse(otherx + 10 , 180, 28, 28);


  print(x);

}
