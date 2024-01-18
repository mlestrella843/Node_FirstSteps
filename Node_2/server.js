const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req,res) => {
    console.log('request received: ', req.url)
    res.end('Hola Mundo')
})

//* Aqui podemos importar el modulo de findAvailablePort para que nos busque el puerto deseado.
//* Podemos especificarle un puerto deseado y el nos dira si esta disponible o no.
    server.listen(desiredPort, () => {
        console.log(`Server listening port http://localhost:${desiredPort}`)
    })
