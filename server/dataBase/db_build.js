
const dbconnection = require('./db_connection');
const fs = require('fs');

const sql = fs.readFileSync(`${__dirname}/db.sql`).toString();
const dbConnect = cb => {
    dbconnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res);
  });
};

dbConnect((err, result) => {
  if (err) return console.log(err);
  return console.log('Unicornz database has been initialized');
});

module.exports = dbConnect;