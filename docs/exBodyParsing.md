

## ตัวอย่างรับข้อมูล API ของ Body Parsing

ไฟล์: `manual-parse.js`

ก่อนใช้ Body Parsing

```js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        // ต้องคอยรับข้อมูลที่ทยอยส่งมาเป็น Chunks
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // เมื่อรับข้อมูลเสร็จแล้วถึงจะนำมาใช้งานได้
        req.on('end', () => {
            const parsedData = JSON.parse(body); // แปลง string เป็น object
            console.log('รับข้อมูลมาว่า:', parsedData);
            
            res.end(`สวัสดีคุณ ${parsedData.name}`);
        });
    } else {
        res.end('ส่ง POST มาหาเราสิ!');
    }
});

server.listen(3000, () => console.log('Server manual วิ่งอยู่ที่พอร์ต 3000'));
```


หลังใช้ Body Parsing (The Modern Way)

ไฟล์: `express-parse.js`

``` js
const express = require('express');
const app = express();

// หัวใจสำคัญ: บรรทัดนี้จะจัดการเรื่องการแงะ Body ให้เราอัตโนมัติ
app.use(express.json()); 

app.post('/user', (req, res) => {
    // ข้อมูลจะถูกเสิร์ฟใส่ req.body มาให้เลย สวยๆ
    const userData = req.body;
    
    console.log('รับข้อมูลมาว่า:', userData);
    res.send(`สวัสดีคุณ ${userData.name} (จาก Express)`);
});

app.listen(3000, () => console.log('Server express วิ่งอยู่ที่พอร์ต 3000'));
```


**manual** 
- ความซับซ้อน ต้องจัดการ Stream และ Buffer เอง
- ความปลอดภัย	ถ้าลืมดัก Error ข้อมูลพัง Server อาจค้าง
- การอ่านโค้ด	อ่านยาก เพราะ Logic ปนกับ Business Flow


**Express**
- เรียกใช้บรรทัดเดียว จบ
- มีระบบจัดการ Error มาตรฐาน
- อ่านง่าย แยกส่วน Middleware ชัดเจน