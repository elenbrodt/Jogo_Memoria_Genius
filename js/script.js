let order = [];
let clickedOrder = [];
let score = 0;

const c1 = document.querySelector('.c-1');
const c2 = document.querySelector('.c-2');
const c3 = document.querySelector('.c-3');
const c4 = document.querySelector('.c-4');

const points = document.getElementById('points');
const play = document.getElementById('btn');

c1.onclick = () => click(0);
c2.onclick = () => click(1);
c3.onclick = () => click(2);
c4.onclick = () => click(3);



let shuffleOrder = () => {

  let colorOrder = Math.floor(Math.random() * 4);

  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order){
    let elementColor = createColorElement(order[i]);
    lightColor(order[i], elementColor, Number(i) + 1);
  }
}

let lightColor = (color, element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
    soundColorPlay(color);
  }, number - 250);
  setTimeout(()=>{
    element.classList.remove('selected');
  }, number + 250);
}

let checkOrder = () => {
  for ( let i in clickedOrder){
    if (clickedOrder[i] != order[i]){
      gameOver(); 
      break;
    }
    
  }
   if(clickedOrder.length == order.length){
    points.innerHTML = score;
    setTimeout (() => {
      nextLevel();
    }, 250) 
  }
}

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');
  soundColorPlay(color);
  setTimeout (() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250) 
}

let createColorElement = (color) => {
  if(color == 0){
    return c1;
  }else if(color == 1){
    return c2;
  }else if(color == 2){
    return c3;
  }else if(color == 3){
    return c4;
  }
}

let nextLevel = () =>{
  score++;
  shuffleOrder();
}

let gameOver = () => {
  score = 0;
  points.innerHTML = score;
  order = [];
  soundErrorPlay();
}

let playGame = () => {  
  order = [];
  clickedOrder = [];
  nextLevel ();
}

let soundColorPlay = (color) => {
  if ((color == 0) || (color == 'c1')) {
      let audio = new Audio('./audios/beep-02.wav');
      audio.play();
      setTimeout(() => {
        audio.pause();
      }, 100);
      
  } else if ((color == 1) || (color == 'c2')) {
      let audio = new Audio('./audios/beep-11.wav');
      audio.play();
      setTimeout(() => {
        audio.pause();
      }, 100);
      
  } else if ((color == 2) || (color == 'c3')) {
      let audio = new Audio('./audios/beep-12.wav');
      audio.play();
      setTimeout(() => {
        audio.pause();
      }, 100);
      
  } else if ((color == 3) || (color == 'c4')) {
      let audio = new Audio('./audios/beep-13.wav');
      audio.play();
      setTimeout(() => {
        audio.pause();
      }, 100);
  }
}

play.addEventListener ('click', playGame);
let soundErrorPlay = () => {
  let audio = new Audio('./audios/error.wav');
  audio.play();
}

//playGame();