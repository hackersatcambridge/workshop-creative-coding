const SIZE = 10;
let particles = [];
const WIDTH = 600;
const HEIGHT = 600;

// Called at the beginning once
function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < SIZE; i++) {
    particles.push(new Particle(random(0, width), random(0, height)));
  }
}

// Continuously called through out the lifetime of the canvas
function draw() {
  background(244);

  // Randomly shift their position by a small delta
  for (let i = 0; i < SIZE; i++) {
    let p = particles[i];
    p.applyForce(createVector(2 * noise(p.pos.x) - 1, 2 * noise(p.pos.y) - 1));
    p.update();
    p.show();
  }
}

class Particle {
  constructor (x, y) {
    this.pos = createVector(x, y);
    this.velocity = createVector(1, 0);
    this.acceler = createVector(0, 0);
  }

  applyForce(f) {
    this.acceler = this.acceler.add(f.x, f.y);
    this.velocity.add(this.acceler);
    this.velocity.mult(0.99);
    this.acceler = createVector(0, 0);
  }

  checkX(x) {
    if (x < 0) {
      return WIDTH;
    }
    if (x >= WIDTH) {
      return 0;
    }
    return x;
  }

  checkY(y) {
    if (y < 0) {
      return HEIGHT;
    }
    if (y >= HEIGHT) {
      return 0;
    }
    return y;
  }

  update() {
    this.pos = this.pos.add(this.velocity);
    this.pos.x = this.checkX(this.pos.x);
    this.pos.y = this.checkY(this.pos.y);
  }

  show() {
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }
}