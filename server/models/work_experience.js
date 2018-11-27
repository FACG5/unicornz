const Sequelize = require('sequelize')
const sequelize = require('./connection');

module.exports =  sequelize.define('work_experience', {

  location: {
    type: Sequelize.STRING,
    allowNull: true
  },
  subject: {
    type: Sequelize.STRING,
    allowNull: true
  },
  start_date: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  end_date: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  pocket_money: {
    type: Sequelize.DECIMAL,
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  max_number: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  video: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  start_time: {
    type: Sequelize.TIME,
    allowNull: true
  },
  end_time: {
    type: Sequelize.TIME,
    allowNull: true
  }
});
