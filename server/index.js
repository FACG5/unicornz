const app = require('./app');
const { sequelize, girl, school } = require('./models')
sequelize.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log('app runs on port', app.get('port'));
  });
  girl.destroy({where:{}}).then(()=>{
  for(var i =1;i<=50;i++){
  girl.create({
    user_name: "eve" + i,
    first_name: "Eyvon"+ i,
    last_name: "fishwall",
    email: `eve${i}@hotmail.com`,
    school_id: (i%2===0)?1:2,
    other_school: null,
    birthdate: '2000-01-01T00:00:00',
    password: '$2a$10$b87/SM7GS1rjoFV2i8z5X.dGGQcZPW8l.fhVHxgg89GnOBAGLlf7a'
  })

}
})
})