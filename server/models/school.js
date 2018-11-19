const Sequelize = require('sequelize')
const sequelize = require('./connection');

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

