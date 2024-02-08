const z = require('zod');

const movieSchema = z.object({
    title: z.string({
        invalid_type_error:'Movie must be a string',
        required_error: 'Movie title is required'
    }),
    year: z.number().int().min(1900).max(2024),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().int().min(0).max(10),
    poster: z.string().url({
        message: 'Poster must be a valid url'
    }),
    genre: z.array(
        z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi', 'Crime']),
        {
            required_error: 'Movie genre is required',
            invalid_type_error: 'Movie genre must be an array of enums genre '
        }
    )
})

function validateMovie (object){
    return movieSchema.safeParse(object);
};

module.exports = {
    validateMovie
};