function Edge(a,b) {
  this.a = a;
  this.b = b;
  this.h1;
  this.h2;
  this.angle =  60;
  this.mid;

  this.show = function() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);

    // Text helper documentation
    // fill(255);
    // textSize(18);
    // text("this.a (x, y): ", this.a.x, this.a.y);
    // // Text helper documentation
    // fill(255);
    // textSize(18);
    // text("this.b (x, y): ", this.b.x, this.b.y);
    // // End helper documentation
    // End helper documentation
    this.h1.show();
    this.h2.show();
  }

  this.hankin = function() {
    var mid = p5.Vector.add(this.a,this.b);
    mid.mult(0.5);
    this.mid = mid;

    var v1 = p5.Vector.sub(this.a, mid);
    var v2 = p5.Vector.sub(this.b, mid);
    v1.normalize();
    v2.normalize();
    // Text helper documentation
    // fill(255);
    // textSize(18);
    // text("v1 x,y: ", v1.x, v1.y);
    // // Text helper documentation
    // fill(255);
    // textSize(18);
    // text("v2 x,y: ", v2.x, v2.y);
    // End helper documentation

    v1.rotate(-this.angle);
    // Text helper documentation
    // fill(255);
    // textSize(18);
    // text("v1 x,y: ", v1.x, v1.y);
    // stroke(225);
    // line(0,0,v1.x,v1.y);
    // Text helper documentation
    v2.rotate(this.angle);
    // // Text helper documentation
    // fill(255);
    // textSize(18);
    // text("v2 x,y: ", v2.x, v2.y);
    // stroke(225);
    // line(0,0,v2.x,v2.y);
    // End helper documentation

    // End helper documentation

    this.h1 = new Hankin(mid, v1);
    this.h2 = new Hankin(mid, v2);
    // Text helper documentation
    // fill(255);
    // textSize(18);
    // text("h1 x,y: ", this.h1.a.x, this.h1.a.y);
    // End documentation
    // console.log("this.h1.a.x: ", this.h1.a.x, "this.h1.y: ", this.h1.y);
    // text("other.v", other.v.x, other.v.y);
  }

  this.findEnds = function(edge) {
    // Text helper documentation
    // h1
    // fill(255);
    // textSize(18);
    // text("h1 x,y: ", this.h1.a.x, this.h1.a.y);
    // edge
    // fill(255);
    // textSize(18);
    // text("edge x,y: ", edge.h1.a.x, edge.h1.a.y);
    // End documentation
    this.h1.findEnd(edge.h1);
    this.h1.findEnd(edge.h2);
    this.h2.findEnd(edge.h2);
    this.h2.findEnd(edge.h1);
  }
}
