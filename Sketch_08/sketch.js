var cancion1; //Canción 1
var cancion2; //Canción 2
var tocarCancion1 = false;
var tocarCancion2 = false;
var vol1; //volumen (sus valores van de 0.0 a 1.1) 1
var vol2; //volumen 2
var vel1; //Velocidad 1
var vel2; // Velocidad 2
var pan1; //Paneo 1
var pan2; //Paneo 2
var amp1; //Amplitud
var trazos1 = [];

//Se cargan los archivos
function preload()
{
  cancion1 = loadSound ('SOS.mp3');
  cancion2 = loadSound ('SOS_1.mp3');
}

//Dentro del setup se hace toda la interfaz
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //Color verde y ellipses para generar una O
  fill (0, 255, 187)
  ellipse (windowWidth/2 - windowWidth/40, windowHeight/12, windowWidth/15, windowWidth/15);
  fill (0)
  ellipse (windowWidth/2 - windowWidth/40, windowHeight/12, windowWidth/30, windowWidth/30);
  //Color rosado y un cuadrado para hacer la letra I
  fill (255, 0, 102);
  rect (windowWidth/2 + windowWidth/40, windowHeight/22, windowWidth/60, windowWidth/17);
  //Letra N
  rect (windowWidth/2 - windowWidth/11, windowHeight/22, windowWidth/70, windowWidth/17);
  rect (windowWidth/2 - windowWidth/7.5, windowHeight/22, windowWidth/70, windowWidth/17);
  stroke (255, 0, 102);
  //La linea diagonal se hace con una linea, no con recta
  strokeWeight(10)
  line (windowWidth/2 - windowWidth/8, windowHeight/19, windowWidth/2 - windowWidth/12, windowHeight/25 + windowWidth/17);
  //Se cambia el color para hacer la S por medio de lineas
  stroke (0, 255, 187)
  line (windowWidth/2 + windowWidth/10, windowHeight/19, windowWidth/2 + windowWidth/15, windowHeight/16);
  line (windowWidth/2 + windowWidth/15, windowHeight/16, windowWidth/2 + windowWidth/10, windowHeight/9);
  line (windowWidth/2 + windowWidth/10, windowHeight/9, windowWidth/2 + windowWidth/50, windowHeight/8);

  //Cuadros para trazos de cada canción
  stroke (255);
  strokeWeight (3);
  noFill();
  rect ((windowWidth/24), windowHeight/3, windowWidth/3.5, windowWidth/3.5);
  rect ((windowWidth/6)*4, windowHeight/3, windowWidth/3.5, windowWidth/3.5);
  
  //Rectangulos de volumen y velocidad. Volumen (Rosa) Velocidad (Verde)
  fill (255, 0, 102)
  noStroke();
  rect (windowWidth/2 - windowWidth/15, windowHeight/3 + windowHeight/40, windowWidth/35, windowWidth/4);
  fill (0, 255, 187)
  rect (windowWidth/2 + windowWidth/25, windowHeight/3 + windowHeight/40, windowWidth/35, windowWidth/4);
  
  //+ y - para entender
  stroke(255);
  strokeWeight(7);
  line (windowWidth/2 - windowWidth/50, windowHeight/3, windowWidth/2 + windowWidth/50, windowHeight/3);
  line (windowWidth/2, windowHeight/3 - windowWidth/50, windowWidth/2, windowHeight/3 + windowWidth/50);
  line (windowWidth/2 - windowWidth/50, windowHeight/3 + windowWidth/3.5, windowWidth/2 + windowWidth/50, windowHeight/3 + windowWidth/3.5);
  
  //botones de paneo que divide derecha e izquierda con colores
  noStroke();
  fill (255, 0, 102);
  rect((windowWidth/24), windowHeight/3 + windowWidth/3.3, windowWidth/7, windowWidth/50)
  fill (0, 255, 187)
  rect((windowWidth/24) + windowWidth/7, windowHeight/3 + windowWidth/3.3, windowWidth/7, windowWidth/50)
  //lado derecho
  fill (255, 0, 102);
  rect((windowWidth/6)*4, windowHeight/3 + windowWidth/3.3, windowWidth/7, windowWidth/50)
  fill (0, 255, 187)
  rect(((windowWidth/6)*4) + windowWidth/7, windowHeight/3 + windowWidth/3.3, windowWidth/7, windowWidth/50)
  
  amp1=new p5.Amplitude();
  
  
}

