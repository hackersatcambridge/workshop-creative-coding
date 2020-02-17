const G_WIDTH  = 20;
const G_HEIGHT = 20;
let cellWidth, cellHeight;

// Called at the beginning once
function setup() {
  createCanvas(600, 600);

  // Calculate cell size 
  cellWidth = width / G_WIDTH;
  cellHeight = height / G_HEIGHT;
}

// Continuously called through out the lifetime of the canvas
function draw() {
  background(244);
  // We want to draw a rectangle for each grid cell
  for (let col = 0; col < G_WIDTH; col++) {
    for (let row = 0; row < G_HEIGHT; row++) {
      // Mapping cell index to [0, 255]
      let color = map(col + row * G_WIDTH, 0, G_HEIGHT * G_WIDTH, 0, 255);
      // Grayscale colouring 
      fill(color);

      // Draw the rectangle
      rect(col * cellWidth, row * cellHeight, cellWidth, cellHeight);
    }
  }

}