var express = require('express');
var path = require('path');
var fs = require('fs');
var logger = require('morgan');

var app = express();

app.use(logger('combined'));

var staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

app.use(function(request, response) {
  response.status(404);
  response.send('Datei nicht gefunden!');
});

app.use(function(error, request, response, next) {
  console.error(error);
  next(error);
});

app.use(function(error, request, response, next) {
  response.status(500);
  response.send('Interner Serverfehler!');
});

app.listen(3000, function() {
	console.log('App started on port 3000');
});