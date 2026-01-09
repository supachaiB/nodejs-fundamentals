const express = require('express')
const router = express.Router()
const HttpStatus = require('../utils/httpStatus')

//mock data
const users = [
    {
        id: 1,
        name: "joe",
        age: 35
    },
    {
        id: 2,
        name: "joy",
        age: 24
    }
]

//middleware read body (json)
router.use(express.json())

//res.send -> test server
router.get('/ping', (req, res) => {
    res.send('pong pong')
})

// req.params -> get id
// res.json 
router.get('/users/:id', (req, res) => {
    const id = req.params.id

    res.json({
        message: 'get user by id',
        id: id
    })
})

// req.query -> /search?name=xxx&age=xx,หาบางตัว ?name=xxx , ?age=xx
/**
  data เลขเป็น number -> ส่งผ่าน http (query string 100%) -> แปลงเเป็น number ใน logic
  ทำไมต้องแปลงเป็น string ก่อน เพราะ string = ภาษากลางที่เข้าใจง่ายสุด และสากลที่สุด เหมือนเป็นจุดคัดกรอง  **/
router.get('/search', (req, res) => {
    let { name, age } = req.query

    //แปลง age => number
    if (age !== undefined) {
        age = Number(age)
        if (Number.isNaN(age)) {
            return res.status(400).json({
                message: 'age must be a number'
            })
        }
    }

    let result = users

    //filter by name
    if (name) {
        result = result.filter( u => u.name === name)
    }

    //filter by age
    if (age !== undefined) {
        result = result.filter(u => u.age === age)
    }

    res.json({
        message: 'search result',
        query: {
            data: result
        }
    })
})

//req.body and res.status
router.post('/user', (req, res) => {
    const body = req.body
    
    res.status(HttpStatus.CREATED.code).json({
        message: HttpStatus.CREATED.message,
        data: body
    })
})

//req.headers -> ใช้ กำหนด บริบท / กติกา / ตัวตน
router.get('/headers', (req, res) => {
    const userAgent = req.headers['user-agent']

    res.json({
        message: "request info",
        headers: userAgent
    })
})

module.exports = router;

/**
send - ส่งข้อความ
body - ข้อมูลหลัก
query - เงื่อนไข
params - ชี้ resource
status - ผลลัพธ์
json - ส่งข้อมูล
headers - บริบท
**/