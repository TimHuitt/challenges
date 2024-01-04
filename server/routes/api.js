const express = require('express')
const router = express.Router()
const apiCtrl = require('../controllers/api')

// GET module - index
router.get("/", apiCtrl.main);


module.exports = router