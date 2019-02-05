function setup() {
  
 createCanvas(500,500);

}

function draw() {
var x = 0
var y = 0
var z=7
fill (0);
rect (0,0, 500,500);
noStroke();
for (i = 1; i <= 80; i= i+1)
{
  for (a = 1; a <= z; a= a+1)
  {
    for (p = 1; p <= 2; p= p+1)
    {
      fill(350);
      triangle(x,30+y,30+x,30+y,30+x, y);
      triangle(60+x,30+y,60+x,y,90+x, y);
      x = x+30
     }
     x=x+30*2
   }
   z=z+1
  x=-(30*3)*i
  y=y+30
}
}
