const express = require('express');
const router = express.Router();

const auth = require('../midd/auth');
const userCtrl = require('../controllers/user');

router.post('/signup',auth, userCtrl.signUp);
router.post('/login',auth, userCtrl.logIn);


module.exports = router