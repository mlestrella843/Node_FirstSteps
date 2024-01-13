const { error } = require('node:console');
const fs = require('node:fs');

//* Para leer el directorio completo
fs.readdir('.', (err, files) => {
    if(err) {
        console.error('Error al leer el directorio', err)
        return;
    }
    
    files.forEach(file=> {
        console.log(file);
    })
})