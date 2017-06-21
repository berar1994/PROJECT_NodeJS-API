var express = require('express');
var mongoConfig = require('./config/mongo.config');
var mongoose = require('mongoose');
var Task = require('./api/models/task.model');
var bodyParser = require('body-parser');
var routes = require('./api/routes/routes');

var app = express();
var port = process.env.PORT || 3000;


mongoose.Promise = global.Promise;
mongoose.connect(mongoConfig.connect.url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(function(req, res){
//    res.status(404).send({url: req.originalUrl + ' not found'});
//});

routes(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);
