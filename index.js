
const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome.. Testing alternatives to heroku')
})

app.listen( PORT, () => {
    console.log('listening on port: ' + PORT)
})

