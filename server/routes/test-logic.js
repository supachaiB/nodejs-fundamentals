const userService = require('../services/user.service');

async function runTest() {
    try {
        console.log("--- Test: ถอนเงินปกติ ---");
        const res = await userService.withdrawMoney(900);
        console.log("Success:", res); // ควรจะผ่าน

        console.log("\n--- Test: ถอนเกินยอดเงิน ---");
        await userService.withdrawMoney(100); // ต้องโยน error ออกมา
    } catch (err) {
        console.error("Caught expected error:", err.message); // ตรวจสอบว่า Error message ตรงไหม
    }
}
runTest();