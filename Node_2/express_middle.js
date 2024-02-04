const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 1234;
const ditto = require('./pokemon/ditto.json');

app.disable('x-powered-by');

//El grab beneficio de express es qye a difrenecia de un server http puro
//detecta el content tyoe automaticamente. Si es un elemento html o un json, por ejemplo.

//Ademas otro beneficio es de las rutas.
app.get('/', (req,res) => {
//    res.send('<h1>My Page here</h1>')
   res.json({ message: "hola mundo"});
});

app.get('/pokemon/ditto', (req,res) => {
    res.json(ditto);
});

// MIDLEWARES DE FORMA MANUAL, ES DECIR SIN EXTRA USO DE FUNCIONES DE EXPRESS
// Los middleares son procesos o funciones que queremos monitorear o controlar o ejecutar
// antes de que ir a las rutas.
// Aqui se colocan toas las apis que quieras chequear
// Pueden ir entre rutas o al final de las rutas
// Como concepto es algo que INTERCEPTA la request, se ejecuta entre la request y la response, y devuelve o permite algio
app.use((req, res, next) => {
    // Trackear la request hasta la base de datos
    if (req.method.toLowerCase() !== 'post') return next();
    if (req.headers['content-type'] !== 'application/json') return next();

    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
        console.log("Este es el body", body);
    });
    req.on('end', () => {
        const data = JSON.parse(body);
        data.timestamp = Date.now();
        console.log("Esta es la data", data);
        req.body = data;
        next();
    });
});


//Este es post para crear un Pokemon
app.post('/pokemon', (req,res) => {
    res.status(201).json(req.body);
});


//cuando usamos .use significa que para todas las acciones o metodos
//si se escribe mal la api, dara un error de Not Found
app.use( (req,res) => {
    res.status(404).send('<h1>404 Error</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});