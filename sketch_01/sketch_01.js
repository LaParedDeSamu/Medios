function setup() 

{

 createCanvas(1000,1000);

 noStroke();

 

  //triangulo de atrás rojo

 fill(148, 64,65);

 triangle (70, 370, 180, 550, 350, 390);

 // Cuadrado del fondo

 fill (70,65,48);

 quad (170, 450, 550, 230, 760, 560, 480, 810);

 // triangulo amarillo arriba

 fill(228, 202, 101);

 triangle (120, 80, 430, 340, 290, 447);

 //figura de adelante rojo)

 fill (55, 11, 15, 160);

 quad (170, 450, 403, 304, 320, 421, 223, 510);
 
 //Corrección de figura de adelante rojo
 
 fill (119, 82, 50);
 quad(405, 305, 430, 340, 290, 447);
 // Corrección color triangulo amarillo
 
 fill (59, 31, 27);
 noStroke();
 quad (170, 450, 313, 360, 330, 416, 222, 510);
 
 //arco blanco
 
 fill (255);
 noStroke (0);
 angleMode(DEGREES);
 arc (395, 308, 80, 90, -60, -240);
 fill (228, 202, 101) //Amarillo
 arc (393.5, 310, 80, 90, 40, -240, PIE);
 fill (92, 90, 152);
 arc (395, 310, 80, 90, -60, -380, PIE);
 angleMode(RADIANS);
 // figura negra grande vertical

 stroke(0,0,0);

 fill (0,0,0);

 beginShape();

 vertex (270, 410); 

 vertex (295, 445);

 vertex (300, 390);

 vertex (400, 510);

 vertex (555, 510);

 vertex (960, 860);

 vertex (560, 480);

 vertex (500, 440);

 vertex (430, 470);

 vertex (260, 305);

 endShape();

 //Linea negra horizontal
 
 fill (0,0,0);
 triangle (60, 880, 70, 920, 980, 120);
 
 //Cuadrado azul izquierda
 
 noStroke();
 fill (96, 142, 181, 180);
 quad (250, 600, 295, 530, 405, 627, 275, 670);
 
 //Corrección de color cuadrado azul izquierda
 fill (88, 119, 144);
 triangle (340, 648, 382, 608, 407, 626);
 
 
//Semi-ellipse amarilla pequeña

 fill(255,255,0);
 arc(330, 510, 30, 30, PI - PI + QUARTER_PI, PI+QUARTER_PI);
 
 // Triangulo grande al lado de la semi-ellipse amarilla
 
 fill (255);
 triangle (337, 500, 345, 510, 430, 480);
 
 // Triangulo amarillo dentro del triangulo
 
 fill (223, 191, 0);
 triangle (382, 490, 430, 480, 387, 495);
 
 // Cuadrado naranja dentro del triangulo
 
 fill (202, 48, 23);
 quad (351, 500, 353, 504, 357, 502, 355, 499);
 
 //Curvas negra entre triangulos (ellipse sin fondo)
 
 noFill();
 stroke (0);
 strokeWeight(2);
 arc (210, 375, 160, 190, PI, TWO_PI - 2* QUARTER_PI +0.03);
 arc (230, 395, 160, 190, PI + 0.24, TWO_PI - 2* QUARTER_PI -0.08);
 
 //lineas entre curvas negras
 
 line (120, 330, 168, 355);
 line (135, 295, 185, 345);
 line (160, 275, 195, 325);
 
 //lineas negras encima de triangulo amarillo
 
 bezier (270, 300, 260, 240, 250, 150, 300, 70); 
 bezier (270+10, 300+10, 260+10, 240+10, 250+10, 150+20, 310, 70+45); 
 bezier (240, 300, 285, 295, 300, 180, 350, 190)
 bezier (250, 280, 285, 280, 290, 180, 360, 160)
 bezier (260, 260, 285, 260, 270, 170, 390, 120)
 
 //circulo rojo
 fill (186, 46, 54);
 noStroke();
 ellipse (335, 115, 15, 15);
 
 // linea roja arriba de la ellipse blanca
 
 stroke (186, 44, 23);
 strokeWeight (3);
 line (390+10, 280 - 10, 410 + 10, 240 - 10);
 
 // Triangulo blanco
 
 noStroke ();
 fill (255);
 triangle (425, 330+35, 435, 350+45, 415, 350+45);
 
 // Ellipse blanca con naranja
 
 angleMode(DEGREES);
 stroke ( 233, 181, 0);
 strokeWeight (2);
 arc (430, 400, 20, 20, 0, 180, CHORD);
 
 //cuadrado negro
 
 noStroke();
 fill(0);
 quad (445+20, 380-10, 455+20, 390-10, 445+20, 400-10, 435+20, 390-10);
 
}


function draw() 

{

  

}
