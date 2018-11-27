const app = require('./app');
const {
  connection,
  girl,
  school,
  company
} = require('./models')
const Sequelize = require('sequelize')

connection.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log('app runs on port', app.get('port'));
  });

  //Fake data generation code: Delete this section later
  // school.destroy({
  //   where: {
  //     id: {
  //       [Sequelize.Op.gt]: 6
  //     }
  //   }
  // }).then(() => {
  //   company.destroy({
  //     where: {}
  //   }).then(() => {
  //     girl.destroy({
  //       where: {}
  //     }).then(() => {
  //       for (var i = 1; i <= 50; i++) {
  //         girl.create({
  //           user_name: "eve" + i,
  //           first_name: "Eyvon" + i,
  //           last_name: "fishwall",
  //           email: `eve${i}@hotmail.com`,
  //           school_id: (i % 2 === 0) ? 1 : 2,
  //           other_school: null,
  //           birthdate: '2000-01-01T00:00:00',
  //           password: '$2a$10$b87/SM7GS1rjoFV2i8z5X.dGGQcZPW8l.fhVHxgg89GnOBAGLlf7a'
  //         })

  //         school.create({
  //           name: 'school' + i
  //         });
  //         company.create({

  //           company_name: 'company' + i,
  //           mobile: '123456789-' + i,
  //           website: `www.company${i}.com`,
  //           email: `company${i}@hotmail.com`,
  //           facebook: `www.facebook.com/company${i}`,
  //           password: '$2a$10$b87/SM7GS1rjoFV2i8z5X.dGGQcZPW8l.fhVHxgg89GnOBAGLlf7a'
  //         });
  //       }
  //     });
  //   });
  // });
  //End of face data generation section : delete to this mark
  
}).catch(err=>console.log(err));
