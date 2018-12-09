const {girl} = require('../models');
const snakeCase = require('snakecase-keys');

exports.post= async (request,response)=>{
  try{
    let result;
    console.log('hi there{{{{{{{{{{{{{{request.body}}}}}}}}}}}}}}',request.body);
    const data =snakeCase(request.body);
    console.log('data><><><><><>>>>>',data);
    console.log({...data});
    result= await girl.update({...data},{where: {id:12}});
    console.log('nest');
    console.log('console.log(1);',result);
  }catch(error){
    console.log('error:::...',error);
  }
}
