var losInternautas = []; // Variable de los aliens
var losNasa = []; // Variable de los Astronautas
var losMilkyWay = []; // Variable de los planetas
var losApolo = []; // Variable de los cohetes
var losEstelares = []; // Variable de las estrellas
var numInternautas = 10; // Numero de aliens
var numAstronautas = 1; // Numero de astronautas
var numPlanetas = 6; // Numero de planetas
var numCohetes = 3; // Numero de cohetes
var numBanderas = 6; // Numero de banderas
var numEstrellas = 60; // Numero de estrellas
var contarZ = 0; // Contador de aliens
var conquistado = false; // Planeta conquistado o no

//Setup de todo
function setup() {
  createCanvas(1000, 1000); // Tamaño del canvas
  //Setup de los aliens
  for (var i = 0; i < numInternautas; i = i + 1) {
    losInternautas[i] = new alien(random(height), random(height));
  }
  //Setup de los astronautas
  for (var z = 0; z < numAstronautas; z = z + 1) {
    losNasa[z] = new astronautas(random(height), random(height));
  }
  //Setup de los planetas
  for (var c = 0; c < numPlanetas; c = c + 1) {
    losMilkyWay[c] = new planetas(random(height), random(height), random(255), random(255), random(255));
  }
  //Setup de los cohetes
  for (var v = 0; v < numCohetes; v = v + 1) {
    losApolo[v] = new cohetes(random(height, height + 100), random(height, height + 100));
  }
  //Setup de las estrellas
    for (var p = 0; p < numEstrellas; p = p + 1) {
    losEstelares[p] = new estrellas(random(height), random(height));
  }
}

function draw() {
background(0, 0, 250); //El fondo azul
  //Dibuja de estrellas y movimientos en el for
    for (var p = 0; p < numEstrellas; p = p + 1) {
        if (random(-1, 300) > 0){
      losEstelares[p].dibujarse();
        }
    losEstelares[p].moverse();
  }
  //Dibuja los astronautas
  for (var z = 0; z < numAstronautas; z = z + 1) {
    losNasa[z].dibujarse();
    if (contarZ >= numInternautas) {
      contarZ = 0; //Contador para cuando se acaban los aliens
    }
    //Movimiento de los astronautas persiguiendo aliens
    for (var v = 0; v < numInternautas; v = v + 1) {
      if (losInternautas[contarZ].miX < losNasa[z].miX) {
        losNasa[z].moverse(1);
      }
      if (losInternautas[contarZ].miX > losNasa[z].miX) {
        losNasa[z].moverse(2);
      }
      if (losInternautas[contarZ].miY < losNasa[z].miY) {
        losNasa[z].moverse(4);
      }
      if (losInternautas[contarZ].miY > losNasa[z].miY) {
        losNasa[z].moverse(3);
      }
      //Contador de los aliens
      if (dist(losNasa[z].miX + 30, losNasa[z].miY + 30, losInternautas[v].miX + 30, losInternautas[v].miY + 30) < 50 && contarZ == v) {
        if (contarZ < numInternautas) {
          contarZ = contarZ + 1;
        }
      }
    }

  }
  //Dibujo de los aliens
  for (var i = 0; i < numInternautas; i = i + 1) {
    losInternautas[i].dibujarse();

    for (var c = 0; c < numAstronautas; c = c + 1) {
      for (var d = 0; d < numPlanetas; d = d + 1) {
        //movimiento de los aliens y re aparición en planetas
        if (losInternautas[i].miX < losNasa[c].miX) {
          losInternautas[i].moverse(1, losMilkyWay[d].miX, losMilkyWay[d].miY);
        }
        if (losInternautas[i].miX > losNasa[c].miX) {
          losInternautas[i].moverse(2, losMilkyWay[d].miX, losMilkyWay[d].miY);
        }
        if (losInternautas[i].miY < losNasa[c].miY) {
          losInternautas[i].moverse(4, losMilkyWay[d].miX, losMilkyWay[d].miY);
        }
        if (losInternautas[i].miY > losNasa[c].miY) {
          losInternautas[i].moverse(3, losMilkyWay[d].miX, losMilkyWay[d].miY);
        }
        //Muerte de los aliens
        if (dist(losNasa[c].miX + 30, losNasa[c].miY + 30, losInternautas[i].miX + 30, losInternautas[i].miY + 30) < 50) {
          losInternautas[i].morirse();
        }
      }
    }
  }
  //Dibujo de los cohetes y movimiento
  for (var b = 0; b < numCohetes; b = b + 1) {
    losApolo[b].dibujarse();
    losApolo[b].moverse();
  }
  //Dibujo de los planetas y movimiento
  for (var x = 0; x < numPlanetas; x = x + 1) {
    losMilkyWay[x].dibujarse();
    losMilkyWay[x].moverse();
    //For que hace que se puedan conquistar
    for (var m = 0; m < numCohetes; m = m + 1) {
      if (dist(losMilkyWay[x].miX + 30, losMilkyWay[x].miY, losApolo[m].miX + 30, losApolo[m].miY) < 50) {
        conquistado = true;
        if (conquistado == true) {
          losMilkyWay[x].conquistarse();
        }
      }
    }
  }

}

