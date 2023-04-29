let days = [];

let bg;

let weather, mood, desire;

let enter, entered;

let body = document.getElementById('html-body');


let spacex = 0;
let spacey = 0;

function preload(){
 bg = loadImage('img/reply.png');
}

function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  enter = createButton('enter');
  enter.id('enter')
  entered = document.getElementById('enter');
  body.appendChild(entered);
  enter.mousePressed(addData);

  image(bg, 0,0, width, height);
  

}

function draw() {

  weather = document.getElementById('weather').value;
  mood = document.getElementById('mood').value;
  desire = document.getElementById('desire').value;

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function glyph(){
image(bg, 0,0, width, height);
  if (weather == "sunny"){
    fill(235, 219, 52)
    console.log('working');
  } else if ( weather == "gloomy"){
    fill(64, 59, 156)
  }
  noStroke();
  rect(400+spacex, 400+spacey, 100, 100)
  if (mood == 'happy'){
    fill(255, 0, 247)
  } else if (mood == 'sad'){
    fill(31, 96, 181)
  } else if (mood == 'mad'){
    fill(255, 0, 0)
  } else if (mood == 'tired'){
    fill(185, 235, 255)
  }
  noStroke();
  ellipse(450+spacex, 400+spacey, 100, 100)
  if(desire == "hug"){
    stroke(87, 112, 250)
  }else if (desire == "sleep"){
    stroke(17, 6, 145)
  } else if(desire =="nature"){
    stroke(25, 97, 17)
  }
  strokeWeight(10);
  line(350+spacex, 400+spacey, 550+spacex, 550+spacey)
  
  // spacex += 200;
  // if(spacex > 1000){
  //   spacex = 0;
  //   spacey += 200;
  // }

  if(element.length == 1){
    console.log('working')
    element[0].remove;
  }

}

function addData() {
  days.push({
    date: Date(),
    weather: weather,
    mood: mood,
    desire: desire
  })
  console.log(days);
  console.log("day submitted")

  // removeImg();
  glyph();
}

// function removeImg(){
//   //if there is an image, remove it before making a new one
//   if(element.length == 3){
//     //the first image in the array, remove it
//     // for(){}
//     // element[0].remove();
//   }
// }