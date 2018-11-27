const Sequelize = require('sequelize')
const sequelize = require('./connection');

module.exports =  sequelize.define('girl', {

  user_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: true
  }
  ,
  other_school: {
    type: Sequelize.STRING,
    allowNull: true
  },
  birthdate: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});
