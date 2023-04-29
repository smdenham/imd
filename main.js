function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

}

function draw() {

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}
