
var resultado = 0;
for (i = 2; i < process.argv.length; i++) {
  resultado += Number(process.argv[i]);
}

console.log(resultado);