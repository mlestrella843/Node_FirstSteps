const express = require('express')
const app = express()

const PORT = process.env.PORT ?? 1234

app.get('/', (req,res) => {
   res.status(200).send('<h1>My Page</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`)
})