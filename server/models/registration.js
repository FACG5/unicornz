const Sequelize = require('sequelize')
const sequelize = require('./connection');

module.exports =  sequelize.define('registration', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  work_experience_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'work_experience',
      key: 'id'
    }
  },
  girl_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'girl',
      key: 'id'
    }
  },
  status: {
    type: Sequelize.STRING,
    allowNull: true
  },
  registration_date: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  response: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  tableName: 'registration'
});
