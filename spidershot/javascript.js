let obj = document.getElementById("obj")

let width = random(25,100)
let height = width

let gameVH = window.innerHeight/100 * 87
let vh = window.innerHeight


let x_pos1 = random(5,window.innerWidth - 40)
let y_pos1 = random(5,((gameVH - vh/5)-5))

let timeLeft = 3;
let timerId = 0;

let pocetHer = localStorage.getItem("pocetHer")
let vsechnyScore = localStorage.getItem("vsechnyScore")

let spidershotBestScore = localStorage.getItem("spidershotBestScore")
let spidershotLastScore = localStorage.getItem("spidershotLastScore")
let spidershotAverageScore = localStorage.getItem("spidershotAverageScore")

points = 0


obj.addEventListener("click",ahoj)

function ahoj(){
if(points == 1 ){
  timerId = setInterval(countdown, 1000)
}
}

document.getElementById("screen").style.width = (window.innerWidth - 80)
document.getElementById("screen").style.height = (gameVH - vh/5)-5

obj.addEventListener("click",middleFunction)


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

          
  obj.style.position = "absolute"
  obj.style.left = x_pos1 + "px"
  obj.style.top = y_pos1 + "px"

  


  function middleFunction(){ 

    width = random(25,100)
    height = width
 

   x_pos1 = (window.innerWidth/2) - (width/2)
   y_pos1 = (gameVH/2) - (width/2)



   obj.style.width = width + "px"
   obj.style.height= height + "px"
   obj.style.position = "absolute"
   obj.style.left = x_pos1 + "px"
   obj.style.top = y_pos1 + "px"


  obj.addEventListener("click",outFunction)
  obj.removeEventListener("click", middleFunction)
  
  points++
}

function outFunction(){ 

    x_pos1 = random(5,window.innerWidth - 40)
    y_pos1 = random(5,(gameVH - vh/5)-5)
 
    width = random(25,100)
    height = width

    obj.style.width = width + "px"
    obj.style.height= height + "px"
    obj.style.position = "absolute"
    obj.style.left = x_pos1 + "px"
    obj.style.top = y_pos1 + "px"

    obj.addEventListener("click",middleFunction)
    obj.removeEventListener("click", outFunction)

    points++
 }

 function responsibility(){
    gameVH = window.innerHeight/100 * 87
    vh = window.innerHeight


    if(x_pos1 > window.innerWidth - 5){
        x_pos1 = window.innerWidth - (width/2 + 5)
    }else if(x_pos1 < 0){
        x_pos = 5
    }

   if(y_pos1 > gameVH - 10){
        y_pos1 = gameVH - 25
    }else if (y_pos1 < 0 ){
        y_pos1 = 5
    }


    obj.style.position = "absolute"
    obj.style.left = x_pos1 + "px"
    obj.style.top = y_pos1 + "px"
 
  }
  setInterval(responsibility,0)


  function countdown() {
    if (timeLeft == -1) {
      clearInterval(timerId)
      vyhra()
    } else {
      timeLeft--;
    }
  }

  function vyhra(){
   spidershotLastScore = points
   localStorage.setItem("spidershotLastScore",spidershotLastScore)

   if(spidershotLastScore >= spidershotBestScore){
    spidershotBestScore = spidershotLastScore
    localStorage.setItem("spidershotBestScore",spidershotBestScore)
   }

   pocetHer++
  localStorage.setItem("pocetHer",pocetHer)
  
  let VsechnyScore = parseInt(vsechnyScore)
  
  VsechnyScore += spidershotLastScore
  
  spidershotAverageScore = VsechnyScore/pocetHer
  
  if(isNaN(VsechnyScore) == true){
      VsechnyScore = spidershotLastScore
      localStorage.setItem("vsechnyScore",VsechnyScore)
  }
  if(isNaN(spidershotAverageScore) == true){
    spidershotAverageScore = spidershotLastScore
    localStorage.setItem("spidershotAverageScore",Math.floor(spidershotAverageScore))
  }
  
  localStorage.setItem("vsechnyScore",VsechnyScore)
  localStorage.setItem("spidershotAverageScore",Math.floor(spidershotAverageScore))

  }