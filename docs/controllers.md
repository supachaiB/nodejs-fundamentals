# meaning: Controllers
Controller เก็บ logic ที่เกี่ยวกับ request กับ responsive ฝั่งของ backend

- user.controller.js 
``` js
exports.public = (req, res) => {
    res.json({ message: 'anyone can access'});
};

exports.profile = (req, res) => {
    res.json({ message: 'protected profile'})
};
```
Controller function ทำหน้าที่รับ request จาก client
แล้วส่ง response กลับในรูปแบบ JSON