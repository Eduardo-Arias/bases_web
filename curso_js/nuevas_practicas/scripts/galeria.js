// enlazamos un elemento html con una variable
// Esto nos ayuda a poder controlar sus propiedades
let miImagen = document.querySelector('img');

let imagenes = [
    'images/shiba.jpg',
    'images/cute-brown.jpg',
    'images/dog-cat.jpg',
    'images/dog-sunglasses.jpg'
];
let contador = 0;
miImagen.onclick = () => {
    miImagen.setAttribute('src', imagenes[contador])
    contador++;
    if (contador >= 4) {
        contador = 0;
    }
}