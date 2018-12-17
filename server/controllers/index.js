const express = require('express');
const signController = require('./sign');
const schoolController = require('./school');
const companyController = require('./company');
const workexpController = require('./workexp');
const dashBoard = require('./dashBoard');
const search = require('./search');
const upload = require('./upload');
const uploads3 = require('../middleware/upload');
const work = require('./workExperienceList');
const questionnaire = require('./questionnaire');
const profile = require('./profile');
const workExperienceDetails = require('./workexperienceDetails');
const login = require('./login');
const checkToken = require('./authentication/index');
const logOut = require('./logout');
const update = require('./update');
const router = express.Router();


router.post('/login', login.post);
router.get('/logout', logOut.get)
router.post('/signup', signController.signup);

router.post('/submitjob', workexpController.submitJob);

router.get('/getschoolslist', schoolController.getSchoolsList);
router.get('/getcompanieslist', companyController.getCompaniesList);


router.post('/upload',uploads3.array('dox',1),upload.post);
router.get('/updatehero', update.get);
router.use(checkToken);
router.get('/workexperiencelist', work.get);
router.get('/workexperiencedetails/:companyId', workExperienceDetails.get);
router.get('/dash/:girlId', dashBoard.get);
router.post('/dash/search', search.post);
router.post('/questionnaire', questionnaire.post);
router.get('/profile/:girlId', profile.get);


module.exports = router;
