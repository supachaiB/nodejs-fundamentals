## word
async, await, non-blocking, promise, callback, event loop, try/catch, throw, express crash, unhandled rejection, global error handler, service

## Solve the problem
**Synchronous** เป็นธรรมชาติของโค้ด โดยโค้ดรันทีละบรรทัด  
- ถ้าเจองานมันจะต้องค่อย ๆ process ไป
- ทีละอัน 1 ไป 2 ไป 3
- server จะ หยุดรอ งานนี้นเสร็จก่อนถึงทำรรทัดต่อไป

ปัญหามันช้า ถ้าสเกลใหญ่ต้อง process นาน

**Asynchronous** เปรียบเหมือน การแยกร่าง
- โค้ด async สามารถ สั่งให้ทำงานพร้อมกันหลายงาน
- **await** เหมือนเป็นตัวเบรคให้รอ ทำเฉพาะผลลัพธ์ของงานนั้นที่ต้องให้รอ แต่ server ทำงานอื่นได้

Callback hell ในยุคก่อน async/await มีปัญหาที่
- ซ้อนกันหลายชั้น
- อ่านยาก
- maintain ยาก
- error management ยาก
ตัวอย่าง 
``` js
getData(function(a){
    getOtherData(a, function(b){
        doSomething(b, function(c){
            console.log(c)
        })
    })
})
```
**Promise** ถูกสร้างมาแก้ callback hell 
.then().catch ข้อดี
- อ่านง่ายขึ้น
``` js
getData()
    .then(a => getOtherData(a))
    .then(b => doSomething(b))
    .then(c => console.log(c))
    .catch(err => console.error(err));
```