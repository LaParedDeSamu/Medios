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

var font;
var beer1; //imagen
var beer2; //imagen
var beer3; //imagen
var beer4; //imagen

var personaje1;
var personaje2;

var sonido; //sonido

var can1; //objeto

var ton = 0;

var estado = INTRODUCCION;

var x;
var y;

var seMueve = false;

var tiempoAnterior;
var M = 5500; //tiempo animación (milli segundos)
var M2 = 220; //Tiempo espuma (milli segundos)

function preload() {
  font = loadFont('PIXELADE.otf')
  beer1 = loadImage('1.png');
  beer2 = loadImage('3.png');
  beer3 = loadImage('4.png');
  beer4 = loadImage('5.png');
  sonido = loadSound('Can.mp3')
  personaje1 = loadImage('Personaje1.png');
  personaje2 = loadImage('personaje2.png');
  texto = loadImage('Texto.png')
  nacional = loadImage('Nacional.png');
  noNacional = loadImage('noNacional.png');



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
    if (seMueve == false) {
      can1 = new beerCan(width / 4, height / 4);
      can1.dibujarse();
    }
    if (seMueve == true || mouseIsPressed) {
      can1 = new beerCan(width / 4, height / 4 + random(-5, 5));
      can1.dibujarse();
      ton = ton + 1
    }

    //tiempo restante en segundos impreso en la pantalla
    textSize(50);
    text((M - floor((millis() - tiempoAnterior))) / 1000, width / 2.3, height / 3.3);

    if (millis() - tiempoAnterior > M) {
      estado = ANIMACION;
    }
    textSize(40);
    noStroke();
    rect(width / 2.8, 510, 120, -40);
    text(ton + "Ton", width / 2.5, 500);


    //ESTADO 1 = Animación durante M cantidad de tiempo
  } else if (estado == ANIMACION) {
    background(100, 200, 200);
    textSize(60);
    text("Detengase", width / 3, height / 6);
    can1.dibujarse();
    can1.espuma();
    noStroke();
    textSize(40);
    rect(width / 2.8, 510, 120, -40);
    text(ton + "Ton", width / 2.5, 500);

    //ESTADO 2 = Interacción con el usuario
  } else if (estado == INTERACCION) {
    background(220);
    text("ESTADO 2: INTERACCIÓN", width / 2, height / 2);
    ellipse(x, y, 20, 20);
    //cuando el mouse está sobre el círculo cambia de estado
    if (dist(mouseX, mouseY, x, y) < 10) {
      estado = INFORMACION;
    }
    //ESTADO 3 = Información
  } else if (estado == INFORMACION) {
    background(100, 200, 200);
        textSize(16);
    text ("97% en Colombia", 50, 330);
    text (ton * 0.97 + " Ton", 50, 340);
    textSize(16);
    text ("3% en Colombia", 430, 330);
    text (ton * 0.03 + " Ton", 430, 340);
    image(nacional, 50, 180);
    image(noNacional, 420, 180);
    noStroke();
    textSize(40);
    rect(width / 2.8, 160, 120, -40);
    text(ton + "Ton", width / 2.5, 150);
    textSize(60);
    text("Información", width / 3, height / 6);
    image(personaje1, mouseX - 500 / 8, mouseY - 450 / 8, 500 / 4, 450 / 8);
    if (mouseX < width / 3) {
      image(personaje2, mouseX - 500 / 8, mouseY - 450 / 8, 500 / 4, 450 / 8);
      if (mouseY > height * 4 / 5) {
        image(texto, mouseX - 500 / 4, mouseY - 500 / 4, 500 / 5, 500 / 5);
        textSize(16);
        text("precios", mouseX - 110, mouseY - 100);
      }
      if (mouseY < height * 4 / 5) {
        image(personaje2, mouseX - 500 / 8, mouseY - 450 / 8, 500 / 4, 450 / 8);
        if (mouseY > height / 3 && mouseY > height / 1.7) {
          image(texto, mouseX - 500 / 4, mouseY - 500 / 4, 500 / 5, 500 / 5);
          textSize(16);
          text("beneficios", mouseX - 110, mouseY - 100);
        }
      }
    }
    if (mouseX > (width / 3) * 2) {
      image(personaje2, mouseX - 500 / 8, mouseY - 450 / 8, 500 / 4, 450 / 8);
      image(texto, mouseX - 500 / 4, mouseY - 500 / 4, 500 / 5, 500 / 5);
      textSize(16)
      text("Beneficios", mouseX - 110, mouseY - 100);
      if (mouseY > height * 4 / 5) {
        image(texto, mouseX - 500 / 4, mouseY - 500 / 4, 500 / 5, 500 / 5);
        textSize(16);
        text("precios", mouseX - 110, mouseY - 100);
      }
      if (mouseY < height * 4 / 5) {
        image(personaje2, mouseX - 500 / 8, mouseY - 450 / 8, 500 / 4, 450 / 8);
        if (mouseY > height / 3 && mouseY > height / 1.7) {
          image(texto, mouseX - 500 / 4, mouseY - 500 / 4, 500 / 5, 500 / 5);
          textSize(16);
          text("beneficios", mouseX - 110, mouseY - 100);
        }
      }
    }
  }
  
  

}

function beerCan(posX, posY) {
  var x = posX;
  var y = posY;

  this.dibujarse = function() {
    image(beer1, posX, posY, 157 * 2, 185 * 2);
  }

  this.espuma = function() {
    if (M2 > 0) {
      M2 = M2 - 1;
    }
    if (M2 == 230) {
      sonido.play(1);
    }
    if (M2 < 150) {
      image(beer2, posX, posY, 157 * 2, 185 * 2);
    }
    if (M2 < 100) {
      image(beer3, posX, posY, 157 * 2, 185 * 2);
    }
    if (M2 < 50) {
      image(beer4, posX, posY, 157 * 2, 185 * 2);
    }
    if (M2 == 0) {
      estado = INFORMACION
    }

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

  }

}

//para desactivar el scroll 
function mouseDragged() {
  return false;
}

//cuando el dispositivo detecta movimiento llama a la funcion acelerar de la bola
function deviceMoved() {
  if (estado == INTRODUCCION) {
    seMueve = true;
  } else {
    seMueve = false;
  }
}