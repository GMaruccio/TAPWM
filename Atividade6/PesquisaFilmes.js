function coletarDados() {
    var sexo = [0, 0, 0]; 
    var idade = [];
    var opiniao = [0, 0, 0, 0]; 
    var somaidade = 0;
  
    for (let i = 0; i < 5; i++) {
      let anos = parseInt(prompt(`(${i+1}/5) Qual a sua idade?`));
      while (isNaN(anos) || anos <= 0) {
        anos = parseInt(prompt(`(${i+1}/5) Por favor, insira uma idade válida:`));
      }
      idade.push(anos);
  
      let sex = prompt("Qual seu sexo? F/M/O").toUpperCase();
      if (sex === "F") {
        sexo[0]++;
      } else if (sex === "M") {
        sexo[1]++;
      } else {
        sexo[2]++;
      }
  
      let nota = parseInt(prompt("Avalie o filme (1=péssimo, 2=regular, 3=bom, 4=ótimo):"));
      while (isNaN(nota) || nota < 1 || nota > 4) {
        nota = parseInt(prompt("Por favor, digite uma nota válida (1 a 4):"));
      }
      opiniao[nota - 1]++;
    }
  
    somaidade = idade.reduce((a, b) => a + b, 0);
    let media = somaidade / idade.length;
    let maisVelho = Math.max(...idade);
    let maisNovo = Math.min(...idade);
    let qtdPessimo = opiniao[0];
    let qtdOpiniao = opiniao[2] + opiniao[3];
    let porcentagemOpiniao = (qtdOpiniao / idade.length) * 100;
  
    let resultadoHTML = `
      <h2>Resultados:</h2>
      <p><strong>Média de idade:</strong> ${media.toFixed(2)}</p>
      <p><strong>Idade da pessoa mais velha:</strong> ${maisVelho}</p>
      <p><strong>Idade da pessoa mais nova:</strong> ${maisNovo}</p>
      <p><strong>Quantidade de pessoas que responderam "péssimo":</strong> ${qtdPessimo}</p>
      <p><strong>Porcentagem que respondeu "bom" ou "ótimo":</strong> ${porcentagemOpiniao.toFixed(2)}%</p>
      <p><strong>Número de mulheres:</strong> ${sexo[0]}</p>
      <p><strong>Número de homens:</strong> ${sexo[1]}</p>
      <p><strong>Número de outros:</strong> ${sexo[2]}</p>
    `;
  
    document.getElementById("resultado").innerHTML = resultadoHTML;
    document.getElementById("resultado").classList.remove("hidden");
  }
  