module.exports = function(app) {
  var express = require('express');
  var blogsRouter = express.Router();

  blogsRouter.get('/', function(req, res) {
    res.send({
      'blogs': []
    });
  });

  blogsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  blogsRouter.get('/:id', function(req, res) {
    res.send({
      'blogs': {
        id: req.params.id
      }
    });
  });

  blogsRouter.put('/:id', function(req, res) {
    res.send({
      'blogs': {
        id: req.params.id
      }
    });
  });

  blogsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/blogs', blogsRouter);
};
