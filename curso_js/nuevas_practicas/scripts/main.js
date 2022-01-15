const miTitulo = document.querySelector('h1');
miTitulo.textContent = 'Hola Mundo desde javascript';



let nombreCosa = 'caja';



const miBoton = document.querySelector('#mi_boton');
console.log(miBoton);


miBoton.onclick = function() {
    this.innerHTML = "has echo click"
};