const SQ_WIDTH = 50;
const SQ_HEIGHT = 50;

// Called at the beginning once
function setup() {
  createCanvas(600, 600);
}

// Continuously called through out the lifetime of the canvas
function draw() {
  background(244);

  // Push the state of the world to the stack
  push();
  // Move to the middle of the screen
  translate(width/2, height/2);
  // Rotate 45 degrees
  rotate(Math.PI/4);
  translate(-SQ_WIDTH/2, -SQ_HEIGHT/2);
  // Draw a red square
  fill(255, 0, 0);
  rect(0, 0, SQ_WIDTH, SQ_HEIGHT);
  // Restore the original state of the world 
  pop(); 

  // Green circle in the top left corner 
  fill(0, 255, 0);
  ellipse(0, 0, 100, 100);
}