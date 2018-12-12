const {girl} = require('../models');
const snakeCase = require('snakecase-keys');

exports.post= async (request,response)=>{
  let arr =[];
   try{
    let result;
    const { girlId } = request.body;
    console.log('girlId', girlId)
    const data =snakeCase(request.body);
    console.log('data', data)
    result= await girl.update({...data},{where: {id:girlId}});
    const girlData = await girl.findOne(  {where: {id:girlId }} );
    console.log('girlDAta', girlData)
    arr =  Object.values(girlData.dataValues); // convert object to array
    console.log('arr', arr)
    const newArr = arr.filter(elm => elm != null);
    console.log('newarr', newArr)
    const percent = ((newArr.length / arr.length ) * 100 );
    console.log('percentage', percent)
    girl.update( { percentage: percent }, {where: {id:girlId}} )
  }catch(error){
    console.log('error:',error);
  }
}
