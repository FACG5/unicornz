const app = require('./app');
// const {
//   connection,
//   girl,
//   school,
//   company
// } = require('./models')
const {connection} = require('./models');
const Sequelize = require('sequelize')

connection.sync({}).then(() => {

  app.listen(app.get('port'), () => {
    console.log('app runs on port', app.get('port'));
  });
}).catch(err=>console.log(err));
