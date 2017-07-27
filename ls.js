var fs = require('fs');

var directorio = process.argv[2];
var ext = process.argv[3];
var pat = RegExp('\\.' + ext + '$');

file = fs.readdir(directorio, function(err, archivos) {
  for (i = 0; i < files.length; i++) {
    if (pat.test(archivos[i])) {
      console.log(archivos[i]);
    }
  }
});