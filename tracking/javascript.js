// variables
let screen = document.getElementById("screen");
let points = 0
let pointsKonec = 0
let x_pos, y_pos, x_posB, y_posB, speedX, speedY;
let obj = document.getElementById("obj");
let game = document.getElementById("game");
let acc = 0
let accKonec = 0
let accOn = 0
let accOff = 0
let accAll = 0
let gameVH = window.innerHeight/100 * 87
let vh = window.innerHeight

let trackingvsechnyScore = localStorage.getItem("trackingvsechnyScore")
let trackingpocetHer = localStorage.getItem("trackingpocetHer")

let timeLeft = 30;
let timerId = 0;


let trackingLastScore = localStorage.getItem("trackingLastScore")
let trackingBestScore = localStorage.getItem("trackingBestScore")
let trackingAverageScore = localStorage.getItem("trackingAverageScore")

console.log(gameVH)
console.log(vh)


let z = window.innerHeight / 2 - 100;

// Intervaly id
let intervalP = 0;
let intervalM = 0;

let vitekPI = 10;
let vitekMI = 100;

let intervalS;
let intervalSa;

let intervalR;
let intervalB;
let intervalA;

let intervalPlusAcc
let intervalPlussAcc
let intervalMinusAcc
let intervalMinussAcc


// css
obj.style.display = "none"
initializeGame() 
// start hry
function initializeGame() {
  x_pos = random(10, window.innerWidth - 80);
  y_pos = random(10, window.innerHeight - (window.innerHeight / 3));
  x_posB = 0;
  y_posB = 0;
  speedX = random(5, 10);
  speedY = random(5, 10);
  points = 0;
  intervalS = setInterval(samuelY, 1000);
  intervalSa = setInterval(samuelX, 1000);
  intervalR = setInterval(samR, 20);

  obj.style.position = "absolute";
  obj.style.left = x_pos + "px";
  obj.style.top = y_pos + "px";

  obj.style.display = "block"
}
// restartuje stránku
function restart(){
  location.reload()
}


// zapnuti stránky
setPointsPositions();

function setPointsPositions(){
document.getElementById("p").style.marginLeft = ((window.innerWidth/2-100)-130) + 145 +"px"
document.getElementById("pp").style.marginLeft = ((window.innerWidth/2-100)-130)+"px"
document.getElementById("acc").style.marginLeft = (window.innerWidth/2-100) + 330 +"px"
document.getElementById("accc").style.marginLeft = (window.innerWidth/2-100) +120+"px"
document.getElementById("screen").style.width = (window.innerWidth - 80)
document.getElementById("screen").style.height = (gameVH - vh/5)-5

document.getElementById("endB").style.marginLeft = (window.innerWidth/2-150) +0+"px"
document.getElementById("endR").style.marginLeft = (window.innerWidth/2-150) +150+"px"

if(acc < 100 ){
  document.getElementById("acccc").style.marginLeft = (window.innerWidth/2) + 280 +"px"
}else if(acc == 100){
  document.getElementById("acccc").style.marginLeft = (window.innerWidth/2) + 300 +"px"
}if(acc < 10){
  document.getElementById("acccc").style.marginLeft = (window.innerWidth/2) + 255 +"px"
}
}

// random number generator
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// změny speedu
function samuelY() {
  speedY = random(2, 3) * random(-3, 3);
}


function samuelX() {
  speedX = random(2, 3) * random(-3, 3);

}

// vykreslování objektu
function samR() {
  if (x_pos >= window.innerWidth - 80) {
    x_pos = window.innerWidth - 85;
    speedX *= -1;
  } else if (x_pos < 10) {
    speedX *= -1;
  }
  if (y_pos >= (gameVH - vh/5)-5) {
    y_pos = (gameVH - vh/5) - 10;
    speedY *= -1;
  } else if (y_pos < 10) {
    speedY *= -1;
  }
  x_pos += speedX;
  y_pos += speedY;
  obj.style.position = "absolute";
  obj.style.left = x_pos + "px";
  obj.style.top = y_pos + "px";  
  console.log(speedX)
}

