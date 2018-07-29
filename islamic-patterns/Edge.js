function Edge(a,b) {
  this.a = a;
  this.b = b;
  this.h1;
  this.h2;
  // this.angle =  angle;
  // this.mid;

  this.show = function() {
    // stroke(255);
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

    var half_len = v1.mag();

    var offset1 = mid;
    var offset2 = mid;

    v1.rotate(-angle);
    v2.rotate(angle);

    // Law of sines
    var alpha = alpha * 0.5; // bisect interal angle to get  hankin angle
    var beta = PI - alpha - angle;
    var len = sin(alpha) * ((half_len + delta)/sin(beta));

    // v1.setMag(len);
    // v2.setMag(len);
    // fill(255);

    this.h1 = new Hankin(offset1, v1);
    this.h2 = new Hankin(offset2, v2);
  }
}
