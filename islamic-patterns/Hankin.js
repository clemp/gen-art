function Hankin(a, v) {
  this.a = a;
  this.v = v;
  this.end = p5.Vector.add(a, v);
  // this.end.setMag(0.1); // unintended very weird effect
    // console.log("x: ", a.x, " y: ", a.y );
  this.show = function() {
    // console.log(this.b);
    stroke(25);
    // strokeWeight(2);
    line(this.a.x, this.a.y, this.end.x, this.end.y);
  }
}
