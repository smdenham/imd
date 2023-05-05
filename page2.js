let days = [];

let bg, flower1, flower2, flower3, flower4, flower5, flower6, flower7, flower8, flower9, flower10, flower11, flower12, flower13;

let weather, mood, desire;

let enter, entered;

let body = document.getElementById('html-body');


function preload(){
 bg = loadImage('img/reply.png');
 flower1 = loadImage('img/SUNNY.png');
 flower2 = loadImage('img/GLOOMY.png');
 flower3 = loadImage('img/RAINY.png');
 flower4 = loadImage('img/HAPPY.png');
 flower5 = loadImage('img/SAD.png');
 flower6 = loadImage('img/MAD.png');
 flower7 = loadImage('img/TIRED.png');
 flower8 = loadImage('img/ANXIOUS.png');
 flower9 = loadImage('img/HUG.png');
 flower10 = loadImage('img/SLEEP.png');
 flower11 = loadImage('img/NATURE.png');
 flower12 = loadImage('img/SNACK.png');
 flower13 = loadImage('img/FRIEND.png');
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


function glyph(){
image(bg, 0,0, width, height);
  if (weather == "sunny"){
    image(flower1,200, 550)
    save(flower1, "SUNNY.png")
    console.log('working');
  } else if ( weather == "cloudy"){
    image(flower2,200, 550)
    save(flower2, "CLOUDY.png")
  } else if ( weather == "rainy"){
    image(flower3,200, 550)
    save(flower3, "RAINY.png")
  }
  

  if (mood == 'happy'){
    image(flower4,300, 550)
    save(flower4, "HAPPY.png")
  } else if (mood == 'sad'){
    image(flower5,300, 550)
    save(flower5, "SAD.png")
  } else if (mood == 'mad'){
    image(flower6,300, 550)
    save(flower6, "MAD.png")
  } else if (mood == 'tired'){
    image(flower7,300, 550)
    save(flower7, "TIRED.png")
  } else if (mood == 'anxious'){
    image(flower8,300, 550)
    save(flower8, "ANXIOUS.png")
  }
 

  if(desire == "hug"){
    image(flower9,400, 550)
    save(flower9, "HUG.png")
  }else if (desire == "sleep"){
    image(flower10,400, 550)
    save(flower10, "SLEEP.png")
  } else if(desire =="nature"){
    image(flower11,400, 550)
    save(flower11, "NATURE.png")
  } else if(desire =="snack"){
    image(flower12,400, 550)
    save(flower12, "SNACK.png")
  } else if(desire =="friend"){
    image(flower13,400, 550)
   save(flower13, "FRIEND.png")
  }
 

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

  glyph();
}