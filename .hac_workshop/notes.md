
# What are we going to do? 

Procedurally generated art has been around for a long time - at it's core it is about defining algorithms which produce some of kind of artwork. For the most part this consists of graphics but could include sound or other mediums too. In this workshop we'll learn the basics of a Javascript library called p5js as build simple yet beautiful graphics. 

# The basics 

p5js is a Javascript library exposing some functions to build simple graphics primitives. There are two "phases" to drawing something on your screen - `setup` and the `draw` loop. The setup is called once at the beginning of the session and here you can create the canvas your going to draw on and initialise any objects you want. The draw loop is then called continuously thereafter - there you put your actual graphics code. 

A simple example can be found in the `examples` folder under `typical_setup`. The actual p5 sketch looks like: 

```javascript
function setup() {}
function draw() {}
```

As described before, these are the two functions we need to start drawing things in the browser. When you open the p5 editor these will handily already be there for you. Our next goal is to get our canvas created and to draw a background colour. This can be achieved through `createCanvas` and `background`. 

```javascript
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255, 0, 0); /* Why in here and not in initial setup? */
}
```

Why do we draw the background colour in the draw loop and not in the initial setup? Because later on if we do some kind of animation we want to the screen to be "cleared" every loop pf the `draw` function. By placing `background(255, 0, 0)` at the top of the `draw` loop, every "frame" will start by clearing everything and rendering a red background (you can change this to any colour you want). 

Basic Shapes
------------

p5 comes with basic shape primitives that we can use to make some cool graphics the main ones include:

  - `rect(x, y, w, h)`
  - `ellipse(x, y, w, h)` 
  - `triangle(x1, y1, x2, y2, x3, y3)`

Let's draw circle on the screen. One important thing to remember when coding with p5 (and in general with graphics) is that a lot of things are managed by some global state like "what colour should I be drawing with now" or "whereabouts should I draw this" - it might take a bit to get your head around as we're more used to these states being linked to the objects. So let's draw that circle. 

```javascript
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255, 0, 0); 
  ellipse(0, 0, 10, 10);
}
```

You might be wondering - why is it up in the top left corner of the screen. Surely `(0, 0)` should be in the middle of the screen, or even in the bottom-left?! `(300, 300)` is actually in the middle of our screen. Yes, it's like the y-axis is inverted and the x axis has stayed the same. There are two ways we can get the circle to move to the middle of the screen, the simplest is `ellipse(300, 300, 10, 10)`. Another way is to change the "whereabouts should I draw this" state I was talking about before. To do this we use the `translate(x, y)` function which moves our drawing point and sets it to the middle of the screen if we provide the right x and y coordinates. 

```javascript
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255, 0, 0); 
  translate(300, 300);
  ellipse(0, 0, 10, 10);
}
```

Notice how the x and y coordinates for the ellipse are still set to `0` we've just moved our origin to the centre of the screen. 
