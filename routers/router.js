const express = require('express');
const router = express.Router();
const catController = require('../controllers/controller');

router.post('/api/cat', catController.postCat);
router.get('/api/cats', catController.getAllCats);

module.exports = router;
