var app = require('../../server.js');
var request = require('supertest');
var chai = require('chai');
var should = chai.should();

var User = require('../models/').Users;

var user;

describe('User Controller Unit Tests', function(){

  beforeEach(function(done){

    user = {
      id : 1,
      nome: 'teste',
      endereco: '{"cep":"0000000"}',
      senha: '123456',
      email: 'teste@teste.com'
    };

    User.create(user)
      .then(function (newUser) {
        done();
      })
      .catch(function (error){
        done();
      });

  });

  describe('Testing the GET methods', function(){

    it('Should be able to get the list of users', function(done){
			request(app).get('/api/user/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					res.body.should.be.an.Array;
					res.body.should.have.lengthOf(1);
					res.body[0].should.have.property('nome', user.nome);
					res.body[0].should.have.property('email', user.email);
					res.body[0].should.have.property('endereco', user.endereco);
					res.body[0].should.have.property('senha', user.senha);
					done();
				});
		});

    it('Should be able to get the specific user', function(done) {
			request(app).get('/api/user/' + user.id)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					res.body.should.be.an.Object;
          res.body.should.have.property('nome', user.nome);
					res.body.should.have.property('email', user.email);
					res.body.should.have.property('endereco', user.endereco);
					res.body.should.have.property('senha', user.senha);
					done();
				});
		});

    it('Should be able to create a user', function(done){
      var create = {
        id : 2,
        nome: 'teste2',
        cep: '30380252',
        senha: '123456',
        email: 'teste2@teste.com'
      };

			request(app).post('/api/user/')
				.send(create)
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res){
					should.not.exist(err);
					res.body.should.be.an.Object;
          res.body.should.have.property('nome', create.nome);
					res.body.should.have.property('email', create.email);
					res.body.should.have.property('senha', create.senha);
					done();
				});
		});

    it('Should be able to update a user', function(done){
			user.nome = 'teste update';
			user.email = 'teste21@teste.com.br';

			request(app).put('/api/user/'+ user.id)
				.send(user)
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res){
					should.not.exist(err);
					res.body.should.be.an.Object;
					done();
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
