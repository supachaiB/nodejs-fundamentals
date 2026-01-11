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

- async สั่งทิ้งไว้แล้วไปสั่งงานถัดไปทันที
- โค้ด async การทำงานเกิดในระดับเสี้ยววินาที มันคือการสลับกันทำ(Concurrent) ทำให้ดูเหมือนเริ่มทำงานพร้อมกันหลายงาน

<mark>await</mark>

-  คำสั่งที่ใช้ รอ (pause) การทำงานของฟังก์ชันแบบไม่พร้อมกัน (Asynchronous) จนกว่าคำสั่งข้างในจะทำงานเสร็จ เหมือนกับบอกว่า "รอตรงนี้จนกว่าจะได้ผลลัพธ์ก่อน แล้วค่อยไปต่อ"

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

async = ให้เริ่มทำงานพร้อมกันสั่งให้เริ่มงานหลายงานพร้อมกันโดยไม่บล็อก main thread เช่น 1 2 3 4 5 (เสมือนคนทำงาน)

callback = โค้ดที่ถูกผูกไว้กับ async task และถูก Event Loop เรียกกลับมารันเมื่อ task เสร็จ เพื่อส่ง response (เสมือนคนส่งข้อมูล)



### Promise Chining
Callback Hell ในยุคก่อน async/await มีปัญหาเรื่อง Inversion of Control + Flow Control
- ไม่รู้ว่า -> Callback จะถูกเรียกกี่ครั้ง,ถูกเรียกไหม, ตอนไหน 
- ซ้อนกันหลายชั้น อ่านยาก
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
- nesting เพิ่มตาม logic
- แก้ทีหลังยาก
- ถ้าจะ error handing ต้องทำซ้ำทุกซ้ำ, ถ้าลืมชั้นหนึ่งจะเกิด bug
- throw ใช้ไม่ได้ข้าม async boundary

<mark>Promise</mark> ถูกสร้างมาแก้ปัญ หาเชิงโครงสร้างของ callback 

``` js
getData()
    .then(a => getOtherData(a))
    .then(b => doSomething(b))
    .then(c => console.log(c))
    .catch(err => console.error(err));
```
- flow ชัด
- อ่านจากบนลงล่าง
- error รวมศูนย์
- chain แตกง่าย / refactor ง่าย

### Promise.all
เดิมทีในการจัดการงานอะซิงโครนัส เราอาจต้องเขียนโค้ดที่ซ้อนกันไปมา (Callback Hell) หรือต้องใช้ await ทีละตัว ซึ่งจะทำให้ทำงานช้าลงเมื่อมีงานเยอะๆ. 

ตัวอย่างปัญหา: คุณต้องการดึงข้อมูลผู้ใช้และรายการสินค้าจากสอง API พร้อมกัน แต่ต้องรอให้ได้ข้อมูลทั้งสองชุดก่อนจะนำไปแสดงผลบนหน้าเว็บ. ถ้าเขียนแบบปกติอาจต้องรอ API แรกเสร็จก่อนแล้วค่อยเรียก API ที่สอง. 

Promise.all รับอาร์เรย์ของ Promises และคืนค่าเป็น Promise ใหม่ที่จะ:

- สำเร็จ (Resolve): เมื่อทุก Promise ในอาร์เรย์สำเร็จ พร้อมค่าที่ resolve ของแต่ละ Promise เรียงตามลำดับ.
- ล้มเหลว (Reject): เมื่อมี Promise เพียงหนึ่งเดียว ถูกปฏิเสธ (reject) มันจะหยุดและคืนค่า error ของ Promise ที่ล้มเหลวตัวแรกทันที (Fail-fast). 

สถานการณ์ที่เหมาะสม (When to Use)

Parallel Fetching: ดึงข้อมูลหลายๆ แหล่ง (API, ไฟล์) ที่ไม่เกี่ยวข้องกันพร้อมกัน เช่น ดึงข้อมูลโปรไฟล์ผู้ใช้, รายชื่อเพื่อน, และโพสต์ล่าสุดพร้อมกัน.
All-or-Nothing: เมื่อทุกงานจำเป็นต้องสำเร็จจึงจะดำเนินการต่อได้ เช่น การสร้างบัญชีผู้ใช้ที่ต้องยืนยันอีเมลและเบอร์โทรศัพท์พร้อมกัน. 