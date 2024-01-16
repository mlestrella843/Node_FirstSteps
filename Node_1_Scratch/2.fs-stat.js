const fs = require('node:fs') //* Since Node 16, is recomended put prefix node: and then native module.

const stats = fs.statSync('./file.txt');

console.log(
    stats.isFile(), //* is is a File
    stats.isDirectory(), //* Is it a Directory?
    stats.isSymbolicLink(), //* is a Link?
    stats.size, //* size in bytes?
    )