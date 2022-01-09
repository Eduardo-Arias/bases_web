$(document).ready(function() {
    console.log("documento cargado");

    $("#consulta_general").click(function(e) {
        console.log('click consulta general');

        $("#contenido_principal").load("./consultas/general.html");
    });

    $("#consulta_departamento").click(function(e) {
        console.log('click consulta departamento');

        $("#contenido_principal").load("./consultas/departamento.html");
    });
});