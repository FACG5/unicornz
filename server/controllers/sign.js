const bcryptjs = require('bcryptjs');
const snakeCase = require('snakecase-keys');
const { girl } = require('../models');


exports.signup = async (request, response) => {
  try {
    const {
      user_name,
      first_name,
      last_name,
      email,
      school_id,
      birthdate,
      password,
    } = request.body;

    if (
      user_name &&
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
              user_name,
              first_name,
              last_name,
              email,
              password: hash,
              email,
              school_id,
              birthdate,
            };
            userData = snakeCase(userData);
            const userResult = await girl.create(userData);
            response.status(200).send('Successful Signup, You Can Login Now !');
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