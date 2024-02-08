const express = require('express');
const crypto = require('node:crypto');
const movies = require('./movies.json');
const { validateMovie } = require('./schemas/movies');

const PORT = process.env.PORT ?? 1234

const app = express();

app.use(express.json());

app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.json({ message: 'Hola mundo'});
});

app.get('/movies', (req,res) => {
    const { genre } = req.query;
    if (genre) {
        const filterMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLocaleLowerCase())
        )
        return res.json(filterMovies);
    };
    res.json(movies);
});

app.post('/movies', (req,res) => { 
    const result = validateMovie(req.body);
    if(result.error){
        return res.status(400).json({ error: result.error.message });
    }
    const newMovie = {
        id: crypto.randomUUID(),
        ...result.data
    }
    movies.push(newMovie);

    res.status(201).json(newMovie);
})

app.get('/movies/:id', (req,res) => { //path to regexp
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);
    if (movie) return res.json(movie);
    res.status(404).json({ message: 'Movie not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});