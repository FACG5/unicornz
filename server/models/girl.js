const Sequelize = require('sequelize')
const sequelize = require('./connection');

module.exports =  sequelize.define('girl', {

  user_name: {
    type: Sequelize.STRING,
    allowNull: true,
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
  fav_subjects: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: true
  },
  enjoy_school: {
    type: Sequelize.TEXT,
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
  entrepreneurs_women: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  important_in_career1: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: true
  },
  important_in_career2: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: true
  },
  important_in_career3: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: true
  },
  important_factors1: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: true
  },
  important_factors2: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: true
  },
  important_factors3: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: true
  },
  person_have_career: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  clicked_pic1: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  clicked_pic2: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  clicked_pic3: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  clicked_pic4: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  pursue_in_tech: {
    type: Sequelize.STRING(100),
    allowNull: true
  },

});
