// var poly;
var polys = [];
// var angle = 18;
// var delta = 25;
var angle = 75;
var delta =10;

var angleSlider;
var deltaSlider;

function setup() {
  createCanvas(800,800);
  deltaSlider = createSlider(1,100,10);
  angleSlider = createSlider(0,90,60);

  angleMode(DEGREES);
  var inc = 50;
  for (var x = 0; x < width; x+=inc) {
    for (var y = 0; y < height; y += inc) {
      var poly = new Polygon(4);
      poly.addVertex(x, y);
      poly.addVertex(x + inc, y);
      poly.addVertex(x + inc, y + inc);
      poly.addVertex(x, y + inc);
      poly.close();
      polys.push(poly);
    }
  }
  if (polys.length > 0) {
    console.log("polys: ", polys[0]);
  }
}

function draw() {
  background(255);
  delta = deltaSlider.value();
  angle = angleSlider.value();
  for (var i = 0; i < polys.length; i++) {
    polys[i].hankin();
    polys[i].show();
  }
  // poly.hankin();
  // poly.show();
}
