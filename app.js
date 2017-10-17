require('dotenv').config();
const express     = require('express');
const path        = require('path');
const bodyParser  = require('body-parser');
const port        = 3000;
const app         = express();

//init
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./client")));
app.set("views", path.join(__dirname, "./client"));
app.set('view engine', 'ejs');

//routes
require('./server/config/routes.js')(app);

//db?

//listen
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
