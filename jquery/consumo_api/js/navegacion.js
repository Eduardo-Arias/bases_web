$(document).ready(function() {
    $("#idx_pokedex").click(function(e) {
        //e.preventDefault();
        $("#contenido_principal").load("./pokedex.html");
    });
});