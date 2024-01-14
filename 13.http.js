const http = require('node:http')

const server = http.createServer((req,res) => {
    console.log('request received')
    res.end('Hola Mundo')
})

//* Cuando escogemos el puerto 0, le indicamos que escoge el primer puesto vacio que encuentre.
//* En la vida real, para produccion esta practica no es recomendable, pues necesitas un puerto fijo
//* que siempre este disponible para tu aplicacion.
// server.listen(0, () => {
//     console.log(`Server listen on port http://localhost:${server.address().port}`)
// })

//* Puerto fijo para el servidor
server.listen(3002, () => {
    console.log('Server listen on port 3002')
})