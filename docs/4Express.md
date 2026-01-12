# Express 

**Express** เป็น Framework เว็บที่ได้รับความนิยมสูงสุดสำหรับ **Node.js**  

ใช้สำหรับสร้า**Web Application** และ **REST API** โดยเน้นความเรียบง่าย ยืดหยุ่น และขยายต่อได้ง่าย

## คุณสมบัติหลักของ Express.js
- ใช้งานง่าย (Minimal & Simple)
- ขนาดเล็ก
- ปรับแต่งได้ตามต้องการ
- เหมาะทั้งโปรเจกต์เล็กและโปรเจกต์ขนาดใหญ่

# Express Core Fundamentals

## <mark>Routing</mark>

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



 ## <mark>Request & Response</mark>


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


## <mark>Middleware</mark>

### Middleware คืออะไร

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


-------------------

# Data Handling 
การจัดการข้อมูลและการตั้งค่า (Data Handling)

## <mark>Body Parsing</mark>
Body Parsing การใช้แก้ปัญหาอะไรจากปัญหาเดิม หลักการ เนื้อหาอะไรบ้าง เยอะไหม 

### ปัญหาเดิม
เดิมทีข้อมูลที่ส่งมาจาก HTTP POST request จะค่อย ๆ ทยอยมาเป็นก้อนเล็ก ๆ (Chunks) ของ Buffer

- เขียนโค้ดเหนื่อย 

คุณต้องมานั่งเขียน Event Listener 
req.on('data') และ req.on('end') เพื่อเอา Buffer มาต่อกันเอง

- ต้องแปลง Metadata

 ต้องมานั่งลุ้นว่าข้อมูลที่ส่งมาเป็น JSON, เป็น Form, หรือเป็น Text แล้วต้องใช้ JSON.parse() เอง ซึ่งถ้าข้อมูลผิดพลาด Server ก็อาจจะค้างหรือ Error ไปเลย

### หลักการทำงาน
Body Parser แปลง Data Stream ให้เป็น Object ที่ใช้ง่าย จะแก้ปัญหาความยุ่งยากในการเขียนโค้ดรับส้งข้อมูลดิบ 

### เนื้อหา เยอะไหม เรียนอะไรบ้าง
Express เวอร์ชันปัจจุบัน ตัวมันเองมี Built-in Body Parser มาให้ 2 ตัวหลัก 

ถ้าจะนับ "ประเภทการส่งข้อมูล" ที่ต้องจัดการ จะมี 3 แบบหลัก

1. `express.json()`

ใช้สำหรับรับข้อมูลจาก API หรือ Frontend Framework (เช่น React, Vue) ที่ส่งค่ามาเป็น JSON

```js
app.user(express.json()); // สั่งให้ใช้ Middleware นี้ทั้งแอป
```

2. express.urlencoded()

ใช้สำหรับรับข้อมูลจาก HTML Form (แบบดั้งเดิมที่กดปุ่ม Submit)

ต้องใส่ Option { extended: true } เพื่อให้รองรับ Object ที่ซับซ้อนได้

```js
app.use(express.urlencoded({ extended: true }));
```

3. ข้อมูลประเภทไฟล์ (Multipart Data)

express.json() จัดการไฟล์ (รูปภาพ/วิดีโอ) ไม่ได้ ต้องใช้ Library เสริมที่ชื่อว่า Multer

Multer ไม่ใช่ Built-in ของ Express ครับ แต่มันเป็น Middleware ภายนอก (Third-party) ที่เราต้องติดตั้งเพิ่มเอง `npm install multer`

**สรุปการใช้งาน**

Body Parsing = การแปลง

`express.json()` = รับข้อมูล API

`express.urlencoded()` = รับข้อมูล HTML Form

Built-in Body Parser ทั้ง 2 ตัว รับแค่ ตัวหนังสือ/ตัวเลข

ถ้าจะทำ ระบบอัปโหลดรูป/ไฟล์ ต้องมีติดตั้ง `Multer`

## <mark>Static Files</mark>

