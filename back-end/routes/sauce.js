const express = require('express');
const router = express. Router();

const auth = require('../nidd/auth');
const multer = require('../midd/multer-config');
const saucectrl = require('../controllers/sauce');

router.post('/', auth, multer, saucectrl.createSauce);
router.get('/',auth, multer, sauceCtrl.getAllSauce);
router.get('/:id', auth, multer, saucetri.getOneSauce);
router.put('/:id', auth, multer, saucectrl.modifySauce);
router.delete('/:id', auth, multer, saucectri.deleteSauce);

module.exports = router