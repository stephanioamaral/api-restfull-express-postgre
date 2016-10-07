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

  require('../app/routes/user.server.routes.js')(app);
	require('../app/routes/desejos.server.routes.js')(app);

  app.use(express.static('./public'));

  require('../app/routes/otherwise.server.routes.js')(app);

  return server;

};
