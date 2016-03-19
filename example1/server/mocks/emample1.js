/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var emample1Router = express.Router();

  emample1Router.get('/', function(req, res) {
    res.send({
      'emample1': []
    });
  });

  emample1Router.post('/', function(req, res) {
    res.status(201).end();
  });

  emample1Router.get('/:id', function(req, res) {
    res.send({
      'emample1': {
        id: req.params.id
      }
    });
  });

  emample1Router.put('/:id', function(req, res) {
    res.send({
      'emample1': {
        id: req.params.id
      }
    });
  });

  emample1Router.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/emample1', require('body-parser').json());
  app.use('/api/emample1', emample1Router);
};
