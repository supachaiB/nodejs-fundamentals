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


คำที่อาจจะทำให้สับสน routing, router, routes, route ใช้ที่ไหน อย่างไรบ้าง

1. Routing คือ "แนวคิดหรือระบบ" ในการกำหนดว่าเมื่อ User เข้ามาที่ URL นี้ ด้วย Method แล้ว Server จะต้องทำอะไรต่อ

ใช้เรียกแทน "ระบบการจัดการเส้นทาง" ทั้งหมดของแอปพลิเคช้น

2. Route คือ "หนึ่งเส้นทาง" ที่ประกอบด้วย URL (Path) และ HTTP Method

ใช้ในโค้ดเพื่อระบุจุดรับส่งข้อมูลเฉพาะเจาะจง

ตัวอย่าง โค้ดนี้คือ 1 Route สำหรับหน้าแรก
```js 
app.get('/', (req, res) => {
    res.send('Home Page')
})
```

3. Routes เป็น "กลุ่มของเส้นทางทั้งหมด"

มักใช้เป็นชื่อ Folder ใน Project (เช่น routes/) เพื่อเก็บไฟล์ Router ย่อย ๆ ทั้งหมด

4. Router เป็น "เครื่องมือ" ที่ Express ให้มาเพื่อใช้แยก Route ออกเป็นกลุ่มๆ หรือเป็นไฟล์ย่อยๆ เพื่อความสะอาดของโค้ด

ใช้เมื่อโปรเจกต์เริ่มใหญ่ขึ้น แล้วเราต้องการแยก Route ของ User, Product, หรือ Order ออกจากกันคนละไฟล์

ตัวอย่างการใช้ เช่น Project ใหญ่ขึ้น app.js จะเป็นศูนย์รวมของ Route ในการกำหนดเส้นทาง ฉะนั้น Router จึงบทบาทในการเป็นตัวไปต่อเชื่อมกับ Route ทั้งหมดที่จะมาต่อ app.js

ไฟล์ย่อย `routes/2sentText.js`
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

<mark> Request & Response </mark>

send	- ส่ง response กลับไปยัง client

body	- ข้อมูลหลักที่ client ส่งมา

query	- เงื่อนไข / ตัวเลือกเพิ่มเติม

params	- ตัวชี้ resource ใน URL

status	- ผลลัพธ์ของ request

json	- ส่งข้อมูลในรูปแบบ JSON

headers	- บริบทของ request/response

method - ดู request ว่ามาทำะไร

<mark> Example </mark>

เราจะเก็บ ค่าของ httpStatus ไว้ที่ utils

เพราะ uitls มีไอเดียเป็นที่เก็บฟังก์ชั่นหรือค่าที่ใช้ซ้ำ และ ไม่ถูกกับ business logic ใดเฉพาะ

utils/httpStatus.js --> นำไปใช้งาน routes/4httpStatus.js


<mark> Middleware </mark>
Middleware คือฟังก์ชันที่ทำงานทุกครั้งที่มี request เข้ามา
เพื่อจัดการหรือกรอง request ก่อนจะไปถึง controller

logger.middleware.js
``` js
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



