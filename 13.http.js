const http = require('node:http')
const { findAvailablePort } = require('./14.free-port.js')

const desirePort = process.env.PORT ?? 3000

const server = http.createServer((req,res) => {
    console.log('request received')
    res.end('Hola Mundo')
})


//* Aqui podemos importar el modulo de findAvailablePort para que nos busque el puerto deseado.
//* Podemos especificarle un puerto deseado y el nos dira si esta disponible o no.
findAvailablePort(desirePort).then(port => {
    server.listen(port, () => {
        console.log(`Server listening port http://localhost:${port}`)
    })
})



//* Cuando escogemos el puerto 0, le indicamos que escoge el primer puesto vacio que encuentre.
//* En la vida real, para produccion esta practica no es recomendable, pues necesitas un puerto fijo
//* que siempre este disponible para tu aplicacion.
// server.listen(0, () => {
//     console.log(`Server listen on port http://localhost:${server.address().port}`)
// })

// //* Puerto fijo para el servidor
// server.listen(3002, () => {
//     console.log('Server listen on port 3002')
// })