process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;

var express = require('./config/express');

var app = express();

app.listen(port);
module.exports = app;

console.log('Server running at http://localhost:'+port+'/');
