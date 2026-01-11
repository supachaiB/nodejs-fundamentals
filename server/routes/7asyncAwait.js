const express = require('express');
const router = express.Router

//Asynchronous Task
const fetchUserData = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = { 1: { name: "Joe", role: "Killer"}};
            const user = users[userId];

            if (user) {
                resolve(user); //success
            } else {
                reject(new Error("No found in system")) // (throw error)
            }
        }, 1000); //รอ 1 วินาที Non-blocking
    })
}

// Error Handling
const getUserProfile = async (id) => {
    try {
        console.log("กำลังดึงข้อมูล..."); // โค้ดรันถึงตรงนี้แล้ว "รอ"

        // ใช้ await เพื่อหยุดรอผลลัพธ์โดยไม่บล็อก Main Thread
        const user = await fetchUserData(id);

        console.log("สำเร็จ:", user.name);
        return user;
    } catch (error) {
        // ดักจับ Error (Error Boundary) ไม่ให้ Express Crash
        console.error("error: ", error.message);
        
        // ส่งต่อ Error ไปยัง Global Error Handler หรือแจ้ง User
        throw error;
    }
}

//เรียก
getUserProfile(1)
    .then(() => getUserProfile(99)) // เรียกตัวที่ 99 ต่อหลังจากตัวแรกเสร็จ
    .catch(error => console.log("Final Catch: ป้องกันการ Crash เรียบร้อย"))

module.exports = router;