function responsibility(){
  gameVH = window.innerHeight/100 * 87
  vh = window.innerHeight
  obj.style.height = vh/5 + "px"
  obj.style.width = vh/15 + "px"
  obj.style.display = "block"
}
setInterval(responsibility,0)


// event listenery
obj.addEventListener("mouseenter", scoreP);
obj.addEventListener("mouseenter", scorePI);
obj.addEventListener("mouseleave", scoreMI);
obj.addEventListener("mouseleave", scoreM);

obj.addEventListener("mouseenter", AccPlus);
obj.addEventListener("mouseenter", AccPluss);
obj.addEventListener("mouseleave", AccMinus);
obj.addEventListener("mouseleave", AccMinuss);

// accuracy
function AccPlus(){
  accOn++
}
function AccPluss(){
  intervalPlusAcc = setInterval(AccPlus, 0);
  clearInterval(intervalMinusAcc);
}
function AccMinus(){
  accOff++
}
function AccMinuss(){
  intervalMinusAcc = setInterval(AccMinus, 0);
  clearInterval(intervalPlusAcc);
}

function accuracy(){

accAll = accOn+accOff
if(accAll === 0){
  document.getElementById("acc").innerHTML = 0
}else{
acc =  (accOn/accAll) * 100
document.getElementById("acc").innerHTML = Math.floor(acc)
}}

setInterval(accuracy,10)


// vyhra
function vyhra(){

  pointsKonec = points
  accKonec = acc

  game.style.display = "block";

  document.getElementById("vyhra").style.display = "block"
  endB.style.display = "block"
  endR.style.display = "block"
  document.querySelectorAll('#back,#acc, #accc, #acccc,#p,#pp,#time').forEach(item => {
    item.style.display = 'none';
})



  
  trackingLastScore = pointsKonec
  localStorage.setItem("trackingLastScore", trackingLastScore)

  if(trackingLastScore >= trackingBestScore){
    trackingBestScore = trackingLastScore
    localStorage.setItem("trackingBestScore", trackingBestScore)
  }


  document.getElementById("score").innerHTML = "SCORE: " + pointsKonec
  document.getElementById("best").innerHTML = "BEST: " + trackingBestScore 
  document.getElementById("endAcc").innerHTML = "ACCURACY: " + Math.floor(accKonec)+ "%"

  trackingpocetHer++
  localStorage.setItem("trackingpocetHer",trackingpocetHer)
  
  let VsechnyScore = parseInt(trackingvsechnyScore)
  
  VsechnyScore += trackingLastScore
  
  trackingAverageScore = VsechnyScore/trackingpocetHer
  
  if(isNaN(VsechnyScore) == true){
      VsechnyScore = trackingLastScore
      localStorage.setItem("trackingvsechnyScore",VsechnyScore)
  }
  if(isNaN(trackingAverageScore) == true){
    trackingAverageScore = trackingLastScore
    localStorage.setItem("trackingAverageScore",Math.floor(trackingAverageScore))
  }
  
  localStorage.setItem("trackingvsechnyScore",VsechnyScore)
  localStorage.setItem("trackingAverageScore",Math.floor(trackingAverageScore))


}

// points

function scoreP() {
  points++;
  document.getElementById("p").innerHTML = points;
}

function scoreM() {
  points--;
  if (points === 0) {
    clearInterval(intervalM);
  }
  document.getElementById("p").innerHTML = points;
}

function scorePI() {
  intervalP = setInterval(scoreP, vitekPI);
  clearInterval(intervalM);
}

function scoreMI() {
  intervalM = setInterval(scoreM, vitekMI);
  clearInterval(intervalP);
}

// start hry
function startGame() {
  document.querySelectorAll('#acc, #accc, #acccc,#p,#pp,#back').forEach(item => {
    item.style.display = 'block';
})
}



// intervaly
setInterval(setPointsPositions,0)
    
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