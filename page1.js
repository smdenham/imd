let body = document.getElementById('html-body');
let bg;

function preload(){
    bg = loadImage('img/postcard graphic.png');
   }
function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');
    image(bg, 0,0, width, height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw (){
    image(bg, 0,0, width, height);
}