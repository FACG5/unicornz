const app = require('./app');
const {connection} = require('./models');
const Sequelize = require('sequelize')

connection.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log('app runs on port', app.get('port'));
  });
}).catch(err=>console.log(err));
//{force:true}
