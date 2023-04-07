let input, button, result, question, submit, answer;

let Answer1;

let nameInput = document.getElementById('name-input');

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    result = createElement('p', 'Who am I?');
    result.style('font-size', '30px');
    result.style('margin', '0px');
    result.style('text-align', 'center');
    result.id('answer');
    answer = document.getElementById('answer');
    nameInput.appendChild(answer);

    input = createInput('');
    input.id('question');

    //this places the input into the div
    question = document.getElementById('question');
    nameInput.appendChild(question);
  
    button = createButton('submit');
    button.id('submit');
    submit = document.getElementById('submit');
    nameInput.appendChild(submit);
    button.mousePressed(output);

  }
  
  function draw() {

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function output() {
  const answers = input.value();
  input.value('');

  let answer1 = createP('');
  answer1.id('answer-1')
  answer1.style('font-size', '30px');
  answer1.style('margin', '0px');

  let Answer1 = document.getElementById('answer-1');
  nameInput.appendChild(Answer1);
  //innerHTML is changing a variable within HTML like a parapgraph
  Answer1.innerHTML = answers;

  if (answers == "Khloe Kardashian"){
    let kardashian = createImg()
    Answer1.innerHTML = answers;
    let a = createA('page2.html', 'next');
    a.id('next');
    nameInput.appendChild(next);
  } else {
    Answer1.innerHTML = "wrong answer";
  }
}