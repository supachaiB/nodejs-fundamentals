# Setup NodeJS 
### การติดตั้ง Node.js
1. ติดตั้ง nodeJS จากเว็บไซต์ แล้วเช็ค node -v
2. สร้างโปรเจค vscode และเริ่มใช้คำสั่ง npm ได้
npm i, npm install

3. app.js เป็นศูนย์กลางการจัดการ route และรัน Server ง่าย ๆ ด้วย ``` node app.js```


### เพิ่มเติม
Layers ของโลก Software Development
1. Language (Core) 
    - ภาษาโปรแกรม
    - กฎเกณฑ์พื้นฐาน
2. Library
    - ชุดโค้ดที่แก้ปัญหาเฉพาะเรื่อง เช่น axios (เอาไว้ดึงข้อมูล), bcrypt (เอาไว้เข้ารหัส)"
3. Framework 
    - โครงสร้าง กรอบความแนวคิด ชุดเคร่องมือสำเร็จรูป 
4. Platform / Runtime 
    - ความหมายรวม สภาพแวดล้อมที่จำเป็นสำหรับการรันโปรแกรมหรือแอปพลิเคชันให้ทำงานได้จริง โดยรวมถึงระบบปฏิบัติการ, ไลบรารี, และทรัพยากรต่างๆ ที่โปรแกรมต้องการเพื่อทำงานอย่างมีประสิทธิภาพ
- Platform สภาพแวดล้อมทั้งหมดที่สนับสนุนการทำงานของซอฟต์แวร์
    - หน้าที่ เป็นฐานรากที่ทำให้แอปพลิเคชันสามารถถูกพัฒนาและติดตั้งใช้งานได้บนอุปกรณ์และระบบต่างๆ ทั้งฮาร์ดแวร์และระบบปฏิบัติการและไลบรารีซอฟต์แวร์ต(Cross-Platform). และไลบรารีซอฟต์แวร์ต
    - ตัวอย่าง ทั้งฮาร์ดแวร์และระบบปฏิบัติที่เกี่ยวข้อง. 
    
        เช่น Windows, Linux, macOS, Android, iOS, Web (Browser). 
    - ตัวอย่าง ไลบรารีซอฟต์แวร์ต

        เช่น Windows มี .NET Framework, Windows API.
- Runtime Environment คือส่วนที่ใช้ในการแปลและรันโค้ดของภาษาโปรแกรม 

### Javascript Layer ล่ะ
ในที่นี้
1. Language (core) - JavaScript (ES6+)
2. Library - npm Packages
3. Framework (backend) - Express.js, NestJS, Koa, Meteor.js, Next.js 
4. Platform / Runtime - Node.js Runtime

Nodejs ไม่ใช่ภาษาและไม่มี Framework ซึ่ง NodeJS เป็น Runtime Enviroment

Framework เป็นกรอบการทำงานของภาษา ในที่นี้คือ Javascript