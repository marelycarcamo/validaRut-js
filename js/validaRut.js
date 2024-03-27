/* The comment `// PROGRAMA VALIDACION DE RUT CHILENO` is providing a brief description of the purpose
of the JavaScript program, which is to validate the Chilean national identification number (RUT). It
serves as a header or title for the program, indicating that the following code is related to the
validation of Chilean RUT numbers. */

// PROGRAMA VALIDACION DE RUT CHILENO

// La función "validarRut" es responsable de validar el número de identificación nacional chileno (RUT).
function validarRut(rut, dvRut) {
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
	var dv = d === 10 ? "K" : d === 11 ? "0" : String(d);
	var esValido = dv.toUpperCase() === dvRut.toUpperCase();
	var elementoResultado = $("#resultado");
	alert("dv = " + dv);
	elementoResultado.text(
		esValido ? "El RUT es válido." : "El RUT NO es válido."
	);
}

$(document).ready(function () {
	// Evento input en #input-rut. Valida un máximo de 8 digitos en el numero de rut
	$("#input-rut").on("input", function () {
		if ($(this).val().length > 8) {
			$(this).val($(this).val().slice(0, 8));
		}
	});

	// Evento input en #input-dv. Valida ingreso del digito verificador
	$("#input-dv").on("input", function () {
		var valorInputDV = $(this).val();
		if (
			!(
				(valorInputDV >= 0 && valorInputDV <= 9) ||
				valorInputDV.toUpperCase() === "K"
			)
		) {
			$(this).val($(this).val().slice(0, -1));
		}
	});

	// evento click botón validar.
	$("#bt-validar").click(function (event) {
		event.preventDefault();
		var inputRut = $("#input-rut").val();
		var inputDv = $("#input-dv").val();
		validarRut(inputRut, inputDv);
	});

	// Evento click botón Limpiar. La función "limpiar" limpia el campo de entrada y el resultado
	$("#bt-limpiar").click(function (event) {
		event.preventDefault();
		$("#input-rut").val("");
		$("#input-rut").focus();
		$("#resultado").text("");
		$("#input-dv").val("");
	});
});
