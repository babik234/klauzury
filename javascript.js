let trackingLastScore = localStorage.getItem("trackingLastScore")
document.getElementById("TLS").innerHTML = trackingLastScore

let trackingBestScore = localStorage.getItem("trackingBestScore")
document.getElementById("TBS").innerHTML = trackingBestScore

let trackingAverageScore = localStorage.getItem("trackingAverageScore")
document.getElementById("TAS").innerHTML = trackingAverageScore



let gridshotLastScore = localStorage.getItem("gridshotLastScore")
document.getElementById("GSLS").innerHTML = gridshotLastScore

let gridshotBestScore = localStorage.getItem("gridshotBestScore")
document.getElementById("GSBS").innerHTML = gridshotBestScore

let gridshotAverageScore = localStorage.getItem("gridshotAverageScore")
document.getElementById("GSAS").innerHTML = gridshotAverageScore





let spidershotLastScore = localStorage.getItem("spidershotLastScore")
document.getElementById("SSLS").innerHTML = spidershotLastScore

let spidershotBestScore = localStorage.getItem("spidershotBestScore")
document.getElementById("SSBS").innerHTML = spidershotBestScore

let spidershotAverageScore = localStorage.getItem("spidershotAverageScore")
document.getElementById("SSAS").innerHTML = spidershotAverageScore




let switchtrackLastScore = localStorage.getItem("switchtrackLastScore")
document.getElementById("STLS").innerHTML = switchtrackLastScore

let switchtrackBestScore = localStorage.getItem("switchtrackBestScore")
document.getElementById("STBS").innerHTML = switchtrackBestScore

let switchtrackAverageScore = localStorage.getItem("switchtrackAverageScore")
document.getElementById("STAS").innerHTML = switchtrackAverageScore 

let mode = document.getElementById("mode")
let button = 0

function dark(){
    if(button == 0){
document.body.style.backgroundColor = "rgb(28, 26, 26)";
button++
document.querySelectorAll('#GSLS,#GSBS,#GSAS,#SSLS,#SSBS,#SSAS,#STLS,#STBS,#STAS,#TLS,#TBS,#TAS').forEach(item => {
    item.style.color = "white"
})
}else if(button == 1){
    document.body.style.backgroundColor = "white"; 
    button--
    document.querySelectorAll('#GSLS,#GSBS,#GSAS,#SSLS,#SSBS,#SSAS,#STLS,#STBS,#STAS,#TLS,#TBS,#TAS').forEach(item => {
        item.style.color = "black"
    })
}
}

function resp(){
    mode.style.position = "absolute";
    mode.style.left = window.innerWidth- 75 + "px";
    mode.style.top = window.innerHeight- (window.innerHeight - 10) + "px";
}
setInterval(resp,0)
