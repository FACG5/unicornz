const express = require('express');
const work = require('./workExperienceList');
const workExperienceDetails = require('./workexperienceDetails');
const router = express.Router();

router.get('/workexperiencelist', work.get);
router.get('/workexperiencedetails/:companyId', workExperienceDetails.get);


module.exports = router;
