//Variables de posiciones
var x = 200;
var y = 200;
var x2 = 200;
var y2 = 400;
var xP = 250;
var yP = 250;
//Varibales para tamaño
var tamP = 30;
//variables de movimiento
var movimiento1 = 0;
var movimiento2 = 0;
//color para ganador
var colorContadorAzul = 0;
var colorContadorVerde = 0;

function setup() {
  createCanvas(500, 500);
  
}

function draw() 
{
  background(0, 125 + colorContadorVerde, 125 + colorContadorAzul);
  fill(0);
  
  //insertar pepita
  fill (216, 45, 255)
  ellipse (xP, yP, tamP, tamP)

  
  //snake
  stroke(0);
  fill (0, 246, 255)
  ellipse(x, y, 50, 50);
  noStroke()
  
 //snake 2
  stroke(0);
  fill (110, 255, 0)
  ellipse(x2, y2, 50, 50);
  noStroke();

  //comer pepita
  if (dist(x, y, xP, yP) < 15) 
  {
    xP = random(0, width);
    yP = random(0, height);
    //Tamaño pepita
    tamP = random(10, 50);
    colorContadorAzul = colorContadorAzul + 10;
    colorContadorVerde = colorContadorVerde - 10;
  }
  if (dist(x2, y2, xP, yP) < 15) {
    xP = random(0, width);
    yP = random(0, height);
    //Tamaño pepita
    tamP = random(10, 50);
    colorContadorAzul = colorContadorAzul - 10;
    colorContadorVerde = colorContadorVerde + 10;

  }

  //Movimiento de las serpientes

  if (movimiento1 == 1) {
    x = x + 5;
    fill (0);
    rect (x+8, y-3, 8, 8);
    rect (x+8, y-13, 8, 8);
    fill (255, 0, 0);
    rect (x + 23, y, 15, 6);
  }
  if (movimiento1 == 2) {
    x = x - 5;
    fill (0);
    rect (x-15, y-3, 8, 8);
    rect (x-15, y-13, 8, 8);
    fill (255, 0, 0);
    rect (x - 35, y, 15, 6);
  }
  if (movimiento1 == 3) {
    y = y - 5;
    fill (0);
    rect (x-10, y-15, 8, 8);
    rect (x, y - 15, 8, 8);
    fill (255, 0, 0);
    rect (x, y - 35, 6, 15);
  }
  if (movimiento1 == 4) {
    y = y + 5;
    fill (0);
    rect (x-10, y+8, 8, 8);
    rect (x, y + 8, 8, 8);
    fill (255, 0, 0);
    rect (x, y + 20, 6, 15);
  }

  if (movimiento2 == 1) {
    x2 = x2 + 5;
    fill (0);
    rect (x2+8, y2-3, 8, 8);
    rect (x2+8, y2-13, 8, 8);
    fill (255, 0, 0);
    rect (x2 + 23, y2, 15, 6);
  }
  if (movimiento2 == 2) {
    x2 = x2 - 5;
    fill (0);
    rect (x2-15, y2-3, 8, 8);
    rect (x2-15, y2-13, 8, 8);
    fill (255, 0, 0);
    rect (x2 - 35, y2, 15, 6);
  }
  if (movimiento2 == 3) {
    y2 = y2 - 5;
    fill (0);
    rect (x2-10, y2-15, 8, 8);
    rect (x2, y2 - 15, 8, 8);
    fill (255, 0, 0);
    rect (x2, y2 - 35, 6, 15);
  }
  if (movimiento2 == 4) {
    y2 = y2 + 5;
    fill (0);
    rect (x2-10, y2+8, 8, 8);
    rect (x2, y2 + 8, 8, 8);
    fill (255, 0, 0);
    rect (x2, y2 + 20, 6, 15);
  }
  //Estado neutro
  if (movimiento1 == 0) {
    fill (0);
    rect (x-10, y-15, 8, 8);
    rect (x, y - 15, 8, 8);
  }
  
  if (movimiento2 == 0) {
    fill (0);
    rect (x2-10, y2-15, 8, 8);
    rect (x2, y2 - 15, 8, 8);
  }

  //vueltas snake

  if (x > 500) {
    x = -50;
  }
  if (x2 > 500) {
    x2 = -50;

  }
  if (y > 500) {
    y = -50;
  }

  if (y2 > 500) {
    y2 = -50;
  }

  if (x < -50) {

    x = 500;
  }

  if (x2 < -50) {
    x2 = 500;
  }

  if (y < -50) {

    y = 500;
  }

  if (y2 < -50) {
    y2 = 500;
  }

}

// jugabilidad teclas snake 1
 function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    movimiento1 = 1;
  }
  if (keyCode === LEFT_ARROW) {
    movimiento1 = 2;
  }
  if (keyCode === UP_ARROW) {
    movimiento1 = 3;
  }
  if (keyCode === DOWN_ARROW) {

    movimiento1 = 4;
  }
}
   

// jugabilidad  teclas snake 2

function keyTyped() {
  if (key === 'd') {
    movimiento2 = 1;
  } 
  if (key === 'a') {
    movimiento2 = 2;
  } 
  if (key === 'w') {
    movimiento2 = 3;
  } 
  if (key === 's') {
    movimiento2 = 4;
  }
}
