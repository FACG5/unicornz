const {girl} = require('../models');
const snakeCase = require('snakecase-keys');

exports.post= async (request,response)=>{
  try{
    let result;
    const { girlId } = request.body;
    const data =snakeCase(request.body);
    result= await girl.update({...data},{where: {id:girlId}});
  }catch(error){
    console.log('error:',error);
  }
}
