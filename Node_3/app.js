const express = require('express');
const movies = require('./movies.json');
const PORT = process.env.PORT ?? 1234

const app = express();
app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.json({ message: 'Hola mundo'});
});

app.get('/movies', (req,res) => {
    res.json(movies);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});