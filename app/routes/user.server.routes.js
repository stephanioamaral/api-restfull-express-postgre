var user = require('../../app/controllers/users.server.controller');

module.exports = function (app) {

  app.route('/api/authenticate')
     .post(user.authenticate);

  app.route('/api/user')
     .get(user.verify, user.list)
     .post(user.create);

  app.route('/api/user/:id')
     .get(user.verify, user.read)
     .put(user.verify, user.update)
     .delete(user.verify, user.delete);

};
