let trackingLastScore = localStorage.getItem("trackingLastScore")
let trackingBestScore = localStorage.getItem("trackingBestScore")
let trackingAverageScore = localStorage.getItem("trackingAverageScore")


let gridshotLastScore = localStorage.getItem("gridshotLastScore")
let gridshotBestScore = localStorage.getItem("gridshotBestScore")
let gridshotAverageScore = localStorage.getItem("gridshotAverageScore")


let spidershotLastScore = localStorage.getItem("spidershotLastScore")
let spidershotBestScore = localStorage.getItem("spidershotBestScore")
let spidershotAverageScore = localStorage.getItem("spidershotAverageScore")

let switchtrackLastScore = localStorage.getItem("switchtrackLastScore")
let switchtrackBestScore = localStorage.getItem("switchtrackBestScore")
let switchtrackAverageScore = localStorage.getItem("switchtrackAverageScore")

let gridshot3x3LastScore = localStorage.getItem("gridshot3x3LastScore")
let gridshot3x3BestScore = localStorage.getItem("gridshot3x3BestScore")
let gridshot3x3AverageScore = localStorage.getItem("gridshot3x3AverageScore")


let darkmode = localStorage.getItem("darkmode") 

let mode = document.getElementById("mode")
let button = 0

if(trackingAverageScore == null || trackingBestScore == null || trackingLastScore == null){
    trackingAverageScore = 0
    trackingBestScore = 0
    trackingLastScore = 0
    
    localStorage.setItem("trackingAverageScore",trackingAverageScore)
    localStorage.setItem("trackingBestScore",trackingBestScore)
    localStorage.setItem("trackingLastScore",trackingLastScore)
    }else{
      localStorage.setItem("trackingAverageScore",Math.floor(trackingAverageScore))
      localStorage.setItem("trackingLastScore", trackingLastScore)
      localStorage.setItem("trackingBestScore", trackingBestScore)

    }
     
if(switchtrackAverageScore == null || switchtrackBestScore == null || switchtrackLastScore == null){
   switchtrackAverageScore = 0
   switchtrackBestScore = 0
   switchtrackLastScore = 0
    
    localStorage.setItem("switchtrackAverageScore",switchtrackAverageScore)
    localStorage.setItem("switchtrackBestScore",switchtrackBestScore)
    localStorage.setItem("switchtrackLastScore",switchtrackLastScore)
    }else{
        localStorage.setItem("switchtrackAverageScore",switchtrackAverageScore)
        localStorage.setItem("switchtrackBestScore",switchtrackBestScore)
        localStorage.setItem("switchtrackLastScore",switchtrackLastScore)
    }

if(gridshotAverageScore == null || gridshotBestScore == null || gridshotLastScore == null){
    gridshotAverageScore = 0
    gridshotBestScore = 0
    gridshotLastScore = 0
        
        localStorage.setItem("gridshotAverageScore",gridshotAverageScore)
        localStorage.setItem("gridshotBestScore",gridshotBestScore)
        localStorage.setItem("gridshotLastScore",gridshotLastScore)
        }else{
            localStorage.setItem("gridshotAverageScore",gridshotAverageScore)
            localStorage.setItem("gridshotBestScore",gridshotBestScore)
            localStorage.setItem("gridshotLastScore",gridshotLastScore)
        }


if(gridshot3x3AverageScore == null || gridshot3x3BestScore == null || gridshot3x3LastScore == null){
     gridshot3x3AverageScore = 0
     gridshot3x3BestScore = 0
     gridshot3x3LastScore = 0
        
        localStorage.setItem("gridshot3x3AverageScore",gridshot3x3AverageScore)
        localStorage.setItem("gridshot3x3BestScore",gridshot3x3BestScore)
        localStorage.setItem("gridshot3x3LastScore",gridshot3x3LastScore)
        }else{
        localStorage.setItem("gridshot3x3AverageScore",gridshot3x3AverageScore)
        localStorage.setItem("gridshot3x3BestScore",gridshot3x3BestScore)
        localStorage.setItem("gridshot3x3LastScore",gridshot3x3LastScore)
        }
        
if(spidershotAverageScore == null || spidershotBestScore == null || spidershotLastScore == null){
     spidershotAverageScore = 0
     spidershotBestScore = 0
     spidershotLastScore = 0
        
        localStorage.setItem("spidershotAverageScore",spidershotAverageScore)
        localStorage.setItem("spidershotBestScore",spidershotBestScore)
        localStorage.setItem("spidershotLastScore",spidershotLastScore)
        }else{
            localStorage.setItem("spidershotAverageScore",spidershotAverageScore)
            localStorage.setItem("spidershotBestScore",spidershotBestScore)
            localStorage.setItem("spidershotLastScore",spidershotLastScore)
        }





document.getElementById("TLS").innerHTML = "Lastscore: " + trackingLastScore
document.getElementById("TBS").innerHTML = "bestscore: " +trackingBestScore
document.getElementById("TAS").innerHTML = "Averagescore: " +trackingAverageScore

document.getElementById("GSLS").innerHTML ="Lastscore: "+ gridshotLastScore
document.getElementById("GSBS").innerHTML ="bestscore: " + gridshotBestScore
document.getElementById("GSAS").innerHTML ="Averagescore: " + gridshotAverageScore

document.getElementById("SSLS").innerHTML ="Lastscore: "+  spidershotLastScore
document.getElementById("SSBS").innerHTML ="bestscore: " +  spidershotBestScore
document.getElementById("SSAS").innerHTML ="Averagescore: " +  spidershotAverageScore

document.getElementById("STLS").innerHTML ="Lastscore: "+ switchtrackLastScore
document.getElementById("STBS").innerHTML ="bestscore: " +  switchtrackBestScore
document.getElementById("STAS").innerHTML ="Averagescore: " +  switchtrackAverageScore 

document.getElementById("G3LS").innerHTML ="Lastscore: "+ gridshot3x3LastScore
document.getElementById("G3BS").innerHTML ="bestscore: " +  gridshot3x3BestScore
document.getElementById("G3AS").innerHTML ="Averagescore: " +  gridshot3x3AverageScore 




mode.innerHTML = "white"

if(darkmode == null || isNaN(darkmode)){
    darkmode = 0
}

darkmode = localStorage.getItem("darkmode")

dark()

function dark(){
    if(button == 0){
document.body.style.backgroundColor = "rgb(52, 52, 52)";
button++
document.querySelectorAll('#GSLS,#GSBS,#GSAS,#SSLS,#SSBS,#SSAS,#STLS,#STBS,#STAS,#TLS,#TBS,#TAS,#G3AS,#G3BS,#G3LS,#h2,#h1').forEach(item => {
    item.style.color = "#999"
})
document.querySelectorAll('#games').forEach(item => {
    item.style.borderColor = "black";
})
document.getElementById("mode").innerHTML = "black"

localStorage.setItem("darkmode",button)
} 
  else if(button == 1){
    document.body.style.backgroundColor = "white"; 
    button--
    document.querySelectorAll('#GSLS,#GSBS,#GSAS,#SSLS,#SSBS,#SSAS,#STLS,#STBS,#STAS,#TLS,#TBS,#TAS,#G3AS,#G3BS,#G3LS,#h2,#h1').forEach(item => {
        item.style.color = "black"
    })
    document.querySelectorAll('#games').forEach(item => {
        item.style.borderColor = "black";
    })
document.getElementById("mode").innerHTML = "white"
localStorage.setItem("darkmode", button)
}
}






