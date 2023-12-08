let obj = document.getElementById("obj")
//let obj2= document.getElementById("obj2")
//let obj3 = document.getElementById("obj3")
let gameVH = window.innerHeight/100 * 87
let vh = window.innerHeight
let x_pos, y_pos, x_posB, y_posB, speedX, speedY
let points = 0

let switchtrackvsechnyScore = localStorage.getItem("switchtrackvsechnyScore")
let switchtrackpocetHer = localStorage.getItem("switchtrackpocetHer")

let switchtrackAverageScore = localStorage.getItem("switchtrackAverageScore")
let switchtrackLastScore = localStorage.getItem("switchtrackLastScore")
let switchtrackBestScore = localStorage.getItem("switchtrackBestScore")
/*
if( switchtrackAverageScore && switchtrackBestScore && switchtrackLastScore == null){
  switchtrackAverageScore = 0
  switchtrackLastScore = 0
  switchtrackBestScore = 0
  localStorage.setItem("switchtrackAverageScore",Math.floor(switchtrackAverageScore))
  localStorage.setItem("switchtrackBestScore",switchtrackBestScore)
  localStorage.setItem("switchtrackLastScore",switchtrackLastScore)
}
*/

let hitPoints = 100
let Minus = 0

let timeLeft = 30;
let timerId = 0;


function responsibility(){
  document.getElementById("p").style.marginLeft = (window.innerWidth/2-100) + 145 +"px"
  document.getElementById("pp").style.marginLeft = (window.innerWidth/2-100)+"px"

  document.getElementById("endB").style.marginLeft = (window.innerWidth/2-150) +0+"px"
  document.getElementById("endR").style.marginLeft = (window.innerWidth/2-150) +150+"px"

    gameVH = window.innerHeight/100 * 87
    vh = window.innerHeight
    obj.style.height = vh/7 + "px"
    obj.style.width = vh/21 + "px"
    obj.style.display = "block"

  }
  setInterval(responsibility,0)
  function restart(){
    location.reload()
  }

  initializeGame()



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
    document.getElementById("p").innerHTML = points
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
  document.getElementById("screen").style.display = "block";

  document.getElementById("vyhra").style.display = "block"

  endB.style.display = "block"
  endR.style.display = "block"
  document.querySelectorAll('#p,#pp,#back,#time').forEach(item => {
    item.style.display = 'none';
})

switchtrackLastScore = points
localStorage.setItem("switchtrackLastScore", switchtrackLastScore)


if(switchtrackLastScore >= switchtrackBestScore){
switchtrackBestScore = switchtrackLastScore
localStorage.setItem("switchtrackBestScore", switchtrackBestScore)
}

document.getElementById("score").innerHTML = "SCORE: " + points
document.getElementById("best").innerHTML = "BEST: " + switchtrackBestScore

switchtrackpocetHer++
localStorage.setItem("switchtrackpocetHer",switchtrackpocetHer)

let VsechnyScore = parseInt(switchtrackvsechnyScore)

VsechnyScore += switchtrackLastScore

switchtrackAverageScore = VsechnyScore/switchtrackpocetHer

if(isNaN(VsechnyScore) == true){
    VsechnyScore = switchtrackLastScore
    localStorage.setItem("switchtrackvsechnyScore",VsechnyScore)
}
if(isNaN(switchtrackAverageScore) == true){
  switchtrackAverageScore = switchtrackLastScore
  localStorage.setItem("switchTrackAverageScore",Math.floor(switchtrackAverageScore))
}

localStorage.setItem("switchtrackvsechnyScore",VsechnyScore)
localStorage.setItem("switchtrackAverageScore",Math.floor(switchtrackAverageScore))

}


function countdown() {
  if (timeLeft == 0) {
    clearInterval(timerId)
    vyhra()
  } else {
    document.getElementById("time").innerHTML = "Timeleft: " + timeLeft
    timeLeft--;
  }
}
document.getElementById("time").innerHTML = "Timeleft: " + timeLeft

let StartP =  document.getElementById("startP")
let Start = document.getElementById("start")

Start.addEventListener("click",start)

function start(){
 Start.style.display = "none"  
 StartP.style.display = "none"  
 timerId =  setInterval(countdown, 1000)
}

let darkmode = localStorage.getItem("darkmode")

if(darkmode == 1){
  document.getElementById("body").style.backgroundColor = "grey"
}