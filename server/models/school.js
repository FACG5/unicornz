const Sequelize = require('sequelize')
const sequelize = require('./connection');

module.exports =  sequelize.define('school', {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  }
});
