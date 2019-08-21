const express = require('express');
const router = express.Router();

//controllers
const index = require('../controllers/indexController');

router.get('/', index);

module.exports = router;