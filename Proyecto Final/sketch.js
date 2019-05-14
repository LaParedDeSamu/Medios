/*Estado 0 = Introducción
Estado 1 = Animación
Estado 3 = Información
*/

var INTRODUCCION = 0;
var ANIMACION = 1;
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

var estado = INTRODUCCION; //El momento del programa

var x; //variable de x
var y; //Variable de y

var seMueve = false; //Saber si el dispositivo se mueve o no

var tiempoAnterior; //Tiempo que se usa anteriormente en el cronometro
var M = 5500; //tiempo animación (milli segundos)
var M2 = 230; //Tiempo espuma (milli segundos)

var ton = 0; //Variable de cervezas que aumenta mientras se agita

//Función que carga todo lo necesario
function preload() {
  font = loadFont('PIXELADE.otf') //Carga la fuente de 8 bits
  beer1 = loadImage('1.png'); //Carga la imagen de la lata
  beer2 = loadImage('3.png'); //Carga la imagen de la lata con espuma
  beer3 = loadImage('4.png'); //Carga la imagen de la lata con espuma 2
  beer4 = loadImage('5.png'); //Carga la imagen de la lata con espuma 3
  sonidoCan = loadSound('openCan.mp3'); //Sonido para la animación
  nacional = loadImage('Nacional.png'); //Cervezas nacionales
  noNacional = loadImage('noNacional.png'); //Cerveza no nacional
  personaje = loadImage('PersonajeNacional.png'); //Personaje con recomendación
}

//Setup del programa
function setup() {
  createCanvas(windowWidth, windowHeight); //Tamaño de la pantalla
  //createCanvas (768, 1024) //Tamaño del iPad en caso de que no funcione
  x = width / 2 + 20; //Da valor en x
  y = (height / 2) - 30; //Da valor en Y
  tiempoAnterior = millis(); //Pone el tiempo
  textFont(font); //Pone la fuente
  textAlign(CENTER); //El texto lo centra
  imageMode(CENTER); //Las imagenes las centra
}

//Dibuja lo que se ve
function draw() {
  //ESTADO 0 = introducción al tema
  if (estado == INTRODUCCION) {
    background(100, 200, 200); //Color del fondo
    textSize(60); //Tamaño de la letra
    text("Agite la cerveza", width / 2, (height / 5)); //Texto informativo sobre que hacer
    //If para saber si se esta moviendo o no el celular
    if (seMueve == false) { //Si no se mueve
      can1 = new beerCan(width / 2, height / 2); //Crea una lata
      can1.dibujarse(); //Se dibuja esa lata
    }
    if (seMueve == true) { //Si se mueve
      textSize(40); //Cambia el tamaño del texto
      can1 = new beerCan(width / 2, height / 2 + random(-5, 5)); //Crea una lata con un espacio random en Y
      can1.dibujarse(); //Dibuja esa lata
      text(ton, width / 2, (height / 5) * 4); //Escribe el valor de cervezas a través de cuanto tiempo se agite
      text("Cervezas", width / 2, (height / 5) * 4.2); //Descripción del valor
    }

    //tiempo restante en segundos impreso en la pantalla
    textSize(40); //Tamaño del texto se cambia
    text((M - floor((millis() - tiempoAnterior))) / 1000, width / 2, (height / 5) * 1.4); //Crea un texto con el cronometro en 5 segundos
    //Si se acaba el tiempo cambia al estado animación a través de un IF
    if (millis() - tiempoAnterior > M) {
      estado = ANIMACION;
    }
    //ESTADO 1 = Animación
  } else if (estado == ANIMACION) {
    background(100, 200, 200); //El color del fondo
    textSize(60); //Se cambia el tamaño del texto
    text("Detengase", width / 2, height / 6); //Texto que indica que hacer
    can1.dibujarse(); //Se dibuja la lata numero 1
    can1.espuma(); //Se anima la espuma de esta lata
    textSize(40); //Se cambia el tamaño del texto
    text(ton, width / 2, (height / 5) * 4); //Se escribe el valor que se obtuvo en la introducción
    text("Cervezas", width / 2, (height / 5) * 4.2); //Da la descripción de ese valor
    //ESTADO 2 = Información después de que cambia de fase
  } else if (estado == INFORMACION) {
    background(100, 200, 200); //El color del fondo
    noStroke(); //Quita el stroke
    fill(37, 124, 123) //Cambia el color a un azul más oscuro que el del fondo
    rectMode(CORNER); //Cambia el modo de los RECT
    rect(0, height / 2, width, height / 2); //Crea un rect para dividir la información entre arriba y abajo
    fill(255); //Cambia el color a blanco
    rect(0, (height / 15) * 13, width, (height)); //Crea un rect blanco para poner información adicional abajo
    noStroke(); //Quita el stroke
    textSize(60); //Cambia el tamaño del texto
    image(personaje, width / 2.3, height / 3, 823 / 1.8, 576 / 1.8); //Pone imagen de un personaje que brinda una recomendación
    rectMode(CENTER) //Cambia la forma de hacer RECT a center
    noStroke() //Quita el stroke
    rect(width / 2, height / 2, 300, 80) //Crea un rect blanco en el medio para poner el titulo
    stroke(0); //Pone un Stroke negro
    fill(0); //Colorea color negro
    text("Información", width / 2, height / 2); //Escribe el titulo en el medio
    textSize(30); //cambia el tamaño del texto
    text(ton + " Cervezas en Colombia", width / 2, (height / 1.9)); //Escribe cuantas cervezas se obtuvieron anteriormente
    textSize(30); //Cambia el tamaño del texto, se repitio por un error
    textAlign(LEFT) //Cambia la forma de escribir texto
    text(floor(ton * 0.97) + " cervezas nacionales", width / 15, (height / 15)); //Da los datos de las cervezas nacionales
    text("97% de las cervezas", width / 15, (height / 15) * 1.5); //porcentaje nacional
    text(floor(((ton * 0.97) * 90) / 0.092) + " L", width / 15, (height / 15) * 2); // Litros nacional
    var litrosN = (floor((ton * 0.97) * 90) / 0.092); //Guardar valores de litros nacional en variable
    text(6450 + " COP/cc", width / 15, (height / 15) * 2.5); //Valor por cerveza
    text(floor(litrosN * 6450) + " COP", width / 15, (height / 15) * 3); //Valor de esas cervezas
    textAlign(CENTER); //Cambia la forma de escribir textos a CENTER nuevamente
    vaso1 = new beerGlass(); //Crea un vaso
    vaso2 = new beerGlass(); //Crea otro vaso
    vaso1.dibujarseNacional((width / 5) * 3.8, height / 7); //Dibuja el primer vaso
    vaso2.dibujarseNoNacional((width / 5), (height / 15) * 9.8); //Dibuja el segundo vaso
    textSize(30); //Cambia el tamaño del texto
    textAlign(RIGHT) //Cambia el modo de escribir texto a RIGHT
    stroke(0); //Pone el color a negro del Stroke
    text(floor(ton * 0.03) + " cervezas no nacionales", (width / 15) * 14, (height / 15) * 9); //Da los datos de las cervezas no nacionales
    text("3% de las cervezas", (width / 15) * 14, (height / 15) * 9.5); //Porcentaje extranjero
    text(floor(((ton * 0.03) * 90) / 0.092) + " L", (width / 15) * 14, (height / 15) * 10); // Litros no nacional
    var litrosNN = floor(((ton * 0.03) * 90) / 0.092) //Guardar valores de litros no nacional en variable
    text(9850 + " COP/cc", (width / 15) * 14, (height / 15) * 10.5) // Valor por cerveza
    text(litrosNN * 9850 + " COP", (width / 15) * 14, (height / 15) * 11) // Valor de esas cervezas
    textAlign(CENTER) //Cambia la forma de escribir a CENTER
    textSize(28); //Cambia el tamaño del texto
    //A continuación se escribe un parrafo con información sobre bibliografía e información adicional
    text("Todos los datos son aproximados. Estos son hipoteticos basados en el valor, la", width / 2, (height / 15) * 13.5)
    text("cantidad, y el porcentaje de cerveza en Colombia en el año 2016 según la FAOSTAT,", width / 2, (height / 15) * 14);
    text("el United Nations Statistics Division y el catalogo de Bavaria.", width / 2, (height / 15) * 14.5);
  }
}

