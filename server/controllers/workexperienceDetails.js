const { work_experience, company } = require('../models');


exports.get = async (request, response) => {
   
    const { companyId } = request.params;
      
  try {
    const result = await  work_experience.findOne({ include:[{ model: company,
    where: {id : companyId } }] });
    
    if (result) {
      
      response.json(result);
    } else {
      response.status(404).send('No work experience found');
    }
  } catch (error) {

    response.status(500).send('Server Error !');
  }
};