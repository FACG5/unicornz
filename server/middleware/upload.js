const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const {s3Config,s3Region,s3Bucket} = require('../../config');

aws.config.update(s3Config);
aws.config.region=s3Region;
const s3 = new aws.S3();

const uploads3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: s3Bucket,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, `${Date.now().toString()}-${file.originalname}`)
    }
  })
}
);
module.exports =uploads3
