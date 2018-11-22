const Sequelize = require('sequelize')
const sequelize = require('../config');

module.exports =  sequelize.define('school', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  tableName: 'school'
});
