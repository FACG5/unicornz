const Sequelize = require('sequelize')
const sequelize = require('./connection');

module.exports =  sequelize.define('jobs', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  girl_id: {
    type: Sequelize.STRING,
    allowNull: false
  },
  job_title:{
    type:Sequelize.STRING,
    allowNull:true
  },
  done: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },
  reqests: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  tableName: 'girl'
});
