# Node.js Fundamentals
์เขียนด้วย NodeJS ใช้สำหรับอ่านทบทวนและใช้ฝึกงาน Tech Stack นี้ 

### Tech Stack
Node.js

### Project Structure
main folder "server"

- controllers/
    - user.controller.js //logic
- middlewares/
    - auth.middleware.js // ตรวจสอบ JWT
    - logger.middleware.js
- routes/
    - 1index.js // เส้นทางของ user
    - 2sentText.js
    - 3restAPI.js
    - 4httpStatus.js
    - 5requestResponse.js
    - 6user.routes.js
utils/
    - httpStatus
- app.js // ตั้งค่า express และ middleware

### Documentation
- [controllers](docs/controllers.md)
- [middlewares]
- [routes]
- [settingRoute]

if portfolio or true project
ทำให้เป็น port เดียวจะดีกว่า

# Middleware
middleware ทำหน้าที่หลักคือ:
- อนุญาต / ไม่อนุญาต
- ตรวจข้อมูล
- แปลงข้อมูล
- จัดการ error