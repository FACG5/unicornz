const Sequelize = require('sequelize')
const sequelize = require('./connection');

module.exports =
   sequelize.define('company', {

     logo: {
       type: Sequelize.TEXT,
       allowNull: true
     },
     company_name: {
       type: Sequelize.STRING,
       allowNull: true
     },
     description: {
       type: Sequelize.TEXT,
       allowNull: true
     },
     mobile: {
       type: Sequelize.STRING,
       allowNull: true
     },
     website: {
       type: Sequelize.STRING,
       allowNull: true
     },
     email: {
       type: Sequelize.STRING,
       allowNull: true
     },
     facebook: {
       type: Sequelize.STRING,
       allowNull: true
     },
     password:{
       type: Sequelize.STRING,
       allowNull: false
     }
   });
