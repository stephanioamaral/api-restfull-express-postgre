'use strict';
module.exports = function(sequelize, DataTypes) {
  var Desejos = sequelize.define('Desejos', {
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    valor: DataTypes.DOUBLE
  },
  {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Desejos;
};
