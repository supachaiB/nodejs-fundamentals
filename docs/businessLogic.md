# Business Logic
busincess logic = กฏ เงื่อนไข ขั้นตอนการตัดสินใจของระบบ

## Controller & Business Logic & Utils
Controller = logic ที่เกี่ยวกับ req / res เท่านั้น
- รับ request
- แปลงข้อมูลเข้า system
- ส่ง response ออกไป

Business Logic (Service) = กฎ / การตัดสินใจของระบบ
- ผู้ใช้ login ได้ไหม
- role นี้ทำสิ่งนี้ได้หรือไม่
- ข้อมูลแบบนี้อนุญาตหรือเปล่า

Utils = ฟังก์ชัน / ค่าคงที่ ที่ใช้ซ้ำ และไม่ผูกกับกฎของระบบใดระบบหนึ่ง
- hash password
- http status
- generate token
- format data