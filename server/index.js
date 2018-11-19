const app = require('./app');
const { sequelize } = require('./models')

sequelize.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log('app runs on port', app.get('port'));
  });
});