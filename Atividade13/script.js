function transformarTexto() {
  let texto = document.getElementById("meuTexto").value;
  let opcao = document.querySelector('input[name="transformacao"]:checked').value;

  if (opcao === "maiuscula") {
    document.getElementById("meuTexto").value = texto.toUpperCase();
  } else if (opcao === "minuscula") {
    document.getElementById("meuTexto").value = texto.toLowerCase();
  }
}
