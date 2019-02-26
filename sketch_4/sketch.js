//Posicion X del puntero
var posXrec1 = 10;
//Posicion Y del puntero
var posYrec1 = 10;
//Tamaño del puntero
var tamRec1 = 40;
//Variable para cambiar el puntero
// 0 (cuadrado) 1 (lineas) 2 (spray) 3 (flecha) 4 (pegatina cara) 5 (pincel caligrafico) 6 (Pegatina Avión)
var puntero = 0;
//Variable para cambiar a color 
//Color 0 (blanco) 1 (Azul) 2 (Rosa) 3 (Verde) 4 (Amarillo) 5 (Rojo) 6 (Azul oscuro) 7 (Morado) 8 (Naranja) 9 (Negro)
var color1 = 0;
//Variable para guardar la imagen
var guardar = 0;

function setup() {
	//Creación del Canvas
	createCanvas(windowWidth, windowHeight);
	//Color del fondo
	background(100);
}


function draw() {
	noStroke();
	fill(255);
	//Borrador total botón
	rect(posXrec1, posYrec1, tamRec1, tamRec1);
	//Color azul claro botón
	fill (100, 224, 213);
	rect(posXrec1 + 60, posYrec1, tamRec1, tamRec1);
	//Color rosa botón
	fill (255, 0, 255);
	rect(posXrec1 + 60, posYrec1 + 60, tamRec1, tamRec1);
	//Color verde botón
	fill (0, 255, 12);
	rect(posXrec1 + 60, posYrec1 + 120, tamRec1, tamRec1);
	//Color amarillo botón
	fill (255, 255, 0);
	rect(posXrec1 + 60, posYrec1 + 180, tamRec1, tamRec1);
	//Color rojo botón
	fill (255, 0, 0);
	rect(posXrec1 + 60, posYrec1 + 240, tamRec1, tamRec1);
	//Color azul oscuro botón
	fill (0, 46, 255);
	rect(posXrec1 + 60, posYrec1 + 300, tamRec1, tamRec1);
	//Color morado botón
	fill (110, 0, 255);
	rect(posXrec1 + 60, posYrec1 + 360, tamRec1, tamRec1);
	//Color naranja botón
	fill (255, 110, 0);
	rect(posXrec1 + 60, posYrec1 + 420, tamRec1, tamRec1);
	//Color negro botón
	fill (0);
	rect(posXrec1 + 60, posYrec1 + 480, tamRec1, tamRec1);
	//Color blanco/estandar botón
	fill (255);
	rect(posXrec1 + 60, posYrec1 + 540, tamRec1, tamRec1);
	//Cambio de pincel a cuadrado / estandar
	fill (255);
	rect(posXrec1, posYrec1 + 60, tamRec1, tamRec1);
	fill (50);
	stroke(0);
	// Rect decorativo
	strokeWeight (3);
	rect (posXrec1 + tamRec1/4, posYrec1 + 60 + tamRec1/4, tamRec1/2, tamRec1/2);
	noStroke();
	//Cambio de pincel a borrador botón
	fill (255);
	rect (posXrec1, posYrec1 + 120, tamRec1, tamRec1);
	stroke (0);
	strokeWeight (3);
	//E de eraser
	line (posXrec1 + tamRec1/5, posYrec1 + tamRec1/5 + 120, posXrec1 + tamRec1/5 * 4, posYrec1 + tamRec1/5 + 120);
	line (posXrec1 + tamRec1/5, posYrec1 + tamRec1/5 + 120, posXrec1 + tamRec1/5, posYrec1 + tamRec1/5 * 4 + 120);
	line (posXrec1 + tamRec1/5, posYrec1 + tamRec1/2 + 120, posXrec1 + tamRec1/5 * 4, posYrec1 + tamRec1/2 + 120);
	line (posXrec1 + tamRec1/5, posYrec1 + tamRec1/5 * 4 + 120, posXrec1 + tamRec1/5 * 4, posYrec1 + tamRec1/5 * 4 + 120);
	noStroke();
	//Cambio de pincel a linea botón
	fill (255);
	rect (posXrec1, posYrec1 + 180, tamRec1, tamRec1);
	//Decoración linea
	stroke(0);
	strokeWeight(1);
	line (posXrec1 + tamRec1/5, posYrec1 + tamRec1/5 * 4 + 180, posXrec1 + tamRec1/5 * 4, posYrec1 + tamRec1/5 + 180);
	noStroke();
	//Cambio de pincel a spray botón
	fill (255);
	rect (posXrec1, posYrec1 + 240, tamRec1, tamRec1);
	//Decoración spray
	fill (0);
	ellipse (posXrec1 + tamRec1/4, posYrec1 + 240 + tamRec1/4, 7, 7);
	ellipse (posXrec1 + tamRec1/4 * 1.9, posYrec1 + 240 + tamRec1/4, 4, 4)
	ellipse (posXrec1 + tamRec1/4 * 3, posYrec1 + 240 + tamRec1/4, 10, 10)
	ellipse (posXrec1 + tamRec1/4, posYrec1 + 240 + tamRec1/4.5 * 2, 5, 5)
	ellipse (posXrec1 + tamRec1/4 * 2.5, posYrec1 + 240 + tamRec1/4 * 2, 5, 5)
	ellipse (posXrec1 + tamRec1/4 * 1.5, posYrec1 + 240 + tamRec1/4 *2.5, 7, 7)
	ellipse (posXrec1 + tamRec1/4, posYrec1 + 240 + tamRec1/4 * 3.2, 4, 4);
	ellipse (posXrec1 + tamRec1/4 * 3, posYrec1 + 240 + tamRec1/4 * 3.2, 10, 10);
	//Cambio de pincel a flecha botón
	fill (255);
	rect (posXrec1, posYrec1 + 300, tamRec1, tamRec1);
	//Flecha decorativa
	noFill();
  strokeWeight(3);
	stroke(0);
  strokeJoin(MITER);
  beginShape();
  vertex(posXrec1 + tamRec1/6, posYrec1 + 300 + tamRec1/6);
  vertex(posXrec1 + tamRec1/6 * 5, posYrec1 + 300 + tamRec1/2);
  vertex(posXrec1 + tamRec1/6, posYrec1 + 300 + tamRec1/6 * 5);
  endShape();
	noStroke();
	//Cambio de pincel a pegatina carita feliz botón
	fill (255);
	rect (posXrec1, posYrec1 + 360, tamRec1, tamRec1);
	//Decoración de la pegatina
	fill (255, 255, 0)
	strokeWeight(1)
	stroke(0);
	ellipse (posXrec1 + tamRec1/2, posYrec1 + 360 + tamRec1/2, 30, 30);
	fill (0);
	ellipse (posXrec1 + tamRec1/3, posYrec1 + 360 + tamRec1/2.5, 5, 5)
	ellipse (posXrec1 + tamRec1/3 * 2, posYrec1 + 360 + tamRec1/2.5, 5, 5)
	strokeWeight (3);
	noFill();
	arc(posXrec1 + tamRec1/2, posYrec1 + 360 + tamRec1/1.8 , 15, 15, 0, PI);
	noStroke();
	//Cambio de pincel a caligrafico botón
	fill (255);
	rect (posXrec1, posYrec1 + 420, tamRec1, tamRec1);
	//Decoración pincel caligrafico
	strokeWeight (7)
	stroke(0);
	line (posXrec1 + tamRec1/7 * 2.3, posYrec1 + 420 + tamRec1/7 * 4, posXrec1 + tamRec1/7 * 4.8, posYrec1 + 420 + tamRec1/7 * 3);
	noStroke();
	//Cambio a pegatina avión de papel botón
	fill (255);
	rect (posXrec1, posYrec1 + 480, tamRec1, tamRec1);
	//Decoración avión de papel
	fill (350);
	stroke(0);
	strokeWeight(1);
  triangle (-48 + 180/3, 438 + 200/3,-48 + 200/3, 438 + 220/3,-48 +  280/3, 438 + 180/3);
  fill (80, 80, 80);
  triangle (-48 + 280/3, 438 + 180/3,-48 + 200/3, 438 + 220/3, -48+ 210/3, 438 + 250/3);
  fill (350);
  triangle (-48 + 280/3, 438 + 180/3,-48 + 210/3, 438 + 230/3, -48 + 230/3, 438 + 260/3);
	noStroke();
	//Guardar imagen botón
	fill (255);
	rect (posXrec1, posYrec1 + 540, tamRec1, tamRec1);
	//Casette decorativo
	stroke (0);
	strokeWeight (1);
	fill (0, 203, 255)
	rect (posXrec1 + tamRec1/9, posYrec1 + 540 + tamRec1/9, tamRec1/1.3, tamRec1/1.3);
	fill (160, 160, 160)
	rect (posXrec1 + tamRec1/9 * 2, posYrec1 + 540 + tamRec1/9, tamRec1/9 * 5, tamRec1/9 * 2);
	fill (99, 99, 99)
	rect (posXrec1 + tamRec1/9 * 2.5, posYrec1 + 540 + tamRec1/9 * 5, tamRec1/9 * 4, tamRec1/9 * 2.8);
	fill (0, 203, 255)
	rect (posXrec1 + tamRec1/9 * 3, posYrec1 + 540 + tamRec1/9 * 5.5, tamRec1/9, tamRec1/9 * 2);
	noStroke();
	
	//Inicia comando de presión
	if (mouseIsPressed == true) {
		
		//Comandos que cambian la variable color dependiendo la zona donde se ubique el puntero
		//Si no se tiene el color del rectangulo, se cambia a este
		
		//Azul claro
		if (mouseX > posXrec1 + 60 && mouseX < posXrec1 + 60 + tamRec1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRec1) {
			if (color1 != 1) {
				color1 = 1;
			}
		}
		//Rosa
	if (mouseX > posXrec1+60 && mouseX < posXrec1+60 + tamRec1 && mouseY > posYrec1 +60 && mouseY < posYrec1 + 60 + tamRec1) {
			if (color1 != 2) {
				color1 = 2;
			}
	}
		//Verde
	if (mouseX > posXrec1+60 && mouseX < posXrec1+60 + tamRec1 && mouseY > posYrec1 +120 && mouseY < posYrec1 + 120 + tamRec1) {
			if (color1 != 3) {
				color1 = 3;
			}
	}
		//Amarillo
		if (mouseX > posXrec1+60 && mouseX < posXrec1+60 + tamRec1 && mouseY > posYrec1 +180 && mouseY < posYrec1 + 180 + tamRec1) {
			if (color1 != 4) {
				color1 = 4;
			}
		}
		//Rojo
		if (mouseX > posXrec1+60 && mouseX < posXrec1+60 + tamRec1 && mouseY > posYrec1 +240 && mouseY < posYrec1 + 240 + tamRec1) {
			if (color1 != 5) {
				color1 = 5;
			}
		}	
		//Azul oscuro
		if (mouseX > posXrec1 + 60 && mouseX < posXrec1 + 60 + tamRec1 && mouseY > posYrec1 + 300 && mouseY < posYrec1 + 300 +tamRec1) {
			if (color1 !=6){
				color1 = 6;
			}
		}
		//Morado
		if (mouseX > posXrec1+60 && mouseX < posXrec1+60 + tamRec1 && mouseY > posYrec1 +360 && mouseY < posYrec1 + 360 + tamRec1) {
			if (color1 != 7) {
				color1 = 7;
			}
		}
		//Naranja
		if (mouseX > posXrec1 + 60 && mouseX < posXrec1 + 60 + tamRec1 && mouseY > posYrec1 + 420 && mouseY < posYrec1 + 420 +tamRec1) {
			if (color1 !=8){
				color1 = 8;
			}
		}
		//Negro
		if (mouseX > posXrec1+60 && mouseX < posXrec1+60 + tamRec1 && mouseY > posYrec1 +480 && mouseY < posYrec1 + 480 + tamRec1) {
			if (color1 != 9) {
				color1 = 9;
			}
		} 
		//Blanco
		if (mouseX > posXrec1 + 60 && mouseX < posXrec1 + 60 + tamRec1 && mouseY > posYrec1 + 540 && mouseY < posYrec1 + 540 +tamRec1) {
			if (color1 !=0){
				color1 = 0;
			}
		}
		//Borrador
		if (mouseX > posXrec1 && mouseX < posXrec1 + tamRec1 && mouseY > posYrec1 + 120 && mouseY < posYrec1 + 120 +tamRec1) {
			if (color1 !=10){
				color1 = 10;
				puntero = 0;
			}
		}
		
		//Comandos que dependiendo la variable del color que se tenga hacen fill al color deseado
		//Azul claro
		if (color1 == 1) {
			fill(100, 224, 213);
		}
		//Rosa
		if (color1 == 2) {
			fill(255, 0, 255);
		}
		//Verde
		if (color1 == 3) {
			fill(0, 255, 12);
		}
		//Amarillo
		if (color1 == 4) {
			fill(255, 255, 0);
		}
		//Rojo
		if (color1 == 5) {
			fill(255, 0, 0);
		}
		//Azul
		if (color1 == 6) {
			fill(0, 46, 255);
		}
		//Morado
		if (color1 == 7) {
			fill(110, 0, 255);
		}
		//Naranja
		if (color1 == 8) {
			fill(255, 110, 0);
		}
		//Negro
		if (color1 == 9) {
			fill(0);
		}
		//Borrador
		if (color1 == 10) {
			fill(100);
		}
		//Blanco
		if (color1 == 0) {
			fill(350);
		}
		
		//Comando del botón para volver el pincel cuadrado
		if (mouseX > posXrec1 && mouseX < posXrec1 + tamRec1 && mouseY > posYrec1 + 60 && mouseY < posYrec1 + 60 + tamRec1) {
			if (puntero != 0) {
				puntero = 0;
			}
		}
		//Comando del botón para ir al pincel lineal
		if (mouseX > posXrec1 && mouseX < posXrec1 + tamRec1 && mouseY > posYrec1 + 180 && mouseY < posYrec1 + 180 + tamRec1) {
			if (puntero != 1) {
				puntero = 1;
			}
		}
		//Comando del botón para volver el pincel spray
		if (mouseX > posXrec1 && mouseX < posXrec1 + tamRec1 && mouseY > posYrec1 + 240 && mouseY < posYrec1 + 240 + tamRec1) {
			if (puntero != 2) {
				puntero = 2;
			}
		}
		//Comando del botón para ir al pincel flecha
		if (mouseX > posXrec1 && mouseX < posXrec1 + tamRec1 && mouseY > posYrec1 + 300 && mouseY < posYrec1 + 300 + tamRec1) {
			if (puntero != 3) {
				puntero = 3;
			}
		}
		//Comando del botón para ir a la pegatina de la carita feliz
		if (mouseX > posXrec1 && mouseX < posXrec1 + tamRec1 && mouseY > posYrec1 + 360 && mouseY < posYrec1 + 360 + tamRec1) {
			if (puntero != 4) {
				puntero = 4;
			}
		}
		// Comando para activar el pincel caligrafico
		if (mouseX > posXrec1 && mouseX < posXrec1 + tamRec1 && mouseY > posYrec1 + 420 && mouseY < posYrec1 + 420 + tamRec1) {
			if (puntero != 5) {
				puntero = 5;
			}
		}
		//Comando del botón para ir a la pegatina del avión de papel
		if (mouseX > posXrec1 && mouseX < posXrec1 + tamRec1 && mouseY > posYrec1 + 480 && mouseY < posYrec1 + 480 + tamRec1) {
			if (puntero != 6) {
				puntero = 6;
			}
		}
		// Comando para guardar el dibujo
		if (mouseX > posXrec1 && mouseX < posXrec1 + tamRec1 && mouseY > posYrec1 + 540 && mouseY < posYrec1 + 540 + tamRec1) {
			saveCanvas ("miDibujo" + frameCount, ".jpg");
		}
		//Pincel del cuadrado
		if (puntero == 0) {
			rect(mouseX, mouseY, 10, 10);
		}
		//Pincel de la linea (cuyo pincel no tiene opción de color)
		if (puntero == 1) {
			stroke (0);
			strokeWeight(1);
			line(mouseX + tamRec1 / 3, mouseY - tamRec1 / 3, mouseX - tamRec1/3, mouseY + tamRec1 / 3);
		}
		//Pincel del spray
		if (puntero == 2) {
			ellipse (mouseX + tamRec1/4 - tamRec1/2, mouseY - tamRec1/2 + tamRec1/4 , 7, 7);
	    ellipse (mouseX - tamRec1/2 + tamRec1/4 * 1.9, mouseY - tamRec1/2 + tamRec1/4, 4, 4)
	    ellipse (mouseX - tamRec1/2 + tamRec1/4 * 3, mouseY - tamRec1/2 + tamRec1/4, 10, 10)
	    ellipse (mouseX - tamRec1/2  + tamRec1/4, mouseY - tamRec1/2 + tamRec1/4.5 * 2, 5, 5)
	    ellipse (mouseX - tamRec1/2 + tamRec1/4 * 2.5, mouseY - tamRec1/2 + tamRec1/4 * 2, 5, 5)
	    ellipse (mouseX - tamRec1/2 + tamRec1/4 * 1.5, mouseY - tamRec1/2 + tamRec1/4 *2.5, 7, 7)
	    ellipse (mouseX - tamRec1/2 + tamRec1/4, mouseY - tamRec1/2 + tamRec1/4 * 3.2, 4, 4);
	    ellipse (mouseX - tamRec1/2 + tamRec1/4 * 3, mouseY - tamRec1/2 + tamRec1/4 * 3.2, 10, 10)
		}
		//Pincel de la flecha (No permite cambio de color)
		if (puntero == 3) {
				noFill();
        strokeWeight(3);
	      stroke(0);
        strokeJoin(MITER);
        beginShape();
        vertex(mouseX - tamRec1/2 + tamRec1/6, mouseY - tamRec1/2 + tamRec1/6);
        vertex(mouseX - tamRec1/2 + tamRec1/6 * 5, mouseY - tamRec1/2 + tamRec1/2);
        vertex(mouseX - tamRec1/2 + tamRec1/6, mouseY - tamRec1/2 + tamRec1/6 * 5);
        endShape();
	      noStroke();
		}
		//Pegatina de la carita feliz
		if (puntero == 4) {
			fill (255, 255, 0)
	    strokeWeight(1)
	    stroke(0);
	    ellipse (mouseX - tamRec1/2 + tamRec1/2, mouseY - tamRec1/2 + tamRec1/2, 35, 35);
	    fill (0);
	    ellipse (mouseX - tamRec1/2 + tamRec1/3, mouseY - tamRec1/2 + tamRec1/2.5, 5, 5)
	    ellipse (mouseX - tamRec1/2 + tamRec1/3 * 2,  mouseY - tamRec1/2 + tamRec1/2.5, 5, 5)
	    strokeWeight (3);
	    noFill();
	    arc(mouseX - tamRec1/2 + tamRec1/2, mouseY - tamRec1/2 + tamRec1/1.8 , 20, 20, 0, PI);
	    noStroke();
		}
		//Pincel caligrafico
		if (puntero == 5) {
			strokeWeight (7)
	    stroke(0);
	    line (mouseX -tamRec1/2 + tamRec1/7 * 2.3, mouseY -tamRec1/2 + tamRec1/7 * 4,mouseX -tamRec1/2 + tamRec1/7 * 4.8, mouseY -tamRec1/2 + tamRec1/7 * 3);
	    noStroke();
		}
		//Pegatina del avión de papel
		if (puntero == 6) {
				fill (350);
        triangle (mouseX  -75  + 180/3, mouseY  -75 + 200/3, mouseX  -75 + 200/3, mouseY  -75 + 220/3, mouseX -75 + 280/3, mouseY -75 + 180/3);
        fill (80, 80, 80);
        triangle (mouseX  -75 + 280/3, mouseY  -75 + 180/3, mouseX  -75 + 200/3, mouseY -75 + 220/3, mouseX -75 + 210/3, mouseY  -75 + 250/3);
        fill (350);
        triangle (mouseX  -75 + 280/3, mouseY  -75 + 180/3, mouseX  -75 + 210/3, mouseY  -75 + 230/3, mouseX  -75 + 230/3, mouseY  -75 + 260/3);
		}
		//Comando para borrado total
		if (mouseX > posXrec1 && mouseX < posXrec1 + tamRec1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRec1) {
			background(100);
		}
	}
}
