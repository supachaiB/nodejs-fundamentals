const express = require('express')
const app = express()

const port = 8001

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, (req, res) => {
    console.log('http server run at '+ port)
})