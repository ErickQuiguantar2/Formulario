function Calcularpromedio(){
    var v1 = parseFloat(document.getElementById("n1").value);
    var v2 = parseFloat(document.getElementById("n2").value);
    var v3 = parseFloat(document.getElementById("n3").value);
    var v4 = parseFloat(document.getElementById("n4").value);
    var v5 = parseFloat(document.getElementById("n5").value);
    if (
            isNaN(v1) || v1 < 0 || v1 > 10 ||
            isNaN(v2) || v2 < 0 || v2 > 10 ||
            isNaN(v3) || v3 < 0 || v3 > 10 ||
            isNaN(v4) || v4 < 0 || v4 > 10 ||
            isNaN(v5) || v5 < 0 || v5 > 10
        ) {
            document.getElementById("promedio").innerHTML = "Error la nota es incorrecta";
            return;
        }
    var promedio = (v1+v2+v3+v4+v5)/ 5;
    var resultado = "";
        if (promedio > 7) {
            resultado = "Pasa el año";
        } else if (promedio >= 3.5) {
            resultado = "Suspendido";
        } else {
            resultado = "Reprobado";
        }

        document.getElementById("promedio").innerHTML = "El promedio es: " + promedio + "<br>" + resultado;
    }