class OmSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  // Display a static origin
  showOrigin() {
    noStroke();
    fill(125, 35);
    ellipse(this.origin.x, this.origin.y,45);
  }

  // Add a bunch of EndCircle particles
  addParticles() {
    for (var i = 0; i < 250; i++){
      var p = new EndCircle(this.origin.x, this.origin.y, 2);
      this.particles.push(p);
    }
  }

  // Add lines connecting particles to origin
  addLinesOriginParticle() {
    for (var i = this.particles.length-1; i >= 0; i--) {
      // strokeWeight(2);
      stroke(255,17);
      line(this.particles[i].pos.x,this.particles[i].pos.y,this.origin.x,this.origin.y);
    }

  }


  run() {
    // Run Origin
    this.showOrigin();

    // Run Particles
    for (var i = this.particles.length - 1; i>= 0; i--) {
      var p = this.particles[i];
      p.run();
    }

    // Origin to Particle lines
    this.addLinesOriginParticle();
    //
    // strokeWeight(2);
    // stroke(255);
    // line(this.origin.x,this.origin.y,100,40);
  }

}
