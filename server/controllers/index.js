const express = require('express');
const dashBoard = require('./dashBoard');
const router = express.Router();

router.get('/dash',dashBoard.get);

module.exports = router;
