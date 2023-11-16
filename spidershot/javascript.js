let obj = document.getElementById("obj")

let width = random(25,100)
let height = width

let gameVH = window.innerHeight/100 * 87
let vh = window.innerHeight


let x_pos1 = random(5,window.innerWidth - 40)
let y_pos1 = random(5,((gameVH - vh/5)-5))

let timeLeft = 30;
let timerId = 0;

let spidershotBestScore = localStorage.getItem("spidershotBestScore")
let spidershotLastScore = localStorage.getItem("spidershotLastScore")

score = 0
timer = 0
timerId = 0


function startTimer(){
    timerId = setInterval(countdown, 1000)
    timer++

    if(timer === 1 ){
        obj.removeEventListener("click",startTimer)
    }
}






document.getElementById("screen").style.width = (window.innerWidth - 80)
document.getElementById("screen").style.height = (gameVH - vh/5)-5

obj.addEventListener("click",middleFunction)
obj.addEventListener("click",startTimer)

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
  
  score++
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

    score++
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
   spidershotLastScore = score
   localStorage.setItem("spidershotLastScore",spidershotLastScore)

   if(spidershotLastScore >= spidershotBestScore){
    spidershotBestScore = spidershotLastScore
    localStorage.setItem("spidershotBestScore",spidershotBestScore)
   }
  }