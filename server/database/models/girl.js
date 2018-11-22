const Sequelize = require('sequelize')
const sequelize = require('../config/index.js');

module.exports =  sequelize.define('girl', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false
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
    allowNull: false
  },
  school_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'school',
      key: 'id'
    }
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
  }
}, {
  tableName: 'girl'
});
