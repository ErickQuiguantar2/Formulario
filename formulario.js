function Calcularpromedio(){
    // Obtención de los valores de las notas ingresadas en los campos de texto
    var v1 = parseFloat(document.getElementById("n1").value);
    var v2 = parseFloat(document.getElementById("n2").value);
    var v3 = parseFloat(document.getElementById("n3").value);
    var v4 = parseFloat(document.getElementById("n4").value);
    var v5 = parseFloat(document.getElementById("n5").value);
    // Validación de que las notas sean números entre 0 y 10
    if (
        isNaN(v1) || v1 < 0 || v1 > 10 ||
        isNaN(v2) || v2 < 0 || v2 > 10 ||
        isNaN(v3) || v3 < 0 || v3 > 10 ||
        isNaN(v4) || v4 < 0 || v4 > 10 ||
        isNaN(v5) || v5 < 0 || v5 > 10
    ) {
        // Si alguna nota es inválida, se muestra un mensaje de error
        document.getElementById("promedio").innerHTML = "Error la nota es incorrecta";
        return; // Sale de la función si hay un error
    }
    // Cálculo del promedio de las 5 notas
    var promedio = (v1 + v2 + v3 + v4 + v5) / 5;

    // Variable para almacenar el resultado del estado del estudiante
    var resultado = "";
    // Determinación del resultado basado en el promedio
    if (promedio > 7) {
        resultado = "Pasa el año"; // Si el promedio es mayor a 7, pasa el año
    } else if (promedio >= 3.5) {
        resultado = "Suspendido"; // Si el promedio es entre 3.5 y 7, está suspendido
    } else {
        resultado = "Reprobado"; // Si el promedio es menor a 3.5, está reprobado
    }
    // Muestra el promedio y el resultado en la página
    document.getElementById("promedio").innerHTML = "El promedio es: " + promedio + "<br>" + resultado;
}