let bee, beach, butterfly, flower, seahorse, mountain;

let mySound1, mySound2, mySound3, mySound4, mySound5, mySound6;


function preload(){

  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('audio/bee.mp3');
  mySound2 = loadSound('audio/beach-sequence.mp3');
  mySound3 = loadSound('audio/wind-chime.mp3');
  mySound4 = loadSound('audio/chickadees.mp3');
  mySound5 = loadSound('audio/underwater-ambience.mp3');
  mySound6 = loadSound('audio/mountains.mp3');
}


function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    bee = createImg("images/bee.png");
    bee.class('flower');
    bee.position(100, 200);

    beach = createImg("images/beach.png");
    beach.class('flower');
    beach.position(600, 400);

    butterfly = createImg("images/butterfly.png");
    butterfly.class('flower');
    butterfly.position(1100, 200);

    flower = createImg("images/flower.png");
    flower.class('flower');
    flower.position(100, 400);

    seahorse = createImg("images/seahorse.png");
    seahorse.class('flower');
    seahorse.position(600, 150);
    
    mountain = createImg("images/mountain.png");
    mountain.class('flower');
    mountain.position(1100, 400);
  }
  
  function draw() {
    background(0);
    bee.mousePressed(makeBee);
    beach.mousePressed(makeBeach);
    butterfly.mousePressed(makeButterfly);
    flower.mousePressed(makeFlower);
    seahorse.mousePressed(makeSeahorse);
    mountain.mousePressed(makeMountain);
  }

  function makeBee() {
    if (mySound1.isPlaying()){
      mySound1.pause();
    } else {
      mySound1.play();
    }
  }

  function makeBeach() {
    if (mySound2.isPlaying()){
      mySound2.pause();
    } else {
      mySound2.play();
    }
  }


  function makeButterfly() {
    if (mySound3.isPlaying()){
      mySound3.pause();
    } else {
      mySound3.play();
    }
  }

  function makeFlower() {
    if (mySound4.isPlaying()){
      mySound4.pause();
    } else {
      mySound4.play();
    }
  }

  function makeSeahorse() {
    if (mySound5.isPlaying()){
      mySound5.pause();
    } else {
      mySound5.play();
    }
  }

  function makeMountain() {
    if (mySound6.isPlaying()){
      mySound6.pause();
    } else {
      mySound6.play();
    }
  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
