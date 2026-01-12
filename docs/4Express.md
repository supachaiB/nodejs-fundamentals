# Express 

**Express** เป็น Framework เว็บที่ได้รับความนิยมสูงสุดสำหรับ **Node.js**  

ใช้สำหรับสร้า**Web Application** และ **REST API** โดยเน้นความเรียบง่าย ยืดหยุ่น และขยายต่อได้ง่าย

## คุณสมบัติหลักของ Express.js
- ใช้งานง่าย (Minimal & Simple)
- ขนาดเล็ก
- ปรับแต่งได้ตามต้องการ
- เหมาะทั้งโปรเจกต์เล็กและโปรเจกต์ขนาดใหญ่

## Express Core Fundamentals

### <mark>Routing</mark>

คำศัพท์ที่มักทำให้สับสน:
- routing
- route
- routes
- router



### 1. Routing

**Routing** คือ "แนวคิดหรือระบบ" ในการกำหนดว่า

> เมื่อ User เข้ามาที่ URL นี้  
> ด้วย HTTP Method นี้  
> Server ควรทำอะไรต่อ

ใช้เรียกแทน **ระบบจัดการเส้นทางทั้งหมดของแอปพลิเคชัน**


### 2. Route
**Route** คือ *หนึ่งเส้นทาง*  
ประกอบด้วย:
- URL (Path)
- HTTP Method

ใช้ในโค้ดเพื่อระบุจุดรับ–ส่งข้อมูลแบบเฉพาะเจาะจง


**ตัวอย่าง: Route หน้าแรก**
```js
app.get('/', (req, res) => {
  res.send('Home Page')
})
```


### Routes 
**Routes** เป็น **กลุ่มของเส้นทาง (URL paths) ทั้งหมด** ในแอปพลิเคชัน  
โดยทั่วไปมักใช้เป็นชื่อ **โฟลเดอร์** ในโปรเจกต์ (เช่น `routes/`)  
เพื่อเก็บไฟล์ Router ย่อย ๆ แยกตามหน้าที่ของระบบ



## Router
**Router** คือ “เครื่องมือ” ที่ Express.js เพื่อใช้ **แยก Route ออกเป็นกลุ่มหรือเป็นไฟล์ย่อย**  
ช่วยให้โค้ดสะอาด อ่านง่าย และดูแลรักษาได้ง่ายขึ้น

## ใช้ Router เมื่อ
ใช้เมื่อ:
- โปรเจกต์เริ่มใหญ่ขึ้น
- มี Route หลายกลุ่ม เช่น User, Product, Order
- ไม่ต้องการให้ `app.js` ยาวและรกเกินไป

Router จะช่วยแยกความรับผิดชอบของแต่ละ Route ออกเป็นคนละไฟล์

## แนวคิด Router
- `app.js` ทำหน้าที่เป็น **ศูนย์กลางของแอป** 
- Router แต่ละไฟล์ ทำหน้าที่จัดการ Route ของตัวเองแล้ว export Router
- `app.js` จะ import Router เหล่านี้มาเชื่อมต่อเข้าด้วยกัน



## ตัวอย่าง `routes/2sentText.js`

``` js 
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world')
})


module.exports = router;

```

main folder `app.js`

ที่นี่จะนำ `Router` จากไฟล์ต่าง ๆ มา เชื่อมต่อ เข้ากับตัวแอปหลัก

``` js
const express = require('express')
const app = express()
app.use(logger)
// middleware basic
app.use(express.json());

// import route modules
const sentText = require('./routes/2sentText');
app.use('/sent-text', sentText);

app.listen(3000, () => {
  console.log('Server running');
});
```



# Request & Response

<mark> Request & Response </mark>

- **send**  
  ส่ง response กลับไปยัง client

- **body**  
  ข้อมูลหลักที่ client ส่งมา (เช่น form, JSON)

- **query**  
  เงื่อนไขหรือตัวเลือกเพิ่มเติมที่มากับ URL  
  ตัวอย่าง: `/users?page=1`

- **params**  
  ตัวชี้ resource ใน URL  
  ตัวอย่าง: `/users/:id`

- **status**  
  ผลลัพธ์ของ request (HTTP Status Code)

- **json**  
  ส่งข้อมูลกลับในรูปแบบ JSON

- **headers**  
  บริบทของ request / response  
  เช่น token, content-type

- **method**  
  ดูว่า request มาทำอะไร  
  เช่น `GET`, `POST`, `PUT`, `DELETE`


<mark> Example </mark>

## การจัดเก็บ httpStatus

เราจะเก็บค่าของ `httpStatus` ไว้ที่ `utils`  

**เหตุผล**
- `utils` มีแนวคิดเป็นที่เก็บฟังก์ชันหรือค่าที่ใช้ซ้ำ
- ไม่ผูกกับ business logic ใดเป็นการเฉพาะ
- ทำให้โค้ดอ่านง่าย และดูเป็นระบบ

### การนำไปใช้งาน
- ประกาศค่าที่ใช้ซ้ำใน `utils/httpStatus.js`
- import ไปใช้ใน `routes/httpStatus.js`


<mark>Middleware</mark>

## Middleware คืออะไร

Middleware คือ **ฟังก์ชันที่ทำงานทุกครั้งที่มี request เข้ามา**  
ทำหน้าที่จัดการหรือกรอง request **ก่อนจะไปถึง controller**


## ตัวอย่าง: Logger Middleware

### logger.middleware.js
```js
module.exports = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};
```
middleware ตัวนี้ทำหน้าที่ log HTTP method และ URL
ทุกครั้งที่มี request เข้ามา
จากนั้นเรียก next() เพื่อให้ request ไหลต่อไปยัง middleware หรือ controller ถัดไป

``` js
const logger = require('./middlewares/logger.middleware')
app.use(logger)
```
export ใช้