//Creación de la función alien
function alien(x, y) {
  //caracteristicas
  this.miX = x; //movimiento en x
  this.miY = y; //movimiento en y
  this.dir = 0; //Dirección
  this.estaViva = true; //Variable si esta viva

  //habilidades
  this.dibujarse = function() {
    //creación del Alien
    //Cabeza alien si esta viva se dibuja
    if (this.estaViva == true) {
      stroke(0);
      strokeWeight(2);
      fill(14, 204, 45); // Color verde
      ellipse(30 + this.miX, 30 + this.miY, 40, 40); // Cabeza
      fill(0);
      ellipse(25 + this.miX, 25 + this.miY, 5, 10); // Ojos
      ellipse(35 + this.miX, 25 + this.miY, 5, 10); // Ojos
      ellipse(30 + this.miX, 40 + this.miY, 15, 10); // Boca
      line(18 + this.miX, 20 + this.miY, 28 + this.miX, 15 + this.miY); // Cejas
      line(33 + this.miX, 15 + this.miY, 43 + this.miX, 20 + this.miY); // Cejas
      line(30 + this.miX, 10 + this.miY, 30 + this.miX, 0 + this.miY); // Antena
      fill(255, 0, 0); // Color rojo
      ellipse(30 + this.miX, 0 + this.miY, 5, 5); // Antena punto
    }

    //Función de movimiento
    this.moverse = function(dir, x, y) {

      this.dir = dir;
      //Movimiento del alien que cada quien evade a un astronauta
      if (this.dir == 1) { //izquierda
        this.miX = this.miX + random(-0.5, 0);
      }
      if (this.dir == 2) { // derecha
        this.miX = this.miX + random(0, 0.5);
      }
      if (this.dir == 3) { //Abajo
        this.miY = this.miY + random(0, 0.5);
      }
      if (this.dir == 4) { //Arriba
        this.miY = this.miY + random(-0.5, 0);
      }

      //Si el alien deja la pantalla aparece detras de un planeta
      if (this.miX < -100) {
        this.miX = x;
        this.miY = y;
      }
      if (this.miX > 1000) {
        this.miX = x;
        this.miY = y;
      }
      if (this.miY < -100) {
        this.miX = x;
        this.miY = y;
      }
      if (this.miY > 1000) {
        this.miX = x;
        this.miY = y;
      }
    }

    //Función de morirse
    this.morirse = function() {
      this.estaViva = false;
    }
  }
}

//Funcion de los astronautas
function astronautas(x, y) {
  this.miX = x; // x astronauta
  this.miY = y; // y astronauta
  //funcion de dibujo de astronauta
  this.dibujarse = function() {
    //creación del astronauta
    stroke(0);
    strokeWeight(2);
    fill(255);
    ellipse(30 + this.miX, 30 + this.miY, 40, 40); // Helmet
    fill(255, 206, 225);
    ellipse(30 + this.miX, 30 + this.miY, 30, 30); //Cara
    strokeWeight(2);
    line(25 + this.miX, 25 + this.miY, 25 + this.miX, 30 + this.miY); // Ojos
    line(35 + this.miX, 25 + this.miY, 35 + this.miX, 30 + this.miY); // Ojos
    line(20 + this.miX, 35 + this.miY, 40 + this.miX, 35 + this.miY); //Boca
  }

  //Funcion de moverse
  this.moverse = function(dir) {
    this.dir = dir;
    if (this.dir == 1) { //izquierda
      this.miX = this.miX + random(-1, 0);
    }
    if (this.dir == 2) { //derecha
      this.miX = this.miX + random(0, 1);
    }
    if (this.dir == 3) { //Abajo
      this.miY = this.miY + random(0, 1);
    }
    if (this.dir == 4) { //Arriba
      this.miY = this.miY + random(-1, 0);
    }
  }
}

