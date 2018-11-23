const express = require('express');

const login = require('./login');
const  { authCheck, promiseAuthCheck } = require ('../authentication/authentication');
const { authorize } = require('../middleware/authorize');
const router = express.Router();


router.post('/login', login.post);
router.get('/checkauthentication', (req, res)=>{
    promiseAuthCheck(req).then(token => {
        res.json({status:'loggedin',token})
    }).catch(err=>{
        res.json({msg:err,status:'loggedout'})
    })
});



// router.post('/protectedRoute',authorize, protectedRoute.post);

module.exports = router;