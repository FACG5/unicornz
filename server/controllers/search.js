const { work_experience ,company } = require('../models');''
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.post = async (request, response) => {
  try {
    const {location,subject}=request.body;
    let result = [];
    if (location =='' && (subject==''|| subject=='All')) {
      result = await work_experience.findAll({include:[{model:company}]});
    }else if (location =='' || (subject==''||subject=='All')) {
      result = await work_experience.findAll({include:[{model:company}] ,where:{ [Op.or]: [{location:{[Op.iLike]: location}}, {subject:subject}] }});
    }else {
      result = await work_experience.findAll({include:[{model:company}] , where:{  location:{[Op.iLike]: location} ,subject:subject}});
    }
    if (result) {
      if (result.length>0) {
        response.status(200).send(result);
      }else {
        response.status(200).send('No Such Data');
      }
    } else {
      response.status(404).send('404 error');
    }
  }catch(error){
    console.log(error);
    response.status(500).send('500 error') ;
  }
}
