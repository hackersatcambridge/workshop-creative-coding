
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
  background(255, 0, 0); // Why in here and not in initial setup? 
}
```

Why do we draw the background colour in the draw loop and not in the initial setup? Because later on if we do some kind of animation we want to the screen to be "cleared" every loop pf the `draw` function. By placing `background(255, 0, 0)` at the top of the `draw` loop, every "frame" will start by clearing everything and rendering a red background (you can change this to any colour you want). 