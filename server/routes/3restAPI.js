const express = require('express')
const router = express.Router();
// const bodyparser = require('body-parser')

//text
// app.use(bodyparser.text())
// app.post('/user', (req, res) => {
//     res.send(req.body)
// })

// global scope
let users = []

// router.use(bodyparser.json())

// post json
router.post('/user', (req, res) => {
    let user = req.body
    users.push(user)
    res.json({
        message: "JSON OKK",
        user: user
    })
})

// + post
let counter = 1
router.post('/userCounter', (req, res) => {
    let userCounter = req.body
    userCounter.id = counter
    counter += 1

    users.push(userCounter)
    res.json({
        message: 'add OK',
        userCounter: userCounter
    })
})

// get users
router.get('/users', (req, res) => {
    res.json(users)
})

// put -> Replace All resource
router.put('/user/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = users.findIndex(u => u.id === id)

    if (index === -1) {
        return res.status(404).json({ message: "User not found"})
    }

    users[index] = {
        id: id,
        ...req.body
    }

    res.json({
        message: "replace OK",
        user: users[index]
    })
    res.send(id) 
})

//patch
router.patch('/user/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = users.findIndex(u => u.id === id)

    if (index === -1) {
        return res.status(404).json({ message: "User not found"})
    }

    users[index] = {
        ...users[index],
        ...req.body
    }

    res.json({
        message: "replace OK",
        user: users[index]
    })
    res.send(id) 
})

module.exports = router;