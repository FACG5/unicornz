const app = require('./app');
const  {connection}  = require('./database/models')
connection.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log('app runs on port', app.get('port'));
  });
}).catch((err)=>{
  console.log(err);
});
