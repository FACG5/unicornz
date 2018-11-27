const Sequelize = require('sequelize')
const sequelize = require('./connection');

module.exports =  sequelize.define('jobs', {
  
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
});
