//* Usando Promises
const fs = require('node:fs/promises');

const folder = process.argv[2] ?? '.'; 

fs.readdir(folder)
.then(files => {
        files.forEach(file => {
            console.log(file);
        })
    })
.catch(err => {
        if(err) {
            console.error('Error al leer el archivo', err)
            return;
        }
    })

