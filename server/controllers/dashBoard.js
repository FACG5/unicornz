const { girl } = require('../models');

exports.get = async (request, response) => {
  try {
    const result = await girl.findAll({ raw: true , where: { id: 1}  });
    if (result) {
      response.status(200).send(result[0]);
    } else {
      response.status(404).send('No such data');
    }
  }catch(error){
    response.status(500).send('server Erorr') ;
  }
}
