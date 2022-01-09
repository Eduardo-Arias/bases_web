$(document).ready(function() {
    console.log("documento formulario");
    // Consulta el detalle
    $("#tabla_consulta_general tbody button").click(function(e) {
        console.log('detalle tabla ');
        //var idEmpleado = e.currentTarget.value;
        var idEmpleado = $(this).val();
        console.log(idEmpleado);
        // Llama el formulario
        $("#contenido_principal").load("./consultas/formulario.html", function() {
            $("#clave_empleado").val(idEmpleado);
        });
    });
});