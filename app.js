// Generated by CoffeeScript 1.7.1
(function() {
  var app, express, logfmt, port;

  express = require('express');

  logfmt = require('logfmt');

  app = express();

  app.use(logfmt.requestLogger());

  app.get('/', function(req, res) {
    var loadtest, options;
    loadtest = require('loadtest');
    options = {
      url: 'http://agile-ridge-7948.herokuapp.com/',
      maxRequests: 1000,
      requestsPerSecond: 300
    };
    return loadtest.loadTest(options, function(error, result) {
      if (error) {
        return res.send('Test failed la la la');
      }
      return res.send('Tests run successfully! hi hi hi ghost');
    });
  });

  port = Number(process.env.PORT || 5000);

  app.listen(port, function() {
    return console.log('Listening on ' + port);
  });

}).call(this);
