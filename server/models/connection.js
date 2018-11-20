const Sequelize = require('sequelize');
require('env2')('config.env');
console.log("before");
const {
  DB_CONFIG
} = require('../../config.js');
console.log("after");
const {
  username,
  password,
  dbname,
  host,
  dialect,
} = DB_CONFIG;

module.exports = new Sequelize(dbname, username, password, {
  host,
  dialect,
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