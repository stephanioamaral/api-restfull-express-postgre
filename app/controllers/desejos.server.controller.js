var Desejos = require('../models/').Desejos;
var config = require('../../config/config.js');

/**
 * @api {post} api/desejos Create Desejo
 * @apiName CreateDesejo
 * @apiGroup Desejos
 *
 * @apiParam {String} nome Nome do desejo.
 * @apiParam {String} descricao Descrição do desejo.
 * @apiParam {Number} valor Valor do desejo.
 *
 * @apiSuccess {Object} desejo Retorna um objeto que contém as informações do desejo cadastrado.
 */
exports.create = function(req, res){

  req.body.user_id = req.decoded.id;

  Desejos.create(req.body)
    .then(function (newDesejo) {
      res.status(200).json(newDesejo);
    })
    .catch(function (error){
      res.status(500).json(error);
    });

};

/**
 * @api {get} api/desejos Get Desejos
 * @apiName GetDesejos
 * @apiGroup Desejos
 *
 * @apiHeader {String} x-access-token Users unique access-key.
 *
 * @apiSuccess {Object} desejos Retorna um objeto que contém uma lista de desejos.
 */
exports.list = function(req, res){
  Desejos.findAll({
      where: {
        user_id: req.decoded.id
      }
    })
  .then(function (desejos) {
    res.status(200).json(desejos);
  })
  .catch(function (err){
    res.status(500).json(err);
  });
};

/**
 * @api {post} api/desejos-filter Get Desejos by Filter
 * @apiName GetDesejosFilter
 * @apiGroup Desejos
 *
 * @apiHeader {String} x-access-token Users unique access-key.
 *
 * @apiSuccess {Object} desejos Retorna um objeto que contém uma lista de desejos que se encaixam no filtro.
 */
exports.filter = function(req, res){
  Desejos.findAll({
      where: {
        user_id: req.decoded.id,
        nome: {$like: req.body.filter+"%"}
      }
    })
  .then(function (desejos) {
    res.status(200).json(desejos);
  })
  .catch(function (err){
    res.status(500).json(err);
  });
};

/**
 * @api {get} api/desejos/:id Get Desejo by ID
 * @apiName GetDesejo
 * @apiGroup Desejos
 *
 * @apiHeader {String} x-access-token Users unique access-key.
 *
 * @apiParam {Number} id ID do desejo.
 *
 * @apiSuccess {Object} desejo Retorna um objeto que contém as informações do desejos.
 */
exports.read = function(req, res){
  Desejos.findById(req.params.id)
  .then(function (desejo) {
    res.status(200).json(desejo);
  })
  .catch(function (error){
    res.status(500).json(error);
  });
};

/**
 * @api {put} api/desejos/:id Update Desejo
 * @apiName UpdateDesejo
 * @apiGroup Desejos
 *
 * @apiHeader {String} x-access-token Users unique access-key.
 *
 * @apiParam {Number} id ID do desejo.
 *
 * @apiParam {String} nome Nome do desejo.
 * @apiParam {String} descricao Descrição do desejo.
 * @apiParam {Number} valor Valor do desejo.
 *
 * @apiSuccess {Number} updatedRecords Retorna o número de registros alterados.
 */
exports.update = function(req, res){
  Desejos.update(req.body, {
    where: {
      id: req.params.id,
      user_id: req.decoded.id
    }
  })
  .then(function (updatedRecords) {
    res.status(200).json(updatedRecords);
  })
  .catch(function (error){
    res.status(500).json(error);
  });
};

/**
 * @api {delete} api/desejos/:id Delete Desejo
 * @apiName DeleteDesejo
 * @apiGroup Desejos
 *
 * @apiHeader {String} x-access-token Users unique access-key.
 *
 * @apiParam {Number} id ID do desejo.
 *
 * @apiSuccess {Number} deletedRecords Retorna o número de registros deletados.
 */
exports.delete = function(req, res){
  Desejos.destroy({
      where: {
        id: req.params.id,
        user_id: req.decoded.id
      }
    })
    .then(function (deletedRecords) {
      res.status(200).json(deletedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
};