### ปัญหาเดิม
ถ้าไม่มีระบบ Static Files แล้ว ต้องการให้ User เข้าไปโหลดรูป logo.png จาก Server

ปัญหา 
1. ต้องนั่งเขียน Route แยกให้ทุก ๆ ไฟล์ เช่น 100 รูป ต้องเขียน 100 ครั้ง
```js
app.get('/images/logo.png', (req, res) => {
    res.sendFile(__dirname + '/public/images/logo.png');
});
```

2. ความยุ่งยาก ต้องมาจัดการเรื่อง HTTP Headers เอง เช่น การบอก Browser ว่าไฟล์นี้เป็นประเภทไหน (MIME Type) หรือจะให้จำไฟล์นี้ไว้ในเครื่องนานแค่ไหน (Caching)

### หลักการทำงาน
Express ใช้สิ่งที่เรียกว่า `express.static` ซึ่งเป็น Built-in Middleware เพียงตัวเดียวที่ทำหน้าที่เป็น "พนักงานเฝ้าโกดัง"
1. แค่กำหนด "ชื่อ Folder" ที่ต้องการเปิดเป็นสาธารณะ (ส่วนใหญ่นิยมตั้งชื่อว่า `public`)
2. เมื่อมีคนขอไฟล์มา Express จะเข้าไปเช็คใน Folder นั้นให้โดยอัตโนมัติ
3. ถ้าเจอไฟล์ มันจะส่งไฟล์กลับไปพร้อมตั้งค่า Headers ที่ถูกต้องให้ทันที

### เนื้อหา เยอะไหม เรียนอะไรบ้าง
เนื้อหาหลักมีแค่การตั้งค่า 3 รูปแบบ

1. การใช้งานพื้นฐาน
สมมติมีไฟล์อยู่ที่ `public/css/style.css`

``` js
app.use(express.static('public'));
```

เวลาเรียกใช้ใน HTML: <link rel="stylesheet" href="/css/style.css"> (ไม่ต้องใส่คำว่า /public ใน URL)

2. การใช้ Virtual Path Prefix
บางครั้งเราอยากให้ URL ดูเป็นระเบียบ เช่น ต้องขึ้นต้นด้วย `/static` เสมอ

``` js
app.use('/static', express.static('public'));
```
**คำถามที่น่าสนใจ**

**?หนึ่ง เอา pulic ออก** ให้ user เห็นภาพลวงตา เพื่อความปลอดภัย ถ้าใส่ Prefix ปรับชื่อ Folder ในเครื่องเราเป็นอะไรก็ได้ เช่น `my_secret_assets` แต่คนนอกเห็นเป็น `/static`

**สอง แล้วใส่ static กลับเพื่ออะไร** ดูเองว่า path ไหมมี static คือ req เป็น ไฟล์ภาพ ในเว็บขนาดใหญ่ เราอาจจะมี Path หลายแบบ การใส่ `/static `นำหน้าช่วยให้เรารู้ทันทีว่า Request นี้กำลังขอ "ไฟล์ถาวร" ไม่ใช่การเรียก "API" หรือ "Dynamic Page"

**สาม** ความหมายที่เป็น logic ของ static ช่วยให้แยกความสบสันและชื่อซ้ำ 

static = คงที่, ต่างจาก images = ไฟล์

เวลาเรียกใช้: `href="/static/css/style.css"`

3. การใช้ Absolute Path (ปลอดภัยที่สุด)
เพื่อป้องกันปัญหาเวลาเราสั่งรัน Node.js จาก Folder อื่นแล้วหาไฟล์ไม่เจอ

absolute Path = 'กันการเปลี่ยนเครื่อง' หรือ 'กันการย้ายสภาพแวดล้อม'

``` js
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));
```

**สรุปการใช้งาน**
**Static Files** = ไฟล์ที่ไม่มีการเปลี่ยนแปลง (รูป, CSS, JS ฝั่ง Client, PDF)

**?** 

**?**

## <mark>Template Enginess</mark>

### ปัญหาเดิม

### หลักการทำงาน

### เนื้อหา เยอะไหม เรียนอะไรบ้าง

**สรุปการใช้งาน**
