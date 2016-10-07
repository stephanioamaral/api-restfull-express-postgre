'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('Users', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    endereco: DataTypes.JSON
  },
  {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Desejos, {
          onDelete: 'cascade'
        });
      }
    }
  });
  return User;
};
