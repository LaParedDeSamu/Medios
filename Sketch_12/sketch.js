var tablaCerveza;
var espuma;

var numFilas;
var numColumnas;

function preload() {
  tablaCerveza = loadTable('assets/beer.csv', 'csv', 'header');
  espuma = loadImage ("beer.png");
}

function setup() {
  createCanvas(1000, 1000);
  background(220);

  numFilas = tablaCerveza.getRowCount();
  numColumnas = tablaCerveza.getColumnCount();

  for (var i = 0; i < numFilas; i = i + 1) {
    var agno = tablaCerveza.getString(i, 2);
    var ton = tablaCerveza.getNum(i, 4);
    
    var alto = map(ton, 400000, 2400000, 0, height);
    var ancho = width / numFilas;
    var posX = (numFilas - 1 - i) * (ancho);
    var posY = height - alto;
    

    stroke(0);
    fill (247, 197, 0)
    strokeWeight(2);
    rect(posX, posY, ancho - 1, alto - 1);
    fill(216, 172, 0)
    noStroke();
    rect (posX + ancho - 5, posY, 5, alto-1);
    noFill();
    stroke(0);
    rect(posX, posY, ancho - 1, alto - 1);
    noStroke();
    image (espuma, posX , posY-28, ancho , 50);
    
    fill (0);
    push();
    translate(posX+(ancho-3), height-2);
    rotate(-HALF_PI);
    textSize(16);
    text(agno, 0, 0);
    pop();
    
    
    push();
    translate(posX+(ancho-3) -10, posY-40);
    rotate(-HALF_PI);
    textSize(16);
    text(ton, 0, 0);
    pop();
  }
  
  textSize(36);
  text ("Toneladas de cerveza a través" , 50, 150);
  text ("de los años en Colombia 🥴", 65, 200);
  
}

function draw() {
  //background(220);
}