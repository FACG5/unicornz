const { work_experience, company } = require('../models');

exports.get = async (request, response) => {
  
  try {
    
    const result = await  work_experience.findAll({ include:[{ model: company }] });    
    
    if (result) {      
      
      response.status(200).json(result);
    } else {
      
      response.status(404).send('No work experience found');

    }
  } catch (error) {
    
    response.status(500).send('Server Error !');
  }
};