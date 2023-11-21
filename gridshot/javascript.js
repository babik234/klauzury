let circle1 = document.getElementById("1")
let circle2 = document.getElementById("2")
let circle3 = document.getElementById("3")
let screen = document.getElementById("screen")

let pocetHer = localStorage.getItem("pocetHer")
let vsechnyScore = localStorage.getItem("vsechnyScore")

let gridshotLastScore = localStorage.getItem("gridshotLastScore")
let gridshotBestScore = localStorage.getItem("gridshotBestScore")
let gridshotAverageScore = localStorage.getItem("gridshotAverageScore")

let timeLeft = 3;
let timerId = 0;

let points = 0

console.log(screen.getBoundingClientRect())


x_pos1 = random(5,window.innerWidth - 40)
y_pos1 = random(5,(window.innerHeight)-(window.innerHeight/3))

x_pos2 = random(5,window.innerWidth - 40)
y_pos2 = random(5,(window.innerHeight)-(window.innerHeight/3))

x_pos3 = random(5,window.innerWidth - 40)
y_pos3 = random(5,(window.innerHeight)-(window.innerHeight/3))

console.log(y_pos1)

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
x3x1 = Math.abs(X3X1)
x3x2 = Math.abs(X3X2)

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
        x_pos1 = random(5,window.innerWidth - 40)
        y_pos1 = random(5,(window.innerHeight)-(window.innerHeight/3))

            
        circle1.style.position = "absolute";
        circle1.style.left = x_pos1 + "px"
        circle1.style.top = y_pos1 + "px"

        points++
        document.getElementById("p").innerHTML = points

    if ((x1x2 < 75) || (x1x3 < 75)){

        console.log("x_pos1")
    } 
    console.log(x_pos1)
}

function click2(){
        x_pos2 = random(5,window.innerWidth - 40)
        y_pos2 = random(5,(window.innerHeight)-(window.innerHeight/3))

            
        circle2.style.position = "absolute";
        circle2.style.left = x_pos2 + "px"
        circle2.style.top = y_pos2 + "px"

        points++
        document.getElementById("p").innerHTML = points

    if ((x2x1 < 75) || (x2x3 < 75)){

        console.log("x_pos2")
    } 
    console.log(x_pos2)
}
function click3(){
        x_pos3 = random(5,window.innerWidth - 40)
        y_pos3 = random(5,(window.innerHeight)-(window.innerHeight/3))

            
        circle3.style.position = "absolute";
        circle3.style.left = x_pos3 + "px"
        circle3.style.top = y_pos3 + "px"

        points++
        document.getElementById("p").innerHTML = points
    console.log(x_pos3)
}



timerId =  setInterval(countdown, 1000)
 
function vyhra(){
    gridshotLastScore = points
    localStorage.setItem("gridshotLastScore", gridshotLastScore)
   
    if(gridshotLastScore >= gridshotBestScore){
        gridshotBestScore = gridshotLastScore
        localStorage.setItem("gridshotBestScore", gridshotBestScore )
    }

    pocetHer++
    localStorage.setItem("pocetHer",pocetHer)
    
    let VsechnyScore = parseInt(vsechnyScore)
    
    VsechnyScore += gridshotLastScore
    
    gridshotAverageScore = VsechnyScore/pocetHer
    
    if(isNaN(VsechnyScore) == true){
        VsechnyScore = gridshotLastScore
        localStorage.setItem("vsechnyScore",VsechnyScore)
    }
    if(isNaN(gridshotAverageScore) == true){
      gridshotAverageScore = gridshotLastScore
      localStorage.setItem("gridshotAverageScore",Math.floor(gridshotAverageScore))
    }
    
    localStorage.setItem("vsechnyScore",VsechnyScore)
    localStorage.setItem("gridshotAverageScore",Math.floor(gridshotAverageScore))

    }


function countdown() {
    if (timeLeft == -1) {
    clearInterval(timerId)
    vyhra()
    } else {
    timeLeft--;
    }
}