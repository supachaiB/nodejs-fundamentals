const fs = require('fs');
const path = require('path');

//Data Streaming
//stream ใช้จัดการไฟล์ขนาดใหญ่
const inputPath = path.join(__dirname, 'big-log.txt');
const outputPath = path.join(__dirname, 'copy-log.txt');

// สร้าง Stream สำหรับอ่าน
const readStream = fs.createReadStream(inputPath, { encoding: 'utf8' });

// สร้าง Stream สำหรับเขียน
const writeStream = fs.createWriteStream(outputPath);

// ใช้ pipe() เพื่อ "ต่อท่อ" ข้อมูลจากที่หนึ่งไปอีกที่หนึ่ง
// ข้อมูลจะค่อยๆ ไหลไป ไม่โหลดเข้า RAM ทีเดียวทั้งหมด
readStream.pipe(writeStream);

readStream.on('data', (chunk) => {
    console.log('--- ได้รับข้อมูลมาหนึ่งส่วน (Chunk) ---');
    // console.log(chunk); // แสดงข้อมูลบางส่วน
});

writeStream.on('finish', () => {
    console.log('คัดลอกไฟล์ขนาดใหญ่เสร็จเรียบร้อยด้วย Stream!');
});