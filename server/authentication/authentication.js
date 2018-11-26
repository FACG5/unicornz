const { sign, verify } = require('jsonwebtoken');
require('env2')('config.env');

const createCookie = (user, cb) => {
  sign(user, process.env.SECRET, (signerror, token) => {
    if (signerror) { cb(signerror); } else {
      cb(null, token);
    }
  });
};

const getTokenData = (data, cb) => {
  verify(data, process.env.SECRET, (err, decoded) => {
    if (err) {
      return cb("Error verifying the token");
    }
    cb(null, decoded);
    return true;
  });
};

const authCheck = (request, cb) => {
  if (!request.cookies) {
    return cb(new TypeError());
  }

  const { data } = request.cookies;

  if (!data) {
    return cb("No authentication data");
  }
  getTokenData(data, (err, decoded) => {
    if (err) {
      return cb(err);
    }
    cb(null, decoded);
    return true;
  });
  return true;
};


const promiseAuthCheck = request => new Promise((res, rej)=>{

  if (!request.cookies) {
    rej('no  cookies found');
  }
  const { data } = request.cookies;
  if (!data) {
    rej("No authentication data found");
  }
  getTokenData(data, (err, decoded) => {
    if (err) {
      rej(err);
    }
    res(decoded);
  });
})

module.exports = { createCookie, getTokenData, authCheck, promiseAuthCheck };
