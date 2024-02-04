// PROGRAMA VALIDACION DE RUT CHILENO

// evento click botón validar
document.getElementById("bt-validar").addEventListener("click", function(event) {
    event.preventDefault();
    var inputRut = document.getElementById('input-rut').value;
    // Primero, verifica si el RUT tiene el formato correcto
   if (!validarFormatoRut(inputRut)) { // Pasa el valor del RUT a la función
    document.getElementById('resultado').innerText = "El formato del RUT no es válido.";
    }else{
        validarRut(inputRut);
    }
});


// La función "validarFormatoRut" verifica si el RUT ingresado tiene el formato correcto.
function validarFormatoRut(inputRut) {
    return /^\d{1,8}-[\dKk]$/.test(inputRut);
}


// La función "validarRut" es responsable de validar el número de identificación nacional chileno (RUT).
    function validarRut(inputRut) {
    var partes = inputRut.split('-');
    var rut = partes[0];
    var dvRut = partes[1];
    var pos = rut.length;
    var suma = 0;
    
    while (pos > 0) {
        for (var i = 2; i < 8; i++) {
            pos -= 1;
            suma += i * parseInt(rut.charAt(pos));
            if (pos == 0) {
                break;
            }
        }
    }

    var d = 11 - (suma % 11);
    var dv = (d === 10) ? "K" : ((d === 11) ? "0" : String(d));
    var esValido = dv.toUpperCase() === dvRut.toUpperCase();

    // Obtén una referencia al elemento donde quieres mostrar el resultado
    var elementoResultado = document.getElementById('resultado');
    alert("dv = " + dv);
    // Actualiza el contenido del elemento con el resultado de la validación
    elementoResultado.innerText = esValido ? "El RUT es válido." : "El RUT no es válido.";
}


// Evento click botón Limpiar. La función "limpiar" limpia el campo de entrada y el resultado
document.getElementById("bt-limpiar").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById('input-rut').value = '';
    document.getElementById('resultado').innerText = '';
    
});