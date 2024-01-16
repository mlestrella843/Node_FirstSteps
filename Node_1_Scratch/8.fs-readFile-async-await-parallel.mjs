
//* Esta app es Asincrona-parallel, .

import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./file.txt', 'utf-8' ),
    readFile('./file2.txt', 'utf-8' )
]).then( ([text,secondText]) => {
    console.log('Primer texto:', text);
    console.log('Segundo texto:', secondText);
})


