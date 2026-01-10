# Request and Responsive

## สรุปง่าย ๆ
send	- ส่ง response กลับไปยัง client

body	- ข้อมูลหลักที่ client ส่งมา

query	- เงื่อนไข / ตัวเลือกเพิ่มเติม

params	- ตัวชี้ resource ใน URL

status	- ผลลัพธ์ของ request

json	- ส่งข้อมูลในรูปแบบ JSON

headers	- บริบทของ request/response


## ตัวอย่าง

เราจะเก็บ ค่าของ httpStatus ไว้ที่ utils

เพราะ uitls มีไอเดียเป็นที่เก็บฟังก์ชั่นหรือค่าที่ใช้ซ้ำ และ ไม่ถูกกับ business logic ใดเฉพาะ

utils/httpStatus.js --> นำไปใช้งาน routes/4httpStatus.js
