//ของเดิม
/*exports.public = (req, res) => {
    res.json({ message: 'anyone can access'});
};

exports.profile = (req, res) => {
    res.json({ message: 'protected profile'})
};
*/

// นำเข้า Service (Business Logic)
const UserService = require('../services/user.service'); // สมมติว่าไฟล์ logic อยู่ที่นี่

exports.public = (req, res, next) => {
    try {
        // Logic ง่ายๆ ที่ไม่ต้องรอ Async
        res.json({ message: 'Anyone can access' });
    } catch (err) {
        next(err); // ส่งเข้า Global Error Handler
    }
};

exports.profile = async (req, res, next) => {
    try {
        // สมมติว่าต้องไปดึงข้อมูลจาก Database ผ่าน Service
        const userId = req.user.id; // ได้มาจาก auth.middleware.js
        
        console.log(`[Controller] Fetching profile for ID: ${userId}`);
        
        const userData = await UserService.getUserById(userId);

        // ถ้า Service ไม่เจอข้อมูล แล้วไม่ได้ throw ไว้ เรามาเช็คที่นี่อีกที
        if (!userData) {
            throw new Error("User not found in system");
        }

        res.json({ 
            message: 'Protected profile',
            data: userData 
        });

    } catch (err) {
        // ถ้าเกิด Error (เช่น 99 ที่เราลองรัน) จะกระโดดมาที่นี่ทันที
        console.error(`[Controller Error]: ${err.message}`);
        next(err); // ⚠️ สำคัญมาก: ป้องกัน Express Crash โดยส่งต่อให้ Middleware
    }
};
