var _ = require('lodash');
var express = require('express');
var passport = require('passport');

var Article = require('../../models/article');

var router = express.Router();

router.get('/', function(req, res) {
  Article.find(function(err, articles) {
    if (err) {
      res.status(err.status || 404);
      res.json({ err });
    }

    if (_.isNull(articles)) {
      res.json([]);
    } else {
      res.json(articles);
    }
  });
});

router.get('/:url', function(req, res) {
  Article.findOne({ url: req.params.url }, function(err, article) {
    if (err) {
      res.status(err.status || 404);
      res.json({ err });
    }

    res.json(article);
  });
});

router.post('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  const article = new Article({
    title: req.body.title,
    body: req.body.body,
    image: req.body.image,
    url: req.body.url
  });

  article.save(function(err, article) {
    if (err) {
      res.status(err.status || 400);
      res.json({ err });
    }

    res.json(article);
  });
});

router.patch('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  Article.findOneAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      body: req.body.body,
      image: req.body.image,
      url: req.body.url
    },
    function(err, article) {
      if (err) {
        res.status(err.status || 400);
        res.json({ err });
      }

      res.json(article);
    }
  );
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  Article.deleteOne({ _id: req.params.id }, function(err) {
    if (err) {
      res.status(err.status || 400);
      res.json({ err });
    }

    res.json({ success: 'ok' });
  });
});

module.exports = router;
