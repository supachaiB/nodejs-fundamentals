const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'big-log.txt');
const writeStream = fs.createWriteStream(filePath);

console.log('---  กำลังเริ่มสร้างไฟล์ขนาดใหญ่ (Target: ~50MB) ---');

// เราจะเขียนข้อมูลประมาณ 100,000 บรรทัดเพื่อให้ได้ขนาดไฟล์ที่ใหญ่พอ
for (let i = 0; i <= 800000; i++) {
    writeStream.write(`Log Entry #${i}: [SYSTEM_INFO] - CPU Load: ${Math.random().toFixed(2)} - Status: ACTIVE\n`);
}

writeStream.end();

// เมื่อเขียนไฟล์เสร็จ (Event 'finish') ให้เช็กขนาดไฟล์ทันที
writeStream.on('finish', () => {
    // ใช้ fs.statSync เพื่อดึงสถานะของไฟล์ (Metadata)
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats.size;
    const fileSizeInMegabytes = (fileSizeInBytes / (1024 * 1024)).toFixed(2);

    console.log('-------------------------------------------');
    console.log(` สร้างไฟล์สำเร็จ: ${path.basename(filePath)}`);
    console.log(` ขนาดไฟล์ที่ได้: ${fileSizeInMegabytes} MB`);
    console.log(` อยู่ที่: ${filePath}`);
    console.log('-------------------------------------------');
    console.log('ตอนนี้คุณสามารถรันโค้ด Stream เพื่อทดสอบ "การต่อท่อ" ข้อมูลได้แล้วครับ!');
});