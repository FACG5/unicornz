const dbConfig = (env) => {
    if (env === 'production') {  
     return {
        // database: process.env.DB_PRODUCTION_URL,
        password: '070cd6210a8cb1e5581ad656a1c1f3f321df4db24a3629144e692dbf1236ab4e',
        username: 'szuewzihldzcfc',
        host: 'ec2-54-246-85-234.eu-west-1.compute.amazonaws.com',
        dbname: 'd78c9bjbgu9em5',
        dialect: 'postgres',
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
  module.exports = {
    DB_CONFIG: dbConfig(process.env.NODE_ENV),
  };
