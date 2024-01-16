//* in this way the code will be executed as Sync way. Instruction by instruction.
//* Promises
const fs = require('node:fs/promises')

console.log('Reading the First file...');
fs.readFile('./file.txt', 'utf-8')
    .then(text=>{
        console.log('Primer Texto: ', text);
    })

console.log('Doing things meanwhile the system Read the file');

console.log('Reading the Second file...');
fs.readFile('./file2.txt', 'utf-8')
    .then(text=>{
        console.log('Second Text: ', text);
    })