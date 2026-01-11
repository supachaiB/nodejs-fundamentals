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
- โค้ด async สามารถ สั่งให้เริ่มทำงานพร้อมกันหลายงาน
- <mark>await</mark> เหมือนเป็นตัวเบรคให้รอ ทำเฉพาะผลลัพธ์ของงานนั้นที่ต้องให้รอ แต่ server ทำงานอื่นได้

Async จะทำงานได้ต้องพึ่ง Event Loop

Event Loop แก้ปัญหา การบล็อค(Blocking) ของการทำงานแบบ Synchronous 

โดย <mark>Event Loop</mark> จัดการงาน Asynchronous ทำให้โปรแกรมไม่ค้างรอ. 

Event Loop เป็นตัวที่ทำให้ <mark>non-blocking</mark> เกิดขึ้น async/Promise เป็นแค่งานที่ถูก Event Loop ควบคุม

ฺBlocking โค้ดต้องรอ - thread ว่างงาน - server ช้า
Non-blocking โค้ดไม่หยุดรอ - thread ทำงานต่อ - server รับงานได้เรื่อย ๆ 

### Callback 
event loop ดูคิวของงานที่เสร็จแล้วและ async จะทำให้สั่งเริ่มทำงานพร้อมกันหลายงาน สุดท้ายต้องการแค่ตัวที่ส่ง res ไปให้ event loop

เลยต้องมีอะไรสักอย่าง ไว้เรียกกลับเมื่อมันเสร็จสิ่งนั้นคือ callback

server ยังไม่ส่ง response จนกว่า async งานจะเสร็จ
callback จะบอกว่า "งานนี้เสร็จแล้ว ส่ง response ได้"


ตัวอย่าง มีงาน 1 2 3 4 5
งาน 1 2 3 4 5 จะเริ่มพร้อมกัน แต่แต่ละ request จะส่ง res ของตัวเอง เมื่อ async งานของมันเสร็จ

ถ้างานเสร็จ เช่น 4 3 1 2 5 เริ่มพร้อมกันก็จริงแต่ 4 3 1 2 5 เสร็จตามลำดับก็จะส่ง res ที่เร็วก่อนคือ 4 3 1 2 5

สรุป

Event Loop = ตัวจัดการลำดับการรันของโค้ด "ว่างานไหนเสร็จแล้ว และมีรันต่อไหม" (เสมือนผู้จัดการ)

async = ให้เริ่มทำงานพร้อมกันสั่งให้เริ่มงานหลายงานพร้อมกันโดยไม่บล็อก main thread เช่น 1 2 3 4 5 (เสมือนพนักงานธรรมดา)

callback = โค้ดที่ถูกผูกไว้กับ async task และถูก Event Loop เรียกกลับมารันเมื่อ task เสร็จ เพื่อส่ง response (เสมือนแรงงานทาส)



### Promise
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
