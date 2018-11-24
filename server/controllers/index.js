const express = require('express');

const signController = require('./sign');
const schoolController = require('./school')
const  { promiseAuthCheck } = require ('../authentication/authentication');
const { authorize } = require('../middleware/authorize');
const router = express.Router();


router.post('/login', signController.login);
router.get('/logout',signController.logOut)
router.post('/signup', signController.signup);
router.get('/checkauthentication', signController.checkAuthentication);

router.get('/getschoolslist',schoolController.getSchoolsList)


// router.post('/protectedRoute',authorize, protectedRoute.post);

module.exports = router;