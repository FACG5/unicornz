const {girl} = require('../models');
const snakeCase = require('snakecase-keys');

exports.post= async (request,response)=>{
  let arr =[];
  try{
    let result;
    const { girlId } = request.body;
    console.log('request.body',request.body);
    const data =snakeCase(request.body);
    console.log('snaked data',data);
    result= await girl.update({...data},{where: {id:girlId}});
    console.log('result after update',result);
    const girlData = await girl.findOne(  {where: {id:girlId }} );
    console.log('girlData',girlData);
    arr =  Object.values(girlData.dataValues); // convert object to array
    const newArr = arr.filter(elm => elm != null);
    const percent = ((newArr.length / arr.length ) * 100 );
    girl.update( { percentage: percent }, {where: {id:girlId}} )
  }catch(error){
    console.log('error:',error);
  }
}
