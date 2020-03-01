const G_WIDTH  = 20;
const G_HEIGHT = 20;
// To be calculated...
let cellWidth, cellHeight;

// Called at the beginning once
function setup() {
  createCanvas(200, 200);
  // Calculate cell size - canvas dimensions divided by how many
  // cells we want per column and row
  cellWidth = width / G_WIDTH;
  cellHeight = height / G_HEIGHT;
}


function draw() {
  background(244);
  // iterate over the cells
  for (let row = 0; row < G_HEIGHT; row++) {
    for (let col = 0; col < G_WIDTH; col++) {
      let idx = col + row * G_WIDTH; 
      let color = map(idx, 0, G_HEIGHT * G_WIDTH, 0, 255);
      fill(color);
      rect(col * cellWidth, row * cellHeight, cellWidth, cellHeight);
    }
  }
}