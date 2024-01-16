//* Esta app es Asincrona-Secuencial, pues ejecuta todo secuencialmente
//* No entiendo mucho entonces el uso o la diferencia con el sincrono.

import { readFile } from 'node:fs/promises';

console.log('Reading the First file...');
const text = await readFile('./file.txt', 'utf-8')
console.log('Primer texto: ', text);

console.log('Doing something meanwhile');

console.log('Reading the Second file...');
const secondText = await readFile('./file2.txt', 'utf-8')
console.log('Segundo texto: ', secondText);




