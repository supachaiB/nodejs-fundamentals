exports.handleForm = (req, res) => {
    const { username, email } = req.body;
    res.send(`บันทึกข้อมูลของ ${username}: ${email} แล้ว`)
}