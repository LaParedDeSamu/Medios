//Posición de estrellas
var posXEstrellas = []; //Arreglo posiciones en X
var posYEstrellas = []; //Arreglo posiciones en Y
//Cantidad de estrellas
var cantEstrellas = 80; //Cantidad de objetos a crear
//Color de los planetas RGB
var colorPlanR = []; //R
var colorPlanG = []; //G
var colorPlanB = []; //B
//Posicion de planetas
var posXPlan = [];
var posYPlan = [];
//Cantidad de planetas igual a 3
var cantPlan = 5;
//Cantidad de astronautas
var cantAstro = 5;
//Posicion de astronautas
var posXAstro = [];
var posYAstro = [];
//Cantidad de Aliens
var cantAliens = 5;
//Posicion de los Aliens
var posXAliens = [];
var posYAliens = [];
//Posición del cohete
var posXCohete = [];
var posYCohete = [];
//Cantidad de cohetes
var cantCohetes = 3;

function setup() {
  //se crea el canvas
  createCanvas(800, 800);

  //Este for se encarga de dar la posición inicial de las estrellas
  for (var i = 0; i < cantEstrellas; i = i + 1) {
    posXEstrellas[i] = random(width); //el valor está entre 0 y el width
    posYEstrellas[i] = random(height); //el valor está entre 0 y el height
  }

  //Este for se encarga de dar la posición inicial de los planetas junto a su color
  for (var z = 0; z < cantPlan; z = z + 1) {
    posXPlan[z] = random(100, width - 100); //el valor está entre 0 y el width
    posYPlan[z] = random(200, height); //el valor está entre 200 y el height
    colorPlanR[z] = random(0, 255); //el valor de 0 a 255 para el color
    colorPlanG[z] = random(0, 255); //el valor de 0 a 255 para el color
    colorPlanB[z] = random(0, 150); //el valor de 0 a 150 para el color para evitar que se confunda con el fondo
  }

  //Este for se encarga de dar la posición inicial de los astronautas
  for (var c = 0; c < cantAstro; c = c + 1) {
    posXAstro[c] = random(width); //el valor está entre 0 y el width
    posYAstro[c] = random(height); //el valor está entre 0 y el height
  }

  //Este for se encarga de dar la posición inicial de los aliens
  for (var v = 0; v < cantAliens; v = v + 1) {
    posXAliens[v] = random(width - 100); //el valor está entre 0 y el width
    posYAliens[v] = random(height - 100); //el valor está entre 0 y el height
  }
  
  //Este for se encarga de dar la posición inicial de loa cohetes
  for (var x = 0; x < cantCohetes; x = x + 1) {
    posXCohete[x] = random(width); //el valor está entre 0 y el width
    posYCohete[x] = random(height, height + 300); //el valor está entre la altura y 300 pixeles más
  }
}

