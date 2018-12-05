const bycrypt = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { girl } = require('../models');

exports.post = async (request, response) => {
  try {
    const { loginEmail, loginPassword } = request.body;

    if (loginEmail && loginPassword) {
      if (loginEmail.trim() && loginPassword.trim()) {
        const databaseResult = await girl.findAll({

          where: { email: loginEmail },
        });

        if (databaseResult[0]) {
          const { password } = databaseResult[0].dataValues;

          bycrypt.compare(loginPassword, password).then((finalResult) => {
            if (finalResult === false) {
              response.status(200).send({msg: 'Wrong username / password',  status: false });
            } else {
              const { id } = databaseResult[0].dataValues;
              const tokenData = { id };

              sign(tokenData, process.env.SECRET, (errSign, resultCookie) => {
                if (errSign) {
                  response.status(401).send('Wrong in signin !');
                } else {
                  response.cookie('jwt', resultCookie, { maxAge: 6048000000 });

                  response.status(200).send({ msg: 'hi', status: true });
                }
              });
            }
          });
        } else {
          response.status(200).send({ msg: 'Wrong username / password',  status: false });
        }
      }
    } else {
      response.status(200).send({ msg: 'Please fill all of the fields !' ,  status: false });
    }
  } catch (err) {
    response.status(500).send('Server Error !');
  }
};
