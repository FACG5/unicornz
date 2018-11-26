const express = require('express');

const signController = require('./sign');
const schoolController = require('./school');
const companyController = require('./company');
const workexpController = require('./workexp')
const { authorize } = require('../middleware/authorize');
const router = express.Router();


router.post('/login', signController.login);
router.get('/logout',signController.logOut)
router.post('/signup', signController.signup);
router.get('/checkauthentication', signController.checkAuthentication);

router.post('/submitjob', workexpController.submitJob)

router.get('/getschoolslist',schoolController.getSchoolsList)
router.get('/getcompanieslist',companyController.getCompaniesList)


//Example to add a secured route: router.post('/protectedRoute',authorize, protectedRouteHandler);

module.exports = router;