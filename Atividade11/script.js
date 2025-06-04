
class Retangulo {
  constructor(x, y) {
    this.base = x;
    this.altura = y;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

function calcularArea() {
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const r = new Retangulo(base, altura);
  document.getElementById("resultadoArea").innerText = "Área: " + r.calcularArea();
}



class Conta {
  constructor() {
    this._nome = "";
    this._banco = "";
    this._numero = "";
    this._saldo = 0;

  }
  set nome(valor) { this._nome = valor; }
  get nome() { return this._nome; }

  set banco(valor) { this._banco = valor; }
  get banco() { return this._banco; }

  set numero(valor) { this._numero = valor; }
  get numero() { return this._numero; }

  set saldo(valor) { this._saldo = valor; }
  get saldo() { return this._saldo; }
}
class Corrente extends Conta {
  set saldoEspecial(valor) { this._saldoEspecial = valor; }
  get saldoEspecial() { return this._saldoEspecial; }

  exibir() {
    return `Conta Corrente de ${this.nome} no ${this.banco} Nº ${this.numero}, Saldo: ${this.saldo}, Saldo Especial: ${this.saldoEspecial}`;
  }
}
class Poupanca extends Conta {
  set juros(valor) { this._juros = valor; }
  get juros() { return this._juros; }

  set dataVencimento(valor) { this._dataVencimento = valor; }
  get dataVencimento() { return this._dataVencimento; }

  exibir() {
    return `Conta Poupança de ${this.nome} no ${this.banco} Nº ${this.numero}, Saldo: ${this.saldo}, Juros: ${this.juros}, Vencimento: ${this.dataVencimento}`;
  }
}
function criarConta() {
  const tipo = document.getElementById("tipoConta").value.toLowerCase();
  const nome = document.getElementById("nome").value;
  const banco = document.getElementById("banco").value;
  const numero = document.getElementById("numero").value;
  const saldo = document.getElementById("saldo").value;
  const especial = document.getElementById("especial").value;
  const datavenc = document.getElementById("datavenc").value;
  let conta;
  if (tipo === "corrente") {
    conta = new Corrente();
    conta.saldoEspecial = especial;
  } else if (tipo === "poupanca") {
    conta = new Poupanca();
    conta.juros = especial;
    conta.dataVencimento = datavenc;
  } else {
    document.getElementById("resultadoConta").innerText = "Tipo de conta inválido.";
    return;
  }

  conta.nome = nome;
  conta.banco = banco;
  conta.numero = numero;
  conta.saldo = saldo;

  document.getElementById("resultadoConta").innerText = conta.exibir();
}
