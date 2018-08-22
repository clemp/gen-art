function Edge(a,b) {
  this.a = a;
  this.b = b;
  this.h1;
  this.h2;
  // this.angle =  angle;
  // this.mid;

  this.show = function() {
    // stroke(0);
    // line(this.a.x, this.a.y, this.b.x, this.b.y);
    // console.log("x: ", this.a.x, " y: ", this .a.y);
    //
    // Text helper documentation
    // fill(255);
    // textSize(18);
    // text("this.a (x, y): ", this.a.x, this.a.y);
    // // // Text helper documentation
    // fill(255);
    // textSize(18);
    // text("this.b (x, y): ", this.b.x, this.b.y);
    // // End helper documentation
    // End helper documentation
    this.h1.show();
    this.h2.show();
  }

  this.hankin = function(alpha) {
    var mid = p5.Vector.add(this.a,this.b);
    mid.mult(0.5);
    this.mid = mid;

    var v1 = p5.Vector.sub(this.a, mid);
    var v2 = p5.Vector.sub(this.b, mid);

    // Edge length
    // var elen = v1.mag() + delta;
    var half_len = v1.mag();

    var offset1 = mid;
    var offset2 = mid;

    if (delta > 0) {
      v1.setMag(delta);
      v2.setMag(delta);
      offset1 = p5.Vector.add(mid, v2);
      offset2 = p5.Vector.add(mid, v1);
    }
    v1.normalize();
    v2.normalize();

    // text("(this.mid.x, this.mid.y)", this.mid.x, this.mid.y);
    v1.rotate(radians(-angle));
    v2.rotate(radians(angle));

    // Law of sines
    var alpha = alpha / 2; // bisect interal angle to get  hankin angle
    var beta = PI - alpha - radians(angle);
    var len = sin(alpha) * ((half_len + delta) / sin(beta));

    // Hankin length
    // var hlen = elen * sin(alpha) / sin(angle);

    // var len = sin(alpha) * ((half_len + delta)/sin(beta));
    v1.setMag(len);
    v2.setMag(len);
    // fill(255);
    // text("(offset1.x, offset1.y)", offset1.x, offset1.y);
    // text("(offset2.x, offset2.y)", offset2.x, offset2.y);/

    var e1 = p5.Vector.add(offset1, v1);
    var e2 = p5.Vector.add(offset2, v2);

    // text("(e1.x, e1.y)", e1.x, e1.y);
    // text("(e2.x, e2.y)", e2.x, e2.y);


    this.h1 = new Hankin(offset1, v1);
    this.h2 = new Hankin(offset2, v2);

    fill(0);
    beginShape(TRIANGLES);
      vertex(this.h1.a.x, this.h1.a.y);
      vertex(this.h2.a.x, this.h2.a.y);
      vertex(this.h1.end.x, this.h1.end.y);
    endShape();
  }
}
