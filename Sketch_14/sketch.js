/*Estado 0 = Introducción
Estado 1 = Animación
Estado 2 = Interacción
Estado 3 = Información

Al soltar hacer click (soltar el mouse) se pasa de la introducción a la animación,
La animación dura 900 milisegundos y pasa al siguiente estado
La interacción consiste en tocar el círculo con el mouse
Al hacer click (soltar el mouse) en el estado de información vuelve a la introducción 

*/

var INTRODUCCION = 0;
var ANIMACION = 1;
var INTERACCION = 2;
var INFORMACION = 3;

var font; //fuente
var beer1; //imagen
var beer2; //imagen
var beer3; //imagen
var beer4; //imagen
var sonidoCan; //Sonido
var nacional; //imagen
var noNacional; //imagen
var personaje; //Imagen
var personajeSonrie; // imagen
var texto; //image


var can1; //objeto
var vaso1; //objeto
var vaso2; //objeto

var estado = INTRODUCCION;

var x;
var y;

var seMueve = false; 

var tiempoAnterior;
var M = 5500; //tiempo animación (milli segundos)
var M2 = 230; //Tiempo espuma (milli segundos)

var ton = 0;


function preload() {
  font = loadFont('PIXELADE.otf')
  beer1 = loadImage('1.png');
  beer2 = loadImage('3.png');
  beer3 = loadImage('4.png');
  beer4 = loadImage('5.png');
  sonidoCan = loadSound ('openCan.mp3');
  nacional = loadImage('Nacional.png');
  noNacional = loadImage('noNacional.png');
  personaje = loadImage('Personaje1.png');
  personajeSonrie = loadImage ('personaje2.png');
  texto = loadImage ('Texto.png');
  
}
function setup() {
  createCanvas(600, 600);
  x = width / 2 + 20;
  y = (height / 2) - 30;
  tiempoAnterior = millis();
  textFont(font);

}

function draw() {
  //ESTADO 0 = introducción al tema
  if (estado == INTRODUCCION) {
    background(100, 200, 200);
    textSize(60);
    text("Agite la cerveza", width / 4.5, height / 6);
    if (seMueve == false){
    can1 = new beerCan (width/4, height/4);
    can1.dibujarse();
    }
    if(seMueve == true || mouseIsPressed){
    can1 = new beerCan (width/4, height/4 + random(-5,5));
    can1.dibujarse();
    ton = ton + 1;
      textSize (40);
      noStroke();
      rect (width/2.7, (height/5)*4.58, 150, -40)
      stroke(0);
    text (ton, width/2.5, (height/5)*4.5, 100);
      text ("Ton", width/2, (height/5)*4.5, 100);
    }
    
    //tiempo restante en segundos impreso en la pantalla
    textSize(50);
    text((M - floor((millis() - tiempoAnterior))) / 1000, width / 2.3, height / 3.3);

    if (millis() - tiempoAnterior > M) {
      estado = ANIMACION;
    }
    
    
    //ESTADO 1 = Animación durante M cantidad de tiempo
  } else if (estado == ANIMACION) {
    background(100, 200, 200);
    textSize(60);
    text("Detengase", width / 3, height / 6);
    can1.dibujarse();
    can1.espuma();
    textSize(40);
    noStroke();
    rect (width/2.7, (height/5)*4.58, 150, -40)
    stroke(0);
    text (ton, width/2.5, (height/5)*4.5, 100);
      text ("Ton", width/2, (height/5)*4.5, 100);
    //ESTADO 2 = Información
  } else if (estado == INFORMACION) {
    background(100, 200, 200);
    textSize(60)
    text("Información", width / 3.5, height / 6.5);
    textSize(30);
    text(ton + " ton", width / 2.3, height / 5);
    vaso1 = new beerGlass();
    vaso2 = new beerGlass();
    vaso1.dibujarseNacional(width/5, height/4);
    vaso2.dibujarseNoNacional((width/5)*3, height/4);
    textSize(25);
    text ("97% = " + ton*0.97 + " ton", width/5, height/2); //porcentaje nacional
    text ("3% = " + ton*0.03 + " ton", (width/5)*3.1, height/2); //Porcentaje extranjero
    text (((ton*0.97)*90)/0.092 + " L", width/5, height/1.9); // Litros nacional
    text (((ton*0.03)*90)/0.092 + " L", (width/5)*3.1, height/1.9); // Litros nacional
    var litrosN = ((ton*0.97)*90)/0.092; //Guardar valores de litros nacional en variable
    var litrosNN = ((ton*0.03)*90)/0.092 //Guardar valores de litros no nacional en variable
    text (6450 + " COP/cc", width/5, height/1.8); //Valor de esas toneladas
    text (9850 + " COP/cc", (width/5)*3.1, height/1.8) // Valor de esas toneladas
    text (litrosN * 6450 + " COP", width/5, height/1.7); //Valor de esas toneladas
    text (litrosNN * 9850 + " COP",(width/5)*3.1, height/1.7) // Valor de esas toneladas
    
    //mouse
    image (personaje, mouseX -410/8, mouseY - 500/8, 410/4, 500/4);
    if (mouseX < width/3)
    {
      image (personajeSonrie, mouseX -410/8, mouseY - 500/8, 410/4, 500/4);
      image (texto, mouseX - 540/4, mouseY - 540/4, 540/5, 540/5);
      textSize(16);
      text ("Beneficios: ", mouseX -115, mouseY - 115);
    }
    if (mouseX > width/3 * 2)
    {
      image (personajeSonrie, mouseX -410/8, mouseY - 500/8, 410/4, 500/4);
      image (texto, mouseX - 540/4, mouseY - 540/4, 540/5, 540/5);
      textSize(16);
      text ("Beneficios: ", mouseX -115, mouseY - 115);
    }
    
    

  }
}

function beerCan (posX, posY){
  var x = posX;
  var y = posY;
  
  this.dibujarse = function(){
    image (beer1,posX, posY, 157*2, 185*2);
  }
  
  this.espuma =function(){
    if (M2 == 230){
    sonidoCan.play(1);
    }
    if (M2 >= 0){
    M2 = M2 - 1;
    }
    if (M2 < 150){
    image (beer2, posX, posY, 157*2, 185*2);
    }
    if (M2 < 100){
    image (beer3, posX, posY, 157*2, 185*2);
    }
    if (M2 < 50){
    image (beer4, posX, posY, 157*2, 185*2);
    }
    if (M2 < 0){
      estado = INFORMACION;
    }
  }
}

function beerGlass(){
  this.dibujarseNacional = function(posX, posY){
    var x = posX;
    var y = posY;
    image (nacional, x, y)
  }
  this.dibujarseNoNacional = function (posX, posY){
    var x = posX;
    var y = posY;
    image (noNacional, x, y);
  }
}
function mouseReleased() {
  //Si se suelta el mouse en la introducción pasa a la animación
  //Guardar un nuevo valor de millis en la variable tiempoAnterior
  if (estado == INTRODUCCION) {
    estado = ANIMACION;
    tiempoAnterior = millis();

  } else if (estado == INFORMACION) {
    estado = INTRODUCCION;
    M = 5500;
    M2 = 230;

  }

}

//para desactivar el scroll 
function mouseDragged() {
  return false;
}

//cuando el dispositivo detecta movimiento llama a la funcion acelerar de la bola
function deviceMoved() {
  if (estado ==INTRODUCCION){
    seMueve = true;
  }
  else{
    seMueve = false;
  }
}