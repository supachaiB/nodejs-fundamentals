# Setup NodeJS 
### การติดตั้ง Node.js
1. ติดตั้ง nodeJS จากเว็บไซต์ แล้วเช็ค node -v
2. สร้างโปรเจค vscode และเริ่มใช้คำสั่ง npm ได้
npm i, npm install

3. app.js เป็นศูนย์กลางการจัดการ route และรัน Server ง่าย ๆ ด้วย ``` node app.js```


### เพิ่มเติม
Layers ของโลก Software Development
1. Language (Core),ภาษาโปรแกรม,วัตถุดิบดิบ,"กฎเกณฑ์พื้นฐาน (Syntax) เช่น if, else, for และ Core Modules (เช่น fs, http ใน Node.js)"
2. Library,ห้องสมุด,เครื่องปรุงสำเร็จรูป,"ชุดโค้ดที่แก้ปัญหาเฉพาะเรื่อง เช่น axios (เอาไว้ดึงข้อมูล), bcrypt (เอาไว้เข้ารหัส)"
3. Framework,กรอบการทำงาน,ครัวสำเร็จรูป,"โครงสร้างบังคับที่บอกว่าควรวาง Controller/Route ไว้ที่ไหน เช่น Express.js, NestJS"
4. Platform / Runtime,สภาพแวดล้อม,ที่ตั้งของร้านอาหาร,"ตัวที่ทำให้โค้ดรันได้บนเครื่อง เช่น Node.js, V8 Engine, Docker"