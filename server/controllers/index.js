const express = require('express');
const dashBoard = require('./dashBoard');
const search = require('./search');
const work = require('./workExperienceList');
const workExperienceDetails = require('./workexperienceDetails');
const router = express.Router();

router.get('/workexperiencelist', work.get);
router.get('/workexperiencedetails/:companyId', workExperienceDetails.get);
router.post('/dash/search',search.post);
router.get('/dash',dashBoard.get);

module.exports = router;
