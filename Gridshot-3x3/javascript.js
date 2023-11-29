let pole = [[0,0,0],
            [0,0,0],
            [0,0,0]]

             
let points = 0
let x = 0
let y = 0
let z = 0

let timeLeft = 3
let timerId = 0

const circles = document.querySelector('.wrapper').querySelectorAll("div");

for(let l = 0;l<9;l++){
    circles[l].style.background = "grey"
 }

 document.getElementById("points").innerHTML = "Points: " + points


hra()

function random(min,max) {
    return Math.floor((Math.random())*(max-min+1))+min;
   }
   function hra(){
   do{
    x = random(1,9)
    y = random(1,9)
    z = random(1,9)
}while(x == y || x == z || y == x || y == z || z == x || z == y)

   for(let i = 0;i<3;i++){

    if(i == 1){
        x = y
    }else if(i == 2){
        x = z
    }

     switch(x){
        case 1: pole[0][0] = 1
        document.getElementById("1").style.background = "black"
        break;
        case 2: pole[0][1] = 1
        document.getElementById("2").style.background  = "black"
        break;
        case 3: pole[0][2] = 1
        document.getElementById("3").style.background  = "black"
        break;



        case 4: pole[1][0] = 1
        document.getElementById("4").style.background  = "black"
        break;
        case 5: pole[1][1] = 1
        document.getElementById("5").style.background  = "black"
        break;
        case 6: pole[1][2] = 1
        document.getElementById("6").style.background = "black"
        break;


        case 7: pole[2][0] = 1
        document.getElementById("7").style.background  = "black"
        break;
        case 8: pole[2][1] = 1
        document.getElementById("8").style.background  = "black"
        break;
        case 9: pole[2][2] = 1
        document.getElementById("9").style.background  = "black"
        break;
    }

   }
   console.log(pole) 
   console.log("dkgis")

}

    for(let l = 0;l<9;l++){
        circles[l].addEventListener("click",function () {spawn(l)})
     }
      function spawn(index){ 
        if(circles[index].style.background === "black"){
            points ++
            circles[index].style.background = "grey"

        } 

    }



    function check(){
        let circlesN = 0
        for(let v = 0;v<9;v++){
            if(circles[v].style.background === "grey" ) { 
           circlesN++
            document.getElementById("points").innerHTML = "Points: " + points
            }
           }
           if (circlesN === 9) {

            for(let m = 0;m<3;m++){
             for(let n = 0;n<3;n++){
                 pole[m][n] = 0      
                  }
                }
            hra()
           }
           
        }
    
    setInterval(check,1)


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

        document.getElementById("endB").style.marginLeft = (window.innerWidth/2-150) +0+"px"
        document.getElementById("endR").style.marginLeft = (window.innerWidth/2-150) +150+"px"

        game.style.display = "block";
    
        document.getElementById("vyhra").style.display = "block"
        endB.style.display = "block"
        endR.style.display = "block"
        document.querySelectorAll('#points,#back,#time').forEach(item => {
          item.style.display = 'none';
      })
      for(let v = 0;v<9;v++){
        circles[v].style.display = "none"
          }
    
    
    /*
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
    */
      }
    
      let StartP =  document.getElementById("startP")
    let Start = document.getElementById("start")
    
    Start.addEventListener("click",start)
    
    function start(){
     Start.style.display = "none"  
     StartP.style.display = "none"  
     timerId =  setInterval(countdown, 1000)
    }

   function restart(){
    location.reload()
   }