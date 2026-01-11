
// Database
const userBalance = 1000;

const withdrawMoney = async (amount) => {
    console.log(`[Service] เริ่มตรวจสอบยอดเงินสำหรับการถอน: ${amount}`)

    // กฎธุรกิจ (Business Rule)
    if (amount < 99) {
        throw new Error("ยอดถอนต้อง 100 ขึ้นไป")
    }

    if (amount > userBalance) {
        // ใช้ throw เพื่อหยุดการทำงานทันที ป้องกันข้อมูลเพี้ยน (Data Corruption)
        throw new Error("ยอดเงินในบัญชีไม่เพียงพอ")
    }

    //  Update Database
    console.log("[Service] กำลังหักยอดเงินในฐานข้อมูล....")
    const newBalance = userBalance - amount;

    return {
        success: true,
        remainingBalance: newBalance
    }
}

module.exports = { withdrawMoney }