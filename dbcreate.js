process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var pgtools = require('pgtools');
var config = require('./config/config.js');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database, config.user, config.password, config);

sequelize
  .authenticate()
  .then(function () {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection");
    config.database = null;
    CreateDB();
    CreateDBTeste();
  });

function CreateDB(){
  pgtools.createdb(config, 'users-development', function (err, res) {
    if (err) {
      console.error(err);
    }
    else{
      console.log(res);
    }
  });
}

function CreateDBTeste(){
  pgtools.createdb(config, 'users-test', function (err, res) {
    if (err) {
      console.error(err);
    }
    else{
      console.log(res);
    }
  });
}
