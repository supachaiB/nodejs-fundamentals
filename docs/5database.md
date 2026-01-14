# Database

## เข้าใจพื้นฐานที่นำไปใช้งานได้จริง 
3 เส้นทางการเขียน Database ที่เหมาะสมกับเป้าหมาย

1. สายเน้นความเร็วและคล่องตัว (MongoDB) เรียนรู้วิธีจัดการข้อมูลแบบไม่มีโครงสร้างตายตัว ซึ่งเป็นที่นิยมมากในโปรเจกต์ Startup

2. สายเน้นโครงสร้างและความแม่นยำ (PostgreSQL/SQL): เรียนรู้วิธีการออกแบบความสัมพันธ์ของข้อมูล (Relationships) ซึ่งเป็นพื้นฐานสำคัญของระบบขนาดใหญ่

3. สายการเชื่อมต่อ (ORM/ODM): เรียนรู้เครื่องมือที่ช่วยให้ Node.js คุยกับ Database ได้ง่ายขึ้น เช่น Mongoose (สำหรับ Mongo) หรือ Prisma (สำหรับ SQL)

## Database Type
Type: Relational(SQL) 
- งานที่มีโครงสร้างข้อมูลชัดเจนและสัมพันธ์กัน เช่น ระบบบัญชี, ระบบสต็อกสินค้า, หรือแอปที่มีความซับซ้อนของข้อมูลสูง
- PostgreSQL, MySQL 

Type: NoSQL(Document) 
- งานที่ต้องการความรวดเร็วในการพัฒนา ข้อมูลมีการเปลี่ยนแปลงโครงสร้างบ่อย หรือระบบ Real-time เช่น แชท, โซเชียลมีเดีย, CMS
- MongoDB

## ตัวท็อปใช้กับ NodeJS
1. MongoDB (NoSQL) เป็นตัวที่นิยมที่สุดในหมู่คนเริ่มเรียน Node.js เพราะข้อมูลเก็บในรูปแบบ JSON-like (BSON) ซึ่งหน้าตาเหมือน Object ใน JavaScript เป๊ะ ทำให้รับส่งข้อมูลกับ Node.js ได้ลื่นไหลมา
2. PostgreSQL (SQL) เป็น Database ที่ทรงพลังและยืดหยุ่นสูงมาก รองรับทั้งข้อมูลแบบตารางดั้งเดิม และข้อมูลแบบ JSON ในตัวเดียว เหมาะมากถ้าเราต้องการความถูกต้องของข้อมูล (Data Integrity) สูงๆ



# setup
## Example mongodb

npm install mongoose dotenv

server/config/db.js
server/controllers/user.controller.js
server/routes/user.route
server/app.js
server/.env