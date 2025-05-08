function calc() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, insira três números válidos.");
        return;
    }

    let array = [n1, n2, n3];

    calcular.apply(null, array);
}

function calcular(a, b, c) {
    let soma = a + b + c;
    let quadradon1 = a * a;
    let quadradon2 = b * b;

    alert(`A soma dos três números é: ${soma}\n${a}²: ${quadradon1}\n${b}²: ${quadradon2}`);
}
function gerarPalavras(letras) {
    if (letras.length !== 5) {
      alert("Digite exatamente 5 letras.");
      return [];
    }
  
    const arr = letras.toUpperCase().split('');
    const resultados = [];
  
    function troca(prefixo, resto) {
      if (prefixo.length === 5) {
        resultados.push(prefixo);
        return;
      }
  
      for (let i = 0; i < resto.length; i++) {
        troca(prefixo + resto[i], resto.slice(0, i) + resto.slice(i + 1));
        if (resultados.length >= 10) return;
      }
    }
  
    troca('', letras.toUpperCase());
  
    return resultados;
  }
  
  function gerar() {
    const input = document.getElementById('letras').value;
    const palavras = gerarPalavras(input);
  
    if (palavras.length > 0) {
      alert("Palavras geradas:\n\n" + palavras.join('\n'));
    } else {
      alert("Nenhuma palavra gerada.");
    }
  }
  