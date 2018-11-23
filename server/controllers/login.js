const bcrypt = require('bcryptjs');
const {
  createCookie
} = require('../authentication/authentication');
const {
  girl
} = require('../models');


exports.logOut = (request, response) => {
  response.clearCookie('data');
  response.redirect('/login');
};

exports.post = (request, response) => {
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
                  // To get the cookie in express (requires "cookie-parser"): request.cookies.data 
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