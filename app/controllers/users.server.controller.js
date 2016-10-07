var User = require('../models/').Users;
var jwt = require('jsonwebtoken');
var config = require('../../config/config.js');
var requestify = require('requestify');

function GetEndereco(cep){

}

exports.authenticate = function(req, res){

  User.findOne({
    where: {
      email: req.body.email,
      senha: req.body.senha
    }
  })
  .then(function (user) {
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    }
    else if (user) {
      var token = jwt.sign({"id":user.id}, config.tokenSecret, {
        expiresIn: 60 * 60 // expires in 24 hours
      });

      // return the information including token as JSON
      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
      });
    }
  })
  .catch(function (err){
    res.status(500).json(err);
  });
};

exports.verify = function(req, res, next){

  var token =  req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, config.tokenSecret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  }
  else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }

};

exports.create = function(req, res){

  requestify.get('http://correiosapi.apphb.com/cep/'+req.body.cep).then(function(response) {
    response.getBody();
    // Get the response raw body
    req.body.endereco = response.body;

    User.create(req.body)
      .then(function (newAuthor) {
        res.status(200).json(newAuthor);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  })
  .catch(function (error){
    res.status(500).json(error);
  });

};

exports.list = function(req, res){
  User.findAll()
  .then(function (authors) {
    res.status(200).json(authors);
  })
  .catch(function (err){
    res.status(500).json(err);
  });
};

exports.read = function(req, res){
  User.findById(req.params.id)
  .then(function (author) {
    res.status(200).json(author);
  })
  .catch(function (error){
    res.status(500).json(error);
  });
};

exports.update = function(req, res){
  User.findById(req.params.id)
  .then(function (author) {
    res.status(200).json(author);
  })
  .catch(function (error){
    res.status(500).json(error);
  });
};

exports.delete = function(req, res){
  User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords) {
      res.status(200).json(deletedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
};
