const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const port = 7002

app.use(bodyparser.text())
app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(port, (req, res) => {
    console.log("http server run at" + port)
})