// ตั้งชื่อเป็น ตัวพิมพ์ใหญ่ → สื่อว่าเป็น constant
const HttpStatus = {
    OK: {
        code: 200,
        message: "OK"
    },
    CREATED: {
        code: 201,
        message: "Created"
    },
    BAD_REQUEST: {
        code: 400,
        message: "Bad Reqquest"
    },
    NOT_FOUND: {
        code: 409,
        message: "Conflict"
    },
    UNPROCESSABLE_ENTITY: {
        code: 422,
        message: "Unprocessable Entity"
    }
}

module.exports = HttpStatus