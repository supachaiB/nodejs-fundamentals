# meaning: Middleware
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