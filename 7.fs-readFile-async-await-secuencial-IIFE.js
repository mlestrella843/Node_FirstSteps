//* Esta app es Asincrona-Secuencial, usando IIFE


const { readFile } = require('node:fs/promises');

//IIFE - Inmediatly Invoked Function Expression
( async ()=> {
    console.log('Reading the First file...');
    const text = await readFile('./file.txt', 'utf-8')
    console.log('Primer texto: ', text);

    console.log('Doing something meanwhile');

    console.log('Reading the Second file...');
    const secondText = await readFile('./file2.txt', 'utf-8')
    console.log('Segundo texto: ', secondText);
}

)()

