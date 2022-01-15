console.log('1');

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');


function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre');
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.textContent = 'Hola Soy, ' + miNombre
    }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Hola Soy, ' + nombreAlmacenado;
}

let button = document.querySelector('button');

button.onclick = () => {
    if (localStorage.getItem('numeros')) {
        let numeros = localStorage.getItem('numeros');
        let body = document.body;
        body.append('<p>' + numeros + '</p>');
    } else {
        alert('Ingresa 5 numeros');
        let numeros = [];

        let i = 0;
        do {
            numeros[i] = prompt('Cual es el numero');
            i++;
        } while (numeros.length < 5);

        localStorage.setItem('numeros', numeros);
        let body = document.body;

        body.append('<p>' + numeros + '</p>');
    }

}