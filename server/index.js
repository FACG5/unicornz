const app = require('./app');
const { sequelize } = require('./models')
console.log('before sync');
sequelize.sync().then(() => {
  console.log("after sync")
  app.listen(app.get('port'), () => {
    console.log('app runs on port', app.get('port'));
  });
});