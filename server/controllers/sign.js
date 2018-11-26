const bcrypt = require('bcryptjs');
const hashPassword = require("../authentication/hashpassword");
const  { promiseAuthCheck } = require ('../authentication/authentication');
const {
  girl
} = require('../models');
const {
  createCookie
} = require('../authentication/authentication');



exports.logOut = (request, response) => {
  response.clearCookie('data');
  response.end();
};

exports.signup = (request, response) => {
    const {
      user_name,
      first_name,
      last_name,
      email,
      school_id,
      birthdate,
      password
    } = request.body;

    if (!user_name || user_name.trim() === '') {
      response.json({
        msg: 'user name is empty',
        status: 'failed'
      })
    } else if (!password || password.trim() === '') {
      response.json({
        msg: 'Password is empty',
        status: 'failed'
      })
    } else {
      hashPassword(password, (err, hash) => {
        if (err) {
          response.json({
            msg: 'could not hash the password',
            status: 'failed'
          })
        } else {
          girl.create({
            user_name,
            first_name,
            last_name,
            email,
            school_id,
            birthdate,
            password:hash
          })
            .then(createdaccount => {
              createCookie({
                id: createdaccount.dataValues.id,
                first_name: createdaccount.dataValues.first_name,
                last_name: createdaccount.dataValues.last_name,
                email: createdaccount.dataValues.email,
                school_id: createdaccount.dataValues.school_id,
                other_school: createdaccount.dataValues.other_school,
                birthdate: createdaccount.dataValues.birthdate
              },
              (createtokenerror, token) => {
                if (createtokenerror) {
                  response.json({
                    msg: 'something went wrong!',
                    status: true
                  })
                } else {
                  response.cookie('data', token, {
                    expires: new Date(Date.now() + 900000),
                    httpOnly: true
                  });
                  response.json({
                    msg: 'Account created successfuly ^_^',
                    status: 'success'
                  });
                }
              });
          }
          )
            .catch(err => {
              console.log(err);
              response.json({msg: 'err', state: 'failed'})
            }
          )
        }
      })
    }
  }


    exports.login = (request, response) => {
      const {
        password,
        username
      } = request.body;
      girl.findAll({
          where: {
            user_name: username
          }
        })
        .then((result) => {
          if (result.length === 0) {
            response.status(200).json({
              msg: 'no such user name',
              status: false
            });
          } else {
            bcrypt.compare(password, result[0].dataValues.password, (compareerror, compareresult) => {
              if (compareerror) {
                response.json({
                  msg: 'somethin went wrong!',
                  status: false
                })
              } else if (compareresult === false) {
                response.json({
                  msg: 'Password is Wrong',
                  status: false
                });
              } else {
                createCookie({
                    id: result[0].dataValues.id,
                    first_name: result[0].dataValues.first_name,
                    last_name: result[0].dataValues.last_name,
                    email: result[0].dataValues.email,
                    school_id: result[0].dataValues.school_id,
                    other_school: result[0].dataValues.other_school,
                    birthdate: result[0].dataValues.birthdate
                  },
                  (createtokenerror, token) => {
                    if (createtokenerror) {
                      response.json({
                        msg: 'something went wrong!',
                        status: true
                      })
                    } else {
                      response.cookie('data', token, {
                        expires: new Date(Date.now() + 900000),
                        httpOnly: true
                      });
                      response.json({
                        msg: 'logged in successfuly ^_^',
                        status: true
                      });
                    }
                  });
              }
            });
          }
        }).catch((err) => {
          console.log(err);
          response.json({
            msg: "girl.findall error",
            status: false
          })
        });
    };

    exports.checkAuthentication = (req, res)=>{
      promiseAuthCheck(req).then(token => {
          res.json({status:'loggedin',token})
      }).catch(err=>{
          res.json({msg:err,status:'loggedout'})
      })
  }