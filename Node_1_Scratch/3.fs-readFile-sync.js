//* in this way the code will be executed as Sync way. Instruction by instruction.
const fs = require('node:fs')

console.log('Reading the First file...');
const text = fs.readFileSync('./file.txt', 'utf-8');
console.log(text);

console.log('Doing things meanwhile the system Read the file');

console.log('Reading the Second file...');
const text2 = fs.readFileSync('./file2.txt', 'utf-8');
console.log(text2);

