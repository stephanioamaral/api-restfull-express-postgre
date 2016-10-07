var user = require('../../app/controllers/users.server.controller');

module.exports = function (app) {
  if(process.env.NODE_ENV == 'test')
  {
    app.route('/api/authenticate')
       .post(user.authenticate);

    app.route('/api/user')
       .get(user.list)
       .post(user.create);

    app.route('/api/user/:id')
       .get(user.read)
       .put(user.update)
       .delete(user.delete);
  }
  else
  {
    app.route('/api/authenticate')
       .post(user.authenticate);

    app.route('/api/user')
       .get(user.verify, user.list)
       .post(user.create);

    app.route('/api/user/:id')
       .get(user.verify, user.read)
       .put(user.verify, user.update)
       .delete(user.verify, user.delete);
   }
};
