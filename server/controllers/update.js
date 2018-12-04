const { girl } = require('../models');
const sequelize = require('../models/connection');
const { verify } = require('jsonwebtoken');

exports.get = async (request, response) => {
  if (request.cookies.jwt) {
    const { jwt } = request.cookies;
    let girlId;
    verify(jwt, process.env.SECRET, (err, result) => {
      if (err) {
      } else {
        const { id } = result;
        girlId = id;
      }
    });
    girl.findAll({ where: { id: girlId } }).then((res) => {
      response.json({ status: 'loggedin', token: res });
    })
      .catch((err) => {
        response.json(err);
      });
  } else {
    response.json({ status: 'loggedout', token: null });
  }
};
