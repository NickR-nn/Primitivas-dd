let c = console.log
let canvas = document.getElementById('lienzo'); // Obtenemos el canvas mediante su id
let canvasWidth = canvas.width; // Obtenemos el ancho del canvas
let canvasHeight = canvas.height; // Obtenemos el alto del canvas
let ctx = canvas.getContext('2d'); // Obtenemos el contexto del canvas
let canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight); // Obtenemos el image data del contexto del canvas

function drawPixel(x, y, r, g, b, a) {
    let index = (x + (y * canvasWidth)) * 4; // Obtenemos el indice de un arreglo unidimensional
    canvasData.data[index + 0] = r; // Se coloca el valor correspondiente para rojo, verde, azul y alfa
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}
function updateCanvas() {
    ctx.putImageData(canvasData, 0, 0); // Nuevamente se coloca el image data al canvas
}

// drawPixel(50, 50, 255, 0, 0, 255);
// updateCanvas();



let puntosX = new Array();
let puntosY = new Array();

function hexagono(x0, y0, r) {
    let x, y, xant, yant, angulo;
    xant = r;
    yant = 0;
    angulo = 60;

    while (angulo <= 360) {
        x = Math.round(r * Math.cos(angulo * Math.PI / 180));
        y = Math.round(r * Math.sin(angulo * Math.PI / 180));
        lineaBresenham(x0 + xant, y0 + yant, x0 + x, y0 + y);
        puntosX.push(x0 + x);
        puntosY.push(y0 + y);

        xant = x;
        yant = y;
        angulo = angulo + 60;
    }
}

function traslacion(x, y) {
    for (let i=0; i<puntosX.length; i++) {
        puntosX[i] = puntosX[i] + x;
        puntosY[i] = puntosY[i] + y;
    }
    for (let i=0; i<puntosX.length; i++) {
        lineaBresenham(puntosX[i], puntosY[i], puntosX[(i+1) % puntosX.length], puntosY[(i+1) % puntosY.length]);
    }
}

let tx = 0, ty = 0;
let btnTrasladar = document.getElementById('btnTrasladar');
btnTrasladar.onclick = function() {
    tx += 2;
    ty += 2;
    traslacion(tx, ty);
    updateCanvas();
};

/**
*   x0: Componente x del centro del poligono
*   y0: Componente y del centro del poligono
*   r:  Radio del poligono
*   n:  Número de lados
*/

function copishexagono(x0, y0, r) {
  let x, y, xant, yant, angulo
  xant = r
  yant = 0
  angulo = 60
  while (angulo <= 360) {
    x = Math.round( r * Math.cos(angulo * Math.PI / 180))
    y = Math.round (r * Math.sin(angulo * Math.PI / 180))
    lineaBresenham(x0 + xant, y0 + yant, x0 +x, y0 + y)
    xant = x
    yant = y
    angulo = angulo + 60
  }

}


function poligono(x0, y0, r, n) {
  let x, y, xant, yant, angulo
  xant = r
  yant = 0
  let ln1 = 360 / n
  angulo = ln1
  while (angulo <= 360) {
    x = Math.round( r * Math.cos(angulo * Math.PI / 180))
    y = Math.round (r * Math.sin(angulo * Math.PI / 180))
    lineaBresenham(x0 + xant, y0 + yant, x0 +x, y0 + y)
    xant = x
    yant = y
    angulo = angulo + ln1
  }
}


function examen(x0, y0, r) {
  let x, y, xant, yant, angulo
  let circunferencia = 50
  let n = 360
  xant = r
  yant = 0
  let ln1 = 360 / n
  angulo = ln1

  lineaBrean(0, y0, y0 + x0, x0, 62, 95, 138, 100)
  lineaBrean(y0, 0, x0, x0+y0, 62, 95, 138, 100)
  while (Math.floor(angulo) <= circunferencia) {
    x = Math.round( r * Math.cos(angulo * Math.PI / -180))
    y = Math.round (r * Math.sin(angulo * Math.PI / -180))
    lineaBrean(x0 + xant, y0 + yant, x0 +x, y0 + y, 255, 0, 0, 100)
    xant = x
    yant = y
    angulo = angulo + ln1
  }
  lineaBrean(x0 + xant,y0 + yant,x0, y0, 255, 0, 0, 100)
  lineaBrean(x0 + r, y0 , x0, y0, 255, 0, 0, 100)
}