//Funcion para la lata con variable en x y y
function beerCan(posX, posY) {
  var x = posX; //Da el valor a la variable X
  var y = posY; //Da el valor a la variable Y

  //Función para dibujarla
  this.dibujarse = function() {
    image(beer1, posX, posY, 157, 185); //Pone la imagen de la cerveza
  }

  //Función para animar la espuma a través del tiempo en 5 estados
  this.espuma = function() {
    if (M2 == 230) {
      sonidoCan.play(1); //Reproduce el sonido en el primer estado
    }
    if (M2 >= 0) {
      M2 = M2 - 1; //Linea para restar el tiempo
    }
    if (M2 < 150) {
      image(beer2, posX, posY, 157, 185); //Dibuja la primera capa de espuma en el segundo estado
    }
    if (M2 < 100) {
      image(beer3, posX, posY, 157, 185); //Dibuja la segunda capa de espuma en el tercer estado
    }
    if (M2 < 50) {
      image(beer4, posX, posY, 157, 185); //Dibuja la tercera capa de espuma en el cuarto estado
    }
    if (M2 < 0) {
      estado = INFORMACION; //Cambia a la siguiente etapa en el quinto estado
    }
  }
}

//Función de los vasos de cerveza
function beerGlass() {

  //Función para dibujar el vaso Nacional que tiene valores en X y Y como parametros
  this.dibujarseNacional = function(posX, posY) {
    var x = posX; //Da valor a X
    var y = posY; //Da valor a Y
    image(nacional, x, y, 121 * 1.7, 128 * 1.7) //Pone la imagen de la cerveza nacional
  }

  //Función para dibujar el vaso No Nacional que tiene valores en X y Y como parametros
  this.dibujarseNoNacional = function(posX, posY) {
    var x = posX; //Da valor a X
    var y = posY; //Da valor a Y
    image(noNacional, x, y, 121 * 1.5, 128 * 1.5); //Pone la imagen de la cerveza no nacional
  }
}

//para desactivar el scroll 
function mouseDragged() {
  return false;
}

//cuando el dispositivo detecta movimiento llama a la funcion
function deviceShaken() {
  //Si esta en la primera etapa
  if (estado == INTRODUCCION) {
    seMueve = true; //Si se esta moviendo cambia la variable a true
    ton = ton + 1; //Aumenta el valor de cervezas por 1
    //Si no se encuentra en la primera etapa
  } else {
    seMueve = false; //Cambia el valor de movimiento a false
  }
}