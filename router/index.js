const express = require('express');
const router = express.Router();
const model = require('../model');

router.get('/', (req, res) => {
    res.send("")
})

module.exports = router;