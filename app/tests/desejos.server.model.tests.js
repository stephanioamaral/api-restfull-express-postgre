var app = require('../../server.js');
var chai = require('chai');
var should = chai.should();
var User = require('../models/').Users;
var Desejo = require('../models/').Desejos;

var user, desejos;

describe('Desejos Model Unit Tests', function(){

  beforeEach(function(done){

    user = {
      nome: 'teste',
      endereco: '{"cep":"0000000"}',
      senha: '123456',
      email: 'teste@teste.com'
    };

    desejo = {
      nome: 'teste',
      descricao: 'descricao',
      valor: 1
    };

    User.create(user)
      .then(function (newUser) {
        done();
      })
      .catch(function (error){
        done();
      });

  });

  describe('Testing the save method', function(){

    it('Should be able to save without problems', function(){
      desejo.user_id = user.id;

      Desejo.create(desejo)
        .then(function (newDesejo) {
          should.exist(newDesejo);
        })
        .catch(function (error){
          should.not.exist(error);
        });
		});

    it('Should not be able to save', function(){
      desejo.user_id = -1;

      Desejo.create(desejo)
        .then(function (newDesejo) {
          should.not.exist(newDesejo);
        })
        .catch(function (error){
          should.exist(error);
        });
		});

    afterEach(function(done) {
      User.destroy({where: {}})
        .then(function (deletedRecordsUsers) {
          Desejo.destroy({
              where: {}
            })
            .then(function (deletedRecordsDesejos) {
              done();
            })
            .catch(function (error){
              done();
            });
        })
        .catch(function (error){
          done();
        });
		});

  });

});
