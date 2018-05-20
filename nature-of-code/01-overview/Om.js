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
    for (var i = 0; i < 20; i++){
      var p = new EndCircle(this.origin.x, this.origin.y, 2);
      this.particles.push(p);
    }
  }

  // Add lines connecting particles to origin
  addLinesOriginParticle() {
    for (var i = this.particles.length-1; i >= 0; i--) {
      stroke(255,17);
      line(this.particles[i].pos.x,this.particles[i].pos.y,this.origin.x,this.origin.y);
    }
  }

  // Add lines connecting particles to each other
  addLinesParticleParticle() {
    for (var i = this.particles.length-1; i>=0; i--){
      for (var j = this.particles.length-2; j>=0; j--) {
        stroke(255, 25);
        line(this.particles[i].pos.x, this.particles[i].pos.y, this.particles[j].pos.x, this.particles[j].pos.y);
      }
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

    // Particle to Particle lines
    this.addLinesParticleParticle();
  }

}
