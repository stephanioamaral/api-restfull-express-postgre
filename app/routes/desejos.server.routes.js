var desejos = require('../../app/controllers/desejos.server.controller');
var user = require('../../app/controllers/users.server.controller');

module.exports = function (app) {
  if(process.env.NODE_ENV == 'test')
  {
    app.route('/api/desejos')
      .get(desejos.list)
      .post(desejos.create);

     app.route('/api/desejos/:id')
      .get(desejos.read)
      .put(desejos.update)
      .delete(desejos.delete);

     app.route('/api/desejos-filter')
      .post(desejos.filter);
  }
  else
  {
   app.route('/api/desejos')
     .get(user.verify, desejos.list)
     .post(user.verify, desejos.create);

    app.route('/api/desejos/:id')
     .get(user.verify, desejos.read)
     .put(user.verify, desejos.update)
     .delete(user.verify, desejos.delete);

    app.route('/api/desejos-filter')
     .post(user.verify, desejos.filter);
   }
};
