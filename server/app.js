const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const router = require('./controllers');
const { authCheck } = require('./authentication/authentication');

const app = express();
app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cookieParser());

app.use((req, res, next) => {
  authCheck(req, (authErr, token) => {
    if (authErr) {
      req.token = null;
      req.userauthed = false;
      next();
    } else {
      req.token = token;
      req.userauthed = true;
      if (token.role === 'admin') {
        req.admin = true;
      } else {
        req.admin = false;
      }
      next();
    }
  });
});


app.disable('x-powered-by');


// app.use(router);

module.exports = app;
