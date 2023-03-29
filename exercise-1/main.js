let a = 0;
let colorcolor = false;

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');
  }
  
  function draw() {
    removeElements();

    let ggb = createImg("images/grey_ggb.jpg");

    ggb.size(30,30);

    ggb.position(500, 200);

    ggb.id('ggb');

    ggb.position((200 + a), 500);

    a++;

    ggb.mousePressed(colored);
    
  }
  
function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}
function colored(){
  let colored = createImg("images/colored_ggb.jpg");
  colored.size(100,100);
  colored.position(mouseX, mouseY);
  colored.id('colored');
}
