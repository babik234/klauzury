let pole = [[0,0,0],
            [0,0,0],
            [0,0,0]]

const circles = document.querySelector('.wrapper').querySelectorAll("div");

let x = 0
let y = 0
let z = 0

do{
    x = random(1,9)
    y = random(1,9)
    z = random(1,9)
}while(x == y || x == z || y == x || y == z || z == x || z == y)

function random(min,max) {
    return Math.floor((Math.random())*(max-min+1))+min;
   }

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

    for(let l = 0;l<9;l++){
        circles[l].addEventListener("click",function () {spawn(l)})
     }
     
    
   spawn(l){
    if(
       for(let o = 0;o<3;o++){
        for(let p = 0;p<0)
       }
    )
   }