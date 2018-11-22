
exports.get= async(request,response)=>{
  try{
  
    response.send({
      name:'Marie Clare',
      city:'london',
      age:'32',
      favouritSubject:'Math',
      infoCompletion:'68',
      email:'Marie@gmail.com',
      mobile:'0599089478'});
  }catch(error){
    console.log(error);
  }
}
