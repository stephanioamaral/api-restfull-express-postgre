var app = require('../../server.js');
var chai = require('chai');
var should = chai.should();
var User = require('../models/').Users;

var user;

describe('User Model Unit Tests', function(){

  beforeEach(function(done){

    user = {
      nome: 'teste',
      endereco: '{"cep":"0000000"}',
      senha: '123456',
      email: 'teste@teste.com'
    };

    done();
  });

  describe('Testing the save method', function(){

    it('Should be able to save without problems', function(){
      User.create(user)
        .then(function (newUser) {
          should.exist(newUser);
        })
        .catch(function (error){
          should.not.exist(error);
        });
		});

    afterEach(function(done) {
      User.destroy({where: {}})
        .then(function (deletedRecords) {
          done();
        })
        .catch(function (error){
          done();
        });
		});

  });

});
