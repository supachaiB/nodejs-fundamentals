const express = require('express')
const app = express()
const HttpStatus = require('../utils/httpStatus')

app.use(express.json())

let products = [
    { id: 1, name: "Pen"},
    { id: 2, name: "Table"}
]

//200
app.get('/products', (req, res) => {
    res.status(HttpStatus.OK.code).json({
        message: HttpStatus.OK.message,
        data: products
    })
})

//400 and 201
app.post('/product', (req, res) => {
    const { name } = req.body
    // 400 check name
    if (!name) {
        return res.status(HttpStatus.BAD_REQUEST.code).json({
            message: HttpStatus.BAD_REQUEST.message
        })
    }

    // count id auto
    const newProduct = { id: products.length + 1, name }
    products.push(newProduct)

    // 201 create post
    res.status(HttpStatus.CREATED.code).json({
        message: HttpStatus.CREATED.message,
        data: newProduct
    })
})

//409 shot -> id
app.put('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = products.findIndex(p => p.id === id) 

    if (index === -1) {
        return res.status(HttpStatus.NOT_FOUND.code).json({
            message: HttpStatus.NOT_FOUND.message
        })
    }

    const updatedProduct = { id, ...req.body }
    users[index] = updatedProduct
})

const port = 8003
app.listen(port, () => {
    console.log('http server run at '+ port)
})

//422 ไม่ต้องใช้ก็ได้เพราะใช้ 409