process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config.js');

module.exports = {
    development: {
    url: 'postgres://'+config.user+':'+config.password+'@'+config.host+':'+config.port+'/'+config.database,
    dialect: 'postgres'
  },
    production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
    staging: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
    test: {
    url: process.env.DATABASE_URL || 'postgres://'+config.user+':'+config.password+'@'+config.host+':'+config.port+'/'+config.database,
    dialect: 'postgres'
  }
};
