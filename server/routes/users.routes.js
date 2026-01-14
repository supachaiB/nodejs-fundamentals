const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/user.controller');

router.post('/', ctrl.createUser);
router.get('/', ctrl.getUsers);

module.exports = router;