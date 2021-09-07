var cajas = document.getElementsByTagName('div');


console.log(cajas[0]);

var primeraCaja = cajas[0];
var segundaCaja = cajas[1];

// Modificando el contenido de una caja
primeraCaja.textContent = 'Esta es una caja modificada';


// Creando contenido
var parrafo = document.createElement('p');
parrafo.textContent = 'Texto desde javascript';
// Agregando nuevo contenido
primeraCaja.appendChild(parrafo);



// Modificando el contenido
var contenido = 'Hola mundo desde un nuevo nodo';
segundaCaja.innerHTML = '<p>'+contenido+'</p>';