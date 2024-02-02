// La función "validarRut" es responsable de validar el número de identificación nacional chileno (RUT).
function validarRut() {
    var rutCompleto = document.getElementById('rut').value;
    var partes = rutCompleto.split('-');
    var texto = partes[0];
    var dvRut = partes[1];

    var pos = texto.length;
    var suma = 0;

    while (pos > 0) {
        for (var i = 2; i < 8; i++) {
            pos -= 1;
            suma += i * parseInt(texto.charAt(pos));
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

    // Actualiza el contenido del elemento con el resultado de la validación
    if (esValido) {
        elementoResultado.innerText = "El RUT es válido.";
    } else {
        elementoResultado.innerText = "El RUT no es válido.";
    }
}
