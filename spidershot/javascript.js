let obj = document.getElementById("obj")

let width = random(25,100)
let height = width

let gameVH = window.innerHeight/100 * 87
let vh = window.innerHeight


let x_pos1 = random(5,window.innerWidth - 40)
let y_pos1 = random(5,((gameVH - vh/5)-5))

let timeLeft = 30;
let timerId = 0;

let spidershotpocetHer = localStorage.getItem("spidershotpocetHer")
let spidershotvsechnyScore = localStorage.getItem("spidershotvsechnyScore")

let spidershotBestScore = localStorage.getItem("spidershotBestScore")
let spidershotLastScore = localStorage.getItem("spidershotLastScore")
let spidershotAverageScore = localStorage.getItem("spidershotAverageScore")

points = 0



function restart(){
    location.reload()
}




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
  document.getElementById("pp").innerHTML = points
  
}

function outFunction(){ 

    x_pos1 = random(5,window.innerWidth - 50)
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
    document.getElementById("pp").innerHTML = points
 }

 function responsibility(){
    gameVH = window.innerHeight/100 * 87
    vh = window.innerHeight

    document.getElementById("endB").style.marginLeft = (window.innerWidth/2-150) +0+"px"
    document.getElementById("endR").style.marginLeft = (window.innerWidth/2-150) +150+"px"
    
    document.getElementById("screen").style.width = (window.innerWidth - 80)
    document.getElementById("screen").style.height = (gameVH - vh/5)-5
    document.getElementById("pp").style.marginLeft = 150 + "px"

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
    if (timeLeft == 0) {
      clearInterval(timerId)
      vyhra()
    } else {
      document.getElementById("time").innerHTML = "Timeleft: " + timeLeft
      timeLeft--;
    }
  }
  document.getElementById("time").innerHTML = "Timeleft: " + timeLeft
  function vyhra(){
    game.style.display = "block";

    document.getElementById("vyhra").style.display = "block"
    endB.style.display = "block"
    endR.style.display = "block"
    document.querySelectorAll('#p,#pp,#back,#time').forEach(item => {
      item.style.display = 'none';
  })





   spidershotLastScore = points
   localStorage.setItem("spidershotLastScore",spidershotLastScore)

   if(spidershotLastScore >= spidershotBestScore){
    spidershotBestScore = spidershotLastScore
    localStorage.setItem("spidershotBestScore",spidershotBestScore)
   }
   document.getElementById("score").innerHTML = "BEST: " + points
   document.getElementById("best").innerHTML = "SCORE: " + spidershotBestScore
  


   spidershotpocetHer++
  localStorage.setItem("spidershotpocetHer",spidershotpocetHer)
  
  let VsechnyScore = parseInt(spidershotvsechnyScore)
  
  VsechnyScore += spidershotLastScore
  
  spidershotAverageScore = VsechnyScore/spidershotpocetHer
  
  if(isNaN(VsechnyScore) == true){
      VsechnyScore = spidershotLastScore
      localStorage.setItem("spidershotvsechnyScore",VsechnyScore)
  }
  if(isNaN(spidershotAverageScore) == true){
    spidershotAverageScore = spidershotLastScore
    localStorage.setItem("spidershotAverageScore",Math.floor(spidershotAverageScore))
  }
  
  localStorage.setItem("spidershotvsechnyScore",VsechnyScore)
  localStorage.setItem("spidershotAverageScore",Math.floor(spidershotAverageScore))

  }
  let StartP =  document.getElementById("startP")
let Start = document.getElementById("start")

Start.addEventListener("click",start)

function start(){
 Start.style.display = "none"  
 StartP.style.display = "none"  
 timerId =  setInterval(countdown, 1000)
}
