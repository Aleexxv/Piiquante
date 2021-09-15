const express = require('express');
const router = express.Router();

// const auth = require('../midd/auth');
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signUp);
router.post('/login', userCtrl.logIn);


module.exports = router;