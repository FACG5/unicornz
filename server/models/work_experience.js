const Sequelize = require('sequelize')
const sequelize = require('./connection');

module.exports =  sequelize.define('work_experience', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    company_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    location: {
      type: Sequelize.STRING,
      allowNull: true
    },
    subject: {
      type: Sequelize.STRING,
      allowNull: true
    },
    post_code: {
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
      type: Sequelize.INTEGER,
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
  }, {
    tableName: 'work_experience'
  });

