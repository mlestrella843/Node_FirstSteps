const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req,res) => {
    res.setHeader('content-Type', 'text/html; charset=utf-8')
    if(req.url === '/'){
        res.end('<h1>Welcome Mi Página</h1>')
    }else if(req.url === '/imagen-maria-super-linda.png'){
        fs.readFile('./maria.png', (err, data) => {
            if(err){
                res.statusCode=500
                res.end('<h1>500 Internal Server Error</h1>')
            }else{
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })
    }else if(req.url === '/contacto'){
        res.statusCode = 200 // es ok
        res.end('<h1>Contact</h1>')
    }else{
        res.statusCode = 404 // es ok
        res.end('<h1>Not Found</h1>')
    }
}

const server = http.createServer(processRequest)

// Aqui podemos importar el modulo de findAvailablePort para que nos busque el puerto deseado.
// Podemos especificarle un puerto deseado y el nos dira si esta disponible o no.
    server.listen(desiredPort, () => {
        console.log(`Server listening port http://localhost:${desiredPort}`)
    })