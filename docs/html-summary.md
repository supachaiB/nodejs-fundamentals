# สรุป HTML (อ่านง่าย ใช้ได้จริง)

ไฟล์นี้สรุปแนวคิดพื้นฐานของ HTML เพื่อให้เข้าใจโครงสร้าง วิธีใช้องค์ประกอบสำคัญ และข้อปฏิบัติที่นำไปใช้จริงได้ทันที

---

## 1. โครงสร้างพื้นฐาน
```html
<!doctype html>
<html lang="th">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ตัวอย่าง</title>
    <link rel="stylesheet" href="/static/css/style.css">
  </head>
  <body>
    <h1>หัวข้อหลัก</h1>
    <p>ย่อหน้า</p>
    <script src="/static/js/app.js"></script>
  </body>
</html>
```
- `<!doctype html>` กำหนดให้เป็น HTML5
- `lang` ระบุภาษาของเอกสาร (สำคัญต่อ SEO และ accessibility)
- meta viewport ช่วยให้เว็บตอบสนองบนมือถือ

## 2. องค์ประกอบที่ใช้บ่อย
- หัวเรื่อง: `h1` ... `h6`
- ย่อหน้า: `p`
- ลิงก์: `a href="..."` — ใส่ `rel="noopener"` กับ `target="_blank"` เมื่อเปิดหน้าต่างใหม่
- รูปภาพ: `img src="..." alt="คำอธิบาย"` — `alt` สำคัญต่อผู้ใช้ที่ใช้เครื่องมือช่วยเหลือ
- รายการ: `ul` / `ol` + `li`
- กล่องทั่วไป: `div` (block) และ `span` (inline)

## 3. Semantic elements (แนะนำให้ใช้)
- `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`
- ใช้ช่วยให้องค์ประกอบมีความหมายชัดเจน ทั้งกับนักพัฒนาและเครื่องมือค้นหา

## 4. ฟอร์มและการรับข้อมูลจากผู้ใช้
```html
<form action="/submit" method="post">
  <label for="name">ชื่อ</label>
  <input id="name" name="name" type="text" required>
  <input type="email" name="email">
  <button type="submit">ส่ง</button>
</form>
```
- attribute สำคัญ: `name`, `id`, `for`, `required`, `placeholder`, `type` (text, email, number, password, file, checkbox, radio, date)
- ฝั่งเซิร์ฟเวอร์ต้องทำการตรวจสอบ (validation) อีกครั้งเสมอ

## 5. การเชื่อม CSS และ JavaScript
- แยกไฟล์ CSS/JS ออกจาก HTML เพื่อแยกความรับผิดชอบ
- วางไฟล์ static (รูป, css, js) ในโฟลเดอร์ เช่น `public` และเสิร์ฟด้วย server เช่น `express.static`
- ใส่ CSS ใน `<head>` และ JS ปกติใส่ท้าย `<body>` หรือใช้ `defer`/`async`

## 6. Accessibility (การเข้าถึง)
- ใส่ `alt` ให้รูปภาพ
- ใช้ `aria-label`, `role` เมื่อ element ปกติทำหน้าที่พิเศษ
- ให้ปุ่ม/ลิงก์สามารถเข้าถึงด้วยคีย์บอร์ด

## 7. Responsive และ Mobile-friendly
- ใช้ meta viewport
- ใช้ CSS media queries หรือเฟรมเวิร์ก responsive (Flexbox / Grid)

## 8. SEO และ Meta Tags เบื้องต้น
- `title`, `meta name="description"` สำคัญ
- ใช้ semantic tags และโครงสร้าง heading ที่ถูกต้อง

## 9. ตัวอย่างการใช้งานกับ Express
- โครงสร้างแนะนำ
  - `public/` — เก็บ static files, เสิร์ฟด้วย `app.use('/static', express.static(path.join(__dirname, 'public')))`
  - `views/` — เก็บ template (EJS/Pug/Handlebars)

- ตัวอย่างการ render (Express + EJS)
```js
app.set('view engine', 'ejs');
app.get('/profile', (req, res) => {
  res.render('profile', { name: 'Somchai' });
});
```
ไฟล์ `views/profile.ejs` ใช้ `<%= name %>` เพื่อแสดงชื่อ

## 10. ข้อแนะนำปฏิบัติ
- ใช้โครงสร้าง semantic ให้ถูกต้อง
- แยก content / presentation / behavior
- ตรวจสอบ accessibility และ validation (W3C validator)
- ทดสอบบนหลายอุปกรณ์และขนาดหน้าจอ
- สำหรับ production: ย่อ (minify) และรวมไฟล์ (bundle) เพื่อประสิทธิภาพ

---
ไฟล์นี้เป็น cheat-sheet สั้น ๆ ให้ใช้อ้างอิงเร็ว ๆ เมื่อต้องสร้างหน้า HTML และนำไปใช้ร่วมกับ Node/Express ได้ทันที
