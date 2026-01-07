const express = require('express')
const app = express()

const port = 7001

app.get('/test', (req, res) => {
    res.send('Hello world')
})

app.get('/test-user', (req, res) => {
    let user = {
        firstname: 'first',
        lastname: 'last',
        age: 14
    }
    res.json(user)
})

app.listen(port, (req, res) => {
    console.log("http server run at" + port)
})