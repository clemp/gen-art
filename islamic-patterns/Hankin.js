function Hankin(a, v) {
  this.a = a;
  this.v = v;
  this.b = p5.Vector.add(a, v);
  this.end;
  this.prevD;

  this.show = function() {
    // console.log(this.b);
    stroke(255, 0, 255);
    line(this.a.x, this.a.y, this.end.x, this.end.y);
    // fill(255);
    // ellipse(this.a.x, this.a.y, 6);
    // // console.log(this.end);
    // if (this.end){
    //   fill(255, 255, 0);
    //   ellipse(this.end.x, this.end.y, 12);
    // }
  }
//
  this.findEnd = function(other) {
    // line line intersection
    // this.a -> P1 (x1, y1)
    // this.v -> P2-P1 (x2, y2)
    // other.a -> P3 (x3, y3)
    // other.v -> P4-P3 (x4, y4)
    // fill(255);
    // textSize(18);
    // text("this.a", this.a.x, this.a.y+20);
    // text("other.a", other.a.x-75, other.a.y);

    var x1_x3 = this.a.x - other.a.x;
    var x2_x1 = this.v.x;
    var x4_x3 = other.v.x;
    var y1_y3 = this.a.y - other.a.y;
    var y2_y1 = this.v.y;
    var y4_y3 = other.v.y;

    // var den = (other.v.y * this.v.x) - (other.v.x * this.v.y);
    var den = y4_y3 * x2_x1 - x4_x3 * y2_y1;
    if (!den) {
      return;
    }
    // var numa = (other.v.x * (this.a.y-other.a.y)) - (other.v.y * (this.a.x-other.a.x));
    var numa = x4_x3 * y1_y3 - y4_y3 * x1_x3;
    // var numb = ((this.v.x - this.a.x) * (this.a.y
    var numb = x2_x1 * y1_y3 - y2_y1 * x1_x3;

    ua = numa/den;
    ub = numb/den;
    // console.log("ua: ", ua, "ub: ", ub);

    var x = this.a.x + ua * (x2_x1);
    var y = this.a.y + ua * (y2_y1);
    if (ua > 0 && ub > 0){
      var candidate = createVector(x,y);
      // console.log("x: ", x, " y: ", y, "candidate: ", candidate);
      var d1 = p5.Vector.dist(candidate, this.a);
      var d2 = p5.Vector.dist(candidate, other.a);
      var d = d1 + d2;
      // console.log("d1: ", d1, " d2: ", d2, " d: ", d);
      // console.log("this.end: ", this.end, " (!this.end) T/F: ", (!this.end));

      if (!this.end) {
        this.end = candidate;
        this.prevD = d;
      } else if (d < this.prevD) {
        this.prevD = d;
        this.end = candidate;
      }

      // console.log("final candidate:", candidate);
      // console.log("this.end: ", this.end);
    }

  }
}
