const Sequelize = require('sequelize');
require('env2')('config.env');
const {
  DB_CONFIG
} = require('../../config.js');
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
  native: true,
  // sync: { force: true }, add this when you want to update the postgre db structure with respect to the models otherwise you will get an error
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
    ssl: false,
  },
});