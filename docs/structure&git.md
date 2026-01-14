ตัวอย่างโครงแบบย่อ
```
project-root/
├─ client/
├─ server/
│  ├─ config/
│  ├─ models/
│  ├─ controllers/
│  ├─ routes/
│  ├─ middlewares/
│  └─ app.js
├─ docs/
├─ public/
├─ tests/
├─ package.json
└─ README.md
```

---

# โครงสร้างโปรเจกต์ (แนะนำ)

ต่อไปนี้เป็นตัวอย่างโครงสร้างโปรเจกต์ที่ปรับให้รองรับทั้ง MongoDB และ PostgreSQL โดยแยกส่วนให้ชัดเจนเพื่อไม่ให้สับสน

```
project-root/
├─ client/                  # frontend (static หรือ SPA)
├─ server/
│  ├─ config/
│  │  ├─ mongo.js           # การเชื่อมต่อ mongoose (Mongo)
│  │  └─ postgres.js        # การเชื่อมต่อ pg (Postgres)
│  ├─ models/
│  │  ├─ mongo/             # Mongoose models
│  │  │  └─ user.model.js
│  │  └─ pg/                # Postgres models (raw SQL หรือ wrapper)
│  │     └─ user.model.js
│  ├─ controllers/
│  │  ├─ mongo/
│  │  └─ pg/
│  ├─ routes/
│  │  ├─ mongo/
│  │  └─ pg/
│  ├─ middlewares/
│  └─ app.js
├─ db/
│  ├─ migrations/           # เก็บไฟล์ SQL migration เช่น 001_create_users.sql
│  └─ seeds/                # (ถ้ามี) ข้อมูลตัวอย่างสำหรับ dev
├─ docs/
├─ public/                  # static files ที่เสิร์ฟผ่าน express.static
├─ tests/
├─ .env                     # เก็บตัวแปรสภาพแวดล้อม (ไม่ควร commit)
├─ .gitignore
├─ package.json
└─ README.md
```

สรุปตำแหน่งสำคัญและแนวปฏิบัติ

- `server/config/postgres.js` — เก็บการตั้งค่าเชื่อมต่อ Postgres (ใช้ `pg` และอ่านค่า `POSTGRES_URL` จาก `.env`).
- `server/models/pg/` — เก็บฟังก์ชันที่รัน SQL หรือเรียกใช้ pool.query() เพื่อแยกจาก Mongoose models
- `db/migrations/` — เก็บ schema SQL (Create table, alter table) เพื่อให้สามารถรันซ้ำหรือแชร์กับทีมได้
- `server/routes/pg/` และ `server/controllers/pg/` — แยก API ของ Postgres ภายใต้ path เช่น `/api/pg/...` เพื่อให้ชัดเจน

ตัวอย่างไฟล์ที่ควรมี (สั้น ๆ)
- `.env` (ตัวอย่าง)
```
# Mongo
MONGO_URI=mongodb://user:pass@localhost:27017/mydb

# Postgres
POSTGRES_URL=postgres://pguser:pgpass@localhost:5432/mydb

PORT=3000
```

- `.gitignore` (แนะนำ)
```
node_modules/
.env
.DS_Store
npm-debug.log
.vscode/
```

Git & workflow (แนะนำแบบสั้น)
- Branching: ใช้ `main` สำหรับ production, `develop` สำหรับรวมงาน, `feature/*` สำหรับงานย่อย
- Commit: ข้อความสั้นแบบหมายเหตุ เช่น `feat: add pg user model` หรือ `fix: validate email` (ตาม convention แบบง่าย)
- Pull request: ให้อธิบายสั้น ๆ ว่าทำอะไรและวิธีทดสอบ

การรัน migration / เตรียม DB (ไม่เขียนโค้ด)
- สร้างฐานข้อมูล (ตัวอย่างเครื่องมือ GUI เช่น pgAdmin หรือ psql): สร้าง database `mydb`
- รันไฟล์ SQL ใน `db/migrations/` ด้วย pgAdmin หรือ psql:
  - pgAdmin: เปิด Query Tool แล้วรันไฟล์
  - psql (terminal): `psql -d mydb -f db/migrations/001_create_users.sql`

การทดสอบแบบ Local
- ตั้งค่า `.env` ให้ชี้ไปยัง DB local
- สตาร์ท server: `npm start` (หรือ `node server/app.js`)
- เรียก API ของ Postgres เช่น `GET /api/pg/users` เพื่อตรวจสอบ

คำแนะนำเพิ่มเติม
- แยกไฟล์ config สำหรับแต่ละ DB เพื่อให้ง่ายต่อการสลับ/ปิด-เปิด
- ถ้าต้องการ abstraction สูงขึ้น ให้พิจารณาใช้ Prisma (SQL) หรือ query builder เช่น Knex
- เก็บ migration และ seed ไฟล์ไว้ใน `db/` เพื่อให้ง่ายต่อการ deploy และ backup

---

ไฟล์นี้สรุปโครงสร้างและแนวปฏิบัติพื้นฐาน เพื่อให้คุณเริ่มเพิ่ม Postgres ในโปรเจกต์ได้อย่างเป็นระบบและไม่สับสนกับ MongoDB.

