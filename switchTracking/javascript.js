let obj = document.getElementById("obj")
//let obj2= document.getElementById("obj2")
//let obj3 = document.getElementById("obj3")
let gameVH = window.innerHeight/100 * 87
let vh = window.innerHeight
let x_pos, y_pos, x_posB, y_posB, speedX, speedY
let points = 0
let switchtrackLastScore = localStorage.getItem("switchtrackLastScore")
let hitPoints = 100

let Minus = 0

let timeLeft = 30;
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
    points++
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
console.log("JUASDGFA")
}


function countdown() {
  if (timeLeft == -1) {
    clearInterval(timerId)
    vyhra()
  } else {
    timeLeft--;
  }
}