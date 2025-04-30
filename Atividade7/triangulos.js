document.getElementById("triangulos").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const lado1 = parseFloat(document.getElementById("lado1").value);
    const lado2 = parseFloat(document.getElementById("lado2").value);
    const lado3 = parseFloat(document.getElementById("lado3").value);

    function verificarTriangulo(a, b, c) {
        if (a + b > c && a + c > b && b + c > a) {
            if (a === b && b === c) {
                return "Triângulo Equilátero";
            } else if (a === b || a === c || b === c) {
                return "Triângulo Isósceles";
            } else {
                return "Triângulo Escaleno";
            }
        } else {
            return "Os valores fornecidos não formam um triângulo.";
        }
    }

    const resultado = verificarTriangulo(lado1, lado2, lado3);
    document.getElementById("resultado").textContent = resultado;
});