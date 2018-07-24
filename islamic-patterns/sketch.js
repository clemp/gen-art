// var poly;
var polys = [];
// var angle = 18;
// var delta = 25;
var angle = 75;
var delta =2;

var angleSlider;
var deltaSlider;

function setup() {
  createCanvas(300,300);
  deltaSlider = createSlider(1,25,10);
  angleSlider = createSlider(0,90,60);

  angleMode(DEGREES);
  var inc = 300;
  for (var x = 0; x < width; x+=inc) {
    for (var y = 0; y < height; y += inc) {
      var poly = new Polygon(x, y);
      poly.addVertex(x, y);
      poly.addVertex(x + inc, y);
      poly.addVertex(x + inc, y + inc);
      poly.addVertex(x, y + inc);
      poly.close();
      polys.push(poly);
    }
  }

}

function draw() {
  background(51);

  delta = deltaSlider.value();
  angle = angleSlider.value();

  for (var i = 0; i < polys.length; i++) {
    polys[i].hankin();
    polys[i].show();
  }
  // poly.hankin();
  // poly.show();
}
