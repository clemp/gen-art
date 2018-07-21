function Polygon() {
  this.edges = [];
  this.vertices = [];

  this.addVertex = function(x,y) {
    var a = createVector(x,y);
    var total = this.vertices.length;
    if (total > 0){
      var prev = this.vertices[total-1];
      var edge = new Edge(prev, a);
      this.edges.push(edge);
    }
    this.vertices.push(a);
  }
  //
  this.close = function() {
    var total = this.vertices.length;
    var last = this.vertices[total-1];
    var first = this.vertices[0];
    var edge = new Edge(last, first);
    this.edges.push(edge);
  }

  this.hankin = function() {
    for (var i = 0; i < this.edges.length; i++) {
      this.edges[i].hankin();
    }
    this.edges[0].findEnds(this.edges[1]);
  // console.log(this.edges);
  }

  // this.edges[0].findEnds(this.edges[1]);
  //
  // for (var i = 0; i < this.edges.length; i++) {
  //       this.edges[0].findEnds(this.edges[i]);
  //     // if (0 !== i) {
  //     //
  //     // }
  // }

  //
  this.show = function() {
    for (var i = 0; i < this.edges.length; i++) {
      this.edges[i].show();
    }
  }
}
