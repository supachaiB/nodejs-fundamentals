const http = require('http');
const path = require('path');
const fs = require('fs')

//create server
const server = http.createServer((req, res) => {
    // ปัญหา: ใน Express เราใช้ app.get('/'), แต่ใน Core เราต้องเช็ก URL เอง
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>นี่คือหน้า Home รันด้วย HTTP Core Module</h1>')

    }

    //fs and path
    else if (req.url === '/api/sys') {
        //connect file package.json
        const filePath = path.join(__dirname, 'package.json');
    
        // fs read or get data
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'content-type': 'application/json' });
           // ใส่ /api/sys -> response -> package.json
            res.end(data);//  ส่งเนื้อหาใน package.json กลับไป
        }) 
    }

    else {
        res.writeHead(404);
        res.end('Not Found');
    }

})

//os
const os = require('os');

console.log('--- System Info ---')
console.log('ประเภท OS:', os.type()); // Windows_NT, Linux, Darwin
console.log('เวอร์ชัน OS:', os.release());
console.log('Plataform:', os.platform()); // เช่น win32, linux
console.log('Architecture:', os.arch());// เช่น x64

const cpus = os.cpus();
console.log(`รุ่น CPU: ${cpus[0].model}`);
console.log('CPU Cores:', os.cpus().length);
console.log('Free Memory:', (os.freemem()/ 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('Uptime:', (os.uptime() / 3600).toFixed(2), 'hours');

console.log('\n--- Network Interface ---')
const network = os.networkInterfaces();
console.log('IP Address (IPv4):', network['Wi-Fi'] ? network['Wi-Fi'][1].address : 'ไม่พบข้อมูล Wi-Fi');

console.log('\n--- User and Directory ---')
console.log('Username:', os.userInfo().username);
console.log('Home Directiory:', os.homedir());

//events ตัวอย่างระบบแจ้งเตือนเมื่อมีคน Log-in
const EventEmitter = require('events')
const myEmitter = new EventEmitter();

// Listener
myEmitter.on('userLogin', (username) => {
    console.log(`\n[Notification]: ${username} ได้เข้าสู่ระบบแล้ว!`);
});
myEmitter.on('userLogin', (username) => {
    // ส่ง log เก็บเข้าไฟล์
    console.log(`[Log]: บันทึกเวลาเข้าใช้งานของ ${username} ลง Database`);
})
//Trigger
myEmitter.emit('userLogin', 'Somchai');



//run
const port = 3001;
server.listen(port, () => {
    console.log(`\nCore Server is running on http://localhost:${port}`)
})