const {girl} = require('../models');
const snakeCase = require('snakecase-keys');

exports.post= async (request,response)=>{
  let arr =[];
   try{
    let result;
    const { girlId } = request.body;
    const data =snakeCase(request.body);
    result= await girl.update({...data},{where: {id:girlId}});
    const girlData = await girl.findOne(  {where: {id:girlId }} );
    arr =  Object.values(girlData.dataValues); // convert object to array
    const newArr = arr.filter(elm => elm != null);
    const percent = ((newArr.length / arr.length ) * 100 );
    girl.update( { percentage: percent }, {where: {id:girlId}} )
  }catch(error){
    console.log('error:::...',error);
  }
}
