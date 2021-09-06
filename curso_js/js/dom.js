var cajas = document.getElementsByTagName('div');


console.log(cajas[0]);

var primeraCaja = cajas[1];

//primeraCaja.textContent = 'Esta es una caja modificada';


var parrafo = document.createElement('p');
var contenido = document.createTextNode('Hola mundo desde un nuevo nodo');

parrafo.textContent = 'Texto desde javascript';
primeraCaja.appendChild(parrafo);