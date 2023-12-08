let circle1 = document.getElementById("1")
let circle2 = document.getElementById("2")
let circle3 = document.getElementById("3")
let screen = document.getElementById("screen")

let gridshotpocetHer = localStorage.getItem("gridshotpocetHer")
let gridshotvsechnyScore = localStorage.getItem("gridshotvsechnyScore")

let gridshotLastScore = localStorage.getItem("gridshotLastScore")
let gridshotBestScore = localStorage.getItem("gridshotBestScore")
let gridshotAverageScore = localStorage.getItem("gridshotAverageScore")

let timeLeft = 30;
let timerId = 0;

let points = 0

console.log(screen.getBoundingClientRect())


let  x_pos1 = random(5,window.innerWidth - 65)
let y_pos1 = random(5,(window.innerHeight)-(window.innerHeight/3))

let x_pos2 = random(5,window.innerWidth - 65)
let y_pos2 = random(5,(window.innerHeight)-(window.innerHeight/3))

let x_pos3 = random(5,window.innerWidth - 65)
let y_pos3 = random(5,(window.innerHeight)-(window.innerHeight/3))

screen.style.width = window.innerWidth
screen.style.height = window.innerHeight


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
let X1X2 = x_pos1 - x_pos2
let X1X3 = x_pos1 - x_pos3
x1x2 = Math.abs(X1X2)
x1x3 = Math.abs(X1X3)

let X2X1 = x_pos2 - x_pos1
let X2X3 = x_pos2 - x_pos3
x2x1 = Math.abs(X2X1)
x2x3 = Math.abs(X2X3)

let X3X1 = x_pos3 - x_pos1
let X3X2 = x_pos3 - x_pos2



click1()
click2()
click3()

points = 0
document.getElementById("p").innerHTML = points

circle1.style.display = "block"
circle2.style.display = "block"
circle3.style.display = "block"



circle1.addEventListener("click",click1)
circle2.addEventListener("click",click2)
circle3.addEventListener("click",click3)




function click1(){
   
    do{
        x_pos1 = random(5,window.innerWidth - 100)
        y_pos1 = random(5,(window.innerHeight)-(window.innerHeight/3))
    }while(((x_pos1-x_pos2 >  -100) && (x_pos1-x_pos2 < 100)) || (((x_pos1-x_pos3 > -100) && (x_pos1-x_pos3 < 100))))
  
            
        circle1.style.position = "absolute";
        circle1.style.left = x_pos1 + "px"
        circle1.style.top = y_pos1 + "px"

        points++
        document.getElementById("p").innerHTML = points

        console.log(x_pos1)
    }

function click2(){
    do{
        x_pos2 = random(5,window.innerWidth - 100)
        y_pos2 = random(5,(window.innerHeight)-(window.innerHeight/3))
    }while(((x_pos2-x_pos1 >  -100) && (x_pos2-x_pos1 < 100)) || (((x_pos2-x_pos3 > -100) && (x_pos2-x_pos3 < 100))))

            
        circle2.style.position = "absolute";
        circle2.style.left = x_pos2 + "px"
        circle2.style.top = y_pos2 + "px"

        points++
        document.getElementById("p").innerHTML = points
        console.log(x_pos2)
       
}
function click3(){
    do{
        x_pos3 = random(5,window.innerWidth - 100)
        y_pos3 = random(5,(window.innerHeight)-(window.innerHeight/3))
    }while(((x_pos3-x_pos1 >  -100) && (x_pos3-x_pos1 < 100)) || (((x_pos3-x_pos2 > -100) && (x_pos3-x_pos2 < 100))))

            
        circle3.style.position = "absolute";
        circle3.style.left = x_pos3 + "px"
        circle3.style.top = y_pos3 + "px"

        points++
        document.getElementById("p").innerHTML = points
        console.log(x_pos3)
}




 
function vyhra(){

    game.style.display = "block";

    document.getElementById("vyhra").style.display = "block"
    endB.style.display = "block"
    endR.style.display = "block"
    document.querySelectorAll('#p,#pp,#back,#time').forEach(item => {
      item.style.display = 'none';
  })
  

    gridshotLastScore = points
    localStorage.setItem("gridshotLastScore", gridshotLastScore)
   
    if(gridshotLastScore >= gridshotBestScore){
        gridshotBestScore = gridshotLastScore
        localStorage.setItem("gridshotBestScore", gridshotBestScore )
    }



    document.getElementById("score").innerHTML = "SCORE: " + points
    document.getElementById("best").innerHTML = "BEST: " + gridshotLastScore 


    gridshotpocetHer++
    localStorage.setItem("gridshotpocetHer",gridshotpocetHer)
    
    let VsechnyScore = parseInt(gridshotvsechnyScore)
    
    VsechnyScore += gridshotLastScore
    
    gridshotAverageScore = VsechnyScore/gridshotpocetHer
    
    if(isNaN(VsechnyScore) == true){
        VsechnyScore = gridshotLastScore
        localStorage.setItem("gridshotvsechnyScore",VsechnyScore)
    }
    if(isNaN(gridshotAverageScore) == true){
      gridshotAverageScore = gridshotLastScore
      localStorage.setItem("gridshotAverageScore",Math.floor(gridshotAverageScore))
    }
    
    localStorage.setItem("gridshotvsechnyScore",VsechnyScore)
    localStorage.setItem("gridshotAverageScore",Math.floor(gridshotAverageScore))

    }

function responsivity(){
 document.getElementById("p").style.left = (window.innerWidth/2-120) + 175 + "px"
 document.getElementById("pp").style.left = window.innerWidth/2-120 + "px"

 document.getElementById("endB").style.marginLeft = (window.innerWidth/2-150) +0+"px"
document.getElementById("endR").style.marginLeft = (window.innerWidth/2-150) +150+"px"
}

setInterval(responsivity,0)

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
function restart(){
    location.reload()
}
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