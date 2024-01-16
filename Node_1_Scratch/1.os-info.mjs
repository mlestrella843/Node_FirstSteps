//* usin ES modules con extension de archivo .mjs
import { platform, version, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Info about own Operative System');
console.log('--------------------------------');

console.log('Operative System Name: ', platform());
console.log('Operative System Version: ', version());
console.log('Operative System Architecture: ', arch());
console.log('Operative System CPUS: ', cpus());
console.log('Operative System Free Memory: ', freemem() / 1024 / 1024);
console.log('Operative System Total Memory: ', totalmem() / 1024 / 1024);
console.log('Operative System uptime: ', uptime() / 60 / 60 / 24  + " days");