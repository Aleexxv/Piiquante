const express = require('express');
const router = express.Router();

// const auth = require('../midd/auth');
const multer = require('../midd/multer-config');
const sauceCtrl = require('../controllers/sauce');

router.post('/' , multer, sauceCtrl.createSauce);
router.get('/' , multer, sauceCtrl.getAllSauce);
router.get('/:id' , multer, sauceCtrl.getOneSauce);
router.put('/:id' , multer, sauceCtrl.modifySauce);
router.delete('/:id' , multer, sauceCtrl.deleteSauce);
router.post('/:id/like' , sauceCtrl.likeSauce);

module.exports = router;