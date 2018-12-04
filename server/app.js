const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./controllers');

const app = express();
app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.disable('x-powered-by');


app.use(express.static(path.join(__dirname, '..', 'client','build')));

app.use('/api/v1', router);

app.use('*' , (req,res)=>{
  res.sendFile(path.join(__dirname, '..', 'client','build','index.html'))
})





app.disable('x-powered-by');
module.exports = app;