function draw() {
  //El color del fondo
  background(0, 0, 250);

  //Este for se encarga de mover las estrellas y dibujarlas
  for (var i = 0; i < cantEstrellas; i = i + 1) {
    //estrella color y parpadeo aleatorio
    if (random(-1, 300) > 0) {
      stroke(255, 255, 255, 200);
    } else {
      stroke(0, 0, 250, 200);
    }
    //creación de la estrella
    strokeWeight(6.6);
    line(30 + posXEstrellas[i], 20 + posYEstrellas[i], 40 + posXEstrellas[i], 40 + posYEstrellas[i]);
    line(40 + posXEstrellas[i], 40 + posYEstrellas[i], 20 + posXEstrellas[i], 25 + posYEstrellas[i]);
    line(20 + posXEstrellas[i], 25 + posYEstrellas[i], 40 + posXEstrellas[i], 25 + posYEstrellas[i]);
    line(40 + posXEstrellas[i], 25 + posYEstrellas[i], 20 + posXEstrellas[i], 40 + posYEstrellas[i]);
    line(20 + posXEstrellas[i], 40 + posYEstrellas[i], 30 + posXEstrellas[i], 20 + posYEstrellas[i]);

    //Movimiento de la estrella
    posXEstrellas[i] = posXEstrellas[i] + random(-1, 1);
    posYEstrellas[i] = posYEstrellas[i] + random(-1, 1);
  }
  //Este for se encarga de mover y dibujar a los aliens
  for (var v = 0; v < cantAliens; v = v + 1) {

    //creación del Alien
    //Cabeza alien
    stroke(0);
    strokeWeight(2);
    fill(14, 204, 45); // Color verde
    ellipse(30 + posXAliens[v], 30 + posYAliens[v], 40, 40); // Cabeza
    fill(0);
    ellipse(25 + posXAliens[v], 25 + posYAliens[v], 5, 10); // Ojos
    ellipse(35 + posXAliens[v], 25 + posYAliens[v], 5, 10); // Ojos
    ellipse(30 + posXAliens[v], 40 + posYAliens[v], 15, 10); // Boca
    line(18 + posXAliens[v], 20 + posYAliens[v], 28 + posXAliens[v], 15 + posYAliens[v]); // Cejas
    line(33 + posXAliens[v], 15 + posYAliens[v], 43 + posXAliens[v], 20 + posYAliens[v]); // Cejas
    line(30 + posXAliens[v], 10 + posYAliens[v], 30 + posXAliens[v], 0 + posYAliens[v]); // Antena
    fill(255, 0, 0); // Color rojo
    ellipse(30 + posXAliens[v], 0 + posYAliens[v], 5, 5); // Antena punto


    //Movimiento del alien que cada quien evade a un astronauta
    if (posXAstro[v] > posXAliens[v]) {
      posXAliens[v] = posXAliens[v] + random(-1, 0);
    }
    if (posXAstro[v] < posXAliens[v]) {
      posXAliens[v] = posXAliens[v] + random(0, 1);
    }
    if (posYAstro[v] < posYAliens[v]) {
      posYAliens[v] = posYAliens[v] + random(0, 1);
    }
    if (posYAstro[v] > posYAliens[v]) {
      posYAliens[v] = posYAliens[v] + random(-1, 0);
    }

    //Si el alien deja la pantalla aparece detras de un planeta
    if (posXAliens[v] < -100) {
      posXAliens[v] = posXPlan[v];
      posYAliens[v] = posYPlan[v];
    }
    if (posXAliens[v] > 900) {
      posXAliens[v] = posXPlan[v];
      posYAliens[v] = posYPlan[v];
    }
    if (posYAliens[v] < -100) {
      posXAliens[v] = posXPlan[v];
      posYAliens[v] = posYPlan[v];
    }
    if (posYAliens[v] > 900) {
      posXAliens[v] = posXPlan[v];
      posYAliens[v] = posYPlan[v];
    }
  }

  //Este for se encarga de mover los planetas y dibujarlos
  for (var z = 0; z < cantPlan; z = z + 1) {
    //Planeta color
    fill(colorPlanR[z], colorPlanG[z], colorPlanB[z]);
    //creación de planetas
    noStroke();
    //planeta
    ellipse(50 + posXPlan[z], 50 + posYPlan[z], 100, 100);
    //crateres y color
    stroke(0);
    strokeWeight(1);
    fill(colorPlanR[z] + 50, colorPlanG[z] + 50, colorPlanB[z] + 50); //color
    ellipse(30 + posXPlan[z], 30 + posYPlan[z], 25, 25); //cada crater
    ellipse(75 + posXPlan[z], 40 + posYPlan[z], 30, 30); //cada crater
    ellipse(50 + posXPlan[z], 80 + posYPlan[z], 20, 20); //cada crater

    //Movimiento del planeta
    posXPlan[z] = posXPlan[z] + random(-3, 1);
    //Si se mueve de la mitad a la izq tienda a ir hacia abajo, de lo contrario arriba
    if (posXPlan[z] < width / 2) {
      posYPlan[z] = posYPlan[z] + random(-1, 2);
    } else {
      posYPlan[z] = posYPlan[z] + random(-2, 1);
    }
    //Si se llega al final del recorrido por el lado izq se devuelve al lado derecho aleatoriamente
    if (posXPlan[z] < -100) {
      posXPlan[z] = random(900, 1100); //el valor está entre 0 y el width
      posYPlan[z] = random(200, height); //el valor está entre 200 y el height
    }

  }

  //Este for se encarga de mover los astronautas y dibujarlas
  for (var c = 0; c < cantAstro; c = c + 1) {

    //creación del astronauta
    stroke(0);
    strokeWeight(2);
    fill(255);
    ellipse(30 + posXAstro[c], 30 + posYAstro[c], 40, 40); // Helmet
    fill(255, 206, 225);
    ellipse(30 + posXAstro[c], 30 + posYAstro[c], 30, 30); //Cara
    strokeWeight(2);
    line(25 + posXAstro[c], 25 + posYAstro[c], 25 + posXAstro[c], 30 + posYAstro[c]); // Ojos
    line(35 + posXAstro[c], 25 + posYAstro[c], 35 + posXAstro[c], 30 + posYAstro[c]); // Ojos
    line(20 + posXAstro[c], 35 + posYAstro[c], 40 + posXAstro[c], 35 + posYAstro[c]); //Boca


    //Movimiento del astronauta que cada quien persigue a un planeta a una velocidad menor del mismo
    if (posXPlan[c] < posXAstro[c]) {
      posXAstro[c] = posXAstro[c] + random(-0.5, 0);
    }
    if (posXPlan[c] > posXAstro[c]) {
      posXAstro[c] = posXAstro[c] + random(0, 0.5);
    }
    if (posYPlan[c] > posYAstro[c]) {
      posYAstro[c] = posYAstro[c] + random(0, 0.5);
    }
    if (posYPlan[c] < posYAstro[c]) {
      posYAstro[c] = posYAstro[c] + random(-0.5, 0);
    }
  }

  //Este for se encarga de mover los cohetes y dibujarlos
  for (var x = 0; x < cantCohetes; x = x + 1) {

  //parte superior del cohete
  fill(255, 0, 0);
  triangle (30 + posXCohete[x], 10 + posYCohete[x], 10 + posXCohete[x], 40 + posYCohete[x], 50 + posXCohete[x], 40 + posYCohete[x]);
  //Parte medio del cohete
  fill (255, 224, 193);
  rect (10 + posXCohete[x], 40 + posYCohete[x], 40, 60);
  //Ventana del cohete
  fill (91, 255, 246);
  ellipse (30 + posXCohete[x], 60 + posYCohete[x], 25, 25);
  //Reflejo del cristal
  stroke(255);
  line(30 + posXCohete[x], 55 + posYCohete[x], 35 + posXCohete[x], 60 + posYCohete[x]);
  line(31 + posXCohete[x], 51 + posYCohete[x], 38 + posXCohete[x], 58 + posYCohete[x]);
  //Parte de abajo
  fill (255, 0, 0);
  stroke(0);
  triangle (10 + posXCohete[x], 70 + posYCohete[x], -10 + posXCohete[x], 100 + posYCohete[x], 10 + posXCohete[x], 100 + posYCohete[x]);
  triangle (50 + posXCohete[x], 70 + posYCohete[x], 70 + posXCohete[x], 100 + posYCohete[x], 50 + posXCohete[x], 100 + posYCohete[x]);


    //Movimiento del Cohete hacia arriba y temblando
      posXCohete[x] = posXCohete[x] + random(-0.5, 0.5);
      posYCohete[x] = posYCohete[x] + random(-5, 0);
    
    if (posYCohete[x] < -100)
    {
    posXCohete[x] = random(width); //el valor está entre 0 y el width
    posYCohete[x] = random(height, height + 300); //el valor está entre la altura y 300 pixeles más
    }
  }

}