function draw() 
{
  
  if (mouseIsPressed == true){
    //Primer cuadrado cancion
    if(mouseX > windowWidth/24 && mouseX < ((windowWidth/24) + windowWidth/3.5)){
      if (mouseY > windowHeight/3 && mouseY < (windowHeight/3 + windowWidth/3.5)){
        tocarCancion1 = true;
        tocarCancion2 = false;
      }
    }
    //segundo cuadrado cancion
    if(mouseX > ((windowWidth/6)*4) && mouseX < (((windowWidth/6)*4) + windowWidth/3.5)){
      if (mouseY > windowHeight/3 && mouseY < (windowHeight/3 + windowWidth/3.5)){
        tocarCancion2 = true;
        tocarCancion1 = false;
      }
    }
    
    //Boton volumen
    if (mouseX > windowWidth/2 - windowWidth/15 && mouseX < (windowWidth/2 - windowWidth/15) + windowWidth/35)
    {
      if (mouseY > windowHeight/3 + windowHeight/40 && mouseY < (windowHeight/3 + windowHeight/40) + windowWidth/4){
        vol1 = map(mouseY,((windowHeight/3 + windowHeight/40) + windowWidth/4),windowHeight/3 + windowHeight/40,0.0,1.1);
        cancion1.setVolume(vol1);
        vol2 = map(mouseY,((windowHeight/3 + windowHeight/40) + windowWidth/4),windowHeight/3 + windowHeight/40,0.0,1.1);
        cancion2.setVolume(vol2);
      }
    }
    
    //Boton velocidad
    if (mouseX > windowWidth/2 + windowWidth/25 && mouseX < (windowWidth/2 + windowWidth/25) + windowWidth/35)
    {
      if (mouseY > windowHeight/3 + windowHeight/40 && mouseY < (windowHeight/3 + windowHeight/40) + windowWidth/4){
        vel1 = map(mouseY,((windowHeight/3 + windowHeight/40) + windowWidth/4),windowHeight/3 + windowHeight/40,0,2);
        cancion1.rate(vel1);
        vel2 = map(mouseY,((windowHeight/3 + windowHeight/40) + windowWidth/4),windowHeight/3 + windowHeight/40,0,2);
        cancion2.rate(vel2);
      }
    }
    //Boton de paneo
    if (mouseX > (windowWidth/24) && mouseX < (windowWidth/24) + (windowWidth/7) *2){
        if (mouseY > windowHeight/3 + windowWidth/3.3 && mouseY < (windowHeight/3 + windowWidth/3.3) + windowWidth/50){
          pan1 = map(mouseX, (windowWidth/24), (windowWidth/24) + (windowWidth/7) *2, -1, 1)
          cancion1.pan(pan1);
        }
    }
    //Boton de paneo derecho
    if (mouseX > (windowWidth/6)*4 && mouseX < (windowWidth/6)*4 + (windowWidth/7) *2){
        if (mouseY > windowHeight/3 + windowWidth/3.3 && mouseY < (windowHeight/3 + windowWidth/3.3) + windowWidth/50){
          pan2 = map(mouseX, (windowWidth/6)*4, (windowWidth/6)*4 + (windowWidth/7) *2, -1, 1)
          cancion2.pan(pan2);
        }
    }
  }
  if (tocarCancion1 == true){
    cancion1.play(1);
    tocarCancion1 = false;
  }
  else if (tocarCancion1 == false){
    cancion1.pause();
  }
  if (tocarCancion2 == true){
    cancion2.play(1);
    tocarCancion2 = false;
  }
  else if (tocarCancion2 == false){
    cancion2.pause();
  }
      
  trazos1.push(vol1);

  stroke(255);

  noFill();

  beginShape();

  for ( var i = 0; i < trazos1.length; i++){

    var y = map(trazos1[i], 0, 1, height, 0);

    vertex(i, y);
  }
  endShape();
  
}
