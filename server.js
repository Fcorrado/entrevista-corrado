const bodyParser = require('body-parser');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;
  mongoose = require('mongoose'),
  CreditCard = require("./api/models/creditCardModel"),

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/creditCarddb');

  app.use(bodyParser.urlencoded({ extended: true}));
  app.use(bodyParser.json());

  var routes = require('./api/routes/creditCardRoutes');
  routes(app);


app.listen(port);

console.log('creditCard RESTful API server started on: ' + port);