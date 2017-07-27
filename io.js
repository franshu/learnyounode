var fs = require('fs');

var nombreArchivo = process.argv[2];

archivo = fs.readFileSync(nombreArchivo);

contenido= archivo.toString();

console.log(contenido.split('\n').length - 1);