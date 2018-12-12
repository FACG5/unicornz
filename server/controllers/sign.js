const bcryptjs = require('bcryptjs');
// const snakeCase = require('snakecase-keys');
const { sign } = require('jsonwebtoken');
const { girl } = require('../models');

exports.signup = async (request, response) => {
  let id;
  try {
    const {
      first_name,
      last_name,
      email,
      school_id,
      birthdate,
      password,
    } = request.body;

    if (
      first_name &&
      last_name &&
      email &&
      school_id &&
      birthdate &&
      password
    ) {
      bcryptjs.hash(password, 10, async (err, hash) => {
        if (err) {
          response.status(500).send('Server Error !');
        } else {
          try {
            let userData = {
              first_name,
              last_name,
              email,
              password: hash,
              email,
              school_id,
              birthdate,
              percentage:15
            };

            // userData = snakeCase(userData);

            girl.create(userData)

              .then(john => {

                id = john.get().id

                const tokenData = { id };

                sign(tokenData, process.env.SECRET, (errSign, resultCookie) => {

                  if (errSign) {

                    response.status(401).send('Wrong in signin !');

                  } else {

                    response.cookie('jwt', resultCookie, { maxAge: 6048000000 });

                    response.status(200).send({ msg: 'hi', status: true });

                    
                  }

                });

              })

          } catch (error) {

            response.status(500).send('Internal Server Error !');

          }

        }

      });

    } else {

      response.status(401).send('Fill all the fileds, please !');
    }
  } catch (error) {

    response.status(500).send('Internal Server Error !');

  }

};
