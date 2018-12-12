const { girl } = require('../models');
const { verify } = require('jsonwebtoken');
const sequelize = require('../models/connection');

exports.post = async (request, response) => {
  const fileLinlk=request.files[0].location;
  console.log('rrrrrrrrrrrr', fileLinlk)
  try {
    if (fileLinlk) {
      if (request.cookies.jwt) {
        const { jwt } = request.cookies;
        let girlId;
        verify(jwt, process.env.SECRET, (err, result) => {
          if (err) {
          } else {
            const { id } = result;
            girlId = id;
            console.log('gggggggggggg', girlId)
          }
        });
        console.log('ssssssssqq', sequelize.fn('array_append', sequelize.col('files'), fileLinlk))
        const result=  await girl.update({files: sequelize.fn('array_append', sequelize.col('files'), fileLinlk)},{where: {id:girlId}});
      }else {
        response.status(200).send('not authorized');
      }response.status(200).send('Successfully uploaded ');
    } else {
      response.status(404).send('failed to upload data');
    }
  }catch(error){
    console.log('catch error:',error);
    response.status(500).send('server Erorr') ;
  }
}
