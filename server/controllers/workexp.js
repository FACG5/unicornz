const {work_experience, company} = require('../models')
const bcrypt = require('bcryptjs');

exports.submitJob = (request, response) =>{

    const {
        password,
        ...rest
  } = request.body;
  console.log(request.body.company_id);
  company.findAll({where:{id:request.body.company_id}})
  .then(res =>{
      if(res.length === 0){
          response.json({msg:'there is no company with that id', status:'failed'})
      } else {
          bcrypt.compare(password, res[0].dataValues.password, (compareerr, compareresult)=>{
              if(compareerr){
                  response.json({msg:'error comparing passwords', status:'failed'})
              } else {
                  if(compareresult){
                    work_experience.create(rest)
                    .then(()=>{
                       response.json({msg:'data inserted successfuly', status: 'success'});
                    })
                    .catch(err =>{
                        console.log(err);   
                        response.json({msg:err.message,status:'failed'});
                    })
                  } else {
                      response.json({msg:'The password entered is incorrect!', status: 'failed'});
                  }
              }
          })
      }
  })
  
}