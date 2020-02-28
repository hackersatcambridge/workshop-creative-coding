const G_WIDTH  = 20;
const G_HEIGHT = 20;
const N = 600;

const LEFT = 1;
const RIGHT = -1;

function collatz(n, arr) {
  // Return the paths we took 
  if (n == 1) {
    return arr;
  }

  // If even then divide by two and turn right 
  if (n % 2 == 0) {
    let t = [...arr, RIGHT];
    return collatz(n / 2, t);
  }

  // If odd, times by 3 add 1 (divide by two and do two steps in one)
  return collatz((3 * n + 1) / 2, [...arr, LEFT, RIGHT]);
}

let collatzes = [];

// Called at the beginning once
function setup() {
  createCanvas(600, 600);

  // Generate the path of the collatzes at the start
  for (let i = 2; i < N; i++) {
    collatzes.push(collatz(i, []));
  }
}

// Parameter for how long we draw and how much we turn
let line_delta = 10;
let angle_delta = 0.5;

// Continuously called through out the lifetime of the canvas
function draw() {
  background(0);

  // Set the stroke to red and a small opacity
  stroke(255, 0, 0, 29);

  // To the centre
  translate(width / 2, height / 2);
  for (let cs of collatzes) {
    // Save the state of the world 
    push();
    for (let i = 0; i < cs.length; i++) {
      // Draw a line outward
      line(0, 0, line_delta, 0);
      // Move to the end of the line
      translate(line_delta, 0);
      // Based on the collatz path rotate left or right
      rotate(cs[i] * angle_delta);
    }
    // Pop the state i.e. move back to the centre for the next round
    pop();
  }

  // Sanity check - there is quite a lot of computation so only want to do it once
  console.log("looping?");
  noLoop();
}