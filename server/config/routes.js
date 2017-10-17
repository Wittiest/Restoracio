//controllers go here
var model = require('../models/model.js');

module.exports = function(app){

  app.get('/', function (req, res) {
    // res.json(models);
    res.render('server-test', {data: model});
  });

  app.get('/home', function (req, res) {
    var data;
    data = 1;
    res.render('server-test-main');
  });
}
