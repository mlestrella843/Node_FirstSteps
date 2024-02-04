const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 1234
const ditto = require('./pokemon/ditto.json')

app.disable('x-powered-by')

//El grab beneficio de express es qye a difrenecia de un server http puro
//detecta el content tyoe automaticamente. Si es un elemento html o un json, por ejemplo.

//Ademas otro beneficio es de las rutas.
app.get('/', (req,res) => {
//    res.send('<h1>My Page here</h1>')
   res.json({ message: "hola mundo"})
})

app.get('/pokemon/ditto', (req,res) => {
       res.json(ditto)
    })

app.post('/pokemon', (req,res) => {
    let body = ''

    req.on('data', chunk => {
        body += chunk.toString()
    })
    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        res.end(JSON.stringify(data))
    })
})

//cuando usamos .use significa que para todas las acciones o metodos
//si se escribe mal la api, dara un error de Not Found
app.use( (req,res) => {
    res.status(404).send('<h1>404 Error</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`)
})