const express = require('express');
const signController = require('./sign');
const schoolController = require('./school');
const companyController = require('./company');
const workexpController = require('./workexp');
const dashBoard = require('./dashBoard');
const search = require('./search');
const work = require('./workExperienceList');
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


// Example to add a secured route: router.post('/protectedRoute',authorize, protectedRouteHandler);
router.get('/updatehero', update.get);
router.use(checkToken);
router.get('/workexperiencelist', work.get);
router.get('/workexperiencedetails/:companyId', workExperienceDetails.get);
router.get('/dash/:girlId', dashBoard.get);
router.post('/dash/search', search.post);

module.exports = router;
