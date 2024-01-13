//* Los sistemas operativos construyen su path con distintas barras.
//* IOs la barra es /
//* en Windows la barra es \

const path = require('node:path');
console.log(path.sep);

//* Para construir una ruta se usa esta forma
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

//* para obtener exactamente el archivo que se tiene como base
const base = path.basename('/tmp/maria-secrets-password/password.txt');
console.log(base);

//* Para saber el nombre del archivo sin la extension
const fileName = path.basename('/tmp/maria-secrets-password/password.txt', '.txt');
console.log(fileName);

//* para obtener la extension de un archivo
const extension = path.extname('my.super.extension.jpg');
console.log(extension);




