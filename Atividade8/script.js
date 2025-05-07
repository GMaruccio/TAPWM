function mostrarFormulario() {
    const valor = document.getElementById("seletor").value;
    const formularios = document.querySelectorAll(".formulario");
    formularios.forEach(form => form.style.display = "none");
    if (valor === "maior") document.getElementById("formMaior").style.display = "block";
    else if (valor === "ordenar") document.getElementById("formOrdenar").style.display = "block";
    else if (valor === "palindromo") document.getElementById("formPalindromo").style.display = "block";
    else if (valor === "subconjunto") document.getElementById("formSubconjunto").style.display = "block";
  }
  function testeMaior(n1,n2,n3) {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    n3 = document.getElementById("n3").value;
    const maior = Math.max(n1, n2, n3);
    document.getElementById("resultadoMaior").textContent = `Maior número: ${maior}`;
  }
  function testeOrdenar() {
    const nums = [
      document.getElementById("ord1").value,
      document.getElementById("ord2").value,
      document.getElementById("ord3").value
    ].sort((a, b) => a - b);
    document.getElementById("resultadoOrdenar").textContent = `Ordem crescente: ${nums.join(", ")}`;
  }
  function testePalindromo() {
    let texto = document.getElementById("palavra").value.toLowerCase().replace(/\s/g, "");
    let reverso = texto.split("").reverse().join("");
    let eh = texto === reverso;
    document.getElementById("resultadoPalindromo").textContent = eh ? "É palíndromo!" : "Não é palíndromo.";
  }
  function testeSubconjunto() {
    let p1 = document.getElementById("palavra1").value.toLowerCase();
    let p2 = document.getElementById("palavra2").value.toLowerCase();
    if (!p1 || !p2) {
      document.getElementById("resultadoSubconjunto").textContent = "Erro: campos vazios.";
      return;
    }
    for (let letra of p2) {
      if (!p1.includes(letra)) {
        document.getElementById("resultadoSubconjunto").textContent = "Não é um subconjunto.";
        return;
      }
    }
    document.getElementById("resultadoSubconjunto").textContent = "É um subconjunto!";
  }
  