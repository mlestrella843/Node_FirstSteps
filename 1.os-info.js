const os = require('node:os')

console.log('Info about own Operative System')
console.log('--------------------------------')

console.log('Operative System Name: ', os.platform())
console.log('Operative System Version: ', os.version())
console.log('Operative System Architecture: ', os.arch())
console.log('Operative System CPUS: ', os.cpus())
console.log('Operative System Free Memory: ', os.freemem() / 1024 / 1024)
console.log('Operative System Total Memory: ', os.totalmem() / 1024 / 1024)
console.log('Operative System uptime: ', os.uptime() / 60 / 60 / 24 + ' days')