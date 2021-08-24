
function agregarNumero(pIdx) {
    var numero = document.getElementById(pIdx).value;
    //console.log(numero);
    var operacion = document.getElementById('resultado');
    var ultimaPosicion = operacion.value.length;
    var ultimoValor = operacion.value.substr((ultimaPosicion -1),ultimaPosicion);
    if ( ultimoValor === ' ' ) {
        operacion.value = operacion.value.trim() + numero +' ';    
    } else {
        operacion.value = operacion.value + numero +' ';
    }

}

function agregarOperador(pidx) {
    console.log('accede a la funcion');
    var numero = document.getElementById(pIdx).value;
    console.log(numero);
    var operacion = document.getElementById('resultado');
    console.log(operacion);
    operacion.value = operacion.value + numero;
}

function ejectarOperacion() {
    var operacion = document.getElementById('resultado');
    var resultado;
    var gOperador;
    var segmento;

}

function obtenerSegmento(pCadena) {
    
}