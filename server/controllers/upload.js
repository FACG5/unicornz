
// exports.post=(req, res, next) =>{
//   res.send('Successfully uploaded files!')
// }

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

/****/
// const AWS = require('aws-sdk');
// const fs = require('fs');
// const fileType = require('file-type');
// const bluebird = require('bluebird');
//
// exports.post = async (req, res) => {
//   console.log('1....');
//   const {s3Config,s3Region,s3Bucket} = require('../../config');
//   AWS.config.update(s3Config);
//   AWS.config.region=s3Region;
//   AWS.config.setPromisesDependency(bluebird);
//
//   const s3 = new AWS.S3();
//
//   const uploadFile = (buffer, name) => {
//     console.log('shittttt',buffer);
//     const params = {
//       ACL: 'public-read',
//       Body: buffer,
//       Bucket: s3Bucket,
//       Key: `${name}`
//     };
//     return new Promise((Resolve, Reject)=>{
//       s3.upload((params,err)=>{
//         if (err) Reject(err)
//         Resolve()
//       })
//     })
//   };
//   try {
//     const buffer = req.body;
//     console.log(';;;;buffer',buffer);
//     // const type = fileType(buffer);
//     const timestamp = Date.now().toString();
//     const fileName = `girlDox/${timestamp}`;
//     console.log(';;;;fileName',fileName);
//     const data = await uploadFile(buffer, fileName);
//     console.info('info ', data);
//     return res.status(200).send(data);
//   } catch (error) {
//     console.info('err ', error);
//     return res.status(400).send(error);
//   }
//
// }
/****/
