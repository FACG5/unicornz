const Sequelize = require('sequelize');
require('env2')('config.env');

module.exports = new Sequelize(process.env.dbname, process.env.username, process.env.password, {
  host: process.env.host,
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    underscored: true,
    timestamps: false,
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
