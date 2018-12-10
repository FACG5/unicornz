const dbConfig = (env) => {
  if (env === 'production') {
    return {
      // database: process.env.DB_PRODUCTION_URL,
      password:  process.env.PRODUCTION_DB_PASSWORD,
      username:  process.env.PRODUCTION_DB_USERNAME,
      host:      process.env.PRODUCTION_DB_HOST,
      dbname:    process.env.PRODUCTION_DB_NAME,
      dialect:   'postgres',
    };
  }
  if (env === 'development') {
    return {
      username: process.env.username,
      password: process.env.password,
      dbname: process.env.dbname,
      host: process.env.host,
      dialect: 'postgres',
    };
  }
  throw new Error(
    'specify enviroment, only "test" and "development" is available now',
  );
};
const s3Config={
  accessKeyId :'AKIAITEPPOH6P2Q4Z44A',
  secretAccessKey:'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',
};
const s3Region ='us-east-1';
const s3Bucket ='unicornz-gaza';
module.exports = {
  DB_CONFIG: dbConfig(process.env.NODE_ENV),
  s3Config,
  s3Region,
  s3Bucket
};
