## word
async, await, non-blocking, promise, callback, event loop, try/catch, throw, express crash, unhandled rejection, global error handler, service

## Solve the problem
<mark>Synchronous</mark> เป็นธรรมชาติของโค้ด โดยโค้ดรันทีละบรรทัด  
- ถ้าเจองานมันจะต้องค่อย ๆ process ไป
- ทีละอัน 1 ไป 2 ไป 3
- server จะ หยุดรอ งานนี้นเสร็จก่อนถึงทำรรทัดต่อไป

เรียกว่า Single Thread คือการทำงานของระบบที่ประมวลผลงานทีละอย่าง(one at a time) โดยใช้เธรด (Thread) เพียงชุดเดียวในกระบวนการ (Process) ทำให้ทำงานได้เรียงลำดับ

ปัญหามันช้า ถ้าสเกลใหญ่ต้อง process นาน

<mark>Asynchronous</mark> เปรียบเหมือน การแยกร่าง
- โค้ด async สามารถ สั่งให้ทำงานพร้อมกันหลายงาน
- <mark>await</mark> เหมือนเป็นตัวเบรคให้รอ ทำเฉพาะผลลัพธ์ของงานนั้นที่ต้องให้รอ แต่ server ทำงานอื่นได้

Async จะทำงานได้ต้องพึ่ง Event Loop

Event Loop แก้ปัญหา การบล็อค(Blocking) ของการทำงานแบบ Synchronous 

โดย Event Loop จัดการงาน Asynchronous ทำให้โปรแกรมไม่ค้างรอ. 

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
<mark>Promise</mark> ถูกสร้างมาแก้ callback hell 
`.then().catch` ข้อดี
- อ่านง่ายขึ้น
``` js
getData()
    .then(a => getOtherData(a))
    .then(b => doSomething(b))
    .then(c => console.log(c))
    .catch(err => console.error(err));
```
