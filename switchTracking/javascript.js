let obj = document.getElementById("obj")
let gameVH = window.innerHeight/100 * 87
let vh = window.innerHeight
let x_pos, y_pos, x_posB, y_posB, speedX, speedY



function responsibility(){
    gameVH = window.innerHeight/100 * 87
    vh = window.innerHeight
    obj.style.height = vh/5 + "px"
    obj.style.width = vh/15 + "px"
    obj.style.display = "block"
  }
  setInterval(responsibility,0)


  initializeGame()


  function samR() {
    if (x_pos >= window.innerWidth - 80) {
      x_pos = window.innerWidth - 85;
      speedX *= -1;
    } else if (x_pos < 10) {
      speedX *= -1;
    }
    if (y_pos >= (gameVH - vh/5)-5) {
      y_pos = (gameVH - vh/5) - 10;
      speedY *= -1;
    } else if (y_pos < 10) {
      speedY *= -1;
    }
    x_pos += speedX;
    y_pos += speedY;
    obj.style.position = "absolute";
    obj.style.left = x_pos + "px";
    obj.style.top = y_pos + "px";
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // změny speedu
  function samuelY() {
    speedY = random(2, 3) * random(-3, 3);
  }
  
  
  function samuelX() {
    speedX = random(2, 3) * random(-3, 3);
  }

  function initializeGame() {
    x_pos = random(10, window.innerWidth - 80);
    y_pos = random(10, window.innerHeight - (window.innerHeight / 3));
    x_posB = 0;
    y_posB = 0;
    speedX = random(5, 10);
    speedY = random(5, 10);
    points = 0;
    intervalS = setInterval(samuelY, 1000);
    intervalSa = setInterval(samuelX, 1000);
    intervalR = setInterval(samR, 20);
  
    timerId =  setInterval(countdown, 1000)
  
    obj.style.position = "absolute";
    obj.style.left = x_pos + "px";
    obj.style.top = y_pos + "px";
  
    obj.style.display = "block"
  }