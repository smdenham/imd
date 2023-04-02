let x = 0;
let y = 0;
let xpos;
let ypos;

let mode = 1;

let flower1 = document.getElementById('flower1');


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');
  }
  
  function draw() {

    removeElements();
    //lets manipulate the DOM and make our cat move with the arrow keys
    //create an image element in html
    let bee = createImg("images/bee.png");
    //select size of image
    bee.size(200,250);
    // give it an id
    bee.id('bee');

    //set the position
    //create arithmatic for x and y position. this lets us read out the position
    xpos = width/2-200+x;
    ypos = height/2-200+y;

  
    //position the cat based on the arrow keys
    bee.position(xpos, ypos);


    //controls using arrow keys
    if (keyIsPressed){
      if(keyCode == UP_ARROW){

        //minus 5 in the y direction means up
        y-=5;
        
      } 
      
      if(keyCode == RIGHT_ARROW) {

        //plus 5 in the x direction means right
        x+=5;
      }

      if(keyCode == DOWN_ARROW) {

        //plus 5 in the y direction means down
        y+=5;
      }

      if(keyCode == LEFT_ARROW) {

        //minus 5 in the x direction means left
        x-=5;
      }
    }
//flower 1
      if ((xpos>800 && xpos<1100) && (ypos>600 && ypos<900)){
        //make bear appear
        flower1.style.display='block';
      }

      if ((xpos<400) && (ypos<400)){

        //hide bear again
        flower1.style.display='none';

        //change scene to the next to the next one by adding 1
        mode ++;
      }
//flower 2
      if ((xpos>800 && xpos<1100) && (ypos>600 && ypos<900)){
        //make bear appear
        flower2.style.display='block';
      }

      if ((xpos<800) && (ypos<400)){

        //hide bear again
        flower2.style.display='none';

        //change scene to the next to the next one by adding 1
        mode ++;
      }

      //changing of scenes
      if (mode == 2){
        background(0);
        flower2.style.display='none';
      }
//flower 3
    if ((xpos>800 && xpos<1100) && (ypos>600 && ypos<900)){
      //make flower3 appear
      flower3.style.display='block';
    }

    if ((xpos<1000) && (ypos<400)){

      //hide flower3 again
      flower3.style.display='none';

      //change scene to the next to the next one by adding 1
      mode ++;
    }

//changing of scenes
  if (mode == 2){
    background(0);
    flower3.style.display='none';
  }
//flower 4
  if ((xpos>800 && xpos<1100) && (ypos>600 && ypos<900)){
    //make flower3 appear
    flower4.style.display='block';
  }

if ((xpos<1500) && (ypos<400)){

  //hide flower3 again
  flower4.style.display='none';

  //change scene to the next to the next one by adding 1
  mode ++;
}

//changing of scenes
if (mode == 2){
  background(0);
  flower4.style.display='none';
}
    }
    // console.log("cat is at: " + xpos + ", " + ypos);
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
