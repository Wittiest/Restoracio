//controllers go here

module.exports = function(app){
  app.get('/', function (req, res) {
    res.render('server-test');
  });
}
