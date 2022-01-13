$(document).ready(function() {
    $("#idx_pokedex").click(function(e) {
        //e.preventDefault();
        $("#contenido_principal").load("./pokedex.html", function() {
            $.get("https://pokeapi.co/api/v2/pokemon",
                function(data) {
                    var pokemones = data.results;
                    generarTablaPokemones(pokemones);
                }
            );

        });
    });
});


function generarTablaPokemones(pData) {
    var datos = pData;
    var tBody = document.createElement("tbody");
    var contador = 0;

    datos.forEach(pokemon => {
        contador += 1;
        var fila = document.createElement("tr");
        // Numero
        var celdaId = document.createElement("th");
        celdaId.innerHTML = contador;
        fila.appendChild(celdaId);
        //nombre
        var celdaNombre = document.createElement("th");
        celdaNombre.innerHTML = pokemon.name;
        fila.appendChild(celdaNombre);
        //enlace consulta
        var celdaEnlace = document.createElement("th");
        celdaEnlace.innerHTML = `<button class="btn btn-primary" value="${pokemon.url}" id="algo">Consultar</button>`;
        fila.appendChild(celdaEnlace);
        tBody.appendChild(fila)
    });

    $("#table_pokemones").append(tBody);


}