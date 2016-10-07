module.exports = function (app) {
	/* body... */
	app.get('*', function(req, res){
	  	 res.redirect('/');
	});
};
