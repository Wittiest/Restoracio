//routes

module.exports = function(app){

  app.get('/', function (req, res) {
    res.render('landing');
  });

  app.get('/home', function (req, res) {
    res.render('index');
  });

  app.get('/about', function (req, res) {
    res.render('about');
  });

  app.get('/team', function (req, res) {
    res.render('team');
  });
}
