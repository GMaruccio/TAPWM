var aluno;
var nota1;
var nota2;
var nota3;
aluno = prompt("Qual é o seu nome?");
nota1 = parseFloat(prompt("Qual foi sua primeira nota?"));
nota2 = parseFloat(prompt("Qual foi sua segunda nota?"));
nota3 = parseFloat(prompt("Qual foi sua terceira nota?"));

alert( `${aluno}  Ficou com a nota final de  ${(nota1+nota2+nota3)/3} `)