let obj = document.getElementById("obj")
//let obj2= document.getElementById("obj2")
//let obj3 = document.getElementById("obj3")
let gameVH = window.innerHeight/100 * 87
let vh = window.innerHeight
let x_pos, y_pos, x_posB, y_posB, speedX, speedY
let points = 0

let vsechnyScore = localStorage.getItem("vsechnyScore")
let pocetHer = localStorage.getItem("pocetHer")

let switchtrackAverageScore = localStorage.getItem("switchtrackAverageScore")
let switchtrackLastScore = localStorage.getItem("switchtrackLastScore")
let switchtrackBestScore = localStorage.getItem("switchtrackBestScore")


let hitPoints = 100
let Minus = 0

let timeLeft = 3;
let timerId = 0;


function responsibility(){
    gameVH = window.innerHeight/100 * 87
    vh = window.innerHeight
    obj.style.height = vh/7 + "px"
    obj.style.width = vh/21 + "px"
    obj.style.display = "block"
/*
    obj2.style.height = vh/7 + "px"
    obj2.style.width = vh/21 + "px"
    obj2.style.display = "block"

    obj3.style.height = vh/7 + "px"
    obj3.style.width = vh/21 + "px"
    obj3.style.display = "block"
*/
  }
  setInterval(responsibility,0)


  initializeGame()

  timerId =  setInterval(countdown, 1000)

  function samR() {
    if (x_pos >= window.innerWidth - 80) {
      x_pos = window.innerWidth - 85;
      speedX *= -1;
    } else if (x_pos < 10) {
      speedX *= -1;
    }
    if (y_pos >= (gameVH - vh/5)-5) {
      y_pos = (gameVH - vh/5) - 10;
    }

    x_pos += speedX;
    y_pos += speedY;
    obj.style.position = "absolute";
    obj.style.left = x_pos + "px";
    obj.style.top = y_pos + "px";
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // změny speedu
  
  function samuelX() {
    speedX = random(3, 3) * random(-1, 1);
  }

  function initializeGame() {
    hitPoints = 100
    x_pos = random(10, window.innerWidth - 80);
    y_pos = random(10, window.innerHeight - (window.innerHeight / 3));
    speedX = random(2, 5);
    intervalSa = setInterval(samuelX, 1000);
    intervalR = setInterval(samR, 20);
  
    obj.style.position = "absolute";
    obj.style.left = x_pos + "px";
    obj.style.top = y_pos + "px";
  
    obj.style.display = "block"
  }
  
  obj.addEventListener("mouseenter",damage)
  obj.addEventListener("mouseleave",notDamage)

function damage(){
Minus = setInterval(damageMinus,10)
  if(hitPoints <= 0){
    points += 10
    initializeGame()
  }
}
function damageMinus(){
  hitPoints--
}
function notDamage(){
  clearInterval(Minus)
}


function vyhra(){
switchtrackLastScore = points
localStorage.setItem("switchtrackLastScore", switchtrackLastScore)


if(switchtrackLastScore >= switchtrackBestScore){
switchtrackBestScore = switchtrackLastScore
localStorage.setItem("switchtrackBestScore", switchtrackBestScore)
}

pocetHer++
localStorage.setItem("pocetHer",pocetHer)

let VsechnyScore = parseInt(vsechnyScore)

VsechnyScore += switchtrackLastScore

switchtrackAverageScore = VsechnyScore/pocetHer

if(isNaN(VsechnyScore) == true){
    VsechnyScore = switchtrackLastScore
    localStorage.setItem("vsechnyScore",VsechnyScore)
}
if(isNaN(switchtrackAverageScore) == true){
  switchtrackAverageScore = switchtrackLastScore
  localStorage.setItem("switchTrackAverageScore",Math.floor(switchtrackAverageScore))
}

localStorage.setItem("vsechnyScore",VsechnyScore)
localStorage.setItem("switchtrackAverageScore",Math.floor(switchtrackAverageScore))

}


function countdown() {
  if (timeLeft == -1) {
    clearInterval(timerId)
    vyhra()
  } else {
    timeLeft--;
  }
}