function parte1(){
    for(var i =1;i<=10;i++){
        console.log("pirimeira parte " + i)
    }
}
 setTimeout(parte1, 2000)

 const fs =  require('fs').promises
 fs.readFile('File.txt', 'utf8')
 .then(data=>{
    const registros = data.split('\n');
    registros.forEach((registro, index) => {
        console.log("segunda parte: " + registro + " " + index);

    })
 })

 .catch(err=>{
    console.errror("Erro ao ler o arquivo:", err)
 })