const express = require('express');
const router = express.Router();

const dogsController = require('../controllers/dogs-controller')

router.get('/', dogsController.search);


module.exports = router;