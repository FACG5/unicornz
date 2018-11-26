const express = require('express');
const dashBoard = require('./dashBoard');
const search = require('./search');
const router = express.Router();

router.post('/dash/search',search.post);
router.get('/dash',dashBoard.get);

module.exports = router;
