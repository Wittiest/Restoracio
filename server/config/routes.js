//routes

module.exports = function(app){

  app.get('/', function (req, res) {
    res.render('pages/landing');
  });

  app.get('/home', function (req, res) {
    res.render('pages/dashboard');
  });

  app.get('/about', function (req, res) {
    res.render('pages/about');
  });

  app.get('/team', function (req, res) {
    res.render('pages/team');
  });
}
