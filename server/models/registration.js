const Sequelize = require('sequelize')
const sequelize = require('./connection');

module.exports =  sequelize.define('registration', {

  status: {
    type: Sequelize.STRING,
    allowNull: true
  },
  registration_date: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  response: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});
