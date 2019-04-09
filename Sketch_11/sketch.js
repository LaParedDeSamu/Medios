var datos;
var cuantos;
var img1;
var img2;
var img3;

function preload() {
  datos = loadJSON("pokemon.json");
  img1 = loadImage("charmander.png");
  img2 = loadImage("charmaleon.png");
  img3 = loadImage("charizard.png");

  function setup() {
    createCanvas(400, 400);
    backgorund(0);
    cuantos = datos.pokemon.length;
  }

  function draw() {
    for (var i = 0; i < cuantos; i++) {
      var posX = random(width);
      var posY = random(height);
      if (i == 1) {
        image(img1, posX, posY, 1354 / 4, 1500 / 4);
      }
      if (i == 2) {
        image(img2, posX, posY, 255 / 2, 300 / 2);
      }
      if (i == 3) {
        image(img3, posX, posY, 991 / 3, 806 / 3);
      }
    }
  }
}