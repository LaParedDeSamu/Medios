//Variable luces de los aptos
var corAp = true;

//Variable color del cielo
var cor = 0;
var corUp = true;

//Variables para relacionar edificios y moverlos
var xEd1 = 900;
var xEd2 = 1800;

//Variable para movimiento en Y del avión
var yUp = true;
var yAv = 0;

function setup() 
{
  createCanvas (900,600);
  
}

function draw() 
{
  //fondo cielo
  background (0, 218 + cor / 1.3, 255);
  
  //luna 
  fill (350);
  ellipse (800, -cor -80, 100, 100);
  fill (140);
  ellipse (780, -cor -70, 25, 25);
  ellipse (820, -cor - 80, 10, 10);
  ellipse (810, -cor - 110, 5, 5);
  ellipse (820, -cor - 60, 15, 15);
   // If para el movimiento del avión
 if (yUp == true)
 {
  
  //avión de papel a base de triangulos
  fill (350);
  triangle (180, 200+yAv, 200, 220+yAv, 280, 180+yAv);
  fill (80, 80, 80);
  triangle (280, 180+yAv, 200, 220+yAv, 210, 250+yAv);
  fill (350);
  triangle (280, 180+yAv, 210, 230+yAv, 230, 260+yAv);
  yAv = yAv - 5;
 }
 
 if (yUp == false)
 {
  yAv = yAv + 3;
  //Avión de papel a base de triangulos
  fill (350);
  triangle (240, 170+yAv, 300, 240+yAv, 230, 190+yAv);
  fill (80, 80, 80);
  triangle (230, 190+yAv, 300, 240+yAv, 200, 210+yAv);
  fill (350);
  triangle (300, 240+yAv, 225, 203+yAv, 200, 220+yAv);
 }
 
 if (yAv > 480)
 {
   yUp = true;
 }
 
 
 //modificación de variables arriba abajo
 if (yAv <= -310)
 {
   yUp = false;
 }
 
  //edificios
  stroke(0);
  //1 
  fill (75, 75, 75);
  rect ((xEd1-(75*3)), 400, 75, 200);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd1-(75*3)+15), 420, 15, 180);
  rect ((xEd1-(75*3)+45), 420, 15, 180);
  
  
  //2
  fill (75, 75, 75);
  rect ((xEd1-(75*2)), 520, 75, 80);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd1-(75*2)+15), 540, 15, 60);
  rect ((xEd1-(75*2)+45), 540, 15, 60);
  
  //3 
  fill (75, 75, 75);
  rect (((xEd1-75)), 470, 75, 130);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect (((xEd1-75+15)), 490, 15, 610);
  rect (((xEd1-75+45)), 490, 15, 110);
  
   //4
  fill (75, 75, 75);
  rect ((xEd1-(75*3)-225), 400, 75, 200);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd1-(75*3)+15-225), 420, 15, 180);
  rect ((xEd1-(75*3)+45-225), 420, 15, 180);
  
  
  //5
  fill (75, 75, 75);
  rect ((xEd1-(75*2)-225), 520, 75, 80);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd1-(75*2)+15-225), 540, 15, 60);
  rect ((xEd1-(75*2)+45-225), 540, 15, 60);
  
  //6 
  fill (75, 75, 75);
  rect (((xEd1-75)-225), 470, 75, 130);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect (((xEd1-75+15)-225), 490, 15, 610);
  rect (((xEd1-75+45)-225), 490, 15, 110);
  
    //7
  fill (75, 75, 75);
  rect ((xEd1-(75*3)-450), 400, 75, 200);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd1-(75*3)+15-450), 420, 15, 180);
  rect ((xEd1-(75*3)+45-450), 420, 15, 180);
  
  
  //8
  fill (75, 75, 75);
  rect ((xEd1-(75*2)-450), 520, 75, 80);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd1-(75*2)+15-450), 540, 15, 60);
  rect ((xEd1-(75*2)+45-450), 540, 15, 60);
  
  //9
  fill (75, 75, 75);
  rect (((xEd1-75)-450), 470, 75, 130);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect (((xEd1-75+15)-450), 490, 15, 610);
  rect (((xEd1-75+45)-450), 490, 15, 110);
  
  //10
  fill (75, 75, 75);
  rect ((xEd1-(75*3)-675), 400, 75, 200);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd1-(75*3)+15-675), 420, 15, 180);
  rect ((xEd1-(75*3)+45-675), 420, 15, 180);
  
  
  //11
  fill (75, 75, 75);
  rect ((xEd1-(75*2)-675), 520, 75, 80);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd1-(75*2)+15-675), 540, 15, 60);
  rect ((xEd1-(75*2)+45-675), 540, 15, 60);
  
  //12
  fill (75, 75, 75);
  rect (((xEd1-75)-675), 470, 75, 130);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect (((xEd1-75+15)-675), 490, 15, 610);
  rect (((xEd1-75+45)-675), 490, 15, 110);
  
  
  
  
  //Segundos edificios, efecto movimiento
  
  //1 
  fill (75, 75, 75);
  rect ((xEd2-(75*3)), 400, 75, 200);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd2-(75*3)+15), 420, 15, 180);
  rect ((xEd2-(75*3)+45), 420, 15, 180);
  
  
  //2
  fill (75, 75, 75);
  rect ((xEd2-(75*2)), 520, 75, 80);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd2-(75*2)+15), 540, 15, 60);
  rect ((xEd2-(75*2)+45), 540, 15, 60);
  
  //3 
  fill (75, 75, 75);
  rect (((xEd2-75)), 470, 75, 130);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect (((xEd2-75+15)), 490, 15, 610);
  rect (((xEd2-75+45)), 490, 15, 110);
  
   //4
  fill (75, 75, 75);
  rect ((xEd2-(75*3)-225), 400, 75, 200);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd2-(75*3)+15-225), 420, 15, 180);
  rect ((xEd2-(75*3)+45-225), 420, 15, 180);
  
  
  //5
  fill (75, 75, 75);
  rect ((xEd2-(75*2)-225), 520, 75, 80);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd2-(75*2)+15-225), 540, 15, 60);
  rect ((xEd2-(75*2)+45-225), 540, 15, 60);
  
  //6 
  fill (75, 75, 75);
  rect (((xEd2-75)-225), 470, 75, 130);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect (((xEd2-75+15)-225), 490, 15, 610);
  rect (((xEd2-75+45)-225), 490, 15, 110);
  
    //7
  fill (75, 75, 75);
  rect ((xEd2-(75*3)-450), 400, 75, 200);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd2-(75*3)+15-450), 420, 15, 180);
  rect ((xEd2-(75*3)+45-450), 420, 15, 180);
  
  
  //8
  fill (75, 75, 75);
  rect ((xEd2-(75*2)-450), 520, 75, 80);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd2-(75*2)+15-450), 540, 15, 60);
  rect ((xEd2-(75*2)+45-450), 540, 15, 60);
  
  //9
  fill (75, 75, 75);
  rect (((xEd2-75)-450), 470, 75, 130);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect (((xEd2-75+15)-450), 490, 15, 610);
  rect (((xEd2-75+45)-450), 490, 15, 110);
  
  //10
  fill (75, 75, 75);
  rect ((xEd2-(75*3)-675), 400, 75, 200);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd2-(75*3)+15-675), 420, 15, 180);
  rect ((xEd2-(75*3)+45-675), 420, 15, 180);
  
  
  //11
  fill (75, 75, 75);
  rect ((xEd2-(75*2)-675), 520, 75, 80);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect ((xEd2-(75*2)+15-675), 540, 15, 60);
  rect ((xEd2-(75*2)+45-675), 540, 15, 60);
  
  //12
  fill (75, 75, 75);
  rect (((xEd2-75)-675), 470, 75, 130);
  if (cor < -80)
  {
  fill (238, 221, 0);
  }
  else 
  {
    fill (350)
  }
  rect (((xEd2-75+15)-675), 490, 15, 610);
  rect (((xEd2-75+45)-675), 490, 15, 110);
  

  // Sumatoria de la x en los edificios cuando llegan al final
  
  if (xEd1 == 0)
  {
    xEd1 = 900*2;
  }
  
   if (xEd2 == 0)
  {
    xEd2 = 900*2;
  }
  
  //Movimiento edificios
  xEd1= xEd1-5;
  xEd2 = xEd2-5;
  
  // Cambio de color del cielo
  if (corUp == true)
  {
  cor = cor - 0.5;
  }
  if (corUp == false)
  {
    cor = cor + 0.5;
  }
  if (cor == - 200)
  {
    corUp = false;
  }
  if (cor == 0)
  {
    corUp = true;
  }
  
  
}
