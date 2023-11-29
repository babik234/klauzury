let trackingLastScore = localStorage.getItem("trackingLastScore")
document.getElementById("TLS").innerHTML = "Lastscore: " + trackingLastScore

let trackingBestScore = localStorage.getItem("trackingBestScore")
document.getElementById("TBS").innerHTML = "bestscore: " +trackingBestScore

let trackingAverageScore = localStorage.getItem("trackingAverageScore")
document.getElementById("TAS").innerHTML = "Averagescore: " +trackingAverageScore



let gridshotLastScore = localStorage.getItem("gridshotLastScore")
document.getElementById("GSLS").innerHTML ="Lastscore: "+ gridshotLastScore

let gridshotBestScore = localStorage.getItem("gridshotBestScore")
document.getElementById("GSBS").innerHTML ="bestscore: " + gridshotBestScore

let gridshotAverageScore = localStorage.getItem("gridshotAverageScore")
document.getElementById("GSAS").innerHTML ="Averagescore: " + gridshotAverageScore





let spidershotLastScore = localStorage.getItem("spidershotLastScore")
document.getElementById("SSLS").innerHTML ="Lastscore: "+  spidershotLastScore

let spidershotBestScore = localStorage.getItem("spidershotBestScore")
document.getElementById("SSBS").innerHTML ="bestscore: " +  spidershotBestScore

let spidershotAverageScore = localStorage.getItem("spidershotAverageScore")
document.getElementById("SSAS").innerHTML ="Averagescore: " +  spidershotAverageScore




let switchtrackLastScore = localStorage.getItem("switchtrackLastScore")
document.getElementById("STLS").innerHTML ="Lastscore: "+ switchtrackLastScore

let switchtrackBestScore = localStorage.getItem("switchtrackBestScore")
document.getElementById("STBS").innerHTML ="bestscore: " +  switchtrackBestScore

let switchtrackAverageScore = localStorage.getItem("switchtrackAverageScore")
document.getElementById("STAS").innerHTML ="Averagescore: " +  switchtrackAverageScore 

let mode = document.getElementById("mode")

mode.innerHTML = "white"

let button = 0


function dark(){
    if(button == 0){
document.body.style.backgroundColor = "rgb(28, 26, 26)";
button++
document.querySelectorAll('#GSLS,#GSBS,#GSAS,#SSLS,#SSBS,#SSAS,#STLS,#STBS,#STAS,#TLS,#TBS,#TAS,#h2,#h1').forEach(item => {
    item.style.color = "#999"
})
document.querySelectorAll('#games').forEach(item => {
    item.style.borderColor = "black";
})
document.getElementById("mode").innerHTML = "black"

} 
  else if(button == 1){
    document.body.style.backgroundColor = "white"; 
    button--
    document.querySelectorAll('#GSLS,#GSBS,#GSAS,#SSLS,#SSBS,#SSAS,#STLS,#STBS,#STAS,#TLS,#TBS,#TAS,#h2,#h1').forEach(item => {
        item.style.color = "black"
    })
    document.querySelectorAll('#games').forEach(item => {
        item.style.borderColor = "black";
    })
document.getElementById("mode").innerHTML = "white"
}
}


if(spidershotAverageScore || spidershotBestScore || spidershotLastScore == null){
    spidershotAverageScore = 0
    spidershotLastScore = 0
    spidershotBestScore = 0
    localStorage.setItem("spidershotAverageScore",Math.floor(spidershotAverageScore))
    localStorage.setItem("spidershotBestScore",spidershotBestScore)
    localStorage.setItem("spidershotLastScore",spidershotLastScore)
}

if(gridshotAverageScore || gridshotBestScore || gridshotLastScore == null){
    gridshotAverageScore = 0
    gridshotLastScore = 0
    gridshotBestScore = 0
    localStorage.setItem("gridshotAverageScore",Math.floor(gridshotAverageScore))
    localStorage.setItem("gridshotBestScore",gridshotBestScore)
    localStorage.setItem("gridshotLastScore",gridshotLastScore)
}

if(trackingAverageScore || trackingBestScore || trackingLastScore  == null){
    trackingAverageScore = 0
    trackingLastScore = 0
    trackingBestScore = 0
    localStorage.setItem("trackingAverageScore",Math.floor(trackingAverageScore))
    localStorage.setItem("trackingBestScore",trackingBestScore)
    localStorage.setItem("trackingLastScore",trackingLastScore)
}

if( switchtrackAverageScore || switchtrackBestScore || switchtrackLastScore == null){
    switchtrackAverageScore = 0
    switchtrackLastScore = 0
    switchtrackBestScore = 0
    localStorage.setItem("switchtrackAverageScore",Math.floor(switchtrackAverageScore))
    localStorage.setItem("switchtrackBestScore",switchtrackBestScore)
    localStorage.setItem("switchtrackLastScore",switchtrackLastScore)
}


