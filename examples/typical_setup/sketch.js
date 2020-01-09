let angle = 0; 

// Called at the beginning once
function setup() {
  createCanvas(600, 600);
}

// Continuously called through out the lifetime of the canvas
function draw() {
  background(255);
  push(); 
  fill(255, 0, 0);
  translate(width / 2, height / 2);
  rotate(angle+=0.1);
  rect(0, 0, 50, 50);
  pop();
}