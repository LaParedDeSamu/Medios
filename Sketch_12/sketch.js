var tablaCerveza; //Variable para la tabla
var espuma; //Imagen utilizada para la gráfica

var numFilas; //Numero de filas
var numColumnas; //Número de columnas

//Carga la tabla y la imagen
function preload() {
  tablaCerveza = loadTable('assets/beer.csv', 'csv', 'header'); //Carga el csv de la tabla
  espuma = loadImage ("beer.png"); //Carga la imagen de la cerveza
}

//Setup que genera la tabla
function setup() {
  createCanvas(1000, 1000); //El tamaño del canvas
  background(220); //Color del fondo

  
  numFilas = tablaCerveza.getRowCount(); //Pone en la variable el numero de filas de la tabla
  numColumnas = tablaCerveza.getColumnCount();  //Pone en la variable el numero de columnas de la tabla

  //For para crear la grafica a partir de cada fila
  for (var i = 0; i < numFilas; i = i + 1) {
    var agno = tablaCerveza.getString(i, 2); //Crea la variable agno donde se deposita la variable año de la tabla
    var ton = tablaCerveza.getNum(i, 4); //Crea la variable ton donde se deposita la variable cantidad de la tabla
    //Se crean variables para facilitar la graficación
    var alto = map(ton, 400000, 2400000, 0, height); //Crea el alto de la variable ton dependiendo el canvas
    var ancho = width / numFilas; //El ancho de cada parte de la grafica
    var posX = (numFilas - 1 - i) * (ancho); //Posición en x de cada parte de la grafica
    var posY = height - alto; //Posición en Y de cada parte de la grafica
    //Se pinta la gráfica
    stroke(0); //Se maneja un stroke negro
    fill (247, 197, 0) //Color amarillo
    strokeWeight(2); //Gruesor de la linea
    rect(posX, posY, ancho - 1, alto - 1); //Rectangulo que dibuja parte de la grafica
    fill(216, 172, 0) //Color amarillo oscuro
    noStroke(); //Quita el stroke
    rect (posX + ancho - 5, posY, 5, alto-1); //Genera sombra al rectangulo anterior
    noFill(); //Quita el color
    stroke(0); //Genera un stroke negro
    rect(posX, posY, ancho - 1, alto - 1); //Crea unas lineas sobre el rectangulo
    noStroke(); //Quita el stroke
    image (espuma, posX , posY-28, ancho , 50); //carga la imagen de la cerveza para darle forma a las partes de la gráfica
    //generación de texto del año
    fill (0); //Color negro
    push(); //Crea un push para rotar y crear texto
    translate(posX+(ancho-3), height-2); //traslada el eje del canvas a la posición de cada rectangulo
    rotate(-HALF_PI); //Rota lo que esta a continuación
    textSize(16); //El tamaño del texto
    text(agno, 0, 0); //Crea el texto del año
    pop(); //Cierra el push
    //generación de texto de toneladas
    push(); //Crea un push para rotar y crear texto
    translate(posX+(ancho-3) -10, posY-40); //Traslada el eje del canvas a la posición de cada rectangulo
    rotate(-HALF_PI); //Rota lo que esta a continuación
    textSize(16); //El tamaño del texto
    text(ton, 0, 0); //Crea el texto de las toneladas de cerveza
    pop();//Cierra el push
  }
  //Crea un texto del titulo
  textSize(36); //Tamaño de texto
  text ("Toneladas de cerveza a través" , 50, 150); //Primera linea de texto
  text ("de los años en Colombia 🥴", 65, 200); //segunda linea de texto
  
}

//Actualmente el draw no hace nada.
function draw() {
  //background(220);
}
