const { girl } = require('../models');


exports.get = async (request, response) => {
        const { girlId } = request.params;
  try {
      const result = await  girl.findAll({ where: { id: girlId } });
    
    if (result) {
      response.status(200).send(result[0]);

    } else {
      response.status(404).send('No such data');
    }
  }catch(error){
    console.log(error);
    response.status(500).send('server Erorr') ;
  }
}
