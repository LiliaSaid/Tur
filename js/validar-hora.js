function validarHora(horaIngresada, horaMin, horaMax) {
    // horaIngresada, horaMin, horaMax en formato "HH:mm"
    const ahora = new Date();
    const horaActual = ahora.getHours().toString().padStart(2, '0') + ':' + ahora.getMinutes().toString().padStart(2, '0');

    function parseHora(horaStr) {
        const [h, m] = horaStr.split(':').map(Number);
        return h * 60 + m;
    }

    const ingresada = parseHora(horaIngresada);
    const min = parseHora(horaMin);
    const max = parseHora(horaMax);
    const actual = parseHora(horaActual);

    // Debe estar en el rango y no ser anterior a la hora actual
    return ingresada >= min && ingresada <= max && ingresada >= actual;
}

// Ejemplo de uso:
const hora = "15:30";
const rangoMin = "09:00";
const rangoMax = "18:00";
if (validarHora(hora, rangoMin, rangoMax)) {
    console.log("Hora válida");
} else {
    console.log("Hora inválida");
}