//funcion de los planetas con x, y, y su color RGB
function planetas(x, y, r, g, b) {
  this.miX = x; // x de planetas
  this.miY = y; // y de planetas
  //Color de los planetas RGB
  this.colorPlanR = r; //R
  this.colorPlanG = g; //G
  this.colorPlanB = b; //B
  
  //funcion de dibujarse
  this.dibujarse = function() {
    //Planeta color
    fill(this.colorPlanR, this.colorPlanG, this.colorPlanB);
    //creación de planetas
    noStroke();
    //planeta
    ellipse(50 + this.miX, 50 + this.miY, 100, 100);
    //crateres y color
    stroke(0);
    strokeWeight(1);
    fill(this.colorPlanR + 50, this.colorPlanG + 50, this.colorPlanB + 50); //color
    ellipse(30 + this.miX, 30 + this.miY, 25, 25); //cada crater
    ellipse(75 + this.miX, 40 + this.miY, 30, 30); //cada crater
    ellipse(50 + this.miX, 80 + this.miY, 20, 20); //cada crater
  }

  //Funcion de movimiento 
  this.moverse = function() {
    //Movimiento del planeta
    this.miX = this.miX + random(-3, 1);
    //Si se mueve de la mitad a la izq tienda a ir hacia abajo, de lo contrario arriba
    if (this.miX < width / 2) {
      this.miY = this.miY + random(0, 2);
    } else {
      this.miY = this.miY + random(-2, 0);
    }
    //Si se llega al final del recorrido por el lado izq se devuelve al lado derecho aleatoriamente
    if (this.miX < -100) {
      this.miX = random(1000, 1200); //el valor está entre 0 y el width
      this.miY = random(200, height); //el valor está entre 200 y el height
    }
  }
  //Funcion conquistarse creando una bandera
  this.conquistarse = function() {
    //Palo de la bandera
    stroke(0);
    strokeWeight(2);
    line(this.miX + 30, this.miY - 50, this.miX + 30, 70 + this.miY - 50);
    strokeWeight(1);
    //lineas rojas y azules
    fill(255, 0, 0);
    rect(this.miX + 30, this.miY - 50, 30, 5);
    fill(255);
    rect(this.miX + 30, this.miY + 5 - 50, 30, 5);
    fill(255, 0, 0);
    rect(this.miX + 30, this.miY + 10 - 50, 30, 5);
    fill(255);
    rect(this.miX + 30, this.miY + 15 - 50, 30, 5);
    fill(255, 0, 0);
    rect(this.miX + 30, this.miY + 20 - 50, 30, 5);
    //Parte azul de la bandera
    fill(0, 0, 255);
    rect(this.miX + 30, this.miY - 50, 10, 10);
  }
}

//Funcion de los cohetes con x y y
function cohetes(x, y) {
  this.miX = x; // x de los cohetes
  this.miY = y; // y de los cohetes
  
  //Funcion de dibujar cohetes
  this.dibujarse = function() {
    //parte superior del cohete
    fill(255, 0, 0);
    triangle(30 + this.miX, 10 + this.miY, 10 + this.miX, 40 + this.miY, 50 + this.miX, 40 + this.miY);
    //Parte medio del cohete
    fill(255, 224, 193);
    rect(10 + this.miX, 40 + this.miY, 40, 60);
    //Ventana del cohete
    fill(91, 255, 246);
    ellipse(30 + this.miX, 60 + this.miY, 25, 25);
    //Reflejo del cristal
    stroke(255);
    line(30 + this.miX, 55 + this.miY, 35 + this.miX, 60 + this.miY);
    line(31 + this.miX, 51 + this.miY, 38 + this.miX, 58 + this.miY);
    //Parte de abajo
    fill(255, 0, 0);
    stroke(0);
    triangle(10 + this.miX, 70 + this.miY, -10 + this.miX, 100 + this.miY, 10 + this.miX, 100 + this.miY);
    triangle(50 + this.miX, 70 + this.miY, 70 + this.miX, 100 + this.miY, 50 + this.miX, 100 + this.miY);
  }

  //Funcion de mover cohetes
  this.moverse = function() {
    //Movimiento del Cohete hacia arriba y temblando
    this.miX = this.miX + random(-0.5, 0.5);
    this.miY = this.miY + random(-5, 0);

    //Re-aparicion de cohetes
    if (this.miY < -100) {
      this.miX = random(width); //el valor está entre 0 y el width
      this.miY = random(height, height + 300); //el valor está entre la altura y 300 pixeles más
    }
  }
}

//Funcion de estrellas
function estrellas(x, y) {
  this.miX = x; // x de las estrellas
  this.miY = y; // y de las estrellas
  
  //Funcion de dibujarse estrellas
  this.dibujarse = function() {
    //creación de la estrella
    strokeWeight(6.6);
    stroke (255);
    line(30 + this.miX, 20 + this.miY, 40 + this.miX, 40 + this.miY);
    line(40 + this.miX, 40 + this.miY, 20 + this.miX, 25 + this.miY);
    line(20 + this.miX, 25 + this.miY, 40 + this.miX, 25 + this.miY);
    line(40 + this.miX, 25 + this.miY, 20 + this.miX, 40 + this.miY);
    line(20 + this.miX, 40 + this.miY, 30 + this.miX, 20 + this.miY);
  }
  
  //Movimiento de la estrella
  this.moverse = function(){
        this.miX = this.miX + random(-1, 1);
    this.miY = this.miY + random(-1, 1);
  }
}
