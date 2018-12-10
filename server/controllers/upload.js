exports.post = async (request, response) => {
  console.log('files',request.files[0].location);
  try {
    if (true) {
      response.status(200).send('Successfully uploaded ');
    } else {
      response.status(404).send('No such data');
    }
  }catch(error){
    console.log(error);
    response.status(500).send('server Erorr') ;
  }
}
