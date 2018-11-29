const express = require('express');

const signController = require('./sign');
const schoolController = require('./school');
const companyController = require('./company');
const workexpController = require('./workexp')
const { authorize } = require('../middleware/authorize');
const dashBoard = require('./dashBoard');
const search = require('./search');
const work = require('./workExperienceList');
const workExperienceDetails = require('./workexperienceDetails');
const router = express.Router();


router.post('/login', signController.login);
router.get('/logout',signController.logOut)
router.post('/signup', signController.signup);
router.get('/checkauthentication', signController.checkAuthentication);
router.post('/submitjob', workexpController.submitJob)

router.get('/getschoolslist',schoolController.getSchoolsList)
router.get('/getcompanieslist',companyController.getCompaniesList)


//Example to add a secured route: router.post('/protectedRoute',authorize, protectedRouteHandler);


router.get('/workexperiencelist', authorize, work.get);
router.get('/workexperiencedetails/:companyId', workExperienceDetails.get);
router.get('/dash/:girlId',dashBoard.get);
router.post('/dash/search',search.post);

module.exports = router;
