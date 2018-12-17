const Sequelize = require('sequelize')
const sequelize = require('./connection');

module.exports =  sequelize.define('girl', {

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
    allowNull: false,
    unique:true,
  },
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
  },
  grade: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  city: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  school_email: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  emergency_name: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  phone_num: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  emergency_num: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  emergency_email: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  relation: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  period: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  begin_date: {
    type: Sequelize.DATEONLY(50),
    allowNull: true
  },
  end_date: {
    type: Sequelize.DATEONLY(50),
    allowNull: true
  },
  subjects: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: true
  },
  favsubjects: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: true
  },
  hobbies: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  future_job: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  interested_job: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  files: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true
  },
  famous_entrepreneur: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  be_entrepreneur: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  pursue_in_tech: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  percentage: {
    type: Sequelize.INTEGER,
    allowNull: true
  },

});
