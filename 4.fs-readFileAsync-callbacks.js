//* in this way the code will be executed as Sync way. Instruction by instruction.
//* Callbacks
const fs = require('node:fs')

console.log('Reading the First file...');
fs.readFile('./file.txt', 'utf-8', (err,text) => {
    console.log('Primer texto:' , text);
});

console.log('Doing things meanwhile the system Read the file');

console.log('Reading the Second file...');
fs.readFile('./file2.txt', 'utf-8', (err, text) => {
    console.log('Second Text: ', text);
});
