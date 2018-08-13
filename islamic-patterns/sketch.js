// var poly;
var polys = [];
// var angle = 18;
// var delta = 25;
// var angle = 58;
// var delta = 10;

var angleSlider;
var deltaSlider;

var angleSliderIncrease;
var deltaSliderIncrease;


function setup() {
  createCanvas(810,810);
  deltaSlider = createSlider(1,55,40);
  angleSlider = createSlider(0,90,58);

  // angleMode(DEGREES);
  var inc = 80;
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
  // text("angle");
  angle = angleSlider.value();
  for (var i = 0; i < polys.length; i++) {
    polys[i].hankin();
    polys[i].show();
  }
  // poly.hankin();
  // poly.show();
}
