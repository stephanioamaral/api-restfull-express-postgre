var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function () {

  var app = express();
	var server = http.createServer(app);

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());

  return server;

}
