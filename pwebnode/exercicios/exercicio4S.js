const fs = require('fs'); // carregando modulo filesystem
const data = fs.readFileSync('file.txt');
//a execução é bloqeuada aqui até o arquivo ser lido.
console.log(data.toString());